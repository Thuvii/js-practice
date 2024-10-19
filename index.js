var rowInput = document.getElementById("row");
var rowValue = document.querySelector(".row-value");
var columnInput = document.getElementById("column");
var columnValue = document.querySelector(".column-value");

var canva = document.getElementById("canva");
var createBtn = document.querySelector('.createBtn')

columnValue.textContent = columnInput.value;
rowValue.textContent = rowInput.value;

function rangeInput(inputValue, outputValue) {
  inputValue.addEventListener("input", (event) => {
    outputValue.textContent = event.target.value;
  });
}
rangeInput(rowInput, rowValue);
rangeInput(columnInput, columnValue);

function createCanva(columnValue, rowValue) {
  var canvaSize = columnValue * rowValue;
  canva.innerHTML = "";
  for (var i = 0; i < canvaSize; i++) {
    const box = document.createElement("div");
    box.classList.add(".grid");
    box.style.flex = `1 0 calc(100%/ ${canvaSize})`;
    box.style.height = `calc(100%/ ${canvaSize})`;
    canva.appendChild(box)
  }
}

createBtn.addEventListener('click',createCanva(columnInput.value, rowInput.value))
