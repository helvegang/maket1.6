var call = document.getElementById('modal-call');
var btncall = document.querySelectorAll('.modal-call-btn');
var closecall = document.getElementById('modal-call-close');
var backgroundcall = document.querySelector('.call__background');

btncall.forEach(element => element.onclick = function () {
    call.classList.add('call-open');
}
)
closecall.onclick = function () {
    call.classList.remove('call-open');
}

backgroundcall.onclick = function(event) {
    if (event.target == backgroundcall) {
        call.classList.remove('call-open');
    }
};
