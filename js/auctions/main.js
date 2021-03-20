// ------------------  chat  ---------------
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


let stroke = document.querySelectorAll('.text .stroke');
let quantityServices = document.querySelector('.quantityServices');


for (let i = 0; i < stroke.length; i++) {
    addServices();
}

function addServices() {
    for (let i = 0; i < 1; i++) {
        quantityServices.innerHTML = stroke.length;
    }
}

/* ---------------------- services and auction with jquery ------------------------- */
$(function () {

    let menu_list = document.querySelectorAll('.menu_list');
    let quit = document.querySelector('.quitBlock');
    let avatar = document.querySelector('.avatar');
    let main = document.querySelector('main');
    let delBtn = document.querySelectorAll('.bannerDelete');
    let activesStroke = document.querySelectorAll('.actives .stroke');
    let adEdit = document.querySelectorAll('.adEdit');
    let bannerEditWrapper = document.querySelector('.bannerEditWrapper');
    let actives = document.querySelector('.actives');
    let applications = document.querySelector('.applications');
    let addAuction = document.querySelector('.addAuction');
    let addAuctionWrapper = document.querySelector('.addAuctionWrapper');
    let canceladdAuctionBtn = document.querySelector('.canceladdAuctionBtn');
    let addedAuctionForMain = document.querySelector('.addedAuctionForMain');
    let addedAuctionForAp = document.querySelector('.addedAuctionForAp');
    let select = document.querySelector('.addAuctionBlock select');
    let addAuctionBtn = document.querySelector('.addAuctionBtn');
    let stopAuctionMain = document.querySelectorAll('.stopAuctionMain')
    let stopAuctionAp = document.querySelectorAll('.stopAuctionAp')


    const toggler = (target, openTarget, closeTarget) => {
        $(target).click(() => {
            $(openTarget).show()
            $(closeTarget).hide()
        })
    }
    const hider = (hideDot, hideTarget) => $(hideDot).click(() => $(hideTarget).hide())
    const shower = (showDot, showTarget) => $(showDot).click(() => $(showTarget).show())

    hider($('.bannerInfoBack'), $('.bannerInfoWrapper'))
    hider($('.buttons .cancel'), $('.bannerEditWrapper'))
    shower($('.bannerInfo'), $('.bannerInfoWrapper'))
    shower($('.addBanner'), $('.bannerEditWrapper'))
    shower($('.bannerEdit'), $('.bannerEditWrapper'))
    
    toggler($('.Services'), $('.actionBar, .table'), $('.auctionBlock, .bannerBlock'));
    toggler($('.Auction'), $('.auctionBlock'), $('.actionBar, .table, .bannerBlock'));
    toggler($('.Banners'), $('.bannerBlock'), $('.actionBar, .table, .auctionBlock'));
    toggler($('.mainTab'), $('.mainPage'), $('.allPerformers'));
    toggler($('.performerTab'), $('.allPerformers'), $('.mainPage'));
    toggler($('.activeTab'), $('.actives'), $('.applications'));
    toggler($('.applicationTab'), $('.applications'), $('.actives'));
    toggler($('.mainPage .editDateAuctionBtn'), $('.mainPage .activeAuctionMain .editDateAuctionBlock'), $('.mainPage .activeAuctionMain strong'));
    toggler($('.mainPage .doneDateAuctionBtn, .mainPage .closeDateAuctionBtn'), $('.mainPage .activeAuctionMain strong'), $('.mainPage .activeAuctionMain .editDateAuctionBlock'));
    toggler($('.allPerformers .editDateAuctionBtn'), $('.allPerformers .activeAuctionAp .editDateAuctionBlock'), $('.allPerformers .activeAuctionAp strong'));
    toggler($('.allPerformers .doneDateAuctionBtn, .allPerformers .closeDateAuctionBtn'), $('.allPerformers .activeAuctionAp strong'), $('.allPerformers .activeAuctionAp .editDateAuctionBlock'));


    for (let i = 0; i < menu_list.length; i++) {
        menu_list[i].addEventListener('click', function (e) {
            let submenu = menu_list[i].parentElement.children[1];
            let arrow = menu_list[i].children[0];
            $(submenu).slideToggle(300);
            $(arrow).eq($(this).index()).toggleClass('upactive');
        })
    }
    avatar.addEventListener('click', () => {
        quit.style.display = 'block';
        if (quit.style.right == '69px') {
            $(quit).animate({ right: "7px" }, 500);
        }

        else {
            $(quit).animate({ right: "69px" }, 500);
        }
    })

    main.addEventListener('click', () => {
        $(quit).animate({ right: "7px" }, 500);
    });

    $('.tab').click(function () {
        $('.tab').removeClass('tab-active').eq($(this).index()).addClass('tab-active');
    });

    $('.miniTab').click(function (e) {
        e.preventDefault();
        $('.miniTab').removeClass('mini-active').eq($(this).index()).addClass('mini-active');
    });

    $('.bannerTab').click(function (e) {
        e.preventDefault();
        $('.bannerTab').removeClass('banner-active').eq($(this).index()).addClass('banner-active');
    });


    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener('click', function () {
            if (confirm('Вы действительно хотите удалить этот баннер?')) {
                activesStroke[i].style.display = 'none';
            }
        })
    };

    $('input[type="file"]').change(function () {
        var value = $("input[type='file']").val();
        $('.js-value').text(value);
    });

    for (let i = 0; i < adEdit.length; i++) {
        adEdit[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (confirm('Одобрять?')) {
                applications.style.display = 'none';
                actives.style.display = 'block';
                bannerEditWrapper.style.display = 'block';
                $('.activeTab').addClass('banner-active');
                $('.applicationTab').removeClass('banner-active');
            }
        })
    }

    addAuction.addEventListener('click', function () {
        addAuctionWrapper.style.display = 'flex';
    });
    canceladdAuctionBtn.addEventListener('click', function () {
        addAuctionWrapper.style.display = 'none';
    });

    for (let i = 0; i < stopAuctionMain.length; i++) {
        $('.stopAuctionMain').click(function (e) {
            e.preventDefault();
            if (confirm('Остановить аукцион?')) {
                $('.addedAuctionForMain')[i + 1].remove();
            }
        })
    }
    for (let i = 0; i < stopAuctionAp.length; i++) {
        $('.stopAuctionAp').click(function (e) {
            e.preventDefault();
            if (confirm('Остановить аукцион?')) {
                $('.addedAuctionForAp')[i + 1].remove();
            }
        })
    }

    addAuctionBtn.addEventListener('click', function () {
        if (select.value == 1) {
            addedAuctionForMain.style.cssText = 'display:flex !important; width: 820px;';
            addAuctionWrapper.style.display = 'none';
            $(addedAuctionForMain).clone(true).appendTo('.mainPage');
            addedAuctionForMain.style.cssText = 'display:none !important;';
        } else if (select.value == 2) {
            addedAuctionForAp.style.cssText = 'display:flex !important; width: 820px;';
            addAuctionWrapper.style.display = 'none';
            $(addedAuctionForAp).clone(true, true).appendTo('.allPerformers');
            addedAuctionForAp.style.cssText = 'display:none !important;';
        };
    });
})

/* ---------------------- /services and auction ------------------------- */
