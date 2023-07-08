// Constants
const submitBtn = document.getElementById("submitBtn");


// Addition function
function add() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    console.log(num1 + num2);
}

// Submit button
submitBtn.addEventListener("click", add);