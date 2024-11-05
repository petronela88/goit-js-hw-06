let counterValue = 0;

const valueSpan = document.getElementById('value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

function updateDisplay() {
    valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', () => {
    counterValue -= 1; // Scadem 1 din valoarea contorului
    updateDisplay();    // Actualizam afisajul
});

incrementButton.addEventListener('click', () => {
    counterValue += 1; // Adaugam 1 la valoarea contorului
    updateDisplay();    // Actualizam afisajul
});