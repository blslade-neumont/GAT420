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
            let targetx = Math.floor((this.self.x + (Math.random() * 3000) - 1500) / TILE_SIZE);
            let targety = Math.floor((this.self.y + (Math.random() * 3000) - 1500) / TILE_SIZE);
            this.findPath(targetx, targety, true);
        }
        super.tick(machine, delta);
    }
}
