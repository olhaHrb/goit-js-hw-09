const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formValue = {};

const input = form.elements.email;
const textarea = form.elements.message;
if (localStorage.getItem(localStorageKey)!== null) {
    input.value = (JSON.parse(localStorage.getItem(localStorageKey))).email;
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