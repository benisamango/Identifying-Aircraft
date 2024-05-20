// JavaScript code for the hover effect and navigation functionality
const boxImages = document.querySelectorAll('.box-image');

boxImages.forEach(boxImage => {
    boxImage.addEventListener('mouseenter', () => {
        boxImage.style.transform = 'scale(1.1)';
    });

    boxImage.addEventListener('mouseleave', () => {
        boxImage.style.transform = 'scale(1)';
    });
});
