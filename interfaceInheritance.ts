namespace InterfaceNamespce {
    interface Man {
        name: string;
        getFullName : () => string;
    }

    interface Vehicle extends Man {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void;
        showNumberOfWheels: () => void

    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            // interfaces doesn't take super
            this.name = name;
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`This vehicle has ${this.wheelCount} wheel`)
        }
        showNumberOfWheels() {
            console.log(`This vehicle has traveled ${this.wheelCount} miles`)
        }
        getFullName() {
            return `MC-${this.name}`
        }

    }

    const moto = new Motorcycle("Beginner Cycle")
    console.log(moto.getFullName())
}