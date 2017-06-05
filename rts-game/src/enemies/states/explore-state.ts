import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { StateMachine } from './state-machine';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class ExploreState extends PathfindState {
    constructor(self: Enemy) {
        super(self, 30 * (2 + Math.random() * 1));
    }

    get stateName() {
        return 'exploring';
    }
    get stateStatus(): StateStatusT {
        return 'ok';
    }

    tick(machine: StateMachine, delta: number) {
        if (!this.path) {
            for (let q = 10; q < 100; q++) {
                let size = TILE_SIZE * Math.sqrt(q);
                let targetx = Math.floor((this.self.x - size + (size * 2 * Math.random())) / TILE_SIZE);
                let targety = Math.floor((this.self.y - size + (size * 2 * Math.random())) / TILE_SIZE);
                if (this.self.controller.isInFOW(targetx, targety)) {
                    this.findPath(targetx, targety, true);
                    return;
                }
            }
        }
        super.tick(machine, delta);
    }
}
