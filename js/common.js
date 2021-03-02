const join = document.querySelector(".JoinBtn a")
const login = document.querySelector(".LoginBtn a")
const joinclose = document.querySelector(".join_close span")
const loginclose = document.querySelector(".login_close span")
const joingo = document.querySelector(".join_go")
const joinpopup = document.getElementById('join');
const loginpopup = document.getElementById('login');

const stopbtn = document.querySelector(".StopBth");
const gobtn = document.querySelector(".GoBth");
const leftbtn = document.querySelector(".LeftBtn");
const rightbtn = document.querySelector(".RightBtn");

const slides = document.querySelector(".slide");


window.onload = function(){
    slide();
}


let count = 0;

function play(){
    count++;
    if(count < 0){
        count = 2;
    }
    if(count > 2){
        count = 0;
    }
    slides.style.marginLeft = -1200*count+"px";
    slides.style.transition = 1+"s";
};

let stopCheck = false;

const slide = function(){
    let set = setInterval(play, 3000);

    stopbtn.addEventListener("click", function(){
        clearInterval(set);

        stopCheck = true;
    });
    gobtn.addEventListener("click", function(){
        set = setInterval(play, 3000);

        stopCheck = false;
    });

    leftbtn.addEventListener("click", function(){
        clearInterval(set);

        count--;
        if(count < 0){
            count = 2;
        }
        slides.style.marginLeft = -1200*count+"px";
        slides.style.transition = 1+"s";

        if(!stopCheck) {
            setTimeout(() => set = setInterval(play, 3000));
        };
    });
    rightbtn.addEventListener("click", function(){ 
        clearInterval(set);

        count++;
        if(count > 2){
            count = 0;
        }
        slides.style.marginLeft = -1200*count+"px";
        slides.style.transition = 1+"s";

        if(!stopCheck) {
            setTimeout(() => set = setInterval(play, 3000));
        };
    });
};


// classList: 모든 클래스를 가져옴
// toggle(): ()안에 있는 클래스가 있으면 지우고 없으면 적용 


join.addEventListener("click", function(){
    joinpopup.classList.toggle("display-none");
});

login.addEventListener("click", function(){
    loginpopup.classList.toggle("display-none")
});

const joinForm = document.querySelector("#join form");
const loginForm = document.querySelector("#login form");
joinForm.addEventListener("submit", event => {
    event.preventDefault();

    if(joinForm.children[0].value === "") {
        alert("이름을 입력해주세요");

        return false;
    };

    const regExp = new RegExp(/[A-Za-z0-9]*@[A-Za-z]*\.[a-zA-Z]{2,3}/);
    if(joinForm.children[1].value.match(regExp) === null) {
        alert("이메일 형식이 일치하지 않습니다");

        return false;
    };

    const regExp2 = new RegExp(/[~!@#$%^&*()_+|<>?:{}]/g);
    if(joinForm.children[2].value.match(regExp2)) {
        alert("비밀번호에 특수문자는 입력할 수 없습니다");

        return false;
    };
    if(joinForm.children[2].value.match(new RegExp(/[A-Z]/g)) === null) {
        alert("비밀번호에 대문자를 한개 이상 포함해주세요");

        return false;
    };
    if(joinForm.children[2].value.match(new RegExp(/[0-9]/g)) === null) {
        alert("비밀번호에 숫자를 한개 이상 포함해주세요");

        return false;
    };

    if(joinForm.children[2].value !== joinForm.children[3].value){
        alert("비밀번호가 다릅니다.")

        return false;
    }

    alert("회원가입 되었습니다");
    joinForm.reset();
});

joinclose.addEventListener("click", function(){
    joinpopup.classList.toggle("display-none");

    joinForm.reset();
});
loginclose.addEventListener("click", function(){
    loginpopup.classList.toggle("display-none");
    
    loginForm.reset();
})

joingo.addEventListener("click", function(){
    joinpopup.classList.toggle("display-none");
    loginpopup.classList.toggle("display-none");
})


