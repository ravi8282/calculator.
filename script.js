const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";
let justEvaluated = false;

const updateDisplay = (value) => {
  display.value = value || "0";
};

const appendValue = (value) => {
  if (justEvaluated && /[0-9.]/.test(value)) {
    expression = "";
  }
  justEvaluated = false;

  if (value === ".") {
    const parts = expression.split(/[-+*/%]/);
    const current = parts[parts.length - 1];
    if (current.includes(".")) return;
  }

  expression += value;
  updateDisplay(expression);
};

const clearAll = () => {
  expression = "";
  updateDisplay("0");
};

const deleteOne = () => {
  expression = expression.slice(0, -1);
  updateDisplay(expression);
};

const sanitize = (expr) => expr.replace(/[^0-9+\-*/%.]/g, "");

const calculate = () => {
  if (!expression) return;
  try {
    const safe = sanitize(expression);
    const result = Function(`"use strict"; return (${safe})`)();
    expression = Number.isFinite(result) ? String(result) : "";
    updateDisplay(expression || "0");
    justEvaluated = true;
  } catch (err) {
    updateDisplay("Error");
    expression = "";
  }
};

buttons.forEach((btn) => {
  const value = btn.getAttribute("data-value");
  const action = btn.getAttribute("data-action");

  if (value) {
    btn.addEventListener("click", () => appendValue(value));
  }

  if (action === "clear") {
    btn.addEventListener("click", clearAll);
  }

  if (action === "delete") {
    btn.addEventListener("click", deleteOne);
  }

  if (action === "equals") {
    btn.addEventListener("click", calculate);
  }
});

window.addEventListener("keydown", (event) => {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    appendValue(key);
    return;
  }

  if (["+", "-", "*", "/", "%", "."].includes(key)) {
    appendValue(key);
    return;
  }

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
    return;
  }

  if (key === "Backspace") {
    deleteOne();
    return;
  }

  if (key.toLowerCase() === "c") {
    clearAll();
  }
});
