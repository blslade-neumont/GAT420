import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { StateMachine } from './state-machine';
import { ExploreState } from './explore-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class ReturnToBaseState extends PathfindState {
    constructor(self: Enemy) {
        super(self);
        this.path = this.self.controller.getPath(Math.floor(this.self.x / TILE_SIZE), Math.floor(this.self.y / TILE_SIZE), this.self.controller.baseCoords[0] + 1, this.self.controller.baseCoords[1] + 1);
    }

    get stateName() {
        return 'returning';
    }
    get stateStatus(): StateStatusT {
        return 'ok';
    }

    onCompletedPath() {
        this.self.controller.treasureCollected++;
        this.self.states.currentState = new ExploreState(this.self);
    }

    onEnter(machine: StateMachine, prevState: State | null) {
        super.onEnter(machine, prevState);
        this.self.speed = 30 * (2 + Math.random() * 1);
    }
}
