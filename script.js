// Event listener to add hover effect to images
// Resources adapted from W3 Schools:
// https://www.w3schools.com/howto/howto_css_image_overlay.asp
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.addEventListener("DOMContentLoaded", function () {
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

// Event listener to display information on each tail logo
// Resources adapted from W3 Schools: 
// https://www.w3schools.com/howto/howto_css_cards.asp
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.addEventListener('DOMContentLoaded', function () {
    // Select all tail logos
    const logos = document.querySelectorAll('.tail-logo');

    // For each logo, display the information on click
    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            // Information to be displayed is stored in 'logo-info'
            const info = logo.querySelector('.logo-info');
            if (info.style.display === 'block') {
                info.style.display = 'none';
            } else {
                // Click tail logo again to make information disappear
                info.style.display = 'block';
            }
        });
    });
});

// Return to top button
// Resources adapted from W3 Schools:
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
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
topBtn.onclick = function () {
    scrollToTop();
};

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Event listener for displaying image modal on aircraft page
// Resources adapted from W3 Schools:
// https://www.w3schools.com/howto/howto_css_modal_images.asp#:~:text=Modal%20Image,this%20example%2C%20we%20use%20images
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.aircraft-card').forEach(card => {
        // Add a click event listener to each card
        card.addEventListener('click', function () {
            // When a card is clicked, retrieve the value of the data-image attribute
            const imgSrc = this.getAttribute('data-image');
            // Display the modal by changing its style to block
            modal.style.display = 'block';
            // Set the src of modal image to the value of imgSrc
            modalImg.src = imgSrc;
        });
    });

    // Close model on any other click
    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    // Close model on any other click
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
