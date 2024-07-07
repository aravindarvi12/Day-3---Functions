console.log("IIFE - Print odd number in array");
(function(notEven){
    for (let i = 0; i<= notEven.length; i++){
        if(notEven[i] % 2 !=0){
            console.log(notEven[i])
        }
}
})(notEven = [1,2,3,4,5,6,7,8,9,10])

console.log("Anonymous - Print odd number in array");
const printOddNum = function(oddNum) {
    for (let i = 0; i<= oddNum.length; i++){
        if(oddNum[i] % 2 !=0){
            console.log(oddNum[i])
        }
}
}
printOddNum([11,12,13,14,15,16,17,18,19,20]);

console.log("Arrow - Print odd number in array");
const odd =(divByTwo) =>{
    for (let i = 0; i<= divByTwo.length; i++){
        if(divByTwo[i] % 2 !=0){
            console.log(divByTwo[i])
        }
} 
}
odd([21,22,23,24,25,26,27,28,29,30]); 
//---------------------------------------------------------------------------------------------------------//
console.log("IIFE -Sum of all numbers in an array");

(function (arr){
    let sum = 0;
    for (let i =0;i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}
)(arr = [1,2,3,4,5,6,7,8,9,10]);

console.log("Anonymous -Sum of all numbers in an array");

const sumOfNum = function(value){
    let sum = 0;
    for (let i =0;i<value.length; i++){
        sum += value[i];
    }
    console.log(sum);
}
sumOfNum([11,12,13,14,15,16,17,18,19,20]);

console.log("Arrow -Sum of all numbers in an array");

const addition = (num) => {
    let sum = 0;
    for (let i =0;i<num.length; i++){
        sum += num[i];
    }
    console.log(sum);
}
addition([21,22,23,24,25,26,27,28,29,30]);  
//---------------------------------------------------------------------------------------------//

console.log("IIFE -Return all the palindromes in an array ");
(function(input){
    let str = input[0];
    let reversedStr = str.split('').reverse().join('');
    if( str === reversedStr){
    console.log(input , "is paliandrome")
    }else{
        console.log(input, "is not paliandrome");
    }
})(["MADAM"]); 

console.log("Anonymous -Return all the palindromes in an array ");
const paliandrome = function(input){
    let str = input[0];
    let reversedStr = str.split('').reverse().join('');
    if( str === reversedStr){
    console.log(input , "is paliandrome")
    }else{
        console.log(input, "is not paliandrome");
    }
}
paliandrome(["RACECAR"]);

console.log("Arrow -Return all the palindromes in an array ");
const isPaliandrome = (input) => {
    let str = input[0];
    let reversedStr = str.split('').reverse().join('');
    if( str === reversedStr){
    console.log(input , "is paliandrome")
    }else{
        console.log(input, "is not paliandrome");
    }
}
isPaliandrome(["malayalam"]); 

//------------------------------------------------------------------//
console.log("ARROW -all the strings to title caps in a string array");
const istitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(istitleCase("geeks for geeks"));

//-------------------------------------------------------------------------------------

console.log("Anonymous -all the strings to title caps in a string array");
const littleCase = function(str){
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(littleCase("have a good day"));
//-----------------------------------------------------------------------------------------
console.log("IIFE -all the strings to title caps in a string array");
(function sentance(words){ 
    words = words.join('').toLowerCase().split(' ');
    for(let i =0; i<words.length; i++){
    
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    console.log(words.join(' ')) ;
}
)(words =["nice talking you"]); 
//-----------------------------------------------------------------------------------------------
console.log("IIFE -Return all the prime numbers in an array");
(function(arr) {
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Anonymous - Return all the prime numbers in an array");
let primenum =function(arr){
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
primenum([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log("Arrow - Return all the prime numbers in an array");

let primeee =(arr)=>{
    function prime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            console.log(arr[i]);
        }
    }
};
primeee([21,22,23,24,25,26,27,28,29,30]);

 // Return medium of two sorted arrays of the same size_IIFE
    
 (function(a,b) {
    function median (){
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
}
median();

    })([1,2,3],[4,5,6])

// Return medium of two sorted arrays of the same size_IIFE_Arrow Function 

let medium =(a,b) => {
    let c = [...a, ...b].sort((a, b) => a - b);

    let length = c.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0)
    {
        console.log((c[middle - 1] + c[middle]) / 2);
    } 
    else 
    {
        console.log([middle]);
    }
} 
medium([2,3,4],[5,6,7]);

// Remove duplicates from an array_IIFE 

(function(arr){
    function duplicate(){
        let a=[...new Set(arr)];
        console.log(a);
    }
    duplicate();
})([3,3,4,4,5]);

// Remove duplicates from an array_anonymous functions

let duplicate1 = function (arr){
    let a=[...new Set(arr)];
    console.log(a);

};
duplicate1([1,2,3,4,4]);

// Rotate an array by k times_IIFE

(function (arr,k){{
    let rotate =[...arr.slice(k), ...arr.slice(0,k)];
    console.log(rotate);
};
})([1,2,3,4],2);

