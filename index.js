// Code your solution here
const drivers = [ {name: James}, {name: John}, {name: Sam}, {name: Laura}]
function findMatching(drivers, string) { 
    return drivers.filter( result => result.toLowerCase() === string.toLowerCase());
};

function fuzzyMatch(drivers, letters) {
    return drivers.filter( result => result.toLowerCase().indexOf(letters.toLowerCase()) === 0);
};

function matchName(drivers, string) { 
    return drivers.filter( driver => driver.name === string)
};