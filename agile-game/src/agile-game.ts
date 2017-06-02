﻿import { Game, EventEmitter } from './engine';
import { World } from './world';
import { TilePreloadStrategy } from './preload-strategies/tile-preload-strategy';
import { ItemPreloadStrategy } from './preload-strategies/item-preload-strategy';
import { AlivePreloadStrategy } from './preload-strategies/alive-preload-strategy';
import { GuiPreloadStrategy } from './preload-strategies/gui-preload-strategy';
import { EffectPreloadStrategy } from './preload-strategies/effect-preload-strategy';
import { TitleScene } from './scenes/title-scene';
import { SfxPreloadStrategy} from './preload-strategies/sfx-preload-strategy';

export class AgileGame extends Game {
    constructor(framesPerSecond = 30) {
        super(framesPerSecond);
        this.resourceLoader.addPreloadStrategy(new TilePreloadStrategy());
        this.resourceLoader.addPreloadStrategy(new ItemPreloadStrategy());
        this.resourceLoader.addPreloadStrategy(new AlivePreloadStrategy());
        this.resourceLoader.addPreloadStrategy(new GuiPreloadStrategy());
        this.resourceLoader.addPreloadStrategy(new SfxPreloadStrategy());
        this.resourceLoader.addPreloadStrategy(new EffectPreloadStrategy());
    }

    private _pause = new EventEmitter<void>();
    get onPause() {
        return this._pause;
    }

    private _play = new EventEmitter<void>();
    get onPlay() {
        return this._play;
    }

    start() {
        super.start();
        this.changeScene(new TitleScene());
    }

    private _score = 0;
    get score() {
        return this._score;
    }

    set score(val: number) {
        this._score = val; 
    }

    addToScore(val: number){
        this._score += val;
    }
}
