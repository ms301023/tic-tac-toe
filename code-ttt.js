let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);






// let boxes=document.querySelectorAll(".box");
// let rst=document.querySelector("#reset");
// let msg=document.querySelector(".msg");
// let msgg=document.querySelector("#msgg");


// let turn0= false; //player o turn
// const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


// boxes.forEach((box)=>{
//     box.addEventListener("click", ()=>{
//         // console.log("box was clicked");
//         if(turn0==false){
//             box.innerText="X";
//             turn0=true;
//         }
//         else{
//             box.innerText="O";
//             turn0=false;
//         }
//         box.disabled=true;
//         checkwinner();
//     });
// });

// // const showWinner=(winner)=>{
// //     msgg.innerText="Winner i"
// //     msg.classList.remove("hide");
// // };

// const checkwinner = () =>{
//     for(let i of win){
//         let pat1=boxes[i[0]].innerText;
//         let pat2=boxes[i[1]].innerText;
//         let pat3=boxes[i[2]].innerText;

//         if(pat1!="" && pat2!="" && pat3!=""){
//             if(pat1===pat2 && pat2===pat3){
//                 // showWinner(pat1);
//                 console.log(`${pat1} wins!`);
//                 return true;
//                 disableBoxes();
//             }
//         }
//     }
// };


// const resetGame=()=>{
//     turn0=false;
//     enableBoxes();
//     // msg.classList.add("hide");
// };

// const enableBoxes=()=>{
//     for(let i of boxes){
//         i.disabled=false;
//         i.innerText="";
//     }
// };

// const disableBoxes=()=>{
//     for(let i of boxes){
//         i.disabled=True;
//     }
// };

// reset.addEventListener("click",resetGame);