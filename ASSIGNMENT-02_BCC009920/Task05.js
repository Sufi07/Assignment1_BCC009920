var number = Math.floor((Math.random() * 10) + 1);
var guess = prompt("Guess a Number between 1 to 10" , 0);

if(parseInt(guess) <= 10 && parseInt(guess) > 0)
{
    if(number == guess)
    {
        alert("Bingo! Correct Guess it was");
    }
    else if(number - 1 == guess || number + 1 == guess)
    {
        alert("Close Enough to the correct answer");
    }
    else
    {
        alert("Bad Luck Your Guess was no where near the Number\nThe Random Number was : "+number);
    }
}
else
{
    alert("Input must be less than 10 and greater than 0")
}