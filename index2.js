const startButton = document.querySelector("stbtn");

let choices = ["가위", "바위", "보"];

stbtn.addEventListener("click", () => {
  function playGame() {
    let userChoice = prompt("가위, 바위, 보 중 하나를 선택하세요:");
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`사용자: ${userChoice}\n컴퓨터: ${computerChoice}`);

    if (userChoice === computerChoice) {
      alert("비겼습니다!");
    } else if (
      (userChoice === "가위" && computerChoice === "보") ||
      (userChoice === "바위" && computerChoice === "가위") ||
      (userChoice === "보" && computerChoice === "바위")
    ) {
      alert("사용자가 이겼습니다!");
    } else {
      alert("사용자가 졌습니다!");
    }
  }
});

// let interval = setInterval(playGame, 5000); // 5초마다 게임 실행

// 게임을 30초 후에 멈추기 위한 예시
setTimeout(() => clearInterval(interval), 30000); // 30초 후에 setInterval 종료

// 타이머
const startButton = document.querySelector("stbtn");
// const messages = ["안내면진다", "가위", "바위", "보"];
// const h1 = document.querySelector("h1");
const button = document.querySelector("button");

let choices = ["가위", "바위", "보"];

stbtn.addEventListener("click", () => {
  function playGame() {
    let userChoice = prompt("가위, 바위, 보 중 하나를 선택하세요:");
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    alert(`사용자: ${userChoice}\n컴퓨터: ${computerChoice}`);

    if (userChoice === computerChoice) {
      alert("비겼습니다!");
    } else if (
      (userChoice === "가위" && computerChoice === "보") ||
      (userChoice === "바위" && computerChoice === "가위") ||
      (userChoice === "보" && computerChoice === "바위")
    ) {
      alert("사용자가 이겼습니다!");
    } else {
      alert("사용자가 졌습니다!");
    }
  }
});

// let timer;

// stbtn.addEventListener("click", () => {
//   const titleId = setInterval(() => {
//     console.log("안내면진다");
//     h1.innerText = messages[index];
//     index += 1;
//     time += 1;
//     if (index === 4) {
//       clearInterval();
//     }
//   }, 2000);
// });
// PC랜덤 선택
