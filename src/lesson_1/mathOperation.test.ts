import {describe, expect, test, it} from '@jest/globals';
import {mul, div, add, minus, exp} from "./mathOperation";

describe('Math operation cases', () => {
    it('mul 1 * 2 to equal 2', () => {
        expect(mul(1, 2)).toBe(2)
    });

    it('mul 2 * 2 to equal 4', () => {
        expect(mul(2, 2)).toBe(4)
    });

    it('div 4 / 2 to equal 2', () => {
        expect(div(4, 2)).toBe(2)
    });

    it('exp 2 ** 2 to equal 4', () => {
        expect(exp(2, 2)).toBe(4)
    });

    it('exp 2 ** 3 to equal 8', () => {
        expect(exp(2, 3)).toBe(8)
    });

    it('add 4 + 2 to equal 6', () => {
        expect(add(4, 2)).toBe(6)
    });

    it('minus 4 - 2 to equal 2', () => {
        expect(minus(4, 2)).toBe(2)
    });
});