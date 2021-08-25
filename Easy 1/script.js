// Question 4
//
/*Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newString =
  munstersDescription[0].toUpperCase() +
  munstersDescription.slice(1).toLowerCase();
console.log(newString);

// Question 6

/*
We have most of the Munster family in our ages object:
Add entries for Marilyn and Spot to the object:
*/
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let totalAge = Object.assign(ages, additionalAges);
console.log(totalAge);

/*

Question 7
Determine whether the name Dino appears in the strings below -- check each string separately):

*/
let str1 =
  "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

/*
Question 8
How can we add the family pet, "Dino" and "Hoppy" to the following array?
*/
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");
console.log(flintstones);

/*
Question 10
Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
*/

let advice =
  "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
advice = advice.split(" ").slice(0, 6);
console.log(advice.join(" "));
