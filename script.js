const heartWrapper = document.querySelector('.heart-wrapper');
const textElement = document.querySelector('.text');

heartWrapper.addEventListener('click', function() {
    textElement.textContent = textElement.textContent === "niva" ? "click me" : "niva";
});
