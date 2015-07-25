// global js
/**
 * @param {function} a The function to execute when the DOM is ready
 *
 * Source: https://gist.github.com/dciccale/4087856
 */

var DOMReady = function(a,b,c){b=document,c='addEventListener';b[c]?b[c]('DOMContentLoaded',a):window.attachEvent('onload',a)}

DOMReady(function () {
  //Test support for -webkit-background-clip:text;
	if(document.body.style.webkitBackgroundClip !== undefined){
		document.documentElement.className += ' backgroundclip';
	}
});

/*
 *	Typekit font loader
 *
 */

(function(d) {
  var config = {
    kitId: 'ook2qrx',
    scriptTimeout: 3000
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='//use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);
