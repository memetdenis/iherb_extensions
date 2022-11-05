var otvet = "";
var deistvie , input, sot;

	

$(function(){
	

//*************** 79803669041 ***************
$('#minus_gotovo_79803669041').click(function(){ get_PlusMinus("minus","gotovo", "79803669041");});
$('#plus_gotovo_79803669041').click(function(){ get_PlusMinus("plus","gotovo", "79803669041");});
$('#minus_ogidanie_79803669041').click(function(){ get_PlusMinus("minus","ogidanie", "79803669041");});
$('#plus_ogidanie_79803669041').click(function(){ get_PlusMinus("plus","ogidanie", "79803669041");});
$('#message_79803669041').click(function(){	copyToClipboard("79803669041");	get_PlusMinus("plus","ogidanie", "79803669041");});
$('#ad_platez_79803669041').click(function(){ get_AdPlatez("Platez", "79803669041");});
$('#NUMBER_79803669041').click(function(){	copyToClipboardSot("79803669041");});
$('#Platez_79803669041').focus(function(){	if($(this).val()==0){$(this).val("");} });
$('#minus_vivod_79803669041').click(function(){	$('#Platez_79803669041').val(0-Number($('#Platez_itog_79803669041').text()));});
//***************  Конец  ***************


//*************** 79102095850 ***************
$('#minus_gotovo_79102095850').click(function(){ get_PlusMinus("minus","gotovo", "79102095850");});
$('#plus_gotovo_79102095850').click(function(){ get_PlusMinus("plus","gotovo", "79102095850");});
$('#minus_ogidanie_79102095850').click(function(){ get_PlusMinus("minus","ogidanie", "79102095850");});
$('#plus_ogidanie_79102095850').click(function(){ get_PlusMinus("plus","ogidanie", "79102095850");});
$('#message_79102095850').click(function(){	copyToClipboard("79102095850");	get_PlusMinus("plus","ogidanie", "79102095850");});
$('#ad_platez_79102095850').click(function(){ get_AdPlatez("Platez", "79102095850");});
$('#NUMBER_79102095850').click(function(){	copyToClipboardSot("79102095850");});
$('#Platez_79102095850').focus(function(){	if($(this).val()==0){$(this).val("");} });
$('#minus_vivod_79102095850').click(function(){	$('#Platez_79102095850').val(0-Number($('#Platez_itog_79102095850').text()));});
//***************  Конец  ***************


//*************** 79192034739 ***************
$('#minus_gotovo_79192034739').click(function(){ get_PlusMinus("minus","gotovo", "79192034739");});
$('#plus_gotovo_79192034739').click(function(){ get_PlusMinus("plus","gotovo", "79192034739");});
$('#minus_ogidanie_79192034739').click(function(){ get_PlusMinus("minus","ogidanie", "79192034739");});
$('#plus_ogidanie_79192034739').click(function(){ get_PlusMinus("plus","ogidanie", "79192034739");});
$('#message_79192034739').click(function(){	copyToClipboard("79192034739");	get_PlusMinus("plus","ogidanie", "79192034739");});
$('#ad_platez_79192034739').click(function(){ get_AdPlatez("Platez", "79192034739");});
$('#NUMBER_79192034739').click(function(){	copyToClipboardSot("79192034739");});
$('#Platez_79803669041').focus(function(){	if($(this).val()==0){$(this).val("");} });
$('#minus_vivod_79192034739').click(function(){	$('#Platez_79192034739').val(0-Number($('#Platez_itog_79192034739').text()));});
//***************  Конец  ***************

	
//*************** 79192095149 ***************
$('#minus_gotovo_79192095149').click(function(){ get_PlusMinus("minus","gotovo", "79192095149");});
$('#plus_gotovo_79192095149').click(function(){ get_PlusMinus("plus","gotovo", "79192095149");});
$('#minus_ogidanie_79192095149').click(function(){ get_PlusMinus("minus","ogidanie", "79192095149");});
$('#plus_ogidanie_79192095149').click(function(){ get_PlusMinus("plus","ogidanie", "79192095149");});
$('#message_79192095149').click(function(){	copyToClipboard("79192095149");	get_PlusMinus("plus","ogidanie", "79192095149");});
$('#ad_platez_79192095149').click(function(){ get_AdPlatez("Platez", "79192095149");});
$('#NUMBER_79192095149').click(function(){	copyToClipboardSot("79192095149");});
$('#Platez_79192095149').focus(function(){	if($(this).val()==0){$(this).val("");} });
$('#minus_vivod_79192095149').click(function(){	$('#Platez_79192095149').val(0-Number($('#Platez_itog_79192095149').text()));});
//***************  Конец  ***************

	
	
//*************** 79803669029 ***************
$('#minus_gotovo_79803669029').click(function(){ get_PlusMinus("minus","gotovo", "79803669029");});
$('#plus_gotovo_79803669029').click(function(){ get_PlusMinus("plus","gotovo", "79803669029");});
$('#minus_ogidanie_79803669029').click(function(){ get_PlusMinus("minus","ogidanie", "79803669029");});
$('#plus_ogidanie_79803669029').click(function(){ get_PlusMinus("plus","ogidanie", "79803669029");});
$('#message_79803669029').click(function(){	copyToClipboard("79803669029");	get_PlusMinus("plus","ogidanie", "79803669029");});
$('#ad_platez_79803669029').click(function(){ get_AdPlatez("Platez", "79803669029");});
$('#NUMBER_79803669029').click(function(){	copyToClipboardSot("79803669029");});
$('#Platez_79803669029').focus(function(){	if($(this).val()==0){$(this).val("");} });
$('#minus_vivod_79803669029').click(function(){	$('#Platez_79803669029').val(0-Number($('#Platez_itog_79803669029').text()));});
//***************  Конец  ***************






});


//Функция прибовляет платеж 
function get_AdPlatez(input, sot){
	var value;	
	elem = document.getElementById(input+"_"+sot);
	value = elem.value;	
	elem.value = 0;
	
	$.ajax({
	  type: "GET",
	  url: 'http://tr.memet.ru/response.php?'+"d="+input+"&i="+value+"&s="+sot,
	  success: function(data) {	
		elem = document.getElementById(input+"_itog_"+sot);
		elem.innerHTML = data;	 
	  }
	});
	get_PlusMinus("plus" , "gotovo", sot);
	if(value>0){
		get_PlusMinus("minus" , "ogidanie", sot);
	}
}

//Функция прибавляет значения в полях количества сделок
function get_PlusMinus(deistvie , input, sot){
	$.ajax({
	  type: "GET",
	  url: 'http://tr.memet.ru/response.php?'+"d="+deistvie+"&i="+input+"&s="+sot,
	  success: function(data) {	
		elem = document.getElementById(input+"_"+sot);
		elem.value = data;	 

		if(elem.value>2){
			if(elem.value>4){
				if(elem.value>6){
					elem.style.backgroundColor = '#990000';
				}else{
					elem.style.backgroundColor = '#FF6666';
				}
			}else{
				elem.style.backgroundColor = '#FFCCCC';
			}
		}else{
			elem.style.backgroundColor = '#FFFFCC';
		}
		sum_sdel = Number(document.getElementById("gotovo_"+sot).value) + Number(document.getElementById("ogidanie_"+sot).value);
		if(sum_sdel>5){
			document.getElementById(""+sot).style.backgroundColor = '#ffcccc';
		}else{
			document.getElementById(""+sot).style.backgroundColor = '#FFFFCC';
		}		
	  }
	});
	ObnovlenieItogov();
}

function copyToClipboard(sot) {
var text = "Привет.\r\nДелайте перевод на указанный QIWI кошелёк ниже. \r\nБез комментария. \r\nПосле перевода сообщите последние цифры вашего номера.\r\n"+sot;
navigator.clipboard.writeText(text).then(function() {
  //console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  //console.error('Async: Could not copy text: ', err);
});

}

function copyToClipboardSot(sot) {
var text = sot;
navigator.clipboard.writeText(text).then(function() {
  //console.log('Async: Copying to clipboard was successful!');
}, function(err) {
  //console.error('Async: Could not copy text: ', err);
});

}

//Функция возвращает значение для конкретного поля
function get_Q(input){
	$.ajax({
	  type: "GET",
	  url: 'http://tr.memet.ru/response.php?s=0&'+"d="+input,
	  success: function(data) {	
		elem = document.getElementById(input);
		elem.innerHTML = data;	 
	  }
	});
}

function ObnovlenieItogov(){
	get_Q("Kol_sdelok");
	get_Q("Ozidanie_sdelok");
	get_Q("Postupilo");
	get_Q("message_server");
}
$(document).ready(function(){
	
	function get(sot,input){
		$.ajax({
		  type: "GET",
		  url: 'http://tr.memet.ru/response.php?'+"d=get&i="+input+"&s="+sot,
		  success: function(data) {	
			elem = document.getElementById(input+"_"+sot);
			if(input=="Platez_itog"){
				elem.innerHTML = data;
			}else{
				elem.value = data;
				if(elem.value>2){
					if(elem.value>4){
						if(elem.value>6){
							elem.style.backgroundColor = '#990000';
						}else{
							elem.style.backgroundColor = '#FF6666';
						}
					}else{
						elem.style.backgroundColor = '#FFCCCC';
					}
				}else{
					elem.style.backgroundColor = '#FFFFCC';
				}
				sum_sdel = Number(document.getElementById("gotovo_"+sot).value) + Number(document.getElementById("ogidanie_"+sot).value);
				if(sum_sdel>5){
					document.getElementById(""+sot).style.backgroundColor = '#ffcccc';
				}else{
					document.getElementById(""+sot).style.backgroundColor = '#FFFFCC';
				}
			}
		  }
		});	
	}	
	
	get("79803669041","gotovo");
	get("79803669041","ogidanie");
	get("79803669041","Platez_itog");
	
	get("79102095850","gotovo");
	get("79102095850","ogidanie");
	get("79102095850","Platez_itog");
	
	get("79192034739","gotovo");
	get("79192034739","ogidanie");
	get("79192034739","Platez_itog");
	
	get("79192095149","gotovo");
	get("79192095149","ogidanie");
	get("79192095149","Platez_itog");
	
	get("79803669029","gotovo");
	get("79803669029","ogidanie");
	get("79803669029","Platez_itog");
	
	ObnovlenieItogov();
	
	 $('.spoiler_links').click(function(){
	  $(this).parent().children('div.spoiler_body').toggle('normal');
	  return false;
	 });	
	 
	$('.messege').click(function(){
		copyToClipboardSot($(this).text());
	})
});
