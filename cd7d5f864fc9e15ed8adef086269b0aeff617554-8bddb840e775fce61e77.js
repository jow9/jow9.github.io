(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var i=a("7HQ6"),r=a("q1tI"),n=a.n(r),s=a("9eSz"),o=a.n(s),d=a("p3AD");t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("p",null,"Written by "," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},a.name),"."),n.a.createElement("p",null,a.summary)))}},"7HQ6":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwD/2gAMAwEAAhADEAAAAcd8ZRpzFxmzWYYAa//EABsQAAICAwEAAAAAAAAAAAAAAAEDAAIEERIz/9oACAEBAAEFAsf1YC4cWi18FuqQstEmZtAs61P/xAAWEQADAAAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8BEiK//8QAFxEBAQEBAAAAAAAAAAAAAAAAARACIf/aAAgBAgEBPwHXUSM//8QAHRAAAgEEAwAAAAAAAAAAAAAAAAExAhAREiJBYf/aAAgBAQAGPwJEekM2yVauHgllZx7t/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAITFBUWH/2gAIAQEAAT8hzfIk0IVsGEBId6JvFeRoSPa0I5WDsNmSV2ZgpbhBFyf/2gAMAwEAAgADAAAAEHAn/wD/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhQTH/2gAIAQMBAT8QaLbSjIuH/8QAGREAAwEBAQAAAAAAAAAAAAAAAAERITFx/9oACAECAQE/EGWwhWZno+n/xAAdEAEAAwEAAgMAAAAAAAAAAAABABEhMUFxUWHw/9oACAEBAAE/EOZiOqPpiUjeDoOWc9sPhxqhR9MpNJzRnGdAqh0H4lLnpxZGqpGWXyy3K57XbbvtlY4Q7XxP/9k=","width":50,"height":50,"src":"/static/5af23811ae0866beea708f83e349f7f1/99438/profile-pic.jpg","srcSet":"/static/5af23811ae0866beea708f83e349f7f1/99438/profile-pic.jpg 1x,\\n/static/5af23811ae0866beea708f83e349f7f1/aba1d/profile-pic.jpg 1.5x,\\n/static/5af23811ae0866beea708f83e349f7f1/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"jow","summary":"パソコンが使えない系情報大生"},"social":{"twitter":"@han3713"}}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),f=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},c=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(c);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=f(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(L,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),L=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,c=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:f,draggable:c,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var B=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||E&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,A=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,v=e.itemProp,S=e.loading,I=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,d.default)({opacity:j?1:0,transition:B?"opacity "+E+"ms":"none"},o),N="boolean"==typeof m?"lightgray":m,k={transitionDelay:E+"ms"},z=(0,d.default)({opacity:this.state.imgLoaded?0:1},B&&k,{},o,{},c),V={title:t,alt:this.state.isVisible?"":a,style:z,className:A,itemProp:v};if(p){var Y=p,Q=g(p);return l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(Q.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/Q.aspectRatio+"%"}}),N&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&k)}),Q.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:Q.base64,spreadProps:V,imageVariants:Y,generateSources:R}),Q.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:Q.tracedSVG,spreadProps:V,imageVariants:Y,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(Y),l.default.createElement(L,{alt:a,title:t,sizes:Q.sizes,src:Q.src,crossOrigin:this.props.crossOrigin,srcSet:Q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:S},Q,{imageVariants:Y}))}}))}if(h){var W=h,G=g(h),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},N&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},B&&k)}),G.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:V,imageVariants:W,generateSources:R}),G.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:V,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(W),l.default.createElement(L,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)({alt:a,title:t,loading:S},G,{imageVariants:W}))}}))}return null},t}(l.default.Component);B.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});B.propTypes={resolutions:C,sizes:N,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=B;t.default=k},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),f=a("s5qY"),c=a("s5qY"),A=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,p=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},E={get:function(e){if(u(e)){var t=g(e);return!0===t?h(f(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(f(this,"WeakMap"),e,t)}},b=e.exports=a("4LiD")("WeakMap",m,E,l,!0,!0);c&&A&&(d((i=l.getConstructor(m,"WeakMap")).prototype,E),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=b.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!p(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),f=a("s5qY"),c=l(5),A=l(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return c(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(f(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(f(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-8bddb840e775fce61e77.js.map