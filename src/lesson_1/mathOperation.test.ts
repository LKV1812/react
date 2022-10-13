import {describe, expect, test, it} from '@jest/globals';
import {mul} from "./mathOperation";

describe('Math operation cases', () => {
    it('mul 1 * 2 to equal 2', () => {
        expect(mul(1, 2)).toBe(2)
    })
});