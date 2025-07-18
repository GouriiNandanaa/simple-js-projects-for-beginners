const bodyEl = document.querySelector("body");

const btnClass = document.querySelectorAll(".btn-class");
  

btnClass.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentButton = e.target.getAttribute("id");

    if (currentButton == "random-btn")
      bodyEl.style.backgroundColor = `#${random()}`;
    else{
        bodyEl.style.backgroundColor=getComputedStyle(e.target).backgroundColor;
    }
  });
});

function random() {
  return Math.floor(Math.random() * 16 ** 6).toString(16);
}
