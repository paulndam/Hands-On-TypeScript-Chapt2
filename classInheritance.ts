class Vehicle {
    constructor(protected wheelCount: number) { }

    showNumberOfWheels(){
        console.log(`moved ${this.wheelCount} miles`)
    }

}

class Motorcycle extends Vehicle {
    constructor() {
        super(2);
    }

    updateWheelCount(newWheelCount: number) {
        this.wheelCount = newWheelCount;
    }

}


class Automobile extends Vehicle {
    constructor() {
        super(4)
    }
}

class SemiTruck extends Vehicle {
    constructor() {
        super(18)
    }

}

const motorcycle = new Motorcycle()
motorcycle.showNumberOfWheels()

const automobile = new Automobile()
automobile.showNumberOfWheels()

const semitruck = new SemiTruck()
semitruck.showNumberOfWheels()