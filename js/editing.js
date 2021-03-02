let imgFile = document.querySelector("#imagefile");
let text = document.querySelector("#p");
let save = document.querySelector(".save");
let no = document.querySelector(".no");

imgFile.addEventListener("change", function(event){
    let reader = new FileReader(); 
    reader.readAsDataURL(event.target.files[0]); 
    // 데이터 url을 base64로 인코딩함(한마디로 입력받은(target된) 이미지 url 주소 생성)
    
    reader.onload = function(event){ //load가 다 됐을 때 실행 
        let img = document.createElement("img"); 
        //img 돔 객체 생성
        img.setAttribute("src", event.target.result); 
        //만든 img 태그에 scr 값을 위에서 인코딩한 url로 바꿈
        document.querySelector("div#image_container").appendChild(img);
        // 미리만들어 놓은 image_container에다 img 태그 넣기
    }; 
});

save.addEventListener("click", function(){
    alert("저장이 안되었습니다.");
    location.href="./subevent_management.html";
});

no.addEventListener("click", function(){
    location.href="./subevent_management.html";
})