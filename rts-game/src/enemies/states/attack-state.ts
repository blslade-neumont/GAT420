import { State, StateStatusT } from './state';
import { NeutralState } from './neutral-state';
import { FleeState } from './flee-state';
import { Enemy } from '../enemy';
import { pointDistance } from '../../utils/math';

export class AttackState extends State {
    constructor(self: Enemy, private substate: State | null = null, private targetSpeed: number = 30 * (2 + Math.random() * 1)) {
        super(self);
    }

    get stateStatus(): StateStatusT {
        return 'alert';
    }
    get stateName() {
        return (this.substate && this.substate.stateName) || 'attack';
    }

    tick(delta: number) {
        let controller = this.self.controller;
        let states = this.self.states;
        if (!controller.canSeePlayer || (!this.self.canSeePlayer && !this.substate)) {
            states.currentState = new NeutralState(this.self);
            return;
        }
        else if (controller.afraidOfPlayer) {
            states.currentState = new FleeState(this.self);
            return;
        }

        let player = this.self.player;
        let dist = pointDistance(this.self.x, this.self.y, player.x + 16, player.y + 16);
        this.self.speed += (Math.min(this.targetSpeed, Math.max(dist - 32, 0)) - this.self.speed) * (1 - Math.pow(1 - delta, 2));

        this.self.steerTowards(delta, player.x + 16, player.y + 16);

        super.tick(delta);
        if (this.substate) this.substate.tick(delta);
    }

    render(context: CanvasRenderingContext2D) {
        super.render(context);
        if (this.substate) this.substate.render(context);
    }
}
