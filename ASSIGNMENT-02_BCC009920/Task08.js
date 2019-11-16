var input = parseInt(prompt("Enter a number : ",0));
if(input > 0)
{
    document.writeln("Input Number : "+input + "<br>");
    document.writeln("The Input Number is Positive");
}
else if(input == 0)
{
    document.writeln("Input Number : "+input + "<br>");
    document.writeln("The Input Number is Zero.");
}
else
{
    document.writeln("Input Number : "+input + "<br>");
    document.writeln("The Input Number is Negative.");
}   