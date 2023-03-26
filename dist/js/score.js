let number=document.querySelector('#number-value');
let btn=document.querySelector('#calc-btn');
let response=document.querySelector('#calc-btn');

// 判斷標準
const scoreTolevel=function(value){
    if(value>=90){
        return '甲';
    }
    if(value>=80){
        return '乙';
    }
    if(value>=70){
        return '丙';
    }
    if(value>=60){
        return '丁';
    }
    return '不及格';
}

// 根據判斷標準而更新畫面
const update=function(){
    let value= number.value;
    let level=scoreTolevel(value);

    response.querySelector('span').innerHTML=level;
    response.classList.add('active');

    number.value="";
    number.foucus();

    if(value<60){
        response.classList.add('fail');
    }else{
        response.classList.remove('fail');
        response.classList.add('active');
    }
}