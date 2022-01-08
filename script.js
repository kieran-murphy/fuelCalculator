const numberGenerator = document.getElementById("random-number");
const button = document.getElementById("btn");
const error = document.querySelector(".error");
const milesInput = document.getElementById("miles");
const extraInput = document.getElementById("extra");



function checkValid(){
    miles = milesInput.value;
    extra_fuel = extraInput.value;
    if (extra_fuel === 'extra_false') {
        fuel = Math.ceil(miles * 0.48823529)
        if (miles > 680) {
            alert("Nautical miles exceeded 680!")
        } else {
            numberGenerator.innerHTML = fuel;
        }
        
    } else if (extra_fuel === 'extra_true') {
        fuel = Math.ceil(miles * 0.48823529) + 3
        if (miles > 680) {
            alert("Nautical miles exceeded 680!")
        } else {
            numberGenerator.innerHTML = fuel;
        }
    }
}



button.addEventListener("click", checkValid);
