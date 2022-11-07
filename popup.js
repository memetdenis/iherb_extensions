
console.log('Стартанул...');
setTimeout(start, 2000);

function start(){
	if($('.product-detail-container')){
		let name 			= $("#name").text().replace('\n','').trim();
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


		$.post( "http://127.0.0.1/iherb/json.php", { name: `${name}`, specifications: `${specifications}`, rank: `${rank}`, pricing: `${pricing}`, image: `${image}` , content: `${content}` , meta: `${meta}` , language: `${language}`, product_id: `${product_id}`, currency: `${currency}` }, function(data) {
			console.log(data);

		} );

		console.log(`Продукт: ${name}`);
		console.log(`Продукт id: ${product_id}`);
	}
}
