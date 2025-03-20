// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}
const distanceFromHqInFeet = function(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}
const distanceTravelledInFeet = function(start, destination) {
    return Math.abs(start - destination) * 264;
}
const calculatesFarePrice = function(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    switch (true) {
        case distance <= 400:
            return 0;
        case distance > 400 && distance <= 2000:
            return (distance - 400) * 0.02;
        case distance > 2000 && distance <= 2500:
            return 25;
        default:
            return 'cannot travel that far';
    }
}