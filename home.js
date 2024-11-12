
function updateQuantity(button, change) {
    const countElement = button.parentNode.querySelector(".count");
    let currentCount = parseInt(countElement.textContent);
    

    currentCount += change;

    if (currentCount < 0) {
        currentCount = 0;
    }

    
    countElement.textContent = currentCount;
}
