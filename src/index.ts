import { NumberCollection } from './NumberCollection';
import { StringCollection } from './StringCollection';
import { LinkListCollection } from './LinklistCollection';

const number = new NumberCollection([3, 0, -5, 6]);
number.sort();
console.log(number.data);
const string = new StringCollection('tomato');
string.sort();
console.log(string.data);
const linkList = new LinkListCollection();
linkList.add(-3);
linkList.add(599);
linkList.add(-6);
linkList.add(699);
linkList.sort();
linkList.print();
