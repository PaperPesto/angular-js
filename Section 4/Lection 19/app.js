var tb = document.getElementById("name");

console.log(tb);

// Attacco un ascoltatore di eventi all'input html
tb.addEventListener("keypress",
    function (event) {
        console.log("Pressed!");
    });