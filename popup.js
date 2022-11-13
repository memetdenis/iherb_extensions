
console.log('Стартанул...');

//setTimeout(start, 3000);
start_fnc = setInterval(function(){
	start();
}, 5000);

var id = 1;

function start(){

	let language 		= $('.language-select').text().replace('\n','').trim();
	let currency		= $('.currency-select').text().replace('\n','').trim();

	// Один товар
	if($('.product-detail-container').length>0){
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

					$.post( `http://127.0.0.1/iherb/json.php?type=3&id=${id}`, { html: `${html.replace(/\'/g,'')}`, language: `${language}`, currency: `${currency}`, id: `${id}`}, function(data) {

						let message = '<img src="https://e7.pngegg.com/pngimages/646/237/png-clipart-computer-icons-check-mark-best-choice-miscellaneous-angle-thumbnail.png" style="width: 16px; height: 16px; margin-bottom: -3px;" alt="Сохранено на сервере">';
						if($(`#load_${data['id']}`)){
							$(`#load_${data['id']}`).append(message);
						}
						//console.log(data);
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


		$.post( "http://127.0.0.1/iherb/json.php?type=1", { name: `${name}`, specifications: `${specifications}`, rank: `${rank}`, pricing: `${pricing}`, image: `${image}` , content: `${content}` , meta: `${meta}` , language: `${language}`, product_id: `${product_id}`, currency: `${currency}` }, function(data) {
			console.log(data);
			if(data.price.length>1){
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
				$('#pricing').append(price_add);
			}
		} );

		console.log(`Продукт: ${name}`);
		console.log(`Продукт id: ${product_id}`);
	}*/

	// Множество карточек с товарами.
	if($('.product-inner')){

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

					$.post( `http://127.0.0.1/iherb/json.php?type=2&id=${id}`, { html: `${html.replace(/\'/g,'')}`, language: `${language}`, currency: `${currency}`, id: `${id}`}, function(data) {

						let message = '<img src="https://e7.pngegg.com/pngimages/646/237/png-clipart-computer-icons-check-mark-best-choice-miscellaneous-angle-thumbnail.png" style="width: 16px; height: 16px; margin-bottom: -3px;" alt="Сохранено на сервере">';
						if($(`#load_${data['id']}`)){
							$(`#load_${data['id']}`).append(message);
						}
						//console.log(data);

					});
				}
				id++;
			}
		});
	}

}
