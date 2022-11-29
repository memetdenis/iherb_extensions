
console.log('Стартанул...');

//setTimeout(start, 3000);
start_fnc = setInterval(function(){
	start();
}, 5000);

var id = 1;
var server_url = 'https://iherb.memet.ru/';
//var server_url = 'http://localhost/iherb/';
var img_ok = 'https://iherb.memet.ru/img/checked.png';


//***************************************************************************************************************************************************** */
function add_history_price(data){
	if(data.price.length>0){
		let index;
		let price_add = '<span style="color: #1976d2;">История цены:</span><br>';
		for (index = 0; index < data.price.length; ++index) {
			if(data.price[index]['price'] == data.price[index]['standard_price']){
				price_add += `
				<span style='font-weight: 700; margin-right: 8px;'>${data.price[index]['date_create']}</span> :
				<span style='color: #707070; font-weight: 400;'>${data.symbol}${data.price[index]['standard_price']}</span>
				<br>`;
			}else{
				price_add += `
				<span style='font-weight: 700; margin-right: 8px;'>${data.price[index]['date_create']}</span> : 
				<span style='color: #d32f2f; font-weight: 700; margin-right: 8px;'>${data.symbol}${data.price[index]['price']}</span>
				<span style='color: #707070; font-weight: 400; text-decoration: line-through;'>${data.symbol}${data.price[index]['standard_price']}</span>
				<br>`;
			}
		}
		$('#product-action').append(price_add);
	}
}

//***************************************************************************************************************************************************** */
function add_rating(data){
	if(data.rating>0){
		let rating = $(`#load_${data['id']} .rating span`).text().trim();
		let html = `<div style = "position:relative; white-space: nowrap; display:inline-block;">${rating}<div style="color: green; font-size: 9px; position: absolute; top: -4px; right: -21px; white-space: nowrap;">+${data.rating}</div></div>`;
		$(`#load_${data['id']} .rating span`).html(html);
	}
}

//***************************************************************************************************************************************************** */
function add_history_price_mini(data){
	let price_add = '';

	if(data.price.length>1){
		//price_add = '<br>';
		if(data.price[1]['price'] == data.price[1]['standard_price']){
			price_add += `
			<div style="position:relative; white-space: nowrap; display:inline-block;font-size: 14px;">
			<div style="position: absolute;top: -4px;right: -56px;"><span style='font-size: 10px;'>${data.price[1]['date_create']}</span></div>
			<span style='color: #707070; font-weight: 400;'>${data.symbol}${data.price[1]['standard_price']}</span>
			</div>`;
		}else{
			price_add += `
			<div style="position:relative; white-space: nowrap; display:inline-block;font-size: 14px;">
			<div style="position: absolute;top: -4px;right: -56px;"><span style='font-size: 10px;'>${data.price[1]['date_create']}</span></div> 
			<span style='color: #d32f2f; font-weight: 700; margin-right: 6px;'>${data.symbol}${data.price[1]['price']}</span>
			<span style='color: #707070; font-weight: 400; text-decoration: line-through;'>${data.symbol}${data.price[1]['standard_price']}</span>
			</div>`;
		}
		
	}
	return price_add;
}
//***************************************************************************************************************************************************** */
function start(){

	let language 		= $('.language-select').text().replace('\n','').trim();
	let currency		= $('.currency-select').text().replace('\n','').trim();
	let country			= $('.country-select').text().replace('\n','').trim();

	// Один товар
	if($('.product-detail-container').length){
		$('.product-detail-container').each(function() {

			let load = true; // Нужно загружать?

			// Если есть атрибут id , то загружать не надо.
			if(this.getAttribute('id')){
				load = false;
			}else{

				let html = this.innerHTML;
				if(html.indexOf('<a class="product-image product-link"')>=0){load = false;}

				if(load){
					// Установим атрибут id , что бы можно было найти его после загрузки
					this.setAttribute('id',`load_${id}`);

					$.post( `${server_url}json.php?type=3&id=${id}`, { html: `${html.replace(/\'/g,'')}`, language: `${language}`, currency: `${currency}`, id: `${id}`, country: `${country}`}, function(data) {

						let message = `<img src="${img_ok}" style="width: 16px; height: 16px; margin-bottom: -3px;" title="Сохранено на сервере">`;
						if($(`#load_${data['id']}`)){
							$(`#load_${data['id']}`).append(message);
							add_history_price(data);
						}
					});
				}
				id++;
			}
		});
	}
	// Один товар
	/*
	if($('.product-detail-container').length>0){

		let name 			= $("#name").text().replace('\n','').replace('\'','').trim();
		let pricing 		= $("#pricing").html();
		let image 			= $("#iherb-product-image").prop('src');
		let specifications 	= $('.product-description-specifications').html();
		let rank 			= $('.best-selling-rank').html();
		let content 		= $('.inner-content').html();
		let language 		= $('.language-select').text().replace('\n','').trim();
		let product_id		= '0';
		let currency		= '';
		let meta 			= '';
		$($('meta')).each(function(){
			if(this.attributes[0]['nodeValue']=='og:product_id'){
				product_id = this.content;
			}else if(this.attributes[0]['nodeValue']=='og:price:currency'){
				currency = this.content;
			}
			
			meta += `${this.attributes[0]['nodeValue']}=${this.content};`;
		});

	}*/

	// Множество карточек с товарами.
	if($('.product-inner-wide').length){

		// Количество карточек с этим тегом.
		console.log($('.product-inner-wide').length);

		let catalog = '';
		if($('#breadCrumbs').length){
			catalog = $('#breadCrumbs').html();
		}

		$('.product-inner-wide').each(function() {
			let load = true; // Нужно загружать?
			// Если есть атрибут id , то загружать не надо.
			if(this.getAttribute('id')){
				load = false;
			}else{
				let html = this.innerHTML;
				if(html.indexOf('<a class="product-image product-link"')>=0){load = false;}
				if(load){
					// Установим атрибут id , что бы можно было найти его после загрузки
					this.setAttribute('id',`load_${id}`);
					$.post( `${server_url}json.php?type=4&id=${id}`, { html: `${html.replace(/\'/g,'')}`, catalog: `${catalog.replace(/\'/g,'')}`, language: `${language}`, currency: `${currency}`, id: `${id}`, country: `${country}`}, function(data) {
						let message = `<img src="${img_ok}" style="width: 16px; height: 16px; margin-bottom: -3px;" title="Сохранено на сервере"> `+add_history_price_mini(data);
						if($(`#load_${data['id']}`)){
							$(`#load_${data['id']}`).append(message);
							add_rating(data);
						}
					});
				}
				id++;
			}
		});
	}

	// Множество карточек с товарами.
	if($('.product-inner').length){

		// Количество карточек с этим тегом.
		console.log($('.product-inner').length);

		$('.product-inner').each(function() {
			let load = true; // Нужно загружать?
			// Если есть атрибут id , то загружать не надо.
			if(this.getAttribute('id')){
				load = false;
			}else{
				let html = this.innerHTML;
				if(html.indexOf('<a class="product-image product-link"')>=0){load = false;}
				if(load){
					// Установим атрибут id , что бы можно было найти его после загрузки
					this.setAttribute('id',`load_${id}`);
					$.post( `${server_url}json.php?type=2&id=${id}`, { html: `${html.replace(/\'/g,'')}`, language: `${language}`, currency: `${currency}`, id: `${id}`, country: `${country}`}, function(data) {
						if($(`#load_${data['id']}`)){
							//let img_load = `<img src="${img_ok}" style="width: 16px; height: 16px; margin-bottom: -3px;" title="Сохранено на сервере">`;
							let img_load = `<div style="position: absolute;top: 0px;right: 0px;"><img src="${img_ok}" style="width: 16px; height: 16px; margin-bottom: -3px;" title="Сохранено на сервере"></div>`;
							//let product = $(`#load_${data['id']}`).html();
							//product = `<div style = "position:relative; white-space: nowrap; display:inline-block;">${product}<div style="color: green; font-size: 9px; position: absolute; top: -4px; right: -21px; white-space: nowrap;">+${img_load}</div></div>`;
							//$(`#load_${data['id']}`).html(product);
							$(`#load_${data['id']}`).prepend(img_load);
							$(`#load_${data['id']}`).append(add_history_price_mini(data));
							add_rating(data);
						}
					});
				}
				id++;
			}
		});
	}

}
