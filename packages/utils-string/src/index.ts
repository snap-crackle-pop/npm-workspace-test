import { toUpperCase, toLowerCase } from './string';
import { mySubtract } from 'utils-number';
import { format} from 'date-fns'


export const showBye = () => { 
    console.log(`----- ${toUpperCase("hello")}, ${mySubtract()}`)
    console.log(`$---${toLowerCase("BYE BYE")}`);
    format(new Date(), "'Today is a' eeee")
}