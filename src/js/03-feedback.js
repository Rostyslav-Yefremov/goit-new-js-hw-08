import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const emailRef = document.querySelector('input');
const messageRef = document.querySelector('textarea');
console.log(emailRef);
console.log(messageRef);
let formData = {};
const onLocal = evt => {
  formData = {
    email: emailRef.value,
    message: messageRef.value,
  };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
};
const clearLocal = evt => {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

const formLocal = evt => {
  const inputValue = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (inputValue) {
    emailRef.value = inputValue.email;
    messageRef.value = inputValue.message;
  }
};
formLocal();

form.addEventListener('input', throttle(onLocal, 500));
form.addEventListener('submit', clearLocal);
