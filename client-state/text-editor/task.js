const textArea = document.querySelector('#editor');
const clearText = document.querySelector('#reset');
const storedText = localStorage.getItem('textInTextarea');

if(storedText) {
   textArea.value = storedText;  
  }

textArea.onkeyup = () => {
  localStorage.setItem('textInTextarea', textArea.value); 
}

clearText.addEventListener('click', () => {
  localStorage.removeItem('textInTextarea');
  textArea.value = '';
});