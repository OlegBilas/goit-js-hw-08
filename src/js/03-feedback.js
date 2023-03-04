import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const formData = {};

//Відновлення значень із локального сховища
const dataInputs = localStorage.getItem(FEEDBACK_FORM_STATE);
if (dataInputs) {
  const deserializatedValues = JSON.parse(dataInputs);
  for (const key of Object.keys(deserializatedValues)) {
    formRef.elements[key].value = deserializatedValues[key];
  }
}

formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', throttle(onInputFormElements, 500));

function onInputFormElements(event) {
  if (event.target.name in formRef.elements) {
    formData[event.target.name] = event.target.value;
  }
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
}

function onSubmitForm(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
}
