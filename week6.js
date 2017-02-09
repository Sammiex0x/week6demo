var start = 3;

function changeHead2 () {



var origHead2 = document.getElementById("head2").innerHTML;

var newHead2 = "new " + origHead2;

document.getElementById("head2").innerHTML = newHead2;

}

function addInputs() {

    var currTotal = document.getElementById("Total").innerHTML;
    if (isNaN(currTotal)) {
        currTotal = start;
    }
    var myInput = document.getElementById("myinput").value;

    var newTotal = +myInput + +currTotal;

    document.getElementById("Total").innerHTML = newTotal;

}