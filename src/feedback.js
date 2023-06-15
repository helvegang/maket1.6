var feedback = document.getElementById('modal-feedback');
var btnfeed = document.querySelectorAll('.modal-feedback-btn');
var closefeed = document.getElementById('modal-feedback-close');
var backgroundfeed = document.querySelector('.feedback__background');

btnfeed.forEach(element => element.onclick = function () {
    feedback.classList.add('feedback-open');
}
)

closefeed.onclick = function () {
    feedback.classList.toggle('feedback-open');
}

backgroundfeed.onclick = function(event) {
    if ((event.target == backgroundfeed)) {
        feedback.classList.remove('feedback-open');
    }
};
