
const UIInputs = document.querySelectorAll('.form-input'),
      UISignupForm = document.querySelector('.signup-form');

let formIsValid = false;

const activateInputGroup = (e) => {

  // Gets parent element of the current input in focus
  let currentInputGroup = e.target.parentElement;

  // Adds .active class to it
  currentInputGroup.classList.add('active');
}

const deactivateInputGroup = (e) => {

  let hasValue = e.target.value ? true : false;

  if(!hasValue) {
    // Gets parent element of the current input in focus
    let currentInputGroup = e.target.parentElement;

    // Removes .active class to it
    currentInputGroup.classList.remove('active');
  }
}

const validateForm = (inputs) => {
  let validationFails = 0;

  clearInputErrors();

  inputs.forEach((input) => {
    const validation = validateInput(input);

    if(!validation.isValid) {
      createInputError(input, validation.errorMessage);
      validationFails++;
    }
  });

  return validationFails ? false : true;
}

const validateInput = (input) => {
  const inputType = input.type,
        isRequired = input.hasAttribute('required'),
        hasValue = input.value.trim(),
        validEmail = validateEmail(input.value),
        isChecked = input.checked;

  let inputValidity;

  switch(inputType) {
    case 'text':
      if(isRequired && !hasValue) {
        inputValidity = {
          isValid: false,
          errorMessage: input.dataset.valueMissing
        }
      } else {
        inputValidity = {
          isValid: true
        }
      }
      break;

    case 'email':
      if(isRequired && !hasValue) {
        inputValidity = {
          isValid: false,
          errorMessage: input.dataset.valueMissing
        }
      } else if (isRequired && hasValue && !validEmail) {
        inputValidity = {
          isValid: false,
          errorMessage: input.dataset.emailWrong
        }
      } else {
        inputValidity = {
          isValid: true
        }
      }
      break;

    case 'number':
      if(isRequired && !hasValue) {
        inputValidity = {
          isValid: false,
          errorMessage: input.dataset.valueMissing
        }
      } else {
        inputValidity = {
          isValid: true
        }
      }
      break;

    case 'checkbox':
      if(isRequired && !isChecked) {
        inputValidity = {
          isValid: false,
          errorMessage: input.dataset.valueMissing
        }
      } else {
        inputValidity = {
          isValid: true
        }
      }
      break;
  }

  return inputValidity;
}

const validateEmail = (email) => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
}

const clearInputErrors = () => {
  const formErrors = document.querySelectorAll('.form-error'),
        inputErrors = document.querySelectorAll('input.error');


  if(formErrors && inputErrors) {
    formErrors.forEach((error) => {
      error.remove();
    });

    inputErrors.forEach((input) => {
      input.classList.remove('error');
    });
  }
}

const createInputError = (input, errorMessage) => {
  input.classList.add('error');

  const UIErrorLabel = document.createElement('p');

  UIErrorLabel.classList.add('form-error', 'footnote');
  UIErrorLabel.innerText = errorMessage;

  if(input.type != 'checkbox') {
    input.after(UIErrorLabel);
  } else {
    input.parentElement.after(UIErrorLabel);
  }
}

UISignupForm.addEventListener('submit', (e) => {
  const formIsValid = validateForm(UIInputs);

  !formIsValid ? e.preventDefault() : null;
});

UIInputs.forEach((input) => {
  input.addEventListener('focus', activateInputGroup);
  input.addEventListener('blur', deactivateInputGroup);
});
