class Speaker{
    private message: string;

    constructor(private name: string) { }

    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("Name is required")
        }
        return this.message
    }

    set Message(value: string) {
        let tempMsg = value
        if (!value.includes(this.name)) {
            tempMsg = this.name + " " + value

        }
        this.message = tempMsg

    }
}

const speaker = new Speaker("Jiohn")
speaker.Message = "Hey everyone"
console.log(speaker.Message)