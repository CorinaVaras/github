// FizzBuzz
// for(i=1; i<=100; i++){
// 	if(i % 3 === 0 && i % 5 === 0){
// 		console.log('FizzBuzz');
// 	}else if(i % 3 === 0){
// 		console.log('Fizz');
// 	}else if(i % 5 === 0){
// 		console.log('Buzz');
// 	}
// }

//Tablero de Ajedrez
let result='';
for(row=1; row<=10; row++){
	for(column=1; column<=20; column++){
		if((row + column) % 2 === 0){
			result += ' ';
		}else{
			result += '#';
		}
	}
	result += '\n';
}
console.log(result);

// Front-End developer

