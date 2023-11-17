var scrn = document.getElementById("hello2");

function input(x) {
  scrn.value = scrn.value + x;
}

function allClear() {
  scrn.value = " ";
}

function del() {
  scrn.value = scrn.value.slice(0, -1);
}

function calc() {
  try {
    scrn.value = eval(scrn.value);
  } catch {
    scrn.value = "Error";
  }
}
