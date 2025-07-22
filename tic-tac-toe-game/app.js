const btnClass = document.querySelectorAll(".btn-class");
const resetBtn = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 6, 8],
  [3, 4, 5],
  [6, 7, 8],
];
btnClass.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e.target);
    // e.target.innerText = "O";
    // console.log(e.target.innerText);
    if (turn0) {
      e.target.innerText = "X";
      turn0 = false;
    } else {
      e.target.innerText = "O";
      turn0 = true;
    }
    e.target.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = btnClass[pattern[0]].textContent;
    let pos2Val = btnClass[pattern[1]].textContent;
    let pos3Val = btnClass[pattern[2]].textContent;

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      disableBoxes();

      console.log(`winner is ${pos1Val}`);
      showWinner(pos1Val);
    }
  }
};

const showWinner = (pos1Val) => {
  msgContainer.style.display = "block";
  resetBtn.style.display = "none";
  msg.textContent = `Winner is ${pos1Val}`;
};

const hideEntry = () => {
  btnClass.forEach((btn) => {
    btn.textContent = "";
  });
};

newBtn.addEventListener("click", (e) => {
  hideEntry();
  btnClass.forEach((btn) => {
    btn.disabled = false;
  });
});

resetBtn.addEventListener("click", (e) => {
  hideEntry();
});

const disableBoxes = () => {
  btnClass.forEach((btn) => {
    btn.disabled = true;
  });
};

console.log("hihi");

