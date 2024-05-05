/* eslint-disable no-unused-vars */
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and input elements for location search
    const locationButton = document.getElementById("locationButton");
    const locationSearch = document.getElementById("locationSearch");
    const locationPopup = document.getElementById('locationPopup');

    // Add filtering functionality for services based on user input
    const searchInput = document.getElementById('searchInput');
    const matrixContainers = document.querySelectorAll('.matrix-container');

    // Event listener for input field to filter services dynamically
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // Iterate over each matrix container
        matrixContainers.forEach(container => {
            const matrixBoxes = container.querySelectorAll('.matrix-box');

            // Iterate over each matrix box and filter based on the service name
            matrixBoxes.forEach(box => {
                const serviceName = box.querySelector('.box-text').textContent.toLowerCase();

                // Show or hide the box based on the search term
                if (serviceName.includes(searchTerm)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    });

    // Get the Home link and matrix boxes for popups
    const homeLink = document.getElementById("homeLink");
    const matrixBoxes = document.querySelectorAll('.matrix-box');

    // Add click event listener to each matrix box to display corresponding popups
    matrixBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Get the ID of the clicked box and corresponding popup
            const boxId = this.getAttribute('id');
            const popupId = 'popup' + boxId.substring(3);

            // Show the corresponding popup and overlay
            document.getElementById(popupId).style.display = 'block';
            document.querySelector('.overlay').style.display = 'block';
        });
    });

    // Toggle the input field and display location popup when the button is clicked
    locationButton.addEventListener("click", function () {
        locationSearch.classList.toggle("active");
        locationButton.classList.toggle("active");
        locationSearch.focus(); // Automatically focus on the input field

        // Toggle the display of the location popup
        if (locationPopup.style.display === 'block') {
            locationPopup.style.display = 'none';
        } else {
            locationPopup.style.display = 'block'; // Display the popup
            populateLocationResults(); // Populate location search results
        }
    });

    // Function to populate location search results dynamically
    function populateLocationResults() {
        const locationResults = document.getElementById('locationResults');
        locationResults.innerHTML = ''; // Clear previous results

        // Dummy results for demonstration
        const dummyResults = ['Kolhapur', 'Pune', 'Mumbai'];
        dummyResults.forEach(result => {
            const locationItem = document.createElement('div');
            locationItem.textContent = result;
            locationResults.appendChild(locationItem);
        });
    }

    // Scroll to the top of the page when the Home link is clicked
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.scrollTo(0, 0); // Scroll to the top of the page
    });

    // Function to hide all popups and overlay
    function hidePopup() {
        document.querySelectorAll('.popup').forEach(function(popup) {
            popup.style.display = 'none';
        });
        document.querySelector('.overlay').style.display = 'none';
    }

    // Event listener for the feedback form submission
    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(feedbackForm);
        const feedbackMessage = formData.get('feedbackMessage');

        // Reset the form and display a success message
        feedbackForm.reset();
        alert('Thank you for your feedback!');
    });

    // Event listener for the login form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get form data
        const formData = new FormData(loginForm);
        const username = formData.get('username');
        const password = formData.get('password');

        // Basic validation for demonstration purposes
        if (username === 'example' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
