function rumMore(distance) {
    return distance + 5;
}
function scored(goals) {
    console.log("I scored ".concat(goals, " goallllllssss"));
}
function sleep(hours) {
    console.log("I only slept ".concat(hours, " hours"));
}
var striker = scored(3);
console.log(striker);
var sleeper = sleep(14);
console.log(sleeper);
