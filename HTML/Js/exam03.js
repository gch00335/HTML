// 문구 받기
function input() {
  const text = prompt("");

  //문구 못 받으면 다시 입력하게 하기
  if (text === null || text === "") {
    alert("텍스트 값을 입력해주세요");
    input();
  } else {
    // 가운데 위치하게 설정
    const displayElement = document.getElementById("display");
    displayElement.textContent = text;
    button();
  }
}

// 조건 맞으면 버튼 생성
function button() {
  const colors = ["red", "blue", "green"];
  const buttonsDiv = document.getElementById("button");

  colors.forEach(function (color) {
    const button = document.createElement("button");
    button.textContent = color;
    button.addEventListener("click", function () {
      changeColor(color);
    });
    buttonsDiv.appendChild(button);
  });
}
// 색깔변경
function changeColor(color) {
  const displayElement = document.getElementById("display");
  displayElement.className = color;
  alert(`${color}로 변경됩니다.`);
}
