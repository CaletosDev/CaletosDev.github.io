// Function to generate a random key
function generateKey() {
    var length = 5;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var key = '';
    for (var i = 0; i < length; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return key;
}

// Display generated key when the button is clicked
document.getElementById('generate-btn').addEventListener('click', function() {
    var key = generateKey();
    document.getElementById('key').innerText = key;
  
    // Send the generated key to the server to store in the database
    fetch('http://127.0.0.1:5000/store-key', { // Updated the URL to match the Flask server address
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: key })
    });
});