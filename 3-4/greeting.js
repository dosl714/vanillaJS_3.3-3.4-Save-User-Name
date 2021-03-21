//Javascript Document

const FormBox = document.querySelector(".js-form"),
      Input = FormBox.querySelector("input"),
      Greeting = document.querySelector(".js-greeting");


const USERLS="currentUser",
      CnShowing="showing";

function saveUserName(text) {
         localStorage.setItem(USERLS,text);
}
function HandleSubmit(){
        event.preventDefault();
        const currentValue = Input.value;
        paintGreeting(currentValue);
        saveUserName(currentValue);
}

function AskUserName(text) {
    FormBox.classList.add(CnShowing);
    FormBox.addEventListener("submit",HandleSubmit);
}
function paintGreeting(text) {
         FormBox.classList.remove(CnShowing);
         Greeting.classList.add(CnShowing);
         Greeting.innerText=`Hello, ${text} ~ ♥`;
}

function loadName(){
    const currentUser = localStorage.getItem(USERLS);
          if (currentUser===null){
            AskUserName();

          } else {
              paintGreeting(currentUser);
          }
}


function init() {
    loadName();
}

init();