namespace AbstractNamespace {
  abstract class Vehicle {
        constructor(protected wheelCount: number) { }

      abstract UpdateWheelCount(newWheelCount: number): void;

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
            console.log(`Motorcycle has ${this.wheelCount}`)
        }

    }


    class Automobile extends Vehicle {
        constructor() {
            super(4)
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`)

        }
    }

    class SemiTruck extends Vehicle {
        constructor() {
            super(18)
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`SemiTruck has ${this.wheelCount}`)

        }

    }

    const motorcycle = new Motorcycle()
        motorcycle.showNumberOfWheels()
        motorcycle.updateWheelCount(1)

    const automobile = new Automobile()
        automobile.showNumberOfWheels()
        automobile.updateWheelCount(3)


    const semitruck = new SemiTruck()
        semitruck.showNumberOfWheels()
        semitruck.updateWheelCount(6)



}
