// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

import mmenu from 'mmenu-js'
import slick from 'slick-carousel'

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
 
	// //  Slick slider
	//  $('.slider').slick({
	// 	 arrows: true,
	// 	 nextArrow: '<div class="slider-arrow slider-arrow_next"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.97461 7.12305L2.29102 12.8066C2.1543 12.9434 1.98828 13.0117 1.79297 13.0117C1.59766 13.0117 1.43164 12.9434 1.29492 12.8066L0.65039 12.1621C0.513672 12.0254 0.445312 11.8594 0.445312 11.6641C0.425781 11.4688 0.484375 11.3027 0.621093 11.166L5.16211 6.625L0.621093 2.08399C0.484374 1.94727 0.42578 1.78125 0.445311 1.58594C0.445311 1.39063 0.513671 1.22461 0.650389 1.08789L1.29492 0.44336C1.43164 0.306641 1.59765 0.238282 1.79297 0.238282C1.98828 0.238282 2.1543 0.306641 2.29101 0.44336L7.97461 6.12695C8.13086 6.26367 8.20898 6.42969 8.20898 6.625C8.20898 6.82031 8.13086 6.98633 7.97461 7.12305Z" fill="white"/></svg></div>',
	// 	 prevArrow: '<div class="slider-arrow slider-arrow_prev"><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.02539 6.87695L6.70898 1.19336C6.8457 1.05664 7.01172 0.988281 7.20703 0.988281C7.40234 0.988281 7.56836 1.05664 7.70508 1.19336L8.34961 1.83789C8.48633 1.97461 8.55469 2.14062 8.55469 2.33594C8.57422 2.53125 8.51562 2.69727 8.37891 2.83398L3.83789 7.375L8.37891 11.916C8.51562 12.0527 8.57422 12.2188 8.55469 12.4141C8.55469 12.6094 8.48633 12.7754 8.34961 12.9121L7.70508 13.5566C7.56836 13.6934 7.40234 13.7617 7.20703 13.7617C7.01172 13.7617 6.8457 13.6934 6.70898 13.5566L1.02539 7.87305C0.869141 7.73633 0.791016 7.57031 0.791016 7.375C0.791016 7.17969 0.869141 7.01367 1.02539 6.87695Z" fill="white"/></svg></div>'
	//  })

	// // Product card carousel
	// $('.product-carousel-for').slick({
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	arrows: false,
	// 	fade: true,
	// 	asNavFor: '.product-carousel-nav'
	// });
	// $('.product-carousel-nav').slick({
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	asNavFor: '.product-carousel-for',
	// 	dots: false,
	// 	arrows: false,
	// 	centerMode: false,
	// 	focusOnSelect: true
	// });	

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
