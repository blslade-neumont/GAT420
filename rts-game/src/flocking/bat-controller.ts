import { GameObject, GameObjectOptions, GameEvent } from '../engine';
import { Bat } from './bat';

type FlockingRenderMode = 'none' | 'single' | 'all';

export class BatController extends GameObject {
    constructor() {
        super("BirdController", { shouldRender: false });
    }
    
    get debugControls(): any[] {
        return [
            { key: 'B', name: 'enable flocking', state: this.enableFlocking },
            { key: 'F', name: 'flocking render mode', state: this.renderMode }
        ];
    }

    private _bats: Bat[] = [];
    get bats() {
        return this._bats;
    }

    addBats(count: number) {
        for (let q = 0; q < count; q++)
            this.addBat();
        this.updateRenderDebugInfo();
    }
    private addBat() {
        let opts: GameObjectOptions = {
            direction: Math.random() * 360,
            speed: (2 + Math.random() * 4) * 30,
            x: (-.5 + Math.random()) * 3000,
            y: (-.5 + Math.random()) * 3000
        };
        let bat = new Bat(this, opts);
        bat.shouldTick = bat.shouldRender = this.enableFlocking
        this._bats.push(bat);
        this.game.scene.addObject(bat);
    }

    renderMode: FlockingRenderMode = 'none';
    enableFlocking: boolean = false;

    handleEvent(evt: GameEvent) {
        if (evt.type === 'keyPressed') {
            if (evt.code === 'KeyF') {
                this.renderMode = (this.renderMode == 'none') ? 'single' :
                                (this.renderMode == 'single') ? 'all' :
                                                                'none';
                this.updateRenderDebugInfo();
            }
            else if (evt.code === 'KeyB') {
                this.enableFlocking = !this.enableFlocking;
                for (let bat of this.bats) {
                    bat.shouldTick = bat.shouldRender = this.enableFlocking;
                }
            }
        }
    }
    private updateRenderDebugInfo() {
        for (let bat of this._bats) {
            bat.renderDebugInfo = this.renderMode == 'all';
        }
        if (this.renderMode == 'single' && this._bats.length) this._bats[0].renderDebugInfo = true;
    }
}
