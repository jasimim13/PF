document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const resutField = document.getElementById("result");

    const Addition = document.getElementById("Addition");
    const Subtraction = document.getElementById("Subtraction");
    const Multiplication = document.getElementById("Multiplication");
    const Division = document.getElementById("Division");

    let result;

    switch (true) {
        case Addition.checked:
          result = number1 + number2;
          break;
        case Subtraction.checked:
          result = number1 - number2;
          break;
        case Multiplication.checked:
          result = number1 * number2;
          break;
        case Division.checked:
          result = number1 / number2;
          break;
        default:
          result = "Invalid operation";
      }

    resutField.value = result;
  });
});