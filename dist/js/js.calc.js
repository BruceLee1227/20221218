let doms={};

for(let i=0; i < 10; i++){
    doms[`n${i}`] = document.querySelector(`#num-${i}`);
    // console.log(`dom${i}`);
}
doms.n8.addEventListener('click',()=>{
    console.log("n8 is clicked");
})
console.log("n8 is blind");

let account= document.querySelector("#account");

const print=()=>{
    console.log("value is change")
}
// change
account.addEventListener('change',print);
// blur
account.addEventListener('blur', () => {
    console.log('Input Is Blur.');
});
// keypress
account.addEventListener('keypress', () => {
    // console.log('Input Is Keypress.');
    // console.log(account.value);
})
// keyup
account.addEventListener('keyup', (e) => {
    console.log('Input Is Keyup.');
    let key = e.key;
    if (key == 'a' || key == 'A') {
        console.log('aaa');
    }
})