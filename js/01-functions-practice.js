//STEP 1
function halfNumber(num) {
    "use strict";
    return "Half of " + num + " is " + num / 2 + ".";
  }


//STEP 2
function squareNumber(num) {
    "use strict";
    return "The result of squaring the number " + num + " is " + num * num + ".";
}

//STEP 3
function percentOf(num1, num2) {
    "use strict";
    return num1 + " is " + num1 / num2 * 100 + "% of " + num2 + ".";
}

//STEP 4
function findModulus(num1, num2) {
    "use strict";
    return num2 % num1 + " is the modulus of " + num1 + " and " + num2 + ".";
}

// Main Function
function main() {
    "use strict";
    var chosenOption, num1, num2;

    

    while(true){
        chosenOption = parseInt(window.prompt("Menu:\n 1: Half a Number\n 2: Square a Number\n 3: Percent of a Number\n 4: Modulus of Numbers\n 5: Terminate"));

        if(chosenOption === 1){
            num1 = window.prompt("Enter a number: ");
            window.alert(halfNumber(num1));
        }
        else if (chosenOption === 2){
            num1 = window.prompt("Enter a number: ");
            window.alert(squareNumber(num1));
        }
        else if (chosenOption === 3){
            num1 = window.prompt("Enter the first number: ");
            num2 = window.prompt("Enter the second number: ");
            window.alert(percentOf(num1,num2));
        }
        else if (chosenOption === 4){
            num1 = window.prompt("Enter the first number: ");
            num2 = window.prompt("Enter the second number: ");
            window.alert(findModulus(num1,num2));
        }
        else if (chosenOption === 5){
            break;
        }
    }
}
main(); 
