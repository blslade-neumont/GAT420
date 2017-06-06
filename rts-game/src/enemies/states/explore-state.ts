﻿import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { NeutralState } from './neutral-state';
import { CollectResourceState } from './collect-resource-state';
import { Enemy } from '../enemy';
import { tiles, TILE_SIZE } from '../../dbs/tile-db';

export class ExploreState extends PathfindState {
    constructor(self: Enemy) {
        super(self, 30 * (2 + Math.random() * 1));
    }

    get stateName() {
        return 'exploring';
    }

    tick(delta: number) {
        let controller = this.self.controller;
        let machine = this.self.states;
        let found = false;
        for (let q = 10; q < 100; q++) {
            let size = TILE_SIZE * Math.sqrt(q);
            let targetx = Math.floor((this.self.x - size + (size * 2 * Math.random())) / TILE_SIZE);
            let targety = Math.floor((this.self.y - size + (size * 2 * Math.random())) / TILE_SIZE);
            let tile = controller.getTileAt(targetx, targety);
            if (!controller.isInFOW(targetx, targety)) {
                if (tile == tiles['treasure']) {
                    let newState = new CollectResourceState(this.self, targetx, targety);
                    if (machine.currentState instanceof NeutralState) machine.currentState.substate = newState;
                    else machine.currentState = newState;
                    return;
                }
                else if (!this.path && !tile.isSolid && (
                    controller.isInFOW(targetx + 1, targety) ||
                    controller.isInFOW(targetx - 1, targety) ||
                    controller.isInFOW(targetx, targety + 1) ||
                    controller.isInFOW(targetx, targety - 1)
                )) {
                    found = this.findPath(targetx, targety);
                }
            }
        }
        if (!this.path && !found) {
            let targetx = Math.floor((this.self.x + (Math.random() * 3000) - 1500) / TILE_SIZE);
            let targety = Math.floor((this.self.y + (Math.random() * 3000) - 1500) / TILE_SIZE);
            this.findPath(targetx, targety);
        }
        super.tick(delta);
    }
}
