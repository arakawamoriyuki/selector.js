# selector.js

cssセレクタをマウスクリックで取得するツール(というかただのjs)

## Usage

下記文字列を使用したいページのURLバーに打ち込んで使用します。
ブックマークすると便利

### selector_get.js
ページのセレクタを取りたい場所をクリックするとアラートでセレクタを表示します。
```
javascript:document.addEventListener("click",function(e){nthChild=!0,e.preventDefault(),this.removeEventListener("click",arguments.callee),selectors=[],e.path.reverse().slice(3).forEach(function(e,t){selector=e.localName,["type","name","value"].forEach(function(t){e[t]&&"string"==typeof e[t]&&(selector+="["+t+"="+e[t]+"]")}),e.id?(selectors=[],selector+="#"+e.id):(e.className&&e.className.trim().split(" ").forEach(function(e,t){e&&(selector+="."+e)},!1),nthChild&&selectors.length>0&&document.querySelectorAll(selectors.join(" > ")+" > "+selector).length>1&&Array.prototype.forEach.call(document.querySelectorAll(selectors.join(" > ")),function(t){for(i=1;i<=t.children.length;i++)child_elements=document.querySelectorAll(selectors.join(" > ")+" > "+e.localName+":nth-child("+i+")"),1==child_elements.length&&child_elements[0]==e&&(selector=e.localName+":nth-child("+i+")")})),selectors.push(selector)}),selector=selectors.join(" > "),elements=document.querySelectorAll(selector),alert("selector = "+selector+"\ncount = "+elements.length),count=0,timer=setInterval(function(){count>10&&clearInterval(timer),[].forEach.call(elements,function(e){e.style.opacity=count%2}),count++},1e3)},!1);
```

### selector_exists.js
入力されたセレクタがページ内のどの位置にあるかと、個数を確認できます。
```
javascript:elements=document.querySelectorAll(prompt("セレクタを入力してください。")),alert("count = "+elements.length),count=0,timer=setInterval(function(){count>10&&clearInterval(timer),[].forEach.call(elements,function(e){e.style.opacity=count%2}),count++},1e3);
```


