let delBtn = document.querySelectorAll('.deleteBtn');
let systemBlock = document.querySelectorAll('.my__cards');
let plus = document.querySelector('.plus');
let addBlock = document.querySelector('.addBlock');
let addBtn = document.querySelector('.addBtn');
let cancelBtn = document.querySelector('.cancelBtn');


for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener('click', function () {
        if (confirm('Вы действительно хотите удалить эту систему?')) {
            systemBlock[i].style.display = 'none';
        }
    })
}

plus.addEventListener('click', function(){
    addBlock.style.display = 'block';
})

cancelBtn.addEventListener('click', function(){
    addBlock.style.display = 'none';
})






/* ---------------------- security payment ------------------------- */
