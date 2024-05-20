let text= document.querySelector("input")
string= "";
let nums=document.querySelectorAll(".nums")

nums.forEach((num)=>{
console.log(num.innerText)
num.addEventListener("click",()=>{
    if (num.innerText=='='){
        text.value=string;
        string=eval(string);}
else if (num.innerText== "c"){
            string="";
            text.value=string;}
else{
        console.log(num.innerText)
        string=string+num.innerText;
        text.value=string;}
    })})