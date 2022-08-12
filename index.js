// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = () => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = () => {
    return drivers.slice(2)
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function (fn) {
        return num * fn;
    }
}

const fareDoubler = (num) => {return num * 2}

const fareTripler = (num) => {return num*3}

const selectDifferentDrivers = (array, fun) => {return fun(array)}