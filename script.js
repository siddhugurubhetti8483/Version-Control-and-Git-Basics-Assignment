

// JavaScript to change background color on button click
document.getElementById("changeColorBtn").addEventListener("click", function() {
    // Random color generation
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Change background color of the body
    document.body.style.backgroundColor = randomColor;
});

