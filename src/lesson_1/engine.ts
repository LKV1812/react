import {ParserLineType} from "./parser";
import {mathOperation, mathPriorities, mathOperationsPriorities} from "./mathOperation";
import {isNumber} from "./helpers";

const [FIRST, SECOND] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParserLineType) : ParserLineType => {
    return stack.reduce<ParserLineType>((result, nextItem) => {
        const prevItem = result[result.length - 2];
        const item = result[result.length - 1];

        if (!isNumber(String(item)) && mathOperationsPriorities[item] === FIRST) {
            if (!mathOperation[item]) throw new TypeError('Unexpected stack');

            result = [...result.slice(0, -2), mathOperation[item](Number(prevItem), Number(nextItem))];
        } else {
            result.push(nextItem);
        }

        return result
    }, []);
}

export const secondPrioritiesCalc = (stack: ParserLineType) : number => {
    return stack.reduce<number>( (result, nextItem, key) => {
        const item = stack[key - 1];

        if (mathOperationsPriorities[item] === FIRST) throw new TypeError('Unexpected stack');

        if (!isNumber(String[item]) && mathOperationsPriorities[item] === SECOND) {
            result = mathOperation[item](Number(result), Number(nextItem));
        }

        return result;
    }, Number(stack[0]));
}