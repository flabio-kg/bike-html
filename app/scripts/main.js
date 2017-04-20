$(document).ready(function() {

	$('.popup-link').magnificPopup({
		type:'inline',
		midClick: true
	});

	$('.header__menu ul').clone().appendTo('.mmenu-nav');

	var $menu = $('.mmenu-nav').mmenu({
		navbar: {
			title: '<img src=\'images/logo.png\' alt=\'\' />'
		},
		extensions: [
		'fx-menu-slide',
		'fx-listitems-slide',
		'border-full',
		'pagedim-black'

		],
		offCanvas: {
			'position': 'right'
		},
		counters: true
	});

	var $icon = $('.js-navtrigger');
	var API = $menu.data( 'mmenu' );

	$icon.on( 'click', function() {
		API.open();
	});

	API.bind( 'open:start', function( $panel ) {
		$('.js-navtrigger').toggleClass('-active');
	});

	API.bind( 'close:start', function( $panel ) {
		$('.js-navtrigger').toggleClass('-active');
	});

  if (Modernizr.mq('(max-width: 992px)')) {
		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
			API.close();
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-115
        }, 1000);
        return false;
      }
    }
  });
	} else {
		$('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top-73
        }, 1000);
        return false;
      }
    }
  });
	}

		if (Modernizr.mq('(max-width: 767px)')) {
		var myMap, myPlacemark;

		ymaps.ready(init);
		function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [91.412191,  53.705500],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([91.412191,  53.705500], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Москва ул. Пушкина дом. Колотушкина 53'
				}, {
					iconLayout: 'default#image',
					iconImageHref: 'images/marker.png',
					iconImageSize: [35, 55]
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};
	} else {
		var myMap, myPlacemark;

		ymaps.ready(init);
		function init(data) {
			$('#map').html('');
			myMap = new ymaps.Map('map', {
				controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
				center: [91.412191,  53.705500],
				behaviors: ['drag'],
				zoom: 17
			});

			if (!data.type) {
				myPlacemark = new ymaps.Placemark([91.412191,  53.705500], {
					balloonContentHeader: 'Freeway-bike.ru',
					balloonContentBody: 'Москва ул. Пушкина дом. Колотушкина 53'
				}, {
					iconLayout: 'default#image',
					// iconImageHref: 'images/marker.png',
					iconImageSize: [35, 55]
				});
				myMap.geoObjects.add(myPlacemark);
				return true;
			};
		};
	}
	
});
