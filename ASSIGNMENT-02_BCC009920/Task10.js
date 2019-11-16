var password = "SUFI123";
var input = prompt("Enter Password : ","");
if(input.length == 0){
    while (input.length <= 0)
    {
        alert("Password Field cannot be left empty");
        var input = prompt("Enter Password : ","");
    }
}
if(password == input)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect Password");
}