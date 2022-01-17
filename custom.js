/*
	Template Name: News247 - News Magazine Newspaper HTML5 Template
	Author: Tripples
	Author URI: https://themeforest.net/user/tripples
	Description: News247 - News Magazine Newspaper HTML5 Template
	Version: 1.0

	1. Fixed header
	2. Main slideshow
	3. Site search
	4. Owl Carousel
	5. Video popup
	6. Contact form
	7. Back to top
*/

jQuery(function($) {
  "use strict";


	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- 


	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */

	jQuery(".nav.navbar-nav li a").on("click", function() { 
		jQuery(this).parent("li").find(".dropdown-menu").slideToggle();
		jQuery(this).find("li i").toggleClass("fa-angle-down fa-angle-up");
	});


	$('.nav-tabs[data-toggle="tab-hover"] > li > a').hover( function(){
    	$(this).tab('show');
	});

	/* ----------------------------------------------------------- */
  	/*  Site search
  	/* ----------------------------------------------------------- */

	$('.nav-search').on('click', function () {
		 $('.search-block').fadeIn(350);
	});

	$('.search-close').on('click', function(){
		$('.search-block').fadeOut(350);
	});

	// var h_footer_main = parseInt($('#footer-main-id').height())+75;
	// // console.log(h_footer_main);
	// $('#footer').css('min-height', h_footer_main);

  	/* ----------------------------------------------------------- */
  	/*  Owl Carousel
  	/* ----------------------------------------------------------- */

  	//Trending slide

  	$(".trending-slide").owlCarousel({

			loop:true,
			animateIn: 'fadeIn',
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		//Latest news slide

		$(".latest-news-slide").owlCarousel({

			loop:true,
			animateIn: 'fadeInLeft',
			autoplay:true,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 4,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:4
			  }
			}

		});

		//Latest news slide

		//Latest news slide

		$(".latest-epaper-slide").owlCarousel({

			loop:true,
			animateIn: 'fadeInLeft',
			autoplay:true,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 4,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:4
			  }
			}

		});

		//Latest news slide


  	//Featured slide

		$(".featured-slider").owlCarousel({

			loop:true,
			animateOut: 'fadeOut',
			autoplay:false,
			autoplayHoverPause:true,
			nav:true,
			margin:0,
			dots:false,
			mouseDrag:true,
			touchDrag:true,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		//Latest news slide

		$(".photo-gallery-single").owlCarousel({

			loop:true,
			animateIn: 'fadeInLeft',
			autoplay:true,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:true,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 8,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		$(".artist-photo-gallery-single").owlCarousel({

			loop:true,
			animateIn: 'fadeInLeft',
			autoplay:true,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:true,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 8,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		//Latest news slide


		//Latest news slide

		$(".more-news-slide").owlCarousel({

			loop:false,
			autoplay:false,
			autoplayHoverPause:true,
			nav:false,
			margin:30,
			dots:true,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		$(".post-slide").owlCarousel({

			loop:true,
			animateOut: 'fadeOut',
			autoplay:false,
			autoplayHoverPause:true,
			nav:true,
			margin:30,
			dots:false,
			mouseDrag:false,
			slideSpeed:500,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			items : 1,
			responsive:{
			  0:{
					items:1
			  },
			  600:{
					items:1
			  }
			}

		});

		

	
	/* ----------------------------------------------------------- */
	/*  Contact form
	/* ----------------------------------------------------------- */

	$('#contact-form').submit(function(){

		var $form = $(this),
			$error = $form.find('.error-container'),
			action  = $form.attr('action');

		$error.slideUp(750, function() {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function(data){
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') != null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});

		return false;

	});


	/* ----------------------------------------------------------- */
	/*  Back to top
	/* ----------------------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				 $('#back-to-top').fadeIn();
			} else {
				 $('#back-to-top').fadeOut();
			}

			// console.log($(this).scrollTop());

			// Get the navbar
			var navbar = document.getElementById("main-nav-bar");

			// var sticky = navbar.scrollTop();

			var sticky = document.getElementById("header").offsetHeight;

			// var sticky = $('#header').offsetHeight;

			// console.log(sticky);

			// console.log(window.pageYOffset);

			// Get the navbar
			// Get the offset position of the navbar

			if (window.pageYOffset >= sticky) {
				$("#main-nav-bar").addClass("sticky");
			} else {
				$("#main-nav-bar").removeClass("sticky");
			}
		});

		// scroll body to 0px on click
		$('#back-to-top').on('click', function () {
			 $('#back-to-top').tooltip('hide');
			 $('body,html').animate({
				  scrollTop: 0
			 }, 800);
			 return false;
		});
		
		$('#back-to-top').tooltip('hide');

		

			
		var height_all = $('body>.body-inner').height();
		// console.log(height_all);

		height_all = (height_all > 400)?height_all:400;

		$('#sticky_block').css('height', height_all+'px');

		$('#close_this').on('click', function(ev){
			ev.preventDefault();
			$('#sticky_block').css('display', 'none');

			$('.nav_container').removeClass('m0');
		});

		$('#a_sticky_block').on('click', function(ev){
			ev.preventDefault();

			var height_all = $('body>.body-inner').height();
			console.log(height_all);

			height_all = (height_all > 400)?height_all:400;

			$('#sticky_block').css('height', height_all+'px');
			
			var height_all = $(document).height();
			console.log(height_all);
			
			var this_href = $(this).attr('href');
			console.log(this_href);
			$(this_href).toggle();

			$('.nav_container').toggleClass('m0');

			// $('.sticky>.container').css('margin', '0');

		});

	$('.youtube_video_link').on('click', function(ev){
		ev.preventDefault();

		// alert('asdf');

		$('.youtube_videolist .video-grid').removeClass('active');

		$(this).parents('.video-grid').addClass('active');

		// var href_value = $(this).attr("href");
		// var id_value =  $(this).attr("id");
		var title_value = $(this).attr("title");
		var href_value = $(this).attr("href");

		// console.log(href_value+id_value+title_value);

		// console.log(title_value);

		// $('#iframe_id img').attr('src', 'https://img.youtube.com/vi/'+title_value+'/hqdefault.jpg');
		// $('#iframe_id img').attr('title', title_value);
		// $('#iframe_id img').attr('alt', title_value);

		$('.iframe_container').html('<a href="'+href_value+'" target="_blank"><img src="https://img.youtube.com/vi/'+title_value+'/hqdefault.jpg" class="img-responsive responsive-iframe" title="'+title_value+'" alt="'+title_value+'"><i class="fa fa-youtube-play fa-4x" aria-hidden="true"></i></a>');

		// $('#youtube_modal_body').html('<iframe class="responsive-iframe" src="https://www.youtube.com/embed/'+title_value+'?autoplay=1" allowfullscreen></iframe>');

		// $('#iframe_id').html('<iframe class="responsive-iframe" src="https://www.youtube.com/embed/'+href_value+'"></iframe>');

		// iframe_id">
		// 									<iframe class="responsive-iframe" src="https://www.youtube.com/embed/<?php // echo $youtube_id; ?>"></iframe>



		// console.log(href_value);

		// alert(href_value);

		$('.youtube_video_link').on('click', function(ev){
			ev.preventDefault();

			$('.youtube_videolist .video-grid').removeClass('active');

			$(this).parents('.video-grid').addClass('active');

			var title_value = $(this).attr("title");
			var href_value = $(this).attr("href");

			$('.iframe_container').html('<a href="'+href_value+'" target="_blank"><img src="https://img.youtube.com/vi/'+title_value+'/hqdefault.jpg" class="img-responsive responsive-iframe" title="'+title_value+'" alt="'+title_value+'"><i class="fa fa-youtube-play fa-4x" aria-hidden="true"></i></a>');

		});

	});

});
