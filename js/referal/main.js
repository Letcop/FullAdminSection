
let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.menu');


showChat.addEventListener('click', () => {
    chatText.style.visibility = 'hidden'
});

let click;
chat.addEventListener('click', () => {
    if (click == 0) {
        chatText.style.visibility = 'hidden'
        return click = 1;
    } else {
        chatText.style.visibility = 'visible'
        return click = 0;
    }
});


$(function () {

    let menu_list = document.querySelectorAll('.menu_list');
    for (let i = 0; i < menu_list.length; i++) {
        menu_list[i].addEventListener('click', function (e) {
            let submenu = menu_list[i].parentElement.children[1];
            let arrow = menu_list[i].children[0];
            $(submenu).slideToggle(300);
            $(arrow).eq($(this).index()).toggleClass('upactive');
        })
    }
    let quit = document.querySelector('.quitBlock');
    let avatar = document.querySelector('.avatar');

    avatar.addEventListener('click', () => {
        quit.style.display = 'block';
        if (quit.style.right == '69px') {
            $(quit).animate({ right: "7px" }, 500);
        } else {
            $(quit).animate({ right: "69px" }, 500);
        }
    })
    showChat.addEventListener('click', () => {
        $(quit).animate({ right: "7px" }, 500);
    });

})









let btn = document.querySelectorAll('.btn-click');
let windows = document.querySelector('.windows');
let windowBtn = document.querySelector('.window_btn');
let x = document.querySelector('.img');
let btn2 =document.querySelector('.winbtn2');
let window2 = document.querySelector('.window2');



for(let i=0; i<btn.length; i++){
     btn[i].addEventListener('click', function(){
     windows.style.display = 'block';
     
        
     
    //  else if(windows.style.display = 'none'){
    //  
    //  }
})
}




windowBtn.addEventListener('click', function(){
    windows.style.display='none';
    window2.style.display= 'block';

})

x.addEventListener('click', function(){
    windows.style.display = 'none';
    window2.style.display = 'none'

})
btn2.addEventListener('click', function(){
    windows.style.display = 'none';
    window2.style.display = 'none'
})
