import { add, substract } from './math';

const x = 20;
const y = 10;

console.log(`--->>${x} + ${y} = ${add(x, y)}`)


export const mySubtract = () => { 
    console.log(`${x} - ${y} = ${substract(x, y)}`);
}