function solution() {
  //숫자를 입력받고
  const num = prompt("숫자입력");

  // 숫자가 아니면 '숫자를 입력해 주세요' 라고 경고창을 띄웁니다.
  // 숫자가 맞고 1이상 혹은 100 이하가 아니면 1이상 100이하를 넣어주세요 경고창 띄우기

  if (isNaN(num)) {
    alert("숫자를 입력해주세요");
  } else if (!(1 <= num && num <= 100)) {
    alert("1이상 100이하를 넣어주세요");
  } else {
    // 숫자가 1이상 100이하라면 로그 띄어주고
    for (let i = 1; i <= 100; i++) {
      console.log(i);
    }
    alert("완료되었습니다.");
  }
}

// 100까지 모두 다 찍으면 '완료되었습니다'

// function number1() {
// let num = prompt("숫자를 입력하세요");

//     if(isNaN(num)){
//     alert("숫자를 입력해주세요");
//     number1();
//     }
//      else if(num<=100  && num>= 1){
//         for(let num = 0; num < 100; num++);

//     } else{
//         alert("1이상 혹은 100이하를 넣어주세요");
//         number1();
//     }

// }
