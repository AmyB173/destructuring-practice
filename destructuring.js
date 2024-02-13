/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [36, 37, 38];
let [john, mary, joe] = ages;
console.log(ages);
console.log(john);

// Destructuring objects
let jobs = {
    joan: "designer",
    jill: "artist",
    sarah: "developer",
};

let {joan, jill, sarah} = jobs;
console.log(jill);

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);
// commas to skip parts of the array
[,johnNative,,, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let languages2 = {
    language1: "english",
    language2: "french",
    language3: "german", 
    language4: "japanese"
};

let { language1, language4 } = languages2;
console.log(language1, language4);


// Using rest parameter syntax

let fruits =["apple", "orange", "banana", "peach", "cherry"];

let [favourite, secondFav, ...others] = fruits;

console.log(others);