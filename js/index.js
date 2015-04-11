var fruits = [];
fruits[0] = {name:"", calories:"0", carbs:"0", protein:"0", fat:"0"};
fruits[1] = {name:"Banana", calories:"89", carbs:"21.7", protein:"1.1", fat:"0.3"};
fruits[2] = {name:"Apple", calories:"52", carbs:"13.8", protein:"0.3", fat:"0.2"};
fruits[3] = {name:"Potato", calories:"110", carbs:"26", protein:"3", fat:"0"};
fruits[4] = {name:"Tomato", calories:"27", carbs:"6", protein:"1", fat:"0"};
fruits[5] = {name:"Orange", calories:"47", carbs:"21.5", protein:"1.7", fat:"0.2"};
fruits[6] = {name:"Apricot ", calories:"48", carbs:"11.1", protein:"1.0", fat:"0.4"};
fruits[7] = {name:"Avocado", calories:"160", carbs:"8.5", protein:"2.0", fat:"14.7"};
fruits[8] = {name:"Grapefruit", calories:"82", carbs:"20.5", protein:"1.5", fat:"0.3"};
fruits[9] = {name:"Grapes", calories:"114", carbs:"28.3", protein:"1.0", fat:"1.0"};
fruits[10] = {name:"Lemon ", calories:"17", carbs:"5.4", protein:"0.6", fat:"0.2"};
fruits[11] = {name:"Melon", calories:"24", carbs:"5.7", protein:"0.6", fat:"0.2"};

function addRow(){
	
	$( "#main_wrapper" ).append("<div class=\"product\"><div class=\"number\"></div><div class=\"ico\"></div>Product: <select class=\"prod_list\"></select> Weight: <input type=\"text\" class=\"weight\" onchange=\"calculate();\"> Gramms<input type=\"button\" value=\"Remove\" class=\"remove_row\"></div>");
	
	for (var i = 0; i < fruits.length; i++) {
		$(".prod_list").last().append('<option value=\"'+i+'\">' + fruits[i].name + '</option>');
	}
	
	$(".number").each(function( index ) {
		$( this).empty();
		$(this).append( index+1 );
	});		

	$('.weight').keyup(function(event) {
		checkValue = $( this ).val();
		if(isNaN(checkValue)){
			$(this).val("");
		}
		else {
			calculate();
		}	
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
	var carbsArray = [];
	var proteinArray = [];
	var fatArray = [];

	$(".product").each(function() {
		a = fruits[$(this).find('.prod_list').val()].calories;
		carbs = fruits[$(this).find('.prod_list').val()].carbs;
		protein = fruits[$(this).find('.prod_list').val()].protein;
		var fat = fruits[$(this).find('.prod_list').val()].fat;
		b = $(this).find('.weight').val();
		summ = ((a/100)*b);
		carbsSumm = ((carbs/100)*b);
		proteinSumm = ((protein/100)*b);
		fatSumm = ((fat/100)*b);
		fruitsArray.push(summ);
		carbsArray.push(carbsSumm);
		proteinArray.push(proteinSumm);
		fatArray.push(fatSumm);
	});		

	var total = 0;
	var totalCarbs = 0;
	var totalProtein = 0;
	var totalFat = 0;
	for (var i = 0; i < fruitsArray.length; i++) {
		total += fruitsArray[i];
		totalCarbs += carbsArray[i];
		totalProtein += proteinArray[i];
		totalFat += fatArray[i];
	}
	
	totalFat = Number((totalFat).toFixed(2));
	totalProtein = Number((totalProtein).toFixed(2));
	totalCarbs = Number((totalCarbs).toFixed(2));
	total = Number((total).toFixed(2));

	$( "#results_wrapper" ).find(".result").remove();
	$( "#results_wrapper" ).append('<div class=\"result\"><span class=\"total_number\"></span><span class=\"total\">Calories:</span> <span class=\"total_number\">'+total+'(cal)</span><span class=\"total\">Carbs:</span> <span class=\"total_number\">'+totalCarbs+'(g)</span><span class=\"total\">Protein:</span> <span class=\"total_number\">'+totalProtein+'(g)</span><span class=\"total\">Fat:</span> <span class=\"total_number\">'+totalFat+'(g)</span></div>');
}

function removeAll(){
	$("#main_wrapper").empty();
	$("#results_wrapper").empty();
	$("#results_wrapper").append('<div class=\"result\"><span class=\"total_number\"></span><span class=\"total\">Calories:</span> <span class=\"total_number\">0(cal)</span><span class=\"total\">Carbs:</span> <span class=\"total_number\">0(g)</span><span class=\"total\">Protein:</span> <span class=\"total_number\">0(g)</span><span class=\"total\">Fat:</span> <span class=\"total_number\">0(g)</span></div>');
}

$(function() {
	$( "#all_wrapper" ).draggable();
});

$( document ).ready(function() {
    $( "#cat, #cat2" ).click(function() {
	
		if ($('#cat2').css('display') == 'block'){
			$('#cat2').fadeOut(1000);
		}
	
		var position = $( "#cat" ).position().left;
		if (position === 20){
			var moveValue = "+=660px";
		}
		else if (position === 680){
			var moveValue = "-=660px";
		}
		else{
		
		}
		
		$( "#cat" ).animate({ "left": moveValue }, 2000, function(){
			if(moveValue == '+=660px'){
				$('#cat2').fadeIn(100);
			}
		});
	});
});