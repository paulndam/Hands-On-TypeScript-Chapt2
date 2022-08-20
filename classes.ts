class Car {
    constructor(private readonly dealer: string) { }

    speak() {
        this.dealer = "dealer" + this.dealer
        console.log(this.dealer)
    }
}

const customer = new Car("MB");
// customer.dealer = "MB Of Houston"
customer.speak()