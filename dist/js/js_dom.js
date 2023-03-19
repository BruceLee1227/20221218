// console.log(123);
// DOM單選
let uid=document.querySelector('#uid');
console.log(uid);
let students=document.querySelector('.students');
console.log(students);
// DOM多選
console.log('...m_students...')
let m_students=document.querySelectorAll('.students');
m_students.forEach(s=>{
    console.log(s);
})
// Dom控制
console.log(uid.innerHTML);
uid.innerHTML="Hello Uid";

const login=function(){
    let acc=document.querySelector('#acc');
    let pwd=document.querySelector('#pwd');
    console.log(acc.value, pwd.value);
}

// CSS
uid.style.color="white";
uid.style.backgroundColor="red";
// 增加Class
uid.classList.add('add');
students.classList.add('add');
// 刪除Class
// uid.classList.remove('add');
// spilt 切割成陣列
// uid.classList.add('full-name');
// let className= uid.className;
// console.log(className);
// let classes=className.split('-');
// console.log(classes);
// 確認是否存在contains
let exists=uid.classList.contains('add');
console.log(exists);