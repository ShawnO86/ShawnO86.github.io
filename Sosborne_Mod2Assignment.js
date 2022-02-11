var fName = document.querySelector('.fname');
var fNumber = document.querySelector('.fnum');
var dispName = document.querySelector('.displayFname');
var dispfNum = document.querySelector('.displayFnum');
var dispCircle = document.querySelector('.displayCircle');
const myPi = 3.1415926;


function displayInfo(){
    console.log("Submit button clicked.")

        if (!fNumber.value) {
            dispfNum.innerHTML = "Please enter your favorite number.<br>";
            console.log("Incorrect info");
        } else {
            var myArea = myPi * Math.pow(fNumber.value, 2);
            dispName.innerHTML = "Welcome, " + fName.value + "!<br>";
            dispfNum.innerHTML = "You entered: " + fNumber.value + " as your favorite number.<br>";
            dispCircle.innerHTML = "If your favorite number was the radius of a circle, the area of it would be " + myArea + " units!";

            console.log("The info has been displayed!");
        }
}

function deleteInfo(){
    fName.value = "";
    fNumber.value = "";
    dispName.innerHTML = "";
    dispfNum.innerHTML = "";
    dispCircle.innerHTML = "Form has been reset.";

    console.log("Reset button clicked.")
    console.log("The form has been reset.");
}