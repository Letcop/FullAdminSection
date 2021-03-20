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

/////////////////   блок пользователи  /////////////////////
users = [
  {
    nick : "hammilioner",
    name : "Касымов Тимур",
    type : "customer",
    job : "Заказчик"
  },
  {
    nick : "Gogoda",
    name : "Кулуев Варшмак",
    type : "performer",
    job : "Испольнитель"
  },
  {
    nick : "Microsoft",
    name : "Bill Gates",
    type : "customer",
    job : "Заказчик"
  },
  {
    nick : "madritista",
    name : "Sergio Ramos",
    type : "performer",
    job : "Испольнитель"
  },
  {
    nick : "Anaconda",
    name : "Uill Smith",
    type : "customer",
    job : "Заказчик"
  },
  {
    nick : "bayern",
    name : "Serg Gnabri",
    type : "performer",
    job : "Испольнитель"
  }
  ,
  {
    nick : "magican",
    name : "Mesut Ozil",
    type : "performer",
    job : "Испольнитель"
  }
]
//////// шаблон блок пользователи //////////////////
make();
function make(){
  let s = '';
  for(const i of users){
    s+=`<div class="bonus_item_inner">
    <div class="bonus_inner_info">
        <div class="nickname_button">
          <a class="bonus_nickname" href="#/">${i.nick}</a>
          <a href="#"><i class="fas fa-external-link-alt"></i></a>
        </div>
        <div class="bonus_name">${i.name}</div>
        <div class="bonus_type">${i.job}</div>
    </div>
    <form action="">
        <label class="checkbox un">
            <input type="checkbox" class="userCheck" id="user_check">
            <span class="checkmark left"></span>
        </label>
    </form>
  </div>`
  }
  document.querySelector('.bonus_item').innerHTML = s;


  
  //////////// заказчик //////////////////////////
  let customer_btn = document.querySelector(".left_block_btn.customer");
  let back = false;
  function have(){
    back =! back;
    s ='';
     for(const i of users){
        s+=`<div class="bonus_item_inner">
               <div class="bonus_inner_info">
                   <div class="nickname_button">
                      <a class="bonus_nickname" href="#/">${i.nick}</a>
                      <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <div class="bonus_name">${i.name}</div>
                    <div class="bonus_type">${i.job}</div>
                </div>
                <form action="">
                    <label class="checkbox un">
                        <input ${back ? (i.type == 'customer'? 'checked': ""):""} type="checkbox" class="userCheck" id="client1">
                        <span class="checkmark left"></span>
                    </label>
                 </form>
            </div>`
            document.querySelector('.bonus_item').innerHTML = s;
    }
  };

  //////////// исполнитель ////////////////////////
  let performer_btn = document.querySelector(".left_block_btn.performer");
  function have_p(){
    back =! back;
    s ='';
     for(const i of users){
      
        s+=`<div class="bonus_item_inner">
               <div class="bonus_inner_info">
                   <div class="nickname_button">
                      <a class="bonus_nickname" href="#/">${i.nick}</a>
                      <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <div class="bonus_name">${i.name}</div>
                    <div class="bonus_type">${i.job}</div>
                </div>
                <form action="">
                    <label class="checkbox un">
                        <input ${back ? (i.type == 'performer'? 'checked': ""):""} type="checkbox" class="userCheck" id="client1">
                        <span class="checkmark left"></span>
                    </label>
                 </form>
            </div>`
       
       document.querySelector('.bonus_item').innerHTML = s;
    }
};
//////////// блок для кнопка ВСЕМ,  //////////////////////////
let all_btn = document.querySelector(".left_block_btn.all");
let doAll = false;
function have_all(){
  doAll =! doAll;
  s ='';
     for(const i of users){
       
        s+=`<div class="bonus_item_inner">
               <div class="bonus_inner_info">
                   <div class="nickname_button">
                      <a class="bonus_nickname" href="#/">${i.nick}</a>
                      <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                    <div class="bonus_name">${i.name}</div>
                    <div class="bonus_type">${i.job}</div>
                </div>
                <form action="">
                    <label class="checkbox un">
                        <input ${doAll ? 'checked':""} type="checkbox" class="userCheck" id="client1">
                        <span class="checkmark left"></span>
                    </label>
                 </form>
            </div>`
            document.querySelector('.bonus_item').innerHTML = s;
    }
};
 all_btn.addEventListener('click', ()=>{
   have_all();
   let right_block = document.querySelector(".right_block_inner");
    right_block.style.display = "none";
  
   let more_info = document.querySelectorAll(".bonus_nickname");
  more_info.forEach(element => element.onclick =()=>{
    if(document.querySelector('.userEditWrapper').style.display =" none"){
      document.querySelector('.userEditWrapper').style.display =" flex";
    }
  });

  let check_btn = document.querySelectorAll(".userCheck");
check_btn.forEach(element => element.onclick = () => {
  let right_block = document.querySelector(".right_block_inner");
  let n = 0;
  for(let i = 0; check_btn.length > i; i++){
     if(check_btn[i].checked == true){
       n += 1;
      }
  }if(n == 1){
    right_block.style.display = "block"
  } else if( n != 1){
    right_block.style.display = "none";
  }
});

});

  customer_btn.addEventListener('click', ()=>{
    have();
    let right_block = document.querySelector(".right_block_inner");
    right_block.style.display = "none";
   let more_info = document.querySelectorAll(".bonus_nickname");
   more_info.forEach(element => element.onclick =()=>{
     if(document.querySelector('.userEditWrapper').style.display =" none"){
       document.querySelector('.userEditWrapper').style.display =" flex";
     }
   });
  
   let check_btn = document.querySelectorAll(".userCheck");
  check_btn.forEach(element => element.onclick = () => {
  let right_block = document.querySelector(".right_block_inner");
  let n = 0;
  for(let i = 0; check_btn.length > i; i++){
     if(check_btn[i].checked == true){
       n += 1;
      }
  
  }if(n == 1){
    right_block.style.display = "block"
  } else if( n != 1){
    right_block.style.display = "none";
  }
});

  });

  
  
  performer_btn.addEventListener('click', ()=>{
    have_p();
    let right_block = document.querySelector(".right_block_inner");
    right_block.style.display = "none";
    let more_info = document.querySelectorAll(".bonus_nickname");
    more_info.forEach(element => element.onclick =()=>{
      if(document.querySelector('.userEditWrapper').style.display =" none"){
        document.querySelector('.userEditWrapper').style.display =" flex";
      }
    });

    let check_btn = document.querySelectorAll(".userCheck");
    check_btn.forEach(element => element.onclick = () => {
      let right_block = document.querySelector(".right_block_inner");
      let n = 0;
      for(let i = 0; check_btn.length > i; i++){
         if(check_btn[i].checked == true){
           n += 1;
          }
      }if(n == 1){
        right_block.style.display = "block"
      } else if( n != 1){
        right_block.style.display = "none";
      }
    });
   });
}

let all_buttons = document.querySelectorAll(".left_block_btn");
all_buttons.forEach(element => element.onclick = () => {
  all_buttons.forEach(element => element.classList.remove('add_bg'));
  element.classList.add('add_bg');
});


/////////// open  userEditWrapper /////////////////////

let more_info = document.querySelectorAll(".bonus_nickname");

more_info.forEach(element => element.onclick =()=>{
  if(document.querySelector('.userEditWrapper').style.display =" none"){
    document.querySelector('.userEditWrapper').style.display =" flex";
  }
});

let check_btn = document.querySelectorAll(".userCheck")

check_btn.forEach(element => element.onclick = () => {
  let right_block = document.querySelector(".right_block_inner");
  let n = 0;
  for(let i = 0; check_btn.length > i; i++){
     if(check_btn[i].checked == true){
       n += 1;
      }
  
  }if(n == 1){
    right_block.style.display = "block"
  } else if( n != 1){
    right_block.style.display = "none";
  }
});

//let menu_item = document.querySelectorAll(".drop_menu_mail_item");

let menu_item = document.querySelector(".menu_list.drop_menu_link_mail");
let topElement = document.documentElement;
menu_item.addEventListener('click', () =>{
  // menu_item.classList.add('change_back');
  topElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })

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