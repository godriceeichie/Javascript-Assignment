//It is a means of storing related data values in a variable
//Example
let foods = ["moimoi", "rice", "fufu", "garri"];
// console.log(foods.length);

//How to access elements in an array
//Example
// let first = foods[0];
// console.log(first);

let length = foods.length - 1
// let last = foods[length - 1];
// console.log(last);

//How to add to end of the array
//Example
// foods.push("Beans", "noodles", "meat");
// console.log(foods);

//How to add to the beginning of the array
//Example
// foods.unshift("Dog meat")
// console.log(foods);

//How to add to the middle of an array
//Example
// foods.splice(3, 0, "milk");
// console.log(foods);

//How to delete last item from array
// let remove = foods.pop();
// console.log(remove);

//How to remove the first item in an array
// foods.shift();
// console.log(foods);

//How to remove from middle of an array
// foods.splice(1, 1)
// console.log(foods)

//How to check if an array contains an item
// let isFound = foods.includes("burger");
// console.log(isFound)

//indexOf
// let index = foods.indexOf("Garri");
// console.log(foods[index]);

//How to sort an array alphabetically
//If you are sorting for number use this format: sort((a,b)=>a-b)
// let numbers = [10, 6, 23, 21, 4]
// let sorted = numbers.sort((a,b)=>a-b);
// console.log(foods.sort());

//join
// let res = foods.join(",")
// //Split method is used to split each word in astring by whatever is in the parentheses
// let takeBack = res.split(",")[0]
// console.log(takeBack)

//To loop through an array you can use for, for of, for each, for in
//Using for
// for(let i = 0; i< foods.length-1; i++){
//     let item = foods[i];
//     console.log(item);
// }

// //Using for of
// for(let eachItem of foods){
//     console.log(eachItem);
// }

// //Using for 
// //It is only used for arrays
// foods.forEach((food, index) => console.log(index, food))

//Using for in
for(let item in foods){
    console.log(foods[item])
}