let expression = "";
let ans = 0;

function appendValue(value) {
  if (value === "√") {
    expression += "Math.sqrt(";
  } else if (value === "%") {
    expression += "/100";
  } else {
    expression += value;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("expression").innerText = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    ans = result;
    document.getElementById("result").innerText = result;
  } catch {
    document.getElementById("result").innerText = "Error";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "0";
}

function deleteChar() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function toggleSign() {
  if (expression.length > 0) {
    expression += "*-1";
    updateDisplay();
  }
}
