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
//const ansBtn = document.querySelector('#ansBtn');

const firstNumDisplay = document.querySelector('#firstNumDisplay');
const operatorDisplay = document.querySelector('#operatorDisplay');
const secNumDisplay = document.querySelector('#secNumDisplay');
const answerDisplay = document.querySelector('#answerDisplay');




let displayValue = [];
let displayValueJoined = 0;
let displayValueParsed = 0;
//joins number as buttons are clicked and parses them to make them numbers
function storeNumbers(){
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}
//reset display so can store new number
function resetDisplayValue(){
    displayValue = [];
    displayValueJoined = 0;
    displayValueParsed = 0; 
}

let firstNum = 1;
let secNum = 0; 
//functions for each numberBtn
const oneBtnClick = e =>{
    displayValue.push('1'); 
    storeNumbers();
}; 
const twoBtnClick = e =>{
    displayValue.push('2'); 
    storeNumbers();
}; 
const threeBtnClick = e =>{
    displayValue.push('3'); 
    storeNumbers();
}; 
const fourBtnClick = e =>{
    displayValue.push('4'); 
    storeNumbers();
}; 
const fiveBtnClick = e =>{
    displayValue.push('5'); 
    storeNumbers();
}; 
const sixBtnClick = e =>{
    displayValue.push('6'); 
    storeNumbers(); 
}; 
const sevenBtnClick = e =>{
    displayValue.push('7'); 
    storeNumbers();
}; 
const eightBtnClick = e =>{
    displayValue.push('8'); 
    displayValueJoined = displayValue.join(''); 
    displayValueParsed = parseInt(displayValueJoined); 
}; 
const nineBtnClick = e =>{
    displayValue.push('9'); 
    storeNumbers();
}; 
const zeroBtnClick = e =>{
    displayValue.push('0'); 
    storeNumbers();
}; 


//functions choose 1) which operator is clicked 2) stores the first number used
let operator = 0;
function addClick(e){
    firstNum = displayValueParsed;
    firstNumDisplay.textContent = firstNum;
    operatorDisplay.textContent = '+';
    console.log('The first number is ' + firstNum); // works
    operator = add; //works because chooses parameters later
    resetDisplayValue();
}
function subClick(e){
    firstNum = displayValueParsed;
    firstNumDisplay.textContent = firstNum;
    operatorDisplay.textContent = '-';
    console.log('The first number is ' + firstNum); // works
    operator = subtract; 
    resetDisplayValue();
}
function mulClick(e){
    firstNum = displayValueParsed;
    firstNumDisplay.textContent = firstNum;
    operatorDisplay.textContent = 'x';
    console.log('The first number is ' + firstNum); // works
    operator = multiply; 
    resetDisplayValue();
}
function divClick(e){
    firstNum = displayValueParsed;
    firstNumDisplay.textContent = firstNum;
    operatorDisplay.textContent = '/';
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
//round answer to three decimal places.
function round(num){
    let numTimesThou = num *1000;
    let roundedNum = Math.round(numTimesThou);
    let roundedNumDivHun = roundedNum/1000;
    return roundedNumDivHun;
}
//displays answer and second number
let roundedAnswer = 0;
function operate(){
    secNum = displayValueParsed;
    secNumDisplay.textContent = secNum;
    console.log('the second number is ' + secNum);
    resetDisplayValue();
    roundedAnswer = round(operator(firstNum,secNum));
    answerDisplay.textContent = '= ' + roundedAnswer;
}
function clear(){
    resetDisplayValue();
    firstNum = 0;
    secNum = 0;
    operator = '+';
    firstNumDisplay.textContent = firstNum;
    secNumDisplay.textContent = secNum;
    operatorDisplay.textContent = operator;
    answerDisplay.textContent = '= 0';
}

function storeAnswer(){
    firstNum = roundedAnswer;
    firstNumDisplay.textContent = firstNum;
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

//operator button eventListeners
addBtn.addEventListener('click', addClick);
subBtn.addEventListener('click', subClick);
mulBtn.addEventListener('click', mulClick);
divBtn.addEventListener('click', divClick);
equalBtn.addEventListener('click', operate);    
clearBtn.addEventListener('click', clear);
//ansBtn.addEventListener('click',storeAnswer);

