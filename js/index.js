var fruits = [];
fruits[0] = {name:"Banana", calories:"89"};
fruits[1] = {name:"Apple", calories:"52"};
fruits[2] = {name:"Potato", calories:"77"};
fruits[3] = {name:"Tomato", calories:"18"};
fruits[4] = {name:"Orange", calories:"47"};
fruits[5] = {name:"Apricot ", calories:"48"};
fruits[6] = {name:"Avocado", calories:"160"};
fruits[7] = {name:"Grapefruit", calories:"82"};
fruits[8] = {name:"Grapes", calories:"114"};
fruits[9] = {name:"Lemon ", calories:"17"};
fruits[10] = {name:"Melon", calories:"24"};

function addRow(){
	
	$( "#main_wrapper" ).append("<div class=\"product\"><div class=\"number\"></div>Product: <select class=\"prod_list\"></select> Weight: <input type=\"text\" class=\"weight\" onchange=\"calculate();\"> Gramms<input type=\"button\" value=\"Remove\" class=\"remove_row\"></div>");
	
	$('.prod_list').empty();
	
	for (var i = 0; i < fruits.length; i++) {
		$(".prod_list").append('<option value=\"'+i+'\">' + fruits[i].name + '</option>');
	}
	
	$(".number").each(function( index ) {
		$( this).empty();
		$(this).append( index+1 );
	});		

	$('.weight').keyup(function(event) {
		calculate();
	});
	
	$( ".product" ).change(function() {
		calculate();
	});

	$('.remove_row').click(function() {
	
		$(this).parent('div').fadeOut(500, function() { 
		
			$(this).remove(); 
	
			$( ".number" ).each(function( index ) {
				$( this).empty();
				$(this).append( index+1 );
			});	
			calculate();
		});
	});	
}

function calculate(){
	var fruitsArray = [];

	$(".product").each(function() {
		a = fruits[$(this).find('.prod_list').val()].calories;
		b = $(this).find('.weight').val();
		summ = ((a/100)*b);
		fruitsArray.push(summ);                     
	});	

	var total = 0;
	for (var i = 0; i < fruitsArray.length; i++) {
		total += fruitsArray[i] << 0;
	}
	
	$( "#results_wrapper" ).find(".result").remove();
	$( "#results_wrapper" ).append('<div class=\"result\">Total calories: '+total+'</div>');
}

function removeAll(){
	$("#main_wrapper").empty();
	$("#results_wrapper").empty();
}

$( document ).ready(function() {

});

