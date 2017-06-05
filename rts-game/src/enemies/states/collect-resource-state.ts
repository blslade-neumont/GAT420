import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { NeutralState } from './neutral-state';
import { StateMachine } from './state-machine';
import { ReturnToBaseState } from './return-to-base-state';
import { Enemy } from '../enemy';
import { tiles, TILE_SIZE } from '../../dbs/tile-db';

export class CollectResourceState extends PathfindState {
    constructor(self: Enemy, private resourcex: number, private resourcey: number) {
        super(self, 30 * (2 + Math.random() * 1), false, true);
        this.findPath(resourcex, resourcey);
        this.self.controller.setTileAt(resourcex, resourcey, tiles['claimed-treasure']);
    }

    get stateName() {
        return 'foraging';
    }

    tick(machine: StateMachine, delta: number) {
        super.tick(machine, delta);
        if (!this.path) {
            this.collectingResource += delta;
            if (this.collectingResource > 1) {
                this.self.controller.setTileAt(this.resourcex, this.resourcey, tiles['depleted-treasure']);
                this.self.hasResource = true;
                let newState = new ReturnToBaseState(this.self);
                if (machine.currentState instanceof NeutralState) machine.currentState.substate = newState;
                else machine.currentState = newState;
            }
        }
    }

    collectingResource: number = 0;

    render(states: StateMachine, context: CanvasRenderingContext2D) {
        super.render(states, context);
        if (this.collectingResource > 0) {
            let left = (this.resourcex + .2) * TILE_SIZE;
            let width = TILE_SIZE * .6;
            let top = (this.resourcey + 1.2) * TILE_SIZE;
            let height = TILE_SIZE * .1;

            context.fillStyle = 'red';
            context.fillRect(left, top, width, height);

            context.fillStyle = 'blue';
            context.fillRect(left, top, width * this.collectingResource, height);
        }
    }
}
