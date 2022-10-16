export type ScalarOperationType = (a: number, b: number) => number;

export const mul: ScalarOperationType = (a, b) : number => a * b;
export const div: ScalarOperationType = (a, b) : number => a / b;
export const add: ScalarOperationType = (a, b) : number => a + b;
export const minus: ScalarOperationType = (a, b) : number => a - b;
export const exp: ScalarOperationType = (a, b) : number => a ** b;

export const mathOperation : { [key : string]: ScalarOperationType} = {
    '*' : mul,
    '/' : div,
    '**' : exp,
    '+' : add,
    '-' : minus
}

export const mathPriorities : number[] = [1, 2];

export const [FIRST, SECOND] = mathPriorities;

export const mathOperationsPriorities : { [key : string]: number} = {
    '*' : FIRST,
    '/' : FIRST,
    '**' : FIRST,
    '+' : SECOND,
    '-' : SECOND,
}