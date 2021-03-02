let delBtn =  document.querySelectorAll(".del")

for(let i=0; i<delBtn.length; i++){
    delBtn[i].addEventListener("click", function(){
        if(confirm("삭제하시겠습니까?")){
            this.parentNode.parentNode.remove();
        }
        // confirm("삭제하시겠습니까?");
    })
}

const dialog = document.querySelector('#dialog');
const dialogBtn = document.querySelector(".dialogBtn")
const dialogclose = document.querySelector(".dialog_close span")

dialogBtn.addEventListener("click", function(){
    dialog.classList.toggle("display-none");
});



dialogclose.addEventListener("click", function(){
    dialog.classList.toggle("display-none");

    document.querySelector("#dialog form").reset();
})

