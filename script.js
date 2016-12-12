function calculateTip() {
    'use strict';
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("each").style.display = "none";
    document.getElementById("error2").style.display = "none";

    // Store the data of inpts
    var billAmount = document.getElementById("billAmount").value,
        serviceQuality = document.getElementById("serviceQuality").value,
        numPeople = document.getElementById("totalPeople").value;

    // Quick validation
   if(billAmount === "" || serviceQuality == 0) {
        window.alert("Please enter some values");
        return; // this will prevent the function from continuing
    }

    // Check to see if empty or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }
     else if(numPeople % 1 != 0) {
        document.getElementById("error2").style.display = "block";
        return;}
    else {
        document.getElementById("each").style.display = "block";
    }

    // Math!
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


// Clicking the button calls our custom function
document.getElementById("calculate").onclick = function() {calculateTip(); };
