function validateLogin() {
    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username and password are correct (for simplicity, hardcoding values here)
    if (username === 'admin' && password === 'admin') {
        // Redirect to the home page
        window.location.href = 'home.html';
    } else {
        // Display an error message (you might want to enhance this in a real-world scenario)
        alert('Invalid username or password. Please try again.');
    }
}
