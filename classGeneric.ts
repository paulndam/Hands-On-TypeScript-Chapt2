namespace GenericNamespace {
    interface Wheels {
        count: number;
        diameter : number;
    }

    interface Vehicle<T> {
        getName(): string;
        getWheelCount : () => T
    }


    class Automobile implements Vehicle<Wheels> {

        constructor(private name: string, private wheels: Wheels) { }

        getName(): string { return this.name }
        getWheelCount(): Wheels { return this.wheels}
    }

    class MercedsBenz extends Automobile {
        constructor() {
            super(`Mercedes Benz`,{count:4, diameter:21})
        }
    }

    const MB = new MercedsBenz()
    console.log(`Car name is ---> ${MB.getName()}`)
    console.log(`Have ${JSON.stringify(MB.getWheelCount())} tires 🛞 🛞`)
}