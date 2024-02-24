const container = document.getElementById("container");
const imagePotrait = document.querySelector(".image-potrait");
const imageHandshake = document.querySelector(".image-handshake");
const imageECell = document.querySelector(".image-ecell");
const promptText = document.getElementById("prompt-text");

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

function handleYes() {
  document.querySelector(".btn-yes").classList.add("hide");
  document.querySelector(".btn-no").classList.add("hide");
  imagePotrait.classList.add("hide");
  imageECell.classList.add("hide");
  promptText.classList.add("hide");
  imageHandshake.src = "assets/shark_tank.gif";
  imageHandshake.classList.remove("hide");
  imageHandshake.style.transform = "scale(2)";
  imageHandshake.style.position = "absolute";
  imageHandshake.style.top = "50%";
  imageHandshake.style.left = "50%";
  imageHandshake.style.transform = "translate(-50%, -50%) scale(2)";
}

const btnNo = document.querySelector(".btn-no");
btnNo.addEventListener("mouseover", (event) => {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});
