const join = document.querySelector(".JoinBtn a")
const login = document.querySelector(".LoginBtn a")
const joinclose = document.querySelector(".join_close span")
const loginclose = document.querySelector(".login_close span")
const joingo = document.querySelector(".join_go")
let joinpopup = document.getElementById('join');
let loginpopup = document.getElementById('login');

let stopbtn = document.querySelector(".StopBth");
let gobtn = document.querySelector(".GoBth");
let leftbtn = document.querySelector(".LeftBtn");
let rightbtn = document.querySelector(".RightBtn");

let slides = document.querySelector(".slide")


window.onload = function(){
    slide();
}


let count = 0;

const slide = function(){
    let set = setInterval(play, 3000);

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
    
    stopbtn.addEventListener("click", function(){
        clearInterval(set);
    });
    gobtn.addEventListener("click", function(){
        if(!set){
            set = setInterval(play, 3000);
        }
    });

    leftbtn.addEventListener("click", function(){
        count--;
        if(count < 0){
            count = 2;
        }
        slides.style.marginLeft = -1200*count+"px";
        slides.style.transition = 1+"s";
    });
    rightbtn.addEventListener("click", function(){ 
        count++;
        if(count > 2){
            count = 0;
        }
        slides.style.marginLeft = -1200*count+"px";
        slides.style.transition = 1+"s";
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

joinclose.addEventListener("click", function(){
    joinpopup.classList.toggle("display-none");

    document.querySelector("#join #id").value = "";
    document.querySelector("#join #email").value = "";
    document.querySelector("#join #pw").value = "";
    document.querySelector("#join #pw2").value = "";
})
loginclose.addEventListener("click", function(){
    loginpopup.classList.toggle("display-none")
    
    document.querySelector("#login #id").value = "";
    document.querySelector("#login #pw").value = "";
})

joingo.addEventListener("click", function(){
    joinpopup.classList.toggle("display-none");
    loginpopup.classList.toggle("display-none");

})
