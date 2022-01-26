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
//may need to change this to displayValue then save as firstNum when addClick is clicked
let displayValue = [];
let displayValueJoined = 0;
let displayValueParsed = 0;
function resetDisplayValue(){
    //reset display so can store new number
    displayValue = [];
    displayValueJoined = 0;
    displayValueParsed = 0; 
}
let firstNum = 0;
let secNum = 0; 
//functions for each numberBtn
const oneBtnClick = e =>{
    displayValue.push('1'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const twoBtnClick = e =>{
    displayValue.push('2'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const threeBtnClick = e =>{
    displayValue.push('3'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const fourBtnClick = e =>{
    displayValue.push('4'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const fiveBtnClick = e =>{
    displayValue.push('5'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const sixBtnClick = e =>{
    displayValue.push('6'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const sevenBtnClick = e =>{
    displayValue.push('7'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const eightBtnClick = e =>{
    displayValue.push('8'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const nineBtnClick = e =>{
    displayValue.push('9'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const zeroBtnClick = e =>{
    displayValue.push('0'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 


//functions choose 1) which operator is clicked 2) stores the first number used
let operator = 0;
function addClick(e){
    firstNum = displayValueParsed;
    console.log('The first number is ' + firstNum); // works
    operator = add; //works because chooses parameters later
    resetDisplayValue();
}
function subClick(e){
    firstNum = displayValueParsed;
    console.log('The first number is ' + firstNum); // works
    operator = subtract; 
    resetDisplayValue();
}
function mulClick(e){
    firstNum = displayValueParsed;
    console.log('The first number is ' + firstNum); // works
    operator = multiply; 
    resetDisplayValue();
}
function divClick(e){
    firstNum = displayValueParsed;
    console.log('The first number is ' + firstNum); // works
    operator = divide; 
    resetDisplayValue();
}

//operator functions
function add(a,b){
    return a +b;
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
function operate(){
    secNum = displayValueParsed;
    console.log('the second number is ' + secNum);
    resetDisplayValue();
    console.log('the answer is ' + operator(firstNum,secNum)); //works because choosing parameters after secNum is set
}
function clear(){
    resetDisplayValue();
    firstNum = 0;
    secNum = 0;
}

//number button eventListeners
oneBtn.addEventListener('click',oneBtnClick);
twoBtn.addEventListener('click',twoBtnClick);
threeBtn.addEventListener('click',threeBtnClick);
fourBtn.addEventListener('click',fourBtnClick);
fiveBtn.addEventListener('click',fiveBtnClick);
sixBtn.addEventListener('click',sixBtnClick);
sevenBtn.addEventListener('click',sevenBtnClick);
eightBtn.addEventListener('click',eightBtnClick);
nineBtn.addEventListener('click',nineBtnClick);
zeroBtn.addEventListener('click',zeroBtnClick);

//operator  button eventListeners
addBtn.addEventListener('click', addClick);
subBtn.addEventListener('click', subClick);
mulBtn.addEventListener('click', mulClick);
divBtn.addEventListener('click', divClick);
equalBtn.addEventListener('click', operate);    
clearBtn.addEventListener('click', clear);

