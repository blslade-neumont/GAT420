import { State, StateStatusT } from './state';
import { NeutralState } from './neutral-state';
import { AttackState } from './attack-state';
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

    tick(delta: number) {
        let controller = this.self.controller;
        let states = this.self.states;
        if (!controller.canSeePlayer || !this.self.canSeePlayer) {
            states.currentState = new NeutralState(this.self);
            return;
        }
        else if (!controller.afraidOfPlayer) {
            states.currentState = new AttackState(this.self);
            return;
        }
        super.tick(delta);
        if (this.substate) this.substate.tick(delta);
    }

    render(context: CanvasRenderingContext2D) {
        super.render(context);
        if (this.substate) this.substate.render(context);
    }
}
