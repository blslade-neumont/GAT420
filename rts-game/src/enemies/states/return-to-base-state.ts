import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { StateMachine } from './state-machine';
import { ExploreState } from './explore-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class ReturnToBaseState extends PathfindState {
    constructor(self: Enemy) {
        super(self, 30 * (2 + Math.random() * 1));
    }

    get stateName() {
        return 'returning';
    }
    get stateStatus(): StateStatusT {
        return 'ok';
    }

    onCompletedPath() {
        if (this.self.controller.baseCoords[0] + 1 - Math.floor(this.self.x / TILE_SIZE) <= 1 && this.self.controller.baseCoords[1] + 1 - Math.floor(this.self.y / TILE_SIZE) <= 1) {
            this.self.controller.treasureCollected++;
            this.self.states.currentState = new ExploreState(this.self);
        }
    }

    tick(states: StateMachine, delta: number) {
        if (!this.path) {
            this.findPath(this.self.controller.baseCoords[0] + 1, this.self.controller.baseCoords[1] + 1, true);
        }
        super.tick(states, delta);
    }
}
