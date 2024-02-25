const display = document.querySelector(".input-text");
const key = document.querySelectorAll(".key");
const deletekey = document.querySelector(".delete-key");
const resetkey = document.querySelector(".reset-key");
const equalkey = document.querySelector(".equal-key");

let decimal = false;
let operator = false;

// reset
resetkey.addEventListener("click", () => {
  display.value = "";
});

// delete
deletekey.addEventListener("click", () => {
  let del = display.value;
  // if dot operator included in delete number then decimal to false
  if (".".includes(display.value[del.length - 1])) {
    decimal = false;
  }
  let updatedvalue = del.substring(0, del.length - 1);
  display.value = updatedvalue;
});

// keypress validate and display
let keypressed = Array.from(key);
keypressed.forEach((element) => {
  element.addEventListener("click", (e) => {
    let value = e.target.innerHTML;
    if (value == "." && decimal) {
      return;
    }
    if ("+-/x".includes(value)) {
      if (operator) {
        let presentvalue = display.value;
        let updatedvalue =
          presentvalue.substring(0, presentvalue.length - 1) + value;
        display.value = updatedvalue;
        return;
      }
      decimal = false;
      operator = true;
    } else {
      operator = false;
      if (value == ".") {
        decimal = true;
      }
    }
    display.value += value;
  });
});

// addition
equalkey.addEventListener("click", () => {
  if ("+-/x".includes(display.value)) {
    return;
  } else {
    formatedinput = display.value.replace("x", "*");
    display.value = eval(formatedinput);
    decimal = false;
    operator = false;
  }
});
