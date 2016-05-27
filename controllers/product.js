var dataPage={

	page:'product',
	category:getq('category'),
	npage:getq('npage')


}



for(var i=0;i<6;i++){

$('.box-goods').append('<a href="./?page=detailproduct" style="color:#222;">'+$('.goods').clone().html()+'</a>');

}