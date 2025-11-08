document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        clearErrors();

        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'The name is required.');
            isValid = false;
        }

        const email = document.getElementById('email').value.trim();
        if (email === '') {
            showError('emailError', 'Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        const message = document.getElementById('message').value.trim();
        if (message === '') {
            showError('messageError', 'Message is required.');
            isValid = false;
        }

        if (isValid) {
            document.getElementById('success-message').style.display = 'block';
            form.reset();
        }
    });

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
