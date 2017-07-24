(function($) {

	$(document).ready(function() {
		respond();
		aboutButton();
		instaFeed();
		lightBox();
		smoothScroll();
	});

	$(window).resize(function() {
		respond();
	});

	$(document).load(function() {

	});

	function respond() {
		$('.hero').height($(window).innerHeight());
		$('.leaves-container').height($('.gallery-title-container').height());
	}

	function instaFeed() {
		var feed = new Instafeed({
			get: 'tagged',
			tagName: 'lexvienrose',
			clientId: 'd037f1f338fc41dd9cdb2e196e2802ef',
			limit: '40',
			resolution: 'standard_resolution',
			template: '<a href="{{link}}" class="instapics"><img src="{{image}}" /></a>'
		});
		feed.run();
	}

	function aboutButton() {
		$('.the-groom button, .the-bride button').click(function() {
			$('section.about-us').removeClass('transition-delay');
			$(this).parents('.about-us').addClass('toTop');
		})

		$('.the-groom button').click(function() {
			$('.the-groom-info').removeClass('fadeOutRight');
			$('.the-groom-info').addClass('animated fadeInRight delay');
			$('.the-bride button').hide();
		})

		$('.the-bride button').click(function() {
			$('.the-bride-info').removeClass('fadeOutLeft');
			$('.the-bride-info').addClass('animated fadeInLeft delay');
			$('.the-groom button').hide();
		})

		$('.close').click(function() {
			$('section.about-us').removeClass('toTop');
			$('section.about-us').addClass('transition-delay');
		})

		$('.the-groom-info .close').click(function() {
			$('.the-groom-info').removeClass('fadeInRight delay');
			$('.the-groom-info').addClass('fadeOutRight');
			$('.the-bride button').show();
		})

		$('.the-bride-info .close').click(function() {
			$('.the-bride-info').removeClass('fadeInLeft delay');
			$('.the-bride-info').addClass('fadeOutLeft');
			$('.the-groom button').show();
		})
	}

	function lightBox() {
		 lightbox.option({
		 	alwaysShowNavOnTouchDevices: true,
		 	positionFromTop: 100,
		 	showImageNumberLabel: false
    	});
	}

	function smoothScroll() {
		$('#main-nav a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
		        || location.hostname == this.hostname) {

		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		           if (target.length) {
		             $('html,body').animate({
		                 scrollTop: target.offset().top
		            }, 1000);
		            return false;
		        }
		    }
		});
	}

} (jQuery));