const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formValue = {};

const input = form.elements.email;
const textarea = form.elements.message;

if ((JSON.parse(localStorage.getItem(localStorageKey))).email !== undefined) {
    input.value = (JSON.parse(localStorage.getItem(localStorageKey))).email;
} if ((JSON.parse(localStorage.getItem(localStorageKey))).message !== undefined) {
    textarea.value = (JSON.parse(localStorage.getItem(localStorageKey))).message;
};

form.addEventListener("input", (ivent) => {
    
    formValue[ivent.target.name] = ivent.target.value
    localStorage.setItem(localStorageKey, JSON.stringify(formValue));
    
});



form.addEventListener("submit", (ivent) => {
    ivent.preventDefault();
    console.log(formValue);
    localStorage.removeItem(localStorageKey);
    form.reset();
});