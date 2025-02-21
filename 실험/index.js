let choices = ["가위", "바위", "보"];
let gameInterval;
let gameStarted = false;

function startGame() {
  if (gameStarted) return;

  gameStarted = true;
  document.getElementById("result").innerHTML = ""; // 결과 초기화

  // Start 버튼을 비활성화하고, 가위 바위 보 버튼을 활성화
  document.getElementById("stbtn").disabled = true;
  document.getElementById("buttons").style.display = "block"; // 가위 바위 보 버튼을 보여줌

  // setInterval을 통해 컴퓨터 선택을 랜덤으로 계속해서 변경
  gameInterval = setInterval(() => {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    document.getElementById("comChoice").src = getChoiceImage(randomChoice);
  }, 500);

  // 게임 종료 후 30초 뒤에 자동으로 setInterval을 멈추고 결과를 출력
  setTimeout(() => {
    clearInterval(gameInterval);
    document.getElementById("stbtn").disabled = false; // 다시 Start 버튼 활성화
  }, 30000); // 30초 후 종료
}

function getChoiceImage(choice) {
  if (choice === "가위") {
    return "https://cdn-icons-png.flaticon.com/128/6688/6688580.png"; // 가위 이미지
  } else if (choice === "바위") {
    return "https://cdn-icons-png.flaticon.com/128/6688/6688587.png"; // 바위 이미지
  } else {
    return "https://cdn-icons-png.flaticon.com/128/6688/6688584.png"; // 보 이미지
  }
}

function userChoice(userPick) {
  if (!gameStarted) return; // 게임이 시작되지 않았다면 아무것도 하지 않음

  let computerPick = choices[Math.floor(Math.random() * choices.length)];

  // 컴퓨터의 선택을 정지
  clearInterval(gameInterval);
  document.getElementById("comChoice").src = getChoiceImage(computerPick);

  // 승패 판단
  let result = "";
  if (userPick === computerPick) {
    result = "비겼습니다!";
  } else if (
    (userPick === "가위" && computerPick === "보") ||
    (userPick === "바위" && computerPick === "가위") ||
    (userPick === "보" && computerPick === "바위")
  ) {
    result = "사용자가 이겼습니다!";
  } else {
    result = "사용자가 졌습니다!";
  }

  // 결과 출력
  document.getElementById(
    "result"
  ).innerHTML = `사용자: ${userPick} <br> 컴퓨터: ${computerPick} <br> ${result}`;

  // 게임 버튼 비활성화
  document
    .querySelectorAll("#buttons button")
    .forEach((btn) => (btn.disabled = true));
}
