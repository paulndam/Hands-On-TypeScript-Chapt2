function rumMore(distance: number): number{
    return distance + 5

}

function scored(goals: number){
    console.log(`I scored ${goals} goallllllssss`)
}

function sleep(hours: number): void {
    console.log(`I only slept ${hours} hours`)
}

let striker = scored(3)
console.log(striker)
let sleeper = sleep(14)
console.log(sleeper)