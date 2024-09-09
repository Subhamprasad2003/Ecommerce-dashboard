
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'admin' && password === '123') {
        window.location.href = 'Dashboard.html'; // Change this to your dashboard page
    } else {
        document.getElementById('error').textContent = 'Invalid username or password';
    }
}
