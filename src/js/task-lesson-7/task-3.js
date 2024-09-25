const textInput = document.querySelector('#name-input')
const outputText = document.querySelector('#name-output')

textInput.addEventListener('input', headLissenerInputText)


function headLissenerInputText(event) {
  const inputValue = event.target.value.trim()


  if (inputValue === '') {
    outputText.textContent = 'Anonymous'
  } else {
    outputText.textContent = inputValue;
  }

  
  

}



