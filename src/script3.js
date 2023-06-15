new Swiper('.prices-slider__container', {
    pagination: {
        el: '.prices-slider__pagination',
        clickable: true
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        sensivity: 1,
        eventsTarget: ".prices-slider__container"
    },
    slidesPerView: 'auto',
    spaceBetween: 16,
    slideClass: 'prices-slider__card',
});





/* new Swiper('.swiper-container', {
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
        eventsTarget: ".swiper-container"
    },
    slidesPerView: 'auto',
    spaceBetween: 16
}


); */

/* 
const slider3 = document.querySelector('.prices-slider__container');


let mySwiper3;

function mobileSlider3() {
	if (window.innerWidth <= 767 && slider3.dataset.mobile == "false") {
		mySwiper3 = new Swiper(slider3, {
            pagination: {
                el: '.prices-slider__pagination',
                clickable: true
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            mousewheel: {
                sensivity: 1,
                eventsTarget: ".prices-slider__container"
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'swiper-slide',
        });

		
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
 */