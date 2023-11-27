document.getElementById("calculateButton").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interestRate = parseFloat(document.getElementById("interest").value);

    const interestAmount = amount * (interestRate / 100);
    document.getElementById("interest").textContent = `Interest Amount: ${interestAmount}`;

    const interestInHex = convertToHex(interestAmount);
    document.getElementById("hexadecimal").textContent = `Hexadecimal Value: ${interestInHex}`;
});

function convertToHex(decimalValue) {
    const hexValue = decimalValue.toString(16);
    return hexValue;
}
