import { State, StateStatusT } from './state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';
import { pointDistance } from '../../utils/math';
import { clamp } from '../../engine';

export class WanderState extends State {
    constructor(self: Enemy, private targetSpeed: number = 30 * (2 + Math.random() * 1)) {
        super(self);
    }

    steeringDirection = 0; //-1 + Math.random() * 2;
    turnSpeed = 1;

    get stateName() {
        return 'wandering';
    }
    get stateStatus(): StateStatusT {
        return 'confused';
    }

    private newSteeringDir = 0;
    tick(delta: number) {
        let controller = this.self.controller;
        let states = this.self.states;

        this.self.speed += (this.targetSpeed - this.self.speed) * (1 - Math.pow(1 - delta, 2));

        this.newSteeringDir -= delta;
        if (this.newSteeringDir <= 0) {
            // this.steeringDirection = clamp(this.steeringDirection + ((Math.random() - .5) * (delta * 15)), -1, 1);
            this.steeringDirection = clamp(this.steeringDirection + (Math.random() - .5) * 2, -1, 1);
            this.newSteeringDir = .25;
        }
        this.self.direction += this.turnSpeed * 1.2 * this.steeringDirection;

        super.tick(delta);
    }
    
    renderImpl(context: CanvasRenderingContext2D) {
        super.renderImpl(context);
        context.fillStyle = 'lightgrey';
        context.fillRect(20, -11, 2, 22);
        context.fillStyle = 'red';
        context.fillRect(20, -1 - (10 * this.steeringDirection), 2, 2);
    }
}
