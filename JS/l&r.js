const active = document.getElementById('active');
const login_form = document.getElementById('login-form');
const register_form = document.getElementById('register-form');
const login_toggle = document.querySelector('.login-toggle');
const register_toggle = document.querySelector('.register-toggle');

register_toggle.addEventListener('click', () => {
    login_form.style.left = '-400px'
    register_form.style.left = '50px';
    active.style.left = '110px';
    login_toggle.style.color = 'black';
    register_toggle.style.color = 'white';
});

login_toggle.addEventListener('click', () => {
    login_form.style.left = '50px'
    register_form.style.left = '450px';
    active.style.left = '0';
    login_toggle.style.color = 'white';
    register_toggle.style.color = 'black';
});