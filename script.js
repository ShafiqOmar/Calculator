const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let current = "";
let operator = "";
let previous = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === ".") {
      current += value;
      display.textContent = current;
    }

    else if (value === "AC") {
      current = "";
      previous = "";
      operator = "";
      display.textContent = "0";
    }

    else if (value === "DEL") {
      current = current.slice(0, -1);
      display.textContent = current || "0";
    }

    else if (["+", "-", "/", "x"].includes(value)) {
  if (current === "") return;

  operator = value === "x" ? "*" : value;
  previous = current;
  current = "";

  // 👇 OPERATÖRÜ EKRANDA GÖSTER
  display.textContent = previous + value;
}

    else if (value === "=") {
      if (current && previous && operator) {
        current = eval(previous + operator + current).toString();
        display.textContent = current;
        previous = "";
        operator = "";
      }
    }

    else {
      operator = value;
      previous = current;
      current = "";
    }
  });
});