var expression='';
var display='';
var symbol=false;
var decimalZero=false;
var decimalPoint=true;
var decimalNum=false;
var numlength=1;
var ans='';
var ansNum=false;
function fourfunction(operation) {
  if(operation == '+' && symbol==true) {
    expression+="+";
    display+="+";
    document.getElementById('addition').innerHTML=display;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation=='x' && symbol==true){
    expression+='*';
    display+="x";
    document.getElementById('addition').innerHTML=display;
    symbol=false;
	numlength=1;
	ansNum=false
  }
  if(operation == '/' && symbol==true) {
    expression+="/";
    display+="/";
    document.getElementById('addition').innerHTML=display;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation=='-' && symbol==true){
    expression+='-';
    display+="-";
    document.getElementById('addition').innerHTML=display;
    symbol=false;
    numlength=1;
    ansNum=false
  }
  if(operation == '%' && symbol==true){
    expression+='*.01'
    display+="%";
    document.getElementById('addition').innerHTML=display;
    ansNum=false
  }
  if (operation=='.' && symbol==true && decimalNum==false && ansNum==false){
    expression+='.'+'0';
    display+='.'+'0';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    decimalZero=true;
    decimalPoint=true;
    decimalNum=true;
  }
  if(operation=='x^2' && symbol==true){
	display+='^2';
	expression+='**2';
    document.getElementById('addition').innerHTML=display;
  }
  if(operation=='x^3' && symbol==true){
	display+='^3';
	expression+='**3';
	document.getElementById('addition').innerHTML=display;
  }
  if(operation=='x^y' && symbol==true){
	display+='^';
	expression+='**';
	document.getElementById('addition').innerHTML=display;
	ansNum=false;
	symbol=false;
  }
}
function numbers(operation){
  if(decimalZero==true){
    let r=expression.split('')
    let q=display.split('')
    r.pop();
    q.pop();
    expression=r.join('');
    display=q.join('')
    decimalZero=false;
  }

  if(operation=='del') {
	  let z=display.split('');
	  let r=expression.split('');

	  if(z[z.length-1]=='^'){
	    z.pop();
	    r.pop();
	    r.pop();
	  }else{
      let temp=z.pop();
      let temp2=r.pop();
      if(Number.isInteger(Number(temp))){
        symbol=false;
      }else{
        symbol=true;
      }
    }
    numlength--;
	  expression=r.join('');
	  display=z.join('')
	  document.getElementById('addition').innerHTML=display;
  }
  if (operation=="negation"){
	  let z=display.split('');
	  let r=expression.split('');

	  let x=true;
	  let y=true;
	  for(let i=display.length-1;i>=0;i--){
		  if((display[i]=='x'||display[i]=='/'||display[i]=='+'||display=='-'||display[i]=='^') && x==true){
			  x=false;
			  var tempArray=[];
			  for(let j=0; j<=i; j++){
				  let temp=z.shift();
				  tempArray[j]=temp;
			  }
			  z.unshift('-');
			  let arrayLength=tempArray.length;
			  for(let k=0;k<arrayLength;k++){
				let temp2=tempArray.pop();
				z.unshift(temp2);
			  }
		  }
	  }
	  for(let n=expression.length-1; n>=0;n--){
		if((expression[n]=='*'||expression[n]=='-'||expression[n]=='+'||expression[n]=='/')&& y==true){
			y=false;
			var tempArray2=[];
			for(let m=0;m<=n;m++){
				let temp=r.shift();
				tempArray2[m]=temp;
				console.log(tempArray);
			}
			console.log("1.")
			console.log(r)
			r.unshift('-');
			console.log("2.")
			console.log(r);
			let arrayLength2=tempArray2.length;
			for(let s=0;s<arrayLength2;s++){
				let temp2=tempArray2.pop();
				r.unshift(temp2);
			}
		}
	  }
	if(x==true){
	  z.unshift('-');
	}
	if(y==true){
	  r.unshift('-');
	}
	display=z.join('');
 	expression=r.join('');
 	document.getElementById('addition').innerHTML=display;
  }


  if (operation=='0' && numlength<=9 && ansNum==false){
    expression+='0';
    display+='0';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='1'&& numlength<=9 && ansNum==false){
    expression+='1';
    display+='1';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='2'&& numlength<=9 && ansNum==false){
    expression+='2';
    display+='2';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='3'&& numlength<=9 && ansNum==false){
    expression+='3';
    display+='3';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='4'&& numlength<=9 && ansNum==false){
    expression+='4';
    display+='4';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='5'&& numlength<=9 && ansNum==false){
    expression+='5';
    display+='5';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='6'&& numlength<=9 && ansNum==false){
    expression+='6';
    display+='6';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='7'&& numlength<=9 && ansNum==false){
    expression+='7';
    display+='7';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='8'&& numlength<=9 && ansNum==false){
    expression+='8';
    display+='8';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='9'&& numlength<=9 && ansNum==false){
    expression+='9';
    display+='9';
    document.getElementById('addition').innerHTML=display;
    symbol=true;
    numlength++;
  }
  if (operation=='ans' && ans != '' && symbol==false){
  expression+='ans';
  display+='ans';
  document.getElementById('addition').innerHTML=display;
  symbol=true;
  decimalNum=false;
  ansNum=true;
  }
}
function AC(){
  expression='';
  display='';
  symbol=false;
  document.getElementById('addition').innerHTML=display;
	decimalZero=false;
	decimalPoint=true;
	decimalNum=false;
	numlength=1;
  ansNum=false;
}
function commas(display){
  let r=display.split('');
  for(let i=display.length-1;i>=0;i--){
    if(display[i]=='x'||display[i]=='/'||display[i]=='^'||display[i]=='-'||display[i]=='+'){

    }
  }

}
function equals(operation){
  let finalExpression=eval(expression);
  if (operation== '='){
    if (finalExpression==Infinity||finalExpression==undefined){
      console.log(finalExpression)
      document.getElementById('addition').innerHTML="U Hav Made A Grave Mistake";
    }
    else if(finalExpression>=1000000000){
      let exponent=finalExpression.toString().length-1;
      document.getElementById('addition').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;

    }
    else if(finalExpression<=-1000000000){
	  let exponent=finalExpression.toString().length-2;
	  document.getElementById('addition').innerHTML=finalExpression/(10**(exponent))+'e'+exponent;
	}
    else{
      document.getElementById('addition').innerHTML=finalExpression.toLocaleString();
    }

  }

    ans=finalExpression;
    expression='';
    display='';
    finalExpression='';
    ansNum=false;
    symbol=false;

}
