let input = document.getElementById("ispolniteli");
let radio = document.getElementById("radio1");
let block_rassilok = document.getElementById("block_rassilok");
let block1_rassilok = document.getElementById("block1_rassilok");
let block_sh = document.getElementById("block_shablon");
let block1_sh = document.getElementById("block1_shablon");


function push(){
    radio.classList.add("add");
}

function remove(){
    radio.classList.remove("add");
}


// Show block1
function show(){
    block1_rassilok.classList.add("show");
    block_rassilok.classList.add("hide");
}


//hide block1  and show block
function cancel(){
    block1_rassilok.classList.remove("show");
    block_rassilok.classList.remove("hide");
    document.querySelector(".input_text").value = '';
    document.querySelector(".input_text1").value = '';
    document.querySelector(".input_text2").value = '';
    document.querySelector("#textarea1").value = '';
}
function cancel_sh(){
    block1_sh.classList.remove("show_shablon");
    block_sh.classList.remove("hide_shablon");
    document.querySelector(".input_text3").value = '';
    document.querySelector("#textarea2").value = '';
}



let menu_item = document.querySelectorAll(".drop_menu_mail_item");
let main_sections = document.querySelectorAll('.block[data-open]');
let topElement = document.documentElement;

menu_item.forEach(element => element.onclick = () => {
    menu_item.forEach(element => element.classList.remove('change'));
    element.classList.add('change');

    let inputs = document.querySelectorAll("input, #textarea, #textarea1");
    for(var j = 0; j < inputs.length; j++){
      inputs[j].value = "";
    }
  let elementClick = element;
  main_sections.forEach(element => {
      if (element.getAttribute('data-open') == elementClick.getAttribute('data-open')) {
          element.classList.remove('display-show');
      } else {
          element.classList.add('display-show');
      }
  });

  topElement.scrollTo({
    top: 0,
    behavior: "smooth"
 })
});


function show1(){
    document.querySelector("#block_shablon").classList.add("hide_shablon");
    document.querySelector("#block1_shablon").classList.add("show_shablon");
}

clients = [
    {
        login: 'USC191',
        fio: 'ShomurodovEldor',
        email: 'Erik61.Genoa@gmail.comdscsdcsdccsdretrhyrtgrf',
        type: 'client'
    },
    {
        login: 'USC777',
        fio: 'Masharipov Jaloliddin',
        email: 'Paxtakor_1191@mail.com',
        type: 'client'
    },
    {
        login: 'USC002',
        fio: 'Qudratullayev O`tkir',
        email: 'O`tkir1771_.@gmail.com',
        type: 'performer'
    },
    {
        login: 'USC154',
        fio: 'Fayzullayev Eshmat',
        email: 'Fayz.studio@mail.com',
        type: 'performer'
    },
    {
        login: 'USC288',
        fio: 'Fazl',
        email: 'Fayz.stas.Gmail.moc',
        type: 'performer'
    }
]

clients = [
    {
        login: 'USC191',
        fio: 'ShomurodovEldor',
        email: 'Erik61.Genoa@gmail.comdscsdcsdccsdretrhyrtgrf',
        type: 'client'
    },
    {
        login: 'USC777',
        fio: 'Masharipov Jaloliddin',
        email: 'Paxtakor_1191@mail.com',
        type: 'client'
    },
    {
        login: 'USC002',
        fio: 'Qudratullayev O`tkir',
        email: 'O`tkir1771_.@gmail.com',
        type: 'performer'
    },
    {
        login: 'USC154',
        fio: 'Fayzullayev Eshmat',
        email: 'Fayz.studio@mail.com',
        type: 'performer'
    },
    {
        login: 'USC288',
        fio: 'AliBek',
        email: 'cLever_student.uz',
        type: 'performer'
    }
]

block()
function block(){
    let s = '';
    let n = 1;
    
    for (const client of clients) {
      
        s+=`<div class="body_item">
        <div class="emails num">${n}</div>
        <a href="#" class="emails login">${client.login}</a>
        <div class="emails fio">${client.fio}</div>
        <a href="#" class="emails mail">${client.email}</a>
        </div>`
        n++
    }

    document.querySelector('.body_content').innerHTML = s
    
    function checked() {
        if (document.querySelectorAll('#client')[0].checked == true && document.querySelectorAll('#programer')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'client') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                }
            }
        } else if (document.querySelectorAll('#client')[0].checked != true && document.querySelectorAll('#programer')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'client' || client.type == 'performer') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                }
            }
        } else if (document.querySelectorAll('#client')[0].checked == true && document.querySelectorAll('#programer')[0].checked == true) {
            console.log(1);
            s = '';
            n = 1;
            for (const client of clients) {
                s += `<div class="body_item">
                <div class="emails">${n}</div>
                <a href="#" class="emails login">${client.login}</a>
                <div class="emails">${client.fio}</div>
                <a href="#" class="emails mail">${client.email}</a>
                </div>`
                n++
            }
        } else if (document.querySelectorAll('#programer')[0].checked == true && document.querySelectorAll('#client')[0].checked != true) {
            s = '';
            n = 1;
            for (const client of clients) {
                if (client.type == 'performer') {
                    s += `<div class="body_item">
                    <div class="emails">${n}</div>
                    <a href="#" class="emails login">${client.login}</a>
                    <div class="emails">${client.fio}</div>
                    <a href="#" class="emails mail">${client.email}</a>
                    </div>`
                    n++
                    document.querySelector('.body_content').innerHTML = s
                }
            }
        } 
    }

    document.querySelector('#client').addEventListener('click', () => {
        checked();
        document.querySelector('.body_content').innerHTML = s
    })

    document.querySelector('#programer').addEventListener('click', () => {
        checked();
        document.querySelector('.body_content').innerHTML = s
    })


}




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
const showChat = document.querySelector('.header_title');


showChat.addEventListener('click', () => {
  chatText.style.visibility = 'hidden';
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