console.log("123");

let number=document.querySelector("#number-value");
// console.log(number);
let btn=document.querySelector("#calc-btn");
// console.log(btn);
let response=document.querySelector("#response");
// console.log(response);

// 判斷標準
const scoreTolevel=(value)=>{
    if(value>=90){
        return "甲";
    }
    if(value>=80){
        return "乙";
    }
    if(value>=70){
        return "丙";
    }
    if(value>=60){
        return "丁";
    }
    return "不及格";
}

console.log(scoreTolevel);
// 根據標準更新畫面
const updateHtml=()=>{
    let value=number.value;
    let level=scoreTolevel(value);

    response.querySelector("span").innerHTML=level;
}

btn.addEventListener('click',()=>{
    updateHtml();
})