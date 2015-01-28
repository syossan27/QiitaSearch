var submit = document.getElementById("submit");
submit.addEventListener('click',function(){
	var search_word = document.getElementById("search").value;
	var url = "https://innova.qiita.com/search?utf8=✓&sort=rel&q=-tag:日報+"+ search_word;
	window.open(url, '_blank');
	return false;
},false);
