var ch = prompt("Enter a Character : ", '');
if(ch.length == 1)
{
    ch = ch.toLowerCase();
    if(ch == 'a' || ch == 'e' ||ch == 'i' ||ch == 'o' ||ch == 'u')
        alert("Input Charater is a vowel");
    else
        alert("Input Charater is NOT a vowel");
}
else
{
    alert("Input is not a character");
}