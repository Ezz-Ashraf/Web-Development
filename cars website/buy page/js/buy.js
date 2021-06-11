var mycurrency = document.getElementById("currency"),
myresult = document.getElementById("result"),
mycar = document.getElementById("car");

function calc()
{
"use strict";
myresult.innerHTML = "equal   " + mycar.value * mycurrency.value;
};