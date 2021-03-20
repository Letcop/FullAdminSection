
let lire = document.querySelectorAll('.lire');
let led = document.querySelectorAll('.led');
let clas = document.querySelectorAll('.clas');
let remove = document.querySelectorAll('.remove');
let liry = document.querySelectorAll('.liry');
let modebtn = document.querySelectorAll('.modebtn');
let checkk = document.querySelectorAll('.checkk');
let moderation = document.querySelectorAll('.moderation');
// for (let i = 0; i < moderation.length; i++) {
//     moderation[i].addEventListener('click', function () {


//         moderation[i].style.display = 'none';
//         checkk[i].style.display = 'block';



//     })
// }

let unlock = document.querySelectorAll('.unlock');
let modedel = document.querySelectorAll('.modedel');
let unled = document.querySelectorAll('.unled');

for (let i = 0; i < unled.length; i++) {
    unlock[i].addEventListener('click', function () {
        if (confirm('Разблокировать?')) {
            // remove[i].style.display = 'none';
            unled[i].remove();

        }


    })
}

for (let i = 0; i < liry.length; i++) {
    liry[i].addEventListener('click', function () {
        if (confirm('Удалить?')) {
            // remove[i].style.display = 'none';
            remove[i].remove();

        }


    })
}

for (let i = 0; i < led.length; i++) {
    lire[i].addEventListener('click', function () {
        if (confirm('Удалить?')) {
            led[i].style.display = 'none';
        }


    })
}





$(function () {

    $('.bar').click(function (e) {
        $('.bar').removeClass('active').eq($(this).index()).addClass('active');
        $('.text').removeClass('active').eq($(this).index()).addClass('active');
    })

    $('.but').click(function (e) {
        $('.but').removeClass('active').eq($(this).index()).addClass('active');
        $('.part').removeClass('active').eq($(this).index()).addClass('active');

    })


    $('.but2').click(function (e) {
        $('.but2').removeClass('active').eq($(this).index()).addClass('active');
        $('.part2').removeClass('active').eq($(this).index()).addClass('active');

    })





    $('.create').click(function () {
        $('.openw1').toggleClass('active');
    })

    $('.save-btn').click(function () {
        $('.openw1').removeClass('active');
    })



    $('.close_icon').click(function () {
        $('.openw1').removeClass('active');
    })


    $('.close_icon2').click(function () {
        $('.openwindow2, .op3, .openwindow4').removeClass('active');
    })



    $('.edit').click(function () {
        $('.openwindow2').toggleClass('active');
    })
    $('.spam').click(function () {
        $('.op3').toggleClass('active');
        
    })

    
    $('.modeedit').click(function () {
        $('.openwindow4').toggleClass('active');
    })






    $('.save-btn').click(function () {
        $('.openwindow2, .op3, .openwindow4').removeClass('active');
    })
    $('.otmen').click(function () {
        $('.openwindow2, .op3, .openwindow4').removeClass('active');
    })
    $('.udalit').click(function () {
        $('.openwindow2, .op3, .openwindow4').removeClass('active');
    })

    $('.moderation').click(function () {
        $('.moderation').css(
            'display', 'none;!important'
        );
        $('.checkk').css(
            'display', 'block;!important'
        );

    })



    let remove = document.querySelectorAll('.remove');
    let liry = document.querySelectorAll('.liry');
  


    function addactive() {
        for (let i = 0; i < modedel.length; i++) {
            modebtn[i].addEventListener('click', function () {
                if (confirm('Добавить в активные?')) {
                    modedel[i].style.display = 'none';
                    
        
                // led[i].remove;   
                }           
                    //  led[i].remove();

            })
        }
    }
    addactive();
 
//  $('.text--input') = texta;
//  $('.delete-btn') = delbtn;

//     if(texta.focus){
//         delbtn.style.opacity = '1';
//     }

})











////////////////////////////////////////////////

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
