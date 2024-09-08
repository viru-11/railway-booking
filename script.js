// Function to switch between login and sign-up forms
function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
}

function showSignUp() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Handle Login Form
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (email === "user@test.com" && password === "password") {
        alert("Login Successful");
        document.getElementById('login-signup-container').style.display = 'none';
        document.getElementById('booking-section').style.display = 'block';
    } else {
        alert("Invalid credentials");
    }
});

// Handle Sign-up Form
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let username = document.getElementById('signup-username').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    alert(`Sign-up Successful!\nWelcome, ${username}`);
    document.getElementById('login-signup-container').style.display = 'none';
    document.getElementById('booking-section').style.display = 'block';
});

// Function to handle ticket booking
function bookTicket() {
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let date = document.getElementById('travel-date').value;

    if (from && to && date) {
        alert(`Ticket booked from ${from} to ${to} on ${date}`);
    } else {
        alert("Please fill all fields");
    }
}
