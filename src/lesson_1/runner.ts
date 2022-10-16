import {parser} from "./parser";
import {firstPrioritiesCalc, secondPrioritiesCalc} from "./engine";

export const runner = (line: string): number => {
    const stack = parser(line);

    if (stack === null) throw new TypeError('Unexpected string');

    const firstPrioritiesResult = firstPrioritiesCalc(stack);

    if (firstPrioritiesResult.length === 1) return Number(firstPrioritiesResult[0]);

    return secondPrioritiesCalc(firstPrioritiesResult);
}