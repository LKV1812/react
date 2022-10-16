import {mathOperation} from "./mathOperation";
import {isNumber} from "./helpers";

export type ParserLineType = (number | string)[];

export const parser = (line: string) : ParserLineType | null => {
    const stack = line.split(" ");

    return stack.reduce<ParserLineType>( (result, item, key) => {
        const prevItem = stack[key - 1];

        const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
        const isValidOperatorPush = isNumber(prevItem) && !isNumber(item) && mathOperation.hasOwnProperty(item);

        if (isValidNumberPush) result.push(Number(item));
        else if (isValidOperatorPush) result.push(item);
        else throw new TypeError("Unexpected string");

        return result;
    }, []);
}