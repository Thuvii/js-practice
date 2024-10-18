var rowInput = document.getElementById('row')
var rowValue = document.querySelector('.row-value')
var columnInput = document.getElementById('column')
var columnValue = document.querySelector('.column-value')


columnValue.textContent = columnInput.value
rowValue.textContent = rowInput.value

function rangeInput(inputValue, outputValue){
  inputValue.addEventListener("input",(event)=>{
    outputValue.textContent = event.target.value;
  })
}
rangeInput(rowInput, rowValue)
rangeInput(columnInput, columnValue)
