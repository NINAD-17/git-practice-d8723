const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const submitBtn = document.getElementById("submitBtn");

function add(num1, num2) {
    console.log(num1 + num2);
}

submitBtn.addEventListener("click", add);