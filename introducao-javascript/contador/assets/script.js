let currentNumberWrapper1 = document.getElementById("currentNumber1");
let currentNumberWrapper2 = document.getElementById("currentNumber2");
let sub = document.getElementById("subtrair");
let add = document.getElementById("adicionar");
let currentNumber = 0;

let increment = () => {
  currentNumber++;
  elementColor(currentNumber, currentNumberWrapper1);
  currentNumberWrapper1.innerHTML = currentNumber;
};

let decrement = () => {
  currentNumber--;
  elementColor(currentNumber, currentNumberWrapper1);
  currentNumberWrapper1.innerHTML = currentNumber;
};

sub.addEventListener("click", function () {
  currentNumber--;
  elementColor(currentNumber, currentNumberWrapper2);
  if (currentNumber >= -10) {
    currentNumberWrapper2.innerHTML = currentNumber;
  }
  if (currentNumber < 0) {
    currentNumberWrapper2.classList.add("negative");
  }
});

add.addEventListener("click", function () {
  currentNumber++;
  elementColor(currentNumber, currentNumberWrapper2);
  if (currentNumber <= 10) {
    currentNumberWrapper2.innerHTML = currentNumber;
  }
  if (currentNumber >= 0) {
    currentNumberWrapper2.classList.remove("negavite");
  }
});

let elementColor = (i, element) => {
  if (i < 0) {
    element.style.color = "red";
  } else {
    element.style.color = "green";
  }
};
