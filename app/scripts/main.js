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
					// iconImageHref: 'images/marker.png',
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

  $('.first').owlCarousel({
   items: 1,
   loop:true,
   video:true,
   lazyLoad:true,
   videoWidth: 700,
   videoHeight: 424,
   dots: false,
   pullDrag: true,
   autoWidth: true,
   center: true,
   mouseDrag: false,
   animateIn: 'flipInX',
   animateOut: 'slideOutDown',
   dotsContainer: '._video__thumbnail',
   responsive:{
    0: {
      items: 1,
      videoWidth: 300,
      videoHeight: 200,
    },
    768: {
      items: 1,
      videoWidth: 700,
      videoHeight: 424,
    },

  }
});

  $('.second').owlCarousel({
   items: 1,
   loop:true,
   lazyLoad:true,
   dots: true,
   nav: true,
   center: true,
   animateIn: 'fadeIn',
   animateOut: 'slideOutDown',
   navText:['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],

 });

  $('.third').owlCarousel({
   items: 2,
   margin: 0,
   loop: true,
   dots: true,
   nav: true,
   navText:['<i class="icon-arrow-left"></i>','<i class="icon-arrow-right"></i>'],
   responsive:{
    0: {
      items: 1,
    },
    768: {
      items: 2,
      margin: 15
    },

  }
 });

  $('.click').click(function() {
    $('.one').toggleClass('active');
});

  // $("#tab li:eq(0) a").tab('show');

});
