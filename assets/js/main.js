'use stricr';

let div = document.body.firstElementChild;
console.log(div);

let ul = document.querySelector('ul');
console.log(ul);

let li = ul.lastElementChild;
console.log(li);

let lis = document.querySelectorAll('li');
for(let i = 0; i<lis.length; i++) {
    lis[i].className = 'list-item'
}

let a = +prompt('Введите цифру');
for(let i = 0; i<a; i++){
    const i = document.createElement('p');
    i.innerHTML = 'aaa';
    ul.before(i);
}

let newForm = document.createElement('form');
newForm.style.display = 'flex';
newForm.style.flexDirection = 'column';
newForm.style.gap = '10px';
ul.after(newForm);
let nameInput = document.createElement('input');
newForm.prepend(nameInput);
let emailInput = document.createElement('input');
newForm.prepend(emailInput);
let newBtn = document.createElement('button');
newBtn.innerHTML = 'Отправить';
newForm.append(newBtn);
