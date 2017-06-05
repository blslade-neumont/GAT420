import { State, StateStatusT } from './state';
import { NeutralState } from './neutral-state';
import { AttackState } from './attack-state';
import { StateMachine } from './state-machine';
import { ReturnToBaseState } from './return-to-base-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class FleeState extends State {
    constructor(self: Enemy, private substate: State | null = null) {
        super(self);
    }

    get stateStatus(): StateStatusT {
        return <any>'scared';
    }
    get stateName() {
        return (this.substate && this.substate.stateName) || 'flee';
    }

    tick(states: StateMachine, delta: number) {
        let controller = this.self.controller;
        if (!controller.canSeePlayer || !this.self.canSeePlayer) {
            states.currentState = new NeutralState(this.self);
            return;
        }
        else if (!controller.afraidOfPlayer) {
            states.currentState = new AttackState(this.self);
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
