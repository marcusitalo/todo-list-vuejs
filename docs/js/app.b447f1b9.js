(function(t){function e(e){for(var a,s,i=e[0],o=e[1],l=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},c=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0336":function(t,e,n){},"1c5c":function(t,e,n){"use strict";n("d247")},"3ae8":function(t,e,n){"use strict";n("8ed8")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function r(t,e,n,r,c,s){var i=Object(a["k"])("Title"),o=Object(a["k"])("List");return Object(a["g"])(),Object(a["c"])(a["a"],null,[Object(a["f"])(i),Object(a["f"])(o)],64)}var c=n("64e6"),s=n.n(c),i=Object(a["o"])("data-v-2a4db47b");Object(a["i"])("data-v-2a4db47b");var o={class:"title"},l={class:"current-date"},u={class:"date"},d={class:"day"},f={class:"month"},b={class:"year"},p={class:"today"},h=Object(a["f"])("img",{src:s.a,class:"logo"},null,-1);Object(a["h"])();var O=i((function(t,e,n,r,c,s){return Object(a["g"])(),Object(a["c"])("div",o,[Object(a["f"])("header",l,[Object(a["f"])("div",u,[Object(a["f"])("span",d,Object(a["l"])(c.date.dayNum),1),Object(a["f"])("span",f,Object(a["l"])(c.date.month),1),Object(a["f"])("span",b,Object(a["l"])(c.date.year),1),Object(a["f"])("div",p,[Object(a["f"])("span",null,Object(a["l"])(c.date.dayName),1)])])]),h])})),j=(n("fb6a"),{name:"Title",data:function(){return{tasks:[],task:"",date:{dayNum:"",month:"",year:"",dayName:""},week:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],months:["JAN","FEV","MAR","ABR","MAI","JUN","JUL","AGO","SET","OUT","NOV","DEZ"]}},mounted:function(){this.getCurrentDay()},methods:{getCurrentDay:function(){var t=new Date;this.date.dayNum=("0"+t.getDate()).slice(-2),this.date.month=this.months[t.getMonth()],this.date.year=t.getFullYear(),this.date.dayName=this.week[t.getDay()]}}});n("1c5c");j.render=O,j.__scopeId="data-v-2a4db47b";var g=j,A=(n("a4d3"),n("e01a"),Object(a["o"])("data-v-9c109a34"));Object(a["i"])("data-v-9c109a34");var m={class:"todo-container"},k={class:"tasks-container"},v={class:"task-card"},w={class:"task"},y=Object(a["f"])("hr",null,null,-1),C={key:0},S={class:"task-options"},I=Object(a["f"])("h1",null,"Add Tasks",-1),D=Object(a["f"])("label",{for:"title"},[Object(a["e"])("Title"),Object(a["f"])("span",{title:"required"},"*")],-1),T={key:0},F=Object(a["f"])("label",{for:"description"},[Object(a["e"])("Description"),Object(a["f"])("span",{title:"required"},"*")],-1),B={key:1},Q=Object(a["f"])("label",{for:"url"},"Link",-1);Object(a["h"])();var R=A((function(t,e,n,r,c,s){return Object(a["g"])(),Object(a["c"])("div",m,[Object(a["f"])("section",{class:{show:c.show,"todo-list":c.show,hidden:!c.show}},[Object(a["f"])("div",k,[(Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["j"])(c.tasks,(function(t,e){return Object(a["g"])(),Object(a["c"])("div",{class:["task-container",{checked:!t.state}],key:e},[Object(a["f"])("div",v,[Object(a["f"])("details",null,[Object(a["f"])("summary",w,Object(a["l"])(t.title),1),y,Object(a["f"])("p",null,Object(a["l"])(t.description),1),t.url?(Object(a["g"])(),Object(a["c"])("code",C,[Object(a["f"])("a",{target:"_new",href:t.url},Object(a["l"])(t.url),9,["href"])])):Object(a["d"])("",!0),Object(a["f"])("label",null,Object(a["l"])("✎"+t.created_at),1),Object(a["f"])("label",null,Object(a["l"])(t.completed_at?"✓"+t.completed_at:""),1)])]),Object(a["f"])("div",S,[Object(a["f"])("span",{class:"removeTask",onClick:function(e){return s.deleteTask(t)}},null,8,["onClick"]),Object(a["f"])("span",{class:"checkTask",onClick:function(e){return s.checkTask(t,e)}},null,8,["onClick"])])],2)})),128))])],2),Object(a["f"])("button",{class:{completed:c.completed,"add-task-btn":!0},onClick:e[1]||(e[1]=function(){return s.changeSections&&s.changeSections.apply(s,arguments)})},[Object(a["f"])("span",null,Object(a["l"])(c.show?"+":"◀"),1)],2),Object(a["f"])("section",{class:{show:!c.show,"todo-list":!c.show,hidden:c.show}},[I,D,Object(a["n"])(Object(a["f"])("input",{type:"text",name:"title",id:"title","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.title=t})},null,512),[[a["m"],c.title]]),c.errors["title"]?(Object(a["g"])(),Object(a["c"])("sup",T,Object(a["l"])(c.errors["title"]),1)):Object(a["d"])("",!0),F,Object(a["n"])(Object(a["f"])("textarea",{type:"text",name:"description",id:"description","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.description=t})},null,512),[[a["m"],c.description]]),c.errors["description"]?(Object(a["g"])(),Object(a["c"])("sup",B,Object(a["l"])(c.errors["description"]),1)):Object(a["d"])("",!0),Q,Object(a["n"])(Object(a["f"])("input",{type:"text",name:"url",id:"url","onUpdate:modelValue":e[4]||(e[4]=function(t){return c.url=t})},null,512),[[a["m"],c.url]]),Object(a["f"])("input",{type:"submit",value:"Add to list",onClick:e[5]||(e[5]=function(){return s.addTask&&s.addTask.apply(s,arguments)})})],2)])})),E=n("1da1"),L=(n("96cf"),{name:"List",data:function(){return{tasks:[],task:"",completed:!1,show:!0,title:"",description:"",url:"",errors:[]}},created:function(){if(localStorage.data){var t=JSON.parse(localStorage.data);t.dateCache!=this.getDateFormat()?(localStorage.removeItem(t),this.tasks=[]):this.tasks=t.tasks}else this.setInLocalStorage()},methods:{addTask:function(){this.checkForm(),this.registerTask(),this.changeComplete()},registerTask:function(){var t={created_at:this.getCurrentDate(),completed_at:null,title:this.title,description:this.description,url:this.url,state:!0};this.tasks.unshift(t),this.setInLocalStorage()},checkForm:function(t){if(this.title&&this.description)return!0;this.title||(this.errors["title"]="Title is required."),this.description||(this.errors["description"]="Description is required."),this.showError(),t.preventDefault()},showError:function(){var t=this;setTimeout((function(){t.errors=[]}),3e3)},changeComplete:function(){var t=this;this.completed=!this.completed,setTimeout((function(){t.completed=!1}),2e3),this.title="",this.description="",this.url=""},changeSections:function(){this.completed=!1,this.show=!this.show},setInLocalStorage:function(){var t=Object(E["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e={dateCache:this.getDateFormat(),tasks:this.tasks},localStorage.data=JSON.stringify(e);case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCurrentDate:function(){var t=new Date;return("0"+t.getDate()).slice(-2)+"/"+("0"+t.getMonth()).slice(-2)+"/"+t.getFullYear()+" "+t.getHours()+":"+t.getMinutes()},getDateFormat:function(){return this.getCurrentDate().slice(0,10).replaceAll("/","")},checkTask:function(t,e){t.completed_at=t.state?this.getCurrentDate():null,t.state=!t.state;var n=e.target.parentNode.parentNode;n.classList.toggle("checked"),this.setInLocalStorage()},deleteTask:function(t){this.tasks.shift(t),this.setInLocalStorage()}}});n("3ae8");L.render=R,L.__scopeId="data-v-9c109a34";var N=L,U={name:"App",components:{Title:g,List:N}};n("9d60");U.render=r;var M=U;Object(a["b"])(M).mount("#app")},"64e6":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6AQMAAACyIsh+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRF////AAAAVcLTfgAAAAJ0Uk5T/wDltzBKAAAB6ElEQVR4nO3XQWrEMAwFUIdZeOkj5Cg+mgNd9Fre9Rq5QQPdpHSIKjnTrkb/B0LLwFgw3eRRElv+SkLo1et5K0/upSgi6yALBlGuGIyyYZBFMCgi7l02oL/KwIzA5xHgLoSBLwRCkHqRKisGU4EgypQJCBSMHXTQwUOCk6ebBsiBCPrAITawlBtQkBoIR0CFAI2DBjIDaCQ1kMBQa+CCluEHnawEJ6/++wIn7xIGPFiv+hRwbm72ZwZAdKHwWJxG8VvOQM0EzFn8zWigELAU8fc7brqV+pICQFCwJATKKjMEWUF0N2MH9RwYO+jg+cD5g0NBYYe3HX8ABhYgkURQS7mtEEBisLIgpVFMw5yNg83ADMDKRlIbahMAes1fp1uhF7EHKn+ztvaL1rd3d+QGRlkwyPb5joB2DAS6GRsDAoHut7wiEI+ANwSSvDPwol15t+9uQJ+DgEDANRQIxr8H9B70Kc4CoWDCIGqQEWAJA8ClpRwEgoBttl0EILSYQ6BYtyGQ7S4RSPbOikC0x0CgJSUCepcVg5GBhNo+aU9eGIAnywA8WYm1/b8AcvwTCxAF4i+URldqIebtRQNtgp8CFsVew/wCr+UaGBgI4nf1Dop/LnaQ/aO3A2tJ+PU9+F/FvXr16tWrF6tvQC3YIQidU68AAAAASUVORK5CYII="},"8ed8":function(t,e,n){},"9d60":function(t,e,n){"use strict";n("0336")},d247:function(t,e,n){}});
//# sourceMappingURL=app.b447f1b9.js.map