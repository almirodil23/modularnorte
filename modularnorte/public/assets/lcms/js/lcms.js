
$(document).ready(function(){
    
    
    //DETECTOR DE CLICK    
     //Ventana Completa	
	redimension();
	$( window ).resize(function() {
		redimension();
	});
    
	function redimension(){
		var height = $(window).height();
		$('#detector_click').height(height);			
	}
    

	
	// MENU: Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });

    // MENU:  make it as accordion for smaller screens
    if ($(window).width() < 992) {
	  	$('.dropdown-menu a').click(function(e){
	  		//e.preventDefault();
	        if($(this).next('.submenu').length){
	       	$(this).next('.submenu').toggle();
	        }
	        $('.dropdown').on('hide.bs.dropdown', function () {
			  $(this).find('.submenu').hide();
			})
	  	});
	}

    
    //Cesta Mini	
    $("#top-cart a").click(function(){
        $("#top-cart").toggleClass("top-cart-open");
        $("#detector_click").toggleClass("abierto");
    });
    
    $("#top-cart.top-cart-open a").click(function() {
    $("#top-cart").removeClass("top-cart-open");
    });
    
    $("#detector_click").click(function() {
    $("#top-cart").removeClass("top-cart-open");
    $(this).removeClass("abierto");
    $('#menu_lateral').removeClass("abierto");
    $('#header').removeClass("abierto");
    });
	
});

    //LIGHT BOX
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    //GO TO TOP
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#back2Top').fadeIn();
        } else {
            $('#back2Top').fadeOut();
        }
    });
    $(document).ready(function() {
        $("#back2Top").click(function(event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

    });

//ANIMACION SCROLL
  $('a.anima[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 2000);
    return false;
  });




