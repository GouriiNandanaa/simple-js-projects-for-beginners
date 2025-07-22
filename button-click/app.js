const randomBtn = document.querySelector("#random-btn");

console.log(randomBtn);

function setPosition() {
  return {
    left: Math.floor(Math.random() * 90),
    top: Math.floor(Math.random() * 80),
  };
}

setPosition();

let timeInterval = setInterval(() => {
  const { left, top } = setPosition();
  randomBtn.style.left = `${left}%`;
  randomBtn.style.top = `${top}%`;
}, 1000);

randomBtn.addEventListener("click", (e) => {
  clearInterval(timeInterval);
  success();
});

function success() {
  alert("You Won");
}
