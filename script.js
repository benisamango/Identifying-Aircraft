// event listener for adding alert to each image click 
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.image-section img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`You clicked on ${img.alt}`);
        });
    });
});

// event listener to add hover effect to images
document.addEventListener("DOMContentLoaded", function() {
    // Select all images within the image-section
    const images = document.querySelectorAll('.image-section img');

    // Function to scale image up
    function scaleUp(event) {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "transform 0.3s ease"; // Add smooth transition
    }

    // Function to scale image back to original size
    function scaleDown(event) {
        event.target.style.transform = "scale(1)";
    }

    // Add event listeners to each image
    images.forEach(image => {
        image.addEventListener('mouseover', scaleUp);
        image.addEventListener('mouseout', scaleDown);
    });
});


// Get the button
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
topBtn.onclick = function() {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
