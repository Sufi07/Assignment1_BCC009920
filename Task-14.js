var a  = 2, b = 1;
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>")
document.write("--a: " + --a + "<br>a: " + a +"<br>Explanation: --a it is prefix decrement operation, meaning that the value of 'a' will be decremented before the evaluation of value of 'a' for the expression.<br>");
document.write("--a - --b: " + ((--a) - (--b))+ "<br>a: " + a + "<br>b: " + b + "<br>Explanation: --b it is prefix decrement operation, meaning that the value of 'a' and 'b' will be decremented before the evaluation of value of 'a' and 'b' for the expression.<br>");
document.write("--a - --b + ++b: " + ((--a) - (--b) + (++b)) + "<br>a: " + a + "<br>b: " + b + "<br>Explanation: --a ++b They are prefix increment and decrement operation, meaning that the value of 'a' and 'b' will be incremented and decremented before the evaluation of value of 'a' and 'b' for the expression.<br>");
document.write("--a - --b + ++b + b--: " + (--a - --b + ++b + b--) + "<br>a: " + a + "<br>b: " + b + "<br>Explanation: --a --b ++b they are prefix increment and decremented operation, meaning that the value of 'a' and 'b' will be decremented and incremented before evaluation of value of 'a' and 'b' for the expression. b++ it is postfix increment operation meaning that the value of 'b' will be incremented after the evaluation of value of 'b' for the expression.");
var result = --a - --b + ++b + b--;
document.write("<br>--a - --b + ++b + b-- Result: " + result);