	var wrap=document.getElementById('wrap');
	var text=document.getElementById('text');
	var weibo=document.getElementById('weibo');
	var btn =document.getElementById('btn');
	var del=weibo.getElementsByTagName('p');
	btn.onclick=function fabu (argument) {
		var connLi=document.createElement('li');
		var del =document.createElement('p');
		del.innerText='删除';
		connLi.innerHTML=text.value;
		if (text.value!='') {
			weibo.appendChild(connLi);
			weibo.appendChild(del);
		}else{
			alert('请至少输入点内容吧');
		}
		text.value='';
		del.onclick=function shanchu (argument) {
			weibo.removeChild(connLi);
			weibo.removeChild(del);};
		
	}