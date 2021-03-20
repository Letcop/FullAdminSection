
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


let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.block');


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


//Change section
// let open_section = document.querySelectorAll('.open_section');
// let sections = document.querySelectorAll('section[data-open]');
// open_section.forEach(element => element.onclick = () => {
//     open_section.forEach(element => element.classList.remove('active_open_section'));
//     element.classList.add('active_open_section');
//     cancelSendNewMessage(false);
//     changeNavbarTabMenu();
//     cancelMessagesUser();
//     document.querySelector('#select_list_messages_select_profile_type').value = 'all';
//     drawListMessages();
//     cancelListMessages();
//     chatText.classList.toggle('display-none');
//     let elementClick = element;
//     sections.forEach(element => {
//         if (element.getAttribute('data-open') == elementClick.getAttribute('data-open')) {
//             element.classList.remove('display-none');
//         } else {
//             element.classList.add('display-none');
//         }
//     });
// });


let arrProfiles = [{
        type: 'worker',
        id: '0000000001',
        name: 'Жавохир',
        surname: 'Нуфтиллаев',
        login: 'javokhir',
        mail: 'nj.sagittarius@mail.ru',
        birthYear: '2000',
        city: 'Tashkent',
        phone: '+998990004740',
        regDate: '30.11.2011'
    },
    {
        type: 'worker',
        id: '0000000002',
        name: 'Жахонгир',
        surname: 'Абдуллаев',
        login: 'jahongirAbdullayev_7',
        mail: 'Abdullayev_7@mail.ru',
        birthYear: '2000',
        city: 'Tashkent',
        phone: '+9989999878787',
        regDate: '24.06.2008'
    },
    {
        type: 'worker',
        id: '0000000003',
        name: 'Фуркат',
        surname: 'Ниязов',
        login: 'furqat99',
        mail: 'niyazovfurqat99@mail.ru',
        birthYear: '1999',
        city: 'Tashkent',
        phone: '+998935554433',
        regDate: '13.05.2016'
    },
    {
        type: 'client',
        id: '0000000004',
        name: 'Jony',
        surname: 'Jacob',
        login: 'JJ77',
        mail: 'jonyjacob77@mail.ru',
        birthYear: '1996',
        city: 'USA',
        phone: '+778484506',
        regDate: '11.11.2009'
    },
    {
        type: 'client',
        id: '0000000005',
        name: 'Charlie',
        surname: 'Thomas',
        login: 'shelbii01',
        mail: 'thomasshelbii@mail.ru',
        birthYear: '1971',
        city: 'Fransiya',
        phone: '+8455321447',
        regDate: '03.01.1996'
    },
    {
        type: 'client',
        id: '0000000006',
        name: 'Тимур',
        surname: 'Тимурович',
        login: 'investonse',
        mail: 'millioner@mail.ru',
        birthYear: '1997',
        city: 'Tashkent',
        phone: '+998998887766',
        regDate: '30.11.2011'
    },
    {
        type: 'worker',
        id: '0000000007',
        name: 'Valiaxmad',
        surname: 'Axmadov',
        login: '_introvert',
        mail: 'rinatovich@mail.ru',
        birthYear: '2000',
        city: 'Tashkent',
        phone: '+998909039325',
        regDate: '24.04.2017'
    },
    {
        type: 'client',
        id: '0000000008',
        name: 'Георгий ',
        surname: 'Петров',
        login: 'masterPetrov',
        mail: 'masteryoda128@mail.ru',
        birthYear: '1990',
        city: 'Russia',
        phone: '+7789664412',
        regDate: '15.04.2020'
    },
    {
        type: 'client',
        id: '0000000009',
        name: 'Asal',
        surname: 'Nematov',
        login: 'milawka',
        mail: 'asalmilawka@mail.ru',
        birthYear: '2002',
        city: 'Tashkent',
        phone: '+998990004740',
        regDate: '03.03.2015'
    },
    {
        type: 'worker',
        id: '0000000010',
        name: 'Абдужаббор',
        surname: 'Муродов',
        login: 'sheikh',
        mail: 'абдумурод01@mail.ru',
        birthYear: '1985',
        city: 'Tashkent',
        phone: '+998990004740',
        regDate: '26.05.2000'
    },
];

let arrFavoriteProfiles = [
    '0000000001',
    '0000000002',
    '0000000003',
    '0000000006'
];

let arrIgnoreProfiles = [
    '0000000004',
    '0000000005',
    '0000000010'
];

arrMessages = [{
        from: '0000000001',
        to: '0000000002',
        date: '11.08.2011',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Привет, Влад! Могу ли я задать тебе несколько вопросов?'
    },
    {
        from: '0000000007',
        to: '0000000003',
        date: '04.05.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Конечно, Лена.'
    },
    {
        from: '0000000005',
        to: '0000000004',
        date: '19.06.1999',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Как ты думаешь, какие профессии популярны среди молодежи?'
    },
    {
        from: '0000000003',
        to: '0000000005',
        date: '17.01.2021',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Думаю, профессии журналиста или экономиста, потому что они считаются престижными и довольно высоко оплачиваемы.'
    },
    {
        from: '0000000008',
        to: '0000000006',
        date: '29.05.2015',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Так, а что насчет тебя? Какие профессии тебя привлекают?'
    },
    {
        from: '0000000009',
        to: '0000000007',
        date: '11.11.2011',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Я бы хотел быть учёным.'
    },
    {
        from: '0000000003',
        to: '0000000008',
        date: '30.11.2000',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Добрый день, вы позвонили в консульство Аргентинской'
    },
    {
        from: '0000000001',
        to: '0000000009',
        date: '03.01.1996',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Чем могу вам помочь?'
    },
    {
        from: '0000000002',
        to: '0000000010',
        date: '01.08.1971',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Здравствуйте, мне нужно поговорить с консулом.'
    },
    {
        from: '0000000002',
        to: '0000000001',
        date: '26.08.1971',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'По какому вопросу?'
    },
    {
        from: '0000000001',
        to: '0000000003',
        date: '18.11.2019',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Мне необходимо обсудить продление рабочей визы.'
    },
    {
        from: '0000000003',
        to: '0000000004',
        date: '02.02.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Хорошо. Вам необходимо записаться на прием. Завтра в 13.15 вас устроит?'
    },
    {
        from: '0000000006',
        to: '0000000005',
        date: '20.02.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Да, это замечательно.'
    },
    {
        from: '0000000008',
        to: '0000000006',
        date: '03.01.2021',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Здравствуйте!'
    },
    {
        from: '0000000010',
        to: '0000000007',
        date: '21.02.2021',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Добрый день.'
    },
    {
        from: '0000000009',
        to: '0000000008',
        date: '14.01.2021',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Я бы хотел с вами познакомиться'
    },
    {
        from: '0000000007',
        to: '0000000009',
        date: '08.03.2019',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Конечно, давайте познакомимся!'
    },
    {
        from: '0000000002',
        to: '0000000010',
        date: '11.02.2016',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Как вас зовут?'
    },
    {
        from: '0000000003',
        to: '0000000001',
        date: '11.09.2013',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Меня зовут Семён, очень приятно. А вас?'
    },
    {
        from: '0000000007',
        to: '0000000002',
        date: '19.01.2011',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'А меня Сергей, очень приятно!'
    },
    {
        from: '0000000001',
        to: '0000000004',
        date: '12.12.2012',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Привет!'
    },
    {
        from: '0000000006',
        to: '0000000005',
        date: '17.05.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Добрый день! '
    },
    {
        from: '0000000008',
        to: '0000000006',
        date: '07.07.2017',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Как твои дела?'
    },
    {
        from: '0000000010',
        to: '0000000007',
        date: '25.03.2015',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'У меня все хорошо, читаю книгу.'
    },
    {
        from: '0000000005',
        to: '0000000008',
        date: '24.06.2007',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Какие у тебя планы на вечер?'
    },
    {
        from: '0000000004',
        to: '0000000009',
        date: '27.06.2009',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Я свободна.'
    },
    {
        from: '0000000003',
        to: '0000000010',
        date: '11.02.2016',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Привет, Джон. Как дела?'
    },
    {
        from: '0000000001',
        to: '0000000001',
        date: '24.12.2001',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Нормально. А у тебя?'
    },
    {
        from: '0000000007',
        to: '0000000002',
        date: '05.05.2014',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Все отлично. Что ты хотел?'
    },
    {
        from: '0000000002',
        to: '0000000003',
        date: '27.05.2018',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Максим, я уезжаю домой на время. Может, ты проводишь меня на поезд?'
    },
    {
        from: '0000000006',
        to: '0000000005',
        date: '13.11.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Конечно, провожу! А когда отправление поезда?'
    },
    {
        from: '0000000010',
        to: '0000000006',
        date: '04.05.2020',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Послезавтра в 21.40. Поезд Минск – Варшава.'
    },
    {
        from: '0000000004',
        to: '0000000007',
        date: '06.01.2021',
        time: '12:45',
        id: '0000000001t0000000002d11.02.2016t12:45',
        value: 'Хорошо, я буду. Значит, встретимся около главного входа железнодорожного вокзала в 21.30.'
    }
];

//changeNavbarTabMenu
let navbar_tab_button = document.querySelectorAll('.private_messages .navbar_tab_button');

function changeNavbarTabMenu(element = document.querySelector('.private_messages .navbar_tab_button[data-value="profile"]')) {
    navbar_tab_button.forEach(element => element.classList.remove('active'));
    element.classList.add('active');
    document.querySelector('#select_private_messages_select_profile_type').value = 'all';
    drawListPrivateMessages(element.getAttribute('data-value'), undefined);
}

navbar_tab_button.forEach(element => {
    element.onclick = () => changeNavbarTabMenu(element);
});


//sendNewMessage
let navbar_button_new_message = document.querySelector('.private_messages .navbar_button_new_message');

function sendNewMessage(doing = true) {
    let block_new_private_messages = document.querySelector('.private_messages .block_new_private_messages');
    if (doing == true) block_new_private_messages.classList.toggle('display-none');
    else if (!block_new_private_messages.classList.contains('display-none')) block_new_private_messages.classList.toggle('display-none');
}

navbar_button_new_message.onclick = () => sendNewMessage();

//cancelSendNewMessage 
let btn_cancel_new_private_messages = document.querySelector('.private_messages .btn_cancel_new_private_messages');

function cancelSendNewMessage(doing) {
    let input_new_private_messages_search_profile = document.querySelector('#input_new_private_messages_search_profile');
    let textarea_new_private_messages_text_messages = document.querySelector('#textarea_new_private_messages_text_messages');
    input_new_private_messages_search_profile.value = '';
    textarea_new_private_messages_text_messages.innerText = '';
    sendNewMessage(doing);
}

btn_cancel_new_private_messages.onclick = () => cancelSendNewMessage();


//drawListPrivateMessages
function drawListPrivateMessages(button = document.querySelector('.private_messages .navbar_tab_button.active').getAttribute('data-value'), select = document.querySelector('#select_private_messages_select_profile_type').value) {
    let variable_content_private_messages = document.querySelector('.private_messages .variable_content_private_messages');
    variable_content_private_messages.innerHTML = '';

    function draw(element, type = 'profile') {
        variable_content_private_messages.innerHTML +=
            `<div class="private_messages_profile_block" id=${element.id}>
            <div class="image_profile"><img src="img/${element.id}.jpg"></div>
            <div class="info_message_profile">
                <div class="name_profile" onclick="openInfoUser(this)">${element.login}</div>
                <div class="count_message" onclick="openMessagesUser(this)"><span>2</span> messages</div>
                <div class="info_message">Ваше сообщение прочитано 20 мая 2020</div>
            </div>
            <div class="action_profile">
                <div class="date_message">20 мая 2020</div>
                <div class="buttons_action">
                    <div class="button_choosen ${type == 'profile' ? (arrFavoriteProfiles.indexOf(element.id) != -1 ? 'active' : '') : (type == 'favorites' ? 'active' : '')}" onclick = "actionProfile(this, 'undefined')"><img src="icons/favourites.svg"></div>
                    <div class="button_ignore ${type == 'profile' ? (arrIgnoreProfiles.indexOf(element.id) != -1 ? 'active' : '') : (type == 'ignore' ? 'active' : '')}" onclick = "actionProfile('undefined', this)"><img src="icons/disabled.svg"></div>
                </div>
            </div>
        </div>`;
    }
    if (button === 'profile') {
        if (select === 'all') {
            arrProfiles.forEach(element => draw(element));
        } else if (select === 'performers') {
            arrProfiles.forEach(element => {
                if (element.type == 'worker') draw(element);
            });
        } else if (select === 'customers') {
            arrProfiles.forEach(element => {
                if (element.type == 'client') draw(element);
            });
        }
    } else if (button === 'favorites') {
        let type = 'favorites';
        if (select === 'all') {
            arrFavoriteProfiles.forEach(element => {
                let elementFavoriteProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementFavoriteProfiles) draw(element, type);
                });
            });
        } else if (select === 'performers') {
            arrFavoriteProfiles.forEach(element => {
                let elementFavoriteProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementFavoriteProfiles && element.type == 'worker') draw(element, type);
                });
            });
        } else if (select === 'customers') {
            arrFavoriteProfiles.forEach(element => {
                let elementFavoriteProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementFavoriteProfiles && element.type == 'client') draw(element, type);
                });
            });
        }
    } else if (button === 'ignore') {
        let type = 'ignore';
        if (select === 'all') {
            arrIgnoreProfiles.forEach(element => {
                let elementIgnoreProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementIgnoreProfiles) draw(element, type);
                });
            });
        } else if (select === 'performers') {
            arrIgnoreProfiles.forEach(element => {
                let elementIgnoreProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementIgnoreProfiles && element.type == 'worker') draw(element, type);
                });
            });
        } else if (select === 'customers') {
            arrIgnoreProfiles.forEach(element => {
                let elementIgnoreProfiles = element;
                arrProfiles.forEach((element) => {
                    if (element.id == elementIgnoreProfiles && element.type == 'client') draw(element, type);
                });
            });
        }
    }
}

drawListPrivateMessages();


//actionProfile
function actionProfile(choosen, ignore) {
    if (choosen && ignore == 'undefined') {
        choosen = choosen == 'undefined' ? ignore.previousElementSibling : choosen, ignore = ignore == 'undefined' ? choosen.nextElementSibling : ignore;
        let elementID = choosen.closest('.private_messages_profile_block').getAttribute('id');
        if (arrFavoriteProfiles.indexOf(elementID) == -1) {
            arrFavoriteProfiles.push(elementID);
            if (arrIgnoreProfiles.indexOf(elementID) != -1) arrIgnoreProfiles.splice(arrIgnoreProfiles.indexOf(elementID), 1);
            choosen.classList.add('active');
            ignore.classList.remove('active');
            drawListPrivateMessages();
        } else if (arrFavoriteProfiles.indexOf(elementID) != -1) {
            arrFavoriteProfiles.splice(arrFavoriteProfiles.indexOf(elementID), 1);
            choosen.classList.remove('active');
            drawListPrivateMessages();
        }
    } else if (choosen == 'undefined' && ignore) {
        choosen = choosen == 'undefined' ? ignore.previousElementSibling : choosen, ignore = ignore == 'undefined' ? choosen.nextElementSibling : ignore;
        let elementID = choosen.closest('.private_messages_profile_block').getAttribute('id');
        if (arrIgnoreProfiles.indexOf(elementID) == -1) {
            arrIgnoreProfiles.push(elementID);
            if (arrFavoriteProfiles.indexOf(elementID) != -1) arrFavoriteProfiles.splice(arrFavoriteProfiles.indexOf(elementID), 1);
            ignore.classList.add('active');
            choosen.classList.remove('active');
            drawListPrivateMessages();
        } else if (arrIgnoreProfiles.indexOf(elementID) != -1) {
            arrIgnoreProfiles.splice(arrIgnoreProfiles.indexOf(elementID), 1);
            ignore.classList.remove('active');
            drawListPrivateMessages();
        }
    }
}


//openInfoUser
function openInfoUser(element, which = 'private') {
    let userEditWrapper = document.querySelector('.userEditWrapper');
    userEditWrapper.style.display = 'flex';
    let elementID;
    if (which == 'private') {
        elementID = element.closest('.private_messages_profile_block').getAttribute('id');
    } else if (which == 'list') {
        elementID = element.closest('.user').getAttribute('id');
    } else if (which == 'between') {
        elementID = element.closest('.profile').getAttribute('id');
    }
    let objUser;
    arrProfiles.forEach((element, index) => {
        if (element.id == elementID) objUser = element;
    });
    // Have info user in objUser
    //console.log(objUser);
}

//openMesssagesUser
function openMessagesUser(element) {
    let elementID = element.closest('.private_messages_profile_block').getAttribute('id');
    let objUser;
    arrProfiles.forEach((element, index) => {
        if (element.id == elementID) objUser = element;
    });
    let user_private_messages_body_header = document.querySelector('.block_user_private_messages .user_private_messages_body_header');
    user_private_messages_body_header.innerHTML =
        `<div class="private_messages_profile_block" id=${objUser.id}>
        <div class="image_profile"><img src="img/${objUser.id}.jpg"></div>
        <div class="info_message_profile">
            <div class="name_profile" onclick="openInfoUser(this)">${objUser.login}</div>
            <div class="count_message" onclick="openMessagesUser(this)"><span>2</span> messages</div>
        </div>
        <div class="action_profile">
            <div class="buttons_action">
                <div class="button_choosen ${arrFavoriteProfiles.indexOf(objUser.id) != -1 ? 'active' : ''}" onclick = "actionProfile(this, 'undefined')"><img src="icons/favourites.svg"></div>
                <div class="button_ignore ${arrIgnoreProfiles.indexOf(objUser.id) != -1 ? 'active' : ''}" onclick = "actionProfile('undefined', this)"><img src="icons/disabled.svg"></div>
            </div>
        </div>
    </div>`;

    let block_user_private_messages = document.querySelector('.private_messages .block_user_private_messages');
    let block_private_messages = document.querySelector('.private_messages .block_private_messages');
    block_user_private_messages.classList.remove('display-none');
    block_private_messages.classList.add('display-none');
    cancelSendNewMessage(false);

}

//cancelMessagesUser
let btn_cancel_user_private_messages = document.querySelector('.block_user_private_messages .btn_cancel_user_private_messages');

function cancelMessagesUser() {
    let block_user_private_messages = document.querySelector('.private_messages .block_user_private_messages');
    let block_private_messages = document.querySelector('.private_messages .block_private_messages');
    block_user_private_messages.classList.add('display-none');
    block_private_messages.classList.remove('display-none');
}

btn_cancel_user_private_messages.onclick = () => cancelMessagesUser();

