function getq(data){
    	var url=window.location.href, res='';
    	url=url.split('?')[1]+'';
 		url=url.split('&');
 		for(var i=0;i<url.length;i++){
 			url[i]=''+url[i];
 			url[i]=url[i].split('=');
 			if(url[i][0]==data){
 				res=url[i][1];
 			} 			
 		}
 			return res;
 		}