!function(){var e=!0;document.querySelector(".reveal .slides").addEventListener("mousedown",function(t){var o=(Reveal.getConfig().zoomKey?Reveal.getConfig().zoomKey:"alt")+"Key",n=20,i=Reveal.getScale();if(t[o]&&e){t.preventDefault();var d=t.target.getBoundingClientRect();zoom.to({x:d.left*i-n,y:d.top*i-n,width:d.width*i+2*n,height:d.height*i+2*n,pan:!1})}}),Reveal.addEventListener("overviewshown",function(){e=!1}),Reveal.addEventListener("overviewhidden",function(){e=!0})}();/*!
 * zoom.js 0.3 (modified for use with reveal.js)
 * http://lab.hakim.se/zoom-js
 * MIT licensed
 *
 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
 */
var zoom=function(){function e(e,t){var i=o();if(e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*t)/2,e.y-=(window.innerHeight-e.height*t)/2,m)if(1===t)document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform="";else{var d=i.x+"px "+i.y+"px",s="translate("+-e.x+"px,"+-e.y+"px) scale("+t+")";document.body.style.transformOrigin=d,document.body.style.OTransformOrigin=d,document.body.style.msTransformOrigin=d,document.body.style.MozTransformOrigin=d,document.body.style.WebkitTransformOrigin=d,document.body.style.transform=s,document.body.style.OTransform=s,document.body.style.msTransform=s,document.body.style.MozTransform=s,document.body.style.WebkitTransform=s}else 1===t?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(i.x+e.x)/t+"px",document.body.style.top=-(i.y+e.y)/t+"px",document.body.style.width=100*t+"%",document.body.style.height=100*t+"%",document.body.style.zoom=t);n=t,document.documentElement.classList&&(1!==n?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function t(){var e=.12,t=window.innerWidth*e,s=window.innerHeight*e,r=o();s>d?window.scroll(r.x,r.y-(1-d/s)*(14/n)):d>window.innerHeight-s&&window.scroll(r.x,r.y+(1-(window.innerHeight-d)/s)*(14/n)),t>i?window.scroll(r.x-(1-i/t)*(14/n),r.y):i>window.innerWidth-t&&window.scroll(r.x+(1-(window.innerWidth-i)/t)*(14/n),r.y)}function o(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}var n=1,i=0,d=0,s=-1,r=-1,m="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style;return m&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",function(e){1!==n&&27===e.keyCode&&zoom.out()}),document.addEventListener("mousemove",function(e){1!==n&&(i=e.clientX,d=e.clientY)}),{to:function(o){if(1!==n)zoom.out();else{if(o.x=o.x||0,o.y=o.y||0,o.element){var i=20,d=o.element.getBoundingClientRect();o.x=d.left-i,o.y=d.top-i,o.width=d.width+2*i,o.height=d.height+2*i}void 0!==o.width&&void 0!==o.height&&(o.scale=Math.max(Math.min(window.innerWidth/o.width,window.innerHeight/o.height),1)),o.scale>1&&(o.x*=o.scale,o.y*=o.scale,e(o,o.scale),o.pan!==!1&&(s=setTimeout(function(){r=setInterval(t,1e3/60)},800)))}},out:function(){clearTimeout(s),clearInterval(r),e({x:0,y:0},1),n=1},magnify:function(e){this.to(e)},reset:function(){this.out()},zoomLevel:function(){return n}}}();