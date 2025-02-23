const texts = ["안내면진다", "가위", "바위", "보"];
let index = 0;
let userChoiceMade = false;
let gameStarted = false;

const generateRandomNumber = () => Math.floor(Math.random() * 3);

let imgIndex = generateRandomNumber();

// start 버튼
document.getElementById("startButton").addEventListener("click", function () {
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

// 1. 이미지 출력
// 컴퓨터 이미지 랜덤 출력
const images = [
  "https://cdn-icons-png.flaticon.com/128/9534/9534501.png",
  "https://cdn-icons-png.flaticon.com/128/13992/13992554.png",
  "https://cdn-icons-png.flaticon.com/128/12355/12355903.png",
];
let interval;

function startGame() {
  document.getElementById("result").innerText = "";
  document.getElementById("image").src =
    "https://cdn-icons-png.flaticon.com/128/6688/6688560.png";
  let index = 0;

  setTimeout(() => {
    interval = setInterval(() => {
      // const randomIndex = Math.floor(Math.random()*images.length);
      document.getElementById("image").src = images[index];
      index = (index + 1) % images.length;
    }, 100);
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    const finalChoice = Math.floor(Math.random() * images.length);
    document.getElementById("image").src = images[finalChoice];

    const resultText = ["바위", "보", "가위"][finalChoice];
    document.getElementById(
      "result"
    ).innerText = `컴퓨터의 선택 : ${resultText}`;
  }, 2000);
}

// // 2. 이미지 출력
// function startGame() {

//             let count = 0;
//             interval = setInterval(() => {
//                 document.getElementById("imags").src = imags[Math.floor(Math.random() * imags.length)];
//                 count++;
//                 if (count > 5) { // 5번 변경 후 멈추고 최종 결정
//                     clearInterval(interval);
//                     showResult();
//                 }
//             }, 100);
//         }

//         function showResult() {
//             const finalChoice = imags[Math.floor(Math.random() * imags.length)];
//             document.getElementById("image").src = finalChoice;
//         }

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
    document.getElementById(
      "resultText"
    ).textContent = `당신의 선택: ${event.target.textContent}`;
  }
}

// 가위바위보 선택
document.getElementById("가위").addEventListener("click", handleUserChoice);
document.getElementById("바위").addEventListener("click", handleUserChoice);
document.getElementById("보").addEventListener("click", handleUserChoice);

//* PC랜덤
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

const playi = (userChoice) => {
  setuserSelect(choice[userChoice]);

  let computerChoice = randomChoice();
  setcomputerSelect(computerChoice);

  setResult(randomPic(choice[userChoice], computerChoice));
};

const randomPic = (user, computer) => {
  if (user.name === computer.name) {
    return "Tie";
  } else if (user.name === "Rock")
    return computer.name === "Scissors" ? "Win" : "Lose";
  else if (user.name === "Scissors")
    return computer.name === "Paper" ? "Win" : "Lose";
  else if (user.name === "Paper")
    return computer.name === "Rock" ? "Win" : "Lose";
};

// reset 버튼
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  location.reload(true);
});
