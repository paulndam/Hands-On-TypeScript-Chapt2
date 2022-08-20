function oldEnough(age: number): never | boolean{
    if (age > 21) {
        throw Error("Age to dink liquor")
    }

    if (age <= 18) {
        return false
    }
    return true
}