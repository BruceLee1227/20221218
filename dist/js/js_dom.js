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