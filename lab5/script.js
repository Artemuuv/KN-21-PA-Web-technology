
const textToChange = document.getElementById('text-to-change');
const btnChangeText = document.getElementById('btn-change-text');

btnChangeText.addEventListener('click', function() {
    textToChange.textContent = "Текст змінено! Це новий вміст.";
});
const hoverBtn = document.getElementById('hover-btn');
const hoverText = document.getElementById('hover-text');

hoverBtn.addEventListener('mouseover', function() {
    hoverBtn.style.backgroundColor = "#4CAF50";
    hoverBtn.style.color = "white";
    hoverText.style.fontWeight = "bold";
    hoverText.style.color = "#4CAF50";
});

hoverBtn.addEventListener('mouseout', function() {
    hoverBtn.style.backgroundColor = "";
    hoverBtn.style.color = "";
    hoverText.style.fontWeight = "normal";
    hoverText.style.color = "";
});
const btnAddElement = document.getElementById('btn-add-element');
const elementsContainer = document.getElementById('elements-container');

btnAddElement.addEventListener('click', function() {
    const newItem = document.createElement('div');
    newItem.className = 'new-item';
    newItem.textContent = "Це новий доданий елемент.";
    elementsContainer.appendChild(newItem);
});

const btnVariant = document.getElementById('btn-variant');
const clickCounter = document.getElementById('click-counter');
let clicks = 0;

btnVariant.addEventListener('click', function() {
    clicks++;
    clickCounter.textContent = clicks;
    
    if (clicks === 21) {
        alert("Артем Пакуля варіант номер 21!");
        
        clicks = 0;
        clickCounter.textContent = clicks;
    }
});