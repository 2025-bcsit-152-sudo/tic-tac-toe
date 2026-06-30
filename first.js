const btns = document.querySelectorAll(".cell");
let container=document.querySelectorAll(".game-container");
let board=document.querySelectorAll(".board");
let winnershow=document.querySelector(".winnershow");
let reset=document.querySelector(".reset");
let newb=document.querySelector(".new");

let turnO=true;

let winningpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]


const resetgame=()=>
{
    turnO=true;
    btns.forEach(btn=> btn.innerText="");
    btns.forEach(btn=> btn.disabled=false);
    winnershow.classList.add("hide");
}

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(turnO==true)
       { 
        btn.innerText="O"
        turnO=false;
    }
        else
          {  
            btn.innerText="X";
        turnO=true;
    }    btn.disabled=true;
    checkwinner();
    });
});

const displaywinner=(pos1)=>
{
    winnershow.innerText=`Winner is player${pos1}`;
    winnershow.classList.remove("hide");
    btns.forEach(btn=> btn.disabled=true);

    
}
const checkwinner=()=>
{
    for( let pattern of winningpatterns)
{
  
    let pos1=btns[pattern[0]].innerText;
    let pos2=btns[pattern[1]].innerText;
    let pos3=btns[pattern[2]].innerText;

   if(pos1!="" &&pos2!="" &&pos3!="")
   {
      if(pos1===pos2 && pos2===pos3)
      {
         console.log("winner",pos1);
         displaywinner(pos1);
      }


   }
}
};
  
reset.addEventListener("click",resetgame);
newb.addEventListener("click",resetgame);