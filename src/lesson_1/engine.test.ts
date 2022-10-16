import {describe, expect, test, it} from '@jest/globals';
import {firstPrioritiesCalc, secondPrioritiesCalc} from "./engine";

describe('firstPrioritiesCalc simple case', () => {
    it('[1, *, 32]', () => {
        expect(firstPrioritiesCalc([1, '*', 32])).toEqual([32]);
    });

    it('[32, /, 32]', () => {
        expect(firstPrioritiesCalc([32, '/', 32])).toEqual([1]);
    });

    it('[32, +, 32]', () => {
        expect(firstPrioritiesCalc([32, '+', 32])).toEqual([32, '+', 32]);
    });
});

describe('firstPrioritiesCalc mixed case', () => {
    it('[32, /, 32, +, 10, *, 10]', () => {
        expect(firstPrioritiesCalc([32, '/', 32, '+', 10, '*', 10])).toEqual([1, '+', 100])
    });
});

describe('secondPrioritiesCalc invalid case', () => {
    it('[32, /, 32]', () => {
        expect(() => secondPrioritiesCalc([32, '/', 32])).toThrow(TypeError('Unexpected stack'))
    });
});

describe('secondPrioritiesCalc simple case', () => {
    it('[32, +, 32]', () => {
        expect(secondPrioritiesCalc([32, '+', 32])).toEqual(64)
    });

    it('[32, -, 32]', () => {
        expect(secondPrioritiesCalc([32, '-', 32])).toEqual(0)
    });

    it('[32, -, 32, +, 10]', () => {
        expect(secondPrioritiesCalc([32, '-', 32, '+', 10])).toEqual(10)
    });
});