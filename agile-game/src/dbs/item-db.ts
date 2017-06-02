﻿import { SpriteT, AudioSourceObject } from '../engine';
import { Player } from '../player';
import { sfx } from './sfx-db';

export const ITEM_SIZE: number = 24;

export interface GameItem {
    sprite: SpriteT,
    onUse?: (player: Player) => void,
};

export let items: { [name: string]: GameItem } =
    {
        //plant_1:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 8 },
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(1);
        //    }
        //},
        //plant_2:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 9 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(2);
        //    }
        //},
        //plant_3:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 10 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(3);
        //    }
        //},
        //plant_4:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 11 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(4);
        //    }
        //},
        //plant_5:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 12 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(1);
        //    }
        //},
        //plant_6:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 13 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(1);
        //    }
        //},
        //plant_7:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 14 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(1);
        //    }
        //},
        //plant_8:
        //{
        //    sprite: {
        //        src: 'images/Icons/IconSet.png',
        //        tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 12, tiley: 15 }
        //    },
        //    onUse: (player) => {
        //        player.recoverDamage(1);
        //    }
        //},
        crop_carrot:
        {
            sprite: {
                src: 'images/Icons/IconSet.png',
                tileset: { width: ITEM_SIZE, height: ITEM_SIZE, tilex: 0, tiley: 18 }
            },
            onUse: (player) => {
                player.recoverDamage(300);
                player.scene.addObject(new AudioSourceObject('heal', sfx['heal'], { x: player.x, y: player.y }));
            }
        }
    };
