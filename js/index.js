var fruits = [];
fruits[0] = {name:"Banana", calories:"89"};
fruits[1] = {name:"Apple", calories:"52"};
fruits[2] = {name:"Potato", calories:"77"};
fruits[3] = {name:"Tomato", calories:"18"};
fruits[4] = {name:"Orange", calories:"47"};

function addRow(){
	$( "#main_wrapper" ).append("<div class=\"product\"><div class=\"number\"></div>Product: <select class=\"prod_list\"></select> Weight: <input type=\"text\" class=\"weight\"> Gramms<input type=\"button\" value=\"Remove\" class=\"remove_row\"></div>");
	$('.prod_list').empty();
	for (var i = 0; i < fruits.length; i++) {
    $(".prod_list").append('<option value=\"'+i+'\">' + fruits[i].name + '</option>');
}
	
	
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

function calculate(){
		$(".prod_list").each(function() {
			
alert(fruits[$(this).val()].calories);
alert($(this).val());
	});	
}


$( document ).ready(function() {

});	

function removeAll(){
	$("#main_wrapper").empty();
}