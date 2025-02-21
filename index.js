//* start 버튼 이후 안내면 진다 출력 및 타이머 시작 후 "보"까지 출력 후 자동 멈춤
const texts = ["안내면진다", "가위", "바위", "보"];

let index = 0;
let interverl;

document.getElementById("startBtn");
document.addEventListener("click", function () {
  if (interverl) clearInterval(interverl);
  index = 0;
  document.getElementById("displayText").textContent = texts[index];
  interverl = setInterval(() => {
    index++;
    document.getElementById("displayText").textContent = texts[index];
    if (index === texts.length - 1) {
      clearInterval(interverl);
    }
  }, 1000);
});

// function stopInterval() {
//   if (index === 3) clearInterval(index);
//   return;
// }

// document.getElementById("scissorsButton");
// document.addEventListener("click", stopInterval);
// document.getElementById("rockButton").addEventListener("click", stopInterval);
// document.getElementById("paperButton").addEventListener("click", stopInterval);

//* 1개 선택 후 나머지는 비활성화
function disableButtons(clickedButton) {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button !== clickedButton) {
      button.disabled = true;
    }
  });
}

//* 비활성화된 버튼 내 이미지 흐리게 처리하기
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("blur-button");
  const image = document.getElementById("button-image");

  //   button.addEventListener("mouseover", function () {
  //     image.style.filter = "blur(4px)";
  //   });

  //   button.addEventListener("mouseout", function () {
  //     image.style.filter = "blur(4px)";
  //   });
});
