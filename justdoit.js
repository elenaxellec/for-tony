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

// Call the showRefreshButton() function to display the refresh button
showRefreshButton();


