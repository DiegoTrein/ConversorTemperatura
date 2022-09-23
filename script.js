const celsiusInput =   document.getElementById("celsius"); 
const fahrenheitInput =document.getElementById("fahrenheit");
const kelvinInput =    document.getElementById("kelvin");
const rankineInput =   document.getElementById("rankine");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) { 
    let input = inputs[i]; 
    
    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value); 
        switch (e.target.name) { 
                case "celsius":
                kelvinInput.value = value + 273.15;
                fahrenheitInput.value = (value * 1.8) + 32;
                rankineInput.value = (value * 1.8) + 491.67;
                break;
                
            case "fahrenheit":
                rankineInput.value = value + 459.67;
                celsiusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15;
                break;

            case "kelvin":
                rankineInput.value = (value * 1.8);
                celsiusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;

            case "rankine":
                kelvinInput.value = value * 5/9;
                fahrenheitInput.value = value - 459.67;
                celsiusInput.value = (value - 491.67) * 5/9;
                
               
                break;

        }
    });



}
