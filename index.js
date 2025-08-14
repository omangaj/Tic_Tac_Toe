let boxes=document.querySelectorAll(".box");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");
let resetbtn = document.querySelector("#reset");


console.log(boxes[0].innerText)


let turnO =true;
let count =0;

const winpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            box.classList.add("green");
            box.classList.remove("red");
            document.getElementById("turnIndicator").innerText = "Player X's turn";
            turnO=false;
        }else{
            box.innerText="X";
            box.classList.add("red");
            box.classList.remove("green");
            turnO=true;
            document.getElementById("turnIndicator").innerText = "Player O's turn";
        }
        box.disabled=true;
        count++;
        console.log("count:", count);
        let iswinner = checkWinner();
        if(count===9 && !iswinner){
            drawgame();
        };
        
    })
})

const boxdisables=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const boxanables=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinnwer=(winner)=>{
    msg.innerText=`Congratulations...! Player ${winner} is the Winner.`;
    msgcontainer.classList.remove("hide");
    boxdisables();
}

const drawgame=()=>{
    msg.innerText="Its a Draw game";
    msgcontainer.classList.remove("hide");
    boxdisables();
}

let checkWinner=()=>{
    for(let pattern of winpatterns){
        let box1=boxes[pattern[0]].innerText;
        let box2=boxes[pattern[1]].innerText;
        let box3=boxes[pattern[2]].innerText;
        console.log("box1:",box1, "box2:",box2, "box3:",box3);

        if(box1 != "" && box2 != "" && box3 != ""){
            if ( box1===box2 && box2 === box3){
            console.log("winner is",box1);
            showWinnwer(box1);
            }
        }
    }
}

const resetgame=()=>{
    turnO=true;
    count=0;
    boxanables();
    msgcontainer.classList.add("hide");
    document.getElementById("turnIndicator").innerText = "";
}


newbtn.addEventListener("click",resetgame);

resetbtn.addEventListener("click",resetgame);
