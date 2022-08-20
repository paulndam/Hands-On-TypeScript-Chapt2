class Speaker {
    constructor(name) {
        this.name = name;
    }
    get Message() {
        if (!this.message.includes(this.name)) {
            throw Error("Name is required");
        }
        return this.message;
    }
    set Message(value) {
        let tempMsg = value;
        if (!value.includes(this.name)) {
            tempMsg = this.name + " " + value;
        }
        this.message = tempMsg;
    }
}
const speaker = new Speaker("Jiohn");
speaker.Message = "Hey everyone";
console.log(speaker.Message);
