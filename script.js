const heartWrapper = document.querySelector('.heart-wrapper');
const textElement = document.querySelector('.text');

heartWrapper.addEventListener('click', function() {
    var isVisible = textElement.style.opacity === '1';
    textElement.style.opacity = isVisible ? '0' : '1';
});
