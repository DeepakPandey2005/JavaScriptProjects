let input=document.querySelector("input");
let lists=document.querySelector("#list-container");

function addtask(){
    if (input.value===''){
        alert("you must write first something");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML=input.value;
        lists.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
}

lists.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",lists.innerHTML);
}
function showdata(){
    lists.innerHTML= localStorage.getItem("data");
}
showdata();