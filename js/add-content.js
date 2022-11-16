//Project Euler Question 2
// let a,b,result;
// a = 0;
// b = 1;
// result = b;
// let sum = 0;
// for(i = 1; i < 50; i++){
//     if(result % 2 === 0 && result <= 4000000){
//         sum += result;
//     }
//     result = a + b;
//     a = b;
//     b = result;
// }
// document.write(`${sum}` + `<br>`);

let number = 600851475143;
let arr;
for(i = 1; i <= 1800000000; i++){
    if((number % i === 0) && ((i % i === 0 ) && (i % 1 === 0))){
        console.log(Math.max(i));
    }
}