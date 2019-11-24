var A = ['cake','apple pie','cookie','chips', 'patties'];
var order = prompt("What would you like to eat? : ","cake");
B = A.indexOf(order);
if(B != -1)
{
    alert(order + " is Available and can be collected from Shelf Number " + B);
}
else{
    alert("We Are Sorry, "+order+" is not currently available in our Bakery");
}