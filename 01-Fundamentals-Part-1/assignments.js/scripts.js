// // let country = 'Slovakia';
// // let continent = 'Europe';
// let population = 5000000;
// // console.log(country);

// let isIsland = false;
// let language;
// console.log( typeof isIsland);
// console.log(typeof population);
// // console.log(typeof country);

// language = 'Slovak';
// const country= 'Slovakia';
// const continent = 'Europa';

// document.body.innerHTML += `<p> ${country} is in ${continent} , and its ${population} people speak ${language}. </p>`

// if (population > 33000000) {
//     document.body.innerHTML += `${country} 's population is above average.`
// } else {
//     document.body.innerHTML += `${country}'s population is ${33 - population} million
//     below average.  <br>`
// };

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//     document.body.innerHTML += `Only 1 border`;
// } else if (numNeighbours > 1) {
//     document.body.innerHTML += `'More than 1 border.`;
// } else {
//     document.body.innerHTML += `No borders.`;
// }

let country = 'Australia'
let language = 'english';
let population = 67;
const notIsland = true;

if ((language==='english') && (population < 50 ) && (notIsland === true)) {
    document.body.innerHTML += ` You should live in ${country}`
} else {
    document.body.innerHTML += ` ${country} is not your country`
}

