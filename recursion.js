function sum (num){
	if(num===0){
		return num  
	}
   return num + sum(num-1)
}

function factorial(num){
	if(num===1){
		return 1
	}
	return num*factorial(num-1)
}

function repeatString(str,n){
	if(n===0){
		return " "
	}
	return str + repeatString(str,n-1)
}

 //function fib(num){
	//if(num <= 1){
		//return 1;
	//}
	//return fib(num-2)+fib(num-1)

//}
 function multiplPlyBy10(num1,num2){
 	if(num2===0){
 		return num1
 	}
 	return 10 * multiplPlyBy10(num1,num2-1)
 }

 function sumBetween(start,end){
 	if(start>end){
 		return sumBetween(end,start)
 	}
 	if(start===end){
 		return start
 	}
 	return start + sumBetween(start+1,end)
 }

 function inc(num){
 	return num +1 
 }
 
 function dec(num){
 	return num-1
 }
 function add (num1,num2){
 	if(num2===0){
 		return num1
 	}
 	return inc(num1)+dec(num2)
 }
 function isEven(number){
 	if(number===0){
 		return true
 	}
 	if(number===1){
 		return false
 	}
 	return isEven(number-2)

 }
 function inc(num){
 return	num +1
 }
 function dec(num){
 	return num -1
 }
 function add(num1,num2){
 	if(num2===0){
 		return num1
 	}
 	return add(inc(num1),dec(num2))
 }
 function multiply(num1,num2){
 	if(num2===0){
 		return 0
 	}
 	return num1 + multiply(num1,num2-1) 
 }
 function stringLength(string){
 	var str = 0
 	while(string){
 		string =  string.slice(1)
 		str=str+1
 	}
 	return str
 }
 function modulo(n1,n2){
 	var sign = n1 < 0 ? -1:1;
 	var majdi = Math.abs(n1);
 	var emna = Math.abs(n2);

 	if(majdi===0){
 		return 0;
 	}
 	if(majdi===0 || isNaN(majdi) || isNaN(emna)){
 		return NaN;
 	}
 	if(majdi<emna){
 		return sign * majdi;
 	}
 	var pilaf = majdi;
 	while(pilaf>=emna){
 		pilaf=pilaf-emna
 	}
 	return sign*pilaf;
 }
 function range(min,max){
 	var ran = 0;
 	while(min<max){
 		  max=max-1
 		ran = ran +1
 	}
 	return ran
 }
 function repeatStr(sting,number){
 	if(number===0){
 		return " "
 	}
 	return string + repeatString(string+"s",number-1)

 }
 function modulu2 (num1,num2){
 	if(num1 - num2 < 0){
 		return num1;
 	}else{
 		return modulu2(num1 - num2,num2);
 	}
 }
 function sumAll(n){
 	if(n===0){
 		return 0
 	}else{
 		return n+sumAll(n-1)
 	}
 }