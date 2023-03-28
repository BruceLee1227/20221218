 // console.log(153);

const calc = function (n1, n2) {
    let tbody = document.querySelector('#display-table tbody');
    let content = '';
    // for (let i = 1; i <= n1; i++) {
    //     // console.log(`i is ${i}`);
    //     content += '<tr>';

    //     for (let j = 1; j <= n2; j++) {

    //         content += `<td>${j}</td>`;


    //         // console.log(`j is ${j}`);
    //         console.log(`${i} x ${j} = ${i * j}`);
    //     }

    //     content += '</tr>';
    // }

    // 內外圈反轉，配合 UI 呈現
    for (let x = 1; x <= n2; x++) {
        content += `<tr><td>${x}</td>`;

        for (let y = 1; y <= n1; y++) {
            content += `<td>${x * y}</td>`;
        }

        content += '</tr>';
    }

    tbody.innerHTML = content;
}

// nm(10,10);
// 動態產生thead
const makeThead = function (n1) {
    let thead = document.querySelector('#display-table thead');
    let content = '<tr><th></th>';

    for (let x = 1; x <= n1; x++) {
        content += `<th>${x}</th>`;
    }

    content += '</tr>';

    thead.innerHTML = content;
}

let makeBtn = document.querySelector('#make-btn');

makeBtn.addEventListener('click', () => {
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');

    if (!num1.value) {
        alert('數字1 未填寫');
        num1.focus();
        return;
    }

    if (!num2.value) {
        alert('數字2 未填寫');
        num2.focus();
        return;
    }

    let n1 = +num1.value;
    let n2 = +num2.value;

    makeThead(n1);

    calc(n1, n2);
});