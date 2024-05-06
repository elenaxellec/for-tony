// Function to display the refresh button with smooth transition and delay
function showRefreshButton() {
    // Create a refresh button element
    var refreshButton = document.createElement('button');
    refreshButton.innerText = 'Back 2 main';
    refreshButton.id = 'refresh-button';
    refreshButton.onclick = function() {
        window.open('https://elenaxellec.github.io/for-tony/', '_self'); // Replace 'https://example.com' with the desired website URL
    };
    // Position the refresh button in the corner
    refreshButton.style.position = 'fixed';
    refreshButton.style.bottom = '20px';
    refreshButton.style.right = '20px';
    refreshButton.style.padding = '5px 10px'; // Adjust padding to make it smaller
    refreshButton.style.fontSize = '14px'; // Adjust font size to make it smaller
    refreshButton.style.border = '2px solid #333';
    refreshButton.style.backgroundColor = '#fff';
    refreshButton.style.color = '#333';
    refreshButton.style.borderRadius = '5px';
    refreshButton.style.cursor = 'pointer';
    // Append the refresh button to the body
    document.body.appendChild(refreshButton);
}

// Function to create and animate fire emojis
function createFire() {
    var fire = document.createElement('div');
    fire.innerHTML = '🔥'; // Fire emoji
    fire.style.position = 'absolute';
    fire.style.fontSize = '20px';
    fire.style.color = '#FF4500'; // Fire color (orange-red)
    fire.style.left = Math.random() * window.innerWidth + 'px';
    fire.style.top = '-40px'; // Start from above the screen
    document.body.appendChild(fire);
    
    return fire;
}

function animateFire(fire) {
    var animation = fire.animate([
        { top: '-40px' }, // Start position
        { top: window.innerHeight + 'px' } // End position
    ], {
        duration: Math.random() * 3000 + 2000, // Random duration between 2 and 5 seconds
        easing: 'ease-in', // Easing function
        fill: 'forwards' // Maintain end state
    });

    animation.onfinish = function() {
        fire.remove(); // Remove the fire emoji after animation ends
    };
}

// Start raining fire emojis continuously
setInterval(function() {
    var fire = createFire();
    animateFire(fire);
}, 200); // Generate a fire emoji every 200 milliseconds
// Call the showRefreshButton() function to display the refresh button
showRefreshButton();


