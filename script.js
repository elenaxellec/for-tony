// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Hide the question
        document.getElementById('question').style.display = 'none';
        // Hide the captions
        document.getElementById('captions').style.display = 'none';
        // Show the drop-down list
        // document.getElementById('dropdown-list').style.display = 'block';
        // Hide the options container
        document.getElementById('options').style.display = 'none';
        // Start raining hearts
        rainHearts(function() {
            // Hide the "Yes" button
            document.getElementById('yes-button').style.display = 'none';
            // Hide the "No" button
            document.getElementById('no-button').style.display = 'none';
            // Display the cat-heart.gif
            displayCatHeart();
            // Show the drop-down list after the cat-heart image is displayed
                document.getElementById('dropdown-list').style.display = 'block';
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


// Function to redirect to the Spotify playlist page with playlist ID
function redirectToPlaylistPage(playlistId) {
    var playlistUrl = "https://open.spotify.com/embed/playlist/" + playlistId;
    window.location.href = playlistUrl;
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

// Function to rain hearts
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

// Function to rain stars
function rainStars(callback) {
    var interval = setInterval(function() {
        var star = createStar();
        animateStar(star);
    }, 200); // Generate a star every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        if (callback) {
            callback();
        }
    }, 2000); // Stop raining stars after 2 seconds
}

// Start raining stars after the hearts
rainHearts(function() {
    console.log('Hearts stopped raining.');
    rainStars(function() {
        console.log('Stars stopped raining.');
    });
});

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
    // Set the source (file path) for the cat
    catImage.src = 'cute-sad.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
        // Hide the options container
        // document.getElementById('options').style.display = 'none';
        // // Hide the "Yes" button
        // document.getElementById('yes-button').style.display = 'none';
        // // Hide the "No" button
        // document.getElementById('no-button').style.display = 'none';
        if (callback) {
            callback();
        }
    };
}

// Display the cat.gif initially
displayCat();
