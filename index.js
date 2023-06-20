// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const hq = 42;
    return Math.abs(blocks - hq);
}

//function 2
function distanceFromHqInFeet(blocks) {
    const blockInFeet = 264;
    return distanceFromHqInBlocks(blocks) * blockInFeet;

}

//function 3
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    const blockInFeet = 264;
    
    return distance * blockInFeet;
}

//function 4
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);


    if(distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        const fare =(distance - 400) * 0.02;
        return parseFloat(fare.toFixed(2));
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else {
        return 'cannot travel that far';
    }
}
