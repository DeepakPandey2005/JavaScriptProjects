let boxes=document.querySelectorAll(".game");
console.log(boxes);
let turn=true;
h5=document.querySelector("h5")
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turn){
        box.innerText="X";
        turn='O'
        h5.innerText=`Turn for ${turn}`
        turn=false;

    }else{
        box.innerText="O";
        turn='X'
        h5.innerText=`Turn for ${turn}`
        turn=true;
    }
    box.disabled=true;
   checkwin();
});});

let win=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]]

const checkwin=()=>{
    win.forEach(val=>{
        if (boxes[val[0]].innerText===boxes[val[1]].innerText && boxes[val[0]].innerText===boxes[val[2]].innerText && boxes[val[0]].innerText !==''){
            
           let x= boxes[val[0]]
            let y=  boxes[val[1]]
           let z= boxes[val[2]];
            indicate(x,y,z)

            let box=document.querySelectorAll(".game");
            let p=document.querySelector("p")
            p.style.visibility="visible";
            p.innerText="The winner is player with  "+boxes[val[0]].innerText;
            
            for(let i of box){
                i.disabled=true;
            }
        }
       
    }
    )
}
rebtn=document.querySelector("#reset")
rebtn.addEventListener("click",(x,y,z)=>{
  for(let box of boxes){
        box.innerText="";
    box.style.backgroundColor="white";
    box.style.color="black"}
        let box=document.querySelectorAll(".game");
        let p=document.querySelector("p")

            p.style.visibility="hidden";
            for(let i of box){
                i.disabled=false;
            }
            turn=true;
           
});
indicate=(x,y,z)=>{
    x.style.backgroundColor="lightgreen";
    x.style.color="red";
    y.style.backgroundColor="lightgreen";
    y.style.color="red";
   z.style.backgroundColor="lightgreen";
   z.style.color="red";
  }