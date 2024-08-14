let newGame = document.querySelector("#newGame");
let boxes = document.querySelectorAll(".box");
let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

newGame.addEventListener("click", () => {
  boxes.forEach((box) => {
    // console.log(box);
    box.innerText = "";
    turnO = true;
    box.disabled = false;
    newGame.innerText = "New Game";
    box.classList.remove("Winner", "tic", "tac");

    // enableBoxes();
  });
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      box.classList.add("tic");

      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("tac");

      turnO = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winPatterns) {
    let posval1 = boxes[pattern[0]].innerText;
    let posval2 = boxes[pattern[1]].innerText;
    let posval3 = boxes[pattern[2]].innerText;
    if (posval1 != "" && posval2 != "" && posval3 != "") {
      if (posval1 === posval2 && posval2 === posval3) {
        newGame.innerText = posval1 + " is Winner | New Game";
        boxes[pattern[0]].classList.add("Winner");
        boxes[pattern[1]].classList.add("Winner");
        boxes[pattern[2]].classList.add("Winner");

        disableBoxes();
      }
    }
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = fasle;
  }
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
