//renturn X, parameter X
function hi() {
  // alert("Hi!!!");
  console.log("Hi!!!!!!!!!!!!!!!!!");
}

function sum(x, y) {
  let result = x + y;
  console.log(result);
}
// 타입이 없으니 그냥 x,y 만 적어줌
//자바와 다르게 int, double 이런거 안적어줌!

function total(x, y) {
  return x + y;
}

function name1() {
  let name = prompt("이름");
  if (name === "" || name === null) {
    alert("입력해주세요");
    name1();
  } else {
    alert(name + "님 안녕하세요");
    console.log(name + "님 안녕하세요");
  }
}
