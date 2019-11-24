var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
document.writeln("Array Before Removal of Identical Elements : " + arr1 + "<br>");
for(var i = 0; i < arr1.length; i++)
{
    var j = i+1;
    while( j < arr1.length)
    {
        if(arr1[i] == arr1[j])
        {
            arr1.splice(j,1);
            if(arr1[i] != arr1[j])
                j++;
        }
        else
            j++;
    }
}
document.writeln("Array After Removal of Identical Elements : " + arr1 + "<br>");