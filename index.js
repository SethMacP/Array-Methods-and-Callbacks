import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');



// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
for (let i = 0 ; i < fifaData.length ; i++ ){
if (fifaData[i].Year == 2014 && fifaData[i].Stage == 'Final'){
    console.log(fifaData[i]["Home Team Name"]) 
    console.log(fifaData[i]["Away Team Name"])
    console.log(fifaData[i]["Home Team Goals"])
    console.log(fifaData[i]["Away Team Goals"])
    if (fifaData[i]["Home Team Goals"] > fifaData[i]["Away Team Goals"]){
        console.log(fifaData[i]["Home Team Name"])
    }
    else{
        console.log(fifaData[i]["Away Team Name"])
    }
    }};



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
//Old, Non Dry Code
// let finalsData = [];
// let getFinals = (arr) => {
//     for (let i = 0 ; i < arr.length; i++){   
//         if (arr[i].Stage === "Final"){
//             finalsData.push(arr[i]);
//             }
//     }
// return finalsData;
// }
// getFinals(fifaData);


//New Code Start
//return 

function getFinals(arr) {
    return arr.Stage == "Final";
}  
function results() {
return fifaData.filter(getFinals);
}  
console.log(results(getFinals(fifaData)));

/////////////////////////////////


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
//Code Start

function getYears (getFinals){
    //establish years as an array
    let years = [];
    //for each object in newArr, push the year from the finals filtered list.
    getFinals.forEach ((element) => {
        years.push(element.Year);
    });
    
//Does this return the same as the line above?
    // return years = newArr.map(item => item.year);
    return years;
};
console.log(getYears(results()));






// //old do not use~
// console.log(getYears(getFinals, fifaData));
// let getYears = (func1, array) => {
//     let years = [];
//      let newArr = func1(array);
//      for (let i = 0 ; i < newArr.length; i++){ 
//     years.push(newArr[i].Year)};
//     return years;
// };

// console.log(getYears(getFinals, fifaData));



/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

//Code Start
function getWinners (cb)  {
    let winners = [] ;
    cb.forEach((element) => 
        {
        if(element["Home Team Goals"] > element["Away Team Goals"])
            {winners.push(element["Home Team Name"]);}
        else
            {winners.push(element["Away Team Name"]);}
        })
    return winners;
}

console.log(getWinners(results()));



/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
function getWinnersByYear (cb1, cb2, arr) {
    // cb1(arr);
    // cb2(arr);
    let winners = cb1(arr);
    let years = cb2(arr);
    for (let i = 0 ; i < winners.length ; i++)
        console.log( `In ${years[i]}, ${winners[i]} won the cup.` );
    
}
getWinnersByYear(getWinners, getYears, results(fifaData));



// // BAD Code Start
// function getWinnersByYear(cb1, cb2) {
//    let years = [];
//    let winners = [];
//     return `In ${years[i]}, ${winners[i]} won the cup`
// };
// //console.log(getWinnersByYear(getWinners, getYears, fifaData));
// console.log(getWinnersByYear(getWinners(), getYears()));




/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
