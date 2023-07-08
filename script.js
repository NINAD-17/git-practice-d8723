// Constants
const submitBtn = document.getElementById("submitBtn");

function add() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    console.log(num1 + num2);
}

submitBtn.addEventListener("click", add);