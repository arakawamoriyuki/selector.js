// javascript:document.addEventListener("click",function(e){nthChild=!0,e.preventDefault(),this.removeEventListener("click",arguments.callee),selectors=[],e.path.reverse().slice(3).forEach(function(e,t){selector=e.localName,["type","name","value"].forEach(function(t){e[t]&&"string"==typeof e[t]&&(selector+="["+t+"="+e[t]+"]")}),e.id?(selectors=[],selector+="#"+e.id):(e.className&&e.className.trim().split(" ").forEach(function(e,t){e&&(selector+="."+e)},!1),nthChild&&selectors.length>0&&document.querySelectorAll(selectors.join(" > ")+" > "+selector).length>1&&Array.prototype.forEach.call(document.querySelectorAll(selectors.join(" > ")),function(t){for(i=1;i<=t.children.length;i++)child_elements=document.querySelectorAll(selectors.join(" > ")+" > "+e.localName+":nth-child("+i+")"),1==child_elements.length&&child_elements[0]==e&&(selector=e.localName+":nth-child("+i+")")})),selectors.push(selector)}),selector=selectors.join(" > "),elements=document.querySelectorAll(selector),alert("selector = "+selector+"\ncount = "+elements.length),count=0,timer=setInterval(function(){count>10&&clearInterval(timer),[].forEach.call(elements,function(e){e.style.opacity=count%2}),count++},1e3)},!1);

document.addEventListener('click', function(event) {
	// nth-child使用フラグ
	nthChild = true;
	event.preventDefault();
	this.removeEventListener('click', arguments.callee);
	selectors = [];
	event.path.reverse().slice(3).forEach(function(element,index){
		selector = element.localName;
		['type', 'name', 'value'].forEach(function(attr){
			if(element[attr] && typeof element[attr] === 'string'){
				selector += '[' + attr + '=' + element[attr] + ']';
			}
		});
		if(element.id){
			selectors = []
			selector += '#' + element.id;
		}else{
			if(element.className){
				element.className.trim().split(' ').forEach(function(class,i){
					if(class){
						selector += '.' + class;
					}
				},false);
			}
			if (nthChild){
				if (selectors.length > 0){
					if (document.querySelectorAll(selectors.join(' > ') + ' > ' + selector).length > 1){
						Array.prototype.forEach.call(document.querySelectorAll(selectors.join(' > ')), function(parent_element) {
							for (i = 1; i <= parent_element.children.length; i++) {
								child_elements = document.querySelectorAll(selectors.join(' > ') + ' > ' + element.localName + ':nth-child(' + i + ')');
								if (child_elements.length == 1 && child_elements[0] == element){
									selector = element.localName + ':nth-child(' + i + ')';
								}
							}
						});
					}
				}
			}
		}
		selectors.push(selector);
	});
	selector = selectors.join(' > ')
	elements = document.querySelectorAll(selector);
	alert('selector = '+selector+'\ncount = '+elements.length);
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
},false);
