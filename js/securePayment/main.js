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
/* ---------------------- chat ------------------------- */
/* ---------------------- menu ---------------------- */
let arbitrageFirst = document.querySelectorAll('.arbitrageFirst');
let quantityArbitrageOne = document.querySelector('.quantityArbitrageOne');
let arbitrage = document.querySelectorAll('.arbitrage');
let quantityArbitrageTwo = document.querySelector('.quantityArbitrageTwo');
let process = document.querySelectorAll('.process');
let quantityProcess = document.querySelector('.quantityProcess');
let ready = document.querySelectorAll('.ready');
let quantityReadyOne = document.querySelector('.quantityReadyOne');
let readyTwo = document.querySelectorAll('.readyTwo');
let quantityReadyTwo = document.querySelector('.quantityReadyTwo');
let cancelled = document.querySelectorAll('.cancelled');
let quantityCancelled = document.querySelector('.quantityCancelled');

const quantity = (kids, score) => {
    for (let i = 0; i < kids.length; i++) {
        go()
    }
    function go() {
        for (let i = 0; i < 1; i++) {
            score.innerHTML = kids.length;
        }
    }
}

quantity(arbitrage, quantityArbitrageTwo);
quantity(arbitrageFirst, quantityArbitrageOne);
quantity(process, quantityProcess);
quantity(ready, quantityReadyOne);
quantity(readyTwo, quantityReadyTwo);
quantity(cancelled, quantityCancelled);
    


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

    $('#menuBtn').click(function () {
        $('.sub_menu').slideToggle(300);
    });

    $('.process_home .tab').click(function () {
        $('.process_home .tab').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
    });

    $('.funds_home .tab').click(function () {
        $('.funds_home .tab').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
    });

    const toggler = (button, shown, hidden) => {
        $(button).click(() => {
            $(hidden).hide();
            $(shown).show();
        })
    }
    toggler($('.process_home .Arbitrage'), $('.process_home .arbitrageFirst'), $('.process_home .stroke'));
    toggler($('.funds_home .Arbitrage'), $('.funds_home .arbitrage'), $('.funds_home .stroke'));
    toggler($('.process_home .Ready'), $('.process_home .ready'), $('.process_home .stroke'));
    toggler($('.funds_home .Ready'), $('.funds_home .readyTwo'), $('.funds_home .stroke'));
    toggler($('.process_home .Process'), $('.process_home .process'), $('.process_home .stroke'));
    toggler($('.process_home .Cancelled'), $('.process_home .cancelled'), $('.process_home .stroke'));
    $('.all').click(function () {
        $('.stroke').show();
    });

    $('.ready .chatInfo').click(function () {
        $('.order').show();
        $('.description-status span').append('Завершенный');
        $('.tbody .ready .date').eq($(this).index()).clone().appendTo('.finance_stroke .finance_date');
        $('.tbody .ready .fa-check').eq($(this).index()).clone().appendTo('.finance_stroke .finance_status');
    });

    $('.cancelled .chatInfo').click(function () {
        $('.order').show();
        $('.description-status span').append('Отменен');
        $('.tbody .cancelled .date').eq($(this).index()).clone().appendTo('.finance_stroke .finance_date');
        $('.tbody .cancelled .fa-times').eq($(this).index()).clone().appendTo('.finance_stroke .finance_status');
    });

    $('.process .chatInfo').click(function () {
        $('.order').show();
        $('.description-status span').append('Выполняется');
        $('.tbody .process .date').eq($(this).index()).clone().appendTo('.finance_stroke .finance_date');
        $('.tbody .process .fa-wrench').eq($(this).index()).clone().appendTo('.finance_stroke .finance_status');
    });

    $('.arbitrageFirst .chatInfo').click(function () {
        $('.order').show();
        $('.description-status span').append('Арбитраж');
        $('.tbody .arbitrageFirst .date').eq($(this).index()).clone().appendTo('.finance_stroke .finance_date');
        $('.tbody .arbitrageFirst .fa-question').eq($(this).index()).clone().appendTo('.finance_stroke .finance_status');
    });

    $('.order .close').click(function () {
        $('.order').hide();
        $('.description-status span').empty();
        $('.finance_stroke .finance_date').empty();
        $('.finance_stroke .finance_status').empty();
        $('.finance_stroke .finance_status').empty();
    });

    $('.order-category a').click(function () {
        $('.order-category a').removeClass('category-active').eq($(this).index()).addClass('category-active');
        $('.order-description, .order-finance, .order-history').hide().eq($(this).index()).show();
    })

})

let delBtn = document.querySelectorAll('.deleteBtn');
let systemBlock = document.querySelectorAll('.my__cards');
let plus = document.querySelector('.plus');
let addBlock = document.querySelector('.addBlock');
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

/* =========================== переключатели ========================== */

const toggler = (target, showingTarget, hidingTargetOne, hidingTargetTwo) => {
    target.addEventListener('click', () => {
        showingTarget.style.display = 'block';
        hidingTargetTwo.style.display = 'none';
        hidingTargetOne.style.display = 'none';
    })
}

let activeToggles = document.querySelectorAll('.activeToggles');
let targetOne = document.querySelector('.process_home');
let targetTwo = document.querySelector('.paysys_home');
let targetThree = document.querySelector('.funds_home');

for(let i = 0;i < activeToggles.length; i++){
    activeToggles[i].addEventListener('click', () => {
        if(activeToggles[0].classList.contains('mainActive')){
            activeToggles[0].classList.remove('mainActive');
        }else if(activeToggles[1].classList.contains('mainActive')){            
            activeToggles[1].classList.remove('mainActive');
        }else{            
            activeToggles[2].classList.remove('mainActive');            
        }
        activeToggles[i].classList.add('mainActive');
    })    
}
toggler(activeToggles[0], targetOne, targetTwo, targetThree)
toggler(activeToggles[1], targetTwo, targetOne, targetThree)
toggler(activeToggles[2], targetThree, targetTwo, targetOne)