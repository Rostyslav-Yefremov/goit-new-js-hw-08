const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const onLocal = evt => {
  evt.preventDefault();

  const formData = evt.currentTarget.elements;
  const formInput = {
    email: formData.email.value,
    message: formData.message.value,
  };

  // const inputJSON = JSON.stringify(formInput);
  // console.log(inputJSON);

  const inputValue = localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formInput));
  console.log('Данные формы', inputValue);

  const valueLocal = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log('Tut', valueLocal);
};

form.addEventListener('input', onLocal);

const clearLocal = () => {
  preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log();
};

form.addEventListener('submit', clearLocal);
