import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),e="feedback-form-state",l={},o=t.elements.email,r=t.elements.message;JSON.parse(localStorage.getItem(e))===null||(JSON.parse(localStorage.getItem(e)).email!==void 0&&JSON.parse(localStorage.getItem(e)).message!==void 0?(o.value=JSON.parse(localStorage.getItem(e)).email,r.value=JSON.parse(localStorage.getItem(e)).message):JSON.parse(localStorage.getItem(e)).email===void 0?r.value=JSON.parse(localStorage.getItem(e)).message:o.value=JSON.parse(localStorage.getItem(e)).email);t.addEventListener("input",a=>{l[a.target.name]=a.target.value,localStorage.setItem(e,JSON.stringify(l))});t.addEventListener("submit",a=>{a.preventDefault(),console.log(l),localStorage.removeItem(e),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map
