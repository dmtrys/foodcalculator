function addRow(){
	$( "#main_wrapper" ).append("<div class=\"product\"><div class=\"number\"></div>Product: <select><option></option></select> Weight: <input type=\"text\"> Gramms<input type=\"button\" value=\"Remove\" class=\"remove_row\"></div>");

	$(".number").each(function( index ) {
	$( this).empty();
	$(this).append( index+1 );
	});		
	
	$('.remove_row').click(function() {
	
	$(this).parent('div').fadeOut(500, function() { $(this).remove(); 
	
	
	$( ".number" ).each(function( index ) {
	$( this).empty();
	$(this).append( index+1 );
	});	
	
	
	});
	
	

	
	
	});	
}
		
$( document ).ready(function() {

});	

function removeAll(){
	$("#main_wrapper").empty();
}