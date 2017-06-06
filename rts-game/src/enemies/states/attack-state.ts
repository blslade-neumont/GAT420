import { State, StateStatusT } from './state';
import { NeutralState } from './neutral-state';
import { FleeState } from './flee-state';
import { StateMachine } from './state-machine';
import { ReturnToBaseState } from './return-to-base-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';
import { pointDistance } from '../../utils/math';
import { pointDirection } from '../../engine';

export class AttackState extends State {
    constructor(self: Enemy, private substate: State | null = null, private targetSpeed: number = 30 * (2 + Math.random() * 1)) {
        super(self);
    }

    directionChangeSpeed = 180;
    directionTolerance = 15;

    get stateStatus(): StateStatusT {
        return 'alert';
    }
    get stateName() {
        return (this.substate && this.substate.stateName) || 'attack';
    }

    tick(states: StateMachine, delta: number) {
        let controller = this.self.controller;
        if (!controller.canSeePlayer || (!this.self.canSeePlayer && !this.substate)) {
            states.currentState = new NeutralState(this.self);
            return;
        }
        else if (controller.afraidOfPlayer) {
            states.currentState = new FleeState(this.self);
            return;
        }
        super.tick(states, delta);
        if (this.substate) this.substate.tick(states, delta);

        let player = this.self.player;
        let dir = pointDirection(this.self.x, this.self.y, player.x + 16, player.y + 16);
        let dist = pointDistance(this.self.x, this.self.y, player.x + 16, player.y + 16);
        this.self.speed += (Math.min(this.targetSpeed, Math.max(dist - 32, 0)) - this.self.speed) * (1 - Math.pow(1 - delta, 2));
        if (dir > this.self.direction + 180) dir -= 360;
        else if (dir < this.self.direction - 180) dir += 360;
        let dirChange = 0;
        if (dir > this.self.direction + this.directionTolerance) {
            dirChange = Math.min(dir - this.self.direction, this.directionChangeSpeed * delta);
        }
        else if (dir < this.self.direction - this.directionTolerance) {
            dirChange = Math.max(dir - this.self.direction, -this.directionChangeSpeed * delta);
        }
        this.self.direction += dirChange;
    }

    render(states: StateMachine, context: CanvasRenderingContext2D) {
        super.render(states, context);
        if (this.substate) this.substate.render(states, context);
    }
}
