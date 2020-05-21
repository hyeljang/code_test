// 1) 0부터 n-1까지 더하는 함수를 만들고 싶다면?

function get_sum(n) {
   let sum = 0
   for (let i = 0; i < n; i++)  {
      sum = sum + i;
   }
   return sum
}

let result = get_sum(10);
console.log(result)

// 2) 배열에서 원소의 갯수를 세기 
// 다음에서 '딸기'는 몇 개일까? - 이번엔 자바스크립트 콘솔창에서!
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']


// 0부터 입력받은 숫자의 홀수를 모두 더해주는 함수, ex) consol.log(add_odd(7))
// 점수를 입력한 후, 학점을 입력하는 것
function get_holsum(n) {
  let total = 0
  for (let i = 0; i < n; i++){
   if (i % 2 == 1){
      total = total + 1
   }
  else (){

   }

  }
   
}

let result1 = get_holsum(3);
console.log(result1)
