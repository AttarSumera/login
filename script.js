let password = document.getElementById('pass');
let icon = document.getElementById('toggle-password');
let iconActive = document.getElementById('toggle-password-active');

icon.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        icon.style.display = 'block';
        iconActive.style.display = 'none';
    } else {
        password.type = 'password';
        icon.style.display = 'none';
        iconActive.style.display = 'block';
    }
});

