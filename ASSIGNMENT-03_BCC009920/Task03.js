var Colors = ['Red','Yellow','Green','Blue','Cyan','Magenta','Black'];
var New_Color = "";
document.writeln("Array Of Colors Initially : <br>" + Colors+ '<br><br>');
document.writeln('<button onclick="input_Function()">Click to Proceed</button>'+ '<br><br>');
function input_Function()
{
    New_Color = prompt("which color you want to add in the array?","None");
    Colors.unshift(New_Color);
    document.writeln("Array Of Colors After New Input : <br>" + Colors+ '<br><br>')
    document.writeln('<button onclick="input_Function2()">Click to Proceed</button>' + '<br><br>');
}
function input_Function2()
{
    New_Color = prompt("which color you want to add in the array?","None");
    Colors.push(New_Color);
    document.writeln("Array Of Colors After New Input : <br>"+ Colors+ '<br><br>');
    Colors.unshift("Malachite","Arsenic");
    document.writeln("Array Of Colors After two New Programmer Defined Colors : <br>"+ Colors+ '<br><br>');
    Colors.splice(0,1);
    document.writeln("Array Of Colors After Deleted Color from the start : <br>"+ Colors+ '<br><br>');
    document.writeln('<button onclick="input_Function3()">Click to Proceed</button>' + '<br><br>');
}
function input_Function3()
{
    var index = prompt("Which Index You Want to add element at?",0);
    New_Color = prompt("which color you want to add in the array?","None");
    Colors.splice(index,0,New_Color);
    document.writeln("Array Of Colors After New Input : <br>"+ Colors+ '<br><br>');
    var del = confirm("Do You Want to Delete a color from the list?");
    if(del)
    {
        document.writeln('<button onclick="input_Function4()">Click to Proceed</button>' + '<br><br>');
    }
}
function input_Function4()
{
    var qty = prompt("How Many Colors You Want to Delete?",0);
    var index = prompt("Enter The Index Value Where you Want to Delete the items!",0);
    Colors.splice(index,qty);
    document.writeln("Array Of Colors After Removal Of elements : <br>"+ Colors + '<br><br>');
}