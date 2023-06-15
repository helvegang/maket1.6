var menu = document.getElementById('modal-menu');
var btnmenu = document.getElementById('modal-menu-btn');
var closemenu = document.getElementById('modal-menu-close');
var backgroundmenu = document.querySelector('.popup__background');


btnmenu.onclick = function () {
    menu.classList.add('popup-open');
};
closemenu.onclick = function () {
    menu.classList.remove('popup-open');
}

backgroundmenu.onclick = function(event) {
    if (event.target == backgroundmenu) {
        menu.classList.remove('popup-open');
    }
};