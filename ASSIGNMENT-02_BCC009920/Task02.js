var Color = prompt("Enter Signal Color : " , "None");
if(Color.toLowerCase() == "red")
{
    document.writeln("Must Stop!");
}
else if(Color.toLowerCase() == "yellow")
{
    document.writeln("Ready to Move");
}
else if(Color.toLowerCase() == "green")
{
    document.writeln("Move Now");
}
else
{
    document.writeln("MUST Provide A Valid Signal COLOR (i.e RED,YELLOW,GREEN)!");
}