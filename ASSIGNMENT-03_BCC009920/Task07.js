var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < a.length; i++)
{
    if(b.indexOf(a[i]) == -1)
    {
        b.push(a[i]);
    }
}
document.writeln("Output:<br> " + b);
