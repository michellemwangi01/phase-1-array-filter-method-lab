// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching(drivers, driverName){
    return drivers.filter((driver)=>{
    return driver.toLowerCase() === driverName.toLowerCase();
})
}



function fuzzyMatch(drivers, searchChars){
    return drivers.filter((driver)=>{
        return driver.toLowerCase().startsWith(searchChars.toLowerCase());
    })
}

function matchName(drivers, driversName){
    return drivers.filter((driver)=>{
        return driver.name.toLowerCase() == driversName.toLowerCase();
    })
}


console.log(findMatching(drivers, "bobby"));
console.log(fuzzyMatch(drivers, "S"));
console.log(findMatching(drivers, "bobby"));

