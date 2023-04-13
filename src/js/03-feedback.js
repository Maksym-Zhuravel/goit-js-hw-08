import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';



const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

refs.form.addEventListener('submit', onFormSubmit)
refs.input.addEventListener('input', throttle(saveToLocalStore, 500));
refs.textarea.addEventListener('input', throttle(saveToLocalStore, 500));
restoreLocalData()

function saveToLocalStore() {
    const localData = {
        email: refs.input.value,
        message: refs.textarea.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(localData))
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY)
}

function restoreLocalData() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {
        refs.input.value = savedMessage.email
        refs.textarea.value = savedMessage.message
    }
}