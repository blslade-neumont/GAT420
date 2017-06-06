import { State, StateStatusT } from './state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';
import { pointDistance } from '../../utils/math';

export class WanderState extends State {
    constructor(self: Enemy) {
        super(self);
    }

    targetSpeed = 30 * (2 + Math.random() * 1);

    get stateName() {
        return 'wandering';
    }
    get stateStatus(): StateStatusT {
        return 'confused';
    }

    tick(delta: number) {
        let controller = this.self.controller;
        let states = this.self.states;

        let player = this.self.player;
        let dist = pointDistance(this.self.x, this.self.y, player.x + 16, player.y + 16);
        this.self.speed += (Math.min(this.targetSpeed, Math.max(dist - 32, 0)) - this.self.speed) * (1 - Math.pow(1 - delta, 2));

        this.self.steerTowards(delta, player.x + 16, player.y + 16);

        super.tick(delta);
    }
}
