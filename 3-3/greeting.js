//Javascript Document.
const form = document.querySelector(".js-form"), //form
      input = form.querySelector("input"), //form 안의 input tag 
      greeting = document.querySelector(".js-greeting");  //h4 tag

const USER_LS = "currentUser",  //Local Storge
      SHOWING_CN = "showing";  //showing ClassName,기존에 없는 display를 보이게 하기 위한 새로운 클래스선언.

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);//3  form에서는 textbox 안보여야하니까 삭제.
    greeting.classList.add(SHOWING_CN);//2  showing이라는 것을 보여주기 위해 추가.
    //form.innerText =`Hello, ${text}`; // 텍스트를 보여준다.
    greeting.innerText = `Hello, ${text}`;// 선생님은 이렇게 하면 인식하던데 나는 왜 form 으로 해야 remove를 인식을 하는 것인가?
}


function loadName(){ //localstorage에서 필요한것을 가져옴
   const currentUser = localStorage.getItem(USER_LS);  //LocalSotrage에 저장된 user이름을 불러오기 위해 변수 선언
      if(currentUser === null){ // user name이 없을 경우

        }else {// user name 이 있는 경우
            paintGreeting(currentUser); //인사가 보이게하겠다.
        }
    }
    
function init(){
        loadName();
    }
    init();