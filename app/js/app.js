// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

import mmenu from 'mmenu-js'
// import Swiper JS
import Swiper from 'swiper';
import SwiperCore, { Thumbs } from 'swiper/core';
SwiperCore.use([Thumbs]);



// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Mmenu
	new Mmenu( "#my-menu", {
		"extensions": [
		   "pagedim-black"
		],
		"navbar": {
			"title": "Меню"
		}
	 });
 
	 var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });

	// Product card amount change
	function setQuality () {
		let plus = document.querySelector('#plus'),
			minus = document.querySelector('#minus'),
			amount = document.querySelector('.amount_input'),
			x = parseInt(amount.value);

		plus.addEventListener('click', function () {
			x = x + 1;
			amount.value = x;
		});
	
		minus.addEventListener('click', function () {
			x = x - 1;
			if (x < 1) {
				x = 1;
			}
			amount.value = x;
		});
	}

	let productPage = document.querySelector('.product-page');

	if(productPage) {
		setQuality()
	}

	//  Product card border
	let productCard = document.querySelectorAll('.product-card'),
		lastPrdocut1 = productCard.length - 1,
		lastProduct2 = productCard.length - 2;

	function removeLastProductCardBorder () {
		productCard[lastPrdocut1].style.border = 'none'
		productCard[lastProduct2].style.border = 'none'
	}

	function removeLastProductCardBorderSmallScreen () {
		productCard[lastPrdocut1].style.border = 'none'
	}

	// if(innerWidth > 986 && productCard) {
	// 	removeLastProductCardBorder()
	// } else {
	// 	removeLastProductCardBorderSmallScreen()
	// }

})
