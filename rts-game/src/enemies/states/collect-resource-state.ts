﻿import { State, StateStatusT } from './state';
import { PathfindState } from './pathfind-state';
import { StateMachine } from './state-machine';
import { ReturnToBaseState } from './return-to-base-state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';

export class CollectResourceState extends PathfindState {
    constructor(self: Enemy, private resourcex: number, private resourcey: number) {
        super(self);
        this.findPath(resourcex, resourcey);
    }

    get stateName() {
        return 'foraging';
    }
    get stateStatus(): StateStatusT {
        return 'ok';
    }

    tick(states: StateMachine, delta: number) {
        super.tick(states, delta);
        if (!this.path) this.self.speed *= Math.pow(1 - delta, 2);
        this.collectingResource += delta;
        if (this.collectingResource > 1) {
            this.self.states.currentState = new ReturnToBaseState(this.self);
        }
    }

    collectingResource: number = 0;

    onEnter(machine: StateMachine, prevState: State | null) {
        super.onEnter(machine, prevState);
        this.self.speed = 30 * (2 + Math.random() * 1);
    }

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
