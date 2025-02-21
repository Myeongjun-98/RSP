const texts = ["안내면진다", "가위", "바위", "보"];
let index = 0;
let interval;
let userChoiceMade = false;
let gameStarted = false;
document.getElementById("startButton").addEventListener("click", function () {
  //   if (interval || gameStarted) return;
  index = 0;
  userChoiceMade = false;
  gameStarted = true;
  document.getElementById("displayText").textContent = texts[index];
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("resultText").textContent = "";

  interval = setInterval(() => {
    index++;
    document.getElementById("displayText").textContent = texts[index];

    if (index === texts.length - 1) {
      clearInterval(interval);
      document.getElementById("가위").disabled = false;
      document.getElementById("바위").disabled = false;
      document.getElementById("보").disabled = false;
    }
  }, 1000);
});

//* PC랜덤
// 랜덤 가위바위보 선택 함수
function getRandomChoice() {
  const choices = ["가위", "바위", "보"];
  return choices[Math.floor(Math.random() * choices.length)];
}
function getImageForChoice(choice) {
  const comRsp = {
    가위: "https://cdn-icons-png.flaticon.com/128/9534/9534501.png",
    바위: "https://cdn-icons-png.flaticon.com/128/13992/13992554.png",
    보: "https://cdn-icons-png.flaticon.com/128/9396/9396667.png",
  };
  return (
    comRsp[choice] || "https://cdn-icons-png.flaticon.com/128/6688/6688580.png"
  );
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

function disableButtons(state) {}

function handleUserChoice(event) {
  if (index === texts.length - 1 && !userChoiceMade) {
    userChoiceMade = true;
    document.getElementById("resetButton").disabled = false;
    document.getElementById("가위").disabled = true;
    document.getElementById("바위").disabled = true;
    document.getElementById("보").disabled = true;
    event.target.disabled = false; // 선택한 버튼만 활성화
    document.getElementById(
      "resultText"
    ).textContent = `당신의 선택: ${event.target.textContent}`;
  }
}

document.getElementById("가위").addEventListener("click", handleUserChoice);
document.getElementById("바위").addEventListener("click", handleUserChoice);
document.getElementById("보").addEventListener("click", handleUserChoice);

let user = ["가위", "바위", "보"];
document.getElementById("가위").addEventListener("click", function () {
  let com = user[Math.floor(Math.random() * 3)];
  let userChoice = "가위";
  if (userChoice === com) {
    console.log("비겼습니다.");
  } else if (
    (userChoice === "가위" && com === "보") ||
    (userChoice === "바위" && com === "가위") ||
    (userChoice === "보" && com === "바위")
  ) {
    console.log("당신이 이겼습니다.");
  } else {
    console.log("당신이 졌습니다");
  }
});

document.getElementById("바위").addEventListener("click", function () {
  let com = user[Math.floor(Math.random() * 3)];
  let userChoice = "가위";
  if (userChoice === com) {
    console.log("비김");
  } else if (
    (userChoice === "가위" && com === "보") ||
    (userChoice === "바위" && com === "가위") ||
    (userChoice === "보" && com === "바위")
  ) {
    console.log("이김");
  } else {
    console.log("짐");
  }
});

function disableButtons(state) {}
document.getElementById("resetButton").addEventListener("click", function () {
  if (interval) clearInterval(interval);
  index = 0;
  userChoiceMade = false;
  gameStarted = false;
  document.getElementById("displayText").textContent = "안내면진다";
  document.getElementById("resultText").textContent = "";
  document.getElementById("startButton").disabled = false;
  document.getElementById("resetButton").disabled = true;
  document.getElementById("scissorsButton").disabled = true;
  document.getElementById("rockButton").disabled = true;
  document.getElementById("paperButton").disabled = true;
});
