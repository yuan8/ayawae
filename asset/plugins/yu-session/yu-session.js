

var api_yu_session_number="001"
var yu={
	token:'yu_token_'+api_yu_session_number,
	id:'yu_id_'+api_yu_session_number
} 
var yu_session={
token_user:localStorage.getItem(yu.token),
id_user:localStorage.getItem(yu.id);
}

function setYuToken(token,id){

	localStorage.setItem(yu.token,token);
	localStorage.setItem(yu.id,id);

} 

function getYuToken(){
return yu_session;
} 



