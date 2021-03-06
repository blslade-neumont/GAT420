import { GameObject, GameScene, GameEvent, fmod } from '../engine';
import { Enemy } from './enemy';
import { World } from '../world';
import { tiles, TILE_SIZE, WorldTile } from '../dbs/tile-db';
import { Node, keyFromCoords } from './node';
import { Path } from './path';
import { pointDistance2 } from '../utils/math';
import { Player } from '../player';

import { NeutralState } from './states/neutral-state';
import { WanderState } from './states/wander-state';
import { ExploreState } from './states/explore-state';
import { CollectResourceState } from './states/collect-resource-state';
import { ReturnToBaseState } from './states/return-to-base-state';

const FOW_BUCKET_SIZE = 8;

type EnemyRenderMode = 'none' | 'single' | 'all';

export class EnemyController extends GameObject {
    constructor(private world: World, readonly player: Player) {
        super('EnemyController');
        this.init();
    }
    private init() {
        this.initBase();
    }
    private initBase() {
        while (true) {
            let distance = 5 + Math.random() * 10;
            let angle = 2 * Math.PI * Math.random();
            let xpos = Math.floor(Math.cos(angle) * distance);
            let ypos = Math.floor(Math.sin(angle) * distance);
            if (!this.world.getTileAt(xpos, ypos).isSolid && !this.world.getTileAt(xpos + 1, ypos).isSolid && !this.world.getTileAt(xpos, ypos + 1).isSolid && !this.world.getTileAt(xpos + 1, ypos + 1).isSolid) {
                this._baseCoords = [xpos, ypos];
                this.world.setTileAt(xpos, ypos, tiles['enemy-base']);
                break;
            }
        }
    }

    addToScene(scene: GameScene) {
        super.addToScene(scene);
        this.addEnemies(10);
    }

    get debugControls(): any[] {
        return [
            { key: 'E', name: 'enemy render mode', state: this.renderMode },
            { key: 'G', name: 'fog of war', state: this.renderFogOfWar },
            { key: 'P', name: 'enemies can see player', state: this.canSeePlayer },
            { key: 'R', name: 'enemies are afraid of player', state: this.afraidOfPlayer },
            { key: 'Ctrl+Number', name: 'force enemy state' }
        ];
    }

    private _baseCoords: [number, number] = [0, 0];
    get baseCoords(): [number, number] {
        return [this._baseCoords[0], this._baseCoords[1]];
    }

    private _enemies: Enemy[] = [];
    get enemies() {
        return this._enemies;
    }

    treasureCollected = 0;
    canSeePlayer = false;
    afraidOfPlayer = true;

    addEnemies(count: number) {
        for (let q = 0; q < count; q++)
            this.addEnemy();
        this.updateRenderDebugInfo();
    }
    private addEnemy() {
        let enemy = new Enemy(this, {
            x: (this._baseCoords[0] + 1.5) * TILE_SIZE,
            y: (this._baseCoords[1] + 1.5) * TILE_SIZE
        });
        this.enemies.push(enemy);
        this.scene.addObject(enemy);
        return enemy;
    }

    renderMode = 'all';
    renderFogOfWar = true;
    keyStates = {
        'Digit1': NeutralState,
        'Digit2': WanderState,
        'Digit3': ExploreState,
        'Digit4': ReturnToBaseState
    }
    handleEvent(evt: GameEvent) {
        if (evt.type == 'keyPressed') {
            if (evt.code == 'KeyE') {
                this.renderMode = (this.renderMode == 'none') ? 'single' :
                                (this.renderMode == 'single') ? 'all' :
                                                                'none';
                this.updateRenderDebugInfo();
            }
            else if (evt.code == 'KeyG') {
                this.renderFogOfWar = !this.renderFogOfWar;
            }
            else if (evt.code == 'KeyP') {
                this.canSeePlayer = !this.canSeePlayer;
            }
            else if (evt.code == 'KeyR') {
                this.afraidOfPlayer = !this.afraidOfPlayer;
            }
            else if (evt.ctrlPressed && this.keyStates[evt.code]) {
                let state = this.keyStates[evt.code];
                for (let enemy of this.enemies) {
                    if (!(enemy instanceof state)) {
                        enemy.states.currentState = new state(enemy);
                    }
                }
            }
        }
    }
    private updateRenderDebugInfo() {
        for (let enemy of this._enemies) {
            enemy.renderDebugInfo = this.renderMode == 'all';
        }
        if (this.renderMode == 'single' && this._enemies.length) this._enemies[0].renderDebugInfo = true;
    }

    private _fowBuckets = new Map<string, boolean[][]>();
    isInFOW(x: number, y: number) {
        let [bucketx, buckety] = [Math.floor(x / FOW_BUCKET_SIZE), Math.floor(y / FOW_BUCKET_SIZE)];
        let key = `${bucketx}_${buckety}`;
        if (!this._fowBuckets.has(key)) return true;
        let bucket = this._fowBuckets.get(key);
        let [offsetx, offsety] = [fmod(x, FOW_BUCKET_SIZE), fmod(y, FOW_BUCKET_SIZE)];
        return bucket[offsetx][offsety];
    }
    getTileAt(x: number, y: number) {
        return this.world.getTileAt(x, y);
    }
    setTileAt(x: number, y: number, tile: WorldTile) {
        return this.world.setTileAt(x, y, tile);
    }
    setFOW(x: number, y: number, val: boolean) {
        let [bucketx, buckety] = [Math.floor(x / FOW_BUCKET_SIZE), Math.floor(y / FOW_BUCKET_SIZE)];
        let key = `${bucketx}_${buckety}`;
        if (!this._fowBuckets.has(key)) {
            if (val) return;
            let row = [];
            for (let q = 0; q < FOW_BUCKET_SIZE; q++)
                row.push(true);
            this._fowBuckets.set(key, row.map(col => [...row]));
        }
        let bucket = this._fowBuckets.get(key);
        let [offsetx, offsety] = [fmod(x, FOW_BUCKET_SIZE), fmod(y, FOW_BUCKET_SIZE)];
        bucket[offsetx][offsety] = val;
    }
    clearFOW(x: number, y: number, radius: number, newVal = false) {
        let dist = Math.ceil(radius);
        let radius2 = radius * radius;
        for (let q = x - dist; q <= x + dist; q++) {
            for (let w = y - dist; w <= y + dist; w++) {
                if (pointDistance2(x, y, q, w) <= radius2) this.setFOW(q, w, newVal);
            }
        }
    }
    
    static isSolidHitCondition(tile: WorldTile) {
        return tile.isSolid;
    }
    raycast(fromx: number, fromy: number, unitx: number, unity: number, maxDist = 500, hitCondition: (tile: WorldTile) => boolean = EnemyController.isSolidHitCondition): [number, WorldTile] {
        let currx = fromx, curry = fromy;
        let currTileX = Math.floor(fromx), currTileY = Math.floor(fromy);
        let currDist = 0;
        while (currDist <= maxDist) {
            let tile = this.getTileAt(currTileX, currTileY);
            if (hitCondition(tile)) return [currDist, tile];
            let hunits = ((unitx > 0) ? (Math.floor(currx) + 1) - currx : (Math.ceil(currx) - 1) - currx) / unitx;
            let vunits = ((unity > 0) ? (Math.floor(curry) + 1) - curry : (Math.ceil(curry) - 1) - curry) / unity;
            let hdist: number, vdist: number;
            if (hunits < vunits) {
                hdist = hunits * unitx;
                vdist = hunits * unity;
                if (unitx > 0) currTileX++;
                else currTileX--;
            }
            else {
                hdist = vunits * unitx;
                vdist = vunits * unity;
                if (unity > 0) currTileY++;
                else currTileY--;
            }
            currx += hdist;
            curry += vdist;
            currDist += Math.sqrt(hdist * hdist + vdist * vdist);
        }
        return [maxDist, null];
    }

    nodeMap = new Map<string, Node>();
    getNode(x: number, y: number): Node;
    getNode(x: number, y: number, includeSolid: true): Node;
    getNode(x: number, y: number, includeSolid: false): Node | null;
    getNode(x: number, y: number, includeSolid = true): Node | null {
        let key = keyFromCoords(x, y);
        if (!this.nodeMap.has(key)) {
            let newNode: Node = new Node(this, x, y);
            this.nodeMap.set(key, newNode);
        }
        let isSolid = includeSolid ? false : this.world.getTileAt(x, y).isSolid;
        return isSolid ? null : this.nodeMap.get(key);
    }
    getPath(xfrom: number, yfrom: number, xto: number, yto: number, findNeighborsFn: ((fromNode: Node) => [Node, number][]) | null = null, allowPartial = false): Path | null {
        let from = this.getNode(xfrom, yfrom);
        let to = this.getNode(xto, yto);
        if (!from || !to) return null;
        return Path.pathfind(from, to, findNeighborsFn, allowPartial);
    }

    render(context: CanvasRenderingContext2D) {
        if (!this.renderFogOfWar) return;

        if (!this.shouldRender) return;

        let bounds = this.scene.camera.bounds;
        let startx = Math.floor(bounds.left / TILE_SIZE / FOW_BUCKET_SIZE);
        let starty = Math.floor(bounds.bottom / TILE_SIZE / FOW_BUCKET_SIZE);
        let endx = Math.floor(bounds.right / TILE_SIZE / FOW_BUCKET_SIZE) + 1;
        let endy = Math.floor(bounds.top / TILE_SIZE / FOW_BUCKET_SIZE) + 1;

        context.fillStyle = 'rgba(0, 0, 0, .8)';
        for (let bucketx = startx; bucketx < endx; bucketx++) {
            for (let buckety = starty; buckety < endy; buckety++) {
                let bucketPx = bucketx * TILE_SIZE * FOW_BUCKET_SIZE;
                let bucketPy = buckety * TILE_SIZE * FOW_BUCKET_SIZE;

                let key = `${bucketx}_${buckety}`;
                if (!this._fowBuckets.has(key)) {
                    context.fillRect(bucketPx, bucketPy, TILE_SIZE * FOW_BUCKET_SIZE, TILE_SIZE * FOW_BUCKET_SIZE);
                    continue;
                }
                let bucket = this._fowBuckets.get(key);

                for (let q = 0; q < FOW_BUCKET_SIZE; q++) {
                    for (let w = 0; w < FOW_BUCKET_SIZE; w++) {
                        if (bucket[q][w]) context.fillRect(bucketPx + q * TILE_SIZE, bucketPy + w * TILE_SIZE, TILE_SIZE, TILE_SIZE);
                    }
                }
            }
        }

        context.fillStyle = 'white';
        context.textAlign = 'left';
        context.textBaseline = 'middle';
        context.fillText(`${this.treasureCollected} collected`, (this.baseCoords[0] + 1) * TILE_SIZE + 8, (this.baseCoords[1] + .5) * TILE_SIZE);
    }
}
