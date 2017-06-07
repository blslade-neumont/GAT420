import { GameObject, GameObjectOptions } from '../engine';
import { EnemyController } from './enemy-controller';
import { StateMachine } from './states/state-machine';
import { NeutralState } from './states/neutral-state';
import { alives } from '../dbs/alive-db';
import { TILE_SIZE } from '../dbs/tile-db';
import merge = require('lodash.merge');
import { pointDistance, pointDistance2 } from '../utils/math';
import { pointDirection } from '../engine';

const FOW_CLEAR_RESET_TIME = .5;

export class Enemy extends GameObject {
    constructor(readonly controller: EnemyController, opts: GameObjectOptions = {}) {
        super('EnemyController', merge({
            sprite: alives['enemy'].sprite,
            direction: Math.random() * 360
        }, opts));
        this._states = new StateMachine(new NeutralState(this));
    }

    renderDebugInfo = false;
    hasResource = false;

    private _states: StateMachine;
    get states() {
        return this._states;
    }

    get player() {
        return this.controller.player;
    }

    private cachedCanSeePlayer = false;
    private recomputeLineOfSight = 0;
    private playerLineOfSight: [number, number][] = [];
    get canSeePlayer() {
        if (this.recomputeLineOfSight <= 0) {
            [this.cachedCanSeePlayer, this.playerLineOfSight] = this.hasLineOfSight(this.player.x + 16, this.player.y + 16);
            this.recomputeLineOfSight = .5;
        }
        return this.cachedCanSeePlayer;
    }
    hasLineOfSight(otherx: number, othery: number, maxDist = Infinity): [boolean, [number, number][]] {
        if (maxDist != Infinity) {
            if (pointDistance2(this.x, this.y, otherx, othery) > maxDist * maxDist) return [false, []];
        }
        let tiles = this.tilesInTheWay(this.x, this.y, otherx, othery);
        let los = [];
        while (true) {
            let next = tiles.next();
            if (next.done) break;
            los.push(next.value);
            if (this.controller.isInFOW(next.value[0], next.value[1])) return [false, los];
        }
        return [true, los];
    }
    private *tilesInTheWay(x: number, y: number, otherx: number, othery: number): Iterator<[number, number]> {
        //Approximation
        let dist = 1 + pointDistance(x, y, otherx, othery) / TILE_SIZE;
        let hunit = (otherx - x) / dist;
        let vunit = (othery - y) / dist;
        for (let q = 0; q <= dist; q++) {
            yield [Math.floor((x + (q * hunit)) / TILE_SIZE), Math.floor((y + (q * vunit)) / TILE_SIZE)];
        }
    }

    private _fowClearTime = Math.random() * FOW_CLEAR_RESET_TIME;
    fowClearDistance = 4;

    tick(delta: number) {
        this._fowClearTime -= delta;
        if (this._fowClearTime <= 0) {
            this.controller.clearFOW(Math.floor(this.x / TILE_SIZE), Math.floor(this.y / TILE_SIZE), this.fowClearDistance);
            this._fowClearTime += FOW_CLEAR_RESET_TIME;
        }
        this.recomputeLineOfSight -= delta;
        this._states.tick(delta);
        super.tick(delta);
        this.imageAngle = this.direction;
    }
    render(context: CanvasRenderingContext2D) {
        this._states.render(context);
        super.render(context);

        if (this.renderDebugInfo && this.recomputeLineOfSight > 0) {
            context.fillStyle = 'rgba(1, 0, 0, .2)';
            for (let [x, y] of this.playerLineOfSight) {
                context.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
            }
        }
    }
    renderImpl(context: CanvasRenderingContext2D) {
        this._states.renderImpl(context);
        super.renderImpl(context);
    }

    directionChangeSpeed = 180;
    directionTolerance = 15;

    steerTowards(delta: number, dir: number);
    steerTowards(delta: number, x: number, y: number);
    steerTowards(delta: number, dir: number, y?: number) {
        if (typeof y !== 'undefined') dir = pointDirection(this.x, this.y, dir, y);
        
        if (dir > this.direction + 180) dir -= 360;
        else if (dir < this.direction - 180) dir += 360;
        let dirChange = 0;
        if (dir > this.direction + this.directionTolerance) {
            dirChange = Math.min(dir - this.direction, this.directionChangeSpeed * delta);
        }
        else if (dir < this.direction - this.directionTolerance) {
            dirChange = Math.max(dir - this.direction, -this.directionChangeSpeed * delta);
        }
        this.direction += dirChange;
    }
}
