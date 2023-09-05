`use strict`
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
  
  //   console.log(selfIntroduction[0].Name); // ???
  //   console.log(selfIntroduction[0].age); // ???
  //   console.log(selfIntroduction[0].business); // ???
  //   console.log(selfIntroduction[0].hobby); // ???
//   console.log(selfIntroduction[0].learning); // ???

//   console.log(selfIntroduction[1].Name); // ???
//   console.log(selfIntroduction[1].age); // ???
//   console.log(selfIntroduction[1].business); // ???
//   console.log(selfIntroduction[1].hobby); // ???

const info = {
    name: "名前 松崎 祐樹",
    age: "年齢 32",
    business:"業務 生産管理業務",
    hobby:"趣味 ドライブ🚗",
};

const supuraInfo = {
      Name: "名前 スプラちゃん",
      age: "年齢 ひみつ💕",
      business:"業務 課のマスコット",
      hobby: "趣味 職場を映えさせること😘",
};


const infooutput = document.getElementById("info-output");
// console.log(infooutput.innerText);
// const age = document.getElementById("age");
// console.log(age.innerText);
// const business = document.getElementById("business");
// console.log(business.innerText);
// const hobby = document.getElementById("hobby");
// console.log(hobby.innerText);
// const learning = document.getElementById("learning");
// console.log(learning.innerText);
let img = document.querySelector("img");
const last = document.getElementById("last-coment");


function infoCheck(){
let Value = "~自己紹介~";
img.src = "86.png";
img.style.display = "block";
for(const key in info){
    Value += `\n ${info[key]}`;
    infooutput.innerText = Value;    
  }
}

function supuraInfoCheck(){
  let Value = "~自己紹介~";
  img.src = "スプラちゃん.png";
  img.style.display = "block";
    for(const key in supuraInfo){
      Value += `\n ${supuraInfo[key]}`;
      infooutput.innerText = Value;    
  }
}
// infoCheck();

function lastComent(){
  last.style.display = "block";
}

const pushButton = document.getElementById("btn1");
pushButton.addEventListener("click",infoCheck);

const pushButtonTwo = document.getElementById("btn2");
pushButtonTwo.addEventListener("click",supuraInfoCheck);

const pushButtonTree = document.getElementById("btn3");
pushButtonTree.addEventListener("click",lastComent);

    // if(JSON.stringify(key) == JSON.stringify(name)){
    // }else if(key === age){
    //   Value += `\n ${info[key]}`;
    // }




// const firstData =selfIntroduction[0];
// for(i = 0;i <firstData.lengt;i++){
    // }
    // test(nameCheck(selfIntroduction), ["松崎 祐樹","32","生産管理業務","ドライブ","考え中"]);
    // // test(nameCheck(selfIntroduction), [ "スプラちゃん","ひみつ","生産管理課のマスコット","職場を映えさせること"]);

      
      // const introduction = {
      //   Name: "松崎 祐樹",
      //   age: "32",
      //   business:"生産管理業務",
      //   hobby:"ドライブ",
      //   learning:"考え中"
      // };
      
      // function getValue(){
      //   for(const key in introduction){
      //    names.innerText = (key +":"+introduction[key]);
      //    let result = names.innerText;
      //    result += names.innerText;
      //     console.log(result);
      //   }
      // }
      // getValue();
      // const pushButton1 = document.getElementById("btn1");
      // // console.log(pushButton1);
      // pushButton1.addEventListener("click",getValue);
      // console.log(names.innerText)
