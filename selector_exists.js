// javascript:elements=document.querySelectorAll(prompt("セレクタを入力してください。")),alert("count = "+elements.length),count=0,timer=setInterval(function(){count>10&&clearInterval(timer),[].forEach.call(elements,function(e){e.style.opacity=count%2}),count++},1e3);

elements = document.querySelectorAll(prompt('セレクタを入力してください。'));
alert('count = '+elements.length);
count = 0;
timer = setInterval(function loop(){
	if (count > 10){
		clearInterval(timer);
	}
	[].forEach.call(elements, function(element) {
		element.style.opacity = (count % 2);
	});
	count++;
}, 1000);
