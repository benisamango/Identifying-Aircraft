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


// Get the modal
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
