let chat = document.querySelector('.chat i');
let chatText = document.querySelector('.chat_text');
const showChat = document.querySelector('main');


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
// ---------------------------------------click-avatar---------------------


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
    let main = document.querySelector('main')
    main.addEventListener('click', () => {
        $(quit).animate({ right: "7px" }, 500);
    });

})








/* ---------------------- users ------------------------- */

/* --------------------- quantity ----------------------- */
let newUsersStroke = document.querySelectorAll('.text .newUsersStroke');
let quantityNewUsers = document.querySelector('.quantityNewUsers');
let allStroke = document.querySelectorAll('.text .allStroke');
let quantityAllUsers = document.querySelector('.quantityAllUsers');
let blockedStroke = document.querySelectorAll('.text .blockedStroke');
let quantityBlockedUsers = document.querySelector('.quantityBlockedUsers');

for (let i = 0; i < newUsersStroke.length; i++) {
    addedUsers();
}

function addedUsers() {
    for (let i = 0; i < 1; i++) {
        quantityNewUsers.innerHTML = newUsersStroke.length;
    }
}

for (let i = 0; i < allStroke.length; i++) {
    AllUsers();
}

function AllUsers() {
    for (let i = 0; i < 1; i++) {
        quantityAllUsers.innerHTML = allStroke.length;
    }
}


quantityBlockedUsers.innerHTML = blockedStroke.length;

function blockedUsers() {
    return blockedStroke.length--;
}

/* --------------------- quantity ----------------------- */





$(function () {
    let tabs = $('.tab');
    tabs.click(function () {
        tabs.removeClass('tab-active').eq($(this).index()).addClass('tab-active');
    });
    $('.All').click(function (e) {
        e.preventDefault();
        $('.allStroke, .addUserBlock').show();
        $('.blockedStroke').hide();
    });
    $('.New').click(function (e) {
        e.preventDefault();
        $('.newUsersStroke').show();
        $('.stroke, .addUserBlock, .blockedStroke').hide();
    });
    $('.Blocked').click(function (e) {
        e.preventDefault();
        $('.blockedStroke').css('display', 'table');
        $('.allStroke, .addUserBlock').hide();
    });
    $('.verifyUser').click(function () {
        $('.userEditWrapper').css("display", "flex");
        $('.userEditAccountBlock, .userEditCommentsBlock, .userEditFundsBlock').hide();
        $('.userEditVerifyBlock').show();
        $('.userEditTab').removeClass('user-active');
        $('.verification').addClass('user-active');
    });


    let unlockUser = document.querySelectorAll('.unlockUser');
    let blockedStroke = document.querySelectorAll('.blockedStroke');

    for (let i = 0; i < unlockUser.length; i++) {
        unlockUser[i].addEventListener('click', function (e) {
            if (confirm('Разблокировать?')) {
                blockedStroke[i].style.display = 'none';
                quantityBlockedUsers.innerHTML--;
            }
        });
    };

    $('.userEditTab').click(function (e) {
        e.preventDefault();
        $('.userEditTab').removeClass('user-active').eq($(this).index()).addClass('user-active');
    });

    let allInputs = document.querySelector('.rating-result span');
    let wun = document.querySelector('.rating-result .wun');
    let two = document.querySelector('.rating-result .two');
    let three = document.querySelector('.rating-result .three');
    let four = document.querySelector('.rating-result .four');
    let five = document.querySelector('.rating-result .five');

    $('.editRatingBtn').click(function (e) {
        e.preventDefault();
        $('.rating-area, .doneRating, .cancelRating').show();
        $('.rating-result, .editRatingBtn').hide();
        $(two).removeClass('active');
        $(three).removeClass('active');
        $(four).removeClass('active');
        $(five).removeClass('active');
    });


    $('.doneRating').click(function (e) {
        e.preventDefault();
        $('.rating-result, .editRatingBtn').show();
        $('.rating-area, .doneRating, .cancelRating').hide();
        $(allInputs).removeClass('active');
        if ($('input[name=rating]:checked').val() == 5) {
            $(wun).addClass('active');
            $(two).addClass('active');
            $(three).addClass('active');
            $(four).addClass('active');
            $(five).addClass('active');
        } else if ($('input[name=rating]:checked').val() == 4) {
            $(wun).addClass('active');
            $(two).addClass('active');
            $(three).addClass('active');
            $(four).addClass('active');
        } else if ($('input[name=rating]:checked').val() == 3) {
            $(wun).addClass('active');
            $(two).addClass('active');
            $(three).addClass('active');
        } else if ($('input[name=rating]:checked').val() == 2) {
            $(wun).addClass('active');
            $(two).addClass('active');
        } else if ($('input[name=rating]:checked').val() == 1) {
            $(wun).addClass('active');
        };

    });



    let deleteUser = document.querySelectorAll('.deleteUser');

    for (let i = 0; i < deleteUser.length; i++) {
        deleteUser[i].addEventListener('click', function () {
            $('.userEditTab').removeClass('user-active');
            $('.account').addClass('user-active');
            $('.userEditAccountBlock').show();
            $('.userEditWrapper, .deleteWhyWrapper').css("display", "flex");
            $('.userEditVerifyBlock, .userEditCommentsBlock, .userEditFundsBlock').hide();
        });
    };



    let avatarPhoto = document.querySelector('.avatarPhoto');


    avatarPhoto.addEventListener('change', (e) => {
        e.target.parentElement.children[2]
        if (e.target.files.length > 0) {
            let src = URL.createObjectURL(e.target.files[0]);
            let addAvatar = e.target.parentElement.children[2];
            addAvatar.src = src;
            addAvatar.style.display = 'block'
        }
    });

    $('.xCloseUserEdit').click(function (e) {
        e.preventDefault();
        $('.userEditWrapper').hide();
    });

    $('.editProfileBtn').click(function (e) {
        e.preventDefault();
        $('.userEditWrapper').css("display", "flex");
        $('.userEditVerifyBlock, .userEditCommentsBlock, .userEditFundsBlock').hide();
        $('.userEditAccountBlock').show();
        $('.userEditTab').removeClass('user-active');
        $('.account').addClass('user-active');
    });

    $('.verification').click(function () {
        $('.userEditAccountBlock, .userEditCommentsBlock, .userEditFundsBlock').hide();
        $('.userEditVerifyBlock').show();
    });

    $('.comments').click(function () {
        $('.userEditAccountBlock, .userEditVerifyBlock, .userEditFundsBlock').hide();
        $('.userEditCommentsBlock').css('display', 'flex');
    });

    $('.account').click(function () {
        $('.userEditCommentsBlock, .userEditVerifyBlock, .userEditFundsBlock').hide();
        $('.userEditAccountBlock').show();
    });

    $('.funds').click(function () {
        $('.userEditAccountBlock, .userEditVerifyBlock, .userEditCommentsBlock').hide();
        $('.userEditFundsBlock').show();
    });

    $('.saveEndExitBtn, .cancelBtn').click(function (e) {
        e.preventDefault();
        $('.userEditWrapper').hide();
    });

    $('.blockBtn').click(function (e) {
        e.preventDefault();
        $('.blockedWhyWrapper').css('display', 'flex');
    });

    $('.deleteBtn').click(function (e) {
        e.preventDefault();
        $('.deleteWhyWrapper').css('display', 'flex');
    });

    $('.blockedWhyWrapper .cancelBlockingBtn, .blockingBtn').click(function (e) {
        e.preventDefault();
        $('.blockedWhyWrapper').css('display', 'none');
    });

    $('.deleteWhyWrapper .cancelBlockingBtn, .blockingBtn').click(function (e) {
        e.preventDefault();
        $('.deleteWhyWrapper').css('display', 'none');
    });

    let commentBlock = document.querySelectorAll('.commentBlock');
    let deleteComment = document.querySelectorAll('.deleteComment');

    for (let i = 0; i < commentBlock.length; i++) {
        deleteComment[i].addEventListener('click', function (e) {
            if (confirm('Удалить отзыв?')) {
                commentBlock[i].style.display = 'none';
            }
        })
    };


    let ready = document.querySelectorAll('.ready');
    let quantityReady = document.querySelector('.quantityReady');
    let arbitrage = document.querySelectorAll('.arbitrage');
    let quantityArbitrage = document.querySelector('.quantityArbitrage');


    for (let i = 0; i < arbitrage.length; i++) {
        addArbitrage();
    };

    function addArbitrage() {
        for (let i = 0; i < 1; i++) {
            quantityArbitrage.innerHTML = arbitrage.length;
        }
    };


    for (let i = 0; i < ready.length; i++) {
        addReady();
    };

    function addReady() {
        for (let i = 0; i < 1; i++) {
            quantityReady.innerHTML = ready.length;
        }
    };



    $('.Arbitrage').click(function (e) {
        e.preventDefault();
        $('.userEditFundsBlock .ready').hide();
        $('.userEditFundsBlock .arbitrage').show();
    });

    $('.Ready').click(function (e) {
        e.preventDefault();
        $('.userEditFundsBlock .arbitrage').hide();
        $('.userEditFundsBlock .ready').show();
    });

    $('.all').click(function (e) {
        e.preventDefault();
        $('.userEditFundsBlock .fundStroke').show();
    });


    $('.fundTab').click(function (e) {
        e.preventDefault();
        $('.fundTab').removeClass('fund-active').eq($(this).index()).addClass('fund-active');
    });
})

/////////////////////// countries ////////////////////////////




const showList = (iteam) => {
    const list = document.querySelectorAll(iteam);

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            activeList(i)
        })
    }

    function activeList(index) {
        if (list[index].classList.contains('active__list') === true) {
            list[index].classList.remove('active__list');
            list[index].nextElementSibling.classList.remove('active__sublist');

            setTimeout(() => {
                list[index].nextElementSibling.style.display = 'none'
            }, 0)
        } else {
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove('active__list');
                list[i].nextElementSibling.classList.remove('active__sublist');
            }
            list[index].classList.add('active__list');
            list[index].nextElementSibling.style.display = "block";

            setTimeout(() => {
                list[index].nextElementSibling.classList.add('active__sublist')
            }, 10)

        }
    }

    function addCountries(iteam) {
        const listBlock = document.querySelector(iteam)
        for (let i = 0; i < contries.length; i++) {
            let div = document.createElement('div');
            div.classList.add('country__list_iteam');
            div.textContent = contries[i].contriename;
            listBlock.append(div)
            div.addEventListener('click', () => {
                changeCountry(contries[i].cites, div);
            })
        }
    }
    function changeCountry(arr, iteam) {
        iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
        activeList(0);
        document.querySelector('.country__form_block .err__span').setAttribute('class', 'err__span opacNull');
    }
    addCountries('.country__form_list');
}

showList('.contry__form_btn');



const cityshowList = (iteam) => {
    const list = document.querySelectorAll(iteam);

    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', () => {
            cityActiveList(i);
        });
    }

    function cityActiveList(index) {
        if (list[index].classList.contains('active__list-city') === true) {
            list[index].classList.remove('active__list-city');
            list[index].nextElementSibling.classList.remove('active__sublist-city');

            setTimeout(() => {
                list[index].nextElementSibling.style.display = 'none'
            }, 0)
        } else {
            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove('active__list-city');
                list[i].nextElementSibling.classList.remove('active__sublist-city');
            }
            list[index].classList.add('active__list-city');
            list[index].nextElementSibling.style.display = "block";

            setTimeout(() => {
                list[index].nextElementSibling.classList.add('active__sublist-city')
            }, 10)

        }
    }
    function addCities(iteam) {
        const listBlock = document.querySelector(iteam)
        for (let i = 0; i < cityList.length; i++) {
            let div = document.createElement('div');
            div.classList.add('city__list_iteam');
            div.textContent = cityList[i].city;
            listBlock.append(div);
            div.addEventListener('click', () => {
                changeCity(cityList[i].city, div);
            });
        };
    };
    function changeCity(arr, iteam) {
        iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
        cityActiveList(0);
        document.querySelector('.city__form_block .err__span-city').setAttribute('class', 'err__span-city opacNull-city');
    };
    addCities('.city__form_list');
}

cityshowList('.city__form_btn');

//////////////////////////////// skills /////////////////////////////////////

// Добавить навыки

let skillBoxs = document.querySelectorAll('.performers_info .skill_box');
let removeSkillBox = document.querySelectorAll('.skill_box i');
let addSkillBtn = document.querySelector('.add_skill_btn');
let addSkill = document.getElementById('addSkill');
let performersInfo = document.getElementById('performersInfo');


$(document).ready(function () {
    $('#addSkill').keyup(function () {
        if ($(this).val().length > 0 && $(this).val().length < 10) {
            $(this).val($(this).val().charAt(0).toUpperCase() + $(this).val().substr(1));
        }
    });
})





addSkillBtn.addEventListener('click', () => {
    const returnErrorText = document.getElementById('returnErrorText')
    for (let i = 0; i < skills.length; i++) {

        if (addSkill.value == skills[i].name) {

            let addThisList = addSkillBtn.parentElement.parentElement.parentElement.children[1];
            let newSkill = document.createElement('div');
            newSkill.classList.add('skill_box');

            let removeThis = document.createElement('i');
            removeThis.classList.add('fas');
            removeThis.classList.add('fa-times-circle');

            newSkill.innerHTML = addSkill.value;
            addThisList.prepend(newSkill);
            newSkill.append(removeThis)
            addSkill.value = ''
            let addedSkills = document.querySelectorAll('.performers_info .skill_box');
            let removeSkillBox = document.querySelectorAll('.skill_box i');

            addedSkills.forEach((addedSkill) => {
                addedSkill.addEventListener('mouseover', () => {
                    addedSkill.classList.add('skill_bgc');
                    addedSkill.children[0].style.display = 'block'
                })
            });

            addedSkills.forEach((addedSkill) => {
                addedSkill.addEventListener('mouseout', () => {
                    addedSkill.classList.remove('skill_bgc');
                    addedSkill.children[0].style.display = 'none'
                })
            })
            // removed skill
            removeSkillBox.forEach((removeSkill) => {
                removeSkill.addEventListener('click', () => {
                    removeSkill.parentElement.style.display = 'none'
                })
            });
            return returnErrorText.innerText = ''
        } else if (addSkill.value == '') {
            returnErrorText.innerText = 'Выберите навык'
        }

        else {
            returnErrorText.innerText = 'Не найден'
        }
    }



});



skillBoxs.forEach((skillBox) => {
    skillBox.addEventListener('mouseover', () => {
        skillBox.classList.add('skill_bgc');
        skillBox.firstChild.style.display = "block"
    })
});

skillBoxs.forEach((skillBox) => {
    skillBox.addEventListener('mouseout', () => {
        skillBox.classList.remove('skill_bgc');
        skillBox.firstChild.style.display = "none"
    })
});

// removed skill

removeSkillBox.forEach((removeSkill) => {
    removeSkill.addEventListener('click', () => {
        removeSkill.parentElement.style.display = 'none'
    })
});




//////////////////////////// add user ///////////////////////////

$('.closeAddUserWrapperBtn').click(function(e){
    e.preventDefault();
    $('.addUserWrapper').hide();
})

$('.addUserBtn').click(function(e){
    e.preventDefault();
    $('.addUserWrapper').css('display', 'flex');
})




        
//        Глобальные переменные,
let n=0;
let p=0; //для процентовки пароля,
let r=0; //для процентовки повторите пароля,
let l=0;
let e=0;
let c=0;

let k=0;

let type;

        
// Проверка длины имя и фамилия

function change__name() {
    let name = document.getElementById('name');
    console.log(/[0-9]/.test(name.value))
    if(name.value.length < 5 || /[0-9a-zA-Z]/.test(name.value)) {
        name.style.backgroundColor = '#ff8cb2';
        name.removeAttribute("onchange");
        name.setAttribute("oninput","change__name()");
        n=0;
        change__all();
        document.getElementById('name__span').setAttribute('class', 'opacActivity err__spanity');
    }
    else {
        name.style.backgroundColor = '#0F0F41';
        n=15;
        change__all();
        document.getElementById('name__span').setAttribute('class', 'opacNullity err__spanity');
    }
}

// Проверка email

function validateEmail() 
{
    let email = document.getElementById('email');
    function test__email (email) {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }
    if(!test__email(email.value)) 
    {
        email.style.backgroundColor = '#ff8cb2'; 
        email.removeAttribute('onchange');
        email.setAttribute('oninput','validateEmail()');
        e=0;
        change__all();
        document.getElementById('email__span').innerHTML = 'Введите корректный email';
        
    }
    
    else {
        email.style.backgroundColor = '#0F0F41';
        e=14.2;
        change__all();
        document.getElementById('email__span').innerHTML = '';
    }
}

// Проверка выборки Типа

function change__radio () {
       type = true;         
}






// Проверка длины login


function change__login() {
    let login = document.getElementById('login');   
    if(login.value.length < 3 || /[0-9а-яА-Я]/.test(login.value)) {
        login.style.backgroundColor = '#ff8cb2';
        login.removeAttribute("onchange");
        login.setAttribute("oninput","change__login()");
        l=0;
        change__all();
        document.getElementById('login__span').setAttribute('class', 'opacActivity err__spanity');
    }
    else {
        login.style.backgroundColor = '#0F0F41';
        l=14.2;
        change__all();
        document.getElementById('login__span').setAttribute('class', 'opacNullity err__spanity');
    }
}

// Проверка длины пароля

function checkPassword() {
    let pass = document.getElementById('password');
    if(pass.value.length<8) {
        pass.style.backgroundColor = '#ff8cb2';
        pass.removeAttribute("onchange");
        pass.setAttribute("oninput","checkPassword()");
        p=0;
        change__all();
        document.getElementById('pass__span').setAttribute('class', 'opacActivity err__spanity');
    }
    else {
        pass.style.backgroundColor = '#0F0F41';
        p=14.2;
        change__all();
        document.getElementById('pass__span').setAttribute('class', 'opacNullity err__spanity');
    }
}

// Генерация пароля

function gen_password(len)
{
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++)
    {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    return password;
}

function view_gen_password() {
    let pass = gen_password(12);
    document.getElementById("password").value = pass;
    
    let passw = document.getElementById('password');
    passw.style.backgroundColor = '#0F0F41';
        p=14.2;
        change__all();
        document.getElementById('pass__span').innerHTML = '';
}

// Показ пароля

function change_to_pass() {
    let input = document.getElementById('password');
    let view = document.getElementById('icon');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute("type","text");
        view.setAttribute("class", "fa fa-eye icon");
    }
    else {
        input.setAttribute("type","password");
        view.setAttribute("class", "fa fa-eye-slash icon");
    }
}

// Показ подтверждения пароля

function change_to_repass() {
    let input = document.getElementById('repassword');
    let view = document.getElementById('icont');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute("type","text");
        view.setAttribute("class", "fa fa-eye icon");
    }
    else {
        input.setAttribute("type","password"); view.setAttribute("class", "fa fa-eye-slash icon");
    }
}

// Правильность подтверждения пароля

function checkPasswordMatch () {
    var password = document.getElementById('password');
    var repassword = document.getElementById('repassword');
    if( password.value != repassword.value || repassword.value === '') {
        repassword.style.backgroundColor = "#ff8cb2";
        repassword.removeAttribute("onchange");
        repassword.setAttribute("oninput","checkPasswordMatch()");
        r=0;
        change__all();
        document.getElementById('btn').setAttribute('disabled','');
        document.getElementById('span__repassword').setAttribute('class', 'opacActivity err__spanity');
    }
    else {
        repassword.style.backgroundColor = "#0F0F41";
        r=14.2;
        change__all();
        document.getElementById('btn').removeAttribute('disabled');
        document.getElementById('span__repassword').setAttribute('class', 'opacNullity err__spanity');
    }
}
        

        
let z=0;
let i=0;
function change_radio_to_zak() {
    z=14.2; i=0;
    document.getElementById('typ__span').setAttribute('class', 'err__spanity opacNullity');
    change__all();
}

function change_radio_to_isp() {
    i=14.2; z=0;
    document.getElementById('typ__span').setAttribute('class', 'err__spanity opacNullity');
    change__all();
}

// Процентное заполнение кнопки "Зарегистрироваться"

function change__all()
 {
    let pass = document.getElementById("password").value;
    pass?p=14.2:p=0;
     
     
     k = n+e+z+i+l+p+r+c;
    animateBtn(Math.round(k*10)/10);
       
     if(k==100) {
         
         btn.setAttribute('type','submit');
         
         div_btn.setAttribute('class','btn filled');
         btn.setAttribute('class','btn__submit');
     }
     
}
    
// Ограничение кнопки Зарегистрироваться

function btn_check () {
    let div_btn = document.getElementById('div_btn');
     let btn = document.getElementById('btn');
     if(k==100) {
         
         btn.setAttribute('type','submit');
         
         div_btn.setAttribute('class','btn');
         btn.setAttribute('class','btn__submit');
     }
     else {
         change__name();
         validateEmail();
         change__login();
         checkPassword();
         checkPasswordMatch ();
         if(!type) {
             document.getElementById('typ__span').setAttribute('class', 'err__spanity opacActivity');
             
         }
        div_btn.setAttribute('class', 'btn btn-disabled');
        btn.setAttribute('class','btn__submit disabled');
     }
}


// Анимация для заполнения
let end=0; 

function animateBtn(n) {
    const g = setInterval(
        function()
            {
                
                if(end<n){
                    end+=0.1;
                    let btn_div = document.getElementById("btn__div");
                    btn_div.style.width = Math.round(end*10)/10+"%";

                    if((Math.round(end*10)/10)===n) 
                    {
                        clearInterval(g);
                    }
                    console.log('asd')
                }
                else if(end>n) {
                    console.log('fsdsf')
                     end-=0.1;
                    let btn_div = document.getElementById("btn__div");
                    btn_div.style.width = Math.round(end*10)/10+"%";

                    if((Math.round(end*10)/10)===n) 
                    {
                        clearInterval(g);
                    }
                }
                else {
                   clearInterval(g);
                }
             }
        ,5);
}


// ===================++++++++++++++++++++++++

const showCountries = (iteam) => {
    const list = document.querySelectorAll(iteam);

    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', () => {
            activeList(i)
        })
    }

    function activeList(index) {
        if(list[index].classList.contains('activeList') === true){
            list[index].classList.remove('activeList');
            list[index].nextElementSibling.classList.remove('activeSublist');

            setTimeout(() => {
                list[index].nextElementSibling.style.display = 'none'
            }, 300)
        }else{
            console.log('dgfhg')
            for(let i = 0; i < list.length; i++){
                list[i].classList.remove('activeList');
                list[i].nextElementSibling.classList.remove('activeSublist');
            }
            list[index].classList.add('activeList');
            list[index].nextElementSibling.style.display = "block";

            setTimeout(() => {
                list[index].nextElementSibling.classList.add('activeSublist')
            }, 10)

        }
    }

    function addCountries (iteam) {
        const listBlock = document.querySelector(iteam)
        for(let i = 0; i < contries.length; i++){
            let div = document.createElement('div');
            div.classList.add('countryListIteam');
            div.textContent = contries[i].contriename;
            listBlock.append(div)
            div.addEventListener('click', () => {
              changeCountry(contries[i].cites, div)
            })
        }
    }
    function changeCountry(arr,iteam) {
        iteam.parentElement.previousElementSibling.querySelector('span').textContent = iteam.textContent;
        activeList(0);
        c = 14,2;
        change__all();
        document.querySelector('.countryFormBlock .err__spanity').setAttribute('class', 'err__spanity opacNullity');
    }
    addCountries('.countryFormList')
}

showCountries('.contryFormBtn');


/////////////////////// useredit password //////////////////////////

let userInput = document.getElementById('userPassword');
let viewer = document.getElementById('editPassword');
let done = document.getElementById('done');
function changeToPass() {
    if(userInput.getAttribute('type') == 'password') {
        userInput.setAttribute("type","text");
        viewer.style.display = 'none';
        done.style.display = 'block';
    }
}
function changedPass() {
    if(userInput.getAttribute('type') == 'text') {
        userInput.setAttribute("type","password");
        viewer.style.display = 'block';
        done.style.display = 'none';
    }
}


/* ---------------------- users ------------------------- */