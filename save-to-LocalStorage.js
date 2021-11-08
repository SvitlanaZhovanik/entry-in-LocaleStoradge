export default class MylocalStorageSave {
constructor(classNameForm){
   this.formRefs = document.querySelector(classNameForm),
   this.key = '',
   this.value = '',
   this.form = '',
   this.element = ''
}
saveToLS = (key, itemValue) => {
    if (key === "password" || itemValue === ' '||itemValue === '') return
    localStorage.setItem(key, itemValue);
}
onInput = (evt) => {
    this.key = evt.target.name;
    this.value = evt.target.value
    this.saveToLS(this.key,this.value);
}
onFormSubmit = (evt) => {
    evt.preventDefault();
    this.form = evt.target;
    localStorage.clear();
    this.form.reset();
}
getFromLocalStorage = (key) => {
    this.element = document.querySelector(`.js-feedback-${key}`)
       if (key) {
        this.element.value = localStorage.getItem(key);
       }
   }
loadListeners = ()=>{
    this.formRefs.addEventListener("submit", this.onFormSubmit),
    this.formRefs.addEventListener("input", this.onInput)
}

init = ()=>{
    this.loadListeners();
    this.getFromLocalStorage("username");
    this.getFromLocalStorage("email");
    this.getFromLocalStorage("message");
}
}