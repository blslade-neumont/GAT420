﻿import { GameObject, fmod } from './engine';
import { World } from './world';

export class LightingObject extends GameObject {
    constructor(private ambient = 1, private dayNightCycle = true) {
        super('LightingObject', { renderCamera: 'none' });
        this.compositeCanvas = document.createElement('canvas');
        this.compositeContext = this.compositeCanvas.getContext('2d');
    }

    private compositeCanvas: HTMLCanvasElement;
    private compositeContext: CanvasRenderingContext2D;

    protected renderImpl(context: CanvasRenderingContext2D) {
        let world = <World | null>(<any>this.scene).world;
        if (!world && this.dayNightCycle) throw new Error(`Unsupported state: no world, no game time; but dayNightCycle is true!`);

        let darkness = 0;
        let gameTime = world && (world.gameTime - Math.floor(world.gameTime));
        if (this.dayNightCycle && (gameTime <= 7 / 24 || gameTime >= 19 / 24)) {
            darkness = 1;
            if (gameTime <= 7 / 24 && gameTime > 5.5 / 24) darkness = 1 - ((gameTime * 24) - 5.5) / 1.5;
            if (gameTime >= 19 / 24 && gameTime < 20.5 / 24) darkness = ((gameTime * 24) - 19) / 1.5;
            darkness *= .95;
        }
        darkness = Math.max(1 - this.ambient, darkness);
        if (darkness == 0) return;

        this.createCompositeImage(darkness);

        context.save();
        try {
            context.globalCompositeOperation = 'multiply';
            context.drawImage(this.compositeCanvas, 0, 0);
        }
        finally { context.restore(); }
    }

    private createCompositeImage(darkness: number) {
        let [width, height] = this.game.canvasSize;
        [this.compositeCanvas.width, this.compositeCanvas.height] = [width, height];
        let ctx = this.compositeContext;

        let color = Math.floor(255 * (1 - darkness));
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
        ctx.fillRect(0, 0, width, height);

        let camera = this.scene.camera;
        if (camera) camera.push(ctx);
        try {
            ctx.globalCompositeOperation = 'lighten';
            let objects = this.scene.findObjects();
            for (let obj of objects.filter(obj => typeof (<any>obj).renderLight === 'function')) {
                (<any>obj).renderLight(ctx);
            }
        }
        finally { if (camera) camera.pop(ctx); }
    }
}
