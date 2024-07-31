console.log("welcome to tic-tac-toe");
let music = new Audio("music.mp3");
let change = new Audio("tun.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameover = false;

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(e => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won ";
      isGameover = true;
      document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "100px";
    }
  });
};

//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      change.play();
      checkWin();
      if (!isGameover) {
        document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
      }
    }
  });
});

//reset button
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  isGameover = false;
  document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
  document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0px";
});
