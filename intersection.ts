let obj: { name: string } & { age: number } = {
    name: 'messi',
    age: 34
}

console.log(obj)

let unionObj: null | { name: string } = {
    name: 'union',
}
console.log(unionObj)