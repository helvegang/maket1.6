const slider2 = document.querySelector('.types__container');


let mySwiper2;

function mobileSlider2() {
	if (window.innerWidth <= 767 && slider2.dataset.mobile == "false") {
		mySwiper2 = new Swiper(slider2, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            mousewheel: {
                sensivity: 1,
                eventsTarget: ".types__container"
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'swiper-slide',
        });

		slider2.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider2.dataset.mobile = 'false';
		if (slider2.classList.contains('types__container--init')) {
			mySwiper2.destroy();
		}
	}
}


window.addEventListener('resize', () => {
	mobileSlider2();
});



