//Get the modal
var modal = document.getElementById("testModal");

//Get the button that opens the modal
var button = document.getElementById("openButton");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Open the modal when button is clicked
button.onclick = function() {
    modal.style.display = "block";
}

//When the user clicks on <span>, close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//When the user clicks outside fo the modal, it closes
window.onclick = function(event) {
    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}
