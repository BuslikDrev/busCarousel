/*  Аўтар: "БуслікДрэў" ( http://buslikdrev.by/ )
	© 2016-2020; BuslikDrev - Усе правы захаваныя. 
	busCarousel v0.1.0 */

if (Element.prototype.busCarousel === undefined) {
	Element.prototype.busCarousel = function(options) {
		var bus_options_default = {
			items: 6,
			itemsCustom: false,
			itemsDesktop: [1199, 4],
			itemsDesktopSmall: [979, 3],
			itemsTablet: [768, 2],
			itemsTabletSmall: false,
			itemsMobile: [479, 1],
			singleItem: false,
			itemsScaleUp: false,
			slideSpeed: 200,
			paginationSpeed: 800,
			rewindSpeed: 1000,
			autoPlay: false,
			stopOnHover: false,
			navigation: false,
			navigationText: ["prev", "next"],
			rewindNav: true,
			scrollPerPage: false,
			pagination: true,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate: 200,
			baseClass: "owl-carousel",
			theme: "owl-theme",
			lazyLoad: false,
			lazyFollow: true,
			lazyEffect: "fade",
			autoHeight: false,
			jsonPath: false,
			jsonSuccess: false,
			dragBeforeAnimFinish: true,
			mouseDrag: true,
			touchDrag: true,
			addClassActive: false,
			transitionStyle: false,
			beforeUpdate: false,
			afterUpdate: false,
			beforeInit: false,
			afterInit: false,
			beforeMove: false,
			afterMove: false,
			afterAction: false,
			startDragging: false,
			afterLazyLoad: false
		};

		if (typeof options === 'undefined') {
			options = bus_options_default;
		} else {
			for (var i in options) {
				if (typeof bus_options_default[i] !== 'undefined') {
					bus_options_default[i] = options[i];
				}
			}

			options = bus_options_default;
		}

		//console.log(this);
		//console.log(options);
	}

	window.addEventListener('DOMContentLoaded', function() {
		if (typeof busCarousel === 'object') {
			for (var i in busCarousel) {
				console.log(busCarousel[i]);
				if (busCarousel[i]['elem'] != null) {
					busCarousel[i]['elem'].busCarousel(busCarousel[i]);
				}
			}
		}
	});

	var busCarousel = {};
}
