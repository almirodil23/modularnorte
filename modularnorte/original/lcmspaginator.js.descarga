var _lcms_cargador_ocupado=false;
jQuery(document).ready(function() {
		"use strict";

		var _lcms_win = $(window);

		// Si el ID _lcms_loadingOn tiene la clase loadAutomatico la carga es automatica
		if (jQuery("#_lcms_loadingOn.loadAutomatico").length) {
			_lcms_win.scroll(function() {
				if (_lcms_cumpleMotivoParaCargarDatos()) {
					_lcms_cargarMasDatos()
				}
			});
		}


		//Boton de cargar mas si la carga es manual
		$("#cargarmas").click(function() {
  			_lcms_cargarMasDatos();
		});

	});




	function _lcms_cargarMasDatos(){
		_lcms_cargador_ocupado=true;
		jQuery('#_lcms_loadingOff').hide();
		jQuery('#_lcms_loadingOn').show();

		jQuery.ajax({
			url: _lcms_urlLoad+"?"+_lcms_urlLoadParams+"&ind="+_lcms_paginador_indice,

			dataType: 'html',
			success: function(html) {
				if (html){
					jQuery('#_lcms_divLoad').append(html);

					jQuery('#_lcms_loadingOff').show();
					jQuery('#_lcms_loadingOn').hide();
					_lcms_paginador_indice = _lcms_paginador_indice+_lcms_cantidadPorCarga;
					_lcms_cargador_ocupado=false;
				}
				else{
					jQuery('#_lcms_loadingOn').hide();
					jQuery('#_lcms_loadingOff').hide();
				}
			}
		});
	}



	function elementVisible(element) {

		var windowTop = jQuery(document).scrollTop();
		var windowBottom = windowTop + window.innerHeight;
		var elementPositionTop = element.offset().top;
		var elementPositionBottom = elementPositionTop + element.height();

		if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
			return  false;
		}
		else{
			return true;
		}
	}


	function _lcms_cumpleMotivoParaCargarDatos(){


		if (_lcms_cargador_ocupado){
			console.log("esta ocupado");
			return false;
		}

		/*
		// Para cargar datos si hemos llegado al pie de pagina
		if (jQuery(document).height() - jQuery(window).height() == jQuery(window).scrollTop()) {
			return true;
		}
		else{
			return false;
		}
		*/

		// Para cargar datos si el div de loading es visible en pantalla
		if ( jQuery( "#_lcms_loadingOff" ).length) {

			  if (elementVisible(jQuery("#_lcms_loadingOff")) == true) {
				  return true;
			  }
			  else{
				  return false;
			  }
		}
	}