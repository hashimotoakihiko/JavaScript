// let header = document.querySelector("h1"); 
// header.textContent = "Hello world!"; 



// let header = document.querySelector("h1");
// // ここに処理を追加していきます 
// console.log("テスト");

// console.error("エラーです"); 
// console.warn("警告です"); 
// for (let i = 0; i < 3; i++) { 
//   // 呼び出されるたびに1ずつ増えます 
//   console.count(); 
// } 

// let obj = { 
//   name: "john", 
//   age : 35, 
//   gender : "male", 
//   sayHello : function () { 
//     alert("Hello!"); 
//   } 
// }; 
// // プロパティのみテーブル形式で表示してくれます console.table(obj); 


function keisan(num) { 
  // 引数 * 3をculcに代入する 
  let culc = num * 3; 
  // culcが9の倍数だったら1を加算する 
  if (culc % 9 === 0) { 
    culc += 1; 
  } 
  return culc; 
}

let num = 2; 
for (let i = 0; i < 10; i++) { 
  num = keisan(num); 
}

// ポイント1. デベロッパーツールを利⽤してConsoleかSourcesでデバッグを⾏う
// ポイント2. Consoleを利⽤してデバッグする場合はConsoleオブジェクトを利⽤して変数値を確認する 
// ポイント3. ブレークポイントを指定することでプログラムの途中の変数値をチェックできる

  

