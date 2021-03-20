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
const showChat = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu_list');







// start chat
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
// End chat












let modals = document.querySelectorAll('.modal');
let cover = document.querySelector('.cover');
let deletePageBtn = document.querySelectorAll('.deletePage');
let templateShowBtn = document.querySelectorAll('.activate_templates');



CKEDITOR.replace('editor1');

CKEDITOR.replace('editor2');

let frames = {
    pagesList: document.querySelector('.pages_list'),
    addNewPage: document.querySelector('.add_new_page_frame'),
    editPage: document.querySelector('.edit_page_frame')
}
let activators = {
    addNewPage: document.querySelector('.add_new_page'),
    editPage: document.querySelectorAll('.editPage'),
    pagesList: document.querySelector('#pagesList')
}
let addingNewPage = {
    main: frames.addNewPage.querySelector('.main_container'),
    seo: frames.addNewPage.querySelector('.seo_container')
}
let editingPage = {
    main: frames.editPage.querySelector('.main_container'),
    seo: frames.editPage.querySelector('.seo_container')
}





let editPageComponent = {
    fileName: editingPage.main.querySelector('.file_name__input'),
    name: editingPage.main.querySelector('.file_title__input'),
}

let pages = document.querySelectorAll('.row');


function parseAllpages(pages) {
    let pageComponents = {};
    for (let i = 1; i < pages.length; i++) {
        pageComponents[`${pages[i].querySelector('.name').innerText}`] = {
            name: pages[i].querySelector('.name'),
            fileName: pages[i].querySelector('.file_name'),
            editBtn: pages[i].querySelector('.editPage')
        }
    }
    function filenameParser(name) {
        let temp = "";
        for (let i = 0; i < name.length; i++) {
            if (name[i] == '.') {
                return temp;
            }
            else {
                temp += name[i];
            }
        }
    }
    for (let i in pageComponents) {
        pageComponents[i].editBtn.addEventListener('click', () => {
            editPageComponent.fileName.value = filenameParser(pageComponents[i].fileName.innerText);
            editPageComponent.fileName.setAttribute('disabled', 'disabled');
            editPageComponent.name.value = pageComponents[i].name.innerText;
            editPageComponent.name.setAttribute('disabled', 'disabled');
        })
    }
}

parseAllpages(pages);





let backBtn = document.querySelectorAll('.back');

function templateShow(activator, tempBlocks) {
    activator.addEventListener('change', () => {
        if (activator.checked) {
            for (let i = 0; i < tempBlocks.length; i++) {
                tempBlocks[i].classList.add('display__block');
            }
        }
        else {
            for (let i = 0; i < tempBlocks.length; i++) {
                tempBlocks[i].classList.remove('display__block');
            }
        }
    })
}
templateShow(frames.addNewPage.querySelector('#activate_templates'), frames.addNewPage.querySelectorAll('.template_example'));
templateShow(frames.editPage.querySelector('#activate_templates_edit'), frames.editPage.querySelectorAll('.template_example'));

function backBtnSwitch(btns, frames, className) {
    for (let btn = 0; btn < btns.length; btn++) {
        btns[btn].addEventListener('click', () => {
            for (let frame in frames) {
                frames[frame].classList.remove(className);
            }
            frames.pagesList.classList.add(className);
        })
    }
}


function switchFrames(activators, frames, active) {
    for (let btn in activators) {
        if (btn == 'editPage') {
            for (let i = 0; i < activators[btn].length; i++) {
                activators[btn][i].addEventListener('click', () => {
                    for (let frame in frames) {
                        frames[frame].classList.remove(active)
                    }
                    frames.editPage.classList.add(active);
                })
            }
        }
        else {
            activators[btn].addEventListener('click', () => {
                for (let frame in frames) {
                    if (frames[frame].classList.contains(active) || frame) {
                        frames[frame].classList.remove(active)
                    }
                }
                frames[btn].classList.add(active);
            })
        }
    }
}
switchFrames(activators, frames, 'display__block');
backBtnSwitch(backBtn, frames, 'display__block')


let addPageInptuts = {
    title: frames.addNewPage.querySelector('.page_title'),
    keywords: frames.addNewPage.querySelector('.keywords'),
    discription: frames.addNewPage.querySelector('.page_discription')
}
let editPageInputs = {
    title: frames.editPage.querySelector('.page_title'),
    keywords: frames.editPage.querySelector('.keywords'),
    discription: frames.editPage.querySelector('.page_discription')
}

function insertTemplate(inputs, makroses) {
    let focusedEl;
    for (let input in inputs) {
        inputs[input].addEventListener('focus', () => {
            focusedEl = input;
        })
    }

    for (let i = 0; i < makroses.length; i++) {
        makroses[i].addEventListener('click', () => {
            if (focusedEl != undefined) {
                inputs[focusedEl].value += `{${makroses[i].innerText}}`;
            }
        })
    }
}

insertTemplate(addPageInptuts, frames.addNewPage.querySelectorAll('.makros'));
insertTemplate(editPageInputs, frames.editPage.querySelectorAll('.makros'));






function switchElements(els, active, activeBar, bars) {
    for (let i = 0; i < els.length; i++) {
        els[i].addEventListener('click', () => {
            for (let j = 0; j < els.length; j++) {
                if (els[j].classList.contains(active) && j != i) {
                    els[j].classList.remove(active);
                    if (j == 0) {
                        bars.main.classList.remove(activeBar);
                    } else {
                        bars.seo.classList.remove(activeBar);
                    }
                } else {
                    els[i].classList.add(active);
                    if (i == 0) {
                        bars.main.classList.add(activeBar);
                    } else {
                        bars.seo.classList.add(activeBar);
                    }
                }
            }
        })
    }
}


function keyModalShow(activator, modal) {
    let cover = document.querySelector('.cover');
    activator.addEventListener('click', () => {
        cover.classList.add('display__block');
        modal.classList.add('display__flex');
    })
}

function hideModal() {
    let modals = document.querySelectorAll('.modal');
    let cover = document.querySelector('.cover');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('display__flex');
        cover.classList.remove('display__block');
    }
}

function standartHideTriggers() {
    for (let i = 0; i < modals.length; i++) {
        modals[i].querySelector('.closeIcon').addEventListener('click', hideModal);
    }
    cover.addEventListener('click', hideModal);
}

switchElements(frames.addNewPage.querySelectorAll('.tab'), 'active_tab', 'display__block', addingNewPage);
switchElements(frames.editPage.querySelectorAll('.tab'), 'active_tab', 'display__block', editingPage);


for (let i = 0; i < deletePageBtn.length; i++) {
    keyModalShow(deletePageBtn[i], document.querySelector('.delete_page_confirmation'));
}
standartHideTriggers();

document.querySelector('.rejectBtn').addEventListener('click', hideModal);