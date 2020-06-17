let totalFuel =0; // this sets totalFuel to zero
let arrayFuel = [12, 14, 1969, 100756]; // Needs fixing 
let arrayLength = arrayFuel.length; 

const myFuel = (mass) => {
//     for (let i = 0; i < arrayLength; i++) {
        return Math.floor(mass/3)-2;    
// }
}

totalFuel = myFuel;
console.log(totalFuel); 

module.exports = myFuel