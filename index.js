//* start 버튼 이후 안내면 진다 출력 및 타이머 시작 후 "보"까지 출력 후 자동 멈춤
const texts = ["안내면진다", "가위", "바위", "보"];
let index = 0;
let interverl;
let userChoiceMade = false;
let img = document.querySelector("img");

let imgArray = new Array();
imgArray[0] = "paper.png";
imgArray[1] = "rock.png";
imgArray[2] = "scissors.png";

document.getElementById("startBtn");
document.addEventListener("click", function () {
  if (interverl) clearInterval(interverl);
  index = 0;
  userChoiceMade = false;
  document.getElementById("displayText").textContent = texts[index];
  document.getElementById("startButton").disabled = true;

  interverl = setInterval(() => {
    index++;
    document.getElementById("displayText").textContent = texts[index];

    if (index === texts.length - 1) {
      clearInterval(interverl);
    }
  }, 1000);
});

function handleUserChoice() {
  if (index === texts.length - 1 && !userChoiceMade) {
    userChoiceMade = true;
  }
}
//* 가위바위보 버튼 중 한 선택
document.getElementById("scissorsButton");
document.addEventListener("click", handleUserChoice);
document
  .getElementById("rockButton")
  .addEventListener("click", handleUserChoice);
document
  .getElementById("paperButton")
  .addEventListener("click", handleUserChoice);

//* PC랜덤
// 랜덤 가위바위보 선택 함수
function getRandomChoice() {
  const choices = ["가위", "바위", "보"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// 선택한 가위바위보에 맞는 이미지 반환 함수
function getImageForChoice(choice) {
  const comRsp = {
    가위: "https://cdn-icons-png.flaticon.com/128/2997/2997926.png", // 가위 이미지
    바위: "https://cdn-icons-png.flaticon.com/128/2997/2997925.png", // 바위 이미지
    보: "https://cdn-icons-png.flaticon.com/128/2997/2997924.png", // 보 이미지
  };
  return (
    comRsp[choice] || "https://cdn-icons-png.flaticon.com/128/6688/6688580.png"
  ); // 기본 이미지
}

// 가위바위보 버튼 클릭 시 동작
document.querySelectorAll("button[id$='Button']").forEach((button) => {
  button.addEventListener("click", function () {
    if (index === texts.length - 1 && !userChoiceMade) {
      userChoiceMade = true;
      const userChoice = this.textContent.trim().slice(0, 2);
      const pcChoice = getRandomChoice();

      // 이미지 변경
      const pcImage = document.querySelector(".comRsp img");
      if (pcImage) {
        pcImage.src = getImageForChoice(pcChoice);
      }

      // 결과 출력
      document.getElementById(
        "displayText"
      ).textContent = `사용자: ${userChoice} | PC: ${pcChoice} → ${determineWinner(
        userChoice,
        pcChoice
      )}`;

      disableButtons(this);
    }
  });
});

// document.getElementById("resetButton");
// document.addEventListener("click", function () {
//   if (interval) clearInterval(interval);
//   index = 0;
//   userChoiceMade = false;
//   document.getElementById("displayText").textContent = "안내면진다";
//   document.getElementById("startButton").disabled = false;
// });

// function stopInterval() {
//   if (index === 3) clearInterval(index);
//   return;
// }

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
