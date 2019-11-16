var number1 = parseInt(prompt("Enter First Value : ",0));
var number2 = parseInt(prompt("Enter Second Value : ",0));
var Operation = prompt("Enter an Operation (i.e + - * /",'+');
document.writeln("First  Number : " , number1 ,"<br>");
document.writeln("Second Number : " , number2,"<br>");
document.writeln("Operator : " , Operation,"<br>");
if(Operation === '+')
{
   document.writeln("Result : " , number1+number2);
}
else if(Operation === '-')
{
   document.writeln("Result : " , number1-number2);
}
else if(Operation === '*')
{
   document.writeln("Result : " , number1*number2);
}
else if(Operation === '/')
{
   document.writeln("Result : " , number1/number2);
}
else
{
   document.writeln("Wrong Operator Provided");
}