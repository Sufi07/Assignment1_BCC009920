var time = prompt("Enter Time : ", "0000");
if(time.length == 4)
{
time = parseInt(time);
if((time >= 0000 && time < 1200) || time == 2400)
    alert("Good Morning");
else if(time >= 1200 && time < 1700)
    alert("Good Afternoon");
else if(time >= 1700 && time < 2100)
    alert("Good Evening");
else if(time >= 2100 && time <= 2359)
    alert("Good Night");
}
else
    alert("Wrong Time Format")