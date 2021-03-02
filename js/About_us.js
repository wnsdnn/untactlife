let PlusBtn = document.querySelector(".plus");
let MinusBtn = document.querySelector(".minus");
let title = document.querySelector("h2");
let text = document.querySelector(".content .text");

let font = document.querySelector(".font");



let count = 16;

PlusBtn.addEventListener("click", function(){
    count++;
    text.style.fontSize = count +"px";
});
MinusBtn.addEventListener("click", function(){
    count--;
    text.style.fontSize = count +"px";
});
font.addEventListener("click", function(){
    title.style.fontFamily = "돋움";
    text.style.fontFamily = "돋움";
});

