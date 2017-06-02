﻿/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

import { World } from '../../world';
import { Game, GameScene, Rect, AudioSourceObject, Camera, FollowCamera } from '../../engine';
import { MockGame } from '../../engine/test';
import { tiles } from '../tile-db';
import { DungeonScene } from '../../scenes/dungeon-scene';
import { Entity } from '../../entity';
import { items, GameItem } from '../item-db';
import { Inventory } from '../../inventory';

describe('dbs/tiles', () => {
    let game: Game;
    let scene: GameScene;
    let world: World;
    beforeEach(() => {
        game = <any>new MockGame();
        scene = new GameScene(game);
        game.changeScene(scene);
        world = new World();
        scene.addObject(world);
    });

    let damageTiles: [string, number][] = [
        ['water_left', 1],
        ['water_right', 1],
        ['water', 1],
        ['lava_left', 3],
        ['lava_right', 3],
        ['lava', 3]
    ];
    damageTiles.forEach(([tileType, damageAmount]) => {
        describe(tileType, () => {
            let ent: Entity;
            beforeEach(() => {
                ent = new Entity('name', { maxHealth: 10, x: 0, y: 0, collisionBounds: new Rect(0, 32, 0, 32), flying: false });
                scene.addObject(ent);
                sinon.stub(world, 'getTileAt').withArgs(0, 0).returns(tiles[tileType]);
            });

            it(`should invoke Entity.takeDamage with ${damageAmount} damage when a non-flying entity ticks`, () => {
                sinon.spy(ent, 'takeDamage');
                world.tick(.02);
                expect(ent.takeDamage).to.have.been.calledOnce.calledWith(damageAmount);
            });

            it(`should not invoke Entity.takeDamage when a flying entity ticks`, () => {
                ent.flying = true;
                sinon.spy(ent, 'takeDamage');
                world.tick(.02);
                expect(ent.takeDamage).to.not.have.been.called;
            });
        });
    });
    
    describe('teleporter', () => {
        let ent: Entity;
        let dung: DungeonScene;
        let dungCamera: FollowCamera;
        let entInventory: Inventory;
        beforeEach(() => {
            dung = (<any>scene).dungeon = new DungeonScene();
            dungCamera = (<any>dung)._followCamera;
            ent = new Entity('Player', { maxHealth: 10, x: 0, y: 0, collisionBounds: new Rect(0, 32, 0, 32) });
            entInventory = (<any>ent).inventory = new Inventory();
            scene.addObject(ent);
            sinon.stub(world, 'getTileAt').withArgs(0, 0).returns(tiles['teleporter']);
        });

        it('should not navigate to a DungeonScene when the player collides if they are still moving', () => {
            ent.speed = 10;
            sinon.spy(game, 'changeScene');
            world.tick(.02);
            expect(game.changeScene).not.to.have.been.called;
        });
        it('should play a sound when it navigates to the DungeonScene', () => {
            sinon.spy(dung, 'addObject');
            world.tick(.02);
            expect(dung.addObject).to.have.been.calledOnce.calledWith(sinon.match.instanceOf(AudioSourceObject));
        });
        it('should preserve the camera zoomScale when it navigates to the DungeonScene', () => {
            let testCamera = new Camera(scene);
            testCamera.zoomScale = 3.14159;
            scene.camera = testCamera;
            world.tick(.02);
            expect(dungCamera.zoomScale).to.be.closeTo(testCamera.zoomScale, .00001);
        });
        it('should navigate to an DungeonScene when the player lands', () => {
            sinon.spy(game, 'changeScene');
            world.tick(.02);
            expect(game.changeScene).to.have.been.calledOnce.calledWith(sinon.match.instanceOf(DungeonScene));
        });
        it('should not navigate to an DungeonScene when a non-player lands', () => {
            sinon.spy(game, 'changeScene');
            (<any>ent).name = "Non-Player";
            world.tick(.02);
            expect(game.changeScene).to.not.have.been.called;
        });
        it('should preserve the game time when it navigates to a DungeonScene', () => {
            sinon.spy(game, 'changeScene');
            world.gameTime = 2953;
            world.tick(.02);
            expect(dung.world.gameTime).to.be.closeTo(world.gameTime, .00001);
        });
        it('should preserve the player inventory when it navigates to a DungeonScene', () => {
            sinon.spy(game, 'changeScene');
            entInventory.addItem(<any>{ sprite: { src: 'abc.xyz' } });
            world.tick(.02);
            expect((<any>dung).player.inventory).to.deep.eq(entInventory);
        });
    });

    describe('dungeonTeleporter', () => {
        let dungScene: DungeonScene;
        let dungCamera: FollowCamera;
        let returnScene: GameScene;
        let ent: Entity;
        let entInventory: Inventory;
        beforeEach(() => {
            dungScene = scene = new DungeonScene();
            dungCamera = (<any>dungScene)._followCamera;
            game.changeScene(scene);
            scene.start();

            let player: any = { inventory: entInventory = new Inventory() };
            let returnWorld: any = { gameTime: 0 };
            returnScene = <any>{
                findObject: name => (name == 'Player') ? player :
                                     (name == 'World') ? returnWorld :
                                                         {},
                addObject: () => void(0),
                currentHealth: 5,
                game: game,
                world: returnWorld
            };
            dungScene.enter(returnScene, 0, 0);

            ent = <Entity>dungScene.findObject('Player');
            sinon.stub(dungScene.world, 'getTileAt').withArgs(0, 0).returns(tiles['dungeonTeleporter']);
        });

        it('should not navigate to the previous scene when the player collides if they are still moving', () => {
            ent.speed = 10;
            sinon.spy(game, 'changeScene');
            dungScene.world.tick(.02);
            expect(game.changeScene).not.to.have.been.called;
        });
        it('should play a sound when it navigates to the DungeonScene', () => {
            sinon.spy(returnScene, 'addObject');
            dungScene.world.tick(.02);
            expect(returnScene.addObject).to.have.been.calledOnce.calledWith(sinon.match.instanceOf(AudioSourceObject));
        });
        it('should preserve the camera zoomScale when it navigates to the previous scene', () => {
            let testCamera = new Camera(scene);
            returnScene.camera = testCamera;
            dungCamera.zoomScale = 3.14159;
            dungScene.world.tick(.02);
            expect(testCamera.zoomScale).to.be.closeTo(dungCamera.zoomScale, .00001);
        });
        it('should navigate to the previous scene when the player lands', () => {
            sinon.spy(game, 'changeScene');
            dungScene.world.tick(.02);
            expect(game.changeScene).to.have.been.calledOnce.calledWith(returnScene);
        });
        it('should not navigate to the previous scene when a non-player lands', () => {
            sinon.spy(game, 'changeScene');
            (<any>ent).name = "Non-Player";
            dungScene.world.tick(.02);
            expect(game.changeScene).to.not.have.been.called;
        });
        it('should preserve the game time when it navigates to the previous scene', () => {
            dungScene.world.gameTime = 28582.5;
            dungScene.world.tick(.02);
            expect((<any>returnScene).world.gameTime).to.be.closeTo(dungScene.world.gameTime, .00001);
        });
        it('should preserve the player inventory when it navigates to the previous scene', () => {
            entInventory.addItem(<any>{ sprite: { src: 'abc.xyz' } });
            dungScene.world.tick(.02);
            expect((<any>returnScene.findObject('Player')).inventory).to.deep.eq(entInventory);
        });
    });

    let cropTiles: [string, string, string, number, RegExp][] = [
        ['carrotCrop', 'grass', 'crop_carrot', 1, /rekolte/i]
    ];
    cropTiles.forEach(([tileType, swapTileType, itemType, itemCount, audioRegexp]) => {
        describe(tileType, () => {
            let ent: Entity;
            let inventory: Inventory;
            beforeEach(() => {
                ent = new Entity('Player', { maxHealth: 10, x: 0, y: 0, collisionBounds: new Rect(0, 32, 0, 32), flying: false });
                inventory = (<any>ent).inventory = new Inventory();
                scene.addObject(ent);
                sinon.stub(world, 'getTileAt').withArgs(0, 0).returns(tiles[tileType]);
            });

            it(`should replace the ${tileType} tile with a ${swapTileType} tile when the player lands`, () => {
                sinon.spy(world, 'setTileAt');
                world.tick(.02);
                expect(world.setTileAt).to.have.been.calledOnce.calledWith(0, 0, tiles[swapTileType]);
            });
            it(`should not replace the tile with a ${swapTileType} when a non-player entity lands`, () => {
                ent.name = 'Non-Player';
                sinon.spy(world, 'setTileAt');
                world.tick(.02);
                expect(world.setTileAt).not.to.have.been.called;
            });
            it(`should add ${itemCount} ${itemType}(s) when the player lands`, () => {
                sinon.stub(inventory, 'addItem');
                world.tick(.02);
                expect(inventory.addItem).to.have.been.calledOnce.calledWith(items[itemType], itemCount);
            });
            if (audioRegexp) {
                it('should play a sound when the player lands', () => {
                    sinon.spy(scene, 'addObject');
                    world.tick(.02);
                    expect(scene.addObject).to.have.been.calledOnce.calledWith(sinon.match(obj => obj instanceof AudioSourceObject && obj.name.match(audioRegexp)));
                });
            }
        });
    });
});
