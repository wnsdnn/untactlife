let GoodBtn = document.querySelector(".good");
let BadBtn = document.querySelector(".bad");
let participationBtn = document.querySelector(".participation");

let count = 0;
GoodBtn.innerHTML = `&#x2661; ${count}`;
BadBtn.innerHTML = `&#10006; ${count}`;
let Goodcount = 0;
let Badcount = 0;

GoodBtn.addEventListener("click", function(){
    GoodBtn.classList.toggle("btn")
    Goodcount++;
    if(Goodcount < 2){
        GoodBtn.innerHTML = `&#x2661; ${count+1}`;
    } else {
        GoodBtn.innerHTML = `&#x2661; ${count}`;
        Goodcount = 0;
    }
});
BadBtn.addEventListener("click", function(){
    BadBtn.classList.toggle("btn")
    Badcount++;
    if(Badcount < 2){
        BadBtn.innerHTML = `&#10006; ${count+1}`;
    } else {
        BadBtn.innerHTML = `&#10006; ${count}`;
        Badcount = 0;
    }
});
participationBtn.addEventListener("click", function(){
    participationBtn.classList.toggle("btn")
});
