// //* start 버튼 이후 안내면 진다 출력 및 타이머 시작 후 "보"까지 출력 후 자동 멈춤
// const texts = ["안내면진다", "가위", "바위", "보"];
// let index = 0;
// let interverl;
// let userChoiceMade = false;

// document.getElementById("startBtn");
// document.addEventListener("click", function () {
//   if (interverl) clearInterval(interverl);
//   index = 0;
//   userChoiceMade = false;
//   document.getElementById("displayText").textContent = texts[index];
//   document.getElementById("startButton").disabled = true;

//   interverl = setInterval(() => {
//     index++;
//     document.getElementById("displayText").textContent = texts[index];

//     if (index === texts.length - 1) {
//       clearInterval(interverl);
//     }
//   }, 1000);
// });

// function handleUserChoice() {
//   if (index === texts.length - 1 && !userChoiceMade) {
//     userChoiceMade = true;
//   }
// }
// //* 가위바위보 버튼 중 한 선택
// document.getElementById("가위");
// document.addEventListener("click", handleUserChoice);
// document.getElementById("바위").addEventListener("click", handleUserChoice);
// document.getElementById("보").addEventListener("click", handleUserChoice);

// //* PC랜덤
// function getRandomChoice() {
//   const choices = ["가위", "바위", "보"];
//   const randomIndex = Math.floor(Math.random() * choices.length);
//   return choices[randomIndex];
// }

// function determineWinner(userChoice, pcChoice) {
//   if (userChoice === pcChoice) {
//     return "무승부!";
//   }
//   if (
//     (userChoice === "가위" && pcChoice === "보") ||
//     (userChoice === "바위" && pcChoice === "가위") ||
//     (userChoice === "보" && pcChoice === "바위")
//   ) {
//     return "사용자 승리!";
//   }
//   return "컴퓨터 승리!";
// }

// document.querySelectorAll("button[id$='Button']").forEach((button) => {
//   button.addEventListener("click", function () {
//     const userChoice = this.textContent.trim().slice(0, 2);
//     const pcChoice = getRandomChoice();
//     document.querySelector(".comRsp").src = getImageForChoice(pcChoice);
//     document.getElementById(
//       "displayText"
//     ).textContent = `사용자: ${userChoice} | PC: ${pcChoice} → ${determineWinner(
//       userChoice,
//       pcChoice
//     )}`;
//   });
// });

// document.getElementById("resetButton").addEventListener("click", function () {
//   document.querySelector(".comRsp img").src =
//     "https://cdn-icons-png.flaticon.com/128/6688/6688580.png";
//   document.getElementById("displayText").textContent = "안내면 진다";
// });

// function getImageForChoice(choice) {
//   const comRsp = {
//     가위: "https://www.flaticon.com/kr/free-icon/two_13480938",
//     바위: "https://www.flaticon.com/kr/free-icon/closed-fist_4660167",
//     보: "https://www.flaticon.com/kr/free-icon/palm_4866399",
//   };
//   return comRsp[choice] || comRsp["가위"];
// }

// // // * reset 버튼
// // document.getElementById("resetButton");
// // document.addEventListener("click", function () {
// //   if (interval) clearInterval(interval);
// //   index = 0;
// //   userChoiceMade = false;
// //   document.getElementById("displayText").textContent = "안내면진다";
// //   document.getElementById("startButton").disabled = false;
// // });

// // function stopInterval() {
// //   if (index === 3) clearInterval(index);
// //   return;
// // }

// //* 1개 선택 후 나머지는 비활성화
// function disableButtons(clickedButton) {
//   let buttons = document.querySelectorAll("button");
//   buttons.forEach((button) => {
//     if (button !== clickedButton) {
//       button.disabled = true;
//     }
//   });
// }

// //* 비활성화된 버튼 내 이미지 흐리게 처리하기
// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.getElementById("blur-button");
// });

//* 가위, 바위, 보 중 하나의 버튼 누를때 console창에 결과만 출력

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

document.getElementById("보").addEventListener("click", function () {
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
