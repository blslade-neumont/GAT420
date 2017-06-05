import { State, StateStatusT } from './state';
import { ExploreState } from './explore-state';
import { FleeState } from './flee-state';
import { AttackState } from './attack-state';
import { StateMachine } from './state-machine';
import { ReturnToBaseState } from './return-to-base-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class NeutralState extends State {
    constructor(self: Enemy, public substate: State | null = new ExploreState(self)) {
        super(self);
    }

    get stateStatus(): StateStatusT {
        return 'ok';
    }
    get stateName() {
        return (this.substate && this.substate.stateName) || 'neutral';
    }

    tick(states: StateMachine, delta: number) {
        let controller = this.self.controller;
        if (controller.canSeePlayer && this.self.canSeePlayer) {
            if (controller.afraidOfPlayer) {
                states.currentState = new FleeState(this.self);
                return;
            }
            else {
                states.currentState = new AttackState(this.self);
                return;
            }
        }
        if (this.self.hasResource && !(this.substate instanceof ReturnToBaseState)) {
            this.substate = new ReturnToBaseState(this.self);
            return;
        }
        super.tick(states, delta);
        if (this.substate) this.substate.tick(states, delta);
    }

    render(states: StateMachine, context: CanvasRenderingContext2D) {
        super.render(states, context);
        if (this.substate) this.substate.render(states, context);
    }
}
