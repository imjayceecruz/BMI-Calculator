
function CalculateBMI(){

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    let bmi = (weight / (height * height)).toFixed(3);

    document.getElementById("BMI").value = bmi;

    if(bmi < 18.5){
        document.getElementById("rate").innerHTML = "Underweight";
    }else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("rate").innerHTML = "Normal";
    }else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById("rate").innerHTML = "Overweight";
    }else if(bmi >= 30 && bmi <= 39.9){
        document.getElementById("rate").innerHTML = "Obese";
    }else if(bmi > 40){
        document.getElementById("rate").innerHTML = "Extremely Obese";
    } else{
        document.getElementById("rate").innerHTML = "Invalid";

    }

}
