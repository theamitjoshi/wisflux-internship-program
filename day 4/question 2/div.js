function multiplyBy()
{
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = num1 * num2;
}


function divideBy() 
{ 
    num1 = document.getElementById("first").value;
    num2 = document.getElementById("second").value;
    document.getElementById("result").innerHTML = num1 / num2;
} var e = 5;
var f = 6;
var g = 7;

var z = (e + f + g)/2;
var area = Math.sqrt(z*((z-e)*(z-f)*(z-g)));

console.log(`\nThe area of the triangle is: ${area}`)