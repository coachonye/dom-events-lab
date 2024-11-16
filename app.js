// Cached Element References
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

// Event Listeners
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    handleButtonClick(event.target.innerText);
  });
});

// Functions
function handleButtonClick(value) {
  
  if (!isNaN(value)) {
    
    display.innerText += value;
  } else if (value === 'C') {
    
    display.innerText = '';
  } else if (value === '=') {
    // Calculate the result
    try {
      display.innerText = eval(display.innerText); 
    } catch (error) {
      display.innerText = 'Error';
    }
  } else {
    
    display.innerText += value;
  }
}