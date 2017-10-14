$(document).ready(function() {

	$("#owl-range").owlCarousel({
		items: 4,
		responsive: {
			0: {
				items: 2,
				margin: 5
			},
			480: {
				items: 3,
				margin: 10
			},
			962: {
				items: 4
			}
		},
		margin: 30,
		nav: true,
		loop: true
	});

})