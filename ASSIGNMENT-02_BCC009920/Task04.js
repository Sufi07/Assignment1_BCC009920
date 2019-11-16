var Subject1 = prompt("Enter Marks in First Subject : ",0);
var Subject2 = prompt("Enter Marks in Second Subject : ",0);
var Subject3 = prompt("Enter Marks in Third Subject : ",0);
var Maximum = prompt("Enter Maximum Marks of the Three Subject : ",0);
var Marks_Obtained = (parseInt(Subject1) + parseInt(Subject2)+ parseInt(Subject3));
var percentage = (( Marks_Obtained/Maximum)*100);
document.writeln("Total Marks    : ", Maximum,"<br>");
document.writeln("Marks Obtained : ", Marks_Obtained,"<br>");
document.writeln("Percentage     : ", percentage,"%<br>");
if(percentage >= 80)
{
    document.writeln("Grade          : ", "A-one" ,"<br>");
    document.writeln("Remarks        : ", "Excellent" ,"<br>");
}
else if(percentage >= 70)
{
    document.writeln("Grade          : ", "A" ,"<br>");
    document.writeln("Remarks        : ", "Good" ,"<br>");
}
else if(percentage >= 60)
{
    document.writeln("Grade          : ", "A" ,"<br>");
    document.writeln("Remarks        : ", "You Need To Improve" ,"<br>");
}
else
{
    document.writeln("Grade          : ", "F" ,"<br>");
    document.writeln("Remarks        : ", "Sorry" ,"<br>");
}   