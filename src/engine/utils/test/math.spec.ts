﻿/// <reference types="mocha" />

import { expect, use } from 'chai';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
use(sinonChai);

import { degToRad, radToDeg, clamp, fmod } from '../math';

describe('utils/degToRad', () => {
    it('should convert 0 to 0', () => {
        expect(degToRad(0)).to.eql(0);
    });
    it('should convert 180 to 3.14159', () => {
        expect(degToRad(180)).to.eql(Math.PI);
    });
});

describe('utils/radToDeg', () => {
    it('should convert 0 to 0', () => {
        expect(radToDeg(0)).to.eql(0);
    });
    it('should convert 3.14159 to 180', () => {
        expect(radToDeg(Math.PI)).to.eql(180);
    });
});

describe('utils/clamp', () => {
    it('should constrain a value lower than the lower bound to the lower bound', () => {
        expect(clamp(0, 1, 2)).to.be.closeTo(1, .00001);
    });
    it('should constrain a value higher than the upper bound to the upper bound', () => {
        expect(clamp(3, 1, 2)).to.be.closeTo(2, .00001);
    });
    it('should return a number', () => {
        expect(clamp(2, 2, 5)).to.be.a('number');
    });
    it('should throw an error if the lower bound is greater than the upper bound', () => {
        expect(() => clamp(2, 5, 2)).to.throw(/lower bound greater/i);
    });
});

describe('utils/fmod', () => {
    it('should return a number', () => {
        expect(fmod(25, 2)).to.be.a('number');
    });
    it('should not treat negative numbers as a special case', () => {
        expect(fmod(-2, 10)).to.be.closeTo(8, .00001);
    });
    it('should compute the floating-point modulus of the first number base the second number', () => {
        expect(fmod(5, 10)).to.be.closeTo(5, .00001);
        expect(fmod(15, 10)).to.be.closeTo(5, .00001);
        expect(fmod(-5, 10)).to.be.closeTo(5, .00001);
        expect(fmod(97, 10)).to.be.closeTo(7, .00001);
    });
});
