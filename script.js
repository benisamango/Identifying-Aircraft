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

// Code to display text when tail image is cicked
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to show modal with tail information
function showInfo(tailName, tailDescription) {
    // Set the modal title and body content
    document.getElementById("modal-title").textContent = tailName;
    document.getElementById("modal-body").textContent = tailDescription;

    // Display the modal
    modal.style.display = "block";
}

// Close the modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}