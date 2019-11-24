var Cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
for(var i = 0; i < Cities.length; i++)
{
    if(i == 0)
        document.writeln((i+1) + o[1] + ") " + Cities[i]  + "<br>");
    else if(i == 1)
        document.writeln((i+1) + o[2] + ") " + Cities[i] + "<br>");
    else if(i == 2)
        document.writeln((i+1) + o[3] + ") " + Cities[i] + "<br>");
    else
        document.writeln((i+1) + o[0] + ") " + Cities[i] + "<br>");

}