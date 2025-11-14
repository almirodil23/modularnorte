$(document).ready(function() {    

     //Ventana Completa	
	redimension();
	$( window ).resize(function() {
		redimension();
	});
    
	function redimension(){
		var height = $(window).height();
		$('#slide_home').height(height);	
        
        $('.pagina_con_fragmento_fijo').css('min-height', height);
        $('.pagina_con_fragmento_fijo .fragmento_fijo').height(height);	;
	}
    

    
//Carruseles Home
$('.carrusel_standard').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplayTimeout:3000,
    autoplaySpeed:1500,
    navSpeed:1500,
    autoplay:true,
    dotsSpeed:1500,
    navText: ["<span class='icon icon-arrow-left7'></span>","<span class='icon icon-arrow-right7'></span>"],
    responsive:{
        0:{
            items:1,
            margin:10,
        },
        600:{
            items:1,
            margin:10,
        },
        768:{
            items:2,
            margin:15,
        },
        991:{
            items:3,
            margin:20,
        },
        1400:{
            items:4,
            margin:20,
        },
        1600:{
            margin:20,
            items:4,
        }
    }
})
    
    //Carruseles Opiniones
$('.carrusel_opiniones').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    autoplayTimeout:4000,
    autoplaySpeed:3000,
    navSpeed:2000,
    autoplay:true,
    dotsSpeed:2000,
    navText: ["<span class='icon icon-arrow-left7'></span>","<span class='icon icon-arrow-right7'></span>"],
    items:1,
    margin:10
})
    
//MENU FIJO SCROLL
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 1) {
        $('#header').addClass("fixed-top");
        // add padding top to show content behind navbar
        $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
      }else{
        $('#header').removeClass("fixed-top");
         // remove padding top from body
        $('body').css('padding-top', '0');
      }   
  });
}

//SIDEBAR FIJO AL HACER SCROLL 
$(".sidebar_blog").sticky({
    topSpacing:35,
    getWidthFrom:false,
    widthFromWrapper:true,
    bottomSpacing:230,
    responsiveWidth:true,
});
    


//LIMITAR EL NÚMERO DE CARACTERES 

$('.ficha_blog p').ellipsis(	
{lines: 6, responsive: true }
);

$('.sidebar_blog p').ellipsis(	
{lines: 2, responsive: true }
);
    
//Menú Lateral 
$('.boton_menu a').on('click', function(){
    $('#menu_lateral').toggleClass('abierto');
    $('#header').toggleClass('abierto');
    $('#detector_click').toggleClass('abierto');
});
    
  //AÑADIR CLASE AL HACER SCROLL   
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".boton_flotante").addClass("entra");
        $(".boton_menu").addClass("entra");
    } else {
        $(".boton_flotante").removeClass("entra");
        $(".boton_menu").removeClass("entra");
    }
  });
	
}); 