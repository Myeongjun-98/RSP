const texts = ["안내면진다", "가위", "바위", "보"];
let index = 0;
let userChoiceMade = false;
let gameStarted = false;

// start 버튼
document.getElementById("startButton").addEventListener("click", function () {
  index = 0;
  userChoiceMade = false;
  gameStarted = true;
  document.getElementById("displayText").textContent = texts[index];
  document.getElementById("startButton").disabled = true;
  document.getElementById("resetButton").disabled = true;

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
  startGame();
});

const generateRandomNumber = () => Math.floor(Math.random() * 3 + 1);
let imgIndex = generateRandomNumber();

// 컴퓨터 이미지 랜덤 출력
const image = [
  "https://cdn-icons-png.flaticon.com/128/9534/9534501.png",
  "https://cdn-icons-png.flaticon.com/128/13992/13992554.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];
let interval;

function startGame() {
  document.getElementById("modal-overlay").style.display = "none";
  document.getElementById("modal").innerText = "";
  document.getElementById("image").src =
    "https://cdn-icons-png.flaticon.com/128/6688/6688560.png";

  let index = 0;

  // 이미지가 일정시간동안 자동으로 출력
  setTimeout(() => {
    interval = setInterval(() => {
      document.getElementById("image").src = image[index];
      index = (index + 1) % image.length;
    }, 100);
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    const computerChoice = Math.floor(Math.random() * image.length);
    const finalChoice = Math.floor(Math.random() * image.length);
    document.getElementById("image").src = image[finalChoice];
  }, 6000);
}

// 랜덤으로 pc가위바위보 선택
function getRandomChoice() {
  const choices = ["가위", "바위", "보"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`🔹 PC 선택: ${randomChoice}`); // 콘솔에 출력!
  return randomChoice;
}

function disableButtons(state) {}
function handleUserChoice(event) {
  if (index === texts.length - 1 && !userChoiceMade) {
    userChoiceMade = true;
    document.getElementById("resetButton").disabled = false;
    document.getElementById("가위").disabled = true;
    document.getElementById("바위").disabled = true;
    document.getElementById("보").disabled = true;
    event.target.disabled = false; // 선택한 버튼만 활성화
    document.getElementById("resultText");
  }
}

// 가위바위보 선택
document.getElementById("가위").addEventListener("click", handleUserChoice);
document.getElementById("바위").addEventListener("click", handleUserChoice);
document.getElementById("보").addEventListener("click", handleUserChoice);

// //* PC랜덤
let user = ["가위", "바위", "보"];

document.getElementById("가위").addEventListener("click", function () {
  let com = user[Math.floor(Math.random() * 3)];
  let userChoice = "가위";
  if (userChoice === com) {
    console.log("👊무승부👊");
  } else if (
    (userChoice === "가위" && com === "보") ||
    (userChoice === "바위" && com === "가위") ||
    (userChoice === "보" && com === "바위")
  ) {
    console.log("👍승리👍");
  } else {
    console.log("👎패배👎");
  }
});

document.getElementById("바위").addEventListener("click", function () {
  let com = user[Math.floor(Math.random() * 3)];
  let userChoice = "바위";
  if (userChoice === com) {
    console.log("👊무승부👊");
  } else if (
    (userChoice === "가위" && com === "보") ||
    (userChoice === "바위" && com === "가위") ||
    (userChoice === "보" && com === "바위")
  ) {
    console.log("👍승리👍");
  } else {
    console.log("👎패배👎");
  }
});

document.getElementById("보").addEventListener("click", function () {
  let com = user[Math.floor(Math.random() * 3)];
  let userChoice = "보";
  if (userChoice === com) {
    console.log("👊무승부👊");
  } else if (
    (userChoice === "가위" && com === "보") ||
    (userChoice === "바위" && com === "가위") ||
    (userChoice === "보" && com === "바위")
  ) {
    console.log("👍승리👍");
  } else {
    console.log("👎패배👎");
  }
});

setTimeout(() => {
  clearInterval(interval);
  const computerChoice = Math.floor(Math.random() * image.length);
  const userChoice = Math.floor(Math.random() * image.length);
  document.getElementById("image").src = image[computerChoice];

  let resultMessage = "";
  if (computerChoice === userChoice) {
    resultMessage = "👊무승부👊";
  } else if (
    (computerChoice === 0 && userChoice === 2) ||
    (computerChoice === 1 && userChoice === 0) ||
    (computerChoice === 2 && userChoice === 1)
  ) {
    resultMessage = "👎패배👎";
  } else {
    resultMessage = "👍승리👍";
  }

  document.getElementById("event");
  document.innerText = resultMessage;
  document.getElementById("result-detail");
}, 2000);

openModal();
function openModal() {
  document.getElementById("modal-overlay").style.display = "block";
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal-overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
}

// reset 버튼
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  location.reload(true);
});
