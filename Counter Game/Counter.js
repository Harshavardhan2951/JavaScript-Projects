let count = 0;

// Function for Decrease Button
document.getElementById("decbutton").onclick = function() {
    count -= 1;
    document.getElementById("Number").innerHTML = count;
}

// Function for Reset Button
document.getElementById("rstbutton").onclick = function() {
    count = 0;
    document.getElementById("Number").innerHTML = count;
}

// Function for Increase Button
document.getElementById("incbutton").onclick = function() {
    count += 1;
    document.getElementById("Number").innerHTML = count;
}