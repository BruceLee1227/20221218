// console.log(123);

let say=document.querySelector('#say');
// console.log(say);

say.addEventListener('click',()=>{
    let DN=document.querySelector('#displayName');
    let name=DN.value;
    let response=document.querySelector('#response');

    if(!name){
        response.classList.remove('active');
    }else{
        response.classList.add('ative');
        response.innerHTML=`Hi,${name} 你好`;
    }
})