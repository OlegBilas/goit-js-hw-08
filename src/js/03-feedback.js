import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

//Відновлення значень із локального сховища
const dataInputs = localStorage.getItem('feedback-form-state');
if (dataInputs) {
  const deserializatedValues = JSON.parse(dataInputs);
  for (const key of Object.keys(deserializatedValues)) {
    formRef.elements[key].value = deserializatedValues[key];
  }
}

formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', throttle(onInputFormElements, 500));

const formData = {};
function onInputFormElements(event) {
  if (event.target.name in formRef.elements) {
    formData[event.target.name] = event.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}
