import { State, StateStatusT } from './state';
import { Enemy } from '../enemy';
import { TILE_SIZE } from '../../dbs/tile-db';
import { pointDistance } from '../../utils/math';
import { clamp } from '../../engine';

export class WanderState extends State {
    constructor(self: Enemy, private targetSpeed: number = 30 * (2 + Math.random() * 1)) {
        super(self);
    }
    
    steeringDirection = 0;
    turnSpeed = 1;
    
    get stateName() {
        return 'wandering';
    }
    get stateStatus(): StateStatusT {
        return 'confused';
    }
    
    raycasts: { xstart: number, ystart: number, xunit: number, yunit: number, distance: number }[] = [];
    
    private newSteeringDir = 0;
    tick(delta: number) {
        let self = this.self;
        let controller = self.controller;
        let states = self.states;
        
        self.speed += (this.targetSpeed - self.speed) * (1 - Math.pow(1 - delta, 2));
        
        let forward = [self.hspeed / self.speed, self.vspeed / self.speed];
        let right = [forward[1], -forward[0]];
        
        const projectSides = 12;
        const projectForward = 150 / TILE_SIZE;
        
        let rcRightForward = {
            xstart: self.x + right[0] * projectSides,
            ystart: self.y + right[1] * projectSides,
            xunit: forward[0] + right[0] * .2,
            yunit: forward[1] + right[1] * .2,
            distance: 0
        };
        [rcRightForward.distance] = controller.raycast(rcRightForward.xstart / TILE_SIZE, rcRightForward.ystart / TILE_SIZE, rcRightForward.xunit, rcRightForward.yunit, projectForward);
        rcRightForward.distance *= TILE_SIZE;
        
        let rcLeftForward = {
            xstart: self.x - right[0] * projectSides,
            ystart: self.y - right[1] * projectSides,
            xunit: forward[0] - right[0] * .2,
            yunit: forward[1] - right[1] * .2,
            distance: 0
        };
        [rcLeftForward.distance] = controller.raycast(rcLeftForward.xstart / TILE_SIZE, rcLeftForward.ystart / TILE_SIZE, rcLeftForward.xunit, rcLeftForward.yunit, projectForward);
        rcLeftForward.distance *= TILE_SIZE;
        
        this.raycasts = [rcRightForward, rcLeftForward];
        
        this.newSteeringDir -= delta;
        if (this.newSteeringDir <= 0) {
            this.steeringDirection = clamp(this.steeringDirection + (Math.random() - .5) * 2, -1, 1);
            this.newSteeringDir = .25;
        }
        this.steeringDirection = clamp(this.steeringDirection + (rcRightForward.distance - rcLeftForward.distance) / 120, -1, 1);
        self.direction += this.turnSpeed * 1.2 * this.steeringDirection;
        
        super.tick(delta);
    }
    
    render(context: CanvasRenderingContext2D) {
        super.render(context);
        if (!this.self.renderDebugInfo) return;
        
        context.strokeStyle = 'purple';
        context.fillStyle = 'purple';
        context.beginPath();
        for (let raycast of this.raycasts) {
            context.moveTo(raycast.xstart, raycast.ystart);
            context.lineTo(raycast.xstart + (raycast.xunit * raycast.distance), raycast.ystart + (raycast.yunit * raycast.distance));
            context.fillRect(raycast.xstart - 1, raycast.ystart, 2, 2);
        }
        context.stroke();
    }
    renderImpl(context: CanvasRenderingContext2D) {
        super.renderImpl(context);
        if (!this.self.renderDebugInfo) return;
        
        context.fillStyle = 'lightgrey';
        context.fillRect(20, -11, 2, 22);
        context.fillStyle = 'red';
        context.fillRect(20, -1 - (10 * this.steeringDirection), 2, 2);
    }
}
