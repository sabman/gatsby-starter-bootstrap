webpackJsonp([0x67ef26645b2a,60335399758886],{128:function(t,e){t.exports={layoutContext:{}}},273:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=n(1),s=i(o),a=n(279),l=i(a),u=n(128),c=i(u);e.default=function(t){return s.default.createElement(l.default,r({},t,c.default))},t.exports=e.default},276:function(t,e){(function(e){"use strict";t.exports={siteMetadata:{title:"Gatstrap",description:"Gatsby starter for bootstrap a blog",url:"https://sabman.github.io/gatsby-starter-bootstrap",author:"jaxx2104",twitter:"jaxx2104"},pathPrefix:"/gatsby-starter-bootstrap",plugins:[{resolve:"gatsby-source-filesystem",options:{path:e+"/src/pages",name:"pages"}},{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images",options:{maxWidth:750,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants"]}},"gatsby-transformer-sharp","gatsby-plugin-sass","gatsby-plugin-sharp",{resolve:"gatsby-plugin-google-analytics",options:{trackingId:""}},"gatsby-plugin-offline","gatsby-plugin-react-helmet"]}}).call(e,"/")},360:function(t,e){},361:function(t,e){},359:function(t,e){function n(t){var e=t.target||t.srcElement;e.__resizeRAF__&&r(e.__resizeRAF__),e.__resizeRAF__=i(function(){var n=e.__resizeTrigger__;n.__resizeListeners__.forEach(function(e){e.call(n,t)})})}var i=function(){var t=this,e=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||function(e){return t.setTimeout(e,20)};return function(t){return e(t)}}(),r=function(){var t=this,e=t.cancelAnimationFrame||t.mozCancelAnimationFrame||t.webkitCancelAnimationFrame||t.clearTimeout;return function(t){return e(t)}}(),e=function(t,e){function i(){this.contentDocument.defaultView.__resizeTrigger__=this.__resizeElement__,this.contentDocument.defaultView.addEventListener("resize",n)}var r,o=this,s=o.document,a=s.attachEvent;if("undefined"!=typeof navigator&&(r=navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/)),!t.__resizeListeners__)if(t.__resizeListeners__=[],a)t.__resizeTrigger__=t,t.attachEvent("onresize",n);else{"static"===getComputedStyle(t).position&&(t.style.position="relative");var l=t.__resizeTrigger__=s.createElement("object");l.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;"),l.setAttribute("class","resize-sensor"),l.__resizeElement__=t,l.onload=i,l.type="text/html",r&&t.appendChild(l),l.data="about:blank",r||t.appendChild(l)}t.__resizeListeners__.push(e)};t.exports="undefined"==typeof window?e:e.bind(window),t.exports.unbind=function(t,e){var i=document.attachEvent;e?t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1):t.__resizeListeners__=[],t.__resizeListeners__.length||(i?t.detachEvent("onresize",n):(t.__resizeTrigger__.contentDocument.defaultView.removeEventListener("resize",n),delete t.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__,t.__resizeTrigger__=!t.removeChild(t.__resizeTrigger__)),delete t.__resizeListeners__)}},362:function(t,e){},363:function(t,e){},469:function(t,e,n){for(var i=n(470),r="undefined"==typeof window?{}:window,o=["moz","webkit"],s="AnimationFrame",a=r["request"+s],l=r["cancel"+s]||r["cancelRequest"+s],u=!0,c=0;c<o.length&&!a;c++)a=r[o[c]+"Request"+s],l=r[o[c]+"Cancel"+s]||r[o[c]+"CancelRequest"+s];if(!a||!l){u=!1;var p=0,h=0,d=[],f=1e3/60;a=function(t){if(0===d.length){var e=i(),n=Math.max(0,f-(e-p));p=n+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(p)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return d.push({handle:++h,callback:t,cancelled:!1}),h},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}t.exports=function(t){return u?a.call(r,function(){try{t.apply(this,arguments)}catch(t){setTimeout(function(){throw t},0)}}):a.call(r,t)},t.exports.cancel=function(){l.apply(r,arguments)}},470:function(t,e,n){(function(e){(function(){var n,i,r;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-r)/1e6},i=e.hrtime,n=function(){var t;return t=i(),1e9*t[0]+t[1]},r=n()):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(e,n(49))},471:function(t,e,n){var i=n(93),r=n(359);t.exports={getInitialState:function(){return void 0!==this.props.initialComponentWidth&&null!==this.props.initialComponentWidth?{componentWidth:this.props.initialComponentWidth}:{}},componentDidMount:function(){this.setState({componentWidth:i.findDOMNode(this).getBoundingClientRect().width}),r(i.findDOMNode(this),this.onResize)},componentDidUpdate:function(){0===i.findDOMNode(this).getElementsByClassName("resize-sensor").length&&r(i.findDOMNode(this),this.onResize)},onResize:function(){this.setState({componentWidth:i.findDOMNode(this).getBoundingClientRect().width})}}},540:function(t,e,n){var i;i=n(541),t.exports={getInitialState:function(){return this.props.initialPageWidth?{pageWidth:this.props.initialPageWidth}:{}},componentDidMount:function(){return i.on(this.onResize)},componentWillUnmount:function(){return i.off(this.onResize)},onResize:function(t){return this.setState({pageWidth:t})}}},541:function(t,e,n){var i,r,o,s,a,l;o=n(469),i=void 0,s=[],a=!1,"undefined"!=typeof window&&null!==window&&(i=window.innerWidth),r=function(){if(!a)return a=!0,o(l)},l=function(){var t,e,n;for(i=window.innerWidth,t=0,e=s.length;t<e;t++)(n=s[t])(i);return a=!1},"undefined"!=typeof window&&null!==window&&window.addEventListener("resize",r),t.exports={on:function(t){return t(i),s.push(t)},off:function(t){return s.splice(s.indexOf(t),1)}}},542:function(t,e,n){var i,r,o,s,a,l;s=n(1),a=n(471),o=n(540),l=n(3),i=s.createClass({displayName:"Breakpoint",mixins:[a],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(t){return function(e){var n;return"Span"===(null!=e&&null!=(n=e.type)?n.displayName:void 0)?s.cloneElement(e,{context:t.props.context}):e}}(this))},render:function(){var t,e;return t=l({},this.props),delete t.maxWidth,delete t.minWidth,delete t.widthMethod,this.state.componentWidth&&this.props.minWidth<=(e=this.state.componentWidth)&&e<this.props.maxWidth?s.createElement("div",Object.assign({},t),this.renderChildren()):s.createElement("div",null)}}),r=s.createClass({displayName:"Breakpoint",mixins:[o],propTypes:{minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{minWidth:0,maxWidth:1e21}},renderChildren:function(){return s.Children.map(this.props.children,function(t){return function(e){var n;return"Span"===(null!=(n=e.type)?n.displayName:void 0)?s.cloneElement(e,{context:t.props.context}):e}}(this))},render:function(){var t,e;return t=l({},this.props),delete t.maxWidth,delete t.minWidth,delete t.widthMethod,this.state.pageWidth&&this.props.minWidth<=(e=this.state.pageWidth)&&e<this.props.maxWidth?s.createElement("div",Object.assign({},t),this.renderChildren()):s.createElement("div",null)}}),t.exports=s.createClass({displayName:"Breakpoint",propTypes:{widthMethod:s.PropTypes.string.isRequired,minWidth:s.PropTypes.number,maxWidth:s.PropTypes.number},getDefaultProps:function(){return{widthMethod:"pageWidth"}},render:function(){return"pageWidth"===this.props.widthMethod?s.createElement(r,Object.assign({},this.props)):"componentWidth"===this.props.widthMethod?s.createElement(i,Object.assign({},this.props)):void 0}})},543:function(t,e,n){var i,r;i=n(1),r=n(3),t.exports=i.createClass({displayName:"Container",render:function(){var t,e,n,o;return e={maxWidth:"960px",marginLeft:"auto",marginRight:"auto"},o=r(e,this.props.style),t=this.props.children,n=r({},this.props),delete n.children,delete n.style,i.createElement("div",Object.assign({},n,{style:o}),t,i.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},544:function(t,e,n){var i,r;i=n(1),r=n(3),t.exports=i.createClass({displayName:"Grid",propTypes:{columns:i.PropTypes.number,gutterRatio:i.PropTypes.number},getDefaultProps:function(){return{columns:12,gutterRatio:.25}},renderChildren:function(){return i.Children.map(this.props.children,function(t){return function(e){var n,r;return"Breakpoint"===(n=null!=(r=e.type)?r.displayName:void 0)||"Span"===n?i.cloneElement(e,{context:{columns:t.props.columns,gutterRatio:t.props.gutterRatio}}):e}}(this))},render:function(){var t;return t=r({},this.props),delete t.gutterRatio,delete t.columns,i.createElement("div",Object.assign({},t),this.renderChildren(),i.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},545:function(t,e,n){var i,r,o;i=n(1),r=n(3),o=n(547),t.exports=i.createClass({displayName:"Span",propTypes:{context:i.PropTypes.object,columns:i.PropTypes.number,at:i.PropTypes.number,pre:i.PropTypes.number,post:i.PropTypes.number,squish:i.PropTypes.number,last:i.PropTypes.bool,break:i.PropTypes.bool},getDefaultProps:function(){return{at:0,pre:0,post:0,squish:0,last:!1,first:!1,break:!1}},renderChildren:function(){return i.Children.map(this.props.children,function(t){return function(e){var n;return"Span"===(null!=e&&null!=(n=e.type)?n.displayName:void 0)?i.cloneElement(e,{context:{columns:t.props.columns,gutterRatio:t.props.context.gutterRatio}}):e}}(this))},render:function(){var t,e;return e=o({contextColumns:this.props.context.columns,gutterRatio:this.props.context.gutterRatio,columns:this.props.columns,at:this.props.at,pre:this.props.pre,post:this.props.post,squish:this.props.squish,last:this.props.last,break:this.props.break}),e=r(e,this.props.style),t=r({},this.props,{style:e}),delete t.at,delete t.break,delete t.columns,delete t.context,delete t.first,delete t.last,delete t.post,delete t.pre,delete t.squish,delete t.style,i.createElement("div",Object.assign({},t,{style:e}),this.renderChildren(),i.createElement("span",{style:{display:"block",clear:"both"}}," "))}})},546:function(t,e,n){e.Container=n(543),e.Grid=n(544),e.Breakpoint=n(542),e.Span=n(545)},547:function(t,e,n){var i;i=n(3),t.exports=function(t){var e,n,r,o,s,a,l,u,c,p;return r={columns:3,at:0,pre:0,post:0,squish:0,contextColumns:12,gutterRatio:.25,first:!1,last:!1},c=i(r,t),u=100/(c.contextColumns+(c.contextColumns-1)*c.gutterRatio),s=c.gutterRatio*u,n=function(t){return u*t+s*(t-1)},e=function(t){return 0===t?0:n(t)+s},p=n(c.columns),a=0===c.at&&0===c.pre&&0===c.squish?0:e(c.at)+e(c.pre)+e(c.squish),c.last&&0===c.post&&0===c.squish?l=0:0!==c.post||0!==c.squish?(l=e(c.post)+e(c.squish),c.last||(l+=s)):l=s,o=c.last?"right":"left",p+="%",a+="%",l+="%",{float:o,marginLeft:a,marginRight:l,width:p,clear:c.break?"both":"none"}}},581:function(t,e){(function(){var t,e,n,i,r,o=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var r;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,e,n,i)):null!=document.createEventObject?(r=document.createEventObject(),r.eventType=t):r.eventName=t,r},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,r,o;for(o=this.keys,e=i=0,r=o.length;i<r;e=++i)if(n=o[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,r,o,s;for(s=this.keys,n=r=0,o=s.length;r<o;n=++r)if(i=s[n],i===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),r.test(e)&&e.replace(r,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},r=/(\-([a-z]){1})/g,this.WOW=function(){function r(t){null==t&&(t={}),this.scrollCallback=o(this.scrollCallback,this),this.scrollHandler=o(this.scrollHandler,this),this.resetAnimation=o(this.resetAnimation,this),this.start=o(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return r.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},r.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},r.prototype.start=function(){var e,n,i,r;if(this.stopped=!1,this.boxes=function(){var t,n,i,r;for(i=this.element.querySelectorAll("."+this.config.boxClass),r=[],t=0,n=i.length;t<n;t++)e=i[t],r.push(e);return r}.call(this),this.all=function(){var t,n,i,r;for(i=this.boxes,r=[],t=0,n=i.length;t<n;t++)e=i[t],r.push(e);return r}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(r=this.boxes,n=0,i=r.length;n<i;n++)e=r[n],this.applyStyle(e,!0);if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t(function(t){return function(e){var n,i,r,o,s;for(s=[],n=0,i=e.length;n<i;n++)o=e[n],s.push(function(){var t,e,n,i;for(n=o.addedNodes||[],i=[],t=0,e=n.length;t<e;t++)r=n[t],i.push(this.doSync(r));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0})},r.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},r.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},r.prototype.doSync=function(t){var e,n,i,r,o;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,r=t.querySelectorAll("."+this.config.boxClass),o=[],n=0,i=r.length;n<i;n++)e=r[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),o.push(this.scrolled=!0)):o.push(void 0);return o}},r.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},r.prototype.applyStyle=function(t,e){var n,i,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),r=t.getAttribute("data-wow-iteration"),this.animate(function(o){return function(){return o.customStyle(t,e,i,n,r)}}(this))},r.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),r.prototype.resetStyle=function(){var t,e,n,i,r;for(i=this.boxes,r=[],e=0,n=i.length;e<n;e++)t=i[e],r.push(t.style.visibility="visible");return r},r.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()},r.prototype.customStyle=function(t,e,n,i,r){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),r&&this.vendorSet(t.style,{animationIterationCount:r}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},r.prototype.vendors=["moz","webkit"],r.prototype.vendorSet=function(t,e){var n,i,r,o;i=[];for(n in e)r=e[n],t[""+n]=r,i.push(function(){var e,i,s,a;for(s=this.vendors,a=[],e=0,i=s.length;e<i;e++)o=s[e],a.push(t[""+o+n.charAt(0).toUpperCase()+n.substr(1)]=r);return a}.call(this));return i},r.prototype.vendorCSS=function(t,e){var n,r,o,s,a,l;for(a=i(t),s=a.getPropertyCSSValue(e),o=this.vendors,n=0,r=o.length;n<r;n++)l=o[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},r.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},r.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},r.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},r.prototype.scrollHandler=function(){return this.scrolled=!0},r.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,n,i,r;for(i=this.boxes,r=[],e=0,n=i.length;e<n;e++)t=i[e],t&&(this.isVisible(t)?this.show(t):r.push(t));return r}.call(this),!this.boxes.length&&!this.config.live))return this.stop()},r.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r.prototype.isVisible=function(t){var e,n,i,r,o;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,r=o+Math.min(this.element.clientHeight,this.util().innerHeight())-n,i=this.offsetTop(t),e=i+t.clientHeight,i<=r&&e>=o},r.prototype.util=function(){return null!=this._util?this._util:this._util=new e},r.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},r}()}).call(this)},277:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(1),l=i(a),u=n(30),c=i(u),p=function(t){function e(){return r(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.render=function(){var t=this.props,e=t.location,n=t.title;return l.default.createElement("nav",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary"},l.default.createElement("div",{className:"container"},l.default.createElement(c.default,{className:"text-center",to:"/"},l.default.createElement("h1",{className:"navbar-brand mb-0"},n)),l.default.createElement("div",{className:"navbar-nav-scroll"},l.default.createElement("ul",{className:"navbar-nav bd-navbar-nav flex-row"},l.default.createElement("li",{className:"/"===e.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/",className:"nav-link"},"Home")),l.default.createElement("li",{className:"/profile/"===e.pathname?"nav-item active":"nav-item"},l.default.createElement(c.default,{to:"/profile/",className:"nav-link"},"Profile")))),l.default.createElement("div",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex"})))},e}(l.default.Component);e.default=p,t.exports=e.default},465:function(t,e){},279:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},l=n(1),u=i(l),c=n(30),p=(i(c),n(546),n(276)),h=n(277),d=i(h);n(465),n(360),n(362),n(363),n(361);var f=function(t){function e(){return r(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.componentDidMount=function(){var t=n(581);this.wow=new t.WOW,this.wow.init()},e.prototype.componentDidUpdate=function(){this.wow.sync()},e.prototype.render=function(){var t=this.props,e=(t.location,t.children);return u.default.createElement("div",null,u.default.createElement(d.default,a({title:p.siteMetadata.title},this.props)),e())},e}(u.default.Component);e.default=f,t.exports=e.default}});
//# sourceMappingURL=component---src-layouts-index-js-161221dbe1557f2fea6a.js.map