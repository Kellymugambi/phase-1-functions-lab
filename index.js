// Code your solution in this file!
function distanceFromHqInBlocks(y) {

   if (y > 42) {
    return y - 42
   }
   else {
    return 42 - y
   }
}

function distanceFromHqInFeet(y) {
let blocks = distanceFromHqInBlocks(y) 
    let feet = blocks * 264
return blocks * 264
   
}

function distanceTravelledInFeet(start, destination) {

    if (destination > start)
    return (destination - start )* 264
    else 
return (start-destination )* 264
}

function calculatesFarePrice(start, destination) {
    let d = Math.abs (destination - start) * 264
   if (d<400) 
    return 0;

    if (d>400, d<2000)
    return 2.56

    if (d>2000 , d<2500)
    return 25
    
    if (d>2500)
    return 'cannot travel that far'
}
    
