
var Num = prompt("Enter Your Number");
//Task1 
/*if(Num % 2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}*/



//Task2
/*const pi = Math.PI;
var Area = pi * Num  * Num ;
var Circumference = 2 * pi * Num  ;
console.log("The Area is = " + Area);  
console.log("The Circumference is = " + Circumference); 
*/
// or 
/*const pi = Math.PI;
var Area = pi * Math.pow(Num , 2) ;
var Circumference = 2 * pi * Num  ;
console.log("The Area is = " + Area);  
console.log("The Circumference is = " + Circumference); 
*/

//Task3
/*var sum = 0;
var Num1 = prompt("Enter Your firstNumber");
var Num2 = prompt("Enter Your secondNumber");
Num1 = Number(Num1);
Num2 = Number(Num2);
sum = Num1 + Num2 ;
console.log("The sum is = " + sum); */

//Task4
/*var Num = prompt("Enter Your Number");
if (Num > 0){
    console.log("Positive");
}
else if (Num < 0 ){
    console.log("Negative");
}
else{
    console.log(0);
}*/

//Task5
/*var Array= ['Welcome'];
var Words = Array[0];
var reverseWords = '';
for (let i = Words.length-1;i >= 0 ; i--){
    reverseWords = reverseWords + Words[i];
}
Array[0]=reverseWords;
console.log(reverseWords);
*/
/*var arr = ['Welcome'];
var Words = arr[0];
var reverseWords = Words.split('').reverse().join('');
arr = [reverseWords];
console.log(arr);
*/

//Task6
/*var friends = ['waad','Ahmed','yara' , 'mazen'];
console.log(friends);
friends.unshift('tala');
friends.push('talen');
friends.shift();
friends.pop();
console.log(friends);
console.log(friends.length);
friends.splice(1,1); // splice(item i want to delete , number of items)
console.log(friends)
friends.splice(2,0,'Mahmoud', 'sila'); //splice(the place i start to add  , number of items to delete  , items to add );
console.log(friends) */