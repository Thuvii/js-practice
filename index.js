var rowInput = document.getElementById('row')
var rowValue = document.querySelector('.row-value')

rowValue.textContent = rowInput.value
rowInput.addEventListener("input",(event) =>{
  rowValue.textContent =event.target.value;
})


