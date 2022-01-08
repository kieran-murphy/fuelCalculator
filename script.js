const numberGenerator = document.getElementById("random-number");
const button = document.getElementById("btn");
const error = document.getElementById("error");
const milesInput = document.getElementById("miles");
const extraInput = document.getElementById("extra");


function checkValid(){
    miles = milesInput.value;
    extra_fuel = extraInput.value;
    if (extra_fuel === 'extra_false') {
        fuel = Math.ceil(miles * 0.48823529)
        if (miles > 680) {
            //alert("Nautical miles must be less than 680!")
            error.innerHTML = "Nautical miles must be less than 680";
            numberGenerator.innerHTML = 0;
        } else {
            numberGenerator.innerHTML = fuel;
            error.innerHTML = "";
        }
        
    } else if (extra_fuel === 'extra_true') {
        fuel = Math.ceil(miles * 0.48823529) + 3
        if (miles > 680) {
            //alert("Nautical miles must be less than 680!")
            error.innerHTML = "Nautical miles must be less than 680";
            numberGenerator.innerHTML = 0;
        } else {
            numberGenerator.innerHTML = fuel;
            error.innerHTML = "";
        }
    }
}

/* button.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkValid()
    }
}); */
button.addEventListener("click", checkValid);



