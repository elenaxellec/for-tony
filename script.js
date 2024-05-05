// script.js

// Function to handle button click events
// Function to handle button click events
// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // // Hide the captions
        // document.getElementById('captions').style.display = 'none';
        // // Show the drop-down list
        // document.getElementById('dropdown-list').style.display = 'block';
        // // Flash rainbow colors
        rainHearts(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
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

function rainHearts(callback) {
    var interval = setInterval(function() {
        var heart = createHeart();
        animateHeart(heart);
    }, 200); // Generate a heart every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        if (callback) {
            callback();
        }
    }, 2000); // Stop raining hearts after 2 seconds
}

// Start raining hearts
rainHearts(function() {
    console.log('Hearts stopped raining.');
});


// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cute-sad.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
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
        imageContainer.appendChild(catHeartImage);
        document.getElementById('captions').style.display = 'none';
        // Show the dropdown list
        document.getElementById('dropdown-list').style.display = 'block';
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}


// Display the cat.gif initially
displayCat();
