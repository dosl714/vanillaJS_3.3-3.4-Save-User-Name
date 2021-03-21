// Javscript Document

const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
        SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS,text)
    
}
function handleSubmit(event){
    event.preventDefault();
     /*form에서 입력후 엔터를 치면 다른곳으로 가는데, 그것을 막기 위한 것. 
     엔터를 치면 다른곳으로 가지 않음(새 페이지로 로드하지않음)*/
    const currentValue = input.value;
     /*const currentValue = input.value;
    paintGreeting(currentValue);*/
    paintGreeting(currentValue);
    saveName(currentValue);
}

function saveName(text) { //기억을 못하는 녀석에게 기억할수 있도록 로컬에 세이브하는 함수
    localStorage.setItem(USER_LS, text);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit); //form으로 data를 전송하려고 한다면 이벤트를 추가하겠다.
}

function paintGreeting(text) {

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();// user name이 없을 경우
    }else {// user name 이 있는 경우
        paintGreeting(currentUser);

    }
}

function init(){
    loadName();
    
}
init();