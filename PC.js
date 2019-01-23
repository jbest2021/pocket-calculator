var executed = false;
var expressionArray= [];
var decimalStatus = false;
var piStatus = false;
var decimalInserted = false;
var firstPercent = false;
var symbolStatus = false;
var operationInserted = false;
var finalSym = false;
var i = 7;

function insert(num) {
 if (executed == false) {
 document.calculator.display.value = "";
 executed = true;
}

if (num === '*' || num === '/' || num === '+'|| num === '-') {
  if (expressionArray[expressionArray.length - 1] == '*' || expressionArray[expressionArray.length - 1] == '/' || expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-'){
    expressionArray.splice(expressionArray.length -1 , 1)
    expressionArray.push(num)
    operationInserted = true;
    console.log(expressionArray)
  }
}

if (operationInserted == false) {
  document.calculator.display.value = document.calculator.display.value + num;
  expressionArray.push(num)
    console.log(expressionArray.join(''))
}

 if (Number(document.calculator.display.value.length <= 10)) {
   document.calculator.display.value = document.calculator.display.value;
 } else {
   document.getElementById("Num0").disabled = true;
   document.getElementById("Num1").disabled = true;
   document.getElementById("Num2").disabled = true;
   document.getElementById("Num3").disabled = true;
   document.getElementById("Num4").disabled = true;
   document.getElementById("Num5").disabled = true;
   document.getElementById("Num6").disabled = true;
   document.getElementById("Num7").disabled = true;
   document.getElementById("Num8").disabled = true;
   document.getElementById("Num9").disabled = true;
   document.getElementById("decimalB").disabled = true;
 }

if (decimalInserted == false) {
let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
document.calculator.display.value = commaInput;
  }
}

function clearcalc() {
  lastSym = false;
  operationInsert = false;
 document.calculator.display.value = 0;
 executed = false;
 decimalStatus = false;
 decimalInserted = false;
 i = i = 7;
   expressionArray = [];
   document.getElementById("Num0").disabled = false;
   document.getElementById("Num1").disabled = false;
   document.getElementById("Num2").disabled = false;
   document.getElementById("Num3").disabled = false;
   document.getElementById("Num4").disabled = false;
   document.getElementById("Num5").disabled = false;
   document.getElementById("Num6").disabled = false;
   document.getElementById("Num7").disabled = false;
   document.getElementById("Num8").disabled = false;
   document.getElementById("Num9").disabled = false;
   document.getElementById("decimalB").disabled = false;
}

function cleanClick() {
 document.calculator.display.value = 0;
 executed = false;
 firstPercent = false;
 decimalStatus = false;
 lastSym = false;
 operationInserted = false;
 decInserted = false;
 symbolStatus = false;
 i = i = 7;
 document.getElementById("Num0").disabled = false;
 document.getElementById("Num1").disabled = false;
 document.getElementById("Num2").disabled = false;
 document.getElementById("Num3").disabled = false;
 document.getElementById("Num4").disabled = false;
 document.getElementById("Num5").disabled = false;
 document.getElementById("Num6").disabled = false;
 document.getElementById("Num7").disabled = false;
 document.getElementById("Num8").disabled = false;
 document.getElementById("Num9").disabled = false;
}

function equal() {
 piStatus = false;
 firstPercent = false;
 symbolStatus = false;
 lastSym = true;
 document.getElementById("Num0").disabled = true;
 document.getElementById("Num1").disabled = true;
 document.getElementById("Num2").disabled = true;
 document.getElementById("Num3").disabled = true;
 document.getElementById("Num4").disabled = true;
 document.getElementById("Num5").disabled = true;
 document.getElementById("Num6").disabled = true;
 document.getElementById("Num7").disabled = true;
 document.getElementById("Num8").disabled = true;
 document.getElementById("Num9").disabled = true;
 let calcAnswer = eval(expressionArray.join(''));
   expressionArray = [];
   expressionArray = [calcAnswer];
 if (calcAnswer > 999999999) {
   document.calculator.display.value = calcAnswer.toExponential(9);
 } else {
   document.calculator.display.value = calcAnswer.toLocaleString("en");
 }

 if (document.calculator.display.value === "Infinity" || document.calculator.display.value === "∞") {
   document.calculator.display.value = "Error";
 }
}

function negation() {
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  document.calculator.display.value = document.calculator.display.value * -1;
   document.calculator.display.value = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
   expressionArray[expressionArray.length - expressionArray.length] = expressionArray[expressionArray.length - expressionArray.length] * -1;
   console.log(expressionArray);
   if (document.calculator.display.value === "NaN") {
     document.calculator.display.value = "Error";
   }
   decimalInserted = true;
   decimalStatus = true;
  document.getElementById("buttonDecimal").disabled = true;
}

function percentage() {
  document.calculator.display.value = document.calculator.display.value.split(",").join("")
  if (finalSym == false) {
  if (firstPercent == false) {
    let numberCount = document.calculator.display.value.length
    numberCount = numberCount -1
    console.log(numberCount)
  let removed = expressionArray.length - numberCount
  while(expressionArray.length >= removed){
    expressionArray.pop();
  }
  document.calculator.display.value = document.calculator.display.value / 100
expressionArray[removed] = document.calculator.display.value
  console.log(expressionArray)
  firstPercent = true;
} else {
  let numberCount2 = document.calculator.display.value.length
  numberCount2 = numberCount2 - i
  console.log(numberCount2)
  let removed2 = expressionArray.length - numberCount2
expressionArray.splice(expressionArray.length - 1)
  document.calculator.display.value = document.calculator.display.value / 100
  expressionArray.push(document.calculator.display.value);
  console.log(expressionArray);
  if(document.calculator.display.value >= 0.9999999){
    let expon = Number(document.calculator.display.value)
    console.log(typeof expon);
    document.calculator.display.value = expon.toExponential(9)
  }
  console.log(expressionArray);
}
} else {
  document.calculator.display.value = document.calculator.display.value/100;
  expressionArray = [];
  expressionArray.push(document.calculator.display.value);
  let expon= Number(document.calculator.display.value);
  console.log(typeof expon);
  if(document.calculator.display.value >= 0.9999999){
  document.calculator.display.value = expon.toExponential(9);
    }
  }
}

function decbutton(num){
 if(decimalStatus == false){
   document.calculator.display.value = document.calculator.display.value + num;
   expressionArray.push(num);
   console.log(expressionArray);
   decimalStatus = true;
 }
}

