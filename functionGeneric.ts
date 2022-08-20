// function getLength<T extends Object>(arg: T): number {
//     if (arg.hasOwnProperty("length")) {
//         return arg["length"];
//     }
//     return 0
// }
// console.log(getLength<number>(22));
// console.log(getLength("Hello world."));


interface HasLength {
    length: number;

}

function getLength<T extends HasLength>(arg: T): number{
    return arg.length

}
// this fails because number doesn't have a length, since we are telling to extend into the Haslength interface and use the property available there
console.log(getLength<number>(22));
console.log(getLength("Hello world."));
