const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formValue = {};

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