const numberGenerator = document.getElementById("random-number");
const button = document.getElementById("btn");
const error = document.querySelector(".error");
const minInput = document.getElementById("min");
const extraInput = document.getElementById("extra");

var min = 0;



function checkValid(){

    miles = minInput.value;
    extra_fuel = extraInput.value;
    if (extra_fuel === 'extra_false') {
        fuel = Math.ceil(miles * 0.48823529)
        numberGenerator.innerHTML = fuel;
    } else if (extra_fuel === 'extra_true') {
        fuel = Math.ceil(miles * 0.48823529) + 3
        numberGenerator.innerHTML = fuel;
    }
    

}



button.addEventListener("click", checkValid);