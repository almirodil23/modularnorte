$(document).ready(function(){


	$('#codpais_direccion').change(function(){
		var idPais=$(this).val();
		updateProvs(idPais,'#codprovincia_direccion');
	});

	$('#codprovincia_direccion').change(function(){
		var idPais=$('#codpais_direccion').val();
		var idProvincia=$(this).val();
		updateDestino(idPais,idProvincia);
	});




	function updateProvs(idPais, idcodprovincia){

		var url="/ajaxpais";
		url=url+"/"+idPais;
		url=url+"?sid="+Math.random();


		$.get(url,function(data){
			$(idcodprovincia).find('option').remove();
			$(idcodprovincia).append(data);
			refreshFpago();
		});
	}


	function updateDestino(idPais, idProvincia){
		var url="/ajaxpais";
		url=url+"/"+idPais;
		url=url+((idProvincia!=-1)?"/"+idProvincia:"");
		url=url+"?sid="+Math.random();

		$.get(url,function(data){
			refreshFpago();
		});
	}



	// Mostrar formas de pago
	function refreshFpago() {
/*
		if ($("#lista_fpagos").length > 0) {
			var url =  "/ajaxfpago";
			url = url + "?sid=" + Math.random();

			$.ajax({
				url : url,
				type : 'GET',

				success : function(data) {
				    $('#lista_fpagos').html(data);
					refreshTotalCesta();
				}
			});
		}
 */
	}


	function refreshTotalCesta(){
		if ($("#lista_cesta_total").length > 0) {

			var url =  "/ajaxtotalcesta";
			url = url + "?sid=" + Math.random();

			$.ajax({
				url : url,
				type : 'GET',

				success : function(data) {
					$('#lista_cesta_total').html(data);
				}
			});
		}
	}



	$('#viewcondlegal').bind('click',function() {
		$('#condlegal').toggle(); return false;
	});



	// test DNI
	$( '#formcompra').submit(function( event ) {
		var codpais = $('#codpais_direccion').val();
		var dni = $('#nif_direccion').val();

		if (codpais == '70' && !isDni_nif_nieValid(dni)){
			alert("El NIF/NIE NO es vÃ¡lido");
			return false;
			//event.preventDefault();
		}
	});


});