
$(document).ready(function(){
	let winW;

	$(window).resize(function(){
		winW=$(window).innerWidth();
		if(winW > 790){
			menuClose();
		}
	});
	function menuClose(){
		$("#open_tab").removeClass("active");
		$(".open_menu").removeClass("active");
		$("body").removeClass("fixed");
	}

	// #header .menu 높이변화
	$("#gnb > ul > li").hover(function(){
		$("#header .menu").addClass("active");
	},
	function(){
		$("#header .menu").removeClass("active");
	}
	);
	// #gnb active효과, focus잡기
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});
	$("#gnb > ul > li:first-child > a").focusin(function(){
		$("#header .menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
		$("#header .menu").removeClass("active");
	});

	// #category1 .menu li active효과
	$("#category1 .content_top .menu li").click(function(e){
		e.preventDefault();  // a태그 무효화
		$("#category1 .content_top .menu li").removeClass("active");
		$(this).addClass("active");
	});

	//  #category1 .omuto_menu li on효과
	$("#category1 .omuto_menu li a").hover(function(){
		$(this).addClass("on");
	},function(){
		$("#category1 .omuto_menu li a").removeClass("on");
	})
	$("#category1 .omuto_menu li a").focusin(function(){
		$(this).addClass("on");
	});
	$("#category1 .omuto_menu li a").focusout(function(){
		$("#category1 .omuto_menu li a").removeClass("on");
	});

	// OPEN_MENU 
	$(".open_menu .menu_inner > ul > li").hover(function(){
		$(this).find("ul").stop().slideDown(300);
	},function(){
		$(this).find("ul").stop().slideUp(300);
	});

	$("#open_tab a").click(function(e){
		e.preventDefault();
		if($(".open_menu").hasClass("active") == false){
			$("#open_tab").addClass("active");
			$(".open_menu").addClass("active");
			$("body").addClass("fixed");
		}
		else{
			menuClose();
		}
	});

	var mainSwiper = new Swiper(".mainSwiper", {
		speed: 2000,
		loop: true,
		effect: "fade",
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: true
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
		  el: ".swiper-pagination",
		},
	  });
});
