let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('.header_title');


// start chat
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



// drop menu and menu razdeli
let drop = document.querySelector(".drop_menu_link_mail");
let menu = document.querySelector(".drop_menu_block_mail");

drop.addEventListener('click', (e) => {
    menu.classList.toggle('open_drop');
});



///////////////////////////////////////////////////////////////



// meta btns
let meta_base = document.querySelectorAll(".mak_btn.meta_base");
let btn_title = document.querySelectorAll(".mak_btn.title");
let site_title = document.querySelectorAll(".mak_btn.site_title");
let btn_type = document.querySelectorAll(".mak_btn.type");
let btn_region = document.querySelectorAll(".mak_btn.region");
let btn_country = document.querySelectorAll(".mak_btn.country");
let btn_page = document.querySelectorAll(".mak_btn.page");
let btn_spec = document.querySelectorAll(".mak_btn.spec");
let btn_category = document.querySelectorAll(".mak_btn.category");
let btn_query = document.querySelectorAll(".mak_btn.query");
let btn_desciption = document.querySelectorAll(".mak_btn.desc");
let btn_title_full = document.querySelectorAll(".mak_btn.title_full");
let btn_price = document.querySelectorAll(".mak_btn.price");
let btn_tags = document.querySelectorAll(".mak_btn.tags");
let btn_name = document.querySelectorAll(".mak_btn.name");
let btn_surname = document.querySelectorAll(".mak_btn.surname");
let btn_login = document.querySelectorAll(".mak_btn.login");
let btn_city = document.querySelectorAll(".mak_btn.city");
let btn_category_reverse = document.querySelectorAll(".mak_btn.category_rev");
let btn_textshort = document.querySelectorAll(".mak_btn.textshort");
let btn_sitehost = document.querySelectorAll(".mak_btn.sitehost");
let btn_extra = document.querySelectorAll(".mak_btn.extra");


meta_base.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{meta-base}';
});
btn_title.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{title}';
});
site_title.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{site.title}';
});
btn_type.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{type}';
});
btn_region.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{region}';
});
btn_country.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{country}';
});
btn_page.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{page}';
});
btn_spec.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{spec}';
});
btn_category.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{category}';
});
btn_query.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{query}';
});
btn_desciption.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{description}';
});
btn_title_full.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{title.full}';
});
btn_price.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{price}';
});
btn_tags.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{tags}';
});
btn_name.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{name}';
});
btn_surname.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{surname}';
});
btn_login.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{login}';
});
btn_city.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{city}';
});
btn_category_reverse.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{categories.reverse}';
});
btn_textshort.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{textshort}';
});
btn_sitehost.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{sitehost}';
});
btn_extra.forEach(element => element.onclick=()=>{
  focusElement.focus();
  focusElement.value += '{extra}';
});

let focusElement;
function selectElement(element){
  focusElement = element;
}

//change section in blocks
let left_category = document.querySelectorAll(".left_text");
let sections = document.querySelectorAll('section[data-show]');


left_category.forEach(element => element.onclick = () => {
  left_category.forEach(element => element.classList.remove('add_border'));
    element.classList.add('add_border');
  let elementClick = element;
  sections.forEach(element => {
      if (element.getAttribute('data-show') == elementClick.getAttribute('data-show')) {
          element.classList.remove('display-none');
      } else {
          element.classList.add('display-none');
      }
  });
});

let head_text = document.querySelectorAll(".body_left_under_header");
head_text.forEach(element => element.onclick= ()=>{
  head_text.forEach(element => element.classList.remove('add_text_color'));
  element.classList.add('add_text_color');
});





let menu_item = document.querySelectorAll(".drop_menu_mail_item");
let main_sections = document.querySelectorAll('.block[data-open]');
let topElement = document.documentElement;

menu_item.forEach(element => element.onclick = () => {
  menu_item.forEach(element => element.classList.remove('change'));
    element.classList.add('change');
    let show = document.querySelectorAll("section.show");
    show.forEach(element => {
      element.classList.remove("display-none");
    });

    let inputs = document.querySelectorAll("input, #textarea, #textarea1");
    for(var j = 0; j < inputs.length; j++){
      inputs[j].value = "";
    }

    let left_razdel = document.querySelectorAll(".left_text");
    left_razdel.forEach(element => {
      element.classList.remove("add_border");
      element.querySelector(".body_left_under_header").classList.remove("add_text_color");
    });

    let mainLink = document.querySelectorAll('.main');
mainLink.forEach(element => {
    element.classList.add('add_border');
    element.querySelector('.body_left_under_header').classList.add('add_text_color');
});

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
  document.getElementById('landing_page2').style.display = "none";
  document.querySelector('.block.redirects2').style.display = "none";
  document.querySelector(".setting.robots").classList.remove("close");
  document.querySelector(".setting.sitemap").classList.add("close");
  document.querySelector(".body_header_setting.first").classList.add("delete_under_border");
  document.querySelector(".body_header_setting.second").classList.remove("delete_under_border");
});





let header_section = document.querySelectorAll(".body_header_section");
let above_section = document.querySelectorAll('.horizontal_sections[data-display]');

header_section.forEach(element => element.onclick = () => {
  header_section.forEach(element => element.classList.remove('delete_under_border'));
    element.classList.add('delete_under_border');
  let elementClick = element;
  above_section.forEach(element => {
      if (element.getAttribute('data-display') == elementClick.getAttribute('data-display')) {
          element.classList.remove('display-section');
      } else {
          element.classList.add('display-section');
      }
  });
});

let header_setting = document.querySelectorAll(".body_header_setting");
let setting = document.querySelectorAll(".setting[data-setting]");

header_setting.forEach(element => element.onclick = () => {
  header_setting.forEach(element => element.classList.remove('delete_under_border'));
    element.classList.add('delete_under_border');
  let elementClick = element;
  setting.forEach(element => {
      if (element.getAttribute('data-setting') == elementClick.getAttribute('data-setting')) {
          element.classList.remove('close');
      } else {
          element.classList.add('close');
      }
  });
});


//////////////// 10-razdel Посадочные страницы ////////////////

landing_url = [
  {
      id: '12',
      l_url: '/price/',
      o_url: 'valuable...',
      act: 'client'
  },
  {
      id: '7',
      l_url: 'Mjezy',
      o_url: '/user/imeanyoumean-jezy-allonedace',
      act: 'client'
  },
  {
      id: '111',
      l_url: 'zoom-uzb',
      o_url: 'Uzbekistantashkent',
      act: 'performer'
  },
  {
      id: '17',
      l_url: 'la-russia',
      o_url: 'asdfghjklkjhgfdswertyuiokmnbvcxsaqwedewewf',
      act: 'performer'
  }
]

landing_page();
function landing_page(){
  let s = '';
  
  for (const url of landing_url) {
    
      s+=`<div class="body_content_item">
      <div class="search_item id">${url.id}</div>
      <div class="parent_search_item_l_url">
           <a href="#" class="search_item l_url">${url.l_url}</a>
      </div>
      <div class="search_item o_url">${url.o_url}</div>
      <div class="search_item act">
          <img src="icons/switch on.svg" >
          <img src="icons/edit.svg" title="edit" onclick="add_page()">
          <img src="icons/delete.svg" title="delete">
      </div>
      </div>
      <div class="search_body_line"></div>`
   
  }

  document.querySelector('.search_body_content').innerHTML = s
}
//Посадочные страницы - добавления страниц
function add_page(){
    document.querySelector(".block.landing_page").classList.add("display-show");
    document.getElementById('landing_page2').style.display = "block";
};

//Посадочные страницы - отмена добавления страницы
let cancel = document.getElementById('cancel');
cancel.addEventListener('click', function(){
  document.querySelector(".block.landing_page").classList.remove("display-show");
  document.getElementById('landing_page2').style.display = "none";
  let url_input = document.querySelectorAll(".url_input");
  for(var i = 0; i < url_input.length ; i++){
    url_input[i].value = "";
  }
  topElement.scrollTo({
    top: 0,
    behavior: "smooth"
 })
});

function add_redict(){
    document.querySelector(".block.redirects").classList.add("display-show");
    document.querySelector('.block.redirects2').style.display = "block";
}

let cancel_rec = document.getElementById('cancel_rec');
cancel_rec.addEventListener('click', function(){
  document.querySelector(".block.redirects").classList.remove("display-show");
  document.querySelector('.block.redirects2').style.display = "none";
  let url_input = document.querySelectorAll(".url_input");
  for(var i = 0; i < url_input.length ; i++){
    url_input[i].value = "";
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