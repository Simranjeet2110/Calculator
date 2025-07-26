let input = "";

function press(value) {
  input += value;
  document.getElementById("display").value = input;
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById("display").value = input;
  } catch {
    document.getElementById("display").value = "Error";
    input = "";
  }
}

function clearDisplay() {
  input = "";
  document.getElementById("display").value = "";
}
