var num = prompt("Enter Number for Counting : ",0);
document.writeln("Counting: ");
for(var i = 0 ;  i < num ; i++)
{
    document.writeln(i+1 + "  ");
}
document.writeln("<br>");
document.writeln("Reverse Counting: ");
for(var i = num ;  i > 0 ; i--)
{
    document.writeln(i + "  ");
}
document.writeln("<br>");
document.writeln("Even: ");
for(var i = 0 ;  i <= num ; i+=2)
{
    document.writeln(i + "  ");
}
document.writeln("<br>");
document.writeln("ODD: ");
for(var i = 1 ;  i <= num ; i+=2)
{
    document.writeln(i + "  ");
}
document.writeln("<br>");
document.writeln("Series: ");
num = parseInt((num.toString() + "000"));
for(var i = 2000 ;  i <= num ; i+=2000)
{
    document.writeln(i + "  ");
}
document.writeln("<br>");