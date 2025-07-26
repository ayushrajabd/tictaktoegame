let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelectorAll("#newbtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
const winningresult=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turno==true){
            box.innerText="0";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const resetgame =() =>{
    turno=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText="";
    });
}
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner=(winner)=>{
    msg.innerText= `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}


const checkwinner =()=>{
    for(let pattern of winningresult){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;
    

    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if((pos1val === pos2val)&&(pos2val === pos3val)){
            console.log("winner",pos1val);
            showWinner(pos1val);
            disableBoxes();
        }

    }}
};
resetBtn.addEventListener("click", resetgame);
newGameBtn.forEach((btn) => {
    btn.addEventListener("click", resetgame);
});