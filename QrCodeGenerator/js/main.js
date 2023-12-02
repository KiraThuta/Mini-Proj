
let qrImg=document.querySelector(".img-qr");
let qrText=document.querySelector(".qr-text");
let qrGenerator=document.querySelector(".btn-qr");

qrGenerator.addEventListener("click",function(){
    if(qrText.value.length>0){
        let URL=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
        qrImg.src=URL;
        qrImg.classList.add("active");
    }else{
        qrText.classList.add("error");
        setTimeout(function(){
            qrText.classList.remove("error")
        },600);
    }
});