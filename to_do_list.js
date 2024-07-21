let input=document.getElementById('input-box');
let container=document.getElementById('container');
function add() {
    input.value=input.value.trim();
    if (input.value=='') {
        window.alert("you must write something");
    } else {
        let li=document.createElement('li');
        li.innerHTML=input.value+'<span><img src="close.png" alt=""></span>';
        container.appendChild(li);
    }
    input.value='';
    saveData();
}
container.addEventListener('click',function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName=='UL') {
        
    }
    else if (e.target.tagName=='LI') {
        e.target.classList.toggle("checked")
    } else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
    }
    else{
        e.target.parentElement.parentElement.remove();
    }
    saveData();
})
function saveData() {
    localStorage.setItem("data1",container.innerHTML);
}
function showlist() {
    container.innerHTML=localStorage.getItem("data1");
}
function clearList() {
    container.innerHTML='';
    saveData();
}

function checkAll() {
    let items=container.querySelectorAll('li');
    items.forEach(item => item.classList.add('checked'));
    saveData();
}
function undo() {
    let items=container.querySelectorAll('li');
    items.forEach(item => item.removeAttribute('class'));
    saveData();
}
showlist();