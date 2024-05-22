var audio= new Audio('img&sound/car.mp3');
audio.loop=true;

btn=document.getElementById('btn');
btn.addEventListener("click",()=>{
    audio.play();
    let playsound=true;
})
btn.addEventListener("dblclick",()=>{
    audio.loop=false
})