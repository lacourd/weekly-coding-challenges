function FirstReverse(str) { 
	let newStr ="";
	for (i = 1; i < str.length + 1; i++) {
	  newStr += str[str.length-i]
	}
	return newStr; 

}
   
// keep this function call here 
console.log(FirstReverse(readline()));