class Person{
    name: string
}

const pat: { name: string } = {
    name: 'pat'

}

const person: Person = pat

console.log(person)