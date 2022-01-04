const numberGenerator = document.getElementById("random-number");
const button = document.getElementById("btn");
const error = document.querySelector(".error");
const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");

var min = 0;



function checkValid(){

    miles = minInput.value;
    fuel = Math.ceil(miles * 0.48823529)
    numberGenerator.innerHTML = fuel;

}



button.addEventListener("click", checkValid);