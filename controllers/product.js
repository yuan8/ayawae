
$.getScript( "asset/plugin/yu-session/yu-session.js", function(data){});



var dataPage={

	page:'product',
	category:getq('category'),
	npage:getq('npage'),
	login_first:false

}




for(var i=0;i<6;i++){

$('.box-goods').append('<a href="./?page=detailproduct" style="color:#222;">'+$('.goods').clone().html()+'</a>');


}

