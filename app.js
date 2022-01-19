//DOM selectors
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const addBtn = document.querySelector('#sumBtn');
const subBtn = document.querySelector('#subBtn');
const mulBtn = document.querySelector('#mulBtn');
const divBtn = document.querySelector('#divBtn');
const equalBtn = document.querySelector('#equalBtn');
const clearBtn = document.querySelector('#clearBtn');

//need function to store double digit numbers...
let firstNum = [];
let firstNumJoined = 0;
let firstNumParsed = 0;
let secNum = [];
const oBtn = e =>{
    firstNum.push('1'); 
    firstNumJoined = firstNum.join(''); // will need to just change this to return...or need to store in 
    firstNumParsed = parseInt(firstNumJoined); // this allows to be added... may need this in operator function at end
    console.log(firstNumParsed); //works with adding numbers to this

}; 
//potential problem with this is how to store as second number? Maybe this is why screen clears once hit operator...

//operator functions
function add(a,b){
    console.log('add button is clicked');
    return a +b;//need to make sure this works.. may have to change operator...
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
/*const calcData = {
    a: 0,
    b: 0,
    opFunc = add,
}; *///store 2 numbers and function... not sure if this works...
function operate(obj){
    return obj.opFunc; //not sure if this works...
}
function clear(){

}

oneBtn.addEventListener('click',oBtn);
addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
mulBtn.addEventListener('click', multiply);
divBtn.addEventListener('click', divide);
equalBtn.addEventListener('click', operate);    
clearBtn.addEventListener('click', clear);