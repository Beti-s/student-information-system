// Toggle navigation menu visibility for small screens
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Form validation for the student form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name === "" || email === "") {
        alert("All fields must be filled out!");
        return false;
    }

    // Optionally, you could check the email format here
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Student added successfully!");
    return true; // Allows form submission
}

// Simple email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
