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
  // document.getElementById("resultText").textContent = "";

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
  document.getElementById("event-container").style.display = "none";
  document.getElementById("event").innerText = "";
  document.getElementById("result").innerText = "";
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
    // const computerChoice = Math.floor(Math.random() * image.length);   없어도 될 코드드
    const finalChoice = Math.floor(Math.random() * image.length);
    document.getElementById("image").src = image[finalChoice];
  }, 4000);
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

// // 승패여부 비교
// const whoWhins = (v1,v2) => {
//   if (v1 === v2) {
//     return "👊무승부👊"
//   }
//   if(v1 === 0 && v2 === 1){
//     return  console.log("👎패배👎")
//   }
//   if(v1 === 1 && v2 === 2){
//     return console.log("👎패배👎")
//   }
//   if (v1 === 2 && v2 === 0){
//     return console.log("👎패배👎")
//   }
//   return console.log("👍승리👍")
// }

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

// 사용자의 선택
const randomChoice = (userChoice) => {
  setuserSelect(choice[userChoice]);

  let computerChoice = randomChoice();
  setcomputerSelect(computerChoice);

  setResult(randomPic(choice[userChoice], computerChoice));
};

// 가위바위보 선택
document.getElementById("가위").addEventListener("click", handleUserChoice);
document.getElementById("바위").addEventListener("click", handleUserChoice);
document.getElementById("보").addEventListener("click", handleUserChoice);

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

// 게임 결과 창
function resultText(result, player, pc) {
  modal.style.display = "block";
}

// 모달창 시간 설정
let time = 5;
const modal_time = document.querySelector("#time");
let modal_close = 0;

// 모달창 자동으로 닫기
function closeModal() {
  modal_time.innerText = time;
  modal_close = setInterval(function () {
    modal_time.innerText = --time; // 1초씩 마이너스
    if (time === 0) {
      //0초가 되면 모달창 숨김처리
      modal.style.display = "none";
    }
  }, 1000);
}

clearInterval(modal_close);

// reset 버튼
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", () => {
  location.reload(true);
});
