// Define variables to keep track of rain intervals
var heartInterval = null;
var starInterval = null;

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Hide the question
        document.getElementById('question').style.display = 'none';
        // Hide the captions
        document.getElementById('captions').style.display = 'none';
        // Hide the options container
        document.getElementById('options').style.display = 'none';
        // Start raining hearts and stars
        startRaining();
        // Display the cat-heart.gif
        displayCatHeart();
        // Show refresh button
        showRefreshButton();
        // Show the drop-down list after the cat-heart image is displayed
        document.getElementById('dropdown-list').style.display = 'block';
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to start raining hearts and stars
function startRaining() {
    // Start raining hearts
    heartInterval = setInterval(function() {
        var heart = createHeart();
        animateHeart(heart);
    }, 200); // Generate a heart every 200 milliseconds

    // Start raining stars
    starInterval = setInterval(function() {
        var star = createStar();
        animateStar(star);
    }, 200); // Generate a star every 200 milliseconds
}

// Function to stop raining hearts and stars
function stopRaining() {
    clearInterval(heartInterval);
    clearInterval(starInterval);
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'heart-ending.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.innerHTML = ''; // Clear existing content
        imageContainer.appendChild(catHeartImage);
    };
}

// Function to display the refresh button
function showRefreshButton() {
    // Create a refresh button element
    var refreshButton = document.createElement('buttons');
    refreshButton.innerText = 'Refresh';
    refreshButton.id = 'refresh-button';
    refreshButton.onclick = function() {
        window.location.reload(); // Reload the page when clicked
    };
    // Position the refresh button in the corner
    refreshButton.style.position = 'fixed';
    refreshButton.style.bottom = '20px';
    refreshButton.style.right = '20px';
    refreshButton.style.padding = '10px 20px';
    refreshButton.style.border = '2px solid #333';
    refreshButton.style.backgroundColor = '#fff';
    refreshButton.style.color = '#333';
    refreshButton.style.borderRadius = '5px';
    refreshButton.style.cursor = 'pointer';
    // Append the refresh button to the body
    document.body.appendChild(refreshButton);
}

// Function to create and animate hearts
function createHeart() {
    var heart = document.createElement('div');
    heart.innerHTML = '❤️'; // Heart emoji
    heart.style.position = 'absolute';
    heart.style.fontSize = '20px';
    heart.style.color = '#ff0000'; // Heart color
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = '-40px'; // Start from above the screen
    document.body.appendChild(heart);
    
    return heart;
}

function animateHeart(heart) {
    var animation = heart.animate([
        { top: '-40px' }, // Start position
        { top: window.innerHeight + 'px' } // End position
    ], {
        duration: Math.random() * 3000 + 2000, // Random duration between 2 and 5 seconds
        easing: 'ease-in', // Easing function
        fill: 'forwards' // Maintain end state
    });

    animation.onfinish = function() {
        heart.remove(); // Remove the heart after animation ends
    };
}

// Function to create and animate stars
function createStar() {
    var star = document.createElement('div');
    star.innerHTML = '★'; // Star emoji
    star.style.position = 'absolute';
    star.style.fontSize = '20px';
    star.style.color = '#ffff00'; // Star color (yellow)
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = '-40px'; // Start from above the screen
    document.body.appendChild(star);
    
    return star;
}

function animateStar(star) {
    var animation = star.animate([
        { top: '-40px' }, // Start position
        { top: window.innerHeight + 'px' } // End position
    ], {
        duration: Math.random() * 3000 + 2000, // Random duration between 2 and 5 seconds
        easing: 'ease-in', // Easing function
        fill: 'forwards' // Maintain end state
    });

    animation.onfinish = function() {
        star.remove(); // Remove the star after animation ends
    };
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat
    catImage.src = 'cute-sad.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Display the cat.gif initially
displayCat();
