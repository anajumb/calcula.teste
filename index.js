let result = document.getElementById("result");

function appendValue(value) {
    result.value += value;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    result.value = eval(result.value);
}
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        switch (button.textContent) {
            case "C":
                clearResult();
                break;
            case "=":
                calculateResult();
                break;
            default:
                appendValue(button.textContent);
                break;
        }
    });
});
