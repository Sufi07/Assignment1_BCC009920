var C = [20,53,78,4,91,12];
document.writeln("Array Items : " + C + "<br>");
C.sort(function sorting (a,b){
    return a-b;
});
document.writeln("Array after sorting is : " + C);