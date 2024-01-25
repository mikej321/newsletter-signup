import './styles/style.sass';

// global variables
const emailInput = document.querySelector('input[type="email"]');
const subButton = document.querySelector('.subButton');
const errorState = document.querySelector('.errorState');
const preSignup = document.querySelector('.preSignup');
const postSignup = document.querySelector('.postSignup');
const emailRegex = /^\w+@\w+\.(?:com|fr|co\.uk|com\.br|net)/gmi;
const form = document.querySelector('.form');

/* An event listener that waits for user input and changes
when the user finally meets the requirements to proceed further
by allowing the submit button to be clicked once the requirements are
fulfilled. */

emailInput.addEventListener('input', () => {
    let message = 'Valid email required';
    if (!emailRegex.test(emailInput.value)) {
        if (emailInput.hasAttribute('valid')) {
            emailInput.removeAttribute('valid');
            errorState.textContent = message;
            errorState.setAttribute('visible', '');
            emailInput.setAttribute('invalid', '');
            emailInput.focus();
            subButton.removeAttribute('success');
        } else {
            errorState.textContent = message;
            errorState.setAttribute('visible', '');
            emailInput.setAttribute('invalid', '');
            emailInput.focus();
            subButton.removeAttribute('success');
        }
    } else {
        if (emailInput.hasAttribute('invalid')) {
            errorState.textContent = '';
            emailInput.removeAttribute('invalid');
            emailInput.setAttribute('valid', '');
            emailInput.blur();
            subButton.setAttribute('success', '');
        } else {
            errorState.textContent = '';
            errorState.removeAttribute('visible');
            emailInput.setAttribute('valid', '');
            emailInput.blur()
            subButton.setAttribute('success', '');
        }
    }
})

/* An event listener for the submit button that stores the
user's input into a variable and sets data attributes on
the form/presignup/postsignup portions of the projects. These
data attributes control the size as well as visibility of them */

subButton.addEventListener('click', () => {
        const emailAddress = emailInput.value;
        const userEmail = document.querySelector('.userEmail');
        userEmail.textContent = emailAddress;
        form.setAttribute('nextSuccess', '');
        preSignup.setAttribute('inactive', '');
        postSignup.setAttribute('active', '');
})