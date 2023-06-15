const slider1 = document.querySelector('.brands__container');


let mySwiper1;

function mobileSlider1() {
	if (window.innerWidth <= 767 && slider1.dataset.mobile == "false") {
		mySwiper1 = new Swiper(slider1, {
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
                eventsTarget: ".brands__container"
            },
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'brands__slide',
        });

		slider1.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767) {
		slider1.dataset.mobile = 'false';
		if (slider1.classList.contains('brands__container--init')) {
			mySwiper1.destroy();
		}
	}
}


window.addEventListener('resize', () => {
	mobileSlider1();
});



