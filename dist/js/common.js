$(document).ready(function() {

	// open menu
	$(".sandwich-wrap").click(function() {
	  $(".sandwich").toggleClass("active");
	  if ($(".main-menu").is(":hidden")) {
	  	$(".main-menu").fadeIn(600);
	  } else {
	  	$(".main-menu").fadeOut(600);
	  };  
	});

	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: ['<i class="fa fa-chevron-left fa-2x" aria-hidden="false"></i>', '<i class="fa fa-chevron-right fa-2x" aria-hidden="false"></i>']
	});

	function widthDetect() {
		$('.owl-stage').css('width', $(window).width());
	};
	$(window).resize(function() {
		widthDetect();
	});

	$('.popup-with-form, .popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	// open items
	$('.item-link').click(function(event) {
		event.preventDefault();
		$('.item-link').removeClass('active');
		if ($(this).next().is(':hidden')) {
			$(this).addClass('active');
			$(this).next().slideDown(600);
		} else {
			$(this).removeClass('active');
			$(this).next().slideUp(600);
		}
	});
	$('.sub-item a').click(function(event) {
		event.preventDefault();
		$('.sub-item a').removeClass('active');
		$(this).addClass('active');
	});

	// capacity price
	function capacityPrice(item) {
		for (var i = 0; i < item.length; i++) {
			if ( $(item).eq(i).text().length == 4 )
				$(item).eq(i).text( $(item).eq(i).text().slice(0, 1) + ' ' + $(item).eq(i).text().slice(1) );
			if ( $(item).eq(i).text().length == 5 )
				$(item).eq(i).text( $(item).eq(i).text().slice(0, 2) + ' ' + $(item).eq(i).text().slice(2) );
		};	
	};
	capacityPrice('.product-price span');

// contact-form script
	$('form').validate({
		messages: {
    name: "Поле обязательно для заполнения",
    email: {
      required: "Поле обязательно для заполнения",
      email: "Поле должно быть заполнено в формате: name@domain.com"
    },
    phone: "Поле обязательно для заполнения"
  	},
  	errorClass: 'error',
  	focusCleanup: true,
  	focusInvalid: false
	});

	// pagination
  $('.pagination a').click(function(event) {
  	event.preventDefault();
  	$('.pagination a').removeClass('active');
  	$(this).addClass('active');
  });


//end brackets
});













