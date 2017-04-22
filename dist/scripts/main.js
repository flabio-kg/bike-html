'use strict';

$(document).ready(function () {

	window.onload = function () {
		$('.preloader').fadeOut('slow', function () {
			$(this).remove();
		});
		$('.-title').show(600);
	};

	$('.js-phone').mask('+7 (999) 999-99-99');

	$('.popup-link').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: '<img src=\'images/logo.png\' alt=\'\' />'
		},
		extensions: ['fx-menu-slide', 'fx-listitems-slide', 'border-full', 'pagedim-black'],
		offCanvas: {
			'position': 'right'
		},
		counters: true
	});

	var $icon = $('.js-navtrigger');
	var API = $menu.data('mmenu');

	$icon.on('click', function () {
		API.open();
	});

	API.bind('open:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});

	API.bind('close:start', function ($panel) {
		$('.js-navtrigger').toggleClass('-active');
	});

	if (Modernizr.mq('(max-width: 767px)')) {
		var init = function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [53.714580, 91.422524],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([53.714280, 91.422524], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Москва ул. Пушкина дом. Колотушкина 53'
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
			API.close();
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return true;
				}
			}
		});
		var myMap, myPlacemark;

		ymaps.ready(init);
		;
	} else {
		var _init = function _init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [53.714380, 91.420524],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([53.714380, 91.422524], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Москва ул. Пушкина дом. Колотушкина 53'
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};

		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return true;
				}
			}
		});
		var myMap, myPlacemark;

		ymaps.ready(_init);
		;
	}

	$('.first').owlCarousel({
		items: 1,
		loop: true,
		video: true,
		lazyLoad: true,
		videoWidth: 700,
		videoHeight: 424,
		dots: false,
		pullDrag: true,
		autoWidth: true,
		center: true,
		mouseDrag: false,
		animateIn: true,
		dotsContainer: '.videos__thumbnail',
		merge: false,
		responsive: {
			0: {
				items: 1,
				videoWidth: 300,
				videoHeight: 200,
				mouseDrag: false
			},
			375: {
				items: 1,
				videoWidth: 320,
				videoHeight: 200,
				mouseDrag: false
			},
			425: {
				items: 1,
				videoWidth: 350,
				videoHeight: 200,
				mouseDrag: false
			},
			768: {
				items: 1,
				videoWidth: 700,
				videoHeight: 424
			}

		}
	});

	$('.second').owlCarousel({
		items: 1,
		loop: true,
		lazyLoad: true,
		dots: true,
		nav: true,
		center: true,
		navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']

	});

	$('.third').owlCarousel({
		items: 2,
		margin: 0,
		loop: true,
		dots: true,
		nav: true,
		navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2,
				margin: 15
			}

		}
	});

	$('.forth').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		center: true,
		navText: ['<i class=" icon-arrow-left"></i>', '<i class=" icon-arrow-right"></i>'],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

	$('.click').click(function () {
		$('.one').toggleClass('active');
	});

	$('.js-amo').submit(function () {
		var th = $(this);
		$.ajax({
			type: 'POST',
			url: 'handler.php',
			data: th.serialize()
		}).done(function () {
			$.magnificPopup.open({
				items: {
					src: '#submite',
					type: 'inline'
				},
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
			});
		});
		return false;
	});

	$(".js-mail").submit(function () {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function () {
			$.magnificPopup.open({
				items: {
					src: '#submite',
					type: 'inline'
				},
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>'
			});
		});
		return false;
	});
});
//# sourceMappingURL=main.js.map
