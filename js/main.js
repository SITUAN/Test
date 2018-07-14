jQuery(document).ready(function($){

	 // modal social
    $(".show-mb").click(function(){
        $(".menu").addClass("menushow");
        $(this).removeClass("menu").addClass("menushow");
    });

    // hiden modal social
    $(".menu_close").click(function(){
        $(".menu").removeClass("menushow");
    });
    
	 $('.slide').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        },
	        1200:{
	            items:1
	        }
	    },
	    navText: ["<i class='left-icon-m'></i>","<i class='right-icon-m'></i>"],
	});
	
	$('.sli-blog').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:6
	        },
	        1200:{
	            items:6
	        }
	    },
	    navText: ["<i class='left-icon-m sub-slider'></i>","<i class='right-icon-m r-sub-slider'></i>"],
	});

	$('.sli-hieu').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    dots: false,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:6
	        },
	        1200:{
	            items:6
	        }
	    },
	    navText: ["<i class='left-icon-m sub-slider'></i>","<i class='right-icon-m r-sub-slider'></i>"],
	});
});
