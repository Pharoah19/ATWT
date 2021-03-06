/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _rx = __webpack_require__(4);

	var _rx2 = _interopRequireDefault(_rx);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log('RxJS Running...');
	// http://reactivex.io/documentation/operators.html

	var search_input = (0, _jquery2.default)('#search-input');
	var search_results = (0, _jquery2.default)('#search-results');
	var keyup = Rx.Observable.fromEvent(search_input, 'keyup').map(function (e) {
	    return e.target.value;
	}).filter(function (text) {
	    return text.length > 2;
	});
	// http://reactivex.io/documentation/operators/from.html 
	// http://reactivex.io/documentation/operators/map.html

	var throttle = keyup.debounce(1000),
	    unique = throttle.distinctUntilChanged(),
	    suggestions = unique.flatMapLatest(searchData);
	// http://reactivex.io/documentation/operators/flatmap.html
	// http://reactivex.io/documentation/operators/distinct.html
	// http://reactivex.io/documentation/operators/debounce.html

	suggestions.subscribe(function (data) {
	    var results = data.data;
	    /* Do something with the data like binding */
	    search_results.empty();
	    _jquery2.default.each(results, function (index, value) {
	        return (0, _jquery2.default)('<li class="data-io"><a target="_blank" href="https://datausa.io/profile/' + value[3] + '/' + value[7] + '">' + value[4] + '</a></li>').appendTo(search_results);
	    });
	}, function (error) {
	    /* handle any errors */
	    search_results.empty();

	    (0, _jquery2.default)('<li>Error: ' + error + '</li>').appendTo(search_results);
	});
	//http://reactivex.io/documentation/operators/subscribe.html


	function searchData(term) {
	    return _jquery2.default.ajax({
	        url: 'https://ostrich-api.datausa.io/attrs/search/',
	        type: 'GET',
	        data: {
	            limit: 100,
	            q: term,
	            kind: ''
	        }
	    }).promise();
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * jQuery JavaScript Library v3.1.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-09-22T22:30Z
	 */(function(global,factory){"use strict";if(( false?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
	// is present, execute the factory and get jQuery.
	// For environments that do not have a `window` with a `document`
	// (such as Node.js), expose a factory as module.exports.
	// This accentuates the need for the creation of a real `window`.
	// e.g. var jQuery = require("jquery")(window);
	// See ticket #14549 for more info.
	module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
	})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module
	var version="3.1.1",// Define a local copy of jQuery
	jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
	// Need init if jQuery is called (just allow error to be thrown if not included)
	return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
	rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
	fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
	jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
	length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get:function get(num){// Return all the elements in a clean array
	if(num==null){return _slice.call(this);}// Return just the one element from the set
	return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack:function pushStack(elems){// Build a new jQuery matched element set
	var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
	ret.prevObject=this;// Return the newly-formed element set
	return ret;},// Execute a callback for every element in the matched set.
	each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
	if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
	target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
	if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
	if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
	if((options=arguments[i])!=null){// Extend the base object
	for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
	if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
	if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
	target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
	}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
	return target;};jQuery.extend({// Unique for each copy of jQuery on the page
	expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
	isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
	// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	// subtraction forces infinities to NaN
	!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
	// Use toString instead of jQuery.type to catch host objects
	if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
	if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
	Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
	var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
	return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
	globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
	trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
	makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
	// that pass the validator function
	for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
	map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
	if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
	}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
	return concat.apply([],ret);},// A global GUID counter for objects
	guid:1,// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
	args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
	setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
	expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
	hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
	"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
	"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
	// 1. quoted (capture 3; capture 4 or capture 5)
	"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
	"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
	".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
	// We use this for POS matching in `select`
	"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
	// Support: Firefox<24
	// Workaround erroneous numeric interpretation of +"0x"
	return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
	String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
	String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
	if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
	return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
	return"\\"+ch;},// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
	try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
	// Detect silently failing push.apply
	arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
	function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
	// Otherwise append directly
	function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
	while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
	nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
	if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
	if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
	// (excepting DocumentFragment context, where the methods don't exist)
	if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
	if(m=match[1]){// Document context
	if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
	}else{// Support: IE, Opera, Webkit
	// TODO: identify versions
	// getElementById can match elements by name instead of ID
	if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
	}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
	}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
	if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
	// Thanks to Andrew Dupont for this workaround technique
	// Support: IE <=8
	// Exclude object elements
	}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
	if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
	groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
	newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
	return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
	if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
	delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */function markFunction(fn){fn[expando]=true;return fn;}/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
	if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
	el=null;}}/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
	if(diff){return diff;}// Check if b follows a
	if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function(elem){// Only certain elements can match :enabled or :disabled
	// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
	// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
	if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
	// * listed form-associated elements in a disabled fieldset
	//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
	//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
	// * option elements in a disabled optgroup
	//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
	// All such elements have a "form" property.
	if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
	if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
	// Use the isDisabled shortcut property to check for disabled fieldset ancestors
	return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
	/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
	// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
	// even exist on them, let alone have a boolean value.
	}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
	return false;};}/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
	while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
	support=Sizzle.support={};/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
	if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
	document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
	if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
	}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
		---------------------------------------------------------------------- */// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
		---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
	support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
	if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
	// getElementById is not reliable as a find shortcut
	Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
	node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
	elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
	Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
	}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
	results=context.getElementsByTagName(tag);// Filter out possible comments
	if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
	Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
		---------------------------------------------------------------------- */// QSA and matchesSelector support
	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert(function(el){// Select is set to empty string on purpose
	// This is to test IE's treatment of not explicitly
	// setting a boolean content attribute,
	// since its presence should be enough
	// https://bugs.jquery.com/ticket/12359
	docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
	// Nothing should be selected when empty strings follow ^= or $= or *=
	// The test attribute must be unknown in Opera but "safe" for WinRT
	// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
	if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
	// Boolean attributes and "value" are not treated correctly
	if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
	if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	// IE8 throws error here and will not see later tests
	if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
	// https://bugs.webkit.org/show_bug.cgi?id=136851
	// In-page `selector#id sibling-combinator selector` fails
	if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
	// The type and name attributes are restricted during .innerHTML assignment
	var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
	// Enforce case-sensitivity of name attribute
	if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
	// IE8 throws error here and will not see later tests
	if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
	// IE's :disabled selector does not pick up the children of disabled fieldsets
	docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
	el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
	// on a disconnected node (IE 9)
	support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
	// Gecko does not error, returns false instead
	matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
		---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
		---------------------------------------------------------------------- */// Document order sorting
	sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
	if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
	var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
	compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
	1;// Disconnected nodes
	if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
	if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
	return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
	if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
	if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
	}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
	cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
	while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
	siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
	ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
	expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
	if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
	// fragment in IE 9
	elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
	if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
	if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
	val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput=null;return results;};/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
	while(node=elem[i++]){// Do not traverse comment nodes
	ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
	// innerText usage removed for consistency of new lines (jQuery #11153)
	if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
	return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
	cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
	match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
	if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
	// remember that false/true cast respectively to 0/1
	match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
	}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
	if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
	}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
	excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
	excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
	match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
	return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
	function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
	if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
	start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
	if(forward&&useCache){// Seek `elem` from a previously-cached index
	// ...in a gzip-friendly way
	node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
	diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
	if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
	if(useCache){// ...in a gzip-friendly way
	node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
	// or :nth-last-child(...) or :nth(-last)?-of-type(...)
	if(diff===false){// Use the same loop as above to seek `elem` from the start
	while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
	if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
	diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
	// http://www.w3.org/TR/selectors/#pseudo-classes
	// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
	// Remember that setFilters inherits from pseudos
	var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
	// arguments are needed to create the filter function
	// just as Sizzle does
	if(fn[expando]){return fn(argument);}// But maintain support for old signatures
	if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
	"not":markFunction(function(selector){// Trim the selector passed to compile
	// to avoid treating leading and trailing
	// spaces as combinators
	var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
	while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
	input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
	// is based solely on the element's language value
	// being equal to the identifier C,
	// or beginning with the identifier C immediately followed by "-".
	// The matching of C against the element's language value is performed case-insensitively.
	// The identifier C does not have to be a valid language name."
	// http://www.w3.org/TR/selectors/#lang-pseudo
	"lang":markFunction(function(lang){// lang value must be a valid identifier
	if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
	"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
	"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
	// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
	var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
	// options in Safari work properly
	if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
	"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
	// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
	//   but not by others (comment: 8; processing instruction: 7; etc.)
	// nodeType < 6 works because attributes (2) do not appear as children
	for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
	"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
	// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
	(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
	"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
	for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
	function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
	if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
	soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
	if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
	type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
	for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
	tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
	function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
	function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
	if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
	// Defend against cloned attroperties (jQuery gh-1709)
	uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
	return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
	uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
	if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
	elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
	matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
	postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
	[]:// ...otherwise use results directly
	results:matcherIn;// Find primary matches
	if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
	if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
	i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
	temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
	temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
	i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
	}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
	matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
	checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
	if(matcher[expando]){// Find the next relative operator (if any) for proper handling
	j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
	tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
	elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
	dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
	// Support: IE<9, Safari
	// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
	for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
	if(bySet){// They will have gone through all possible matchers
	if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
	if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
	// makes the latter nonnegative.
	matchedCount+=i;// Apply set filters to unmatched elements
	// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
	// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
	// no element matchers and no seed.
	// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
	// case, which will result in a "00" `matchedCount` that differs from `i` but is also
	// numerically zero.
	if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
	if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
	setMatched=condense(setMatched);}// Add matches to results
	push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
	if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
	if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
	if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
	cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
	cached.selector=selector;}return cached;};/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if(match.length===1){// Reduce context if the leading compound selector is an ID
	tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
	}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
	i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
	if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
	if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
	tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
	// Sort stability
	support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
	setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
	jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
	function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
	if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
	if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
	if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
	qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
	// so $("p:first").is("p:last") won't return true for a doc with two "p".
	typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
	// A central reference to the root jQuery(document)
	var rootjQuery,// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
	if(!selector){return this;}// Method init() accepts an alternate rootjQuery
	// so migrate can support jQuery.sub (gh-2101)
	root=root||rootjQuery;// Handle HTML strings
	if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
	match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
	if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
	if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
	// Intentionally let the error be thrown if parseHTML is not present
	jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
	if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
	if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
	}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
	}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
	this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
	}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
	// (which is just equivalent to: $(context).find(expr)
	}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
	}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
	// Shortcut for document ready
	}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
	selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
	init.prototype=jQuery.fn;// Initialize central reference
	rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
	if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
	if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
	cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
	index:function index(elem){// No argument, return index in parent
	if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
	if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
	return indexOf.call(this,// If it receives a jQuery object, the first element is used
	elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
	if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
	if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
	function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
	firing,// Last fire value for non-forgettable lists
	memory,// Flag to know if list was already fired
	_fired,// Flag to prevent firing
	_locked,// Actual callback list
	list=[],// Queue of execution data for repeatable lists
	queue=[],// Index of currently firing callback (modified by add/remove as needed)
	firingIndex=-1,// Fire callbacks
	fire=function fire(){// Enforce single-firing
	_locked=options.once;// Execute callbacks for all pending executions,
	// respecting firingIndex overrides and runtime changes
	_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
	if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
	firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
	if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
	if(_locked){// Keep an empty list if we have data for future add calls
	if(memory){list=[];// Otherwise, this object is spent
	}else{list="";}}},// Actual Callbacks object
	self={// Add a callback or a collection of callbacks to the list
	add:function add(){if(list){// If we have memory from a past run, we should fire after adding
	if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
	add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
	remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
	if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
	// If no argument is given, return whether or not list has callbacks attached.
	has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
	empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
	// Abort any current/pending executions
	// Clear all callbacks and values
	disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
	// Also disable .add unless we have memory (since it would have no effect)
	// Abort any pending executions
	lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
	fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
	fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
	fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
	if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
	}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
	}else{// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	}catch(value){// Support: Android 4.0 only
	// Strict mode functions invoked without .call/.apply get global-object context
	reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
	// ... .then handlers, argument index, [final state]
	["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
	pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
	var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
	// deferred.done(function() { bind to newDefer or newDefer.resolve })
	// deferred.fail(function() { bind to newDefer or newDefer.reject })
	deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
	// https://promisesaplus.com/#point-59
	// Ignore double-resolution attempts
	if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
	// https://promisesaplus.com/#point-48
	if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
	// https://promisesaplus.com/#point-54
	// https://promisesaplus.com/#point-75
	// Retrieve `then` only once
	then=returned&&(// Support: Promises/A+ section 2.3.4
	// https://promisesaplus.com/#point-64
	// Only check objects and functions for thenability
	(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
	if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
	if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
	}else{// ...and disregard older resolution values
	maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
	}else{// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
	// Default process is resolve
	(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
	process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
	// https://promisesaplus.com/#point-61
	// Ignore post-resolution exceptions
	if(depth+1>=maxDepth){// Only substitute handlers pass on context
	// and multiple values (non-spec behavior)
	if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
	// https://promisesaplus.com/#point-57
	// Re-resolve promises immediately to dodge false rejection from
	// subsequent errors
	if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
	// since it's otherwise lost when execution goes async
	if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
	tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
	tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
	tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
	// If obj is provided, the promise aspect is added to the object
	promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
	jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
	// promise.done = list.add
	// promise.fail = list.add
	_promise[tuple[1]]=list.add;// Handle state
	if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
	// state = "rejected"
	_state=stateString;},// rejected_callbacks.disable
	// fulfilled_callbacks.disable
	tuples[3-i][2].disable,// progress_callbacks.lock
	tuples[0][2].lock);}// progress_handlers.fire
	// fulfilled_handlers.fire
	// rejected_handlers.fire
	list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
	// deferred.resolve = function() { deferred.resolveWith(...) }
	// deferred.reject = function() { deferred.rejectWith(...) }
	deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
	// deferred.resolveWith = list.fireWith
	// deferred.rejectWith = list.fireWith
	deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
	_promise.promise(deferred);// Call given func if any
	if(func){func.call(deferred,deferred);}// All done!
	return deferred;},// Deferred helper
	when:function when(singleValue){var// count of uncompleted subordinates
	remaining=arguments.length,// count of unprocessed arguments
	i=remaining,// subordinate fulfillment data
	resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
	master=jQuery.Deferred(),// subordinate callback factory
	updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
	if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
	if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
	while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
	var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
	// happens at the time of error handling instead of callback
	// registration.
	.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
	isReady:false,// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait:1,// Hold (or release) the ready event
	holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
	ready:function ready(wait){// Abort if there are pending holds or we're already ready
	if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
	jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
	if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
	readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
	function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout(jQuery.ready);}else{// Use the handy event callback
	document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
	window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
	if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
	}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
	if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
	}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
	if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
	var value=owner[this.expando];// If not, create one
	if(!value){value={};// We can accept data for non-element nodes in modern browsers,
	// but we should not, see #8335.
	// Always return an empty object.
	if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
	// use plain assignment
	if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
	// configurable must be true to allow the property to be
	// deleted when data is removed
	}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
	// Always use camelCase key (gh-2257)
	if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
	}else{// Copy the properties one-by-one to the cache object
	for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
	owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
	//
	//   1. No key was specified
	//   2. A string key was specified, but no value provided
	//
	// Take the "read" path and allow the get method to determine
	// which value to return, respectively either:
	//
	//   1. The entire cache object
	//   2. The data stored at the key
	//
	if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
	// are specified, set or extend (existing objects) with either:
	//
	//   1. An object of properties
	//   2. A key and value
	//
	this.set(owner,key,value);// Since the "set" path can have two possible entry points
	// return the expected data based on which path was taken[*]
	return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
	if(jQuery.isArray(key)){// If key is an array of keys...
	// We always set camelCase keys, so remove that.
	key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
	// Otherwise, create an array by matching non-whitespace
	key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
	if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
	// Webkit & Blink performance suffers when deleting properties
	// from DOM nodes, so set to undefined instead
	// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
	if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
	if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
	dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
	if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
	// The attrs elements can be null (#14894)
	if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
	if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
	// (and therefore has an element appears at this[ 0 ]) and the
	// `value` parameter was not undefined. An empty jQuery object
	// will result in `undefined` for elem = this[ 0 ] which will
	// throw an exception if an attempt to read a data cache is made.
	if(elem&&value===undefined){// Attempt to get data from the cache
	// The key will always be camelCased in Data
	data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
	// HTML5 custom data-* attrs
	data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
	return;}// Set the data...
	this.each(function(){// We always store the camelCased key
	dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
	if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
	if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
	// automatically dequeued
	if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
	delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
	_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
	jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem=el||elem;// Inline style trumps all
	return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
	// Support: Firefox <=43 - 45
	// Disconnected elements can have computed display: none, so first confirm that elem is
	// in the document.
	jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
	for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
	for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
	initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
	unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
	valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
	initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
	// Use string for doubling so we don't accidentally see scale as unchanged below
	scale=scale||".5";// Adjust and apply
	initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
	// Break the loop if scale is unchanged or perfect, or if we've just had enough.
	}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
	adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
	for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
	// check is required in this first loop unless we have a nonempty display value (either
	// inline or about-to-be-restored)
	if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
	dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
	for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
	var wrapMap={// Support: IE <=9 only
	option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
	wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&jQuery.nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
	function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
	if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
	}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
	}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
	tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
	j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
	tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
	tmp.textContent="";}}}// Remove wrapper from fragment
	fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
	if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
	tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
	if(contains){setGlobalEval(tmp);}// Capture executables
	if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
	if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
	if(typeof selector!=="string"){// ( types-Object, data )
	data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
	fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
	fn=data;data=undefined;}else{// ( types, data, fn )
	fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
	jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
	fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
	if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
	if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
	// Evaluate against documentElement in case elem is a non-element node (e.g., document)
	if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
	if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
	if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
	// when an event is called after a page has unloaded
	return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
	types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
	if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
	special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
	type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
	special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
	handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
	if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
	if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
	if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
	jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
	remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
	types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
	if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
	origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
	// (avoids potential for endless recursion during removal of special event handlers)
	if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
	if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
	var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
	args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
	if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
	handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
	i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
	// a subset or equal to those in the bound event (both can have no namespace).
	if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
	if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
	if(delegateCount&&// Support: IE <=9
	// Black-hole SVG <use> instance trees (trac-13180)
	cur.nodeType&&// Support: Firefox <=42
	// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
	// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
	// Support: IE 11 only
	// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
	!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
	// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
	if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
	sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
	cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
	noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
	trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
	trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
	_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
	// Firefox doesn't alert if the returnValue field is not set.
	if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
	if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
	if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
	if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
	// by a handler lower down the tree; reflect the correct value.
	this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
	src.returnValue===false?returnTrue:returnFalse;// Create target properties
	// Support: Safari <=6 - 7 only
	// Target should not be a text node (#504, #13143)
	this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
	}else{this.type=src;}// Put explicitly provided properties onto the event object
	if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
	this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
	this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
	if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
	if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
	// NB: No relatedTarget if the mouse left/entered the browser window
	if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
	handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
	for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
	fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
	rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
	if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
	if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
	function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
	if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
	}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
	args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
	if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
	if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
	// instead of the first because it can end up
	// being emptied incorrectly in certain situations (#8070).
	for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
	if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
	jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
	for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
	if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
	if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
	destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
	if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
	destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
	return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
	}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
	// Assign undefined instead of using delete, see Data#remove
	elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
	jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
	elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
	if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
	if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
	}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
	return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
	},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
	// .get() because push.apply(_, arraylike) throws on ancient WebKit
	push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
	// IE throws on elements created in popups
	// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
	var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests(){// This is a singleton, we need to execute it only once
	if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
	reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
	// Some styles come back with percentage values, even though they shouldn't
	div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
	// it will also be a sign that checks already performed
	div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
	if(!div.style){return;}// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
	// Android Browser returns percentage for some values,
	// but width seems to be reliably pixels.
	// This is against the CSSOM draft spec:
	// https://drafts.csswg.org/cssom/#resolved-values
	if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
	width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
	style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
	style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
	// IE returns zIndex value as an integer.
	ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
	return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
	// to missing dependency), remove it.
	delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
	return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name){// Shortcut for names that are not vendor prefixed
	if(name in emptyStyle){return name;}// Check for vendor prefixed names
	var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
	// normalized at this point
	var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
	Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
	if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
	}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
	if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
	if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
	if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
	val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
	if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
	var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
	val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
	if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
	val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
	return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
	var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
	cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
	style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
	if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
	var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
	if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
	if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
	type="number";}// Make sure that null and NaN values aren't set (#7116)
	if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
	if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
	if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
	if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
	if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
	return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
	name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
	hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
	if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
	if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
	if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
	if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
	// but it must have a current display style that would benefit
	return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
	// Table columns in Safari have non-zero offsetWidth & zero
	// getBoundingClientRect().width unless display is changed.
	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
	if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
	jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
	parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
	// or when there is no matching style property that exists.
	if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
	// attempt a parseFloat and fallback to a string if the parse fails.
	// Simple values such as "10px" are parsed to Float;
	// complex values such as "rotate(1rad)" are returned as-is.
	result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
	return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
	// Use cssHook if its there.
	// Use .style if available and use plain properties where available.
	if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
	jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
	function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
	function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
	return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
	if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
	anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
	for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
	// there is still data from a stopped show/hide
	if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
	}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
	propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
	if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
	// Record all 3 overflow attributes because IE does not infer the shorthand
	// from identically-valued overflowX and overflowY
	opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
	restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
	showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
	if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
	if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
	propTween=false;for(prop in orig){// General show/hide setup for this element animation
	if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
	if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
	if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
	if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
	propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
	for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
	// Reusing 'index' because we have the correct "name"
	for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
	delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
	// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
	temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
	// otherwise we skip this part
	length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
	if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
	return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
	if(jQuery.fx.off||document.hidden){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
	if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
	opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
	return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
	.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
	var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
	if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
	// Timers currently will call their complete callbacks, which
	// will dequeue but only if they were gotoEnd.
	if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
	data.finish=true;// Empty the queue first
	jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
	for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
	for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
	delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
	jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
	if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
	_default:400};// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn=input.value!=="";// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected=opt.selected;// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
	if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
	// Grab necessary hook if one is defined
	if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
	return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
	// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
	attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
	boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
	jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
	handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
	if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
	name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
	// elem.tabIndex doesn't always return the
	// correct value when it hasn't been explicitly set
	// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	// Use proper attribute retrieval(#12072)
	var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
	finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
	cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
	while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
	finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
	i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
	if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
	}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
	dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
	// then remove the whole classname (if there was one, the above saved it).
	// Otherwise bring back whatever was previously saved (if anything),
	// falling back to the empty string if nothing was stored.
	if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
	if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
	return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
	if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
	if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
	// option.text throws exceptions (#14686, #14858)
	// Strip and collapse whitespace
	// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
	stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
	for(;i<max;i++){option=options[i];// Support: IE <=9 only
	// IE8-9 doesn't update selected after form reset (#2551)
	if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
	!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
	value=jQuery(option).val();// We don't need an array for one selects
	if(one){return value;}// Multi-Selects return an array
	values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
	if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
	jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
	var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
	if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
	if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
	namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
	event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
	event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
	event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
	data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
	special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
	// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
	if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
	if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
	i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
	handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
	handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
	if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
	// Don't do default actions on window, that's where global variables be (#6170)
	if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
	tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
	jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
	jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
	var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
	jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
	jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
	add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
	buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
	for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
	add(prefix,obj);}}// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
	var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
	if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
	jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
	// did it), otherwise encode params recursively.
	for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
	return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
	var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
	return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(jQuery.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
	rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */prefilters={},/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
	originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
	return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
	while(dataType=dataTypes[i++]){// Prepend if requested
	if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
	}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
	while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
	if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
	if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
	for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
	finalDataType=finalDataType||firstDataType;}// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
	dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
	if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
	while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
	if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
	if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
	}else if(prev!=="*"&&prev!==current){// Seek a direct converter
	conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
	if(!conv){for(conv2 in converters){// If conv2 outputs current
	tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
	conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
	if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
	}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
	if(conv!==true){// Unless errors are allowed to bubble, catch and return them
	if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
	active:0,// Last-Modified header cache for next request
	lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
	// Keys separate source (or catchall "*") and destination types with a single space
	converters:{// Convert anything to text
	"* text":String,// Text to html (true = no transformation)
	"text html":true,// Evaluate text as a json expression
	"text json":JSON.parse,// Parse text as xml
	"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
	// you can add your own custom options here if
	// and when you create one that shouldn't be
	// deep extended (see ajaxExtend)
	flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
	ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
	ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
	ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
	if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
	options=options||{};var transport,// URL without anti-cache param
	cacheURL,// Response headers
	responseHeadersString,responseHeaders,// timeout handle
	timeoutTimer,// Url cleanup var
	urlAnchor,// Request state (becomes false upon send and true upon completion)
	completed,// To know if global events are to be dispatched
	fireGlobals,// Loop variable
	i,// uncached part of the url
	uncached,// Create the final options object
	s=jQuery.ajaxSetup({},options),// Callbacks context
	callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
	globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
	deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
	_statusCode=s.statusCode||{},// Headers (they are sent all at once)
	requestHeaders={},requestHeadersNames={},// Default abort message
	strAbort="canceled",// Fake xhr
	jqXHR={readyState:0,// Builds headers hashtable if needed
	getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
	getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
	setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
	overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
	statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
	jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
	for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
	abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
	deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
	// Handle falsy url in the settings object (#10093: consistency with old signature)
	// We also use the url parameter if available
	s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
	s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
	s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
	if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
	// IE throws exception on accessing the href property if url is malformed,
	// e.g. http://example.com:80x/
	try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
	// Anchor's host property isn't correctly set when s.url is relative
	urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
	// it can be rejected by the transport if it is invalid
	s.crossDomain=true;}}// Convert data if not already a string
	if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
	inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
	if(completed){return jqXHR;}// We can fire global events as of now if asked to
	// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
	fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
	if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
	s.type=s.type.toUpperCase();// Determine if request has content
	s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
	// and/or If-None-Match header later on
	// Remove hash to simplify url manipulation
	cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
	if(!s.hasContent){// Remember the hash so we can put it back
	uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
	if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
	delete s.data;}// Add or update anti-cache param if needed
	if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
	s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
	}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
	if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
	jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
	for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
	if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
	return jqXHR.abort();}// Aborting is no longer a cancellation
	strAbort="abort";// Install callbacks on deferreds
	completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
	transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
	if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
	if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
	if(completed){return jqXHR;}// Timeout
	if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
	if(completed){throw e;}// Propagate others as results
	done(-1,e);}}// Callback for when everything is done
	function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
	if(completed){return;}completed=true;// Clear timeout if it exists
	if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
	// (no matter how long the jqXHR object will be used)
	transport=undefined;// Cache response headers
	responseHeadersString=headers||"";// Set readyState
	jqXHR.readyState=status>0?4:0;// Determine if successful
	isSuccess=status>=200&&status<300||status===304;// Get response data
	if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
	response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
	if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
	if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
	if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
	}else if(status===304){statusText="notmodified";// If we have data, let's convert it
	}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
	error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
	jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
	if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
	jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
	completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
	if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
	if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
	return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
	type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
	wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
	0:200,// Support: IE <=9 only
	// #1450: sometimes IE returns 1223 when it should be 204
	1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
	if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
	if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
	if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
	// For cross-domain requests, seeing as conditions for a preflight are
	// akin to a jigsaw puzzle, we simply never set it to be sure.
	// (it can always be set on a per-request basis or even using ajaxSetup)
	// For same-domain requests, won't change header if already provided.
	if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
	for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
	_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
	// On a manual native abort, IE9 throws
	// errors on any property access that is not readyState
	if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
	xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
	// IE9 has no XHR2 but throws on binary (trac-11426)
	// For XHR2 non-text, let the caller handle it (gh-2498)
	(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
	xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
	// Use onreadystatechange to replace onabort
	// to handle uncaught aborts
	if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
	if(xhr.readyState===4){// Allow onerror to be called first,
	// but that will not handle a native abort
	// Also, save errorCallback to a variable
	// as xhr.onerror cannot be accessed
	window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
	_callback=_callback("abort");try{// Do send the request (this may raise an exception)
	xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
	if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
	jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
	jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
	if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
	document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
	jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
	callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
	if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
	s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
	s.dataTypes[0]="json";// Install callback
	overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
	jqXHR.always(function(){// If previous value didn't exist - remove it
	if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
	}else{window[callbackName]=overwritten;}// Save back as free
	if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
	s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
	oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
	if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
	return"script";}});// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
	// by using document.implementation
	if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
	// so any parsed elements with URLs
	// are based on the document's URL (gh-2965)
	base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
	if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
	 * Load a url into a page
	 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
	if(jQuery.isFunction(params)){// We assume that it's the callback
	callback=params;params=undefined;// Otherwise, build a param string
	}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
	if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
	// Make value of this field explicit since
	// user can override it through ajaxSetup method
	type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
	response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
	// Exclude scripts to avoid IE 'Permission Denied' errors
	jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
	responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
	// but they are ignored because response was set above.
	// If it fails, this function gets "jqXHR", "status", "error"
	}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
	 * Gets a window from an element
	 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
	if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
	// top or left is auto and position is either absolute or fixed
	if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
	options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
	if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
	// Running getBoundingClientRect on a
	// disconnected node in IE throws an error
	if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
	if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
	return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
	// because it is its only offset parent
	if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
	offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
	offsetParent=this.offsetParent();// Get correct offsets
	offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
	parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
	return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
	jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
	return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
	jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
	return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
	if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
	// whichever is greatest
	return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
	jQuery.css(elem,type,extra):// Set width or height on the element
	jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
	return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return jQuery;}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}var// Map over jQuery in case of overwrite
	_jQuery=window.jQuery,// Map over the $ in case of overwrite
	_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
	 * Vue.js v2.0.0-rc.8
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */(function(global,factory){( false?'undefined':_typeof(exports))==='object'&&typeof module!=='undefined'?module.exports=factory(): true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):global.Vue=factory();})(undefined,function(){'use strict';/*  *//**
	 * Convert a value to a string that is actually rendered.
	 */function _toString(val){return val==null?'':(typeof val==='undefined'?'undefined':_typeof(val))==='object'?JSON.stringify(val,null,2):String(val);}/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */function toNumber(val){var n=parseFloat(val,10);return n||n===0?n:val;}/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
	 * Check if a tag is a built-in tag.
	 */var isBuiltInTag=makeMap('slot,component',true);/**
	 * Remove an item from an array
	 */function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
	 * Check whether the object has the property.
	 */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
	 * Check if value is primitive
	 */function isPrimitive(value){return typeof value==='string'||typeof value==='number';}/**
	 * Create a cached version of a pure function.
	 */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
	 * Camelize a hyphen-delmited string.
	 */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
	 * Capitalize a string.
	 */var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
	 * Hyphenate a camelCase string.
	 */var hyphenateRE=/([^-])([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'$1-$2').replace(hyphenateRE,'$1-$2').toLowerCase();});/**
	 * Simple bind, faster than native
	 */function bind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}// record original fn length
	boundFn._length=fn.length;return boundFn;}/**
	 * Convert an Array-like object to a real Array.
	 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
	 * Mix properties into target object.
	 */function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}/**
	 * Merge an Array of Objects into a single Object.
	 */function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}/**
	 * Perform no operation.
	 */function noop(){}/**
	 * Always return false.
	 */var no=function no(){return false;};/**
	 * Generate a static keys string from compiler modules.
	 */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */function looseEqual(a,b){/* eslint-disable eqeqeq */return a==b||(isObject(a)&&isObject(b)?JSON.stringify(a)===JSON.stringify(b):false);/* eslint-enable eqeqeq */}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}/*  */var config={/**
	   * Option merge strategies (used in core/util/options)
	   */optionMergeStrategies:Object.create(null),/**
	   * Whether to suppress warnings.
	   */silent:false,/**
	   * Whether to enable devtools
	   */devtools:"development"!=='production',/**
	   * Error handler for watcher errors
	   */errorHandler:null,/**
	   * Ignore certain custom elements
	   */ignoredElements:null,/**
	   * Custom user key aliases for v-on
	   */keyCodes:Object.create(null),/**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */isReservedTag:no,/**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */isUnknownElement:no,/**
	   * Get the namespace of an element
	   */getTagNamespace:noop,/**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */mustUseProp:no,/**
	   * List of asset types that a component can own.
	   */_assetTypes:['component','directive','filter'],/**
	   * List of lifecycle hooks.
	   */_lifecycleHooks:['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated'],/**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */_maxUpdateCount:100,/**
	   * Server rendering?
	   */_isServer:"client"==='server'};/*  *//**
	 * Check if a string starts with $ or _
	 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
	 * Define a property.
	 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
	 * Parse simple path.
	 */var bailRE=/[^\w\.\$]/;function parsePath(path){if(bailRE.test(path)){return;}else{var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}}/*  *//* globals MutationObserver */// can we use __proto__?
	var hasProto='__proto__'in{};// Browser environment sniffing
	var inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]';var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);// detect devtools
	var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;/* istanbul ignore next */function isNative(Ctor){return /native code/.test(Ctor.toString());}/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, but MutationObserver is unreliable
	 * in iOS UIWebView so we use a setImmediate shim and fallback to setTimeout.
	 */var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}// the nextTick behavior leverages the microtask queue, which can be accessed
	// via either native Promise.then or MutationObserver.
	// MutationObserver has wider support, however it is seriously bugged in
	// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	// completely stops working after triggering a few times... so, if native
	// Promise is available, we will use it:
	/* istanbul ignore if */if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function timerFunc(){p.then(nextTickHandler);// in problematic UIWebViews, Promise.then doesn't completely break, but
	// it can get stuck in a weird state where callbacks are pushed into the
	// microtask queue but the queue isn't being flushed, until the browser
	// needs to do some other work, e.g. handle a timer. Therefore we can
	// "force" the microtask queue to be flushed by adding an empty timer.
	if(isIOS){setTimeout(noop);}};}else if(typeof MutationObserver!=='undefined'){// use MutationObserver where native Promise is not available,
	// e.g. IE11, iOS7, Android 4.4
	var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=String(counter);};}else{// fallback to setTimeout
	/* istanbul ignore next */timerFunc=setTimeout;}return function queueNextTick(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(!pending){pending=true;timerFunc(nextTickHandler,0);}};}();var _Set;/* istanbul ignore if */if(typeof Set!=='undefined'&&isNative(Set)){// use native Set when available.
	_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
	_Set=function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]!==undefined;};Set.prototype.add=function add(key){this.set[key]=1;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}/* not type checking this file because flow doesn't play well with Proxy */var hasProxy;var proxyHandlers;var initProxy;if(true){var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require'// for Webpack/Browserify
	);hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);proxyHandlers={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||key.charAt(0)==='_';if(!has&&!isAllowed){warn("Property or method \""+key+"\" is not defined on the instance but "+"referenced during render. Make sure to declare reactive data "+"properties in the data option.",target);}return has||!isAllowed;}};initProxy=function initProxy(vm){if(hasProxy){vm._renderProxy=new Proxy(vm,proxyHandlers);}else{vm._renderProxy=vm;}};}/*  */var uid$2=0;/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */var Dep=function Dep(){this.id=uid$2++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){// stablize the subscriber list first
	var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target=null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target=_target;}function popTarget(){Dep.target=targetStack.pop();}/*  */var queue=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;/**
	 * Reset the scheduler's state.
	 */function resetSchedulerState(){queue.length=0;has={};if(true){circular={};}waiting=flushing=false;}/**
	 * Flush both queues and run the watchers.
	 */function flushSchedulerQueue(){flushing=true;// Sort queue before flush.
	// This ensures that:
	// 1. Components are updated from parent to child. (because parent is always
	//    created before the child)
	// 2. A component's user watchers are run before its render watcher (because
	//    user watchers are created before the render watcher)
	// 3. If a component is destroyed during a parent component's watcher run,
	//    its watchers can be skipped.
	queue.sort(function(a,b){return a.id-b.id;});// do not cache length because more watchers might be pushed
	// as we run existing watchers
	for(index=0;index<queue.length;index++){var watcher=queue[index];var id=watcher.id;has[id]=null;watcher.run();// in dev build, check and stop circular updates.
	if("development"!=='production'&&has[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}// devtool hook
	/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}resetSchedulerState();}/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{// if already flushing, splice the watcher based on its id
	// if already past its id, it will be run next immediately.
	var i=queue.length-1;while(i>=0&&queue[i].id>watcher.id){i--;}queue.splice(Math.max(i,index)+1,0,watcher);}// queue the flush
	if(!waiting){waiting=true;nextTick(flushSchedulerQueue);}}}/*  */var uid$1=0;/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */var Watcher=function Watcher(vm,expOrFn,cb,options){if(options===void 0)options={};this.vm=vm;vm._watchers.push(this);// options
	this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.expression=expOrFn.toString();this.cb=cb;this.id=++uid$1;// uid for batching
	this.active=true;this.dirty=this.lazy;// for lazy watchers
	this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();// parse expression for getter
	if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=function(){};"development"!=='production'&&warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};/**
	 * Evaluate the getter, and re-collect dependencies.
	 */Watcher.prototype.get=function get(){pushTarget(this);var value=this.getter.call(this.vm,this.vm);// "touch" every property so they are all tracked as
	// dependencies for deep watching
	if(this.deep){traverse(value);}popTarget();this.cleanupDeps();return value;};/**
	 * Add a dependency to this directive.
	 */Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
	 * Clean up for dependency collection.
	 */Watcher.prototype.cleanupDeps=function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--){var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */Watcher.prototype.update=function update(){/* istanbul ignore else */if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
	// when the value is the same, because the value may
	// have mutated.
	isObject(value)||this.deep){// set new value
	var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){"development"!=='production'&&warn("Error in watcher \""+this.expression+"\"",this.vm);/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,this.vm);}else{throw e;}}}else{this.cb.call(this.vm,value,oldValue);}}}};/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};/**
	 * Depend on all deps collected by this watcher.
	 */Watcher.prototype.depend=function depend(){var this$1=this;var i=this.deps.length;while(i--){this$1.deps[i].depend();}};/**
	 * Remove self from all dependencies' subcriber list.
	 */Watcher.prototype.teardown=function teardown(){var this$1=this;if(this.active){// remove self from vm's watcher list
	// this is a somewhat expensive operation so we skip it
	// if the vm is being destroyed or is performing a v-for
	// re-render (the watcher list is then filtered by v-for).
	if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){remove(this.vm._watchers,this);}var i=this.deps.length;while(i--){this$1.deps[i].removeSub(this$1);}this.active=false;}};/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */var seenObjects=new _Set();function traverse(val,seen){var i,keys;if(!seen){seen=seenObjects;seen.clear();}var isA=Array.isArray(val);var isO=isObject(val);if((isA||isO)&&Object.isExtensible(val)){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}else{seen.add(depId);}}if(isA){i=val.length;while(i--){traverse(val[i],seen);}}else if(isO){keys=Object.keys(val);i=keys.length;while(i--){traverse(val[keys[i]],seen);}}}}/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto)/**
	 * Intercept mutating methods and emit events
	 */;['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
	var original=arrayProto[method];def(arrayMethods,method,function mutator(){var arguments$1=arguments;// avoid leaking arguments:
	// http://jsperf.com/closure-with-arguments
	var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments$1[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}// notify change
	ob.dep.notify();return result;});});/*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */var observerState={shouldConvert:true,isSettingProps:false};/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}};/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive(obj,keys[i],obj[keys[i]]);}};/**
	 * Observe a list of Array items.
	 */Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};// helpers
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */function protoAugment(target,src){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */function observe(value){if(!isObject(value)){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!config._isServer&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}return ob;}/**
	 * Define a reactive property on an Object.
	 */function defineReactive(obj,key,val,customSetter){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
	var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(Array.isArray(value)){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if("development"!=='production'&&customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */function set(obj,key,val){if(Array.isArray(obj)){obj.splice(key,1,val);return val;}if(hasOwn(obj,key)){obj[key]=val;return;}var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return;}if(!ob){obj[key]=val;return;}defineReactive(ob.value,key,val);ob.dep.notify();return val;}/**
	 * Delete a property and trigger change if necessary.
	 */function del(obj,key){var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){"development"!=='production'&&warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(obj,key)){return;}delete obj[key];if(!ob){return;}ob.dep.notify();}/*  */function initState(vm){vm._watchers=[];initProps(vm);initData(vm);initComputed(vm);initMethods(vm);initWatch(vm);}function initProps(vm){var props=vm.$options.props;if(props){var propsData=vm.$options.propsData||{};var keys=vm.$options._propKeys=Object.keys(props);var isRoot=!vm.$parent;// root instance props should be converted
	observerState.shouldConvert=isRoot;var loop=function loop(i){var key=keys[i];/* istanbul ignore else */if(true){defineReactive(vm,key,validateProp(key,props,propsData,vm),function(){if(vm.$parent&&!observerState.isSettingProps){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}else{}};for(var i=0;i<keys.length;i++){loop(i);}observerState.shouldConvert=true;}}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?data.call(vm):data||{};if(!isPlainObject(data)){data={};"development"!=='production'&&warn('data functions should return an object.',vm);}// proxy data on instance
	var keys=Object.keys(data);var props=vm.$options.props;var i=keys.length;while(i--){if(props&&hasOwn(props,keys[i])){"development"!=='production'&&warn("The data property \""+keys[i]+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else{proxy(vm,keys[i]);}}// observe data
	observe(data);data.__ob__&&data.__ob__.vmCount++;}var computedSharedDefinition={enumerable:true,configurable:true,get:noop,set:noop};function initComputed(vm){var computed=vm.$options.computed;if(computed){for(var key in computed){var userDef=computed[key];if(typeof userDef==='function'){computedSharedDefinition.get=makeComputedGetter(userDef,vm);computedSharedDefinition.set=noop;}else{computedSharedDefinition.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,vm):bind(userDef.get,vm):noop;computedSharedDefinition.set=userDef.set?bind(userDef.set,vm):noop;}Object.defineProperty(vm,key,computedSharedDefinition);}}}function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,noop,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};}function initMethods(vm){var methods=vm.$options.methods;if(methods){for(var key in methods){if(methods[key]!=null){vm[key]=bind(methods[key],vm);}else if(true){warn("Method \""+key+"\" is undefined in options.",vm);}}}}function initWatch(vm){var watch=vm.$options.watch;if(watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}}function createWatcher(vm,key,handler){var options;if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}vm.$watch(key,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
	// when using Object.defineProperty, so we have to procedurally build up
	// the object here.
	var dataDef={};dataDef.get=function(){return this._data;};if(true){dataDef.set=function(newData){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}function proxy(vm,key){if(!isReserved(key)){Object.defineProperty(vm,key,{configurable:true,enumerable:true,get:function proxyGetter(){return vm._data[key];},set:function proxySetter(val){vm._data[key]=val;}});}}/*  */var VNode=function VNode(tag,data,children,text,elm,ns,context,componentOptions){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=ns;this.context=context;this.key=data&&data.key;this.componentOptions=componentOptions;this.child=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;};var emptyVNode=function emptyVNode(){var node=new VNode();node.text='';node.isComment=true;return node;};// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.ns,vnode.context,vnode.componentOptions);cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isCloned=true;return cloned;}function cloneVNodes(vnodes){var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneVNode(vnodes[i]);}return res;}/*  */function normalizeChildren(children,ns,nestedIndex){if(isPrimitive(children)){return[createTextVNode(children)];}if(Array.isArray(children)){var res=[];for(var i=0,l=children.length;i<l;i++){var c=children[i];var last=res[res.length-1];//  nested
	if(Array.isArray(c)){res.push.apply(res,normalizeChildren(c,ns,i));}else if(isPrimitive(c)){if(last&&last.text){last.text+=String(c);}else if(c!==''){// convert primitive to vnode
	res.push(createTextVNode(c));}}else if(c instanceof VNode){if(c.text&&last&&last.text){last.text+=c.text;}else{// inherit parent namespace
	if(ns){applyNS(c,ns);}// default key for nested array children (likely generated by v-for)
	if(c.key==null&&nestedIndex!=null){c.key="__vlist_"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}}function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}function applyNS(vnode,ns){if(vnode.tag&&!vnode.ns){vnode.ns=ns;if(vnode.children){for(var i=0,l=vnode.children.length;i<l;i++){applyNS(vnode.children[i],ns);}}}}function getFirstComponentChild(children){return children&&children.filter(function(c){return c&&c.componentOptions;})[0];}function mergeVNodeHook(def,key,hook){var oldHook=def[key];if(oldHook){var injectedHash=def.__injected||(def.__injected={});if(!injectedHash[key]){injectedHash[key]=true;def[key]=function(){oldHook.apply(this,arguments);hook.apply(this,arguments);};}}else{def[key]=hook;}}function updateListeners(on,oldOn,add,remove){var name,cur,old,fn,event,capture;for(name in on){cur=on[name];old=oldOn[name];if(!cur){"development"!=='production'&&warn("Handler for event \""+name+"\" is undefined.");}else if(!old){capture=name.charAt(0)==='!';event=capture?name.slice(1):name;if(Array.isArray(cur)){add(event,cur.invoker=arrInvoker(cur),capture);}else{if(!cur.invoker){fn=cur;cur=on[name]={};cur.fn=fn;cur.invoker=fnInvoker(cur);}add(event,cur.invoker,capture);}}else if(cur!==old){if(Array.isArray(old)){old.length=cur.length;for(var i=0;i<old.length;i++){old[i]=cur[i];}on[name]=old;}else{old.fn=cur;on[name]=old;}}}for(name in oldOn){if(!on[name]){event=name.charAt(0)==='!'?name.slice(1):name;remove(event,oldOn[name].invoker);}}}function arrInvoker(arr){return function(ev){var arguments$1=arguments;var single=arguments.length===1;for(var i=0;i<arr.length;i++){single?arr[i](ev):arr[i].apply(null,arguments$1);}};}function fnInvoker(o){return function(ev){var single=arguments.length===1;single?o.fn(ev):o.fn.apply(null,arguments);};}/*  */var activeInstance=null;function initLifecycle(vm){var options=vm.$options;// locate first non-abstract parent
	var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;vm.$el=el;if(!vm.$options.render){vm.$options.render=emptyVNode;if(true){/* istanbul ignore if */if(vm.$options.template){warn('You are using the runtime-only build of Vue where the template '+'option is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');vm._watcher=new Watcher(vm,function(){vm._update(vm._render(),hydrating);},noop);hydrating=false;// root instance, call mounted on self
	// mounted is called for child components in its inserted hook
	if(vm.$root===vm){vm._isMounted=true;callHook(vm,'mounted');}return vm;};Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevActiveInstance=activeInstance;activeInstance=vm;var prevVnode=vm._vnode;vm._vnode=vnode;if(!prevVnode){// Vue.prototype.__patch__ is injected in entry points
	// based on the rendering backend used.
	vm.$el=vm.__patch__(vm.$el,vnode,hydrating);}else{vm.$el=vm.__patch__(prevVnode,vnode);}activeInstance=prevActiveInstance;// update __vue__ reference
	if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}// if parent is an HOC, update its $el as well
	if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}if(vm._isMounted){callHook(vm,'updated');}};Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this;var hasChildren=!!(vm.$options._renderChildren||renderChildren);vm.$options._parentVnode=parentVnode;vm.$options._renderChildren=renderChildren;// update props
	if(propsData&&vm.$options.props){observerState.shouldConvert=false;if(true){observerState.isSettingProps=true;}var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert=true;if(true){observerState.isSettingProps=false;}}// update listeners
	if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;vm._updateListeners(listeners,oldListeners);}// resolve slots + force update if has children
	if(hasChildren){vm.$slots=resolveSlots(renderChildren);vm.$forceUpdate();}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
	var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove(parent.$children,vm);}// teardown watchers
	if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
	// frozen object may not have observer.
	if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
	vm._isDestroyed=true;callHook(vm,'destroyed');// turn off all instance listeners.
	vm.$off();// remove __vue__ reference
	if(vm.$el){vm.$el.__vue__=null;}};}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(vm);}}vm.$emit('hook:'+hook);}/*  */var hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy};var hooksToMerge=Object.keys(hooks);function createComponent(Ctor,data,context,children,tag){if(!Ctor){return;}if(isObject(Ctor)){Ctor=Vue.extend(Ctor);}if(typeof Ctor!=='function'){if(true){warn("Invalid Component definition: "+String(Ctor),context);}return;}// async component
	if(!Ctor.cid){if(Ctor.resolved){Ctor=Ctor.resolved;}else{Ctor=resolveAsyncComponent(Ctor,function(){// it's ok to queue this on every render because
	// $forceUpdate is buffered by the scheduler.
	context.$forceUpdate();});if(!Ctor){// return nothing if this is indeed an async component
	// wait for the callback to trigger parent update.
	return;}}}data=data||{};// extract props
	var propsData=extractProps(data,Ctor);// functional component
	if(Ctor.options.functional){return createFunctionalComponent(Ctor,propsData,data,context,children);}// extract listeners, since these needs to be treated as
	// child component listeners instead of DOM listeners
	var listeners=data.on;// replace with listeners with .native modifier
	data.on=data.nativeOn;if(Ctor.options.abstract){// abstract components do not keep anything
	// other than props & listeners
	data={};}// merge component management hooks onto the placeholder node
	mergeHooks(data);// return a placeholder vnode
	var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children});return vnode;}function createFunctionalComponent(Ctor,propsData,data,context,children){var props={};var propOptions=Ctor.options.props;if(propOptions){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData);}}return Ctor.options.render.call(null,context.$createElement,{props:props,data:data,parent:context,children:normalizeChildren(children),slots:function slots(){return resolveSlots(children);}});}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
	parent// activeInstance in lifecycle state
	){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children};// check inline-template render functions
	var inlineTemplate=vnode.data.inlineTemplate;if(inlineTemplate){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function init(vnode,hydrating){if(!vnode.child||vnode.child._isDestroyed){var child=vnode.child=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.child=oldVnode.child;child._updateFromParent(options.propsData,// updated props
	options.listeners,// updated listeners
	vnode,// new parent vnode
	options.children// new children
	);}function insert(vnode){if(!vnode.child._isMounted){vnode.child._isMounted=true;callHook(vnode.child,'mounted');}if(vnode.data.keepAlive){vnode.child._inactive=false;callHook(vnode.child,'activated');}}function destroy(vnode){if(!vnode.child._isDestroyed){if(!vnode.data.keepAlive){vnode.child.$destroy();}else{vnode.child._inactive=true;callHook(vnode.child,'deactivated');}}}function resolveAsyncComponent(factory,cb){if(factory.requested){// pool callbacks
	factory.pendingCallbacks.push(cb);}else{factory.requested=true;var cbs=factory.pendingCallbacks=[cb];var sync=true;var resolve=function resolve(res){if(isObject(res)){res=Vue.extend(res);}// cache resolved
	factory.resolved=res;// invoke callbacks only if this is not a synchronous resolve
	// (async resolves are shimmed as synchronous during SSR)
	if(!sync){for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}}};var reject=function reject(reason){"development"!=='production'&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));};var res=factory(resolve,reject);// handle promise
	if(res&&typeof res.then==='function'&&!factory.resolved){res.then(resolve,reject);}sync=false;// return in case resolved synchronously
	return factory.resolved;}}function extractProps(data,Ctor){// we are only extrating raw values here.
	// validation and default values are handled in the child
	// component itself.
	var propOptions=Ctor.options.props;if(!propOptions){return;}var res={};var attrs=data.attrs;var props=data.props;var domProps=data.domProps;if(attrs||props||domProps){for(var key in propOptions){var altKey=hyphenate(key);checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey)||checkProp(res,domProps,key,altKey);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(hash){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}function mergeHooks(data){if(!data.hook){data.hook={};}for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=hooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(a,b){// since all hooks have at most two args, use fixed args
	// to avoid having to use fn.apply().
	return function(_,__){a(_,__);b(_,__);};}/*  */// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement(tag,data,children){if(data&&(Array.isArray(data)||(typeof data==='undefined'?'undefined':_typeof(data))!=='object')){children=data;data=undefined;}// make sure to use real instance instead of proxy as context
	return _createElement(this._self,tag,data,children);}function _createElement(context,tag,data,children){if(data&&data.__ob__){"development"!=='production'&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return;}if(!tag){// in case of component :is set to falsy value
	return emptyVNode();}if(typeof tag==='string'){var Ctor;var ns=config.getTagNamespace(tag);if(config.isReservedTag(tag)){// platform built-in elements
	return new VNode(tag,data,normalizeChildren(children,ns),undefined,undefined,ns,context);}else if(Ctor=resolveAsset(context.$options,'components',tag)){// component
	return createComponent(Ctor,data,context,children,tag);}else{// unknown or unlisted namespaced elements
	// check at runtime because it may get assigned a namespace when its
	// parent normalizes children
	return new VNode(tag,data,normalizeChildren(children,ns),undefined,undefined,ns,context);}}else{// direct component options / constructor
	return createComponent(tag,data,context,children);}}/*  */function initRender(vm){vm.$vnode=null;// the placeholder node in parent tree
	vm._vnode=null;// the root of the child tree
	vm._staticTrees=null;vm.$slots=resolveSlots(vm.$options._renderChildren);// bind the public createElement fn to this instance
	// so that we get proper render context inside it.
	vm.$createElement=bind(createElement,vm);if(vm.$options.el){vm.$mount(vm.$options.el);}}function renderMixin(Vue){Vue.prototype.$nextTick=function(fn){nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var staticRenderFns=ref.staticRenderFns;var _parentVnode=ref._parentVnode;if(vm._isMounted){// clone slot nodes on re-renders
	for(var key in vm.$slots){vm.$slots[key]=cloneVNodes(vm.$slots[key]);}}if(staticRenderFns&&!vm._staticTrees){vm._staticTrees=[];}// set parent vnode. this allows render functions to have access
	// to the data on the placeholder node.
	vm.$vnode=_parentVnode;// render self
	var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){if(true){warn("Error when rendering "+formatComponentName(vm)+":");}/* istanbul ignore else */if(config.errorHandler){config.errorHandler.call(null,e,vm);}else{if(config._isServer){throw e;}else{setTimeout(function(){throw e;},0);}}// return previous vnode to prevent render error causing blank component
	vnode=vm._vnode;}// return empty vnode in case the render function errored out
	if(!(vnode instanceof VNode)){if("development"!=='production'&&Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=emptyVNode();}// set parent
	vnode.parent=_parentVnode;return vnode;};// shorthands used in render functions
	Vue.prototype._h=createElement;// toString for mustaches
	Vue.prototype._s=_toString;// number conversion
	Vue.prototype._n=toNumber;// empty vnode
	Vue.prototype._e=emptyVNode;// loose equal
	Vue.prototype._q=looseEqual;// loose indexOf
	Vue.prototype._i=looseIndexOf;// render static tree by index
	Vue.prototype._m=function renderStatic(index,isInFor){var tree=this._staticTrees[index];// if has already-rendered static tree and not inside v-for,
	// we can reuse the same tree by doing a shallow clone.
	if(tree&&!isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);}// otherwise, render a fresh tree.
	tree=this._staticTrees[index]=this.$options.staticRenderFns[index].call(this._renderProxy);if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){tree[i].isStatic=true;tree[i].key="__static__"+index+"_"+i;}}else{tree.isStatic=true;tree.key="__static__"+index;}return tree;};// filter resolution helper
	var identity=function identity(_){return _;};Vue.prototype._f=function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;};// render v-for
	Vue.prototype._l=function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}return ret;};// renderSlot
	Vue.prototype._t=function(name,fallback){var slotNodes=this.$slots[name];// warn duplicate slot usage
	if(slotNodes&&"development"!=='production'){slotNodes._rendered&&warn("Duplicate presence of slot \""+name+"\" found in the same render tree "+"- this will likely cause render errors.",this);slotNodes._rendered=true;}return slotNodes||fallback;};// apply v-bind object
	Vue.prototype._b=function bindProps(data,value,asProp){if(value){if(!isObject(value)){"development"!=='production'&&warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}for(var key in value){if(key==='class'||key==='style'){data[key]=value[key];}else{var hash=asProp||config.mustUseProp(key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});hash[key]=value[key];}}}}return data;};// expose v-on keyCodes
	Vue.prototype._k=function getKeyCodes(key){return config.keyCodes[key];};}function resolveSlots(renderChildren){var slots={};if(!renderChildren){return slots;}var children=normalizeChildren(renderChildren)||[];var defaultSlot=[];var name,child;for(var i=0,l=children.length;i<l;i++){child=children[i];if(child.data&&(name=child.data.slot)){delete child.data.slot;var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}// ignore single whitespace
	if(defaultSlot.length&&!(defaultSlot.length===1&&(defaultSlot[0].text===' '||defaultSlot[0].isComment))){slots.default=defaultSlot;}return slots;}/*  */function initEvents(vm){vm._events=Object.create(null);// init parent attached events
	var listeners=vm.$options._parentListeners;var on=bind(vm.$on,vm);var off=bind(vm.$off,vm);vm._updateListeners=function(listeners,oldListeners){updateListeners(listeners,oldListeners||{},on,off);};if(listeners){vm._updateListeners(listeners);}}function eventsMixin(Vue){Vue.prototype.$on=function(event,fn){var vm=this;(vm._events[event]||(vm._events[event]=[])).push(fn);return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;// all
	if(!arguments.length){vm._events=Object.create(null);return vm;}// specific event
	var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}// specific handler
	var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){cbs[i].apply(vm,args);}}return vm;};}/*  */var uid=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
	vm._uid=uid++;// a flag to avoid this being observed
	vm._isVue=true;// merge options
	if(options&&options._isComponent){// optimize internal component instantiation
	// since dynamic options merging is pretty slow, and none of the
	// internal component options needs special treatment.
	initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm),options||{},vm);}/* istanbul ignore else */if(true){initProxy(vm);}else{}// expose real self
	vm._self=vm;initLifecycle(vm);initEvents(vm);callHook(vm,'beforeCreate');initState(vm);callHook(vm,'created');initRender(vm);};function initInternalComponent(vm,options){var opts=vm.$options=Object.create(resolveConstructorOptions(vm));// doing this because it's faster than dynamic enumeration.
	opts.parent=options.parent;opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(vm){var Ctor=vm.constructor;var options=Ctor.options;if(Ctor.super){var superOptions=Ctor.super.options;var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){// super option changed
	Ctor.superOptions=superOptions;options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}}function Vue(options){this._init(options);}initMixin(Vue);stateMixin(Vue);eventsMixin(Vue);lifecycleMixin(Vue);renderMixin(Vue);var warn=noop;var formatComponentName;if(true){var hasConsole=typeof console!=='undefined';warn=function warn(msg,vm){if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+" "+(vm?formatLocation(formatComponentName(vm)):''));}};formatComponentName=function formatComponentName(vm){if(vm.$root===vm){return'root instance';}var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return name?"component <"+name+">":"anonymous component";};var formatLocation=function formatLocation(str){if(str==='anonymous component'){str+=" - use the \"name\" option for better debugging messages.";}return"(found in "+str+")";};}/*  *//**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */var strats=config.optionMergeStrategies;/**
	 * Options with restrictions
	 */if(true){strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};strats.name=function(parent,child,vm){if(vm&&child){warn('options "name" can only be used as a component definition option, '+'not during instance creation.');}return defaultStrat(parent,child);};}/**
	 * Helper that recursively merges two data objects together.
	 */function mergeData(to,from){var key,toVal,fromVal;for(key in from){toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal)&&isObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
	 * Data
	 */strats.data=function(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
	if(!childVal){return parentVal;}if(typeof childVal!=='function'){"development"!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
	// we need to return a function that returns the
	// merged result of both functions... no need to
	// check if parentVal is a function here because
	// it has to be a function to pass previous merges.
	return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
	var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};/**
	 * Hooks and param attributes are merged as arrays.
	 */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}config._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook;});/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,childVal):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */strats.watch=function(parentVal,childVal){/* istanbul ignore if */if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};/**
	 * Other object hashes.
	 */strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;};/**
	 * Default strategy.
	 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
	 * Make sure component options get converted to actual
	 * constructors.
	 */function normalizeComponents(options){if(options.components){var components=options.components;var def;for(var key in components){var lower=key.toLowerCase();if(isBuiltInTag(lower)||config.isReservedTag(lower)){"development"!=='production'&&warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);continue;}def=components[key];if(isPlainObject(def)){components[key]=Vue.extend(def);}}}}/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */function normalizeProps(options){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else if(true){warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}options.props=res;}/**
	 * Normalize raw function directives into object format.
	 */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */function mergeOptions(parent,child,vm){normalizeComponents(child);normalizeProps(child);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=typeof extendsFrom==='function'?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];if(mixin.prototype instanceof Vue){mixin=mixin.options;}parent=mergeOptions(parent,mixin,vm);}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];var res=assets[id]||// camelCase ID
	assets[camelize(id)]||// Pascal Case ID
	assets[capitalize(camelize(id))];if("development"!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];// handle boolean props
	if(getType(prop.type)==='Boolean'){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){value=true;}}// check default value
	if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
	// make sure to observe it.
	var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=true;observe(value);observerState.shouldConvert=prevShouldConvert;}if(true){assertProp(prop,key,value,vm,absent);}return value;}/**
	 * Get the default value of a prop.
	 */function getPropDefaultValue(vm,prop,name){// no default, return undefined
	if(!hasOwn(prop,'default')){return undefined;}var def=prop.default;// warn against non-factory defaults for Object & Array
	if(isObject(def)){"development"!=='production'&&warn('Invalid default value for prop "'+name+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// call factory function for non-Function types
	return typeof def==='function'&&prop.type!==Function?def.call(vm):def;}/**
	 * Assert whether a prop is valid.
	 */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){warn('Invalid prop: type check failed for prop "'+name+'".'+' Expected '+expectedTypes.map(capitalize).join(', ')+', got '+Object.prototype.toString.call(value).slice(8,-1)+'.',vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}/**
	 * Assert the type of a value
	 */function assertType(value,type){var valid;var expectedType=getType(type);if(expectedType==='String'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='string');}else if(expectedType==='Number'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='number');}else if(expectedType==='Boolean'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='boolean');}else if(expectedType==='Function'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='function');}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match&&match[1];}var util=Object.freeze({defineReactive:defineReactive,_toString:_toString,toNumber:toNumber,makeMap:makeMap,isBuiltInTag:isBuiltInTag,remove:remove,hasOwn:hasOwn,isPrimitive:isPrimitive,cached:cached,camelize:camelize,capitalize:capitalize,hyphenate:hyphenate,bind:bind,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,toObject:toObject,noop:noop,no:no,genStaticKeys:genStaticKeys,looseEqual:looseEqual,looseIndexOf:looseIndexOf,isReserved:isReserved,def:def,parsePath:parsePath,hasProto:hasProto,inBrowser:inBrowser,UA:UA,isIE:isIE,isIE9:isIE9,isEdge:isEdge,isAndroid:isAndroid,isIOS:isIOS,devtools:devtools,nextTick:nextTick,get _Set(){return _Set;},mergeOptions:mergeOptions,resolveAsset:resolveAsset,get warn(){return warn;},get formatComponentName(){return formatComponentName;},validateProp:validateProp});/*  */function initUse(Vue){Vue.use=function(plugin){/* istanbul ignore if */if(plugin.installed){return;}// additional parameters
	var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};}/*  */function initMixin$1(Vue){Vue.mixin=function(mixin){Vue.options=mergeOptions(Vue.options,mixin);};}/*  */function initExtend(Vue){/**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */Vue.cid=0;var cid=1;/**
	   * Class inheritance
	   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var isFirstExtend=Super.cid===0;if(isFirstExtend&&extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name||Super.options.name;if(true){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');name=null;}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// allow further extension
	Sub.extend=Super.extend;// create asset registers, so extended classes
	// can have their private assets too.
	config._assetTypes.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
	if(name){Sub.options.components[name]=Sub;}// keep a reference to the super options at extension time.
	// later at instantiation we can check if Super's options have
	// been updated.
	Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;// cache constructor
	if(isFirstExtend){extendOptions._Ctor=Sub;}return Sub;};}/*  */function initAssetRegisters(Vue){/**
	   * Create asset registration methods.
	   */config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */if(true){if(type==='component'&&config.isReservedTag(id)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=Vue.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}var KeepAlive={name:'keep-alive',abstract:true,created:function created(){this.cache=Object.create(null);},render:function render(){var vnode=getFirstComponentChild(this.$slots.default);if(vnode&&vnode.componentOptions){var opts=vnode.componentOptions;var key=vnode.key==null// same constructor may get registered as different local components
	// so cid alone is not enough (#3269)
	?opts.Ctor.cid+'::'+opts.tag:vnode.key;if(this.cache[key]){vnode.child=this.cache[key].child;}else{this.cache[key]=vnode;}vnode.data.keepAlive=true;}return vnode;},destroyed:function destroyed(){var this$1=this;for(var key in this.cache){var vnode=this$1.cache[key];callHook(vnode.child,'deactivated');vnode.child.$destroy();}}};var builtInComponents={KeepAlive:KeepAlive};/*  */function initGlobalAPI(Vue){// config
	var configDef={};configDef.get=function(){return config;};if(true){configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);Vue.util=util;Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.options=Object.create(null);config._assetTypes.forEach(function(type){Vue.options[type+'s']=Object.create(null);});extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue);Object.defineProperty(Vue.prototype,'$isServer',{get:function get(){return config._isServer;}});Vue.version='2.0.0-rc.8';/*  */// attributes that should be using props for binding
	var mustUseProp=makeMap('value,selected,checked,muted');var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var isAttr=makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,'+'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,'+'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,'+'name,contenteditable,contextmenu,controls,coords,data,datetime,default,'+'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,'+'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,'+'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,'+'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,'+'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,'+'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,'+'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,'+'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,'+'target,title,type,usemap,value,width,wrap');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};/*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(childNode.child){childNode=childNode.child._vnode;if(childNode.data){data=mergeClassData(childNode.data,data);}}while(parentNode=parentNode.parent){if(parentNode.data){data=mergeClassData(data,parentNode.data);}}return genClassFromData(data);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class};}function genClassFromData(data){var dynamicClass=data.class;var staticClass=data.staticClass;if(staticClass||dynamicClass){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){var res='';if(!value){return res;}if(typeof value==='string'){return value;}if(Array.isArray(value)){var stringified;for(var i=0,l=value.length;i<l;i++){if(value[i]){if(stringified=stringifyClass(value[i])){res+=stringified+' ';}}}return res.slice(0,-1);}if(isObject(value)){for(var key in value){if(value[key]){res+=key+' ';}}return res.slice(0,-1);}/* istanbul ignore next */return res;}/*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template');var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr',true);// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',true);// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track',true);// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,'+'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function isPreTag(tag){return tag==='pre';};var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
	// note it doesn't support other MathML elements being component roots
	if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
	return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}/*  *//**
	 * Query an element selector if it's not an element already.
	 */function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){"development"!=='production'&&warn('Cannot find element: '+selector);return document.createElement('div');}}return el;}/*  */function createElement$1(tagName){return document.createElement(tagName);}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function childNodes(node){return node.childNodes;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,childNodes:childNodes,setAttribute:setAttribute});/*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.child||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(Array.isArray(refs[key])){refs[key].push(ref);}else{refs[key]=[ref];}}else{refs[key]=ref;}}}/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */var emptyData={};var emptyNode=new VNode('',emptyData,[]);var hooks$1=['create','update','postpatch','remove','destroy'];function isUndef(s){return s==null;}function isDef(s){return s!=null;}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag&&vnode1.isComment===vnode2.isComment&&!vnode1.data===!vnode2.data;}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks$1.length;++i){cbs[hooks$1[i]]=[];for(j=0;j<modules.length;++j){if(modules[j][hooks$1[i]]!==undefined){cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove(){if(--remove.listeners===0){removeElement(childElm);}}remove.listeners=listeners;return remove;}function removeElement(el){var parent=nodeOps.parentNode(el);nodeOps.removeChild(parent,el);}function createElm(vnode,insertedVnodeQueue,nested){var i;var data=vnode.data;vnode.isRootInsert=!nested;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode);}// after calling the init hook, if the vnode is a child component
	// it should've created a child instance and mounted it. the child
	// component also has set the placeholder vnode's elm.
	// in that case we can just return the element and be done.
	if(isDef(i=vnode.child)){initComponent(vnode,insertedVnodeQueue);return vnode.elm;}}var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(true){if(!vnode.ns&&!(config.ignoredElements&&config.ignoredElements.indexOf(tag)>-1)&&config.isUnknownElement(tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag);setScope(vnode);createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}else if(vnode.isComment){vnode.elm=nodeOps.createComment(vnode.text);}else{vnode.elm=nodeOps.createTextNode(vnode.text);}return vnode.elm;}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){for(var i=0;i<children.length;++i){nodeOps.appendChild(vnode.elm,createElm(children[i],insertedVnodeQueue,true));}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));}}function isPatchable(vnode){while(vnode.child){vnode=vnode.child._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
	if(isDef(i)){if(i.create){i.create(emptyNode,vnode);}if(i.insert){insertedVnodeQueue.push(vnode);}}}function initComponent(vnode,insertedVnodeQueue){if(vnode.data.pendingInsert){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);}vnode.elm=vnode.child.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{// empty component root.
	// skip all element-related modules except for ref (#3455)
	registerRef(vnode);// make sure to invoke the insert hook
	insertedVnodeQueue.push(vnode);}}// set scope id attribute for scoped CSS.
	// this is implemented as a special case to avoid the overhead
	// of going through the normal attribute patching process.
	function setScope(vnode){var i;if(isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}if(isDef(i=activeInstance)&&i!==vnode.context&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,before,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){nodeOps.insertBefore(parentElm,createElm(vnodes[startIdx],insertedVnodeQueue),before);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.child)&&!data.keepAlive){invokeDestroyHook(i._vnode);}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{// Text node
	nodeOps.removeChild(parentElm,ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;if(!rm){// directly removing
	rm=createRmCb(vnode.elm,listeners);}else{// we have a recursively passed down rm callback
	// increase the listeners count
	rm.listeners+=listeners;}// recursively invoke hooks on child component root node
	if(isDef(i=vnode.child)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeElement(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,elmToMove,before;// removeOnly is a special flag used only by <transition-group>
	// to ensure removed elements stay in correct relative positions
	// during leaving transitions
	var canMove=!removeOnly;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
	}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
	patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
	patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null;if(isUndef(idxInOld)){// New element
	nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];/* istanbul ignore if */if("development"!=='production'&&!elmToMove){warn('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(elmToMove.tag!==newStartVnode.tag){// same key but different element. treat as new element
	nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}}}}if(oldStartIdx>oldEndIdx){before=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,before,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode===vnode){return;}// reuse element for static trees.
	// note we only do this if the vnode is cloned -
	// if the new node is not cloned it means the render functions have been
	// reset by the hot-reload-api and we need to do a proper re-render.
	if(vnode.isStatic&&oldVnode.isStatic&&vnode.key===oldVnode.key&&vnode.isCloned){vnode.elm=oldVnode.elm;return;}var i,hook;var hasData=isDef(i=vnode.data);if(hasData&&isDef(hook=i.hook)&&isDef(i=hook.prepatch)){i(oldVnode,vnode);}var elm=vnode.elm=oldVnode.elm;var oldCh=oldVnode.children;var ch=vnode.children;if(hasData&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(hasData){for(i=0;i<cbs.postpatch.length;++i){cbs.postpatch[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){// delay insert hooks for component root nodes, invoke them after the
	// element is really inserted
	if(initial&&vnode.parent){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var bailed=false;function hydrate(elm,vnode,insertedVnodeQueue){if(true){if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/* hydrating */);}if(isDef(i=vnode.child)){// child component. it should have hydrated its own tree.
	initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){var childNodes=nodeOps.childNodes(elm);// empty element, allow client to pick up and populate children
	if(!childNodes.length){createChildren(vnode,children,insertedVnodeQueue);}else{var childrenMatch=true;if(childNodes.length!==children.length){childrenMatch=false;}else{for(var i$1=0;i$1<children.length;i$1++){if(!hydrate(childNodes[i$1],children[i$1],insertedVnodeQueue)){childrenMatch=false;break;}}}if(!childrenMatch){if("development"!=='production'&&typeof console!=='undefined'&&!bailed){bailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',childNodes,children);}return false;}}}if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}return true;}function assertNodeMatch(node,vnode){if(vnode.tag){return vnode.tag.indexOf('vue-component')===0||vnode.tag===nodeOps.tagName(node).toLowerCase();}else{return _toString(vnode.text)===node.data;}}return function patch(oldVnode,vnode,hydrating,removeOnly){var elm,parent;var isInitialPatch=false;var insertedVnodeQueue=[];if(!oldVnode){// empty mount, create new root element
	isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else{if(isRealElement){// mounting to a real element
	// check if this is server-rendered content and if we can perform
	// a successful hydration.
	if(oldVnode.nodeType===1&&oldVnode.hasAttribute('server-rendered')){oldVnode.removeAttribute('server-rendered');hydrating=true;}if(hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else if(true){warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
	// create an empty node and replace it
	oldVnode=emptyNodeAt(oldVnode);}elm=oldVnode.elm;parent=nodeOps.parentNode(elm);createElm(vnode,insertedVnodeQueue);// component root element replaced.
	// update parent placeholder node element.
	if(vnode.parent){vnode.parent.elm=vnode.elm;if(isPatchable(vnode)){for(var i=0;i<cbs.create.length;++i){cbs.create[i](emptyNode,vnode.parent);}}}if(parent!==null){nodeOps.insertBefore(parent,vnode.elm,nodeOps.nextSibling(elm));removeVnodes(parent,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}/*  */var directives={create:function bindDirectives(oldVnode,vnode){var hasInsert=false;forEachDirective(oldVnode,vnode,function(def,dir){callHook$1(def,dir,'bind',vnode,oldVnode);if(def.inserted){hasInsert=true;}});if(hasInsert){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){applyDirectives(oldVnode,vnode,'inserted');});}},update:function updateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'update');// if old vnode has directives but new vnode doesn't
	// we need to teardown the directives on the old one.
	if(oldVnode.data.directives&&!vnode.data.directives){applyDirectives(oldVnode,oldVnode,'unbind');}},postpatch:function postupdateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'componentUpdated');},destroy:function unbindDirectives(vnode){applyDirectives(vnode,vnode,'unbind');}};var emptyModifiers=Object.create(null);function forEachDirective(oldVnode,vnode,fn){var dirs=vnode.data.directives;if(dirs){for(var i=0;i<dirs.length;i++){var dir=dirs[i];var def=resolveAsset(vnode.context.$options,'directives',dir.name,true);if(def){var oldDirs=oldVnode&&oldVnode.data.directives;if(oldDirs){dir.oldValue=oldDirs[i].value;}if(!dir.modifiers){dir.modifiers=emptyModifiers;}fn(def,dir);}}}}function applyDirectives(oldVnode,vnode,hook){forEachDirective(oldVnode,vnode,function(def,dir){callHook$1(def,dir,hook,vnode,oldVnode);});}function callHook$1(def,dir,hook,vnode,oldVnode){var fn=def&&def[hook];if(fn){fn(vnode.elm,dir,vnode,oldVnode);}}var baseModules=[ref,directives];/*  */function updateAttrs(oldVnode,vnode){if(!oldVnode.data.attrs&&!vnode.data.attrs){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};// clone observed objects, as the user probably wants to mutate it
	if(attrs.__ob__){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}for(key in oldAttrs){if(attrs[key]==null){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){// set attribute for blank value
	// e.g. <option disabled>Select one</option>
	if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,key);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs};/*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(!data.staticClass&&!data.class&&(!oldData||!oldData.staticClass&&!oldData.class)){return;}var cls=genClassForVnode(vnode);// handle transition classes
	var transitionClass=el._transitionClasses;if(transitionClass){cls=concat(cls,stringifyClass(transitionClass));}// set the class
	if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};// skip type checking this file because we need to attach private properties
	// to elements
	function updateDOMListeners(oldVnode,vnode){if(!oldVnode.data.on&&!vnode.data.on){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};var add=vnode.elm._v_add||(vnode.elm._v_add=function(event,handler,capture){vnode.elm.addEventListener(event,handler,capture);});var remove=vnode.elm._v_remove||(vnode.elm._v_remove=function(event,handler){vnode.elm.removeEventListener(event,handler);});updateListeners(on,oldOn,add,remove);}var events={create:updateDOMListeners,update:updateDOMListeners};/*  */function updateDOMProps(oldVnode,vnode){if(!oldVnode.data.domProps&&!vnode.data.domProps){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};// clone observed objects, as the user probably wants to mutate it
	if(props.__ob__){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(props[key]==null){elm[key]=undefined;}}for(key in props){// ignore children if the node has textContent or innerHTML,
	// as these will throw away existing DOM nodes and cause removal errors
	// on subsequent patches (#3360)
	if((key==='textContent'||key==='innerHTML')&&vnode.children){vnode.children.length=0;}cur=props[key];if(key==='value'){// store value as _value as well since
	// non-string values will be stringified
	elm._value=cur;// avoid resetting cursor position when value is the same
	var strCur=cur==null?'':String(cur);if(elm.value!==strCur){elm.value=strCur;}}else{elm[key]=cur;}}}var domProps={create:updateDOMProps,update:updateDOMProps};/*  */var prefixes=['Webkit','Moz','ms'];var testEl;var normalize=cached(function(prop){testEl=testEl||document.createElement('div');prop=camelize(prop);if(prop!=='filter'&&prop in testEl.style){return prop;}var upper=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+upper;if(prefixed in testEl.style){return prefixed;}}});function updateStyle(oldVnode,vnode){if((!oldVnode.data||!oldVnode.data.style)&&!vnode.data.style){return;}var cur,name;var el=vnode.elm;var oldStyle=oldVnode.data.style||{};var style=vnode.data.style||{};// handle string
	if(typeof style==='string'){el.style.cssText=style;return;}var needClone=style.__ob__;// handle array syntax
	if(Array.isArray(style)){style=vnode.data.style=toObject(style);}// clone the style for future updates,
	// in case the user mutates the style object in-place.
	if(needClone){style=vnode.data.style=extend({},style);}for(name in oldStyle){if(!style[name]){el.style[normalize(name)]='';}}for(name in style){cur=style[name];if(cur!==oldStyle[name]){// ie9 setting to null has no effect, must use empty string
	el.style[normalize(name)]=cur||'';}}}var style={create:updateStyle,update:updateStyle};/*  *//**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function addClass(el,cls){/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=' '+el.getAttribute('class')+' ';if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */function removeClass(el,cls){/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}}else{var cur=' '+el.getAttribute('class')+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}}/*  */var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
	var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}var raf=inBrowser&&window.requestAnimationFrame||setTimeout;function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls);addClass(el,cls);}function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitioneDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitioneDelays,transitionDurations);var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}/*  */function enter(vnode){var el=vnode.elm;// call leave callback now
	if(el._leaveCb){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(!data){return;}/* istanbul ignore if */if(el._enterCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;// activeInstance will always be the <transition> component managing this
	// transition. One edge case to check is when the <transition> is placed
	// as the root node of a child component. In that case we need to check
	// <transition>'s parent for appear check.
	var transitionNode=activeInstance.$vnode;var context=transitionNode&&transitionNode.parent?transitionNode.parent.context:activeInstance;var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear?appearClass:enterClass;var activeClass=isAppear?appearActiveClass:enterActiveClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var expectsCSS=css!==false&&!isIE9;var userWantsControl=enterHook&&// enterHook may be a bound method which exposes
	// the length of original fn as _length
	(enterHook._length||enterHook.length)>1;var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){// remove pending leave element on enter by injecting an insert hook
	mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);});}// start enter transition
	beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}if(vnode.data.show){enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
	if(el._enterCb){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(!data){return rm();}/* istanbul ignore if */if(el._leaveCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var expectsCSS=css!==false&&!isIE9;var userWantsControl=leave&&// leave hook may be a bound method which exposes
	// the length of original fn as _length
	(leave._length||leave.length)>1;var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){// the delayed leave may have already been cancelled
	if(cb.cancelled){return;}// record leaving element
	if(!vnode.data.show){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}function resolveTransition(def){if(!def){return;}/* istanbul ignore else */if((typeof def==='undefined'?'undefined':_typeof(def))==='object'){var res={};if(def.css!==false){extend(res,autoCssTransition(def.name||'v'));}extend(res,def);return res;}else if(typeof def==='string'){return autoCssTransition(def);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",leaveClass:name+"-leave",appearClass:name+"-enter",enterActiveClass:name+"-enter-active",leaveActiveClass:name+"-leave-active",appearActiveClass:name+"-enter-active"};});function once(fn){var called=false;return function(){if(!called){called=true;fn();}};}var transition=inBrowser?{create:function create(_,vnode){if(!vnode.data.show){enter(vnode);}},remove:function remove(vnode,rm){/* istanbul ignore else */if(!vnode.data.show){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];/*  */// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */var modelableTagRE=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;/* istanbul ignore if */if(isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
	document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var model={bind:function bind(el,binding,vnode){if(true){if(!modelableTagRE.test(vnode.tag)){warn("v-model is not supported on element type: <"+vnode.tag+">. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',vnode.context);}}if(vnode.tag==='select'){setSelected(el,binding,vnode.context);/* istanbul ignore if */if(isIE||isEdge){nextTick(function(){setSelected(el,binding,vnode.context);});}}else if(vnode.tag==='textarea'||el.type==='text'){if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}/* istanbul ignore if */if(isIE9){el.vmodel=true;}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);// in case the options rendered by v-for have changed,
	// it's possible that the value is out-of-sync with the rendered options.
	// detect such cases and filter out values that no longer has a matchig
	// option in the DOM.
	var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,el.options);}):hasNoMatchingOption(binding.value,el.options);if(needReset){trigger(el,'change');}}}};function setSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){"development"!=='production'&&warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++){if(looseEqual(getValue(options[i]),value)){return false;}}return true;}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/*  */// recursively search for possible transition defined inside the component root
	function locateNode(vnode){return vnode.child&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.child._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(value&&transition&&!isIE9){enter(vnode);}var originalDisplay=el.style.display==='none'?'':el.style.display;el.style.display=value?originalDisplay:'none';el.__vOriginalDisplay=originalDisplay;},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;/* istanbul ignore if */if(value===oldValue){return;}vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(transition&&!isIE9){if(value){enter(vnode);el.style.display=el.__vOriginalDisplay;}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}}};var platformDirectives={model:model,show:show};/*  */// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
	var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String};// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recrusively retrieve the real component to be rendered
	function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;// props
	for(var key in options.propsData){data[key]=comp[key];}// events.
	// extract listeners and pass them directly to the transition methods
	var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1].fn;}return data;}function placeholder(h,rawChild){return /\d-keep-alive$/.test(rawChild.tag)?h('keep-alive'):null;}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return;}// filter out text nodes (possible whitespaces)
	children=children.filter(function(c){return c.tag;});/* istanbul ignore if */if(!children.length){return;}// warn multiple elements
	if("development"!=='production'&&children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;// warn invalid mode
	if("development"!=='production'&&mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];// if this is a component root node and the component's
	// parent container node also has transition, skip.
	if(hasParentTransition(this.$vnode)){return rawChild;}// apply transition data to child
	// use getRealChild() to ignore abstract components e.g. keep-alive
	var child=getRealChild(rawChild);/* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}child.key=child.key==null||child.isStatic?"__v"+(child.tag+this._uid)+"__":child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);// mark v-show
	// so that the transition module can hand over the control to the directive
	if(child.data.directives&&child.data.directives.some(function(d){return d.name==='show';})){child.data.show=true;}if(oldChild&&oldChild.data&&oldChild.key!==child.key){// replace old child transition data with fresh one
	// important for dynamic transitions!
	var oldData=oldChild.data.transition=extend({},data);// handle transition mode
	if(mode==='out-in'){// return placeholder node and queue update when leave finishes
	this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild);}else if(mode==='in-out'){var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}return rawChild;}};/*  */// Provides transition support for list items.
	// supports move transitions using the FLIP technique.
	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.
	var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else if(true){var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag:c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){// force removing pass
	this.__patch__(this._vnode,this.kept,false,// hydrating
	true// removeOnly (!important, avoids unnecessary moves)
	);this._vnode=this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||this.name+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
	// in each iteration - which helps prevent layout thrashing.
	children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);// force reflow to put everything in position
	var f=document.body.offsetHeight;// eslint-disable-line
	children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){/* istanbul ignore if */if(!hasTransition){return false;}if(this._hasMove!=null){return this._hasMove;}addTransitionClass(el,moveClass);var info=getTransitionInfo(el);removeTransitionClass(el,moveClass);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){/* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();}/* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */// install platform specific utils
	Vue.config.isUnknownElement=isUnknownElement;Vue.config.isReservedTag=isReservedTag;Vue.config.getTagNamespace=getTagNamespace;Vue.config.mustUseProp=mustUseProp;// install platform runtime directives & components
	extend(Vue.options.directives,platformDirectives);extend(Vue.options.components,platformComponents);// install platform patch function
	Vue.prototype.__patch__=config._isServer?noop:patch;// wrap mount
	Vue.prototype.$mount=function(el,hydrating){el=el&&!config._isServer?query(el):undefined;return this._mount(el,hydrating);};// devtools global hook
	/* istanbul ignore next */setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue);}else if("development"!=='production'&&inBrowser&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);/*  */// check whether current browser encodes a char inside attribute values
	function shouldDecode(content,encoded){var div=document.createElement('div');div.innerHTML="<div a=\""+content+"\">";return div.innerHTML.indexOf(encoded)>0;}// According to
	// https://w3c.github.io/DOM-Parsing/#dfn-serializing-an-attribute-value
	// when serializing innerHTML, <, >, ", & should be encoded as entities.
	// However, only some browsers, e.g. PhantomJS, encodes < and >.
	// this causes problems with the in-browser parser.
	var shouldDecodeTags=inBrowser?shouldDecode('>','&gt;'):false;// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines=inBrowser?shouldDecode('\n','&#10;'):false;/*  */var decoder=document.createElement('div');function decodeHTML(html){decoder.innerHTML=html;return decoder.textContent;}/**
	 * Not type-checking this file because it's mostly vendor code.
	 *//*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier=/([^\s"'<>\/=]+)/;var singleAttrAssign=/(?:=)/;var singleAttrValues=[// attr value double quotes
	/"([^"]*)"+/.source,// attr value, single quotes
	/'([^']*)'+/.source,// attr value, no quotes
	/([^\s"'=<>`]+)/.source];var attribute=new RegExp('^\\s*'+singleAttrIdentifier.source+'(?:\\s*('+singleAttrAssign.source+')'+'\\s*(?:'+singleAttrValues.join('|')+'))?');// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture='((?:'+ncname+'\\:)?'+ncname+')';var startTagOpen=new RegExp('^<'+qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp('^<\\/'+qnameCapture+'[^>]*>');var doctype=/^<!DOCTYPE [^>]+>/i;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=g==='';});// Special Elements (can contain anything)
	var isSpecialTag=makeMap('script,style',true);var reCache={};var ltRE=/&lt;/g;var gtRE=/&gt;/g;var nlRE=/&#10;/g;var ampRE=/&amp;/g;var quoteRE=/&quot;/g;function decodeAttr(value,shouldDecodeTags,shouldDecodeNewlines){if(shouldDecodeTags){value=value.replace(ltRE,'<').replace(gtRE,'>');}if(shouldDecodeNewlines){value=value.replace(nlRE,'\n');}return value.replace(ampRE,'&').replace(quoteRE,'"');}function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag=options.isUnaryTag||no;var isFromDOM=options.isFromDOM;var index=0;var last,lastTag;while(html){last=html;// Make sure we're not in a script or style element
	if(!lastTag||!isSpecialTag(lastTag)){var textEnd=html.indexOf('<');if(textEnd===0){// Comment:
	if(/^<!--/.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){advance(commentEnd+3);continue;}}// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	if(/^<!\[/.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue;}}// Doctype:
	var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue;}// End tag:
	var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[0],endTagMatch[1],curIndex,index);continue;}// Start tag:
	var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);continue;}}var text=void 0;if(textEnd>=0){text=html.substring(0,textEnd);advance(textEnd);}else{text=html;html='';}if(options.chars){options.chars(text);}}else{var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var endTagLength=0;var rest=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(stackedTag!=='script'&&stackedTag!=='style'&&stackedTag!=='noscript'){text=text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1');}if(options.chars){options.chars(text);}return'';});index+=html.length-rest.length;html=rest;parseEndTag('</'+stackedTag+'>',stackedTag,index-endTagLength,index);}if(html===last){throw new Error('Error parsing template:\n\n'+html);}}// Clean up any remaining tags
	parseEndTag();function advance(n){index+=n;html=html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&isNonPhrasingTag(tagName)){parseEndTag('',lastTag);}if(canBeLeftOpenTag(tagName)&&lastTag===tagName){parseEndTag('',tagName);}}var unary=isUnaryTag(tagName)||tagName==='html'&&lastTag==='head'||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){if(args[3]===''){delete args[3];}if(args[4]===''){delete args[4];}if(args[5]===''){delete args[5];}}var value=args[3]||args[4]||args[5]||'';attrs[i]={name:args[1],value:isFromDOM?decodeAttr(value,options.shouldDecodeTags,options.shouldDecodeNewlines):value};}if(!unary){stack.push({tag:tagName,attrs:attrs});lastTag=tagName;unarySlash='';}if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tag,tagName,start,end){var pos;if(start==null){start=index;}if(end==null){end=index;}// Find the closest opened tag of the same type
	if(tagName){var needle=tagName.toLowerCase();for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].tag.toLowerCase()===needle){break;}}}else{// If no tag name is provided, clean shop
	pos=0;}if(pos>=0){// Close all the open elements, up the stack
	for(var i=stack.length-1;i>=pos;i--){if(options.end){options.end(stack[i].tag,start,end);}}// Remove the open elements from the stack
	stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(tagName.toLowerCase()==='br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(tagName.toLowerCase()==='p'){if(options.start){options.start(tagName,[],false,start,end);}if(options.end){options.end(tagName,start,end);}}}}/*  */function parseFilters(exp){var inSingle=false;var inDouble=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){// check single quote
	if(c===0x27&&prev!==0x5C){inSingle=!inSingle;}}else if(inDouble){// check double quote
	if(c===0x22&&prev!==0x5C){inDouble=!inDouble;}}else if(c===0x7C&&// pipe
	exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){// first filter, end of expression
	lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
	case 0x27:inSingle=true;break;// '
	case 0x28:paren++;break;// (
	case 0x29:paren--;break;// )
	case 0x5B:square++;break;// [
	case 0x5D:square--;break;// ]
	case 0x7B:curly++;break;// {
	case 0x7D:curly--;break;// }
	}}}if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){// _f: resolveFilter
	return"_f(\""+filter+"\")("+exp+")";}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return"_f(\""+name+"\")("+exp+","+args;}}/*  */var defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index;while(match=tagRE.exec(text)){index=match.index;// push text token
	if(index>lastIndex){tokens.push(JSON.stringify(text.slice(lastIndex,index)));}// tag token
	var exp=parseFilters(match[1].trim());tokens.push("_s("+exp+")");lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push(JSON.stringify(text.slice(lastIndex)));}return tokens.join('+');}/*  */function baseWarn(msg){console.error("[Vue parser]: "+msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value});}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value});}function addDirective(el,name,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,value:value,arg:arg,modifiers:modifiers});}function addHandler(el,name,value,modifiers,important){// check capture modifier
	if(modifiers&&modifiers.capture){delete modifiers.capture;name='!'+name;// mark the event as captured
	}var events;if(modifiers&&modifiers.native){delete modifiers.native;events=el.nativeEvents||(el.nativeEvents={});}else{events=el.events||(el.events={});}var newHandler={value:value,modifiers:modifiers};var handlers=events[name];/* istanbul ignore if */if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name]=important?[newHandler,handlers]:[handlers,newHandler];}else{events[name]=newHandler;}}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return dynamicValue;}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue);}}}function getAndRemoveAttr(el,name){var val;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break;}}}return val;}/*  */var dirRE=/^v-|^@|^:/;var forAliasRE=/(.*)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/\(([^,]*),([^,]*)(?:,([^,]*))?\)/;var bindRE=/^:|^v-bind:/;var onRE=/^@|^v-on:/;var argRE=/:(.*)$/;var modifierRE=/\.[^\.]+/g;var decodeHTMLCached=cached(decodeHTML);// configurable state
	var warn$1;var platformGetTagNamespace;var platformMustUseProp;var platformIsPreTag;var preTransforms;var transforms;var postTransforms;var delimiters;/**
	 * Convert HTML string to AST.
	 */function parse(template,options){warn$1=options.warn||baseWarn;platformGetTagNamespace=options.getTagNamespace||no;platformMustUseProp=options.mustUseProp||no;platformIsPreTag=options.isPreTag||no;preTransforms=pluckModuleFunction(options.modules,'preTransformNode');transforms=pluckModuleFunction(options.modules,'transformNode');postTransforms=pluckModuleFunction(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace!==false;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;parseHTML(template,{expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,isFromDOM:options.isFromDOM,shouldDecodeTags:options.shouldDecodeTags,shouldDecodeNewlines:options.shouldDecodeNewlines,start:function start(tag,attrs,unary){// check namespace.
	// inherit parent ns if there is one
	var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);// handle IE svg bug
	/* istanbul ignore if */if(options.isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}var element={type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:currentParent,children:[]};if(ns){element.ns=ns;}if("client"!=='server'&&isForbiddenTag(element)){element.forbidden=true;"development"!=='production'&&warn$1('Templates should only be responsible for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+"<"+tag+">.");}// apply pre-transforms
	for(var i=0;i<preTransforms.length;i++){preTransforms[i](element,options);}if(!inVPre){processPre(element);if(element.pre){inVPre=true;}}if(platformIsPreTag(element.tag)){inPre=true;}if(inVPre){processRawAttrs(element);}else{processFor(element);processIf(element);processOnce(element);// determine whether this is a plain element after
	// removing structural attributes
	element.plain=!element.key&&!attrs.length;processKey(element);processRef(element);processSlot(element);processComponent(element);for(var i$1=0;i$1<transforms.length;i$1++){transforms[i$1](element,options);}processAttrs(element);}function checkRootConstraints(el){if(true){if(el.tag==='slot'||el.tag==='template'){warn$1("Cannot use <"+el.tag+"> as component root element because it may "+'contain multiple nodes:\n'+template);}if(el.attrsMap.hasOwnProperty('v-for')){warn$1('Cannot use v-for on stateful component root element because '+'it renders multiple elements:\n'+template);}}}// tree management
	if(!root){root=element;checkRootConstraints(root);}else if("development"!=='production'&&!stack.length&&!warned){// allow 2 root elements with v-if and v-else
	if(root.attrsMap.hasOwnProperty('v-if')&&element.attrsMap.hasOwnProperty('v-else')){checkRootConstraints(element);}else{warned=true;warn$1("Component template should contain exactly one root element:\n\n"+template);}}if(currentParent&&!element.forbidden){if(element.else){processElse(element,currentParent);}else{currentParent.children.push(element);element.parent=currentParent;}}if(!unary){currentParent=element;stack.push(element);}// apply post-transforms
	for(var i$2=0;i$2<postTransforms.length;i$2++){postTransforms[i$2](element,options);}},end:function end(){// remove trailing whitespace
	var element=stack[stack.length-1];var lastNode=element.children[element.children.length-1];if(lastNode&&lastNode.type===3&&lastNode.text===' '){element.children.pop();}// pop stack
	stack.length-=1;currentParent=stack[stack.length-1];// check pre state
	if(element.pre){inVPre=false;}if(platformIsPreTag(element.tag)){inPre=false;}},chars:function chars(text){if(!currentParent){if("development"!=='production'&&!warned){warned=true;warn$1('Component template should contain exactly one root element:\n\n'+template);}return;}text=inPre||text.trim()?decodeHTMLCached(text)// only preserve whitespace if its not right after a starting tag
	:preserveWhitespace&&currentParent.children.length?' ':'';if(text){var expression;if(!inVPre&&text!==' '&&(expression=parseText(text,delimiters))){currentParent.children.push({type:2,expression:expression,text:text});}else{currentParent.children.push({type:3,text:text});}}}});return root;}function processPre(el){if(getAndRemoveAttr(el,'v-pre')!=null){el.pre=true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.attrs=new Array(l);for(var i=0;i<l;i++){attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){// non root node in pre blocks with no attributes
	el.plain=true;}}function processKey(el){var exp=getBindingAttr(el,'key');if(exp){el.key=exp;}}function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref=ref;el.refInFor=checkInFor(el);}}function processFor(el){var exp;if(exp=getAndRemoveAttr(el,'v-for')){var inMatch=exp.match(forAliasRE);if(!inMatch){"development"!=='production'&&warn$1("Invalid v-for expression: "+exp);return;}el.for=inMatch[2].trim();var alias=inMatch[1].trim();var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){el.alias=iteratorMatch[1].trim();el.iterator1=iteratorMatch[2].trim();if(iteratorMatch[3]){el.iterator2=iteratorMatch[3].trim();}}else{el.alias=alias;}}}function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el.if=exp;}if(getAndRemoveAttr(el,'v-else')!=null){el.else=true;}}function processElse(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){prev.elseBlock=el;}else if(true){warn$1("v-else used on element <"+el.tag+"> without corresponding v-if.");}}function processOnce(el){var once=getAndRemoveAttr(el,'v-once');if(once!=null){el.once=true;}}function processSlot(el){if(el.tag==='slot'){el.slotName=getBindingAttr(el,'name');}else{var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget=slotTarget;}}}function processComponent(el){var binding;if(binding=getBindingAttr(el,'is')){el.component=binding;}if(getAndRemoveAttr(el,'inline-template')!=null){el.inlineTemplate=true;}}function processAttrs(el){var list=el.attrsList;var i,l,name,value,arg,modifiers,isProp;for(i=0,l=list.length;i<l;i++){name=list[i].name;value=list[i].value;if(dirRE.test(name)){// mark element as dynamic
	el.hasBindings=true;// modifiers
	modifiers=parseModifiers(name);if(modifiers){name=name.replace(modifierRE,'');}if(bindRE.test(name)){// v-bind
	name=name.replace(bindRE,'');if(modifiers&&modifiers.prop){isProp=true;name=camelize(name);if(name==='innerHtml'){name='innerHTML';}}if(isProp||platformMustUseProp(name)){addProp(el,name,value);}else{addAttr(el,name,value);}}else if(onRE.test(name)){// v-on
	name=name.replace(onRE,'');addHandler(el,name,value,modifiers);}else{// normal directives
	name=name.replace(dirRE,'');// parse arg
	var argMatch=name.match(argRE);if(argMatch&&(arg=argMatch[1])){name=name.slice(0,-(arg.length+1));}addDirective(el,name,value,arg,modifiers);}}else{// literal attribute
	if(true){var expression=parseText(value,delimiters);if(expression){warn$1(name+"=\""+value+"\": "+'Interpolation inside attributes has been deprecated. '+'Use v-bind or the colon shorthand instead.');}}addAttr(el,name,JSON.stringify(value));}}}function checkInFor(el){var parent=el;while(parent){if(parent.for!==undefined){return true;}parent=parent.parent;}return false;}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return ret;}}function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i<l;i++){if("development"!=='production'&&map[attrs[i].name]){warn$1('duplicate attribute: '+attrs[i].name);}map[attrs[i].name]=attrs[i].value;}return map;}function findPrevElement(children){var i=children.length;while(i--){if(children[i].tag){return children[i];}}}function isForbiddenTag(el){return el.tag==='style'||el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;/* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}/*  */var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1);/**
	 * Goal of the optimizier: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */function optimize(root,options){if(!root){return;}isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||function(){return false;};// first pass: mark all non-static nodes.
	markStatic(root);// second pass: mark static roots.
	markStaticRoots(root,false);}function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs'+(keys?','+keys:''));}function markStatic(node){node.static=isStatic(node);if(node.type===1){for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic(child);if(!child.static){node.static=false;}}}}function markStaticRoots(node,isInFor){if(node.type===1){if(node.once||node.static){node.staticRoot=true;node.staticInFor=isInFor;return;}if(node.children){for(var i=0,l=node.children.length;i<l;i++){markStaticRoots(node.children[i],!!node.for);}}}}function isStatic(node){if(node.type===2){// expression
	return false;}if(node.type===3){// text
	return true;}return!!(node.pre||!node.hasBindings&&// no dynamic bindings
	!node.if&&!node.for&&// not v-if or v-for or v-else
	!isBuiltInTag(node.tag)&&// not a built-in
	isPlatformReservedTag(node.tag)&&// not a component
	Object.keys(node).every(isStaticKey));}/*  */var simplePathRE=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;// keyCode aliases
	var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:'if($event.target !== $event.currentTarget)return;'};function genHandlers(events,native){var res=native?'nativeOn:{':'on:{';for(var name in events){res+="\""+name+"\":"+genHandler(events[name])+",";}return res.slice(0,-1)+'}';}function genHandler(handler){if(!handler){return'function(){}';}else if(Array.isArray(handler)){return"["+handler.map(genHandler).join(',')+"]";}else if(!handler.modifiers){return simplePathRE.test(handler.value)?handler.value:"function($event){"+handler.value+"}";}else{var code='';var keys=[];for(var key in handler.modifiers){if(modifierCode[key]){code+=modifierCode[key];}else{keys.push(key);}}if(keys.length){code=genKeyFilter(keys)+code;}var handlerCode=simplePathRE.test(handler.value)?handler.value+'($event)':handler.value;return'function($event){'+code+handlerCode+'}';}}function genKeyFilter(keys){var code=keys.length===1?normalizeKeyCode(keys[0]):Array.prototype.concat.apply([],keys.map(normalizeKeyCode));if(Array.isArray(code)){return"if("+code.map(function(c){return"$event.keyCode!=="+c;}).join('&&')+")return;";}else{return"if($event.keyCode!=="+code+")return;";}}function normalizeKeyCode(key){return parseInt(key,10)||// number keyCode
	keyCodes[key]||// built-in alias
	"_k("+JSON.stringify(key)+")"// custom alias
	;}/*  */function bind$1(el,dir){el.wrapData=function(code){return"_b("+code+","+dir.value+(dir.modifiers&&dir.modifiers.prop?',true':'')+")";};}var baseDirectives={bind:bind$1,cloak:noop};/*  */// configurable state
	var warn$2;var transforms$1;var dataGenFns;var platformDirectives$1;var staticRenderFns;var currentOptions;function generate(ast,options){// save previous staticRenderFns so generate calls can be nested
	var prevStaticRenderFns=staticRenderFns;var currentStaticRenderFns=staticRenderFns=[];currentOptions=options;warn$2=options.warn||baseWarn;transforms$1=pluckModuleFunction(options.modules,'transformCode');dataGenFns=pluckModuleFunction(options.modules,'genData');platformDirectives$1=options.directives||{};var code=ast?genElement(ast):'_h("div")';staticRenderFns=prevStaticRenderFns;return{render:"with(this){return "+code+"}",staticRenderFns:currentStaticRenderFns};}function genElement(el){if(el.staticRoot&&!el.staticProcessed){// hoist static sub-trees out
	el.staticProcessed=true;staticRenderFns.push("with(this){return "+genElement(el)+"}");return"_m("+(staticRenderFns.length-1)+(el.staticInFor?',true':'')+")";}else if(el.for&&!el.forProcessed){return genFor(el);}else if(el.if&&!el.ifProcessed){return genIf(el);}else if(el.tag==='template'&&!el.slotTarget){return genChildren(el)||'void 0';}else if(el.tag==='slot'){return genSlot(el);}else{// component or element
	var code;if(el.component){code=genComponent(el);}else{var data=genData(el);var children=el.inlineTemplate?null:genChildren(el);code="_h('"+el.tag+"'"+(data?","+data:'')+(children?","+children:'')+")";}// module transforms
	for(var i=0;i<transforms$1.length;i++){code=transforms$1[i](el,code);}return code;}}function genIf(el){var exp=el.if;el.ifProcessed=true;// avoid recursion
	return"("+exp+")?"+genElement(el)+":"+genElse(el);}function genElse(el){return el.elseBlock?genElement(el.elseBlock):'_e()';}function genFor(el){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?","+el.iterator1:'';var iterator2=el.iterator2?","+el.iterator2:'';el.forProcessed=true;// avoid recursion
	return"("+exp+")&&_l(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+genElement(el)+'})';}function genData(el){if(el.plain){return;}var data='{';// directives first.
	// directives may mutate the el's other properties before they are generated.
	var dirs=genDirectives(el);if(dirs){data+=dirs+',';}// key
	if(el.key){data+="key:"+el.key+",";}// ref
	if(el.ref){data+="ref:"+el.ref+",";}if(el.refInFor){data+="refInFor:true,";}// record original tag name for components using "is" attribute
	if(el.component){data+="tag:\""+el.tag+"\",";}// slot target
	if(el.slotTarget){data+="slot:"+el.slotTarget+",";}// module data generation functions
	for(var i=0;i<dataGenFns.length;i++){data+=dataGenFns[i](el);}// attributes
	if(el.attrs){data+="attrs:{"+genProps(el.attrs)+"},";}// DOM props
	if(el.props){data+="domProps:{"+genProps(el.props)+"},";}// event handlers
	if(el.events){data+=genHandlers(el.events)+",";}if(el.nativeEvents){data+=genHandlers(el.nativeEvents,true)+",";}// inline-template
	if(el.inlineTemplate){var ast=el.children[0];if("development"!=='production'&&(el.children.length>1||ast.type!==1)){warn$2('Inline-template components must have exactly one child element.');}if(ast.type===1){var inlineRenderFns=generate(ast,currentOptions);data+="inlineTemplate:{render:function(){"+inlineRenderFns.render+"},staticRenderFns:["+inlineRenderFns.staticRenderFns.map(function(code){return"function(){"+code+"}";}).join(',')+"]}";}}data=data.replace(/,$/,'')+'}';// v-bind data wrap
	if(el.wrapData){data=el.wrapData(data);}return data;}function genDirectives(el){var dirs=el.directives;if(!dirs){return;}var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=platformDirectives$1[dir.name]||baseDirectives[dir.name];if(gen){// compile-time directive that manipulates AST.
	// returns true if it also needs a runtime counterpart.
	needRuntime=!!gen(el,dir,warn$2);}if(needRuntime){hasRuntime=true;res+="{name:\""+dir.name+"\""+(dir.value?",value:("+dir.value+"),expression:"+JSON.stringify(dir.value):'')+(dir.arg?",arg:\""+dir.arg+"\"":'')+(dir.modifiers?",modifiers:"+JSON.stringify(dir.modifiers):'')+"},";}}if(hasRuntime){return res.slice(0,-1)+']';}}function genChildren(el){if(el.children.length){return'['+el.children.map(genNode).join(',')+']';}}function genNode(node){if(node.type===1){return genElement(node);}else{return genText(node);}}function genText(text){return text.type===2?text.expression// no need for () because already wrapped in _s()
	:JSON.stringify(text.text);}function genSlot(el){var slotName=el.slotName||'"default"';var children=genChildren(el);return children?"_t("+slotName+","+children+")":"_t("+slotName+")";}function genComponent(el){var children=genChildren(el);return"_h("+el.component+","+genData(el)+(children?","+children:'')+")";}function genProps(props){var res='';for(var i=0;i<props.length;i++){var prop=props[i];res+="\""+prop.name+"\":"+prop.value+",";}return res.slice(0,-1);}/*  *//**
	 * Compile a template.
	 */function compile$1(template,options){var ast=parse(template.trim(),options);optimize(ast,options);var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};}/*  */// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE=new RegExp('\\b'+('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,default,'+'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b')+'\\b');// check valid identifier for v-for
	var identRE=/[A-Za-z_$][\w$]*/;// strip strings in expressions
	var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;// detect problematic expressions in a template
	function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type===1){for(var name in node.attrsMap){if(dirRE.test(name)){var value=node.attrsMap[name];if(value){if(name==='v-for'){checkFor(node,"v-for=\""+value+"\"",errors);}else{checkExpression(value,name+"=\""+value+"\"",errors);}}}}if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],errors);}}}else if(node.type===2){checkExpression(node.expression,node.text,errors);}}function checkFor(node,text,errors){checkExpression(node.for||'',text,errors);checkIdentifier(node.alias,'v-for alias',text,errors);checkIdentifier(node.iterator1,'v-for iterator',text,errors);checkIdentifier(node.iterator2,'v-for iterator',text,errors);}function checkIdentifier(ident,type,text,errors){if(typeof ident==='string'&&!identRE.test(ident)){errors.push("- invalid "+type+" \""+ident+"\" in expression: "+text);}}function checkExpression(exp,text,errors){try{new Function("return "+exp);}catch(e){var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){errors.push("- avoid using JavaScript keyword as property name: "+"\""+keywordMatch[0]+"\" in expression "+text);}else{errors.push("- invalid expression: "+text);}}}/*  */function transformNode(el,options){var warn=options.warn||baseWarn;var staticClass=getAndRemoveAttr(el,'class');if("development"!=='production'&&staticClass){var expression=parseText(staticClass,options.delimiters);if(expression){warn("class=\""+staticClass+"\": "+'Interpolation inside attributes has been deprecated. '+'Use v-bind or the colon shorthand instead.');}}if(staticClass){el.staticClass=JSON.stringify(staticClass);}var classBinding=getBindingAttr(el,'class',false/* getStatic */);if(classBinding){el.classBinding=classBinding;}}function genData$1(el){var data='';if(el.staticClass){data+="staticClass:"+el.staticClass+",";}if(el.classBinding){data+="class:"+el.classBinding+",";}return data;}var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData$1};/*  */function transformNode$1(el){var styleBinding=getBindingAttr(el,'style',false/* getStatic */);if(styleBinding){el.styleBinding=styleBinding;}}function genData$2(el){return el.styleBinding?"style:("+el.styleBinding+"),":'';}var style$1={transformNode:transformNode$1,genData:genData$2};var modules$1=[klass$1,style$1];/*  */var warn$3;function model$1(el,dir,_warn){warn$3=_warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;if(tag==='select'){return genSelect(el,value);}else if(tag==='input'&&type==='checkbox'){genCheckboxModel(el,value);}else if(tag==='input'&&type==='radio'){genRadioModel(el,value);}else{return genDefaultModel(el,value,modifiers);}}function genCheckboxModel(el,value){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var valueBinding=getBindingAttr(el,'value')||'null';var trueValueBinding=getBindingAttr(el,'true-value')||'true';var falseValueBinding=getBindingAttr(el,'false-value')||'false';addProp(el,'checked',"Array.isArray("+value+")"+"?_i("+value+","+valueBinding+")>-1"+":_q("+value+","+trueValueBinding+")");addHandler(el,'change',"var $$a="+value+","+'$$el=$event.target,'+"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+'if(Array.isArray($$a)){'+"var $$v="+valueBinding+","+'$$i=_i($$a,$$v);'+"if($$c){$$i<0&&("+value+"=$$a.concat($$v))}"+"else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+"}else{"+value+"=$$c}",null,true);}function genRadioModel(el,value){if("development"!=='production'&&el.attrsMap.checked!=null){warn$3("<"+el.tag+" v-model=\""+value+"\" checked>:\n"+"inline checked attributes will be ignored when using v-model. "+'Declare initial values in the component\'s data option instead.');}var valueBinding=getBindingAttr(el,'value')||'null';addProp(el,'checked',"_q("+value+","+valueBinding+")");addHandler(el,'change',value+"="+valueBinding,null,true);}function genDefaultModel(el,value,modifiers){if(true){if(el.tag==='input'&&el.attrsMap.value){warn$3("<"+el.tag+" v-model=\""+value+"\" value=\""+el.attrsMap.value+"\">:\n"+'inline value attributes will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}if(el.tag==='textarea'&&el.children.length){warn$3("<textarea v-model=\""+value+"\">:\n"+'inline content inside <textarea> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');}}var type=el.attrsMap.type;var ref=modifiers||{};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var event=lazy||isIE&&type==='range'?'change':'input';var needCompositionGuard=!lazy&&type!=='range';var isNative=el.tag==='input'||el.tag==='textarea';var valueExpression=isNative?"$event.target.value"+(trim?'.trim()':''):"$event";var code=number||type==='number'?value+"=_n("+valueExpression+")":value+"="+valueExpression;if(isNative&&needCompositionGuard){code="if($event.target.composing)return;"+code;}// inputs with type="file" are read only and setting the input's
	// value will throw an error.
	if("development"!=='production'&&type==='file'){warn$3("<"+el.tag+" v-model=\""+value+"\" type=\"file\">:\n"+"File inputs are read only. Use a v-on:change listener instead.");}addProp(el,'value',isNative?"_s("+value+")":"("+value+")");addHandler(el,event,code,null,true);if(needCompositionGuard){// need runtime directive code to help with composition events
	return true;}}function genSelect(el,value){if(true){el.children.some(checkOptionWarning);}var code=value+"=Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+".map(function(o){return \"_value\" in o ? o._value : o.value})"+(el.attrsMap.multiple==null?'[0]':'');addHandler(el,'change',code,null,true);// need runtime to help with possible dynamically generated options
	return true;}function checkOptionWarning(option){if(option.type===1&&option.tag==='option'&&option.attrsMap.selected!=null){warn$3("<select v-model=\""+option.parent.attrsMap['v-model']+"\">:\n"+'inline selected attributes on <option> will be ignored when using v-model. '+'Declare initial values in the component\'s data option instead.');return true;}return false;}/*  */function text(el,dir){if(dir.value){addProp(el,'textContent',"_s("+dir.value+")");}}/*  */function html(el,dir){if(dir.value){addProp(el,'innerHTML',"_s("+dir.value+")");}}var directives$1={model:model$1,text:text,html:html};/*  */var cache=Object.create(null);var baseOptions={isIE:isIE,expectHTML:true,modules:modules$1,staticKeys:genStaticKeys(modules$1),directives:directives$1,isReservedTag:isReservedTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,getTagNamespace:getTagNamespace,isPreTag:isPreTag};function compile(template,options){options=options?extend(extend({},baseOptions),options):baseOptions;return compile$1(template,options);}function compileToFunctions(template,options,vm){var _warn=options&&options.warn||warn;// detect possible CSP restriction
	/* istanbul ignore if */if(true){try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){_warn('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}var key=options&&options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key];}var res={};var compiled=compile(template,options);res.render=makeFunction(compiled.render);var l=compiled.staticRenderFns.length;res.staticRenderFns=new Array(l);for(var i=0;i<l;i++){res.staticRenderFns[i]=makeFunction(compiled.staticRenderFns[i]);}if(true){if(res.render===noop||res.staticRenderFns.some(function(fn){return fn===noop;})){_warn("failed to compile template:\n\n"+template+"\n\n"+detectErrors(compiled.ast).join('\n')+'\n\n',vm);}}return cache[key]=res;}function makeFunction(code){try{return new Function(code);}catch(e){return noop;}}/*  */var idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML;});var mount=Vue.prototype.$mount;Vue.prototype.$mount=function(el,hydrating){el=el&&query(el);/* istanbul ignore if */if(el===document.body||el===document.documentElement){"development"!=='production'&&warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this;}var options=this.$options;// resolve template/el and convert to render function
	if(!options.render){var template=options.template;var isFromDOM=false;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){isFromDOM=true;template=idToTemplate(template);}}else if(template.nodeType){isFromDOM=true;template=template.innerHTML;}else{if(true){warn('invalid template option:'+template,this);}return this;}}else if(el){isFromDOM=true;template=getOuterHTML(el);}if(template){var ref=compileToFunctions(template,{warn:warn,isFromDOM:isFromDOM,shouldDecodeTags:shouldDecodeTags,shouldDecodeNewlines:shouldDecodeNewlines,delimiters:options.delimiters},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;}}return mount.call(this,el,hydrating);};/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}Vue.compile=compileToFunctions;return Vue;});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global, process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};// Copyright (c) Microsoft, All rights reserved. See License.txt in the project root for license information.
	;(function(undefined){var objectTypes={'function':true,'object':true};function checkGlobal(value){return value&&value.Object===Object?value:null;}var freeExports=objectTypes[ false?'undefined':_typeof(exports)]&&exports&&!exports.nodeType?exports:null;var freeModule=objectTypes[ false?'undefined':_typeof(module)]&&module&&!module.nodeType?module:null;var freeGlobal=checkGlobal(freeExports&&freeModule&&(typeof global==='undefined'?'undefined':_typeof(global))==='object'&&global);var freeSelf=checkGlobal(objectTypes[typeof self==='undefined'?'undefined':_typeof(self)]&&self);var freeWindow=checkGlobal(objectTypes[typeof window==='undefined'?'undefined':_typeof(window)]&&window);var moduleExports=freeModule&&freeModule.exports===freeExports?freeExports:null;var thisGlobal=checkGlobal(objectTypes[_typeof(this)]&&this);var root=freeGlobal||freeWindow!==(thisGlobal&&thisGlobal.window)&&freeWindow||freeSelf||thisGlobal||Function('return this')();var Rx={internals:{},config:{Promise:root.Promise},helpers:{}};// Defaults
	var noop=Rx.helpers.noop=function(){},identity=Rx.helpers.identity=function(x){return x;},defaultNow=Rx.helpers.defaultNow=Date.now,defaultComparer=Rx.helpers.defaultComparer=function(x,y){return isEqual(x,y);},defaultSubComparer=Rx.helpers.defaultSubComparer=function(x,y){return x>y?1:x<y?-1:0;},defaultKeySerializer=Rx.helpers.defaultKeySerializer=function(x){return x.toString();},defaultError=Rx.helpers.defaultError=function(err){throw err;},isPromise=Rx.helpers.isPromise=function(p){return!!p&&typeof p.subscribe!=='function'&&typeof p.then==='function';},isFunction=Rx.helpers.isFunction=function(){var isFn=function isFn(value){return typeof value=='function'||false;};// fallback for older versions of Chrome and Safari
	if(isFn(/x/)){isFn=function isFn(value){return typeof value=='function'&&toString.call(value)=='[object Function]';};}return isFn;}();function cloneArray(arr){for(var a=[],i=0,len=arr.length;i<len;i++){a.push(arr[i]);}return a;}var errorObj={e:{}};function tryCatcherGen(tryCatchTarget){return function tryCatcher(){try{return tryCatchTarget.apply(this,arguments);}catch(e){errorObj.e=e;return errorObj;}};}var tryCatch=Rx.internals.tryCatch=function tryCatch(fn){if(!isFunction(fn)){throw new TypeError('fn must be a function');}return tryCatcherGen(fn);};function thrower(e){throw e;}Rx.config.longStackSupport=false;var hasStacks=false,stacks=tryCatch(function(){throw new Error();})();hasStacks=!!stacks.e&&!!stacks.e.stack;// All code after this point will be filtered from stack traces reported by RxJS
	var rStartingLine=captureLine(),rFileName;var STACK_JUMP_SEPARATOR='From previous event:';function makeStackTraceLong(error,observable){// If possible, transform the error stack trace by removing Node and RxJS
	// cruft, then concatenating with the stack trace of `observable`.
	if(hasStacks&&observable.stack&&(typeof error==='undefined'?'undefined':_typeof(error))==='object'&&error!==null&&error.stack&&error.stack.indexOf(STACK_JUMP_SEPARATOR)===-1){var stacks=[];for(var o=observable;!!o;o=o.source){if(o.stack){stacks.unshift(o.stack);}}stacks.unshift(error.stack);var concatedStacks=stacks.join('\n'+STACK_JUMP_SEPARATOR+'\n');error.stack=filterStackString(concatedStacks);}}function filterStackString(stackString){var lines=stackString.split('\n'),desiredLines=[];for(var i=0,len=lines.length;i<len;i++){var line=lines[i];if(!isInternalFrame(line)&&!isNodeFrame(line)&&line){desiredLines.push(line);}}return desiredLines.join('\n');}function isInternalFrame(stackLine){var fileNameAndLineNumber=getFileNameAndLineNumber(stackLine);if(!fileNameAndLineNumber){return false;}var fileName=fileNameAndLineNumber[0],lineNumber=fileNameAndLineNumber[1];return fileName===rFileName&&lineNumber>=rStartingLine&&lineNumber<=rEndingLine;}function isNodeFrame(stackLine){return stackLine.indexOf('(module.js:')!==-1||stackLine.indexOf('(node.js:')!==-1;}function captureLine(){if(!hasStacks){return;}try{throw new Error();}catch(e){var lines=e.stack.split('\n');var firstLine=lines[0].indexOf('@')>0?lines[1]:lines[2];var fileNameAndLineNumber=getFileNameAndLineNumber(firstLine);if(!fileNameAndLineNumber){return;}rFileName=fileNameAndLineNumber[0];return fileNameAndLineNumber[1];}}function getFileNameAndLineNumber(stackLine){// Named functions: 'at functionName (filename:lineNumber:columnNumber)'
	var attempt1=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);if(attempt1){return[attempt1[1],Number(attempt1[2])];}// Anonymous functions: 'at filename:lineNumber:columnNumber'
	var attempt2=/at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);if(attempt2){return[attempt2[1],Number(attempt2[2])];}// Firefox style: 'function@filename:lineNumber or @filename:lineNumber'
	var attempt3=/.*@(.+):(\d+)$/.exec(stackLine);if(attempt3){return[attempt3[1],Number(attempt3[2])];}}var EmptyError=Rx.EmptyError=function(){this.message='Sequence contains no elements.';Error.call(this);};EmptyError.prototype=Object.create(Error.prototype);EmptyError.prototype.name='EmptyError';var ObjectDisposedError=Rx.ObjectDisposedError=function(){this.message='Object has been disposed';Error.call(this);};ObjectDisposedError.prototype=Object.create(Error.prototype);ObjectDisposedError.prototype.name='ObjectDisposedError';var ArgumentOutOfRangeError=Rx.ArgumentOutOfRangeError=function(){this.message='Argument out of range';Error.call(this);};ArgumentOutOfRangeError.prototype=Object.create(Error.prototype);ArgumentOutOfRangeError.prototype.name='ArgumentOutOfRangeError';var NotSupportedError=Rx.NotSupportedError=function(message){this.message=message||'This operation is not supported';Error.call(this);};NotSupportedError.prototype=Object.create(Error.prototype);NotSupportedError.prototype.name='NotSupportedError';var NotImplementedError=Rx.NotImplementedError=function(message){this.message=message||'This operation is not implemented';Error.call(this);};NotImplementedError.prototype=Object.create(Error.prototype);NotImplementedError.prototype.name='NotImplementedError';var notImplemented=Rx.helpers.notImplemented=function(){throw new NotImplementedError();};var notSupported=Rx.helpers.notSupported=function(){throw new NotSupportedError();};// Shim in iterator support
	var $iterator$=typeof Symbol==='function'&&Symbol.iterator||'_es6shim_iterator_';// Bug for mozilla version
	if(root.Set&&typeof new root.Set()['@@iterator']==='function'){$iterator$='@@iterator';}var doneEnumerator=Rx.doneEnumerator={done:true,value:undefined};var isIterable=Rx.helpers.isIterable=function(o){return o&&o[$iterator$]!==undefined;};var isArrayLike=Rx.helpers.isArrayLike=function(o){return o&&o.length!==undefined;};Rx.helpers.iterator=$iterator$;var bindCallback=Rx.internals.bindCallback=function(func,thisArg,argCount){if(typeof thisArg==='undefined'){return func;}switch(argCount){case 0:return function(){return func.call(thisArg);};case 1:return function(arg){return func.call(thisArg,arg);};case 2:return function(value,index){return func.call(thisArg,value,index);};case 3:return function(value,index,collection){return func.call(thisArg,value,index,collection);};}return function(){return func.apply(thisArg,arguments);};};/** Used to determine if values are of the language type Object */var dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,objToString=objectProto.toString,MAX_SAFE_INTEGER=Math.pow(2,53)-1;var keys=Object.keys||function(){var hasOwnProperty=Object.prototype.hasOwnProperty,hasDontEnumBug=!{toString:null}.propertyIsEnumerable('toString'),dontEnums=['toString','toLocaleString','valueOf','hasOwnProperty','isPrototypeOf','propertyIsEnumerable','constructor'],dontEnumsLength=dontEnums.length;return function(obj){if((typeof obj==='undefined'?'undefined':_typeof(obj))!=='object'&&(typeof obj!=='function'||obj===null)){throw new TypeError('Object.keys called on non-object');}var result=[],prop,i;for(prop in obj){if(hasOwnProperty.call(obj,prop)){result.push(prop);}}if(hasDontEnumBug){for(i=0;i<dontEnumsLength;i++){if(hasOwnProperty.call(obj,dontEnums[i])){result.push(dontEnums[i]);}}}return result;};}();function equalObjects(object,other,equalFunc,isLoose,stackA,stackB){var objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!==othLength&&!isLoose){return false;}var index=objLength,key;while(index--){key=objProps[index];if(!(isLoose?key in other:hasOwnProperty.call(other,key))){return false;}}var skipCtor=isLoose;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key],result;if(!(result===undefined?equalFunc(objValue,othValue,isLoose,stackA,stackB):result)){return false;}skipCtor||(skipCtor=key==='constructor');}if(!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;if(objCtor!==othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor==='function'&&objCtor instanceof objCtor&&typeof othCtor==='function'&&othCtor instanceof othCtor)){return false;}}return true;}function equalByTag(object,other,tag){switch(tag){case boolTag:case dateTag:return+object===+other;case errorTag:return object.name===other.name&&object.message===other.message;case numberTag:return object!==+object?other!==+other:object===+other;case regexpTag:case stringTag:return object===other+'';}return false;}var isObject=Rx.internals.isObject=function(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type==='object'||type==='function');};function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))==='object';}function isLength(value){return typeof value==='number'&&value>-1&&value%1===0&&value<=MAX_SAFE_INTEGER;}var isHostObject=function(){try{Object({'toString':0}+'');}catch(e){return function(){return false;};}return function(value){return typeof value.toString!=='function'&&typeof(value+'')==='string';};}();function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objToString.call(value)];}var isArray=Array.isArray||function(value){return isObjectLike(value)&&isLength(value.length)&&objToString.call(value)===arrayTag;};function arraySome(array,predicate){var index=-1,length=array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}function equalArrays(array,other,equalFunc,isLoose,stackA,stackB){var index=-1,arrLength=array.length,othLength=other.length;if(arrLength!==othLength&&!(isLoose&&othLength>arrLength)){return false;}// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index],result;if(result!==undefined){if(result){continue;}return false;}// Recursively compare arrays (susceptible to call stack limits).
	if(isLoose){if(!arraySome(other,function(othValue){return arrValue===othValue||equalFunc(arrValue,othValue,isLoose,stackA,stackB);})){return false;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,isLoose,stackA,stackB))){return false;}}return true;}function baseIsEqualDeep(object,other,equalFunc,isLoose,stackA,stackB){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=objToString.call(object);if(objTag===argsTag){objTag=objectTag;}else if(objTag!==objectTag){objIsArr=isTypedArray(object);}}if(!othIsArr){othTag=objToString.call(other);if(othTag===argsTag){othTag=objectTag;}}var objIsObj=objTag===objectTag&&!isHostObject(object),othIsObj=othTag===objectTag&&!isHostObject(other),isSameTag=objTag===othTag;if(isSameTag&&!(objIsArr||objIsObj)){return equalByTag(object,other,objTag);}if(!isLoose){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){return equalFunc(objIsWrapped?object.value():object,othIsWrapped?other.value():other,isLoose,stackA,stackB);}}if(!isSameTag){return false;}// Assume cyclic values are equal.
	// For more information on detecting circular references see https://es5.github.io/#JO.
	stackA||(stackA=[]);stackB||(stackB=[]);var length=stackA.length;while(length--){if(stackA[length]===object){return stackB[length]===other;}}// Add `object` and `other` to the stack of traversed objects.
	stackA.push(object);stackB.push(other);var result=(objIsArr?equalArrays:equalObjects)(object,other,equalFunc,isLoose,stackA,stackB);stackA.pop();stackB.pop();return result;}function baseIsEqual(value,other,isLoose,stackA,stackB){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,isLoose,stackA,stackB);}var isEqual=Rx.internals.isEqual=function(value,other){return baseIsEqual(value,other);};var hasProp={}.hasOwnProperty,slice=Array.prototype.slice;var inherits=Rx.internals.inherits=function(child,parent){function __(){this.constructor=child;}__.prototype=parent.prototype;child.prototype=new __();};var addProperties=Rx.internals.addProperties=function(obj){for(var sources=[],i=1,len=arguments.length;i<len;i++){sources.push(arguments[i]);}for(var idx=0,ln=sources.length;idx<ln;idx++){var source=sources[idx];for(var prop in source){obj[prop]=source[prop];}}};// Rx Utils
	var addRef=Rx.internals.addRef=function(xs,r){return new AnonymousObservable(function(observer){return new BinaryDisposable(r.getDisposable(),xs.subscribe(observer));});};function arrayInitialize(count,factory){var a=new Array(count);for(var i=0;i<count;i++){a[i]=factory();}return a;}function IndexedItem(id,value){this.id=id;this.value=value;}IndexedItem.prototype.compareTo=function(other){var c=this.value.compareTo(other.value);c===0&&(c=this.id-other.id);return c;};var PriorityQueue=Rx.internals.PriorityQueue=function(capacity){this.items=new Array(capacity);this.length=0;};var priorityProto=PriorityQueue.prototype;priorityProto.isHigherPriority=function(left,right){return this.items[left].compareTo(this.items[right])<0;};priorityProto.percolate=function(index){if(index>=this.length||index<0){return;}var parent=index-1>>1;if(parent<0||parent===index){return;}if(this.isHigherPriority(index,parent)){var temp=this.items[index];this.items[index]=this.items[parent];this.items[parent]=temp;this.percolate(parent);}};priorityProto.heapify=function(index){+index||(index=0);if(index>=this.length||index<0){return;}var left=2*index+1,right=2*index+2,first=index;if(left<this.length&&this.isHigherPriority(left,first)){first=left;}if(right<this.length&&this.isHigherPriority(right,first)){first=right;}if(first!==index){var temp=this.items[index];this.items[index]=this.items[first];this.items[first]=temp;this.heapify(first);}};priorityProto.peek=function(){return this.items[0].value;};priorityProto.removeAt=function(index){this.items[index]=this.items[--this.length];this.items[this.length]=undefined;this.heapify();};priorityProto.dequeue=function(){var result=this.peek();this.removeAt(0);return result;};priorityProto.enqueue=function(item){var index=this.length++;this.items[index]=new IndexedItem(PriorityQueue.count++,item);this.percolate(index);};priorityProto.remove=function(item){for(var i=0;i<this.length;i++){if(this.items[i].value===item){this.removeAt(i);return true;}}return false;};PriorityQueue.count=0;/**
	   * Represents a group of disposable resources that are disposed together.
	   * @constructor
	   */var CompositeDisposable=Rx.CompositeDisposable=function(){var args=[],i,len;if(Array.isArray(arguments[0])){args=arguments[0];}else{len=arguments.length;args=new Array(len);for(i=0;i<len;i++){args[i]=arguments[i];}}this.disposables=args;this.isDisposed=false;this.length=args.length;};var CompositeDisposablePrototype=CompositeDisposable.prototype;/**
	   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
	   * @param {Mixed} item Disposable to add.
	   */CompositeDisposablePrototype.add=function(item){if(this.isDisposed){item.dispose();}else{this.disposables.push(item);this.length++;}};/**
	   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
	   * @param {Mixed} item Disposable to remove.
	   * @returns {Boolean} true if found; false otherwise.
	   */CompositeDisposablePrototype.remove=function(item){var shouldDispose=false;if(!this.isDisposed){var idx=this.disposables.indexOf(item);if(idx!==-1){shouldDispose=true;this.disposables.splice(idx,1);this.length--;item.dispose();}}return shouldDispose;};/**
	   *  Disposes all disposables in the group and removes them from the group.
	   */CompositeDisposablePrototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;var len=this.disposables.length,currentDisposables=new Array(len);for(var i=0;i<len;i++){currentDisposables[i]=this.disposables[i];}this.disposables=[];this.length=0;for(i=0;i<len;i++){currentDisposables[i].dispose();}}};/**
	   * Provides a set of static methods for creating Disposables.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   */var Disposable=Rx.Disposable=function(action){this.isDisposed=false;this.action=action||noop;};/** Performs the task of cleaning up resources. */Disposable.prototype.dispose=function(){if(!this.isDisposed){this.action();this.isDisposed=true;}};/**
	   * Creates a disposable object that invokes the specified action when disposed.
	   * @param {Function} dispose Action to run during the first call to dispose. The action is guaranteed to be run at most once.
	   * @return {Disposable} The disposable object that runs the given action upon disposal.
	   */var disposableCreate=Disposable.create=function(action){return new Disposable(action);};/**
	   * Gets the disposable that does nothing when disposed.
	   */var disposableEmpty=Disposable.empty={dispose:noop};/**
	   * Validates whether the given object is a disposable
	   * @param {Object} Object to test whether it has a dispose method
	   * @returns {Boolean} true if a disposable object, else false.
	   */var isDisposable=Disposable.isDisposable=function(d){return d&&isFunction(d.dispose);};var checkDisposed=Disposable.checkDisposed=function(disposable){if(disposable.isDisposed){throw new ObjectDisposedError();}};var disposableFixup=Disposable._fixup=function(result){return isDisposable(result)?result:disposableEmpty;};// Single assignment
	var SingleAssignmentDisposable=Rx.SingleAssignmentDisposable=function(){this.isDisposed=false;this.current=null;};SingleAssignmentDisposable.prototype.getDisposable=function(){return this.current;};SingleAssignmentDisposable.prototype.setDisposable=function(value){if(this.current){throw new Error('Disposable has already been assigned');}var shouldDispose=this.isDisposed;!shouldDispose&&(this.current=value);shouldDispose&&value&&value.dispose();};SingleAssignmentDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;var old=this.current;this.current=null;old&&old.dispose();}};// Multiple assignment disposable
	var SerialDisposable=Rx.SerialDisposable=function(){this.isDisposed=false;this.current=null;};SerialDisposable.prototype.getDisposable=function(){return this.current;};SerialDisposable.prototype.setDisposable=function(value){var shouldDispose=this.isDisposed;if(!shouldDispose){var old=this.current;this.current=value;}old&&old.dispose();shouldDispose&&value&&value.dispose();};SerialDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;var old=this.current;this.current=null;}old&&old.dispose();};var BinaryDisposable=Rx.BinaryDisposable=function(first,second){this._first=first;this._second=second;this.isDisposed=false;};BinaryDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;var old1=this._first;this._first=null;old1&&old1.dispose();var old2=this._second;this._second=null;old2&&old2.dispose();}};var NAryDisposable=Rx.NAryDisposable=function(disposables){this._disposables=disposables;this.isDisposed=false;};NAryDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;for(var i=0,len=this._disposables.length;i<len;i++){this._disposables[i].dispose();}this._disposables.length=0;}};/**
	   * Represents a disposable resource that only disposes its underlying disposable resource when all dependent disposable objects have been disposed.
	   */var RefCountDisposable=Rx.RefCountDisposable=function(){function InnerDisposable(disposable){this.disposable=disposable;this.disposable.count++;this.isInnerDisposed=false;}InnerDisposable.prototype.dispose=function(){if(!this.disposable.isDisposed&&!this.isInnerDisposed){this.isInnerDisposed=true;this.disposable.count--;if(this.disposable.count===0&&this.disposable.isPrimaryDisposed){this.disposable.isDisposed=true;this.disposable.underlyingDisposable.dispose();}}};/**
	     * Initializes a new instance of the RefCountDisposable with the specified disposable.
	     * @constructor
	     * @param {Disposable} disposable Underlying disposable.
	      */function RefCountDisposable(disposable){this.underlyingDisposable=disposable;this.isDisposed=false;this.isPrimaryDisposed=false;this.count=0;}/**
	     * Disposes the underlying disposable only when all dependent disposables have been disposed
	     */RefCountDisposable.prototype.dispose=function(){if(!this.isDisposed&&!this.isPrimaryDisposed){this.isPrimaryDisposed=true;if(this.count===0){this.isDisposed=true;this.underlyingDisposable.dispose();}}};/**
	     * Returns a dependent disposable that when disposed decreases the refcount on the underlying disposable.
	     * @returns {Disposable} A dependent disposable contributing to the reference count that manages the underlying disposable's lifetime.
	     */RefCountDisposable.prototype.getDisposable=function(){return this.isDisposed?disposableEmpty:new InnerDisposable(this);};return RefCountDisposable;}();function ScheduledDisposable(scheduler,disposable){this.scheduler=scheduler;this.disposable=disposable;this.isDisposed=false;}function scheduleItem(s,self){if(!self.isDisposed){self.isDisposed=true;self.disposable.dispose();}}ScheduledDisposable.prototype.dispose=function(){this.scheduler.schedule(this,scheduleItem);};var ScheduledItem=Rx.internals.ScheduledItem=function(scheduler,state,action,dueTime,comparer){this.scheduler=scheduler;this.state=state;this.action=action;this.dueTime=dueTime;this.comparer=comparer||defaultSubComparer;this.disposable=new SingleAssignmentDisposable();};ScheduledItem.prototype.invoke=function(){this.disposable.setDisposable(this.invokeCore());};ScheduledItem.prototype.compareTo=function(other){return this.comparer(this.dueTime,other.dueTime);};ScheduledItem.prototype.isCancelled=function(){return this.disposable.isDisposed;};ScheduledItem.prototype.invokeCore=function(){return disposableFixup(this.action(this.scheduler,this.state));};/** Provides a set of static properties to access commonly used schedulers. */var Scheduler=Rx.Scheduler=function(){function Scheduler(){}/** Determines whether the given object is a scheduler */Scheduler.isScheduler=function(s){return s instanceof Scheduler;};var schedulerProto=Scheduler.prototype;/**
	   * Schedules an action to be executed.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */schedulerProto.schedule=function(state,action){throw new NotImplementedError();};/**
	   * Schedules an action to be executed after dueTime.
	   * @param state State passed to the action to be executed.
	   * @param {Function} action Action to be executed.
	   * @param {Number} dueTime Relative time after which to execute the action.
	   * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	   */schedulerProto.scheduleFuture=function(state,dueTime,action){var dt=dueTime;dt instanceof Date&&(dt=dt-this.now());dt=Scheduler.normalize(dt);if(dt===0){return this.schedule(state,action);}return this._scheduleFuture(state,dt,action);};schedulerProto._scheduleFuture=function(state,dueTime,action){throw new NotImplementedError();};/** Gets the current time according to the local machine's system clock. */Scheduler.now=defaultNow;/** Gets the current time according to the local machine's system clock. */Scheduler.prototype.now=defaultNow;/**
	     * Normalizes the specified TimeSpan value to a positive value.
	     * @param {Number} timeSpan The time span value to normalize.
	     * @returns {Number} The specified TimeSpan value if it is zero or positive; otherwise, 0
	     */Scheduler.normalize=function(timeSpan){timeSpan<0&&(timeSpan=0);return timeSpan;};return Scheduler;}();var normalizeTime=Scheduler.normalize,isScheduler=Scheduler.isScheduler;(function(schedulerProto){function invokeRecImmediate(scheduler,pair){var state=pair[0],action=pair[1],group=new CompositeDisposable();action(state,innerAction);return group;function innerAction(state2){var isAdded=false,isDone=false;var d=scheduler.schedule(state2,scheduleWork);if(!isDone){group.add(d);isAdded=true;}function scheduleWork(_,state3){if(isAdded){group.remove(d);}else{isDone=true;}action(state3,innerAction);return disposableEmpty;}}}function invokeRecDate(scheduler,pair){var state=pair[0],action=pair[1],group=new CompositeDisposable();action(state,innerAction);return group;function innerAction(state2,dueTime1){var isAdded=false,isDone=false;var d=scheduler.scheduleFuture(state2,dueTime1,scheduleWork);if(!isDone){group.add(d);isAdded=true;}function scheduleWork(_,state3){if(isAdded){group.remove(d);}else{isDone=true;}action(state3,innerAction);return disposableEmpty;}}}/**
	     * Schedules an action to be executed recursively.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in recursive invocation state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */schedulerProto.scheduleRecursive=function(state,action){return this.schedule([state,action],invokeRecImmediate);};/**
	     * Schedules an action to be executed recursively after a specified relative or absolute due time.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Function} action Action to execute recursively. The last parameter passed to the action is used to trigger recursive scheduling of the action, passing in the recursive due time and invocation state.
	     * @param {Number | Date} dueTime Relative or absolute time after which to execute the action for the first time.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */schedulerProto.scheduleRecursiveFuture=function(state,dueTime,action){return this.scheduleFuture([state,action],dueTime,invokeRecDate);};})(Scheduler.prototype);(function(schedulerProto){/**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be scheduled using window.setInterval for the base implementation.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */schedulerProto.schedulePeriodic=function(state,period,action){if(typeof root.setInterval==='undefined'){throw new NotSupportedError();}period=normalizeTime(period);var s=state,id=root.setInterval(function(){s=action(s);},period);return disposableCreate(function(){root.clearInterval(id);});};})(Scheduler.prototype);(function(schedulerProto){/**
	     * Returns a scheduler that wraps the original scheduler, adding exception handling for scheduled actions.
	     * @param {Function} handler Handler that's run if an exception is caught. The exception will be rethrown if the handler returns false.
	     * @returns {Scheduler} Wrapper around the original scheduler, enforcing exception handling.
	     */schedulerProto.catchError=schedulerProto['catch']=function(handler){return new CatchScheduler(this,handler);};})(Scheduler.prototype);var SchedulePeriodicRecursive=Rx.internals.SchedulePeriodicRecursive=function(){function createTick(self){return function tick(command,recurse){recurse(0,self._period);var state=tryCatch(self._action)(self._state);if(state===errorObj){self._cancel.dispose();thrower(state.e);}self._state=state;};}function SchedulePeriodicRecursive(scheduler,state,period,action){this._scheduler=scheduler;this._state=state;this._period=period;this._action=action;}SchedulePeriodicRecursive.prototype.start=function(){var d=new SingleAssignmentDisposable();this._cancel=d;d.setDisposable(this._scheduler.scheduleRecursiveFuture(0,this._period,createTick(this)));return d;};return SchedulePeriodicRecursive;}();/** Gets a scheduler that schedules work immediately on the current thread. */var ImmediateScheduler=function(__super__){inherits(ImmediateScheduler,__super__);function ImmediateScheduler(){__super__.call(this);}ImmediateScheduler.prototype.schedule=function(state,action){return disposableFixup(action(this,state));};return ImmediateScheduler;}(Scheduler);var immediateScheduler=Scheduler.immediate=new ImmediateScheduler();/**
	   * Gets a scheduler that schedules work as soon as possible on the current thread.
	   */var CurrentThreadScheduler=function(__super__){var queue;function runTrampoline(){while(queue.length>0){var item=queue.dequeue();!item.isCancelled()&&item.invoke();}}inherits(CurrentThreadScheduler,__super__);function CurrentThreadScheduler(){__super__.call(this);}CurrentThreadScheduler.prototype.schedule=function(state,action){var si=new ScheduledItem(this,state,action,this.now());if(!queue){queue=new PriorityQueue(4);queue.enqueue(si);var result=tryCatch(runTrampoline)();queue=null;if(result===errorObj){thrower(result.e);}}else{queue.enqueue(si);}return si.disposable;};CurrentThreadScheduler.prototype.scheduleRequired=function(){return!queue;};return CurrentThreadScheduler;}(Scheduler);var currentThreadScheduler=Scheduler.currentThread=new CurrentThreadScheduler();var scheduleMethod,clearMethod;var localTimer=function(){var localSetTimeout,localClearTimeout=noop;if(!!root.setTimeout){localSetTimeout=root.setTimeout;localClearTimeout=root.clearTimeout;}else if(!!root.WScript){localSetTimeout=function localSetTimeout(fn,time){root.WScript.Sleep(time);fn();};}else{throw new NotSupportedError();}return{setTimeout:localSetTimeout,clearTimeout:localClearTimeout};}();var localSetTimeout=localTimer.setTimeout,localClearTimeout=localTimer.clearTimeout;(function(){var nextHandle=1,tasksByHandle={},currentlyRunning=false;clearMethod=function clearMethod(handle){delete tasksByHandle[handle];};function runTask(handle){if(currentlyRunning){localSetTimeout(function(){runTask(handle);},0);}else{var task=tasksByHandle[handle];if(task){currentlyRunning=true;var result=tryCatch(task)();clearMethod(handle);currentlyRunning=false;if(result===errorObj){thrower(result.e);}}}}var reNative=new RegExp('^'+String(toString).replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/toString| for [^\]]+/g,'.*?')+'$');var setImmediate=typeof(setImmediate=freeGlobal&&moduleExports&&freeGlobal.setImmediate)=='function'&&!reNative.test(setImmediate)&&setImmediate;function postMessageSupported(){// Ensure not in a worker
	if(!root.postMessage||root.importScripts){return false;}var isAsync=false,oldHandler=root.onmessage;// Test for async
	root.onmessage=function(){isAsync=true;};root.postMessage('','*');root.onmessage=oldHandler;return isAsync;}// Use in order, setImmediate, nextTick, postMessage, MessageChannel, script readystatechanged, setTimeout
	if(isFunction(setImmediate)){scheduleMethod=function scheduleMethod(action){var id=nextHandle++;tasksByHandle[id]=action;setImmediate(function(){runTask(id);});return id;};}else if(typeof process!=='undefined'&&{}.toString.call(process)==='[object process]'){scheduleMethod=function scheduleMethod(action){var id=nextHandle++;tasksByHandle[id]=action;process.nextTick(function(){runTask(id);});return id;};}else if(postMessageSupported()){var MSG_PREFIX='ms.rx.schedule'+Math.random();var onGlobalPostMessage=function onGlobalPostMessage(event){// Only if we're a match to avoid any other global events
	if(typeof event.data==='string'&&event.data.substring(0,MSG_PREFIX.length)===MSG_PREFIX){runTask(event.data.substring(MSG_PREFIX.length));}};root.addEventListener('message',onGlobalPostMessage,false);scheduleMethod=function scheduleMethod(action){var id=nextHandle++;tasksByHandle[id]=action;root.postMessage(MSG_PREFIX+id,'*');return id;};}else if(!!root.MessageChannel){var channel=new root.MessageChannel();channel.port1.onmessage=function(e){runTask(e.data);};scheduleMethod=function scheduleMethod(action){var id=nextHandle++;tasksByHandle[id]=action;channel.port2.postMessage(id);return id;};}else if('document'in root&&'onreadystatechange'in root.document.createElement('script')){scheduleMethod=function scheduleMethod(action){var scriptElement=root.document.createElement('script');var id=nextHandle++;tasksByHandle[id]=action;scriptElement.onreadystatechange=function(){runTask(id);scriptElement.onreadystatechange=null;scriptElement.parentNode.removeChild(scriptElement);scriptElement=null;};root.document.documentElement.appendChild(scriptElement);return id;};}else{scheduleMethod=function scheduleMethod(action){var id=nextHandle++;tasksByHandle[id]=action;localSetTimeout(function(){runTask(id);},0);return id;};}})();/**
	   * Gets a scheduler that schedules work via a timed callback based upon platform.
	   */var DefaultScheduler=function(__super__){inherits(DefaultScheduler,__super__);function DefaultScheduler(){__super__.call(this);}function scheduleAction(disposable,action,scheduler,state){return function schedule(){disposable.setDisposable(Disposable._fixup(action(scheduler,state)));};}function ClearDisposable(id){this._id=id;this.isDisposed=false;}ClearDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;clearMethod(this._id);}};function LocalClearDisposable(id){this._id=id;this.isDisposed=false;}LocalClearDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;localClearTimeout(this._id);}};DefaultScheduler.prototype.schedule=function(state,action){var disposable=new SingleAssignmentDisposable(),id=scheduleMethod(scheduleAction(disposable,action,this,state));return new BinaryDisposable(disposable,new ClearDisposable(id));};DefaultScheduler.prototype._scheduleFuture=function(state,dueTime,action){if(dueTime===0){return this.schedule(state,action);}var disposable=new SingleAssignmentDisposable(),id=localSetTimeout(scheduleAction(disposable,action,this,state),dueTime);return new BinaryDisposable(disposable,new LocalClearDisposable(id));};function scheduleLongRunning(state,action,disposable){return function(){action(state,disposable);};}DefaultScheduler.prototype.scheduleLongRunning=function(state,action){var disposable=disposableCreate(noop);scheduleMethod(scheduleLongRunning(state,action,disposable));return disposable;};return DefaultScheduler;}(Scheduler);var defaultScheduler=Scheduler['default']=Scheduler.async=new DefaultScheduler();var CatchScheduler=function(__super__){inherits(CatchScheduler,__super__);function CatchScheduler(scheduler,handler){this._scheduler=scheduler;this._handler=handler;this._recursiveOriginal=null;this._recursiveWrapper=null;__super__.call(this);}CatchScheduler.prototype.schedule=function(state,action){return this._scheduler.schedule(state,this._wrap(action));};CatchScheduler.prototype._scheduleFuture=function(state,dueTime,action){return this._scheduler.schedule(state,dueTime,this._wrap(action));};CatchScheduler.prototype.now=function(){return this._scheduler.now();};CatchScheduler.prototype._clone=function(scheduler){return new CatchScheduler(scheduler,this._handler);};CatchScheduler.prototype._wrap=function(action){var parent=this;return function(self,state){var res=tryCatch(action)(parent._getRecursiveWrapper(self),state);if(res===errorObj){if(!parent._handler(res.e)){thrower(res.e);}return disposableEmpty;}return disposableFixup(res);};};CatchScheduler.prototype._getRecursiveWrapper=function(scheduler){if(this._recursiveOriginal!==scheduler){this._recursiveOriginal=scheduler;var wrapper=this._clone(scheduler);wrapper._recursiveOriginal=scheduler;wrapper._recursiveWrapper=wrapper;this._recursiveWrapper=wrapper;}return this._recursiveWrapper;};CatchScheduler.prototype.schedulePeriodic=function(state,period,action){var self=this,failed=false,d=new SingleAssignmentDisposable();d.setDisposable(this._scheduler.schedulePeriodic(state,period,function(state1){if(failed){return null;}var res=tryCatch(action)(state1);if(res===errorObj){failed=true;if(!self._handler(res.e)){thrower(res.e);}d.dispose();return null;}return res;}));return d;};return CatchScheduler;}(Scheduler);/**
	   *  Represents a notification to an observer.
	   */var Notification=Rx.Notification=function(){function Notification(){}Notification.prototype._accept=function(onNext,onError,onCompleted){throw new NotImplementedError();};Notification.prototype._acceptObserver=function(onNext,onError,onCompleted){throw new NotImplementedError();};/**
	     * Invokes the delegate corresponding to the notification or the observer's method corresponding to the notification and returns the produced result.
	     * @param {Function | Observer} observerOrOnNext Function to invoke for an OnNext notification or Observer to invoke the notification on..
	     * @param {Function} onError Function to invoke for an OnError notification.
	     * @param {Function} onCompleted Function to invoke for an OnCompleted notification.
	     * @returns {Any} Result produced by the observation.
	     */Notification.prototype.accept=function(observerOrOnNext,onError,onCompleted){return observerOrOnNext&&(typeof observerOrOnNext==='undefined'?'undefined':_typeof(observerOrOnNext))==='object'?this._acceptObserver(observerOrOnNext):this._accept(observerOrOnNext,onError,onCompleted);};/**
	     * Returns an observable sequence with a single notification.
	     *
	     * @memberOf Notifications
	     * @param {Scheduler} [scheduler] Scheduler to send out the notification calls on.
	     * @returns {Observable} The observable sequence that surfaces the behavior of the notification upon subscription.
	     */Notification.prototype.toObservable=function(scheduler){var self=this;isScheduler(scheduler)||(scheduler=immediateScheduler);return new AnonymousObservable(function(o){return scheduler.schedule(self,function(_,notification){notification._acceptObserver(o);notification.kind==='N'&&o.onCompleted();});});};return Notification;}();var OnNextNotification=function(__super__){inherits(OnNextNotification,__super__);function OnNextNotification(value){this.value=value;this.kind='N';}OnNextNotification.prototype._accept=function(onNext){return onNext(this.value);};OnNextNotification.prototype._acceptObserver=function(o){return o.onNext(this.value);};OnNextNotification.prototype.toString=function(){return'OnNext('+this.value+')';};return OnNextNotification;}(Notification);var OnErrorNotification=function(__super__){inherits(OnErrorNotification,__super__);function OnErrorNotification(error){this.error=error;this.kind='E';}OnErrorNotification.prototype._accept=function(onNext,onError){return onError(this.error);};OnErrorNotification.prototype._acceptObserver=function(o){return o.onError(this.error);};OnErrorNotification.prototype.toString=function(){return'OnError('+this.error+')';};return OnErrorNotification;}(Notification);var OnCompletedNotification=function(__super__){inherits(OnCompletedNotification,__super__);function OnCompletedNotification(){this.kind='C';}OnCompletedNotification.prototype._accept=function(onNext,onError,onCompleted){return onCompleted();};OnCompletedNotification.prototype._acceptObserver=function(o){return o.onCompleted();};OnCompletedNotification.prototype.toString=function(){return'OnCompleted()';};return OnCompletedNotification;}(Notification);/**
	   * Creates an object that represents an OnNext notification to an observer.
	   * @param {Any} value The value contained in the notification.
	   * @returns {Notification} The OnNext notification containing the value.
	   */var notificationCreateOnNext=Notification.createOnNext=function(value){return new OnNextNotification(value);};/**
	   * Creates an object that represents an OnError notification to an observer.
	   * @param {Any} error The exception contained in the notification.
	   * @returns {Notification} The OnError notification containing the exception.
	   */var notificationCreateOnError=Notification.createOnError=function(error){return new OnErrorNotification(error);};/**
	   * Creates an object that represents an OnCompleted notification to an observer.
	   * @returns {Notification} The OnCompleted notification.
	   */var notificationCreateOnCompleted=Notification.createOnCompleted=function(){return new OnCompletedNotification();};/**
	   * Supports push-style iteration over an observable sequence.
	   */var Observer=Rx.Observer=function(){};/**
	   *  Creates a notification callback from an observer.
	   * @returns The action that forwards its input notification to the underlying observer.
	   */Observer.prototype.toNotifier=function(){var observer=this;return function(n){return n.accept(observer);};};/**
	   *  Hides the identity of an observer.
	   * @returns An observer that hides the identity of the specified observer.
	   */Observer.prototype.asObserver=function(){var self=this;return new AnonymousObserver(function(x){self.onNext(x);},function(err){self.onError(err);},function(){self.onCompleted();});};/**
	   *  Checks access to the observer for grammar violations. This includes checking for multiple OnError or OnCompleted calls, as well as reentrancy in any of the observer methods.
	   *  If a violation is detected, an Error is thrown from the offending observer method call.
	   * @returns An observer that checks callbacks invocations against the observer grammar and, if the checks pass, forwards those to the specified observer.
	   */Observer.prototype.checked=function(){return new CheckedObserver(this);};/**
	   *  Creates an observer from the specified OnNext, along with optional OnError, and OnCompleted actions.
	   * @param {Function} [onNext] Observer's OnNext action implementation.
	   * @param {Function} [onError] Observer's OnError action implementation.
	   * @param {Function} [onCompleted] Observer's OnCompleted action implementation.
	   * @returns {Observer} The observer object implemented using the given actions.
	   */var observerCreate=Observer.create=function(onNext,onError,onCompleted){onNext||(onNext=noop);onError||(onError=defaultError);onCompleted||(onCompleted=noop);return new AnonymousObserver(onNext,onError,onCompleted);};/**
	   *  Creates an observer from a notification callback.
	   * @param {Function} handler Action that handles a notification.
	   * @returns The observer object that invokes the specified handler using a notification corresponding to each message it receives.
	   */Observer.fromNotifier=function(handler,thisArg){var cb=bindCallback(handler,thisArg,1);return new AnonymousObserver(function(x){return cb(notificationCreateOnNext(x));},function(e){return cb(notificationCreateOnError(e));},function(){return cb(notificationCreateOnCompleted());});};/**
	   * Schedules the invocation of observer methods on the given scheduler.
	   * @param {Scheduler} scheduler Scheduler to schedule observer messages on.
	   * @returns {Observer} Observer whose messages are scheduled on the given scheduler.
	   */Observer.prototype.notifyOn=function(scheduler){return new ObserveOnObserver(scheduler,this);};Observer.prototype.makeSafe=function(disposable){return new AnonymousSafeObserver(this._onNext,this._onError,this._onCompleted,disposable);};/**
	   * Abstract base class for implementations of the Observer class.
	   * This base class enforces the grammar of observers where OnError and OnCompleted are terminal messages.
	   */var AbstractObserver=Rx.internals.AbstractObserver=function(__super__){inherits(AbstractObserver,__super__);/**
	     * Creates a new observer in a non-stopped state.
	     */function AbstractObserver(){this.isStopped=false;}// Must be implemented by other observers
	AbstractObserver.prototype.next=notImplemented;AbstractObserver.prototype.error=notImplemented;AbstractObserver.prototype.completed=notImplemented;/**
	     * Notifies the observer of a new element in the sequence.
	     * @param {Any} value Next element in the sequence.
	     */AbstractObserver.prototype.onNext=function(value){!this.isStopped&&this.next(value);};/**
	     * Notifies the observer that an exception has occurred.
	     * @param {Any} error The error that has occurred.
	     */AbstractObserver.prototype.onError=function(error){if(!this.isStopped){this.isStopped=true;this.error(error);}};/**
	     * Notifies the observer of the end of the sequence.
	     */AbstractObserver.prototype.onCompleted=function(){if(!this.isStopped){this.isStopped=true;this.completed();}};/**
	     * Disposes the observer, causing it to transition to the stopped state.
	     */AbstractObserver.prototype.dispose=function(){this.isStopped=true;};AbstractObserver.prototype.fail=function(e){if(!this.isStopped){this.isStopped=true;this.error(e);return true;}return false;};return AbstractObserver;}(Observer);/**
	   * Class to create an Observer instance from delegate-based implementations of the on* methods.
	   */var AnonymousObserver=Rx.AnonymousObserver=function(__super__){inherits(AnonymousObserver,__super__);/**
	     * Creates an observer from the specified OnNext, OnError, and OnCompleted actions.
	     * @param {Any} onNext Observer's OnNext action implementation.
	     * @param {Any} onError Observer's OnError action implementation.
	     * @param {Any} onCompleted Observer's OnCompleted action implementation.
	     */function AnonymousObserver(onNext,onError,onCompleted){__super__.call(this);this._onNext=onNext;this._onError=onError;this._onCompleted=onCompleted;}/**
	     * Calls the onNext action.
	     * @param {Any} value Next element in the sequence.
	     */AnonymousObserver.prototype.next=function(value){this._onNext(value);};/**
	     * Calls the onError action.
	     * @param {Any} error The error that has occurred.
	     */AnonymousObserver.prototype.error=function(error){this._onError(error);};/**
	     *  Calls the onCompleted action.
	     */AnonymousObserver.prototype.completed=function(){this._onCompleted();};return AnonymousObserver;}(AbstractObserver);var CheckedObserver=function(__super__){inherits(CheckedObserver,__super__);function CheckedObserver(observer){__super__.call(this);this._observer=observer;this._state=0;// 0 - idle, 1 - busy, 2 - done
	}var CheckedObserverPrototype=CheckedObserver.prototype;CheckedObserverPrototype.onNext=function(value){this.checkAccess();var res=tryCatch(this._observer.onNext).call(this._observer,value);this._state=0;res===errorObj&&thrower(res.e);};CheckedObserverPrototype.onError=function(err){this.checkAccess();var res=tryCatch(this._observer.onError).call(this._observer,err);this._state=2;res===errorObj&&thrower(res.e);};CheckedObserverPrototype.onCompleted=function(){this.checkAccess();var res=tryCatch(this._observer.onCompleted).call(this._observer);this._state=2;res===errorObj&&thrower(res.e);};CheckedObserverPrototype.checkAccess=function(){if(this._state===1){throw new Error('Re-entrancy detected');}if(this._state===2){throw new Error('Observer completed');}if(this._state===0){this._state=1;}};return CheckedObserver;}(Observer);var ScheduledObserver=Rx.internals.ScheduledObserver=function(__super__){inherits(ScheduledObserver,__super__);function ScheduledObserver(scheduler,observer){__super__.call(this);this.scheduler=scheduler;this.observer=observer;this.isAcquired=false;this.hasFaulted=false;this.queue=[];this.disposable=new SerialDisposable();}function enqueueNext(observer,x){return function(){observer.onNext(x);};}function enqueueError(observer,e){return function(){observer.onError(e);};}function enqueueCompleted(observer){return function(){observer.onCompleted();};}ScheduledObserver.prototype.next=function(x){this.queue.push(enqueueNext(this.observer,x));};ScheduledObserver.prototype.error=function(e){this.queue.push(enqueueError(this.observer,e));};ScheduledObserver.prototype.completed=function(){this.queue.push(enqueueCompleted(this.observer));};function scheduleMethod(state,recurse){var work;if(state.queue.length>0){work=state.queue.shift();}else{state.isAcquired=false;return;}var res=tryCatch(work)();if(res===errorObj){state.queue=[];state.hasFaulted=true;return thrower(res.e);}recurse(state);}ScheduledObserver.prototype.ensureActive=function(){var isOwner=false;if(!this.hasFaulted&&this.queue.length>0){isOwner=!this.isAcquired;this.isAcquired=true;}isOwner&&this.disposable.setDisposable(this.scheduler.scheduleRecursive(this,scheduleMethod));};ScheduledObserver.prototype.dispose=function(){__super__.prototype.dispose.call(this);this.disposable.dispose();};return ScheduledObserver;}(AbstractObserver);var ObserveOnObserver=function(__super__){inherits(ObserveOnObserver,__super__);function ObserveOnObserver(scheduler,observer,cancel){__super__.call(this,scheduler,observer);this._cancel=cancel;}ObserveOnObserver.prototype.next=function(value){__super__.prototype.next.call(this,value);this.ensureActive();};ObserveOnObserver.prototype.error=function(e){__super__.prototype.error.call(this,e);this.ensureActive();};ObserveOnObserver.prototype.completed=function(){__super__.prototype.completed.call(this);this.ensureActive();};ObserveOnObserver.prototype.dispose=function(){__super__.prototype.dispose.call(this);this._cancel&&this._cancel.dispose();this._cancel=null;};return ObserveOnObserver;}(ScheduledObserver);var observableProto;/**
	   * Represents a push-style collection.
	   */var Observable=Rx.Observable=function(){function makeSubscribe(self,subscribe){return function(o){var oldOnError=o.onError;o.onError=function(e){makeStackTraceLong(e,self);oldOnError.call(o,e);};return subscribe.call(self,o);};}function Observable(){if(Rx.config.longStackSupport&&hasStacks){var oldSubscribe=this._subscribe;var e=tryCatch(thrower)(new Error()).e;this.stack=e.stack.substring(e.stack.indexOf('\n')+1);this._subscribe=makeSubscribe(this,oldSubscribe);}}observableProto=Observable.prototype;/**
	    * Determines whether the given object is an Observable
	    * @param {Any} An object to determine whether it is an Observable
	    * @returns {Boolean} true if an Observable, else false.
	    */Observable.isObservable=function(o){return o&&isFunction(o.subscribe);};/**
	     *  Subscribes an o to the observable sequence.
	     *  @param {Mixed} [oOrOnNext] The object that is to receive notifications or an action to invoke for each element in the observable sequence.
	     *  @param {Function} [onError] Action to invoke upon exceptional termination of the observable sequence.
	     *  @param {Function} [onCompleted] Action to invoke upon graceful termination of the observable sequence.
	     *  @returns {Diposable} A disposable handling the subscriptions and unsubscriptions.
	     */observableProto.subscribe=observableProto.forEach=function(oOrOnNext,onError,onCompleted){return this._subscribe((typeof oOrOnNext==='undefined'?'undefined':_typeof(oOrOnNext))==='object'?oOrOnNext:observerCreate(oOrOnNext,onError,onCompleted));};/**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onNext The function to invoke on each element in the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */observableProto.subscribeOnNext=function(onNext,thisArg){return this._subscribe(observerCreate(typeof thisArg!=='undefined'?function(x){onNext.call(thisArg,x);}:onNext));};/**
	     * Subscribes to an exceptional condition in the sequence with an optional "this" argument.
	     * @param {Function} onError The function to invoke upon exceptional termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */observableProto.subscribeOnError=function(onError,thisArg){return this._subscribe(observerCreate(null,typeof thisArg!=='undefined'?function(e){onError.call(thisArg,e);}:onError));};/**
	     * Subscribes to the next value in the sequence with an optional "this" argument.
	     * @param {Function} onCompleted The function to invoke upon graceful termination of the observable sequence.
	     * @param {Any} [thisArg] Object to use as this when executing callback.
	     * @returns {Disposable} A disposable handling the subscriptions and unsubscriptions.
	     */observableProto.subscribeOnCompleted=function(onCompleted,thisArg){return this._subscribe(observerCreate(null,null,typeof thisArg!=='undefined'?function(){onCompleted.call(thisArg);}:onCompleted));};return Observable;}();var ObservableBase=Rx.ObservableBase=function(__super__){inherits(ObservableBase,__super__);function fixSubscriber(subscriber){return subscriber&&isFunction(subscriber.dispose)?subscriber:isFunction(subscriber)?disposableCreate(subscriber):disposableEmpty;}function setDisposable(s,state){var ado=state[0],self=state[1];var sub=tryCatch(self.subscribeCore).call(self,ado);if(sub===errorObj&&!ado.fail(errorObj.e)){thrower(errorObj.e);}ado.setDisposable(fixSubscriber(sub));}function ObservableBase(){__super__.call(this);}ObservableBase.prototype._subscribe=function(o){var ado=new AutoDetachObserver(o),state=[ado,this];if(currentThreadScheduler.scheduleRequired()){currentThreadScheduler.schedule(state,setDisposable);}else{setDisposable(null,state);}return ado;};ObservableBase.prototype.subscribeCore=notImplemented;return ObservableBase;}(Observable);var FlatMapObservable=Rx.FlatMapObservable=function(__super__){inherits(FlatMapObservable,__super__);function FlatMapObservable(source,selector,resultSelector,thisArg){this.resultSelector=isFunction(resultSelector)?resultSelector:null;this.selector=bindCallback(isFunction(selector)?selector:function(){return selector;},thisArg,3);this.source=source;__super__.call(this);}FlatMapObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o,this.selector,this.resultSelector,this));};inherits(InnerObserver,AbstractObserver);function InnerObserver(observer,selector,resultSelector,source){this.i=0;this.selector=selector;this.resultSelector=resultSelector;this.source=source;this.o=observer;AbstractObserver.call(this);}InnerObserver.prototype._wrapResult=function(result,x,i){return this.resultSelector?result.map(function(y,i2){return this.resultSelector(x,y,i,i2);},this):result;};InnerObserver.prototype.next=function(x){var i=this.i++;var result=tryCatch(this.selector)(x,i,this.source);if(result===errorObj){return this.o.onError(result.e);}isPromise(result)&&(result=observableFromPromise(result));(isArrayLike(result)||isIterable(result))&&(result=Observable.from(result));this.o.onNext(this._wrapResult(result,x,i));};InnerObserver.prototype.error=function(e){this.o.onError(e);};InnerObserver.prototype.completed=function(){this.o.onCompleted();};return FlatMapObservable;}(ObservableBase);var Enumerable=Rx.internals.Enumerable=function(){};function IsDisposedDisposable(state){this._s=state;this.isDisposed=false;}IsDisposedDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;this._s.isDisposed=true;}};var ConcatEnumerableObservable=function(__super__){inherits(ConcatEnumerableObservable,__super__);function ConcatEnumerableObservable(sources){this.sources=sources;__super__.call(this);}function scheduleMethod(state,recurse){if(state.isDisposed){return;}var currentItem=tryCatch(state.e.next).call(state.e);if(currentItem===errorObj){return state.o.onError(currentItem.e);}if(currentItem.done){return state.o.onCompleted();}// Check if promise
	var currentValue=currentItem.value;isPromise(currentValue)&&(currentValue=observableFromPromise(currentValue));var d=new SingleAssignmentDisposable();state.subscription.setDisposable(d);d.setDisposable(currentValue.subscribe(new InnerObserver(state,recurse)));}ConcatEnumerableObservable.prototype.subscribeCore=function(o){var subscription=new SerialDisposable();var state={isDisposed:false,o:o,subscription:subscription,e:this.sources[$iterator$]()};var cancelable=currentThreadScheduler.scheduleRecursive(state,scheduleMethod);return new NAryDisposable([subscription,cancelable,new IsDisposedDisposable(state)]);};function InnerObserver(state,recurse){this._state=state;this._recurse=recurse;AbstractObserver.call(this);}inherits(InnerObserver,AbstractObserver);InnerObserver.prototype.next=function(x){this._state.o.onNext(x);};InnerObserver.prototype.error=function(e){this._state.o.onError(e);};InnerObserver.prototype.completed=function(){this._recurse(this._state);};return ConcatEnumerableObservable;}(ObservableBase);Enumerable.prototype.concat=function(){return new ConcatEnumerableObservable(this);};var CatchErrorObservable=function(__super__){function CatchErrorObservable(sources){this.sources=sources;__super__.call(this);}inherits(CatchErrorObservable,__super__);function scheduleMethod(state,recurse){if(state.isDisposed){return;}var currentItem=tryCatch(state.e.next).call(state.e);if(currentItem===errorObj){return state.o.onError(currentItem.e);}if(currentItem.done){return state.lastError!==null?state.o.onError(state.lastError):state.o.onCompleted();}var currentValue=currentItem.value;isPromise(currentValue)&&(currentValue=observableFromPromise(currentValue));var d=new SingleAssignmentDisposable();state.subscription.setDisposable(d);d.setDisposable(currentValue.subscribe(new InnerObserver(state,recurse)));}CatchErrorObservable.prototype.subscribeCore=function(o){var subscription=new SerialDisposable();var state={isDisposed:false,e:this.sources[$iterator$](),subscription:subscription,lastError:null,o:o};var cancelable=currentThreadScheduler.scheduleRecursive(state,scheduleMethod);return new NAryDisposable([subscription,cancelable,new IsDisposedDisposable(state)]);};function InnerObserver(state,recurse){this._state=state;this._recurse=recurse;AbstractObserver.call(this);}inherits(InnerObserver,AbstractObserver);InnerObserver.prototype.next=function(x){this._state.o.onNext(x);};InnerObserver.prototype.error=function(e){this._state.lastError=e;this._recurse(this._state);};InnerObserver.prototype.completed=function(){this._state.o.onCompleted();};return CatchErrorObservable;}(ObservableBase);Enumerable.prototype.catchError=function(){return new CatchErrorObservable(this);};var RepeatEnumerable=function(__super__){inherits(RepeatEnumerable,__super__);function RepeatEnumerable(v,c){this.v=v;this.c=c==null?-1:c;}RepeatEnumerable.prototype[$iterator$]=function(){return new RepeatEnumerator(this);};function RepeatEnumerator(p){this.v=p.v;this.l=p.c;}RepeatEnumerator.prototype.next=function(){if(this.l===0){return doneEnumerator;}if(this.l>0){this.l--;}return{done:false,value:this.v};};return RepeatEnumerable;}(Enumerable);var enumerableRepeat=Enumerable.repeat=function(value,repeatCount){return new RepeatEnumerable(value,repeatCount);};var OfEnumerable=function(__super__){inherits(OfEnumerable,__super__);function OfEnumerable(s,fn,thisArg){this.s=s;this.fn=fn?bindCallback(fn,thisArg,3):null;}OfEnumerable.prototype[$iterator$]=function(){return new OfEnumerator(this);};function OfEnumerator(p){this.i=-1;this.s=p.s;this.l=this.s.length;this.fn=p.fn;}OfEnumerator.prototype.next=function(){return++this.i<this.l?{done:false,value:!this.fn?this.s[this.i]:this.fn(this.s[this.i],this.i,this.s)}:doneEnumerator;};return OfEnumerable;}(Enumerable);var enumerableOf=Enumerable.of=function(source,selector,thisArg){return new OfEnumerable(source,selector,thisArg);};var ObserveOnObservable=function(__super__){inherits(ObserveOnObservable,__super__);function ObserveOnObservable(source,s){this.source=source;this._s=s;__super__.call(this);}ObserveOnObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ObserveOnObserver(this._s,o));};return ObserveOnObservable;}(ObservableBase);/**
	   *  Wraps the source sequence in order to run its observer callbacks on the specified scheduler.
	   *
	   *  This only invokes observer callbacks on a scheduler. In case the subscription and/or unsubscription actions have side-effects
	   *  that require to be run on a scheduler, use subscribeOn.
	   *
	   *  @param {Scheduler} scheduler Scheduler to notify observers on.
	   *  @returns {Observable} The source sequence whose observations happen on the specified scheduler.
	   */observableProto.observeOn=function(scheduler){return new ObserveOnObservable(this,scheduler);};var SubscribeOnObservable=function(__super__){inherits(SubscribeOnObservable,__super__);function SubscribeOnObservable(source,s){this.source=source;this._s=s;__super__.call(this);}function scheduleMethod(scheduler,state){var source=state[0],d=state[1],o=state[2];d.setDisposable(new ScheduledDisposable(scheduler,source.subscribe(o)));}SubscribeOnObservable.prototype.subscribeCore=function(o){var m=new SingleAssignmentDisposable(),d=new SerialDisposable();d.setDisposable(m);m.setDisposable(this._s.schedule([this.source,d,o],scheduleMethod));return d;};return SubscribeOnObservable;}(ObservableBase);/**
	   *  Wraps the source sequence in order to run its subscription and unsubscription logic on the specified scheduler. This operation is not commonly used;
	   *  see the remarks section for more information on the distinction between subscribeOn and observeOn.

	   *  This only performs the side-effects of subscription and unsubscription on the specified scheduler. In order to invoke observer
	   *  callbacks on a scheduler, use observeOn.

	   *  @param {Scheduler} scheduler Scheduler to perform subscription and unsubscription actions on.
	   *  @returns {Observable} The source sequence whose subscriptions and unsubscriptions happen on the specified scheduler.
	   */observableProto.subscribeOn=function(scheduler){return new SubscribeOnObservable(this,scheduler);};var FromPromiseObservable=function(__super__){inherits(FromPromiseObservable,__super__);function FromPromiseObservable(p,s){this._p=p;this._s=s;__super__.call(this);}function scheduleNext(s,state){var o=state[0],data=state[1];o.onNext(data);o.onCompleted();}function scheduleError(s,state){var o=state[0],err=state[1];o.onError(err);}FromPromiseObservable.prototype.subscribeCore=function(o){var sad=new SingleAssignmentDisposable(),self=this,p=this._p;if(isFunction(p)){p=tryCatch(p)();if(p===errorObj){o.onError(p.e);return sad;}}p.then(function(data){sad.setDisposable(self._s.schedule([o,data],scheduleNext));},function(err){sad.setDisposable(self._s.schedule([o,err],scheduleError));});return sad;};return FromPromiseObservable;}(ObservableBase);/**
	  * Converts a Promise to an Observable sequence
	  * @param {Promise} An ES6 Compliant promise.
	  * @returns {Observable} An Observable sequence which wraps the existing promise success and failure.
	  */var observableFromPromise=Observable.fromPromise=function(promise,scheduler){scheduler||(scheduler=defaultScheduler);return new FromPromiseObservable(promise,scheduler);};/*
	   * Converts an existing observable sequence to an ES6 Compatible Promise
	   * @example
	   * var promise = Rx.Observable.return(42).toPromise(RSVP.Promise);
	   *
	   * // With config
	   * Rx.config.Promise = RSVP.Promise;
	   * var promise = Rx.Observable.return(42).toPromise();
	   * @param {Function} [promiseCtor] The constructor of the promise. If not provided, it looks for it in Rx.config.Promise.
	   * @returns {Promise} An ES6 compatible promise with the last value from the observable sequence.
	   */observableProto.toPromise=function(promiseCtor){promiseCtor||(promiseCtor=Rx.config.Promise);if(!promiseCtor){throw new NotSupportedError('Promise type not provided nor in Rx.config.Promise');}var source=this;return new promiseCtor(function(resolve,reject){// No cancellation can be done
	var value;source.subscribe(function(v){value=v;},reject,function(){resolve(value);});});};var ToArrayObservable=function(__super__){inherits(ToArrayObservable,__super__);function ToArrayObservable(source){this.source=source;__super__.call(this);}ToArrayObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o));};inherits(InnerObserver,AbstractObserver);function InnerObserver(o){this.o=o;this.a=[];AbstractObserver.call(this);}InnerObserver.prototype.next=function(x){this.a.push(x);};InnerObserver.prototype.error=function(e){this.o.onError(e);};InnerObserver.prototype.completed=function(){this.o.onNext(this.a);this.o.onCompleted();};return ToArrayObservable;}(ObservableBase);/**
	  * Creates an array from an observable sequence.
	  * @returns {Observable} An observable sequence containing a single element with a list containing all the elements of the source sequence.
	  */observableProto.toArray=function(){return new ToArrayObservable(this);};/**
	   *  Creates an observable sequence from a specified subscribe method implementation.
	   * @example
	   *  var res = Rx.Observable.create(function (observer) { return function () { } );
	   *  var res = Rx.Observable.create(function (observer) { return Rx.Disposable.empty; } );
	   *  var res = Rx.Observable.create(function (observer) { } );
	   * @param {Function} subscribe Implementation of the resulting observable sequence's subscribe method, returning a function that will be wrapped in a Disposable.
	   * @returns {Observable} The observable sequence with the specified implementation for the Subscribe method.
	   */Observable.create=function(subscribe,parent){return new AnonymousObservable(subscribe,parent);};var Defer=function(__super__){inherits(Defer,__super__);function Defer(factory){this._f=factory;__super__.call(this);}Defer.prototype.subscribeCore=function(o){var result=tryCatch(this._f)();if(result===errorObj){return observableThrow(result.e).subscribe(o);}isPromise(result)&&(result=observableFromPromise(result));return result.subscribe(o);};return Defer;}(ObservableBase);/**
	   *  Returns an observable sequence that invokes the specified factory function whenever a new observer subscribes.
	   *
	   * @example
	   *  var res = Rx.Observable.defer(function () { return Rx.Observable.fromArray([1,2,3]); });
	   * @param {Function} observableFactory Observable factory function to invoke for each observer that subscribes to the resulting sequence or Promise.
	   * @returns {Observable} An observable sequence whose observers trigger an invocation of the given observable factory function.
	   */var observableDefer=Observable.defer=function(observableFactory){return new Defer(observableFactory);};var EmptyObservable=function(__super__){inherits(EmptyObservable,__super__);function EmptyObservable(scheduler){this.scheduler=scheduler;__super__.call(this);}EmptyObservable.prototype.subscribeCore=function(observer){var sink=new EmptySink(observer,this.scheduler);return sink.run();};function EmptySink(observer,scheduler){this.observer=observer;this.scheduler=scheduler;}function scheduleItem(s,state){state.onCompleted();return disposableEmpty;}EmptySink.prototype.run=function(){var state=this.observer;return this.scheduler===immediateScheduler?scheduleItem(null,state):this.scheduler.schedule(state,scheduleItem);};return EmptyObservable;}(ObservableBase);var EMPTY_OBSERVABLE=new EmptyObservable(immediateScheduler);/**
	   *  Returns an empty observable sequence, using the specified scheduler to send out the single OnCompleted message.
	   *
	   * @example
	   *  var res = Rx.Observable.empty();
	   *  var res = Rx.Observable.empty(Rx.Scheduler.timeout);
	   * @param {Scheduler} [scheduler] Scheduler to send the termination call on.
	   * @returns {Observable} An observable sequence with no elements.
	   */var observableEmpty=Observable.empty=function(scheduler){isScheduler(scheduler)||(scheduler=immediateScheduler);return scheduler===immediateScheduler?EMPTY_OBSERVABLE:new EmptyObservable(scheduler);};var FromObservable=function(__super__){inherits(FromObservable,__super__);function FromObservable(iterable,fn,scheduler){this._iterable=iterable;this._fn=fn;this._scheduler=scheduler;__super__.call(this);}function createScheduleMethod(o,it,fn){return function loopRecursive(i,recurse){var next=tryCatch(it.next).call(it);if(next===errorObj){return o.onError(next.e);}if(next.done){return o.onCompleted();}var result=next.value;if(isFunction(fn)){result=tryCatch(fn)(result,i);if(result===errorObj){return o.onError(result.e);}}o.onNext(result);recurse(i+1);};}FromObservable.prototype.subscribeCore=function(o){var list=Object(this._iterable),it=getIterable(list);return this._scheduler.scheduleRecursive(0,createScheduleMethod(o,it,this._fn));};return FromObservable;}(ObservableBase);var maxSafeInteger=Math.pow(2,53)-1;function StringIterable(s){this._s=s;}StringIterable.prototype[$iterator$]=function(){return new StringIterator(this._s);};function StringIterator(s){this._s=s;this._l=s.length;this._i=0;}StringIterator.prototype[$iterator$]=function(){return this;};StringIterator.prototype.next=function(){return this._i<this._l?{done:false,value:this._s.charAt(this._i++)}:doneEnumerator;};function ArrayIterable(a){this._a=a;}ArrayIterable.prototype[$iterator$]=function(){return new ArrayIterator(this._a);};function ArrayIterator(a){this._a=a;this._l=toLength(a);this._i=0;}ArrayIterator.prototype[$iterator$]=function(){return this;};ArrayIterator.prototype.next=function(){return this._i<this._l?{done:false,value:this._a[this._i++]}:doneEnumerator;};function numberIsFinite(value){return typeof value==='number'&&root.isFinite(value);}function isNan(n){return n!==n;}function getIterable(o){var i=o[$iterator$],it;if(!i&&typeof o==='string'){it=new StringIterable(o);return it[$iterator$]();}if(!i&&o.length!==undefined){it=new ArrayIterable(o);return it[$iterator$]();}if(!i){throw new TypeError('Object is not iterable');}return o[$iterator$]();}function sign(value){var number=+value;if(number===0){return number;}if(isNaN(number)){return number;}return number<0?-1:1;}function toLength(o){var len=+o.length;if(isNaN(len)){return 0;}if(len===0||!numberIsFinite(len)){return len;}len=sign(len)*Math.floor(Math.abs(len));if(len<=0){return 0;}if(len>maxSafeInteger){return maxSafeInteger;}return len;}/**
	  * This method creates a new Observable sequence from an array-like or iterable object.
	  * @param {Any} arrayLike An array-like or iterable object to convert to an Observable sequence.
	  * @param {Function} [mapFn] Map function to call on every element of the array.
	  * @param {Any} [thisArg] The context to use calling the mapFn if provided.
	  * @param {Scheduler} [scheduler] Optional scheduler to use for scheduling.  If not provided, defaults to Scheduler.currentThread.
	  */var observableFrom=Observable.from=function(iterable,mapFn,thisArg,scheduler){if(iterable==null){throw new Error('iterable cannot be null.');}if(mapFn&&!isFunction(mapFn)){throw new Error('mapFn when provided must be a function');}if(mapFn){var mapper=bindCallback(mapFn,thisArg,2);}isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new FromObservable(iterable,mapper,scheduler);};var FromArrayObservable=function(__super__){inherits(FromArrayObservable,__super__);function FromArrayObservable(args,scheduler){this._args=args;this._scheduler=scheduler;__super__.call(this);}function scheduleMethod(o,args){var len=args.length;return function loopRecursive(i,recurse){if(i<len){o.onNext(args[i]);recurse(i+1);}else{o.onCompleted();}};}FromArrayObservable.prototype.subscribeCore=function(o){return this._scheduler.scheduleRecursive(0,scheduleMethod(o,this._args));};return FromArrayObservable;}(ObservableBase);/**
	  *  Converts an array to an observable sequence, using an optional scheduler to enumerate the array.
	  * @deprecated use Observable.from or Observable.of
	  * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given enumerable sequence.
	  */var observableFromArray=Observable.fromArray=function(array,scheduler){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new FromArrayObservable(array,scheduler);};var GenerateObservable=function(__super__){inherits(GenerateObservable,__super__);function GenerateObservable(state,cndFn,itrFn,resFn,s){this._initialState=state;this._cndFn=cndFn;this._itrFn=itrFn;this._resFn=resFn;this._s=s;__super__.call(this);}function scheduleRecursive(state,recurse){if(state.first){state.first=false;}else{state.newState=tryCatch(state.self._itrFn)(state.newState);if(state.newState===errorObj){return state.o.onError(state.newState.e);}}var hasResult=tryCatch(state.self._cndFn)(state.newState);if(hasResult===errorObj){return state.o.onError(hasResult.e);}if(hasResult){var result=tryCatch(state.self._resFn)(state.newState);if(result===errorObj){return state.o.onError(result.e);}state.o.onNext(result);recurse(state);}else{state.o.onCompleted();}}GenerateObservable.prototype.subscribeCore=function(o){var state={o:o,self:this,first:true,newState:this._initialState};return this._s.scheduleRecursive(state,scheduleRecursive);};return GenerateObservable;}(ObservableBase);/**
	   *  Generates an observable sequence by running a state-driven loop producing the sequence's elements, using the specified scheduler to send out observer messages.
	   *
	   * @example
	   *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; });
	   *  var res = Rx.Observable.generate(0, function (x) { return x < 10; }, function (x) { return x + 1; }, function (x) { return x; }, Rx.Scheduler.timeout);
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Scheduler} [scheduler] Scheduler on which to run the generator loop. If not provided, defaults to Scheduler.currentThread.
	   * @returns {Observable} The generated sequence.
	   */Observable.generate=function(initialState,condition,iterate,resultSelector,scheduler){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new GenerateObservable(initialState,condition,iterate,resultSelector,scheduler);};function observableOf(scheduler,array){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new FromArrayObservable(array,scheduler);}/**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */Observable.of=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return new FromArrayObservable(args,currentThreadScheduler);};/**
	  *  This method creates a new Observable instance with a variable number of arguments, regardless of number or type of the arguments.
	  * @param {Scheduler} scheduler A scheduler to use for scheduling the arguments.
	  * @returns {Observable} The observable sequence whose elements are pulled from the given arguments.
	  */Observable.ofWithScheduler=function(scheduler){var len=arguments.length,args=new Array(len-1);for(var i=1;i<len;i++){args[i-1]=arguments[i];}return new FromArrayObservable(args,scheduler);};/**
	   * Creates an Observable sequence from changes to an array using Array.observe.
	   * @param {Array} array An array to observe changes.
	   * @returns {Observable} An observable sequence containing changes to an array from Array.observe.
	   */Observable.ofArrayChanges=function(array){if(!Array.isArray(array)){throw new TypeError('Array.observe only accepts arrays.');}if(typeof Array.observe!=='function'&&typeof Array.unobserve!=='function'){throw new TypeError('Array.observe is not supported on your platform');}return new AnonymousObservable(function(observer){function observerFn(changes){for(var i=0,len=changes.length;i<len;i++){observer.onNext(changes[i]);}}Array.observe(array,observerFn);return function(){Array.unobserve(array,observerFn);};});};/**
	   * Creates an Observable sequence from changes to an object using Object.observe.
	   * @param {Object} obj An object to observe changes.
	   * @returns {Observable} An observable sequence containing changes to an object from Object.observe.
	   */Observable.ofObjectChanges=function(obj){if(obj==null){throw new TypeError('object must not be null or undefined.');}if(typeof Object.observe!=='function'&&typeof Object.unobserve!=='function'){throw new TypeError('Object.observe is not supported on your platform');}return new AnonymousObservable(function(observer){function observerFn(changes){for(var i=0,len=changes.length;i<len;i++){observer.onNext(changes[i]);}}Object.observe(obj,observerFn);return function(){Object.unobserve(obj,observerFn);};});};var NeverObservable=function(__super__){inherits(NeverObservable,__super__);function NeverObservable(){__super__.call(this);}NeverObservable.prototype.subscribeCore=function(observer){return disposableEmpty;};return NeverObservable;}(ObservableBase);var NEVER_OBSERVABLE=new NeverObservable();/**
	   * Returns a non-terminating observable sequence, which can be used to denote an infinite duration (e.g. when using reactive joins).
	   * @returns {Observable} An observable sequence whose observers will never get called.
	   */var observableNever=Observable.never=function(){return NEVER_OBSERVABLE;};var PairsObservable=function(__super__){inherits(PairsObservable,__super__);function PairsObservable(o,scheduler){this._o=o;this._keys=Object.keys(o);this._scheduler=scheduler;__super__.call(this);}function scheduleMethod(o,obj,keys){return function loopRecursive(i,recurse){if(i<keys.length){var key=keys[i];o.onNext([key,obj[key]]);recurse(i+1);}else{o.onCompleted();}};}PairsObservable.prototype.subscribeCore=function(o){return this._scheduler.scheduleRecursive(0,scheduleMethod(o,this._o,this._keys));};return PairsObservable;}(ObservableBase);/**
	   * Convert an object into an observable sequence of [key, value] pairs.
	   * @param {Object} obj The object to inspect.
	   * @param {Scheduler} [scheduler] Scheduler to run the enumeration of the input sequence on.
	   * @returns {Observable} An observable sequence of [key, value] pairs from the object.
	   */Observable.pairs=function(obj,scheduler){scheduler||(scheduler=currentThreadScheduler);return new PairsObservable(obj,scheduler);};var RangeObservable=function(__super__){inherits(RangeObservable,__super__);function RangeObservable(start,count,scheduler){this.start=start;this.rangeCount=count;this.scheduler=scheduler;__super__.call(this);}function loopRecursive(start,count,o){return function loop(i,recurse){if(i<count){o.onNext(start+i);recurse(i+1);}else{o.onCompleted();}};}RangeObservable.prototype.subscribeCore=function(o){return this.scheduler.scheduleRecursive(0,loopRecursive(this.start,this.rangeCount,o));};return RangeObservable;}(ObservableBase);/**
	  *  Generates an observable sequence of integral numbers within a specified range, using the specified scheduler to send out observer messages.
	  * @param {Number} start The value of the first integer in the sequence.
	  * @param {Number} count The number of sequential integers to generate.
	  * @param {Scheduler} [scheduler] Scheduler to run the generator loop on. If not specified, defaults to Scheduler.currentThread.
	  * @returns {Observable} An observable sequence that contains a range of sequential integral numbers.
	  */Observable.range=function(start,count,scheduler){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new RangeObservable(start,count,scheduler);};var RepeatObservable=function(__super__){inherits(RepeatObservable,__super__);function RepeatObservable(value,repeatCount,scheduler){this.value=value;this.repeatCount=repeatCount==null?-1:repeatCount;this.scheduler=scheduler;__super__.call(this);}RepeatObservable.prototype.subscribeCore=function(observer){var sink=new RepeatSink(observer,this);return sink.run();};return RepeatObservable;}(ObservableBase);function RepeatSink(observer,parent){this.observer=observer;this.parent=parent;}RepeatSink.prototype.run=function(){var observer=this.observer,value=this.parent.value;function loopRecursive(i,recurse){if(i===-1||i>0){observer.onNext(value);i>0&&i--;}if(i===0){return observer.onCompleted();}recurse(i);}return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount,loopRecursive);};/**
	   *  Generates an observable sequence that repeats the given element the specified number of times, using the specified scheduler to send out observer messages.
	   * @param {Mixed} value Element to repeat.
	   * @param {Number} repeatCount [Optiona] Number of times to repeat the element. If not specified, repeats indefinitely.
	   * @param {Scheduler} scheduler Scheduler to run the producer loop on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence that repeats the given element the specified number of times.
	   */Observable.repeat=function(value,repeatCount,scheduler){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new RepeatObservable(value,repeatCount,scheduler);};var JustObservable=function(__super__){inherits(JustObservable,__super__);function JustObservable(value,scheduler){this._value=value;this._scheduler=scheduler;__super__.call(this);}JustObservable.prototype.subscribeCore=function(o){var state=[this._value,o];return this._scheduler===immediateScheduler?scheduleItem(null,state):this._scheduler.schedule(state,scheduleItem);};function scheduleItem(s,state){var value=state[0],observer=state[1];observer.onNext(value);observer.onCompleted();return disposableEmpty;}return JustObservable;}(ObservableBase);/**
	   *  Returns an observable sequence that contains a single element, using the specified scheduler to send out observer messages.
	   *  There is an alias called 'just' or browsers <IE9.
	   * @param {Mixed} value Single element in the resulting observable sequence.
	   * @param {Scheduler} scheduler Scheduler to send the single element on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} An observable sequence containing the single specified element.
	   */var observableReturn=Observable['return']=Observable.just=function(value,scheduler){isScheduler(scheduler)||(scheduler=immediateScheduler);return new JustObservable(value,scheduler);};var ThrowObservable=function(__super__){inherits(ThrowObservable,__super__);function ThrowObservable(error,scheduler){this._error=error;this._scheduler=scheduler;__super__.call(this);}ThrowObservable.prototype.subscribeCore=function(o){var state=[this._error,o];return this._scheduler===immediateScheduler?scheduleItem(null,state):this._scheduler.schedule(state,scheduleItem);};function scheduleItem(s,state){var e=state[0],o=state[1];o.onError(e);return disposableEmpty;}return ThrowObservable;}(ObservableBase);/**
	   *  Returns an observable sequence that terminates with an exception, using the specified scheduler to send out the single onError message.
	   *  There is an alias to this method called 'throwError' for browsers <IE9.
	   * @param {Mixed} error An object used for the sequence's termination.
	   * @param {Scheduler} scheduler Scheduler to send the exceptional termination call on. If not specified, defaults to Scheduler.immediate.
	   * @returns {Observable} The observable sequence that terminates exceptionally with the specified exception object.
	   */var observableThrow=Observable['throw']=function(error,scheduler){isScheduler(scheduler)||(scheduler=immediateScheduler);return new ThrowObservable(error,scheduler);};var UsingObservable=function(__super__){inherits(UsingObservable,__super__);function UsingObservable(resFn,obsFn){this._resFn=resFn;this._obsFn=obsFn;__super__.call(this);}UsingObservable.prototype.subscribeCore=function(o){var disposable=disposableEmpty;var resource=tryCatch(this._resFn)();if(resource===errorObj){return new BinaryDisposable(observableThrow(resource.e).subscribe(o),disposable);}resource&&(disposable=resource);var source=tryCatch(this._obsFn)(resource);if(source===errorObj){return new BinaryDisposable(observableThrow(source.e).subscribe(o),disposable);}return new BinaryDisposable(source.subscribe(o),disposable);};return UsingObservable;}(ObservableBase);/**
	   * Constructs an observable sequence that depends on a resource object, whose lifetime is tied to the resulting observable sequence's lifetime.
	   * @param {Function} resourceFactory Factory function to obtain a resource object.
	   * @param {Function} observableFactory Factory function to obtain an observable sequence that depends on the obtained resource.
	   * @returns {Observable} An observable sequence whose lifetime controls the lifetime of the dependent resource object.
	   */Observable.using=function(resourceFactory,observableFactory){return new UsingObservable(resourceFactory,observableFactory);};/**
	   * Propagates the observable sequence or Promise that reacts first.
	   * @param {Observable} rightSource Second observable sequence or Promise.
	   * @returns {Observable} {Observable} An observable sequence that surfaces either of the given sequences, whichever reacted first.
	   */observableProto.amb=function(rightSource){var leftSource=this;return new AnonymousObservable(function(observer){var choice,leftChoice='L',rightChoice='R',leftSubscription=new SingleAssignmentDisposable(),rightSubscription=new SingleAssignmentDisposable();isPromise(rightSource)&&(rightSource=observableFromPromise(rightSource));function choiceL(){if(!choice){choice=leftChoice;rightSubscription.dispose();}}function choiceR(){if(!choice){choice=rightChoice;leftSubscription.dispose();}}var leftSubscribe=observerCreate(function(left){choiceL();choice===leftChoice&&observer.onNext(left);},function(e){choiceL();choice===leftChoice&&observer.onError(e);},function(){choiceL();choice===leftChoice&&observer.onCompleted();});var rightSubscribe=observerCreate(function(right){choiceR();choice===rightChoice&&observer.onNext(right);},function(e){choiceR();choice===rightChoice&&observer.onError(e);},function(){choiceR();choice===rightChoice&&observer.onCompleted();});leftSubscription.setDisposable(leftSource.subscribe(leftSubscribe));rightSubscription.setDisposable(rightSource.subscribe(rightSubscribe));return new BinaryDisposable(leftSubscription,rightSubscription);});};function amb(p,c){return p.amb(c);}/**
	   * Propagates the observable sequence or Promise that reacts first.
	   * @returns {Observable} An observable sequence that surfaces any of the given sequences, whichever reacted first.
	   */Observable.amb=function(){var acc=observableNever(),items;if(Array.isArray(arguments[0])){items=arguments[0];}else{var len=arguments.length;items=new Array(items);for(var i=0;i<len;i++){items[i]=arguments[i];}}for(var i=0,len=items.length;i<len;i++){acc=amb(acc,items[i]);}return acc;};var CatchObservable=function(__super__){inherits(CatchObservable,__super__);function CatchObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}CatchObservable.prototype.subscribeCore=function(o){var d1=new SingleAssignmentDisposable(),subscription=new SerialDisposable();subscription.setDisposable(d1);d1.setDisposable(this.source.subscribe(new CatchObserver(o,subscription,this._fn)));return subscription;};return CatchObservable;}(ObservableBase);var CatchObserver=function(__super__){inherits(CatchObserver,__super__);function CatchObserver(o,s,fn){this._o=o;this._s=s;this._fn=fn;__super__.call(this);}CatchObserver.prototype.next=function(x){this._o.onNext(x);};CatchObserver.prototype.completed=function(){return this._o.onCompleted();};CatchObserver.prototype.error=function(e){var result=tryCatch(this._fn)(e);if(result===errorObj){return this._o.onError(result.e);}isPromise(result)&&(result=observableFromPromise(result));var d=new SingleAssignmentDisposable();this._s.setDisposable(d);d.setDisposable(result.subscribe(this._o));};return CatchObserver;}(AbstractObserver);/**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Mixed} handlerOrSecond Exception handler function that returns an observable sequence given the error that occurred in the first sequence, or a second observable sequence used to produce results when an error occurred in the first sequence.
	   * @returns {Observable} An observable sequence containing the first sequence's elements, followed by the elements of the handler sequence in case an exception occurred.
	   */observableProto['catch']=function(handlerOrSecond){return isFunction(handlerOrSecond)?new CatchObservable(this,handlerOrSecond):observableCatch([this,handlerOrSecond]);};/**
	   * Continues an observable sequence that is terminated by an exception with the next observable sequence.
	   * @param {Array | Arguments} args Arguments or an array to use as the next sequence if an error occurs.
	   * @returns {Observable} An observable sequence containing elements from consecutive source sequences until a source sequence terminates successfully.
	   */var observableCatch=Observable['catch']=function(){var items;if(Array.isArray(arguments[0])){items=arguments[0];}else{var len=arguments.length;items=new Array(len);for(var i=0;i<len;i++){items[i]=arguments[i];}}return enumerableOf(items).catchError();};/**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	   * This can be in the form of an argument list of observables or an array.
	   *
	   * @example
	   * 1 - obs = observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	   * 2 - obs = observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */observableProto.combineLatest=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}if(Array.isArray(args[0])){args[0].unshift(this);}else{args.unshift(this);}return combineLatest.apply(this,args);};function falseFactory(){return false;}function argumentsToArray(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return args;}var CombineLatestObservable=function(__super__){inherits(CombineLatestObservable,__super__);function CombineLatestObservable(params,cb){this._params=params;this._cb=cb;__super__.call(this);}CombineLatestObservable.prototype.subscribeCore=function(observer){var len=this._params.length,subscriptions=new Array(len);var state={hasValue:arrayInitialize(len,falseFactory),hasValueAll:false,isDone:arrayInitialize(len,falseFactory),values:new Array(len)};for(var i=0;i<len;i++){var source=this._params[i],sad=new SingleAssignmentDisposable();subscriptions[i]=sad;isPromise(source)&&(source=observableFromPromise(source));sad.setDisposable(source.subscribe(new CombineLatestObserver(observer,i,this._cb,state)));}return new NAryDisposable(subscriptions);};return CombineLatestObservable;}(ObservableBase);var CombineLatestObserver=function(__super__){inherits(CombineLatestObserver,__super__);function CombineLatestObserver(o,i,cb,state){this._o=o;this._i=i;this._cb=cb;this._state=state;__super__.call(this);}function notTheSame(i){return function(x,j){return j!==i;};}CombineLatestObserver.prototype.next=function(x){this._state.values[this._i]=x;this._state.hasValue[this._i]=true;if(this._state.hasValueAll||(this._state.hasValueAll=this._state.hasValue.every(identity))){var res=tryCatch(this._cb).apply(null,this._state.values);if(res===errorObj){return this._o.onError(res.e);}this._o.onNext(res);}else if(this._state.isDone.filter(notTheSame(this._i)).every(identity)){this._o.onCompleted();}};CombineLatestObserver.prototype.error=function(e){this._o.onError(e);};CombineLatestObserver.prototype.completed=function(){this._state.isDone[this._i]=true;this._state.isDone.every(identity)&&this._o.onCompleted();};return CombineLatestObserver;}(AbstractObserver);/**
	  * Merges the specified observable sequences into one observable sequence by using the selector function whenever any of the observable sequences or Promises produces an element.
	  *
	  * @example
	  * 1 - obs = Rx.Observable.combineLatest(obs1, obs2, obs3, function (o1, o2, o3) { return o1 + o2 + o3; });
	  * 2 - obs = Rx.Observable.combineLatest([obs1, obs2, obs3], function (o1, o2, o3) { return o1 + o2 + o3; });
	  * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	  */var combineLatest=Observable.combineLatest=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var resultSelector=isFunction(args[len-1])?args.pop():argumentsToArray;Array.isArray(args[0])&&(args=args[0]);return new CombineLatestObservable(args,resultSelector);};/**
	   * Concatenates all the observable sequences.  This takes in either an array or variable arguments to concatenate.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */observableProto.concat=function(){for(var args=[],i=0,len=arguments.length;i<len;i++){args.push(arguments[i]);}args.unshift(this);return observableConcat.apply(null,args);};var ConcatObserver=function(__super__){inherits(ConcatObserver,__super__);function ConcatObserver(s,fn){this._s=s;this._fn=fn;__super__.call(this);}ConcatObserver.prototype.next=function(x){this._s.o.onNext(x);};ConcatObserver.prototype.error=function(e){this._s.o.onError(e);};ConcatObserver.prototype.completed=function(){this._s.i++;this._fn(this._s);};return ConcatObserver;}(AbstractObserver);var ConcatObservable=function(__super__){inherits(ConcatObservable,__super__);function ConcatObservable(sources){this._sources=sources;__super__.call(this);}function scheduleRecursive(state,recurse){if(state.disposable.isDisposed){return;}if(state.i===state.sources.length){return state.o.onCompleted();}// Check if promise
	var currentValue=state.sources[state.i];isPromise(currentValue)&&(currentValue=observableFromPromise(currentValue));var d=new SingleAssignmentDisposable();state.subscription.setDisposable(d);d.setDisposable(currentValue.subscribe(new ConcatObserver(state,recurse)));}ConcatObservable.prototype.subscribeCore=function(o){var subscription=new SerialDisposable();var disposable=disposableCreate(noop);var state={o:o,i:0,subscription:subscription,disposable:disposable,sources:this._sources};var cancelable=immediateScheduler.scheduleRecursive(state,scheduleRecursive);return new NAryDisposable([subscription,disposable,cancelable]);};return ConcatObservable;}(ObservableBase);/**
	   * Concatenates all the observable sequences.
	   * @param {Array | Arguments} args Arguments or an array to concat to the observable sequence.
	   * @returns {Observable} An observable sequence that contains the elements of each given sequence, in sequential order.
	   */var observableConcat=Observable.concat=function(){var args;if(Array.isArray(arguments[0])){args=arguments[0];}else{args=new Array(arguments.length);for(var i=0,len=arguments.length;i<len;i++){args[i]=arguments[i];}}return new ConcatObservable(args);};/**
	   * Concatenates an observable sequence of observable sequences.
	   * @returns {Observable} An observable sequence that contains the elements of each observed inner sequence, in sequential order.
	   */observableProto.concatAll=function(){return this.merge(1);};var MergeObservable=function(__super__){inherits(MergeObservable,__super__);function MergeObservable(source,maxConcurrent){this.source=source;this.maxConcurrent=maxConcurrent;__super__.call(this);}MergeObservable.prototype.subscribeCore=function(observer){var g=new CompositeDisposable();g.add(this.source.subscribe(new MergeObserver(observer,this.maxConcurrent,g)));return g;};return MergeObservable;}(ObservableBase);var MergeObserver=function(__super__){function MergeObserver(o,max,g){this.o=o;this.max=max;this.g=g;this.done=false;this.q=[];this.activeCount=0;__super__.call(this);}inherits(MergeObserver,__super__);MergeObserver.prototype.handleSubscribe=function(xs){var sad=new SingleAssignmentDisposable();this.g.add(sad);isPromise(xs)&&(xs=observableFromPromise(xs));sad.setDisposable(xs.subscribe(new InnerObserver(this,sad)));};MergeObserver.prototype.next=function(innerSource){if(this.activeCount<this.max){this.activeCount++;this.handleSubscribe(innerSource);}else{this.q.push(innerSource);}};MergeObserver.prototype.error=function(e){this.o.onError(e);};MergeObserver.prototype.completed=function(){this.done=true;this.activeCount===0&&this.o.onCompleted();};function InnerObserver(parent,sad){this.parent=parent;this.sad=sad;__super__.call(this);}inherits(InnerObserver,__super__);InnerObserver.prototype.next=function(x){this.parent.o.onNext(x);};InnerObserver.prototype.error=function(e){this.parent.o.onError(e);};InnerObserver.prototype.completed=function(){this.parent.g.remove(this.sad);if(this.parent.q.length>0){this.parent.handleSubscribe(this.parent.q.shift());}else{this.parent.activeCount--;this.parent.done&&this.parent.activeCount===0&&this.parent.o.onCompleted();}};return MergeObserver;}(AbstractObserver);/**
	  * Merges an observable sequence of observable sequences into an observable sequence, limiting the number of concurrent subscriptions to inner sequences.
	  * Or merges two observable sequences into a single observable sequence.
	  * @param {Mixed} [maxConcurrentOrOther] Maximum number of inner observable sequences being subscribed to concurrently or the second observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */observableProto.merge=function(maxConcurrentOrOther){return typeof maxConcurrentOrOther!=='number'?observableMerge(this,maxConcurrentOrOther):new MergeObservable(this,maxConcurrentOrOther);};/**
	   * Merges all the observable sequences into a single observable sequence.
	   * The scheduler is optional and if not specified, the immediate scheduler is used.
	   * @returns {Observable} The observable sequence that merges the elements of the observable sequences.
	   */var observableMerge=Observable.merge=function(){var scheduler,sources=[],i,len=arguments.length;if(!arguments[0]){scheduler=immediateScheduler;for(i=1;i<len;i++){sources.push(arguments[i]);}}else if(isScheduler(arguments[0])){scheduler=arguments[0];for(i=1;i<len;i++){sources.push(arguments[i]);}}else{scheduler=immediateScheduler;for(i=0;i<len;i++){sources.push(arguments[i]);}}if(Array.isArray(sources[0])){sources=sources[0];}return observableOf(scheduler,sources).mergeAll();};var MergeAllObservable=function(__super__){inherits(MergeAllObservable,__super__);function MergeAllObservable(source){this.source=source;__super__.call(this);}MergeAllObservable.prototype.subscribeCore=function(o){var g=new CompositeDisposable(),m=new SingleAssignmentDisposable();g.add(m);m.setDisposable(this.source.subscribe(new MergeAllObserver(o,g)));return g;};return MergeAllObservable;}(ObservableBase);var MergeAllObserver=function(__super__){function MergeAllObserver(o,g){this.o=o;this.g=g;this.done=false;__super__.call(this);}inherits(MergeAllObserver,__super__);MergeAllObserver.prototype.next=function(innerSource){var sad=new SingleAssignmentDisposable();this.g.add(sad);isPromise(innerSource)&&(innerSource=observableFromPromise(innerSource));sad.setDisposable(innerSource.subscribe(new InnerObserver(this,sad)));};MergeAllObserver.prototype.error=function(e){this.o.onError(e);};MergeAllObserver.prototype.completed=function(){this.done=true;this.g.length===1&&this.o.onCompleted();};function InnerObserver(parent,sad){this.parent=parent;this.sad=sad;__super__.call(this);}inherits(InnerObserver,__super__);InnerObserver.prototype.next=function(x){this.parent.o.onNext(x);};InnerObserver.prototype.error=function(e){this.parent.o.onError(e);};InnerObserver.prototype.completed=function(){this.parent.g.remove(this.sad);this.parent.done&&this.parent.g.length===1&&this.parent.o.onCompleted();};return MergeAllObserver;}(AbstractObserver);/**
	  * Merges an observable sequence of observable sequences into an observable sequence.
	  * @returns {Observable} The observable sequence that merges the elements of the inner sequences.
	  */observableProto.mergeAll=function(){return new MergeAllObservable(this);};var CompositeError=Rx.CompositeError=function(errors){this.innerErrors=errors;this.message='This contains multiple errors. Check the innerErrors';Error.call(this);};CompositeError.prototype=Object.create(Error.prototype);CompositeError.prototype.name='CompositeError';var MergeDelayErrorObservable=function(__super__){inherits(MergeDelayErrorObservable,__super__);function MergeDelayErrorObservable(source){this.source=source;__super__.call(this);}MergeDelayErrorObservable.prototype.subscribeCore=function(o){var group=new CompositeDisposable(),m=new SingleAssignmentDisposable(),state={isStopped:false,errors:[],o:o};group.add(m);m.setDisposable(this.source.subscribe(new MergeDelayErrorObserver(group,state)));return group;};return MergeDelayErrorObservable;}(ObservableBase);var MergeDelayErrorObserver=function(__super__){inherits(MergeDelayErrorObserver,__super__);function MergeDelayErrorObserver(group,state){this._group=group;this._state=state;__super__.call(this);}function setCompletion(o,errors){if(errors.length===0){o.onCompleted();}else if(errors.length===1){o.onError(errors[0]);}else{o.onError(new CompositeError(errors));}}MergeDelayErrorObserver.prototype.next=function(x){var inner=new SingleAssignmentDisposable();this._group.add(inner);// Check for promises support
	isPromise(x)&&(x=observableFromPromise(x));inner.setDisposable(x.subscribe(new InnerObserver(inner,this._group,this._state)));};MergeDelayErrorObserver.prototype.error=function(e){this._state.errors.push(e);this._state.isStopped=true;this._group.length===1&&setCompletion(this._state.o,this._state.errors);};MergeDelayErrorObserver.prototype.completed=function(){this._state.isStopped=true;this._group.length===1&&setCompletion(this._state.o,this._state.errors);};inherits(InnerObserver,__super__);function InnerObserver(inner,group,state){this._inner=inner;this._group=group;this._state=state;__super__.call(this);}InnerObserver.prototype.next=function(x){this._state.o.onNext(x);};InnerObserver.prototype.error=function(e){this._state.errors.push(e);this._group.remove(this._inner);this._state.isStopped&&this._group.length===1&&setCompletion(this._state.o,this._state.errors);};InnerObserver.prototype.completed=function(){this._group.remove(this._inner);this._state.isStopped&&this._group.length===1&&setCompletion(this._state.o,this._state.errors);};return MergeDelayErrorObserver;}(AbstractObserver);/**
	  * Flattens an Observable that emits Observables into one Observable, in a way that allows an Observer to
	  * receive all successfully emitted items from all of the source Observables without being interrupted by
	  * an error notification from one of them.
	  *
	  * This behaves like Observable.prototype.mergeAll except that if any of the merged Observables notify of an
	  * error via the Observer's onError, mergeDelayError will refrain from propagating that
	  * error notification until all of the merged Observables have finished emitting items.
	  * @param {Array | Arguments} args Arguments or an array to merge.
	  * @returns {Observable} an Observable that emits all of the items emitted by the Observables emitted by the Observable
	  */Observable.mergeDelayError=function(){var args;if(Array.isArray(arguments[0])){args=arguments[0];}else{var len=arguments.length;args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}}var source=observableOf(null,args);return new MergeDelayErrorObservable(source);};/**
	   * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
	   * @param {Observable} second Second observable sequence used to produce results after the first sequence terminates.
	   * @returns {Observable} An observable sequence that concatenates the first and second sequence, even if the first sequence terminates exceptionally.
	   */observableProto.onErrorResumeNext=function(second){if(!second){throw new Error('Second observable is required');}return onErrorResumeNext([this,second]);};var OnErrorResumeNextObservable=function(__super__){inherits(OnErrorResumeNextObservable,__super__);function OnErrorResumeNextObservable(sources){this.sources=sources;__super__.call(this);}function scheduleMethod(state,recurse){if(state.pos<state.sources.length){var current=state.sources[state.pos++];isPromise(current)&&(current=observableFromPromise(current));var d=new SingleAssignmentDisposable();state.subscription.setDisposable(d);d.setDisposable(current.subscribe(new OnErrorResumeNextObserver(state,recurse)));}else{state.o.onCompleted();}}OnErrorResumeNextObservable.prototype.subscribeCore=function(o){var subscription=new SerialDisposable(),state={pos:0,subscription:subscription,o:o,sources:this.sources},cancellable=immediateScheduler.scheduleRecursive(state,scheduleMethod);return new BinaryDisposable(subscription,cancellable);};return OnErrorResumeNextObservable;}(ObservableBase);var OnErrorResumeNextObserver=function(__super__){inherits(OnErrorResumeNextObserver,__super__);function OnErrorResumeNextObserver(state,recurse){this._state=state;this._recurse=recurse;__super__.call(this);}OnErrorResumeNextObserver.prototype.next=function(x){this._state.o.onNext(x);};OnErrorResumeNextObserver.prototype.error=function(){this._recurse(this._state);};OnErrorResumeNextObserver.prototype.completed=function(){this._recurse(this._state);};return OnErrorResumeNextObserver;}(AbstractObserver);/**
	   * Continues an observable sequence that is terminated normally or by an exception with the next observable sequence.
	   * @returns {Observable} An observable sequence that concatenates the source sequences, even if a sequence terminates exceptionally.
	   */var onErrorResumeNext=Observable.onErrorResumeNext=function(){var sources=[];if(Array.isArray(arguments[0])){sources=arguments[0];}else{var len=arguments.length;sources=new Array(len);for(var i=0;i<len;i++){sources[i]=arguments[i];}}return new OnErrorResumeNextObservable(sources);};var SkipUntilObservable=function(__super__){inherits(SkipUntilObservable,__super__);function SkipUntilObservable(source,other){this._s=source;this._o=isPromise(other)?observableFromPromise(other):other;this._open=false;__super__.call(this);}SkipUntilObservable.prototype.subscribeCore=function(o){var leftSubscription=new SingleAssignmentDisposable();leftSubscription.setDisposable(this._s.subscribe(new SkipUntilSourceObserver(o,this)));isPromise(this._o)&&(this._o=observableFromPromise(this._o));var rightSubscription=new SingleAssignmentDisposable();rightSubscription.setDisposable(this._o.subscribe(new SkipUntilOtherObserver(o,this,rightSubscription)));return new BinaryDisposable(leftSubscription,rightSubscription);};return SkipUntilObservable;}(ObservableBase);var SkipUntilSourceObserver=function(__super__){inherits(SkipUntilSourceObserver,__super__);function SkipUntilSourceObserver(o,p){this._o=o;this._p=p;__super__.call(this);}SkipUntilSourceObserver.prototype.next=function(x){this._p._open&&this._o.onNext(x);};SkipUntilSourceObserver.prototype.error=function(err){this._o.onError(err);};SkipUntilSourceObserver.prototype.onCompleted=function(){this._p._open&&this._o.onCompleted();};return SkipUntilSourceObserver;}(AbstractObserver);var SkipUntilOtherObserver=function(__super__){inherits(SkipUntilOtherObserver,__super__);function SkipUntilOtherObserver(o,p,r){this._o=o;this._p=p;this._r=r;__super__.call(this);}SkipUntilOtherObserver.prototype.next=function(){this._p._open=true;this._r.dispose();};SkipUntilOtherObserver.prototype.error=function(err){this._o.onError(err);};SkipUntilOtherObserver.prototype.onCompleted=function(){this._r.dispose();};return SkipUntilOtherObserver;}(AbstractObserver);/**
	   * Returns the values from the source observable sequence only after the other observable sequence produces a value.
	   * @param {Observable | Promise} other The observable sequence or Promise that triggers propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence starting from the point the other sequence triggered propagation.
	   */observableProto.skipUntil=function(other){return new SkipUntilObservable(this,other);};var SwitchObservable=function(__super__){inherits(SwitchObservable,__super__);function SwitchObservable(source){this.source=source;__super__.call(this);}SwitchObservable.prototype.subscribeCore=function(o){var inner=new SerialDisposable(),s=this.source.subscribe(new SwitchObserver(o,inner));return new BinaryDisposable(s,inner);};inherits(SwitchObserver,AbstractObserver);function SwitchObserver(o,inner){this.o=o;this.inner=inner;this.stopped=false;this.latest=0;this.hasLatest=false;AbstractObserver.call(this);}SwitchObserver.prototype.next=function(innerSource){var d=new SingleAssignmentDisposable(),id=++this.latest;this.hasLatest=true;this.inner.setDisposable(d);isPromise(innerSource)&&(innerSource=observableFromPromise(innerSource));d.setDisposable(innerSource.subscribe(new InnerObserver(this,id)));};SwitchObserver.prototype.error=function(e){this.o.onError(e);};SwitchObserver.prototype.completed=function(){this.stopped=true;!this.hasLatest&&this.o.onCompleted();};inherits(InnerObserver,AbstractObserver);function InnerObserver(parent,id){this.parent=parent;this.id=id;AbstractObserver.call(this);}InnerObserver.prototype.next=function(x){this.parent.latest===this.id&&this.parent.o.onNext(x);};InnerObserver.prototype.error=function(e){this.parent.latest===this.id&&this.parent.o.onError(e);};InnerObserver.prototype.completed=function(){if(this.parent.latest===this.id){this.parent.hasLatest=false;this.parent.stopped&&this.parent.o.onCompleted();}};return SwitchObservable;}(ObservableBase);/**
	  * Transforms an observable sequence of observable sequences into an observable sequence producing values only from the most recent observable sequence.
	  * @returns {Observable} The observable sequence that at any point in time produces the elements of the most recent inner observable sequence that has been received.
	  */observableProto['switch']=observableProto.switchLatest=function(){return new SwitchObservable(this);};var TakeUntilObservable=function(__super__){inherits(TakeUntilObservable,__super__);function TakeUntilObservable(source,other){this.source=source;this.other=isPromise(other)?observableFromPromise(other):other;__super__.call(this);}TakeUntilObservable.prototype.subscribeCore=function(o){return new BinaryDisposable(this.source.subscribe(o),this.other.subscribe(new TakeUntilObserver(o)));};return TakeUntilObservable;}(ObservableBase);var TakeUntilObserver=function(__super__){inherits(TakeUntilObserver,__super__);function TakeUntilObserver(o){this._o=o;__super__.call(this);}TakeUntilObserver.prototype.next=function(){this._o.onCompleted();};TakeUntilObserver.prototype.error=function(err){this._o.onError(err);};TakeUntilObserver.prototype.onCompleted=noop;return TakeUntilObserver;}(AbstractObserver);/**
	   * Returns the values from the source observable sequence until the other observable sequence produces a value.
	   * @param {Observable | Promise} other Observable sequence or Promise that terminates propagation of elements of the source sequence.
	   * @returns {Observable} An observable sequence containing the elements of the source sequence up to the point the other sequence interrupted further propagation.
	   */observableProto.takeUntil=function(other){return new TakeUntilObservable(this,other);};function falseFactory(){return false;}function argumentsToArray(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return args;}var WithLatestFromObservable=function(__super__){inherits(WithLatestFromObservable,__super__);function WithLatestFromObservable(source,sources,resultSelector){this._s=source;this._ss=sources;this._cb=resultSelector;__super__.call(this);}WithLatestFromObservable.prototype.subscribeCore=function(o){var len=this._ss.length;var state={hasValue:arrayInitialize(len,falseFactory),hasValueAll:false,values:new Array(len)};var n=this._ss.length,subscriptions=new Array(n+1);for(var i=0;i<n;i++){var other=this._ss[i],sad=new SingleAssignmentDisposable();isPromise(other)&&(other=observableFromPromise(other));sad.setDisposable(other.subscribe(new WithLatestFromOtherObserver(o,i,state)));subscriptions[i]=sad;}var outerSad=new SingleAssignmentDisposable();outerSad.setDisposable(this._s.subscribe(new WithLatestFromSourceObserver(o,this._cb,state)));subscriptions[n]=outerSad;return new NAryDisposable(subscriptions);};return WithLatestFromObservable;}(ObservableBase);var WithLatestFromOtherObserver=function(__super__){inherits(WithLatestFromOtherObserver,__super__);function WithLatestFromOtherObserver(o,i,state){this._o=o;this._i=i;this._state=state;__super__.call(this);}WithLatestFromOtherObserver.prototype.next=function(x){this._state.values[this._i]=x;this._state.hasValue[this._i]=true;this._state.hasValueAll=this._state.hasValue.every(identity);};WithLatestFromOtherObserver.prototype.error=function(e){this._o.onError(e);};WithLatestFromOtherObserver.prototype.completed=noop;return WithLatestFromOtherObserver;}(AbstractObserver);var WithLatestFromSourceObserver=function(__super__){inherits(WithLatestFromSourceObserver,__super__);function WithLatestFromSourceObserver(o,cb,state){this._o=o;this._cb=cb;this._state=state;__super__.call(this);}WithLatestFromSourceObserver.prototype.next=function(x){var allValues=[x].concat(this._state.values);if(!this._state.hasValueAll){return;}var res=tryCatch(this._cb).apply(null,allValues);if(res===errorObj){return this._o.onError(res.e);}this._o.onNext(res);};WithLatestFromSourceObserver.prototype.error=function(e){this._o.onError(e);};WithLatestFromSourceObserver.prototype.completed=function(){this._o.onCompleted();};return WithLatestFromSourceObserver;}(AbstractObserver);/**
	   * Merges the specified observable sequences into one observable sequence by using the selector function only when the (first) source observable sequence produces an element.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */observableProto.withLatestFrom=function(){if(arguments.length===0){throw new Error('invalid arguments');}var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var resultSelector=isFunction(args[len-1])?args.pop():argumentsToArray;Array.isArray(args[0])&&(args=args[0]);return new WithLatestFromObservable(this,args,resultSelector);};function falseFactory(){return false;}function emptyArrayFactory(){return[];}var ZipObservable=function(__super__){inherits(ZipObservable,__super__);function ZipObservable(sources,resultSelector){this._s=sources;this._cb=resultSelector;__super__.call(this);}ZipObservable.prototype.subscribeCore=function(observer){var n=this._s.length,subscriptions=new Array(n),done=arrayInitialize(n,falseFactory),q=arrayInitialize(n,emptyArrayFactory);for(var i=0;i<n;i++){var source=this._s[i],sad=new SingleAssignmentDisposable();subscriptions[i]=sad;isPromise(source)&&(source=observableFromPromise(source));sad.setDisposable(source.subscribe(new ZipObserver(observer,i,this,q,done)));}return new NAryDisposable(subscriptions);};return ZipObservable;}(ObservableBase);var ZipObserver=function(__super__){inherits(ZipObserver,__super__);function ZipObserver(o,i,p,q,d){this._o=o;this._i=i;this._p=p;this._q=q;this._d=d;__super__.call(this);}function notEmpty(x){return x.length>0;}function shiftEach(x){return x.shift();}function notTheSame(i){return function(x,j){return j!==i;};}ZipObserver.prototype.next=function(x){this._q[this._i].push(x);if(this._q.every(notEmpty)){var queuedValues=this._q.map(shiftEach);var res=tryCatch(this._p._cb).apply(null,queuedValues);if(res===errorObj){return this._o.onError(res.e);}this._o.onNext(res);}else if(this._d.filter(notTheSame(this._i)).every(identity)){this._o.onCompleted();}};ZipObserver.prototype.error=function(e){this._o.onError(e);};ZipObserver.prototype.completed=function(){this._d[this._i]=true;this._d.every(identity)&&this._o.onCompleted();};return ZipObserver;}(AbstractObserver);/**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	   * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	   */observableProto.zip=function(){if(arguments.length===0){throw new Error('invalid arguments');}var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var resultSelector=isFunction(args[len-1])?args.pop():argumentsToArray;Array.isArray(args[0])&&(args=args[0]);var parent=this;args.unshift(parent);return new ZipObservable(args,resultSelector);};/**
	   * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences have produced an element at a corresponding index.
	   * @param arguments Observable sources.
	   * @param {Function} resultSelector Function to invoke for each series of elements at corresponding indexes in the sources.
	   * @returns {Observable} An observable sequence containing the result of combining elements of the sources using the specified result selector function.
	   */Observable.zip=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}if(Array.isArray(args[0])){args=isFunction(args[1])?args[0].concat(args[1]):args[0];}var first=args.shift();return first.zip.apply(first,args);};function falseFactory(){return false;}function emptyArrayFactory(){return[];}function argumentsToArray(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return args;}var ZipIterableObservable=function(__super__){inherits(ZipIterableObservable,__super__);function ZipIterableObservable(sources,cb){this.sources=sources;this._cb=cb;__super__.call(this);}ZipIterableObservable.prototype.subscribeCore=function(o){var sources=this.sources,len=sources.length,subscriptions=new Array(len);var state={q:arrayInitialize(len,emptyArrayFactory),done:arrayInitialize(len,falseFactory),cb:this._cb,o:o};for(var i=0;i<len;i++){(function(i){var source=sources[i],sad=new SingleAssignmentDisposable();(isArrayLike(source)||isIterable(source))&&(source=observableFrom(source));subscriptions[i]=sad;sad.setDisposable(source.subscribe(new ZipIterableObserver(state,i)));})(i);}return new NAryDisposable(subscriptions);};return ZipIterableObservable;}(ObservableBase);var ZipIterableObserver=function(__super__){inherits(ZipIterableObserver,__super__);function ZipIterableObserver(s,i){this._s=s;this._i=i;__super__.call(this);}function notEmpty(x){return x.length>0;}function shiftEach(x){return x.shift();}function notTheSame(i){return function(x,j){return j!==i;};}ZipIterableObserver.prototype.next=function(x){this._s.q[this._i].push(x);if(this._s.q.every(notEmpty)){var queuedValues=this._s.q.map(shiftEach),res=tryCatch(this._s.cb).apply(null,queuedValues);if(res===errorObj){return this._s.o.onError(res.e);}this._s.o.onNext(res);}else if(this._s.done.filter(notTheSame(this._i)).every(identity)){this._s.o.onCompleted();}};ZipIterableObserver.prototype.error=function(e){this._s.o.onError(e);};ZipIterableObserver.prototype.completed=function(){this._s.done[this._i]=true;this._s.done.every(identity)&&this._s.o.onCompleted();};return ZipIterableObserver;}(AbstractObserver);/**
	 * Merges the specified observable sequences into one observable sequence by using the selector function whenever all of the observable sequences or an array have produced an element at a corresponding index.
	 * The last element in the arguments must be a function to invoke for each series of elements at corresponding indexes in the args.
	 * @returns {Observable} An observable sequence containing the result of combining elements of the args using the specified result selector function.
	 */observableProto.zipIterable=function(){if(arguments.length===0){throw new Error('invalid arguments');}var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var resultSelector=isFunction(args[len-1])?args.pop():argumentsToArray;var parent=this;args.unshift(parent);return new ZipIterableObservable(args,resultSelector);};function asObservable(source){return function subscribe(o){return source.subscribe(o);};}/**
	   *  Hides the identity of an observable sequence.
	   * @returns {Observable} An observable sequence that hides the identity of the source sequence.
	   */observableProto.asObservable=function(){return new AnonymousObservable(asObservable(this),this);};function toArray(x){return x.toArray();}function notEmpty(x){return x.length>0;}/**
	   *  Projects each element of an observable sequence into zero or more buffers which are produced based on element count information.
	   * @param {Number} count Length of each buffer.
	   * @param {Number} [skip] Number of elements to skip between creation of consecutive buffers. If not provided, defaults to the count.
	   * @returns {Observable} An observable sequence of buffers.
	   */observableProto.bufferWithCount=observableProto.bufferCount=function(count,skip){typeof skip!=='number'&&(skip=count);return this.windowWithCount(count,skip).flatMap(toArray).filter(notEmpty);};var DematerializeObservable=function(__super__){inherits(DematerializeObservable,__super__);function DematerializeObservable(source){this.source=source;__super__.call(this);}DematerializeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new DematerializeObserver(o));};return DematerializeObservable;}(ObservableBase);var DematerializeObserver=function(__super__){inherits(DematerializeObserver,__super__);function DematerializeObserver(o){this._o=o;__super__.call(this);}DematerializeObserver.prototype.next=function(x){x.accept(this._o);};DematerializeObserver.prototype.error=function(e){this._o.onError(e);};DematerializeObserver.prototype.completed=function(){this._o.onCompleted();};return DematerializeObserver;}(AbstractObserver);/**
	   * Dematerializes the explicit notification values of an observable sequence as implicit notifications.
	   * @returns {Observable} An observable sequence exhibiting the behavior corresponding to the source sequence's notification values.
	   */observableProto.dematerialize=function(){return new DematerializeObservable(this);};var DistinctUntilChangedObservable=function(__super__){inherits(DistinctUntilChangedObservable,__super__);function DistinctUntilChangedObservable(source,keyFn,comparer){this.source=source;this.keyFn=keyFn;this.comparer=comparer;__super__.call(this);}DistinctUntilChangedObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new DistinctUntilChangedObserver(o,this.keyFn,this.comparer));};return DistinctUntilChangedObservable;}(ObservableBase);var DistinctUntilChangedObserver=function(__super__){inherits(DistinctUntilChangedObserver,__super__);function DistinctUntilChangedObserver(o,keyFn,comparer){this.o=o;this.keyFn=keyFn;this.comparer=comparer;this.hasCurrentKey=false;this.currentKey=null;__super__.call(this);}DistinctUntilChangedObserver.prototype.next=function(x){var key=x,comparerEquals;if(isFunction(this.keyFn)){key=tryCatch(this.keyFn)(x);if(key===errorObj){return this.o.onError(key.e);}}if(this.hasCurrentKey){comparerEquals=tryCatch(this.comparer)(this.currentKey,key);if(comparerEquals===errorObj){return this.o.onError(comparerEquals.e);}}if(!this.hasCurrentKey||!comparerEquals){this.hasCurrentKey=true;this.currentKey=key;this.o.onNext(x);}};DistinctUntilChangedObserver.prototype.error=function(e){this.o.onError(e);};DistinctUntilChangedObserver.prototype.completed=function(){this.o.onCompleted();};return DistinctUntilChangedObserver;}(AbstractObserver);/**
	  *  Returns an observable sequence that contains only distinct contiguous elements according to the keyFn and the comparer.
	  * @param {Function} [keyFn] A function to compute the comparison key for each element. If not provided, it projects the value.
	  * @param {Function} [comparer] Equality comparer for computed key values. If not provided, defaults to an equality comparer function.
	  * @returns {Observable} An observable sequence only containing the distinct contiguous elements, based on a computed key value, from the source sequence.
	  */observableProto.distinctUntilChanged=function(keyFn,comparer){comparer||(comparer=defaultComparer);return new DistinctUntilChangedObservable(this,keyFn,comparer);};var TapObservable=function(__super__){inherits(TapObservable,__super__);function TapObservable(source,observerOrOnNext,onError,onCompleted){this.source=source;this._oN=observerOrOnNext;this._oE=onError;this._oC=onCompleted;__super__.call(this);}TapObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o,this));};inherits(InnerObserver,AbstractObserver);function InnerObserver(o,p){this.o=o;this.t=!p._oN||isFunction(p._oN)?observerCreate(p._oN||noop,p._oE||noop,p._oC||noop):p._oN;this.isStopped=false;AbstractObserver.call(this);}InnerObserver.prototype.next=function(x){var res=tryCatch(this.t.onNext).call(this.t,x);if(res===errorObj){this.o.onError(res.e);}this.o.onNext(x);};InnerObserver.prototype.error=function(err){var res=tryCatch(this.t.onError).call(this.t,err);if(res===errorObj){return this.o.onError(res.e);}this.o.onError(err);};InnerObserver.prototype.completed=function(){var res=tryCatch(this.t.onCompleted).call(this.t);if(res===errorObj){return this.o.onError(res.e);}this.o.onCompleted();};return TapObservable;}(ObservableBase);/**
	  *  Invokes an action for each element in the observable sequence and invokes an action upon graceful or exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function | Observer} observerOrOnNext Action to invoke for each element in the observable sequence or an o.
	  * @param {Function} [onError]  Action to invoke upon exceptional termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @param {Function} [onCompleted]  Action to invoke upon graceful termination of the observable sequence. Used if only the observerOrOnNext parameter is also a function.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */observableProto['do']=observableProto.tap=observableProto.doAction=function(observerOrOnNext,onError,onCompleted){return new TapObservable(this,observerOrOnNext,onError,onCompleted);};/**
	  *  Invokes an action for each element in the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onNext Action to invoke for each element in the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */observableProto.doOnNext=observableProto.tapOnNext=function(onNext,thisArg){return this.tap(typeof thisArg!=='undefined'?function(x){onNext.call(thisArg,x);}:onNext);};/**
	  *  Invokes an action upon exceptional termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onError Action to invoke upon exceptional termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */observableProto.doOnError=observableProto.tapOnError=function(onError,thisArg){return this.tap(noop,typeof thisArg!=='undefined'?function(e){onError.call(thisArg,e);}:onError);};/**
	  *  Invokes an action upon graceful termination of the observable sequence.
	  *  This method can be used for debugging, logging, etc. of query behavior by intercepting the message stream to run arbitrary actions for messages on the pipeline.
	  * @param {Function} onCompleted Action to invoke upon graceful termination of the observable sequence.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} The source sequence with the side-effecting behavior applied.
	  */observableProto.doOnCompleted=observableProto.tapOnCompleted=function(onCompleted,thisArg){return this.tap(noop,null,typeof thisArg!=='undefined'?function(){onCompleted.call(thisArg);}:onCompleted);};var FinallyObservable=function(__super__){inherits(FinallyObservable,__super__);function FinallyObservable(source,fn,thisArg){this.source=source;this._fn=bindCallback(fn,thisArg,0);__super__.call(this);}FinallyObservable.prototype.subscribeCore=function(o){var d=tryCatch(this.source.subscribe).call(this.source,o);if(d===errorObj){this._fn();thrower(d.e);}return new FinallyDisposable(d,this._fn);};function FinallyDisposable(s,fn){this.isDisposed=false;this._s=s;this._fn=fn;}FinallyDisposable.prototype.dispose=function(){if(!this.isDisposed){var res=tryCatch(this._s.dispose).call(this._s);this._fn();res===errorObj&&thrower(res.e);}};return FinallyObservable;}(ObservableBase);/**
	   *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
	   * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
	   * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
	   */observableProto['finally']=function(action,thisArg){return new FinallyObservable(this,action,thisArg);};var IgnoreElementsObservable=function(__super__){inherits(IgnoreElementsObservable,__super__);function IgnoreElementsObservable(source){this.source=source;__super__.call(this);}IgnoreElementsObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o));};function InnerObserver(o){this.o=o;this.isStopped=false;}InnerObserver.prototype.onNext=noop;InnerObserver.prototype.onError=function(err){if(!this.isStopped){this.isStopped=true;this.o.onError(err);}};InnerObserver.prototype.onCompleted=function(){if(!this.isStopped){this.isStopped=true;this.o.onCompleted();}};InnerObserver.prototype.dispose=function(){this.isStopped=true;};InnerObserver.prototype.fail=function(e){if(!this.isStopped){this.isStopped=true;this.observer.onError(e);return true;}return false;};return IgnoreElementsObservable;}(ObservableBase);/**
	   *  Ignores all elements in an observable sequence leaving only the termination messages.
	   * @returns {Observable} An empty observable sequence that signals termination, successful or exceptional, of the source sequence.
	   */observableProto.ignoreElements=function(){return new IgnoreElementsObservable(this);};var MaterializeObservable=function(__super__){inherits(MaterializeObservable,__super__);function MaterializeObservable(source,fn){this.source=source;__super__.call(this);}MaterializeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new MaterializeObserver(o));};return MaterializeObservable;}(ObservableBase);var MaterializeObserver=function(__super__){inherits(MaterializeObserver,__super__);function MaterializeObserver(o){this._o=o;__super__.call(this);}MaterializeObserver.prototype.next=function(x){this._o.onNext(notificationCreateOnNext(x));};MaterializeObserver.prototype.error=function(e){this._o.onNext(notificationCreateOnError(e));this._o.onCompleted();};MaterializeObserver.prototype.completed=function(){this._o.onNext(notificationCreateOnCompleted());this._o.onCompleted();};return MaterializeObserver;}(AbstractObserver);/**
	   *  Materializes the implicit notifications of an observable sequence as explicit notification values.
	   * @returns {Observable} An observable sequence containing the materialized notification values from the source sequence.
	   */observableProto.materialize=function(){return new MaterializeObservable(this);};/**
	   *  Repeats the observable sequence a specified number of times. If the repeat count is not specified, the sequence repeats indefinitely.
	   * @param {Number} [repeatCount]  Number of times to repeat the sequence. If not provided, repeats the sequence indefinitely.
	   * @returns {Observable} The observable sequence producing the elements of the given sequence repeatedly.
	   */observableProto.repeat=function(repeatCount){return enumerableRepeat(this,repeatCount).concat();};/**
	   *  Repeats the source observable sequence the specified number of times or until it successfully terminates. If the retry count is not specified, it retries indefinitely.
	   *  Note if you encounter an error and want it to retry once, then you must use .retry(2);
	   *
	   * @example
	   *  var res = retried = retry.repeat();
	   *  var res = retried = retry.repeat(2);
	   * @param {Number} [retryCount]  Number of times to retry the sequence. If not provided, retry the sequence indefinitely.
	   * @returns {Observable} An observable sequence producing the elements of the given sequence repeatedly until it terminates successfully.
	   */observableProto.retry=function(retryCount){return enumerableRepeat(this,retryCount).catchError();};function repeat(value){return{'@@iterator':function iterator(){return{next:function next(){return{done:false,value:value};}};}};}var RetryWhenObservable=function(__super__){function createDisposable(state){return{isDisposed:false,dispose:function dispose(){if(!this.isDisposed){this.isDisposed=true;state.isDisposed=true;}}};}function RetryWhenObservable(source,notifier){this.source=source;this._notifier=notifier;__super__.call(this);}inherits(RetryWhenObservable,__super__);RetryWhenObservable.prototype.subscribeCore=function(o){var exceptions=new Subject(),notifier=new Subject(),handled=this._notifier(exceptions),notificationDisposable=handled.subscribe(notifier);var e=this.source['@@iterator']();var state={isDisposed:false},lastError,subscription=new SerialDisposable();var cancelable=currentThreadScheduler.scheduleRecursive(null,function(_,recurse){if(state.isDisposed){return;}var currentItem=e.next();if(currentItem.done){if(lastError){o.onError(lastError);}else{o.onCompleted();}return;}// Check if promise
	var currentValue=currentItem.value;isPromise(currentValue)&&(currentValue=observableFromPromise(currentValue));var outer=new SingleAssignmentDisposable();var inner=new SingleAssignmentDisposable();subscription.setDisposable(new BinaryDisposable(inner,outer));outer.setDisposable(currentValue.subscribe(function(x){o.onNext(x);},function(exn){inner.setDisposable(notifier.subscribe(recurse,function(ex){o.onError(ex);},function(){o.onCompleted();}));exceptions.onNext(exn);outer.dispose();},function(){o.onCompleted();}));});return new NAryDisposable([notificationDisposable,subscription,cancelable,createDisposable(state)]);};return RetryWhenObservable;}(ObservableBase);observableProto.retryWhen=function(notifier){return new RetryWhenObservable(repeat(this),notifier);};function repeat(value){return{'@@iterator':function iterator(){return{next:function next(){return{done:false,value:value};}};}};}var RepeatWhenObservable=function(__super__){function createDisposable(state){return{isDisposed:false,dispose:function dispose(){if(!this.isDisposed){this.isDisposed=true;state.isDisposed=true;}}};}function RepeatWhenObservable(source,notifier){this.source=source;this._notifier=notifier;__super__.call(this);}inherits(RepeatWhenObservable,__super__);RepeatWhenObservable.prototype.subscribeCore=function(o){var completions=new Subject(),notifier=new Subject(),handled=this._notifier(completions),notificationDisposable=handled.subscribe(notifier);var e=this.source['@@iterator']();var state={isDisposed:false},lastError,subscription=new SerialDisposable();var cancelable=currentThreadScheduler.scheduleRecursive(null,function(_,recurse){if(state.isDisposed){return;}var currentItem=e.next();if(currentItem.done){if(lastError){o.onError(lastError);}else{o.onCompleted();}return;}// Check if promise
	var currentValue=currentItem.value;isPromise(currentValue)&&(currentValue=observableFromPromise(currentValue));var outer=new SingleAssignmentDisposable();var inner=new SingleAssignmentDisposable();subscription.setDisposable(new BinaryDisposable(inner,outer));outer.setDisposable(currentValue.subscribe(function(x){o.onNext(x);},function(exn){o.onError(exn);},function(){inner.setDisposable(notifier.subscribe(recurse,function(ex){o.onError(ex);},function(){o.onCompleted();}));completions.onNext(null);outer.dispose();}));});return new NAryDisposable([notificationDisposable,subscription,cancelable,createDisposable(state)]);};return RepeatWhenObservable;}(ObservableBase);observableProto.repeatWhen=function(notifier){return new RepeatWhenObservable(repeat(this),notifier);};var ScanObservable=function(__super__){inherits(ScanObservable,__super__);function ScanObservable(source,accumulator,hasSeed,seed){this.source=source;this.accumulator=accumulator;this.hasSeed=hasSeed;this.seed=seed;__super__.call(this);}ScanObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ScanObserver(o,this));};return ScanObservable;}(ObservableBase);var ScanObserver=function(__super__){inherits(ScanObserver,__super__);function ScanObserver(o,parent){this._o=o;this._p=parent;this._fn=parent.accumulator;this._hs=parent.hasSeed;this._s=parent.seed;this._ha=false;this._a=null;this._hv=false;this._i=0;__super__.call(this);}ScanObserver.prototype.next=function(x){!this._hv&&(this._hv=true);if(this._ha){this._a=tryCatch(this._fn)(this._a,x,this._i,this._p);}else{this._a=this._hs?tryCatch(this._fn)(this._s,x,this._i,this._p):x;this._ha=true;}if(this._a===errorObj){return this._o.onError(this._a.e);}this._o.onNext(this._a);this._i++;};ScanObserver.prototype.error=function(e){this._o.onError(e);};ScanObserver.prototype.completed=function(){!this._hv&&this._hs&&this._o.onNext(this._s);this._o.onCompleted();};return ScanObserver;}(AbstractObserver);/**
	  *  Applies an accumulator function over an observable sequence and returns each intermediate result. The optional seed value is used as the initial accumulator value.
	  *  For aggregation behavior with no intermediate results, see Observable.aggregate.
	  * @param {Mixed} [seed] The initial accumulator value.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @returns {Observable} An observable sequence containing the accumulated values.
	  */observableProto.scan=function(){var hasSeed=false,seed,accumulator=arguments[0];if(arguments.length===2){hasSeed=true;seed=arguments[1];}return new ScanObservable(this,accumulator,hasSeed,seed);};var SkipLastObservable=function(__super__){inherits(SkipLastObservable,__super__);function SkipLastObservable(source,c){this.source=source;this._c=c;__super__.call(this);}SkipLastObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SkipLastObserver(o,this._c));};return SkipLastObservable;}(ObservableBase);var SkipLastObserver=function(__super__){inherits(SkipLastObserver,__super__);function SkipLastObserver(o,c){this._o=o;this._c=c;this._q=[];__super__.call(this);}SkipLastObserver.prototype.next=function(x){this._q.push(x);this._q.length>this._c&&this._o.onNext(this._q.shift());};SkipLastObserver.prototype.error=function(e){this._o.onError(e);};SkipLastObserver.prototype.completed=function(){this._o.onCompleted();};return SkipLastObserver;}(AbstractObserver);/**
	   *  Bypasses a specified number of elements at the end of an observable sequence.
	   * @description
	   *  This operator accumulates a queue with a length enough to store the first `count` elements. As more elements are
	   *  received, elements are taken from the front of the queue and produced on the result sequence. This causes elements to be delayed.
	   * @param count Number of elements to bypass at the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the source sequence elements except for the bypassed ones at the end.
	   */observableProto.skipLast=function(count){if(count<0){throw new ArgumentOutOfRangeError();}return new SkipLastObservable(this,count);};/**
	   *  Prepends a sequence of values to an observable sequence with an optional scheduler and an argument list of values to prepend.
	   *  @example
	   *  var res = source.startWith(1, 2, 3);
	   *  var res = source.startWith(Rx.Scheduler.timeout, 1, 2, 3);
	   * @param {Arguments} args The specified values to prepend to the observable sequence
	   * @returns {Observable} The source sequence prepended with the specified values.
	   */observableProto.startWith=function(){var values,scheduler,start=0;if(!!arguments.length&&isScheduler(arguments[0])){scheduler=arguments[0];start=1;}else{scheduler=immediateScheduler;}for(var args=[],i=start,len=arguments.length;i<len;i++){args.push(arguments[i]);}return observableConcat.apply(null,[observableFromArray(args,scheduler),this]);};var TakeLastObserver=function(__super__){inherits(TakeLastObserver,__super__);function TakeLastObserver(o,c){this._o=o;this._c=c;this._q=[];__super__.call(this);}TakeLastObserver.prototype.next=function(x){this._q.push(x);this._q.length>this._c&&this._q.shift();};TakeLastObserver.prototype.error=function(e){this._o.onError(e);};TakeLastObserver.prototype.completed=function(){while(this._q.length>0){this._o.onNext(this._q.shift());}this._o.onCompleted();};return TakeLastObserver;}(AbstractObserver);/**
	   *  Returns a specified number of contiguous elements from the end of an observable sequence.
	   * @description
	   *  This operator accumulates a buffer with a length enough to store elements count elements. Upon completion of
	   *  the source sequence, this buffer is drained on the result sequence. This causes the elements to be delayed.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing the specified number of elements from the end of the source sequence.
	   */observableProto.takeLast=function(count){if(count<0){throw new ArgumentOutOfRangeError();}var source=this;return new AnonymousObservable(function(o){return source.subscribe(new TakeLastObserver(o,count));},source);};var TakeLastBufferObserver=function(__super__){inherits(TakeLastBufferObserver,__super__);function TakeLastBufferObserver(o,c){this._o=o;this._c=c;this._q=[];__super__.call(this);}TakeLastBufferObserver.prototype.next=function(x){this._q.push(x);this._q.length>this._c&&this._q.shift();};TakeLastBufferObserver.prototype.error=function(e){this._o.onError(e);};TakeLastBufferObserver.prototype.completed=function(){this._o.onNext(this._q);this._o.onCompleted();};return TakeLastBufferObserver;}(AbstractObserver);/**
	   *  Returns an array with the specified number of contiguous elements from the end of an observable sequence.
	   *
	   * @description
	   *  This operator accumulates a buffer with a length enough to store count elements. Upon completion of the
	   *  source sequence, this buffer is produced on the result sequence.
	   * @param {Number} count Number of elements to take from the end of the source sequence.
	   * @returns {Observable} An observable sequence containing a single array with the specified number of elements from the end of the source sequence.
	   */observableProto.takeLastBuffer=function(count){if(count<0){throw new ArgumentOutOfRangeError();}var source=this;return new AnonymousObservable(function(o){return source.subscribe(new TakeLastBufferObserver(o,count));},source);};/**
	   *  Projects each element of an observable sequence into zero or more windows which are produced based on element count information.
	   * @param {Number} count Length of each window.
	   * @param {Number} [skip] Number of elements to skip between creation of consecutive windows. If not specified, defaults to the count.
	   * @returns {Observable} An observable sequence of windows.
	   */observableProto.windowWithCount=observableProto.windowCount=function(count,skip){var source=this;+count||(count=0);Math.abs(count)===Infinity&&(count=0);if(count<=0){throw new ArgumentOutOfRangeError();}skip==null&&(skip=count);+skip||(skip=0);Math.abs(skip)===Infinity&&(skip=0);if(skip<=0){throw new ArgumentOutOfRangeError();}return new AnonymousObservable(function(observer){var m=new SingleAssignmentDisposable(),refCountDisposable=new RefCountDisposable(m),n=0,q=[];function createWindow(){var s=new Subject();q.push(s);observer.onNext(addRef(s,refCountDisposable));}createWindow();m.setDisposable(source.subscribe(function(x){for(var i=0,len=q.length;i<len;i++){q[i].onNext(x);}var c=n-count+1;c>=0&&c%skip===0&&q.shift().onCompleted();++n%skip===0&&createWindow();},function(e){while(q.length>0){q.shift().onError(e);}observer.onError(e);},function(){while(q.length>0){q.shift().onCompleted();}observer.onCompleted();}));return refCountDisposable;},source);};function concatMap(source,selector,thisArg){var selectorFunc=bindCallback(selector,thisArg,3);return source.map(function(x,i){var result=selectorFunc(x,i,source);isPromise(result)&&(result=observableFromPromise(result));(isArrayLike(result)||isIterable(result))&&(result=observableFrom(result));return result;}).concatAll();}/**
	   *  One of the Following:
	   *  Projects each element of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
	   *
	   * @example
	   *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); });
	   *  Or:
	   *  Projects each element of an observable sequence to an observable sequence, invokes the result selector for the source element and each of the corresponding inner sequence's elements, and merges the results into one observable sequence.
	   *
	   *  var res = source.concatMap(function (x) { return Rx.Observable.range(0, x); }, function (x, y) { return x + y; });
	   *  Or:
	   *  Projects each element of the source observable sequence to the other observable sequence and merges the resulting observable sequences into one observable sequence.
	   *
	   *  var res = source.concatMap(Rx.Observable.fromArray([1,2,3]));
	   * @param {Function} selector A transform function to apply to each element or an observable sequence to project each element from the
	   * source sequence onto which could be either an observable or Promise.
	   * @param {Function} [resultSelector]  A transform function to apply to each element of the intermediate sequence.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function collectionSelector on each element of the input sequence and then mapping each of those sequence elements and their corresponding source element to a result element.
	   */observableProto.selectConcat=observableProto.concatMap=function(selector,resultSelector,thisArg){if(isFunction(selector)&&isFunction(resultSelector)){return this.concatMap(function(x,i){var selectorResult=selector(x,i);isPromise(selectorResult)&&(selectorResult=observableFromPromise(selectorResult));(isArrayLike(selectorResult)||isIterable(selectorResult))&&(selectorResult=observableFrom(selectorResult));return selectorResult.map(function(y,i2){return resultSelector(x,y,i,i2);});});}return isFunction(selector)?concatMap(this,selector,thisArg):concatMap(this,function(){return selector;});};/**
	   * Projects each notification of an observable sequence to an observable sequence and concats the resulting observable sequences into one observable sequence.
	   * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
	   * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
	   * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
	   * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
	   */observableProto.concatMapObserver=observableProto.selectConcatObserver=function(onNext,onError,onCompleted,thisArg){var source=this,onNextFunc=bindCallback(onNext,thisArg,2),onErrorFunc=bindCallback(onError,thisArg,1),onCompletedFunc=bindCallback(onCompleted,thisArg,0);return new AnonymousObservable(function(observer){var index=0;return source.subscribe(function(x){var result;try{result=onNextFunc(x,index++);}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);},function(err){var result;try{result=onErrorFunc(err);}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);observer.onCompleted();},function(){var result;try{result=onCompletedFunc();}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);observer.onCompleted();});},this).concatAll();};var DefaultIfEmptyObserver=function(__super__){inherits(DefaultIfEmptyObserver,__super__);function DefaultIfEmptyObserver(o,d){this._o=o;this._d=d;this._f=false;__super__.call(this);}DefaultIfEmptyObserver.prototype.next=function(x){this._f=true;this._o.onNext(x);};DefaultIfEmptyObserver.prototype.error=function(e){this._o.onError(e);};DefaultIfEmptyObserver.prototype.completed=function(){!this._f&&this._o.onNext(this._d);this._o.onCompleted();};return DefaultIfEmptyObserver;}(AbstractObserver);/**
	   *  Returns the elements of the specified sequence or the specified value in a singleton sequence if the sequence is empty.
	   *
	   *  var res = obs = xs.defaultIfEmpty();
	   *  2 - obs = xs.defaultIfEmpty(false);
	   *
	   * @memberOf Observable#
	   * @param defaultValue The value to return if the sequence is empty. If not provided, this defaults to null.
	   * @returns {Observable} An observable sequence that contains the specified default value if the source is empty; otherwise, the elements of the source itself.
	   */observableProto.defaultIfEmpty=function(defaultValue){var source=this;defaultValue===undefined&&(defaultValue=null);return new AnonymousObservable(function(o){return source.subscribe(new DefaultIfEmptyObserver(o,defaultValue));},source);};// Swap out for Array.findIndex
	function arrayIndexOfComparer(array,item,comparer){for(var i=0,len=array.length;i<len;i++){if(comparer(array[i],item)){return i;}}return-1;}function HashSet(comparer){this.comparer=comparer;this.set=[];}HashSet.prototype.push=function(value){var retValue=arrayIndexOfComparer(this.set,value,this.comparer)===-1;retValue&&this.set.push(value);return retValue;};var DistinctObservable=function(__super__){inherits(DistinctObservable,__super__);function DistinctObservable(source,keyFn,cmpFn){this.source=source;this._keyFn=keyFn;this._cmpFn=cmpFn;__super__.call(this);}DistinctObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new DistinctObserver(o,this._keyFn,this._cmpFn));};return DistinctObservable;}(ObservableBase);var DistinctObserver=function(__super__){inherits(DistinctObserver,__super__);function DistinctObserver(o,keyFn,cmpFn){this._o=o;this._keyFn=keyFn;this._h=new HashSet(cmpFn);__super__.call(this);}DistinctObserver.prototype.next=function(x){var key=x;if(isFunction(this._keyFn)){key=tryCatch(this._keyFn)(x);if(key===errorObj){return this._o.onError(key.e);}}this._h.push(key)&&this._o.onNext(x);};DistinctObserver.prototype.error=function(e){this._o.onError(e);};DistinctObserver.prototype.completed=function(){this._o.onCompleted();};return DistinctObserver;}(AbstractObserver);/**
	   *  Returns an observable sequence that contains only distinct elements according to the keySelector and the comparer.
	   *  Usage of this operator should be considered carefully due to the maintenance of an internal lookup structure which can grow large.
	   *
	   * @example
	   *  var res = obs = xs.distinct();
	   *  2 - obs = xs.distinct(function (x) { return x.id; });
	   *  2 - obs = xs.distinct(function (x) { return x.id; }, function (a,b) { return a === b; });
	   * @param {Function} [keySelector]  A function to compute the comparison key for each element.
	   * @param {Function} [comparer]  Used to compare items in the collection.
	   * @returns {Observable} An observable sequence only containing the distinct elements, based on a computed key value, from the source sequence.
	   */observableProto.distinct=function(keySelector,comparer){comparer||(comparer=defaultComparer);return new DistinctObservable(this,keySelector,comparer);};/**
	   *  Groups the elements of an observable sequence according to a specified key selector function and comparer and selects the resulting elements by using a specified function.
	   *
	   * @example
	   *  var res = observable.groupBy(function (x) { return x.id; });
	   *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; });
	   *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; }, function (x) { return x.toString(); });
	   * @param {Function} keySelector A function to extract the key for each element.
	   * @param {Function} [elementSelector]  A function to map each source element to an element in an observable group.
	   * @returns {Observable} A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
	   */observableProto.groupBy=function(keySelector,elementSelector){return this.groupByUntil(keySelector,elementSelector,observableNever);};/**
	     *  Groups the elements of an observable sequence according to a specified key selector function.
	     *  A duration selector function is used to control the lifetime of groups. When a group expires, it receives an OnCompleted notification. When a new element with the same
	     *  key value as a reclaimed group occurs, the group will be reborn with a new lifetime request.
	     *
	     * @example
	     *  var res = observable.groupByUntil(function (x) { return x.id; }, null,  function () { return Rx.Observable.never(); });
	     *  2 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); });
	     *  3 - observable.groupBy(function (x) { return x.id; }), function (x) { return x.name; },  function () { return Rx.Observable.never(); }, function (x) { return x.toString(); });
	     * @param {Function} keySelector A function to extract the key for each element.
	     * @param {Function} durationSelector A function to signal the expiration of a group.
	     * @returns {Observable}
	     *  A sequence of observable groups, each of which corresponds to a unique key value, containing all elements that share that same key value.
	     *  If a group's lifetime expires, a new group with the same key value can be created once an element with such a key value is encoutered.
	     *
	     */observableProto.groupByUntil=function(keySelector,elementSelector,durationSelector){var source=this;return new AnonymousObservable(function(o){var map=new Map(),groupDisposable=new CompositeDisposable(),refCountDisposable=new RefCountDisposable(groupDisposable),handleError=function handleError(e){return function(item){item.onError(e);};};groupDisposable.add(source.subscribe(function(x){var key=tryCatch(keySelector)(x);if(key===errorObj){map.forEach(handleError(key.e));return o.onError(key.e);}var fireNewMapEntry=false,writer=map.get(key);if(writer===undefined){writer=new Subject();map.set(key,writer);fireNewMapEntry=true;}if(fireNewMapEntry){var group=new GroupedObservable(key,writer,refCountDisposable),durationGroup=new GroupedObservable(key,writer);var duration=tryCatch(durationSelector)(durationGroup);if(duration===errorObj){map.forEach(handleError(duration.e));return o.onError(duration.e);}o.onNext(group);var md=new SingleAssignmentDisposable();groupDisposable.add(md);md.setDisposable(duration.take(1).subscribe(noop,function(e){map.forEach(handleError(e));o.onError(e);},function(){if(map['delete'](key)){writer.onCompleted();}groupDisposable.remove(md);}));}var element=x;if(isFunction(elementSelector)){element=tryCatch(elementSelector)(x);if(element===errorObj){map.forEach(handleError(element.e));return o.onError(element.e);}}writer.onNext(element);},function(e){map.forEach(handleError(e));o.onError(e);},function(){map.forEach(function(item){item.onCompleted();});o.onCompleted();}));return refCountDisposable;},source);};var MapObservable=function(__super__){inherits(MapObservable,__super__);function MapObservable(source,selector,thisArg){this.source=source;this.selector=bindCallback(selector,thisArg,3);__super__.call(this);}function innerMap(selector,self){return function(x,i,o){return selector.call(this,self.selector(x,i,o),i,o);};}MapObservable.prototype.internalMap=function(selector,thisArg){return new MapObservable(this.source,innerMap(selector,this),thisArg);};MapObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o,this.selector,this));};inherits(InnerObserver,AbstractObserver);function InnerObserver(o,selector,source){this.o=o;this.selector=selector;this.source=source;this.i=0;AbstractObserver.call(this);}InnerObserver.prototype.next=function(x){var result=tryCatch(this.selector)(x,this.i++,this.source);if(result===errorObj){return this.o.onError(result.e);}this.o.onNext(result);};InnerObserver.prototype.error=function(e){this.o.onError(e);};InnerObserver.prototype.completed=function(){this.o.onCompleted();};return MapObservable;}(ObservableBase);/**
	  * Projects each element of an observable sequence into a new form by incorporating the element's index.
	  * @param {Function} selector A transform function to apply to each source element; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence whose elements are the result of invoking the transform function on each element of source.
	  */observableProto.map=observableProto.select=function(selector,thisArg){var selectorFn=typeof selector==='function'?selector:function(){return selector;};return this instanceof MapObservable?this.internalMap(selectorFn,thisArg):new MapObservable(this,selectorFn,thisArg);};function plucker(args,len){return function mapper(x){var currentProp=x;for(var i=0;i<len;i++){var p=currentProp[args[i]];if(typeof p!=='undefined'){currentProp=p;}else{return undefined;}}return currentProp;};}/**
	   * Retrieves the value of a specified nested property from all elements in
	   * the Observable sequence.
	   * @param {Arguments} arguments The nested properties to pluck.
	   * @returns {Observable} Returns a new Observable sequence of property values.
	   */observableProto.pluck=function(){var len=arguments.length,args=new Array(len);if(len===0){throw new Error('List of properties cannot be empty.');}for(var i=0;i<len;i++){args[i]=arguments[i];}return this.map(plucker(args,len));};observableProto.flatMap=observableProto.selectMany=observableProto.mergeMap=function(selector,resultSelector,thisArg){return new FlatMapObservable(this,selector,resultSelector,thisArg).mergeAll();};/**
	   * Projects each notification of an observable sequence to an observable sequence and merges the resulting observable sequences into one observable sequence.
	   * @param {Function} onNext A transform function to apply to each element; the second parameter of the function represents the index of the source element.
	   * @param {Function} onError A transform function to apply when an error occurs in the source sequence.
	   * @param {Function} onCompleted A transform function to apply when the end of the source sequence is reached.
	   * @param {Any} [thisArg] An optional "this" to use to invoke each transform.
	   * @returns {Observable} An observable sequence whose elements are the result of invoking the one-to-many transform function corresponding to each notification in the input sequence.
	   */observableProto.flatMapObserver=observableProto.selectManyObserver=function(onNext,onError,onCompleted,thisArg){var source=this;return new AnonymousObservable(function(observer){var index=0;return source.subscribe(function(x){var result;try{result=onNext.call(thisArg,x,index++);}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);},function(err){var result;try{result=onError.call(thisArg,err);}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);observer.onCompleted();},function(){var result;try{result=onCompleted.call(thisArg);}catch(e){observer.onError(e);return;}isPromise(result)&&(result=observableFromPromise(result));observer.onNext(result);observer.onCompleted();});},source).mergeAll();};observableProto.flatMapLatest=observableProto.switchMap=function(selector,resultSelector,thisArg){return new FlatMapObservable(this,selector,resultSelector,thisArg).switchLatest();};var SkipObservable=function(__super__){inherits(SkipObservable,__super__);function SkipObservable(source,count){this.source=source;this._count=count;__super__.call(this);}SkipObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SkipObserver(o,this._count));};function SkipObserver(o,c){this._o=o;this._r=c;AbstractObserver.call(this);}inherits(SkipObserver,AbstractObserver);SkipObserver.prototype.next=function(x){if(this._r<=0){this._o.onNext(x);}else{this._r--;}};SkipObserver.prototype.error=function(e){this._o.onError(e);};SkipObserver.prototype.completed=function(){this._o.onCompleted();};return SkipObservable;}(ObservableBase);/**
	   * Bypasses a specified number of elements in an observable sequence and then returns the remaining elements.
	   * @param {Number} count The number of elements to skip before returning the remaining elements.
	   * @returns {Observable} An observable sequence that contains the elements that occur after the specified index in the input sequence.
	   */observableProto.skip=function(count){if(count<0){throw new ArgumentOutOfRangeError();}return new SkipObservable(this,count);};var SkipWhileObservable=function(__super__){inherits(SkipWhileObservable,__super__);function SkipWhileObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}SkipWhileObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SkipWhileObserver(o,this));};return SkipWhileObservable;}(ObservableBase);var SkipWhileObserver=function(__super__){inherits(SkipWhileObserver,__super__);function SkipWhileObserver(o,p){this._o=o;this._p=p;this._i=0;this._r=false;__super__.call(this);}SkipWhileObserver.prototype.next=function(x){if(!this._r){var res=tryCatch(this._p._fn)(x,this._i++,this._p);if(res===errorObj){return this._o.onError(res.e);}this._r=!res;}this._r&&this._o.onNext(x);};SkipWhileObserver.prototype.error=function(e){this._o.onError(e);};SkipWhileObserver.prototype.completed=function(){this._o.onCompleted();};return SkipWhileObserver;}(AbstractObserver);/**
	   *  Bypasses elements in an observable sequence as long as a specified condition is true and then returns the remaining elements.
	   *  The element's index is used in the logic of the predicate function.
	   *
	   *  var res = source.skipWhile(function (value) { return value < 10; });
	   *  var res = source.skipWhile(function (value, index) { return value < 10 || index < 10; });
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence starting at the first element in the linear series that does not pass the test specified by predicate.
	   */observableProto.skipWhile=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return new SkipWhileObservable(this,fn);};var TakeObservable=function(__super__){inherits(TakeObservable,__super__);function TakeObservable(source,count){this.source=source;this._count=count;__super__.call(this);}TakeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new TakeObserver(o,this._count));};function TakeObserver(o,c){this._o=o;this._c=c;this._r=c;AbstractObserver.call(this);}inherits(TakeObserver,AbstractObserver);TakeObserver.prototype.next=function(x){if(this._r-->0){this._o.onNext(x);this._r<=0&&this._o.onCompleted();}};TakeObserver.prototype.error=function(e){this._o.onError(e);};TakeObserver.prototype.completed=function(){this._o.onCompleted();};return TakeObservable;}(ObservableBase);/**
	   *  Returns a specified number of contiguous elements from the start of an observable sequence, using the specified scheduler for the edge case of take(0).
	   * @param {Number} count The number of elements to return.
	   * @param {Scheduler} [scheduler] Scheduler used to produce an OnCompleted message in case <paramref name="count count</paramref> is set to 0.
	   * @returns {Observable} An observable sequence that contains the specified number of elements from the start of the input sequence.
	   */observableProto.take=function(count,scheduler){if(count<0){throw new ArgumentOutOfRangeError();}if(count===0){return observableEmpty(scheduler);}return new TakeObservable(this,count);};var TakeWhileObservable=function(__super__){inherits(TakeWhileObservable,__super__);function TakeWhileObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}TakeWhileObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new TakeWhileObserver(o,this));};return TakeWhileObservable;}(ObservableBase);var TakeWhileObserver=function(__super__){inherits(TakeWhileObserver,__super__);function TakeWhileObserver(o,p){this._o=o;this._p=p;this._i=0;this._r=true;__super__.call(this);}TakeWhileObserver.prototype.next=function(x){if(this._r){this._r=tryCatch(this._p._fn)(x,this._i++,this._p);if(this._r===errorObj){return this._o.onError(this._r.e);}}if(this._r){this._o.onNext(x);}else{this._o.onCompleted();}};TakeWhileObserver.prototype.error=function(e){this._o.onError(e);};TakeWhileObserver.prototype.completed=function(){this._o.onCompleted();};return TakeWhileObserver;}(AbstractObserver);/**
	   *  Returns elements from an observable sequence as long as a specified condition is true.
	   *  The element's index is used in the logic of the predicate function.
	   * @param {Function} predicate A function to test each element for a condition; the second parameter of the function represents the index of the source element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence that contains the elements from the input sequence that occur before the element at which the test no longer passes.
	   */observableProto.takeWhile=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return new TakeWhileObservable(this,fn);};var FilterObservable=function(__super__){inherits(FilterObservable,__super__);function FilterObservable(source,predicate,thisArg){this.source=source;this.predicate=bindCallback(predicate,thisArg,3);__super__.call(this);}FilterObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new InnerObserver(o,this.predicate,this));};function innerPredicate(predicate,self){return function(x,i,o){return self.predicate(x,i,o)&&predicate.call(this,x,i,o);};}FilterObservable.prototype.internalFilter=function(predicate,thisArg){return new FilterObservable(this.source,innerPredicate(predicate,this),thisArg);};inherits(InnerObserver,AbstractObserver);function InnerObserver(o,predicate,source){this.o=o;this.predicate=predicate;this.source=source;this.i=0;AbstractObserver.call(this);}InnerObserver.prototype.next=function(x){var shouldYield=tryCatch(this.predicate)(x,this.i++,this.source);if(shouldYield===errorObj){return this.o.onError(shouldYield.e);}shouldYield&&this.o.onNext(x);};InnerObserver.prototype.error=function(e){this.o.onError(e);};InnerObserver.prototype.completed=function(){this.o.onCompleted();};return FilterObservable;}(ObservableBase);/**
	  *  Filters the elements of an observable sequence based on a predicate by incorporating the element's index.
	  * @param {Function} predicate A function to test each source element for a condition; the second parameter of the function represents the index of the source element.
	  * @param {Any} [thisArg] Object to use as this when executing callback.
	  * @returns {Observable} An observable sequence that contains elements from the input sequence that satisfy the condition.
	  */observableProto.filter=observableProto.where=function(predicate,thisArg){return this instanceof FilterObservable?this.internalFilter(predicate,thisArg):new FilterObservable(this,predicate,thisArg);};var ExtremaByObservable=function(__super__){inherits(ExtremaByObservable,__super__);function ExtremaByObservable(source,k,c){this.source=source;this._k=k;this._c=c;__super__.call(this);}ExtremaByObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ExtremaByObserver(o,this._k,this._c));};return ExtremaByObservable;}(ObservableBase);var ExtremaByObserver=function(__super__){inherits(ExtremaByObserver,__super__);function ExtremaByObserver(o,k,c){this._o=o;this._k=k;this._c=c;this._v=null;this._hv=false;this._l=[];__super__.call(this);}ExtremaByObserver.prototype.next=function(x){var key=tryCatch(this._k)(x);if(key===errorObj){return this._o.onError(key.e);}var comparison=0;if(!this._hv){this._hv=true;this._v=key;}else{comparison=tryCatch(this._c)(key,this._v);if(comparison===errorObj){return this._o.onError(comparison.e);}}if(comparison>0){this._v=key;this._l=[];}if(comparison>=0){this._l.push(x);}};ExtremaByObserver.prototype.error=function(e){this._o.onError(e);};ExtremaByObserver.prototype.completed=function(){this._o.onNext(this._l);this._o.onCompleted();};return ExtremaByObserver;}(AbstractObserver);function firstOnly(x){if(x.length===0){throw new EmptyError();}return x[0];}var ReduceObservable=function(__super__){inherits(ReduceObservable,__super__);function ReduceObservable(source,accumulator,hasSeed,seed){this.source=source;this.accumulator=accumulator;this.hasSeed=hasSeed;this.seed=seed;__super__.call(this);}ReduceObservable.prototype.subscribeCore=function(observer){return this.source.subscribe(new ReduceObserver(observer,this));};return ReduceObservable;}(ObservableBase);var ReduceObserver=function(__super__){inherits(ReduceObserver,__super__);function ReduceObserver(o,parent){this._o=o;this._p=parent;this._fn=parent.accumulator;this._hs=parent.hasSeed;this._s=parent.seed;this._ha=false;this._a=null;this._hv=false;this._i=0;__super__.call(this);}ReduceObserver.prototype.next=function(x){!this._hv&&(this._hv=true);if(this._ha){this._a=tryCatch(this._fn)(this._a,x,this._i,this._p);}else{this._a=this._hs?tryCatch(this._fn)(this._s,x,this._i,this._p):x;this._ha=true;}if(this._a===errorObj){return this._o.onError(this._a.e);}this._i++;};ReduceObserver.prototype.error=function(e){this._o.onError(e);};ReduceObserver.prototype.completed=function(){this._hv&&this._o.onNext(this._a);!this._hv&&this._hs&&this._o.onNext(this._s);!this._hv&&!this._hs&&this._o.onError(new EmptyError());this._o.onCompleted();};return ReduceObserver;}(AbstractObserver);/**
	  * Applies an accumulator function over an observable sequence, returning the result of the aggregation as a single element in the result sequence. The specified seed value is used as the initial accumulator value.
	  * For aggregation behavior with incremental intermediate results, see Observable.scan.
	  * @param {Function} accumulator An accumulator function to be invoked on each element.
	  * @param {Any} [seed] The initial accumulator value.
	  * @returns {Observable} An observable sequence containing a single element with the final accumulator value.
	  */observableProto.reduce=function(){var hasSeed=false,seed,accumulator=arguments[0];if(arguments.length===2){hasSeed=true;seed=arguments[1];}return new ReduceObservable(this,accumulator,hasSeed,seed);};var SomeObservable=function(__super__){inherits(SomeObservable,__super__);function SomeObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}SomeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SomeObserver(o,this._fn,this.source));};return SomeObservable;}(ObservableBase);var SomeObserver=function(__super__){inherits(SomeObserver,__super__);function SomeObserver(o,fn,s){this._o=o;this._fn=fn;this._s=s;this._i=0;__super__.call(this);}SomeObserver.prototype.next=function(x){var result=tryCatch(this._fn)(x,this._i++,this._s);if(result===errorObj){return this._o.onError(result.e);}if(Boolean(result)){this._o.onNext(true);this._o.onCompleted();}};SomeObserver.prototype.error=function(e){this._o.onError(e);};SomeObserver.prototype.completed=function(){this._o.onNext(false);this._o.onCompleted();};return SomeObserver;}(AbstractObserver);/**
	   * Determines whether any element of an observable sequence satisfies a condition if present, else if any items are in the sequence.
	   * @param {Function} [predicate] A function to test each element for a condition.
	   * @returns {Observable} An observable sequence containing a single element determining whether any elements in the source sequence pass the test in the specified predicate if given, else if any items are in the sequence.
	   */observableProto.some=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return new SomeObservable(this,fn);};var IsEmptyObservable=function(__super__){inherits(IsEmptyObservable,__super__);function IsEmptyObservable(source){this.source=source;__super__.call(this);}IsEmptyObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new IsEmptyObserver(o));};return IsEmptyObservable;}(ObservableBase);var IsEmptyObserver=function(__super__){inherits(IsEmptyObserver,__super__);function IsEmptyObserver(o){this._o=o;__super__.call(this);}IsEmptyObserver.prototype.next=function(){this._o.onNext(false);this._o.onCompleted();};IsEmptyObserver.prototype.error=function(e){this._o.onError(e);};IsEmptyObserver.prototype.completed=function(){this._o.onNext(true);this._o.onCompleted();};return IsEmptyObserver;}(AbstractObserver);/**
	   * Determines whether an observable sequence is empty.
	   * @returns {Observable} An observable sequence containing a single element determining whether the source sequence is empty.
	   */observableProto.isEmpty=function(){return new IsEmptyObservable(this);};var EveryObservable=function(__super__){inherits(EveryObservable,__super__);function EveryObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}EveryObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new EveryObserver(o,this._fn,this.source));};return EveryObservable;}(ObservableBase);var EveryObserver=function(__super__){inherits(EveryObserver,__super__);function EveryObserver(o,fn,s){this._o=o;this._fn=fn;this._s=s;this._i=0;__super__.call(this);}EveryObserver.prototype.next=function(x){var result=tryCatch(this._fn)(x,this._i++,this._s);if(result===errorObj){return this._o.onError(result.e);}if(!Boolean(result)){this._o.onNext(false);this._o.onCompleted();}};EveryObserver.prototype.error=function(e){this._o.onError(e);};EveryObserver.prototype.completed=function(){this._o.onNext(true);this._o.onCompleted();};return EveryObserver;}(AbstractObserver);/**
	   * Determines whether all elements of an observable sequence satisfy a condition.
	   * @param {Function} [predicate] A function to test each element for a condition.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element determining whether all elements in the source sequence pass the test in the specified predicate.
	   */observableProto.every=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return new EveryObservable(this,fn);};var IncludesObservable=function(__super__){inherits(IncludesObservable,__super__);function IncludesObservable(source,elem,idx){var n=+idx||0;Math.abs(n)===Infinity&&(n=0);this.source=source;this._elem=elem;this._n=n;__super__.call(this);}IncludesObservable.prototype.subscribeCore=function(o){if(this._n<0){o.onNext(false);o.onCompleted();return disposableEmpty;}return this.source.subscribe(new IncludesObserver(o,this._elem,this._n));};return IncludesObservable;}(ObservableBase);var IncludesObserver=function(__super__){inherits(IncludesObserver,__super__);function IncludesObserver(o,elem,n){this._o=o;this._elem=elem;this._n=n;this._i=0;__super__.call(this);}function comparer(a,b){return a===0&&b===0||a===b||isNaN(a)&&isNaN(b);}IncludesObserver.prototype.next=function(x){if(this._i++>=this._n&&comparer(x,this._elem)){this._o.onNext(true);this._o.onCompleted();}};IncludesObserver.prototype.error=function(e){this._o.onError(e);};IncludesObserver.prototype.completed=function(){this._o.onNext(false);this._o.onCompleted();};return IncludesObserver;}(AbstractObserver);/**
	   * Determines whether an observable sequence includes a specified element with an optional equality comparer.
	   * @param searchElement The value to locate in the source sequence.
	   * @param {Number} [fromIndex] An equality comparer to compare elements.
	   * @returns {Observable} An observable sequence containing a single element determining whether the source sequence includes an element that has the specified value from the given index.
	   */observableProto.includes=function(searchElement,fromIndex){return new IncludesObservable(this,searchElement,fromIndex);};var CountObservable=function(__super__){inherits(CountObservable,__super__);function CountObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}CountObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new CountObserver(o,this._fn,this.source));};return CountObservable;}(ObservableBase);var CountObserver=function(__super__){inherits(CountObserver,__super__);function CountObserver(o,fn,s){this._o=o;this._fn=fn;this._s=s;this._i=0;this._c=0;__super__.call(this);}CountObserver.prototype.next=function(x){if(this._fn){var result=tryCatch(this._fn)(x,this._i++,this._s);if(result===errorObj){return this._o.onError(result.e);}Boolean(result)&&this._c++;}else{this._c++;}};CountObserver.prototype.error=function(e){this._o.onError(e);};CountObserver.prototype.completed=function(){this._o.onNext(this._c);this._o.onCompleted();};return CountObserver;}(AbstractObserver);/**
	   * Returns an observable sequence containing a value that represents how many elements in the specified observable sequence satisfy a condition if provided, else the count of items.
	   * @example
	   * res = source.count();
	   * res = source.count(function (x) { return x > 3; });
	   * @param {Function} [predicate]A function to test each element for a condition.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with a number that represents how many elements in the input sequence satisfy the condition in the predicate function if provided, else the count of items in the sequence.
	   */observableProto.count=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return new CountObservable(this,fn);};var IndexOfObservable=function(__super__){inherits(IndexOfObservable,__super__);function IndexOfObservable(source,e,n){this.source=source;this._e=e;this._n=n;__super__.call(this);}IndexOfObservable.prototype.subscribeCore=function(o){if(this._n<0){o.onNext(-1);o.onCompleted();return disposableEmpty;}return this.source.subscribe(new IndexOfObserver(o,this._e,this._n));};return IndexOfObservable;}(ObservableBase);var IndexOfObserver=function(__super__){inherits(IndexOfObserver,__super__);function IndexOfObserver(o,e,n){this._o=o;this._e=e;this._n=n;this._i=0;__super__.call(this);}IndexOfObserver.prototype.next=function(x){if(this._i>=this._n&&x===this._e){this._o.onNext(this._i);this._o.onCompleted();}this._i++;};IndexOfObserver.prototype.error=function(e){this._o.onError(e);};IndexOfObserver.prototype.completed=function(){this._o.onNext(-1);this._o.onCompleted();};return IndexOfObserver;}(AbstractObserver);/**
	   * Returns the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   * @param {Any} searchElement Element to locate in the array.
	   * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
	   * @returns {Observable} And observable sequence containing the first index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   */observableProto.indexOf=function(searchElement,fromIndex){var n=+fromIndex||0;Math.abs(n)===Infinity&&(n=0);return new IndexOfObservable(this,searchElement,n);};var SumObservable=function(__super__){inherits(SumObservable,__super__);function SumObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}SumObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SumObserver(o,this._fn,this.source));};return SumObservable;}(ObservableBase);var SumObserver=function(__super__){inherits(SumObserver,__super__);function SumObserver(o,fn,s){this._o=o;this._fn=fn;this._s=s;this._i=0;this._c=0;__super__.call(this);}SumObserver.prototype.next=function(x){if(this._fn){var result=tryCatch(this._fn)(x,this._i++,this._s);if(result===errorObj){return this._o.onError(result.e);}this._c+=result;}else{this._c+=x;}};SumObserver.prototype.error=function(e){this._o.onError(e);};SumObserver.prototype.completed=function(){this._o.onNext(this._c);this._o.onCompleted();};return SumObserver;}(AbstractObserver);/**
	   * Computes the sum of a sequence of values that are obtained by invoking an optional transform function on each element of the input sequence, else if not specified computes the sum on each item in the sequence.
	   * @param {Function} [selector] A transform function to apply to each element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with the sum of the values in the source sequence.
	   */observableProto.sum=function(keySelector,thisArg){var fn=bindCallback(keySelector,thisArg,3);return new SumObservable(this,fn);};/**
	   * Returns the elements in an observable sequence with the minimum key value according to the specified comparer.
	   * @example
	   * var res = source.minBy(function (x) { return x.value; });
	   * var res = source.minBy(function (x) { return x.value; }, function (x, y) { return x - y; });
	   * @param {Function} keySelector Key selector function.
	   * @param {Function} [comparer] Comparer used to compare key values.
	   * @returns {Observable} An observable sequence containing a list of zero or more elements that have a minimum key value.
	   */observableProto.minBy=function(keySelector,comparer){comparer||(comparer=defaultSubComparer);return new ExtremaByObservable(this,keySelector,function(x,y){return comparer(x,y)*-1;});};/**
	   * Returns the minimum element in an observable sequence according to the optional comparer else a default greater than less than check.
	   * @example
	   * var res = source.min();
	   * var res = source.min(function (x, y) { return x.value - y.value; });
	   * @param {Function} [comparer] Comparer used to compare elements.
	   * @returns {Observable} An observable sequence containing a single element with the minimum element in the source sequence.
	   */observableProto.min=function(comparer){return this.minBy(identity,comparer).map(firstOnly);};/**
	   * Returns the elements in an observable sequence with the maximum  key value according to the specified comparer.
	   * @example
	   * var res = source.maxBy(function (x) { return x.value; });
	   * var res = source.maxBy(function (x) { return x.value; }, function (x, y) { return x - y;; });
	   * @param {Function} keySelector Key selector function.
	   * @param {Function} [comparer]  Comparer used to compare key values.
	   * @returns {Observable} An observable sequence containing a list of zero or more elements that have a maximum key value.
	   */observableProto.maxBy=function(keySelector,comparer){comparer||(comparer=defaultSubComparer);return new ExtremaByObservable(this,keySelector,comparer);};/**
	   * Returns the maximum value in an observable sequence according to the specified comparer.
	   * @example
	   * var res = source.max();
	   * var res = source.max(function (x, y) { return x.value - y.value; });
	   * @param {Function} [comparer] Comparer used to compare elements.
	   * @returns {Observable} An observable sequence containing a single element with the maximum element in the source sequence.
	   */observableProto.max=function(comparer){return this.maxBy(identity,comparer).map(firstOnly);};var AverageObservable=function(__super__){inherits(AverageObservable,__super__);function AverageObservable(source,fn){this.source=source;this._fn=fn;__super__.call(this);}AverageObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new AverageObserver(o,this._fn,this.source));};return AverageObservable;}(ObservableBase);var AverageObserver=function(__super__){inherits(AverageObserver,__super__);function AverageObserver(o,fn,s){this._o=o;this._fn=fn;this._s=s;this._c=0;this._t=0;__super__.call(this);}AverageObserver.prototype.next=function(x){if(this._fn){var r=tryCatch(this._fn)(x,this._c++,this._s);if(r===errorObj){return this._o.onError(r.e);}this._t+=r;}else{this._c++;this._t+=x;}};AverageObserver.prototype.error=function(e){this._o.onError(e);};AverageObserver.prototype.completed=function(){if(this._c===0){return this._o.onError(new EmptyError());}this._o.onNext(this._t/this._c);this._o.onCompleted();};return AverageObserver;}(AbstractObserver);/**
	   * Computes the average of an observable sequence of values that are in the sequence or obtained by invoking a transform function on each element of the input sequence if present.
	   * @param {Function} [selector] A transform function to apply to each element.
	   * @param {Any} [thisArg] Object to use as this when executing callback.
	   * @returns {Observable} An observable sequence containing a single element with the average of the sequence of values.
	   */observableProto.average=function(keySelector,thisArg){var source=this,fn;if(isFunction(keySelector)){fn=bindCallback(keySelector,thisArg,3);}return new AverageObservable(source,fn);};/**
	   *  Determines whether two sequences are equal by comparing the elements pairwise using a specified equality comparer.
	   *
	   * @example
	   * var res = res = source.sequenceEqual([1,2,3]);
	   * var res = res = source.sequenceEqual([{ value: 42 }], function (x, y) { return x.value === y.value; });
	   * 3 - res = source.sequenceEqual(Rx.Observable.returnValue(42));
	   * 4 - res = source.sequenceEqual(Rx.Observable.returnValue({ value: 42 }), function (x, y) { return x.value === y.value; });
	   * @param {Observable} second Second observable sequence or array to compare.
	   * @param {Function} [comparer] Comparer used to compare elements of both sequences.
	   * @returns {Observable} An observable sequence that contains a single element which indicates whether both sequences are of equal length and their corresponding elements are equal according to the specified equality comparer.
	   */observableProto.sequenceEqual=function(second,comparer){var first=this;comparer||(comparer=defaultComparer);return new AnonymousObservable(function(o){var donel=false,doner=false,ql=[],qr=[];var subscription1=first.subscribe(function(x){if(qr.length>0){var v=qr.shift();var equal=tryCatch(comparer)(v,x);if(equal===errorObj){return o.onError(equal.e);}if(!equal){o.onNext(false);o.onCompleted();}}else if(doner){o.onNext(false);o.onCompleted();}else{ql.push(x);}},function(e){o.onError(e);},function(){donel=true;if(ql.length===0){if(qr.length>0){o.onNext(false);o.onCompleted();}else if(doner){o.onNext(true);o.onCompleted();}}});(isArrayLike(second)||isIterable(second))&&(second=observableFrom(second));isPromise(second)&&(second=observableFromPromise(second));var subscription2=second.subscribe(function(x){if(ql.length>0){var v=ql.shift();var equal=tryCatch(comparer)(v,x);if(equal===errorObj){return o.onError(equal.e);}if(!equal){o.onNext(false);o.onCompleted();}}else if(donel){o.onNext(false);o.onCompleted();}else{qr.push(x);}},function(e){o.onError(e);},function(){doner=true;if(qr.length===0){if(ql.length>0){o.onNext(false);o.onCompleted();}else if(donel){o.onNext(true);o.onCompleted();}}});return new BinaryDisposable(subscription1,subscription2);},first);};var ElementAtObservable=function(__super__){inherits(ElementAtObservable,__super__);function ElementAtObservable(source,i,d){this.source=source;this._i=i;this._d=d;__super__.call(this);}ElementAtObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ElementAtObserver(o,this._i,this._d));};return ElementAtObservable;}(ObservableBase);var ElementAtObserver=function(__super__){inherits(ElementAtObserver,__super__);function ElementAtObserver(o,i,d){this._o=o;this._i=i;this._d=d;__super__.call(this);}ElementAtObserver.prototype.next=function(x){if(this._i--===0){this._o.onNext(x);this._o.onCompleted();}};ElementAtObserver.prototype.error=function(e){this._o.onError(e);};ElementAtObserver.prototype.completed=function(){if(this._d===undefined){this._o.onError(new ArgumentOutOfRangeError());}else{this._o.onNext(this._d);this._o.onCompleted();}};return ElementAtObserver;}(AbstractObserver);/**
	   * Returns the element at a specified index in a sequence or default value if not found.
	   * @param {Number} index The zero-based index of the element to retrieve.
	   * @param {Any} [defaultValue] The default value to use if elementAt does not find a value.
	   * @returns {Observable} An observable sequence that produces the element at the specified position in the source sequence.
	   */observableProto.elementAt=function(index,defaultValue){if(index<0){throw new ArgumentOutOfRangeError();}return new ElementAtObservable(this,index,defaultValue);};var SingleObserver=function(__super__){inherits(SingleObserver,__super__);function SingleObserver(o,obj,s){this._o=o;this._obj=obj;this._s=s;this._i=0;this._hv=false;this._v=null;__super__.call(this);}SingleObserver.prototype.next=function(x){var shouldYield=false;if(this._obj.predicate){var res=tryCatch(this._obj.predicate)(x,this._i++,this._s);if(res===errorObj){return this._o.onError(res.e);}Boolean(res)&&(shouldYield=true);}else if(!this._obj.predicate){shouldYield=true;}if(shouldYield){if(this._hv){return this._o.onError(new Error('Sequence contains more than one matching element'));}this._hv=true;this._v=x;}};SingleObserver.prototype.error=function(e){this._o.onError(e);};SingleObserver.prototype.completed=function(){if(this._hv){this._o.onNext(this._v);this._o.onCompleted();}else if(this._obj.defaultValue===undefined){this._o.onError(new EmptyError());}else{this._o.onNext(this._obj.defaultValue);this._o.onCompleted();}};return SingleObserver;}(AbstractObserver);/**
	     * Returns the only element of an observable sequence that satisfies the condition in the optional predicate, and reports an exception if there is not exactly one element in the observable sequence.
	     * @returns {Observable} Sequence containing the single element in the observable sequence that satisfies the condition in the predicate.
	     */observableProto.single=function(predicate,thisArg){var obj={},source=this;if(_typeof(arguments[0])==='object'){obj=arguments[0];}else{obj={predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]};}if(isFunction(obj.predicate)){var fn=obj.predicate;obj.predicate=bindCallback(fn,obj.thisArg,3);}return new AnonymousObservable(function(o){return source.subscribe(new SingleObserver(o,obj,source));},source);};var FirstObservable=function(__super__){inherits(FirstObservable,__super__);function FirstObservable(source,obj){this.source=source;this._obj=obj;__super__.call(this);}FirstObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new FirstObserver(o,this._obj,this.source));};return FirstObservable;}(ObservableBase);var FirstObserver=function(__super__){inherits(FirstObserver,__super__);function FirstObserver(o,obj,s){this._o=o;this._obj=obj;this._s=s;this._i=0;__super__.call(this);}FirstObserver.prototype.next=function(x){if(this._obj.predicate){var res=tryCatch(this._obj.predicate)(x,this._i++,this._s);if(res===errorObj){return this._o.onError(res.e);}if(Boolean(res)){this._o.onNext(x);this._o.onCompleted();}}else if(!this._obj.predicate){this._o.onNext(x);this._o.onCompleted();}};FirstObserver.prototype.error=function(e){this._o.onError(e);};FirstObserver.prototype.completed=function(){if(this._obj.defaultValue===undefined){this._o.onError(new EmptyError());}else{this._o.onNext(this._obj.defaultValue);this._o.onCompleted();}};return FirstObserver;}(AbstractObserver);/**
	   * Returns the first element of an observable sequence that satisfies the condition in the predicate if present else the first item in the sequence.
	   * @returns {Observable} Sequence containing the first element in the observable sequence that satisfies the condition in the predicate if provided, else the first item in the sequence.
	   */observableProto.first=function(){var obj={},source=this;if(_typeof(arguments[0])==='object'){obj=arguments[0];}else{obj={predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]};}if(isFunction(obj.predicate)){var fn=obj.predicate;obj.predicate=bindCallback(fn,obj.thisArg,3);}return new FirstObservable(this,obj);};var LastObservable=function(__super__){inherits(LastObservable,__super__);function LastObservable(source,obj){this.source=source;this._obj=obj;__super__.call(this);}LastObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new LastObserver(o,this._obj,this.source));};return LastObservable;}(ObservableBase);var LastObserver=function(__super__){inherits(LastObserver,__super__);function LastObserver(o,obj,s){this._o=o;this._obj=obj;this._s=s;this._i=0;this._hv=false;this._v=null;__super__.call(this);}LastObserver.prototype.next=function(x){var shouldYield=false;if(this._obj.predicate){var res=tryCatch(this._obj.predicate)(x,this._i++,this._s);if(res===errorObj){return this._o.onError(res.e);}Boolean(res)&&(shouldYield=true);}else if(!this._obj.predicate){shouldYield=true;}if(shouldYield){this._hv=true;this._v=x;}};LastObserver.prototype.error=function(e){this._o.onError(e);};LastObserver.prototype.completed=function(){if(this._hv){this._o.onNext(this._v);this._o.onCompleted();}else if(this._obj.defaultValue===undefined){this._o.onError(new EmptyError());}else{this._o.onNext(this._obj.defaultValue);this._o.onCompleted();}};return LastObserver;}(AbstractObserver);/**
	   * Returns the last element of an observable sequence that satisfies the condition in the predicate if specified, else the last element.
	   * @returns {Observable} Sequence containing the last element in the observable sequence that satisfies the condition in the predicate.
	   */observableProto.last=function(){var obj={},source=this;if(_typeof(arguments[0])==='object'){obj=arguments[0];}else{obj={predicate:arguments[0],thisArg:arguments[1],defaultValue:arguments[2]};}if(isFunction(obj.predicate)){var fn=obj.predicate;obj.predicate=bindCallback(fn,obj.thisArg,3);}return new LastObservable(this,obj);};var FindValueObserver=function(__super__){inherits(FindValueObserver,__super__);function FindValueObserver(observer,source,callback,yieldIndex){this._o=observer;this._s=source;this._cb=callback;this._y=yieldIndex;this._i=0;__super__.call(this);}FindValueObserver.prototype.next=function(x){var shouldRun=tryCatch(this._cb)(x,this._i,this._s);if(shouldRun===errorObj){return this._o.onError(shouldRun.e);}if(shouldRun){this._o.onNext(this._y?this._i:x);this._o.onCompleted();}else{this._i++;}};FindValueObserver.prototype.error=function(e){this._o.onError(e);};FindValueObserver.prototype.completed=function(){this._y&&this._o.onNext(-1);this._o.onCompleted();};return FindValueObserver;}(AbstractObserver);function findValue(source,predicate,thisArg,yieldIndex){var callback=bindCallback(predicate,thisArg,3);return new AnonymousObservable(function(o){return source.subscribe(new FindValueObserver(o,source,callback,yieldIndex));},source);}/**
	   * Searches for an element that matches the conditions defined by the specified predicate, and returns the first occurrence within the entire Observable sequence.
	   * @param {Function} predicate The predicate that defines the conditions of the element to search for.
	   * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
	   * @returns {Observable} An Observable sequence with the first element that matches the conditions defined by the specified predicate, if found; otherwise, undefined.
	   */observableProto.find=function(predicate,thisArg){return findValue(this,predicate,thisArg,false);};/**
	   * Searches for an element that matches the conditions defined by the specified predicate, and returns
	   * an Observable sequence with the zero-based index of the first occurrence within the entire Observable sequence.
	   * @param {Function} predicate The predicate that defines the conditions of the element to search for.
	   * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
	   * @returns {Observable} An Observable sequence with the zero-based index of the first occurrence of an element that matches the conditions defined by match, if found; otherwise, –1.
	  */observableProto.findIndex=function(predicate,thisArg){return findValue(this,predicate,thisArg,true);};var ToSetObservable=function(__super__){inherits(ToSetObservable,__super__);function ToSetObservable(source){this.source=source;__super__.call(this);}ToSetObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ToSetObserver(o));};return ToSetObservable;}(ObservableBase);var ToSetObserver=function(__super__){inherits(ToSetObserver,__super__);function ToSetObserver(o){this._o=o;this._s=new root.Set();__super__.call(this);}ToSetObserver.prototype.next=function(x){this._s.add(x);};ToSetObserver.prototype.error=function(e){this._o.onError(e);};ToSetObserver.prototype.completed=function(){this._o.onNext(this._s);this._o.onCompleted();};return ToSetObserver;}(AbstractObserver);/**
	   * Converts the observable sequence to a Set if it exists.
	   * @returns {Observable} An observable sequence with a single value of a Set containing the values from the observable sequence.
	   */observableProto.toSet=function(){if(typeof root.Set==='undefined'){throw new TypeError();}return new ToSetObservable(this);};var ToMapObservable=function(__super__){inherits(ToMapObservable,__super__);function ToMapObservable(source,k,e){this.source=source;this._k=k;this._e=e;__super__.call(this);}ToMapObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new ToMapObserver(o,this._k,this._e));};return ToMapObservable;}(ObservableBase);var ToMapObserver=function(__super__){inherits(ToMapObserver,__super__);function ToMapObserver(o,k,e){this._o=o;this._k=k;this._e=e;this._m=new root.Map();__super__.call(this);}ToMapObserver.prototype.next=function(x){var key=tryCatch(this._k)(x);if(key===errorObj){return this._o.onError(key.e);}var elem=x;if(this._e){elem=tryCatch(this._e)(x);if(elem===errorObj){return this._o.onError(elem.e);}}this._m.set(key,elem);};ToMapObserver.prototype.error=function(e){this._o.onError(e);};ToMapObserver.prototype.completed=function(){this._o.onNext(this._m);this._o.onCompleted();};return ToMapObserver;}(AbstractObserver);/**
	  * Converts the observable sequence to a Map if it exists.
	  * @param {Function} keySelector A function which produces the key for the Map.
	  * @param {Function} [elementSelector] An optional function which produces the element for the Map. If not present, defaults to the value from the observable sequence.
	  * @returns {Observable} An observable sequence with a single value of a Map containing the values from the observable sequence.
	  */observableProto.toMap=function(keySelector,elementSelector){if(typeof root.Map==='undefined'){throw new TypeError();}return new ToMapObservable(this,keySelector,elementSelector);};var SliceObservable=function(__super__){inherits(SliceObservable,__super__);function SliceObservable(source,b,e){this.source=source;this._b=b;this._e=e;__super__.call(this);}SliceObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SliceObserver(o,this._b,this._e));};return SliceObservable;}(ObservableBase);var SliceObserver=function(__super__){inherits(SliceObserver,__super__);function SliceObserver(o,b,e){this._o=o;this._b=b;this._e=e;this._i=0;__super__.call(this);}SliceObserver.prototype.next=function(x){if(this._i>=this._b){if(this._e===this._i){this._o.onCompleted();}else{this._o.onNext(x);}}this._i++;};SliceObserver.prototype.error=function(e){this._o.onError(e);};SliceObserver.prototype.completed=function(){this._o.onCompleted();};return SliceObserver;}(AbstractObserver);/*
	  * The slice() method returns a shallow copy of a portion of an Observable into a new Observable object.
	  * Unlike the array version, this does not support negative numbers for being or end.
	  * @param {Number} [begin] Zero-based index at which to begin extraction. If omitted, this will default to zero.
	  * @param {Number} [end] Zero-based index at which to end extraction. slice extracts up to but not including end.
	  * If omitted, this will emit the rest of the Observable object.
	  * @returns {Observable} A shallow copy of a portion of an Observable into a new Observable object.
	  */observableProto.slice=function(begin,end){var start=begin||0;if(start<0){throw new Rx.ArgumentOutOfRangeError();}if(typeof end==='number'&&end<start){throw new Rx.ArgumentOutOfRangeError();}return new SliceObservable(this,start,end);};var LastIndexOfObservable=function(__super__){inherits(LastIndexOfObservable,__super__);function LastIndexOfObservable(source,e,n){this.source=source;this._e=e;this._n=n;__super__.call(this);}LastIndexOfObservable.prototype.subscribeCore=function(o){if(this._n<0){o.onNext(-1);o.onCompleted();return disposableEmpty;}return this.source.subscribe(new LastIndexOfObserver(o,this._e,this._n));};return LastIndexOfObservable;}(ObservableBase);var LastIndexOfObserver=function(__super__){inherits(LastIndexOfObserver,__super__);function LastIndexOfObserver(o,e,n){this._o=o;this._e=e;this._n=n;this._v=0;this._hv=false;this._i=0;__super__.call(this);}LastIndexOfObserver.prototype.next=function(x){if(this._i>=this._n&&x===this._e){this._hv=true;this._v=this._i;}this._i++;};LastIndexOfObserver.prototype.error=function(e){this._o.onError(e);};LastIndexOfObserver.prototype.completed=function(){if(this._hv){this._o.onNext(this._v);}else{this._o.onNext(-1);}this._o.onCompleted();};return LastIndexOfObserver;}(AbstractObserver);/**
	   * Returns the last index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   * @param {Any} searchElement Element to locate in the array.
	   * @param {Number} [fromIndex] The index to start the search.  If not specified, defaults to 0.
	   * @returns {Observable} And observable sequence containing the last index at which a given element can be found in the observable sequence, or -1 if it is not present.
	   */observableProto.lastIndexOf=function(searchElement,fromIndex){var n=+fromIndex||0;Math.abs(n)===Infinity&&(n=0);return new LastIndexOfObservable(this,searchElement,n);};Observable.wrap=function(fn){function createObservable(){return Observable.spawn.call(this,fn.apply(this,arguments));}createObservable.__generatorFunction__=fn;return createObservable;};var spawn=Observable.spawn=function(){var gen=arguments[0],self=this,args=[];for(var i=1,len=arguments.length;i<len;i++){args.push(arguments[i]);}return new AnonymousObservable(function(o){var g=new CompositeDisposable();if(isFunction(gen)){gen=gen.apply(self,args);}if(!gen||!isFunction(gen.next)){o.onNext(gen);return o.onCompleted();}function processGenerator(res){var ret=tryCatch(gen.next).call(gen,res);if(ret===errorObj){return o.onError(ret.e);}next(ret);}processGenerator();function onError(err){var ret=tryCatch(gen.next).call(gen,err);if(ret===errorObj){return o.onError(ret.e);}next(ret);}function next(ret){if(ret.done){o.onNext(ret.value);o.onCompleted();return;}var obs=toObservable.call(self,ret.value);var value=null;var hasValue=false;if(Observable.isObservable(obs)){g.add(obs.subscribe(function(val){hasValue=true;value=val;},onError,function(){hasValue&&processGenerator(value);}));}else{onError(new TypeError('type not supported'));}}return g;});};function toObservable(obj){if(!obj){return obj;}if(Observable.isObservable(obj)){return obj;}if(isPromise(obj)){return Observable.fromPromise(obj);}if(isGeneratorFunction(obj)||isGenerator(obj)){return spawn.call(this,obj);}if(isFunction(obj)){return thunkToObservable.call(this,obj);}if(isArrayLike(obj)||isIterable(obj)){return arrayToObservable.call(this,obj);}if(isObject(obj)){return objectToObservable.call(this,obj);}return obj;}function arrayToObservable(obj){return Observable.from(obj).concatMap(function(o){if(Observable.isObservable(o)||isObject(o)){return toObservable.call(null,o);}else{return Rx.Observable.just(o);}}).toArray();}function objectToObservable(obj){var results=new obj.constructor(),keys=Object.keys(obj),observables=[];for(var i=0,len=keys.length;i<len;i++){var key=keys[i];var observable=toObservable.call(this,obj[key]);if(observable&&Observable.isObservable(observable)){defer(observable,key);}else{results[key]=obj[key];}}return Observable.forkJoin.apply(Observable,observables).map(function(){return results;});function defer(observable,key){results[key]=undefined;observables.push(observable.map(function(next){results[key]=next;}));}}function thunkToObservable(fn){var self=this;return new AnonymousObservable(function(o){fn.call(self,function(){var err=arguments[0],res=arguments[1];if(err){return o.onError(err);}if(arguments.length>2){var args=[];for(var i=1,len=arguments.length;i<len;i++){args.push(arguments[i]);}res=args;}o.onNext(res);o.onCompleted();});});}function isGenerator(obj){return isFunction(obj.next)&&isFunction(obj['throw']);}function isGeneratorFunction(obj){var ctor=obj.constructor;if(!ctor){return false;}if(ctor.name==='GeneratorFunction'||ctor.displayName==='GeneratorFunction'){return true;}return isGenerator(ctor.prototype);}function isObject(val){return Object==val.constructor;}/**
	   * Invokes the specified function asynchronously on the specified scheduler, surfacing the result through an observable sequence.
	   *
	   * @example
	   * var res = Rx.Observable.start(function () { console.log('hello'); });
	   * var res = Rx.Observable.start(function () { console.log('hello'); }, Rx.Scheduler.timeout);
	   * var res = Rx.Observable.start(function () { this.log('hello'); }, Rx.Scheduler.timeout, console);
	   *
	   * @param {Function} func Function to run asynchronously.
	   * @param {Scheduler} [scheduler]  Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
	   * @param [context]  The context for the func parameter to be executed.  If not specified, defaults to undefined.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   *
	   * Remarks
	   * * The function is called immediately, not during the subscription of the resulting sequence.
	   * * Multiple subscriptions to the resulting sequence can observe the function's result.
	   */Observable.start=function(func,context,scheduler){return observableToAsync(func,context,scheduler)();};/**
	   * Converts the function into an asynchronous function. Each invocation of the resulting asynchronous function causes an invocation of the original synchronous function on the specified scheduler.
	   * @param {Function} function Function to convert to an asynchronous function.
	   * @param {Scheduler} [scheduler] Scheduler to run the function on. If not specified, defaults to Scheduler.timeout.
	   * @param {Mixed} [context] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	   * @returns {Function} Asynchronous function.
	   */var observableToAsync=Observable.toAsync=function(func,context,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return function(){var args=arguments,subject=new AsyncSubject();scheduler.schedule(null,function(){var result;try{result=func.apply(context,args);}catch(e){subject.onError(e);return;}subject.onNext(result);subject.onCompleted();});return subject.asObservable();};};function createCbObservable(fn,ctx,selector,args){var o=new AsyncSubject();args.push(createCbHandler(o,ctx,selector));fn.apply(ctx,args);return o.asObservable();}function createCbHandler(o,ctx,selector){return function handler(){var len=arguments.length,results=new Array(len);for(var i=0;i<len;i++){results[i]=arguments[i];}if(isFunction(selector)){results=tryCatch(selector).apply(ctx,results);if(results===errorObj){return o.onError(results.e);}o.onNext(results);}else{if(results.length<=1){o.onNext(results[0]);}else{o.onNext(results);}}o.onCompleted();};}/**
	 * Converts a callback function to an observable sequence.
	 *
	 * @param {Function} fn Function with a callback as the last parameter to convert to an Observable sequence.
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback to produce a single item to yield on next.
	 * @returns {Function} A function, when executed with the required parameters minus the callback, produces an Observable sequence with a single value of the arguments to the callback as an array.
	 */Observable.fromCallback=function(fn,ctx,selector){return function(){typeof ctx==='undefined'&&(ctx=this);var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return createCbObservable(fn,ctx,selector,args);};};function createNodeObservable(fn,ctx,selector,args){var o=new AsyncSubject();args.push(createNodeHandler(o,ctx,selector));fn.apply(ctx,args);return o.asObservable();}function createNodeHandler(o,ctx,selector){return function handler(){var err=arguments[0];if(err){return o.onError(err);}var len=arguments.length,results=[];for(var i=1;i<len;i++){results[i-1]=arguments[i];}if(isFunction(selector)){var results=tryCatch(selector).apply(ctx,results);if(results===errorObj){return o.onError(results.e);}o.onNext(results);}else{if(results.length<=1){o.onNext(results[0]);}else{o.onNext(results);}}o.onCompleted();};}/**
	 * Converts a Node.js callback style function to an observable sequence.  This must be in function (err, ...) format.
	 * @param {Function} fn The function to call
	 * @param {Mixed} [ctx] The context for the func parameter to be executed.  If not specified, defaults to undefined.
	 * @param {Function} [selector] A selector which takes the arguments from the callback minus the error to produce a single item to yield on next.
	 * @returns {Function} An async function which when applied, returns an observable sequence with the callback arguments as an array.
	 */Observable.fromNodeCallback=function(fn,ctx,selector){return function(){typeof ctx==='undefined'&&(ctx=this);var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return createNodeObservable(fn,ctx,selector,args);};};function isNodeList(el){if(root.StaticNodeList){// IE8 Specific
	// instanceof is slower than Object#toString, but Object#toString will not work as intended in IE8
	return el instanceof root.StaticNodeList||el instanceof root.NodeList;}else{return Object.prototype.toString.call(el)==='[object NodeList]';}}function ListenDisposable(e,n,fn){this._e=e;this._n=n;this._fn=fn;this._e.addEventListener(this._n,this._fn,false);this.isDisposed=false;}ListenDisposable.prototype.dispose=function(){if(!this.isDisposed){this._e.removeEventListener(this._n,this._fn,false);this.isDisposed=true;}};function createEventListener(el,eventName,handler){var disposables=new CompositeDisposable();// Asume NodeList or HTMLCollection
	var elemToString=Object.prototype.toString.call(el);if(isNodeList(el)||elemToString==='[object HTMLCollection]'){for(var i=0,len=el.length;i<len;i++){disposables.add(createEventListener(el.item(i),eventName,handler));}}else if(el){disposables.add(new ListenDisposable(el,eventName,handler));}return disposables;}/**
	   * Configuration option to determine whether to use native events only
	   */Rx.config.useNativeEvents=false;var EventObservable=function(__super__){inherits(EventObservable,__super__);function EventObservable(el,name,fn){this._el=el;this._n=name;this._fn=fn;__super__.call(this);}function createHandler(o,fn){return function handler(){var results=arguments[0];if(isFunction(fn)){results=tryCatch(fn).apply(null,arguments);if(results===errorObj){return o.onError(results.e);}}o.onNext(results);};}EventObservable.prototype.subscribeCore=function(o){return createEventListener(this._el,this._n,createHandler(o,this._fn));};return EventObservable;}(ObservableBase);/**
	   * Creates an observable sequence by adding an event listener to the matching DOMElement or each item in the NodeList.
	   * @param {Object} element The DOMElement or NodeList to attach a listener.
	   * @param {String} eventName The event name to attach the observable sequence.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence of events from the specified element and the specified event.
	   */Observable.fromEvent=function(element,eventName,selector){// Node.js specific
	if(element.addListener){return fromEventPattern(function(h){element.addListener(eventName,h);},function(h){element.removeListener(eventName,h);},selector);}// Use only if non-native events are allowed
	if(!Rx.config.useNativeEvents){// Handles jq, Angular.js, Zepto, Marionette, Ember.js
	if(typeof element.on==='function'&&typeof element.off==='function'){return fromEventPattern(function(h){element.on(eventName,h);},function(h){element.off(eventName,h);},selector);}}return new EventObservable(element,eventName,selector).publish().refCount();};var EventPatternObservable=function(__super__){inherits(EventPatternObservable,__super__);function EventPatternObservable(add,del,fn){this._add=add;this._del=del;this._fn=fn;__super__.call(this);}function createHandler(o,fn){return function handler(){var results=arguments[0];if(isFunction(fn)){results=tryCatch(fn).apply(null,arguments);if(results===errorObj){return o.onError(results.e);}}o.onNext(results);};}EventPatternObservable.prototype.subscribeCore=function(o){var fn=createHandler(o,this._fn);var returnValue=this._add(fn);return new EventPatternDisposable(this._del,fn,returnValue);};function EventPatternDisposable(del,fn,ret){this._del=del;this._fn=fn;this._ret=ret;this.isDisposed=false;}EventPatternDisposable.prototype.dispose=function(){if(!this.isDisposed){isFunction(this._del)&&this._del(this._fn,this._ret);this.isDisposed=true;}};return EventPatternObservable;}(ObservableBase);/**
	   * Creates an observable sequence from an event emitter via an addHandler/removeHandler pair.
	   * @param {Function} addHandler The function to add a handler to the emitter.
	   * @param {Function} [removeHandler] The optional function to remove a handler from an emitter.
	   * @param {Function} [selector] A selector which takes the arguments from the event handler to produce a single item to yield on next.
	   * @returns {Observable} An observable sequence which wraps an event from an event emitter
	   */var fromEventPattern=Observable.fromEventPattern=function(addHandler,removeHandler,selector){return new EventPatternObservable(addHandler,removeHandler,selector).publish().refCount();};/**
	   * Invokes the asynchronous function, surfacing the result through an observable sequence.
	   * @param {Function} functionAsync Asynchronous function which returns a Promise to run.
	   * @returns {Observable} An observable sequence exposing the function's result value, or an exception.
	   */Observable.startAsync=function(functionAsync){var promise=tryCatch(functionAsync)();if(promise===errorObj){return observableThrow(promise.e);}return observableFromPromise(promise);};var PausableObservable=function(__super__){inherits(PausableObservable,__super__);function PausableObservable(source,pauser){this.source=source;this.controller=new Subject();this.paused=true;if(pauser&&pauser.subscribe){this.pauser=this.controller.merge(pauser);}else{this.pauser=this.controller;}__super__.call(this);}PausableObservable.prototype._subscribe=function(o){var conn=this.source.publish(),subscription=conn.subscribe(o),connection=disposableEmpty;var pausable=this.pauser.startWith(!this.paused).distinctUntilChanged().subscribe(function(b){if(b){connection=conn.connect();}else{connection.dispose();connection=disposableEmpty;}});return new NAryDisposable([subscription,connection,pausable]);};PausableObservable.prototype.pause=function(){this.paused=true;this.controller.onNext(false);};PausableObservable.prototype.resume=function(){this.paused=false;this.controller.onNext(true);};return PausableObservable;}(Observable);/**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausable(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */observableProto.pausable=function(pauser){return new PausableObservable(this,pauser);};function combineLatestSource(source,subject,resultSelector){return new AnonymousObservable(function(o){var hasValue=[false,false],hasValueAll=false,isDone=false,values=new Array(2),err;function next(x,i){values[i]=x;hasValue[i]=true;if(hasValueAll||(hasValueAll=hasValue.every(identity))){if(err){return o.onError(err);}var res=tryCatch(resultSelector).apply(null,values);if(res===errorObj){return o.onError(res.e);}o.onNext(res);}isDone&&values[1]&&o.onCompleted();}return new BinaryDisposable(source.subscribe(function(x){next(x,0);},function(e){if(values[1]){o.onError(e);}else{err=e;}},function(){isDone=true;values[1]&&o.onCompleted();}),subject.subscribe(function(x){next(x,1);},function(e){o.onError(e);},function(){isDone=true;next(true,1);}));},source);}var PausableBufferedObservable=function(__super__){inherits(PausableBufferedObservable,__super__);function PausableBufferedObservable(source,pauser){this.source=source;this.controller=new Subject();this.paused=true;if(pauser&&pauser.subscribe){this.pauser=this.controller.merge(pauser);}else{this.pauser=this.controller;}__super__.call(this);}PausableBufferedObservable.prototype._subscribe=function(o){var q=[],previousShouldFire;function drainQueue(){while(q.length>0){o.onNext(q.shift());}}var subscription=combineLatestSource(this.source,this.pauser.startWith(!this.paused).distinctUntilChanged(),function(data,shouldFire){return{data:data,shouldFire:shouldFire};}).subscribe(function(results){if(previousShouldFire!==undefined&&results.shouldFire!==previousShouldFire){previousShouldFire=results.shouldFire;// change in shouldFire
	if(results.shouldFire){drainQueue();}}else{previousShouldFire=results.shouldFire;// new data
	if(results.shouldFire){o.onNext(results.data);}else{q.push(results.data);}}},function(err){drainQueue();o.onError(err);},function(){drainQueue();o.onCompleted();});return subscription;};PausableBufferedObservable.prototype.pause=function(){this.paused=true;this.controller.onNext(false);};PausableBufferedObservable.prototype.resume=function(){this.paused=false;this.controller.onNext(true);};return PausableBufferedObservable;}(Observable);/**
	   * Pauses the underlying observable sequence based upon the observable sequence which yields true/false,
	   * and yields the values that were buffered while paused.
	   * @example
	   * var pauser = new Rx.Subject();
	   * var source = Rx.Observable.interval(100).pausableBuffered(pauser);
	   * @param {Observable} pauser The observable sequence used to pause the underlying sequence.
	   * @returns {Observable} The observable sequence which is paused based upon the pauser.
	   */observableProto.pausableBuffered=function(pauser){return new PausableBufferedObservable(this,pauser);};var ControlledObservable=function(__super__){inherits(ControlledObservable,__super__);function ControlledObservable(source,enableQueue,scheduler){__super__.call(this);this.subject=new ControlledSubject(enableQueue,scheduler);this.source=source.multicast(this.subject).refCount();}ControlledObservable.prototype._subscribe=function(o){return this.source.subscribe(o);};ControlledObservable.prototype.request=function(numberOfItems){return this.subject.request(numberOfItems==null?-1:numberOfItems);};return ControlledObservable;}(Observable);var ControlledSubject=function(__super__){inherits(ControlledSubject,__super__);function ControlledSubject(enableQueue,scheduler){enableQueue==null&&(enableQueue=true);__super__.call(this);this.subject=new Subject();this.enableQueue=enableQueue;this.queue=enableQueue?[]:null;this.requestedCount=0;this.requestedDisposable=null;this.error=null;this.hasFailed=false;this.hasCompleted=false;this.scheduler=scheduler||currentThreadScheduler;}addProperties(ControlledSubject.prototype,Observer,{_subscribe:function _subscribe(o){return this.subject.subscribe(o);},onCompleted:function onCompleted(){this.hasCompleted=true;if(!this.enableQueue||this.queue.length===0){this.subject.onCompleted();this.disposeCurrentRequest();}else{this.queue.push(Notification.createOnCompleted());}},onError:function onError(error){this.hasFailed=true;this.error=error;if(!this.enableQueue||this.queue.length===0){this.subject.onError(error);this.disposeCurrentRequest();}else{this.queue.push(Notification.createOnError(error));}},onNext:function onNext(value){if(this.requestedCount<=0){this.enableQueue&&this.queue.push(Notification.createOnNext(value));}else{this.requestedCount--===0&&this.disposeCurrentRequest();this.subject.onNext(value);}},_processRequest:function _processRequest(numberOfItems){if(this.enableQueue){while(this.queue.length>0&&(numberOfItems>0||this.queue[0].kind!=='N')){var first=this.queue.shift();first.accept(this.subject);if(first.kind==='N'){numberOfItems--;}else{this.disposeCurrentRequest();this.queue=[];}}}return numberOfItems;},request:function request(number){this.disposeCurrentRequest();var self=this;this.requestedDisposable=this.scheduler.schedule(number,function(s,i){var remaining=self._processRequest(i);var stopped=self.hasCompleted||self.hasFailed;if(!stopped&&remaining>0){self.requestedCount=remaining;return disposableCreate(function(){self.requestedCount=0;});// Scheduled item is still in progress. Return a new
	// disposable to allow the request to be interrupted
	// via dispose.
	}});return this.requestedDisposable;},disposeCurrentRequest:function disposeCurrentRequest(){if(this.requestedDisposable){this.requestedDisposable.dispose();this.requestedDisposable=null;}}});return ControlledSubject;}(Observable);/**
	   * Attaches a controller to the observable sequence with the ability to queue.
	   * @example
	   * var source = Rx.Observable.interval(100).controlled();
	   * source.request(3); // Reads 3 values
	   * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
	   * @param {Scheduler} scheduler determines how the requests will be scheduled
	   * @returns {Observable} The observable sequence which only propagates values on request.
	   */observableProto.controlled=function(enableQueue,scheduler){if(enableQueue&&isScheduler(enableQueue)){scheduler=enableQueue;enableQueue=true;}if(enableQueue==null){enableQueue=true;}return new ControlledObservable(this,enableQueue,scheduler);};var StopAndWaitObservable=function(__super__){inherits(StopAndWaitObservable,__super__);function StopAndWaitObservable(source){__super__.call(this);this.source=source;}function scheduleMethod(s,self){return self.source.request(1);}StopAndWaitObservable.prototype._subscribe=function(o){this.subscription=this.source.subscribe(new StopAndWaitObserver(o,this,this.subscription));return new BinaryDisposable(this.subscription,defaultScheduler.schedule(this,scheduleMethod));};var StopAndWaitObserver=function(__sub__){inherits(StopAndWaitObserver,__sub__);function StopAndWaitObserver(observer,observable,cancel){__sub__.call(this);this.observer=observer;this.observable=observable;this.cancel=cancel;this.scheduleDisposable=null;}StopAndWaitObserver.prototype.completed=function(){this.observer.onCompleted();this.dispose();};StopAndWaitObserver.prototype.error=function(error){this.observer.onError(error);this.dispose();};function innerScheduleMethod(s,self){return self.observable.source.request(1);}StopAndWaitObserver.prototype.next=function(value){this.observer.onNext(value);this.scheduleDisposable=defaultScheduler.schedule(this,innerScheduleMethod);};StopAndWaitObserver.dispose=function(){this.observer=null;if(this.cancel){this.cancel.dispose();this.cancel=null;}if(this.scheduleDisposable){this.scheduleDisposable.dispose();this.scheduleDisposable=null;}__sub__.prototype.dispose.call(this);};return StopAndWaitObserver;}(AbstractObserver);return StopAndWaitObservable;}(Observable);/**
	   * Attaches a stop and wait observable to the current observable.
	   * @returns {Observable} A stop and wait observable.
	   */ControlledObservable.prototype.stopAndWait=function(){return new StopAndWaitObservable(this);};var WindowedObservable=function(__super__){inherits(WindowedObservable,__super__);function WindowedObservable(source,windowSize){__super__.call(this);this.source=source;this.windowSize=windowSize;}function scheduleMethod(s,self){return self.source.request(self.windowSize);}WindowedObservable.prototype._subscribe=function(o){this.subscription=this.source.subscribe(new WindowedObserver(o,this,this.subscription));return new BinaryDisposable(this.subscription,defaultScheduler.schedule(this,scheduleMethod));};var WindowedObserver=function(__sub__){inherits(WindowedObserver,__sub__);function WindowedObserver(observer,observable,cancel){this.observer=observer;this.observable=observable;this.cancel=cancel;this.received=0;this.scheduleDisposable=null;__sub__.call(this);}WindowedObserver.prototype.completed=function(){this.observer.onCompleted();this.dispose();};WindowedObserver.prototype.error=function(error){this.observer.onError(error);this.dispose();};function innerScheduleMethod(s,self){return self.observable.source.request(self.observable.windowSize);}WindowedObserver.prototype.next=function(value){this.observer.onNext(value);this.received=++this.received%this.observable.windowSize;this.received===0&&(this.scheduleDisposable=defaultScheduler.schedule(this,innerScheduleMethod));};WindowedObserver.prototype.dispose=function(){this.observer=null;if(this.cancel){this.cancel.dispose();this.cancel=null;}if(this.scheduleDisposable){this.scheduleDisposable.dispose();this.scheduleDisposable=null;}__sub__.prototype.dispose.call(this);};return WindowedObserver;}(AbstractObserver);return WindowedObservable;}(Observable);/**
	   * Creates a sliding windowed observable based upon the window size.
	   * @param {Number} windowSize The number of items in the window
	   * @returns {Observable} A windowed observable based upon the window size.
	   */ControlledObservable.prototype.windowed=function(windowSize){return new WindowedObservable(this,windowSize);};/**
	   * Pipes the existing Observable sequence into a Node.js Stream.
	   * @param {Stream} dest The destination Node.js stream.
	   * @returns {Stream} The destination stream.
	   */observableProto.pipe=function(dest){var source=this.pausableBuffered();function onDrain(){source.resume();}dest.addListener('drain',onDrain);source.subscribe(function(x){!dest.write(x)&&source.pause();},function(err){dest.emit('error',err);},function(){// Hack check because STDIO is not closable
	!dest._isStdio&&dest.end();dest.removeListener('drain',onDrain);});source.resume();return dest;};var MulticastObservable=function(__super__){inherits(MulticastObservable,__super__);function MulticastObservable(source,fn1,fn2){this.source=source;this._fn1=fn1;this._fn2=fn2;__super__.call(this);}MulticastObservable.prototype.subscribeCore=function(o){var connectable=this.source.multicast(this._fn1());return new BinaryDisposable(this._fn2(connectable).subscribe(o),connectable.connect());};return MulticastObservable;}(ObservableBase);/**
	   * Multicasts the source sequence notifications through an instantiated subject into all uses of the sequence within a selector function. Each
	   * subscription to the resulting sequence causes a separate multicast invocation, exposing the sequence resulting from the selector function's
	   * invocation. For specializations with fixed subject types, see Publish, PublishLast, and Replay.
	   *
	   * @example
	   * 1 - res = source.multicast(observable);
	   * 2 - res = source.multicast(function () { return new Subject(); }, function (x) { return x; });
	   *
	   * @param {Function|Subject} subjectOrSubjectSelector
	   * Factory function to create an intermediate subject through which the source sequence's elements will be multicast to the selector function.
	   * Or:
	   * Subject to push source elements into.
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence subject to the policies enforced by the created subject. Specified only if <paramref name="subjectOrSubjectSelector" is a factory function.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.multicast=function(subjectOrSubjectSelector,selector){return isFunction(subjectOrSubjectSelector)?new MulticastObservable(this,subjectOrSubjectSelector,selector):new ConnectableObservable(this,subjectOrSubjectSelector);};/**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of Multicast using a regular Subject.
	   *
	   * @example
	   * var resres = source.publish();
	   * var res = source.publish(function (x) { return x; });
	   *
	   * @param {Function} [selector] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.publish=function(selector){return selector&&isFunction(selector)?this.multicast(function(){return new Subject();},selector):this.multicast(new Subject());};/**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence.
	   * This operator is a specialization of publish which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */observableProto.share=function(){return this.publish().refCount();};/**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence containing only the last notification.
	   * This operator is a specialization of Multicast using a AsyncSubject.
	   *
	   * @example
	   * var res = source.publishLast();
	   * var res = source.publishLast(function (x) { return x; });
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will only receive the last notification of the source.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.publishLast=function(selector){return selector&&isFunction(selector)?this.multicast(function(){return new AsyncSubject();},selector):this.multicast(new AsyncSubject());};/**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence and starts with initialValue.
	   * This operator is a specialization of Multicast using a BehaviorSubject.
	   *
	   * @example
	   * var res = source.publishValue(42);
	   * var res = source.publishValue(function (x) { return x.select(function (y) { return y * y; }) }, 42);
	   *
	   * @param {Function} [selector] Optional selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive immediately receive the initial value, followed by all notifications of the source from the time of the subscription on.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.publishValue=function(initialValueOrSelector,initialValue){return arguments.length===2?this.multicast(function(){return new BehaviorSubject(initialValue);},initialValueOrSelector):this.multicast(new BehaviorSubject(initialValueOrSelector));};/**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence and starts with an initialValue.
	   * This operator is a specialization of publishValue which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   * @param {Mixed} initialValue Initial value received by observers upon subscription.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */observableProto.shareValue=function(initialValue){return this.publishValue(initialValue).refCount();};/**
	   * Returns an observable sequence that is the result of invoking the selector on a connectable observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of Multicast using a ReplaySubject.
	   *
	   * @example
	   * var res = source.replay(null, 3);
	   * var res = source.replay(null, 3, 500);
	   * var res = source.replay(null, 3, 500, scheduler);
	   * var res = source.replay(function (x) { return x.take(6).repeat(); }, 3, 500, scheduler);
	   *
	   * @param selector [Optional] Selector function which can use the multicasted source sequence as many times as needed, without causing multiple subscriptions to the source sequence. Subscribers to the given source will receive all the notifications of the source subject to the specified replay buffer trimming policy.
	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param windowSize [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.replay=function(selector,bufferSize,windowSize,scheduler){return selector&&isFunction(selector)?this.multicast(function(){return new ReplaySubject(bufferSize,windowSize,scheduler);},selector):this.multicast(new ReplaySubject(bufferSize,windowSize,scheduler));};/**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence replaying notifications subject to a maximum time length for the replay buffer.
	   * This operator is a specialization of replay which creates a subscription when the number of observers goes from zero to one, then shares that subscription with all subsequent observers until the number of observers returns to zero, at which point the subscription is disposed.
	   *
	   * @example
	   * var res = source.shareReplay(3);
	   * var res = source.shareReplay(3, 500);
	   * var res = source.shareReplay(3, 500, scheduler);
	   *

	   * @param bufferSize [Optional] Maximum element count of the replay buffer.
	   * @param window [Optional] Maximum time length of the replay buffer.
	   * @param scheduler [Optional] Scheduler where connected observers within the selector function will be invoked on.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence.
	   */observableProto.shareReplay=function(bufferSize,windowSize,scheduler){return this.replay(null,bufferSize,windowSize,scheduler).refCount();};var InnerSubscription=function InnerSubscription(s,o){this._s=s;this._o=o;};InnerSubscription.prototype.dispose=function(){if(!this._s.isDisposed&&this._o!==null){var idx=this._s.observers.indexOf(this._o);this._s.observers.splice(idx,1);this._o=null;}};var RefCountObservable=function(__super__){inherits(RefCountObservable,__super__);function RefCountObservable(source){this.source=source;this._count=0;this._connectableSubscription=null;__super__.call(this);}RefCountObservable.prototype.subscribeCore=function(o){var subscription=this.source.subscribe(o);++this._count===1&&(this._connectableSubscription=this.source.connect());return new RefCountDisposable(this,subscription);};function RefCountDisposable(p,s){this._p=p;this._s=s;this.isDisposed=false;}RefCountDisposable.prototype.dispose=function(){if(!this.isDisposed){this.isDisposed=true;this._s.dispose();--this._p._count===0&&this._p._connectableSubscription.dispose();}};return RefCountObservable;}(ObservableBase);var ConnectableObservable=Rx.ConnectableObservable=function(__super__){inherits(ConnectableObservable,__super__);function ConnectableObservable(source,subject){this.source=source;this._connection=null;this._source=source.asObservable();this._subject=subject;__super__.call(this);}function ConnectDisposable(parent,subscription){this._p=parent;this._s=subscription;}ConnectDisposable.prototype.dispose=function(){if(this._s){this._s.dispose();this._s=null;this._p._connection=null;}};ConnectableObservable.prototype.connect=function(){if(!this._connection){if(this._subject.isStopped){return disposableEmpty;}var subscription=this._source.subscribe(this._subject);this._connection=new ConnectDisposable(this,subscription);}return this._connection;};ConnectableObservable.prototype._subscribe=function(o){return this._subject.subscribe(o);};ConnectableObservable.prototype.refCount=function(){return new RefCountObservable(this);};return ConnectableObservable;}(Observable);/**
	   * Returns an observable sequence that shares a single subscription to the underlying sequence. This observable sequence
	   * can be resubscribed to, even if all prior subscriptions have ended. (unlike `.publish().refCount()`)
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source.
	   */observableProto.singleInstance=function(){var source=this,hasObservable=false,observable;function getObservable(){if(!hasObservable){hasObservable=true;observable=source['finally'](function(){hasObservable=false;}).publish().refCount();}return observable;}return new AnonymousObservable(function(o){return getObservable().subscribe(o);});};/**
	   *  Correlates the elements of two sequences based on overlapping durations.
	   *
	   *  @param {Observable} right The right observable sequence to join elements for.
	   *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
	   *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
	   *  @param {Function} resultSelector A function invoked to compute a result element for any two overlapping elements of the left and right observable sequences. The parameters passed to the function correspond with the elements from the left and right source sequences for which overlap occurs.
	   *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
	   */observableProto.join=function(right,leftDurationSelector,rightDurationSelector,resultSelector){var left=this;return new AnonymousObservable(function(o){var group=new CompositeDisposable();var leftDone=false,rightDone=false;var leftId=0,rightId=0;var leftMap=new Map(),rightMap=new Map();var handleError=function handleError(e){o.onError(e);};group.add(left.subscribe(function(value){var id=leftId++,md=new SingleAssignmentDisposable();leftMap.set(id,value);group.add(md);var duration=tryCatch(leftDurationSelector)(value);if(duration===errorObj){return o.onError(duration.e);}md.setDisposable(duration.take(1).subscribe(noop,handleError,function(){leftMap['delete'](id)&&leftMap.size===0&&leftDone&&o.onCompleted();group.remove(md);}));rightMap.forEach(function(v){var result=tryCatch(resultSelector)(value,v);if(result===errorObj){return o.onError(result.e);}o.onNext(result);});},handleError,function(){leftDone=true;(rightDone||leftMap.size===0)&&o.onCompleted();}));group.add(right.subscribe(function(value){var id=rightId++,md=new SingleAssignmentDisposable();rightMap.set(id,value);group.add(md);var duration=tryCatch(rightDurationSelector)(value);if(duration===errorObj){return o.onError(duration.e);}md.setDisposable(duration.take(1).subscribe(noop,handleError,function(){rightMap['delete'](id)&&rightMap.size===0&&rightDone&&o.onCompleted();group.remove(md);}));leftMap.forEach(function(v){var result=tryCatch(resultSelector)(v,value);if(result===errorObj){return o.onError(result.e);}o.onNext(result);});},handleError,function(){rightDone=true;(leftDone||rightMap.size===0)&&o.onCompleted();}));return group;},left);};/**
	   *  Correlates the elements of two sequences based on overlapping durations, and groups the results.
	   *
	   *  @param {Observable} right The right observable sequence to join elements for.
	   *  @param {Function} leftDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the left observable sequence, used to determine overlap.
	   *  @param {Function} rightDurationSelector A function to select the duration (expressed as an observable sequence) of each element of the right observable sequence, used to determine overlap.
	   *  @param {Function} resultSelector A function invoked to compute a result element for any element of the left sequence with overlapping elements from the right observable sequence. The first parameter passed to the function is an element of the left sequence. The second parameter passed to the function is an observable sequence with elements from the right sequence that overlap with the left sequence's element.
	   *  @returns {Observable} An observable sequence that contains result elements computed from source elements that have an overlapping duration.
	   */observableProto.groupJoin=function(right,leftDurationSelector,rightDurationSelector,resultSelector){var left=this;return new AnonymousObservable(function(o){var group=new CompositeDisposable();var r=new RefCountDisposable(group);var leftMap=new Map(),rightMap=new Map();var leftId=0,rightId=0;var handleError=function handleError(e){return function(v){v.onError(e);};};function handleError(e){};group.add(left.subscribe(function(value){var s=new Subject();var id=leftId++;leftMap.set(id,s);var result=tryCatch(resultSelector)(value,addRef(s,r));if(result===errorObj){leftMap.forEach(handleError(result.e));return o.onError(result.e);}o.onNext(result);rightMap.forEach(function(v){s.onNext(v);});var md=new SingleAssignmentDisposable();group.add(md);var duration=tryCatch(leftDurationSelector)(value);if(duration===errorObj){leftMap.forEach(handleError(duration.e));return o.onError(duration.e);}md.setDisposable(duration.take(1).subscribe(noop,function(e){leftMap.forEach(handleError(e));o.onError(e);},function(){leftMap['delete'](id)&&s.onCompleted();group.remove(md);}));},function(e){leftMap.forEach(handleError(e));o.onError(e);},function(){o.onCompleted();}));group.add(right.subscribe(function(value){var id=rightId++;rightMap.set(id,value);var md=new SingleAssignmentDisposable();group.add(md);var duration=tryCatch(rightDurationSelector)(value);if(duration===errorObj){leftMap.forEach(handleError(duration.e));return o.onError(duration.e);}md.setDisposable(duration.take(1).subscribe(noop,function(e){leftMap.forEach(handleError(e));o.onError(e);},function(){rightMap['delete'](id);group.remove(md);}));leftMap.forEach(function(v){v.onNext(value);});},function(e){leftMap.forEach(handleError(e));o.onError(e);}));return r;},left);};function toArray(x){return x.toArray();}/**
	   *  Projects each element of an observable sequence into zero or more buffers.
	   *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
	   *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
	   *  @returns {Observable} An observable sequence of windows.
	   */observableProto.buffer=function(){return this.window.apply(this,arguments).flatMap(toArray);};/**
	   *  Projects each element of an observable sequence into zero or more windows.
	   *
	   *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
	   *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
	   *  @returns {Observable} An observable sequence of windows.
	   */observableProto.window=function(windowOpeningsOrClosingSelector,windowClosingSelector){if(arguments.length===1&&typeof arguments[0]!=='function'){return observableWindowWithBoundaries.call(this,windowOpeningsOrClosingSelector);}return typeof windowOpeningsOrClosingSelector==='function'?observableWindowWithClosingSelector.call(this,windowOpeningsOrClosingSelector):observableWindowWithOpenings.call(this,windowOpeningsOrClosingSelector,windowClosingSelector);};function observableWindowWithOpenings(windowOpenings,windowClosingSelector){return windowOpenings.groupJoin(this,windowClosingSelector,observableEmpty,function(_,win){return win;});}function observableWindowWithBoundaries(windowBoundaries){var source=this;return new AnonymousObservable(function(observer){var win=new Subject(),d=new CompositeDisposable(),r=new RefCountDisposable(d);observer.onNext(addRef(win,r));d.add(source.subscribe(function(x){win.onNext(x);},function(err){win.onError(err);observer.onError(err);},function(){win.onCompleted();observer.onCompleted();}));isPromise(windowBoundaries)&&(windowBoundaries=observableFromPromise(windowBoundaries));d.add(windowBoundaries.subscribe(function(w){win.onCompleted();win=new Subject();observer.onNext(addRef(win,r));},function(err){win.onError(err);observer.onError(err);},function(){win.onCompleted();observer.onCompleted();}));return r;},source);}function observableWindowWithClosingSelector(windowClosingSelector){var source=this;return new AnonymousObservable(function(observer){var m=new SerialDisposable(),d=new CompositeDisposable(m),r=new RefCountDisposable(d),win=new Subject();observer.onNext(addRef(win,r));d.add(source.subscribe(function(x){win.onNext(x);},function(err){win.onError(err);observer.onError(err);},function(){win.onCompleted();observer.onCompleted();}));function createWindowClose(){var windowClose;try{windowClose=windowClosingSelector();}catch(e){observer.onError(e);return;}isPromise(windowClose)&&(windowClose=observableFromPromise(windowClose));var m1=new SingleAssignmentDisposable();m.setDisposable(m1);m1.setDisposable(windowClose.take(1).subscribe(noop,function(err){win.onError(err);observer.onError(err);},function(){win.onCompleted();win=new Subject();observer.onNext(addRef(win,r));createWindowClose();}));}createWindowClose();return r;},source);}var PairwiseObservable=function(__super__){inherits(PairwiseObservable,__super__);function PairwiseObservable(source){this.source=source;__super__.call(this);}PairwiseObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new PairwiseObserver(o));};return PairwiseObservable;}(ObservableBase);var PairwiseObserver=function(__super__){inherits(PairwiseObserver,__super__);function PairwiseObserver(o){this._o=o;this._p=null;this._hp=false;__super__.call(this);}PairwiseObserver.prototype.next=function(x){if(this._hp){this._o.onNext([this._p,x]);}else{this._hp=true;}this._p=x;};PairwiseObserver.prototype.error=function(err){this._o.onError(err);};PairwiseObserver.prototype.completed=function(){this._o.onCompleted();};return PairwiseObserver;}(AbstractObserver);/**
	   * Returns a new observable that triggers on the second and subsequent triggerings of the input observable.
	   * The Nth triggering of the input observable passes the arguments from the N-1th and Nth triggering as a pair.
	   * The argument passed to the N-1th triggering is held in hidden internal state until the Nth triggering occurs.
	   * @returns {Observable} An observable that triggers on successive pairs of observations from the input observable as an array.
	   */observableProto.pairwise=function(){return new PairwiseObservable(this);};/**
	   * Returns two observables which partition the observations of the source by the given function.
	   * The first will trigger observations for those values for which the predicate returns true.
	   * The second will trigger observations for those values where the predicate returns false.
	   * The predicate is executed once for each subscribed observer.
	   * Both also propagate all error observations arising from the source and each completes
	   * when the source completes.
	   * @param {Function} predicate
	   *    The function to determine which output Observable will trigger a particular observation.
	   * @returns {Array}
	   *    An array of observables. The first triggers when the predicate returns true,
	   *    and the second triggers when the predicate returns false.
	  */observableProto.partition=function(predicate,thisArg){var fn=bindCallback(predicate,thisArg,3);return[this.filter(predicate,thisArg),this.filter(function(x,i,o){return!fn(x,i,o);})];};var WhileEnumerable=function(__super__){inherits(WhileEnumerable,__super__);function WhileEnumerable(c,s){this.c=c;this.s=s;}WhileEnumerable.prototype[$iterator$]=function(){var self=this;return{next:function next(){return self.c()?{done:false,value:self.s}:{done:true,value:void 0};}};};return WhileEnumerable;}(Enumerable);function enumerableWhile(condition,source){return new WhileEnumerable(condition,source);}/**
	   *  Returns an observable sequence that is the result of invoking the selector on the source sequence, without sharing subscriptions.
	   *  This operator allows for a fluent style of writing queries that use the same sequence multiple times.
	   *
	   * @param {Function} selector Selector function which can use the source sequence as many times as needed, without sharing subscriptions to the source sequence.
	   * @returns {Observable} An observable sequence that contains the elements of a sequence produced by multicasting the source sequence within a selector function.
	   */observableProto.letBind=observableProto['let']=function(func){return func(this);};/**
	   *  Determines whether an observable collection contains values. 
	   *
	   * @example
	   *  1 - res = Rx.Observable.if(condition, obs1);
	   *  2 - res = Rx.Observable.if(condition, obs1, obs2);
	   *  3 - res = Rx.Observable.if(condition, obs1, scheduler);
	   * @param {Function} condition The condition which determines if the thenSource or elseSource will be run.
	   * @param {Observable} thenSource The observable sequence or Promise that will be run if the condition function returns true.
	   * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the condition function returns false. If this is not provided, it defaults to Rx.Observabe.Empty with the specified scheduler.
	   * @returns {Observable} An observable sequence which is either the thenSource or elseSource.
	   */Observable['if']=function(condition,thenSource,elseSourceOrScheduler){return observableDefer(function(){elseSourceOrScheduler||(elseSourceOrScheduler=observableEmpty());isPromise(thenSource)&&(thenSource=observableFromPromise(thenSource));isPromise(elseSourceOrScheduler)&&(elseSourceOrScheduler=observableFromPromise(elseSourceOrScheduler));// Assume a scheduler for empty only
	typeof elseSourceOrScheduler.now==='function'&&(elseSourceOrScheduler=observableEmpty(elseSourceOrScheduler));return condition()?thenSource:elseSourceOrScheduler;});};/**
	   *  Concatenates the observable sequences obtained by running the specified result selector for each element in source.
	   * There is an alias for this method called 'forIn' for browsers <IE9
	   * @param {Array} sources An array of values to turn into an observable sequence.
	   * @param {Function} resultSelector A function to apply to each item in the sources array to turn it into an observable sequence.
	   * @returns {Observable} An observable sequence from the concatenated observable sequences.
	   */Observable['for']=Observable.forIn=function(sources,resultSelector,thisArg){return enumerableOf(sources,resultSelector,thisArg).concat();};/**
	   *  Repeats source as long as condition holds emulating a while loop.
	   * There is an alias for this method called 'whileDo' for browsers <IE9
	   *
	   * @param {Function} condition The condition which determines if the source will be repeated.
	   * @param {Observable} source The observable sequence that will be run if the condition function returns true.
	   * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
	   */var observableWhileDo=Observable['while']=Observable.whileDo=function(condition,source){isPromise(source)&&(source=observableFromPromise(source));return enumerableWhile(condition,source).concat();};/**
	   *  Repeats source as long as condition holds emulating a do while loop.
	   *
	   * @param {Function} condition The condition which determines if the source will be repeated.
	   * @param {Observable} source The observable sequence that will be run if the condition function returns true.
	   * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
	   */observableProto.doWhile=function(condition){return observableConcat([this,observableWhileDo(condition,this)]);};/**
	   *  Uses selector to determine which source in sources to use.
	   * @param {Function} selector The function which extracts the value for to test in a case statement.
	   * @param {Array} sources A object which has keys which correspond to the case statement labels.
	   * @param {Observable} [elseSource] The observable sequence or Promise that will be run if the sources are not matched. If this is not provided, it defaults to Rx.Observabe.empty with the specified scheduler.
	   *
	   * @returns {Observable} An observable sequence which is determined by a case statement.
	   */Observable['case']=function(selector,sources,defaultSourceOrScheduler){return observableDefer(function(){isPromise(defaultSourceOrScheduler)&&(defaultSourceOrScheduler=observableFromPromise(defaultSourceOrScheduler));defaultSourceOrScheduler||(defaultSourceOrScheduler=observableEmpty());isScheduler(defaultSourceOrScheduler)&&(defaultSourceOrScheduler=observableEmpty(defaultSourceOrScheduler));var result=sources[selector()];isPromise(result)&&(result=observableFromPromise(result));return result||defaultSourceOrScheduler;});};var ExpandObservable=function(__super__){inherits(ExpandObservable,__super__);function ExpandObservable(source,fn,scheduler){this.source=source;this._fn=fn;this._scheduler=scheduler;__super__.call(this);}function scheduleRecursive(args,recurse){var state=args[0],self=args[1];var work;if(state.q.length>0){work=state.q.shift();}else{state.isAcquired=false;return;}var m1=new SingleAssignmentDisposable();state.d.add(m1);m1.setDisposable(work.subscribe(new ExpandObserver(state,self,m1)));recurse([state,self]);}ExpandObservable.prototype._ensureActive=function(state){var isOwner=false;if(state.q.length>0){isOwner=!state.isAcquired;state.isAcquired=true;}isOwner&&state.m.setDisposable(this._scheduler.scheduleRecursive([state,this],scheduleRecursive));};ExpandObservable.prototype.subscribeCore=function(o){var m=new SerialDisposable(),d=new CompositeDisposable(m),state={q:[],m:m,d:d,activeCount:0,isAcquired:false,o:o};state.q.push(this.source);state.activeCount++;this._ensureActive(state);return d;};return ExpandObservable;}(ObservableBase);var ExpandObserver=function(__super__){inherits(ExpandObserver,__super__);function ExpandObserver(state,parent,m1){this._s=state;this._p=parent;this._m1=m1;__super__.call(this);}ExpandObserver.prototype.next=function(x){this._s.o.onNext(x);var result=tryCatch(this._p._fn)(x);if(result===errorObj){return this._s.o.onError(result.e);}this._s.q.push(result);this._s.activeCount++;this._p._ensureActive(this._s);};ExpandObserver.prototype.error=function(e){this._s.o.onError(e);};ExpandObserver.prototype.completed=function(){this._s.d.remove(this._m1);this._s.activeCount--;this._s.activeCount===0&&this._s.o.onCompleted();};return ExpandObserver;}(AbstractObserver);/**
	   *  Expands an observable sequence by recursively invoking selector.
	   *
	   * @param {Function} selector Selector function to invoke for each produced element, resulting in another sequence to which the selector will be invoked recursively again.
	   * @param {Scheduler} [scheduler] Scheduler on which to perform the expansion. If not provided, this defaults to the current thread scheduler.
	   * @returns {Observable} An observable sequence containing all the elements produced by the recursive expansion.
	   */observableProto.expand=function(selector,scheduler){isScheduler(scheduler)||(scheduler=currentThreadScheduler);return new ExpandObservable(this,selector,scheduler);};function argumentsToArray(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}return args;}var ForkJoinObservable=function(__super__){inherits(ForkJoinObservable,__super__);function ForkJoinObservable(sources,cb){this._sources=sources;this._cb=cb;__super__.call(this);}ForkJoinObservable.prototype.subscribeCore=function(o){if(this._sources.length===0){o.onCompleted();return disposableEmpty;}var count=this._sources.length;var state={finished:false,hasResults:new Array(count),hasCompleted:new Array(count),results:new Array(count)};var subscriptions=new CompositeDisposable();for(var i=0,len=this._sources.length;i<len;i++){var source=this._sources[i];isPromise(source)&&(source=observableFromPromise(source));subscriptions.add(source.subscribe(new ForkJoinObserver(o,state,i,this._cb,subscriptions)));}return subscriptions;};return ForkJoinObservable;}(ObservableBase);var ForkJoinObserver=function(__super__){inherits(ForkJoinObserver,__super__);function ForkJoinObserver(o,s,i,cb,subs){this._o=o;this._s=s;this._i=i;this._cb=cb;this._subs=subs;__super__.call(this);}ForkJoinObserver.prototype.next=function(x){if(!this._s.finished){this._s.hasResults[this._i]=true;this._s.results[this._i]=x;}};ForkJoinObserver.prototype.error=function(e){this._s.finished=true;this._o.onError(e);this._subs.dispose();};ForkJoinObserver.prototype.completed=function(){if(!this._s.finished){if(!this._s.hasResults[this._i]){return this._o.onCompleted();}this._s.hasCompleted[this._i]=true;for(var i=0;i<this._s.results.length;i++){if(!this._s.hasCompleted[i]){return;}}this._s.finished=true;var res=tryCatch(this._cb).apply(null,this._s.results);if(res===errorObj){return this._o.onError(res.e);}this._o.onNext(res);this._o.onCompleted();}};return ForkJoinObserver;}(AbstractObserver);/**
	   *  Runs all observable sequences in parallel and collect their last elements.
	   *
	   * @example
	   *  1 - res = Rx.Observable.forkJoin([obs1, obs2]);
	   *  1 - res = Rx.Observable.forkJoin(obs1, obs2, ...);
	   * @returns {Observable} An observable sequence with an array collecting the last elements of all the input sequences.
	   */Observable.forkJoin=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}var resultSelector=isFunction(args[len-1])?args.pop():argumentsToArray;Array.isArray(args[0])&&(args=args[0]);return new ForkJoinObservable(args,resultSelector);};/**
	   *  Runs two observable sequences in parallel and combines their last elemenets.
	   * @param {Observable} second Second observable sequence.
	   * @param {Function} resultSelector Result selector function to invoke with the last elements of both sequences.
	   * @returns {Observable} An observable sequence with the result of calling the selector function with the last elements of both input sequences.
	   */observableProto.forkJoin=function(){var len=arguments.length,args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}if(Array.isArray(args[0])){args[0].unshift(this);}else{args.unshift(this);}return Observable.forkJoin.apply(null,args);};/**
	   * Comonadic bind operator.
	   * @param {Function} selector A transform function to apply to each element.
	   * @param {Object} scheduler Scheduler used to execute the operation. If not specified, defaults to the ImmediateScheduler.
	   * @returns {Observable} An observable sequence which results from the comonadic bind operation.
	   */observableProto.manySelect=observableProto.extend=function(selector,scheduler){isScheduler(scheduler)||(scheduler=Rx.Scheduler.immediate);var source=this;return observableDefer(function(){var chain;return source.map(function(x){var curr=new ChainObservable(x);chain&&chain.onNext(x);chain=curr;return curr;}).tap(noop,function(e){chain&&chain.onError(e);},function(){chain&&chain.onCompleted();}).observeOn(scheduler).map(selector);},source);};var ChainObservable=function(__super__){inherits(ChainObservable,__super__);function ChainObservable(head){__super__.call(this);this.head=head;this.tail=new AsyncSubject();}addProperties(ChainObservable.prototype,Observer,{_subscribe:function _subscribe(o){var g=new CompositeDisposable();g.add(currentThreadScheduler.schedule(this,function(_,self){o.onNext(self.head);g.add(self.tail.mergeAll().subscribe(o));}));return g;},onCompleted:function onCompleted(){this.onNext(Observable.empty());},onError:function onError(e){this.onNext(Observable['throw'](e));},onNext:function onNext(v){this.tail.onNext(v);this.tail.onCompleted();}});return ChainObservable;}(Observable);var Map=root.Map||function(){function Map(){this.size=0;this._values=[];this._keys=[];}Map.prototype['delete']=function(key){var i=this._keys.indexOf(key);if(i===-1){return false;}this._values.splice(i,1);this._keys.splice(i,1);this.size--;return true;};Map.prototype.get=function(key){var i=this._keys.indexOf(key);return i===-1?undefined:this._values[i];};Map.prototype.set=function(key,value){var i=this._keys.indexOf(key);if(i===-1){this._keys.push(key);this._values.push(value);this.size++;}else{this._values[i]=value;}return this;};Map.prototype.forEach=function(cb,thisArg){for(var i=0;i<this.size;i++){cb.call(thisArg,this._values[i],this._keys[i]);}};return Map;}();/**
	   * @constructor
	   * Represents a join pattern over observable sequences.
	   */function Pattern(patterns){this.patterns=patterns;}/**
	   *  Creates a pattern that matches the current plan matches and when the specified observable sequences has an available value.
	   *  @param other Observable sequence to match in addition to the current pattern.
	   *  @return {Pattern} Pattern object that matches when all observable sequences in the pattern have an available value.
	   */Pattern.prototype.and=function(other){return new Pattern(this.patterns.concat(other));};/**
	   *  Matches when all observable sequences in the pattern (specified using a chain of and operators) have an available value and projects the values.
	   *  @param {Function} selector Selector that will be invoked with available values from the source sequences, in the same order of the sequences in the pattern.
	   *  @return {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
	   */Pattern.prototype.thenDo=function(selector){return new Plan(this,selector);};function Plan(expression,selector){this.expression=expression;this.selector=selector;}function handleOnError(o){return function(e){o.onError(e);};}function handleOnNext(self,observer){return function onNext(){var result=tryCatch(self.selector).apply(self,arguments);if(result===errorObj){return observer.onError(result.e);}observer.onNext(result);};}Plan.prototype.activate=function(externalSubscriptions,observer,deactivate){var joinObservers=[],errHandler=handleOnError(observer);for(var i=0,len=this.expression.patterns.length;i<len;i++){joinObservers.push(planCreateObserver(externalSubscriptions,this.expression.patterns[i],errHandler));}var activePlan=new ActivePlan(joinObservers,handleOnNext(this,observer),function(){for(var j=0,jlen=joinObservers.length;j<jlen;j++){joinObservers[j].removeActivePlan(activePlan);}deactivate(activePlan);});for(i=0,len=joinObservers.length;i<len;i++){joinObservers[i].addActivePlan(activePlan);}return activePlan;};function planCreateObserver(externalSubscriptions,observable,onError){var entry=externalSubscriptions.get(observable);if(!entry){var observer=new JoinObserver(observable,onError);externalSubscriptions.set(observable,observer);return observer;}return entry;}function ActivePlan(joinObserverArray,onNext,onCompleted){this.joinObserverArray=joinObserverArray;this.onNext=onNext;this.onCompleted=onCompleted;this.joinObservers=new Map();for(var i=0,len=this.joinObserverArray.length;i<len;i++){var joinObserver=this.joinObserverArray[i];this.joinObservers.set(joinObserver,joinObserver);}}ActivePlan.prototype.dequeue=function(){this.joinObservers.forEach(function(v){v.queue.shift();});};ActivePlan.prototype.match=function(){var i,len,hasValues=true;for(i=0,len=this.joinObserverArray.length;i<len;i++){if(this.joinObserverArray[i].queue.length===0){hasValues=false;break;}}if(hasValues){var firstValues=[],isCompleted=false;for(i=0,len=this.joinObserverArray.length;i<len;i++){firstValues.push(this.joinObserverArray[i].queue[0]);this.joinObserverArray[i].queue[0].kind==='C'&&(isCompleted=true);}if(isCompleted){this.onCompleted();}else{this.dequeue();var values=[];for(i=0,len=firstValues.length;i<firstValues.length;i++){values.push(firstValues[i].value);}this.onNext.apply(this,values);}}};var JoinObserver=function(__super__){inherits(JoinObserver,__super__);function JoinObserver(source,onError){__super__.call(this);this.source=source;this.onError=onError;this.queue=[];this.activePlans=[];this.subscription=new SingleAssignmentDisposable();this.isDisposed=false;}var JoinObserverPrototype=JoinObserver.prototype;JoinObserverPrototype.next=function(notification){if(!this.isDisposed){if(notification.kind==='E'){return this.onError(notification.error);}this.queue.push(notification);var activePlans=this.activePlans.slice(0);for(var i=0,len=activePlans.length;i<len;i++){activePlans[i].match();}}};JoinObserverPrototype.error=noop;JoinObserverPrototype.completed=noop;JoinObserverPrototype.addActivePlan=function(activePlan){this.activePlans.push(activePlan);};JoinObserverPrototype.subscribe=function(){this.subscription.setDisposable(this.source.materialize().subscribe(this));};JoinObserverPrototype.removeActivePlan=function(activePlan){this.activePlans.splice(this.activePlans.indexOf(activePlan),1);this.activePlans.length===0&&this.dispose();};JoinObserverPrototype.dispose=function(){__super__.prototype.dispose.call(this);if(!this.isDisposed){this.isDisposed=true;this.subscription.dispose();}};return JoinObserver;}(AbstractObserver);/**
	   *  Creates a pattern that matches when both observable sequences have an available value.
	   *
	   *  @param right Observable sequence to match with the current sequence.
	   *  @return {Pattern} Pattern object that matches when both observable sequences have an available value.
	   */observableProto.and=function(right){return new Pattern([this,right]);};/**
	   *  Matches when the observable sequence has an available value and projects the value.
	   *
	   *  @param {Function} selector Selector that will be invoked for values in the source sequence.
	   *  @returns {Plan} Plan that produces the projected values, to be fed (with other plans) to the when operator.
	   */observableProto.thenDo=function(selector){return new Pattern([this]).thenDo(selector);};/**
	   *  Joins together the results from several patterns.
	   *
	   *  @param plans A series of plans (specified as an Array of as a series of arguments) created by use of the Then operator on patterns.
	   *  @returns {Observable} Observable sequence with the results form matching several patterns.
	   */Observable.when=function(){var len=arguments.length,plans;if(Array.isArray(arguments[0])){plans=arguments[0];}else{plans=new Array(len);for(var i=0;i<len;i++){plans[i]=arguments[i];}}return new AnonymousObservable(function(o){var activePlans=[],externalSubscriptions=new Map();var outObserver=observerCreate(function(x){o.onNext(x);},function(err){externalSubscriptions.forEach(function(v){v.onError(err);});o.onError(err);},function(x){o.onCompleted();});try{for(var i=0,len=plans.length;i<len;i++){activePlans.push(plans[i].activate(externalSubscriptions,outObserver,function(activePlan){var idx=activePlans.indexOf(activePlan);activePlans.splice(idx,1);activePlans.length===0&&o.onCompleted();}));}}catch(e){return observableThrow(e).subscribe(o);}var group=new CompositeDisposable();externalSubscriptions.forEach(function(joinObserver){joinObserver.subscribe();group.add(joinObserver);});return group;});};var TimerObservable=function(__super__){inherits(TimerObservable,__super__);function TimerObservable(dt,s){this._dt=dt;this._s=s;__super__.call(this);}TimerObservable.prototype.subscribeCore=function(o){return this._s.scheduleFuture(o,this._dt,scheduleMethod);};function scheduleMethod(s,o){o.onNext(0);o.onCompleted();}return TimerObservable;}(ObservableBase);function _observableTimer(dueTime,scheduler){return new TimerObservable(dueTime,scheduler);}function observableTimerDateAndPeriod(dueTime,period,scheduler){return new AnonymousObservable(function(observer){var d=dueTime,p=normalizeTime(period);return scheduler.scheduleRecursiveFuture(0,d,function(count,self){if(p>0){var now=scheduler.now();d=new Date(d.getTime()+p);d.getTime()<=now&&(d=new Date(now+p));}observer.onNext(count);self(count+1,new Date(d));});});}function observableTimerTimeSpanAndPeriod(dueTime,period,scheduler){return dueTime===period?new AnonymousObservable(function(observer){return scheduler.schedulePeriodic(0,period,function(count){observer.onNext(count);return count+1;});}):observableDefer(function(){return observableTimerDateAndPeriod(new Date(scheduler.now()+dueTime),period,scheduler);});}/**
	   *  Returns an observable sequence that produces a value after each period.
	   *
	   * @example
	   *  1 - res = Rx.Observable.interval(1000);
	   *  2 - res = Rx.Observable.interval(1000, Rx.Scheduler.timeout);
	   *
	   * @param {Number} period Period for producing the values in the resulting sequence (specified as an integer denoting milliseconds).
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, Rx.Scheduler.timeout is used.
	   * @returns {Observable} An observable sequence that produces a value after each period.
	   */var observableinterval=Observable.interval=function(period,scheduler){return observableTimerTimeSpanAndPeriod(period,period,isScheduler(scheduler)?scheduler:defaultScheduler);};/**
	   *  Returns an observable sequence that produces a value after dueTime has elapsed and then after each period.
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) at which to produce the first value.
	   * @param {Mixed} [periodOrScheduler]  Period to produce subsequent values (specified as an integer denoting milliseconds), or the scheduler to run the timer on. If not specified, the resulting timer is not recurring.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence that produces a value after due time has elapsed and then each period.
	   */var observableTimer=Observable.timer=function(dueTime,periodOrScheduler,scheduler){var period;isScheduler(scheduler)||(scheduler=defaultScheduler);if(periodOrScheduler!=null&&typeof periodOrScheduler==='number'){period=periodOrScheduler;}else if(isScheduler(periodOrScheduler)){scheduler=periodOrScheduler;}if((dueTime instanceof Date||typeof dueTime==='number')&&period===undefined){return _observableTimer(dueTime,scheduler);}if(dueTime instanceof Date&&period!==undefined){return observableTimerDateAndPeriod(dueTime,periodOrScheduler,scheduler);}return observableTimerTimeSpanAndPeriod(dueTime,period,scheduler);};function observableDelayRelative(source,dueTime,scheduler){return new AnonymousObservable(function(o){var active=false,cancelable=new SerialDisposable(),exception=null,q=[],running=false,subscription;subscription=source.materialize().timestamp(scheduler).subscribe(function(notification){var d,shouldRun;if(notification.value.kind==='E'){q=[];q.push(notification);exception=notification.value.error;shouldRun=!running;}else{q.push({value:notification.value,timestamp:notification.timestamp+dueTime});shouldRun=!active;active=true;}if(shouldRun){if(exception!==null){o.onError(exception);}else{d=new SingleAssignmentDisposable();cancelable.setDisposable(d);d.setDisposable(scheduler.scheduleRecursiveFuture(null,dueTime,function(_,self){var e,recurseDueTime,result,shouldRecurse;if(exception!==null){return;}running=true;do{result=null;if(q.length>0&&q[0].timestamp-scheduler.now()<=0){result=q.shift().value;}if(result!==null){result.accept(o);}}while(result!==null);shouldRecurse=false;recurseDueTime=0;if(q.length>0){shouldRecurse=true;recurseDueTime=Math.max(0,q[0].timestamp-scheduler.now());}else{active=false;}e=exception;running=false;if(e!==null){o.onError(e);}else if(shouldRecurse){self(null,recurseDueTime);}}));}}});return new BinaryDisposable(subscription,cancelable);},source);}function observableDelayAbsolute(source,dueTime,scheduler){return observableDefer(function(){return observableDelayRelative(source,dueTime-scheduler.now(),scheduler);});}function delayWithSelector(source,subscriptionDelay,delayDurationSelector){var subDelay,selector;if(isFunction(subscriptionDelay)){selector=subscriptionDelay;}else{subDelay=subscriptionDelay;selector=delayDurationSelector;}return new AnonymousObservable(function(o){var delays=new CompositeDisposable(),atEnd=false,subscription=new SerialDisposable();function start(){subscription.setDisposable(source.subscribe(function(x){var delay=tryCatch(selector)(x);if(delay===errorObj){return o.onError(delay.e);}var d=new SingleAssignmentDisposable();delays.add(d);d.setDisposable(delay.subscribe(function(){o.onNext(x);delays.remove(d);done();},function(e){o.onError(e);},function(){o.onNext(x);delays.remove(d);done();}));},function(e){o.onError(e);},function(){atEnd=true;subscription.dispose();done();}));}function done(){atEnd&&delays.length===0&&o.onCompleted();}if(!subDelay){start();}else{subscription.setDisposable(subDelay.subscribe(start,function(e){o.onError(e);},start));}return new BinaryDisposable(subscription,delays);},source);}/**
	   *  Time shifts the observable sequence by dueTime.
	   *  The relative time intervals between the values are preserved.
	   *
	   * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
	   * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */observableProto.delay=function(){var firstArg=arguments[0];if(typeof firstArg==='number'||firstArg instanceof Date){var dueTime=firstArg,scheduler=arguments[1];isScheduler(scheduler)||(scheduler=defaultScheduler);return dueTime instanceof Date?observableDelayAbsolute(this,dueTime,scheduler):observableDelayRelative(this,dueTime,scheduler);}else if(Observable.isObservable(firstArg)||isFunction(firstArg)){return delayWithSelector(this,firstArg,arguments[1]);}else{throw new Error('Invalid arguments');}};var DebounceObservable=function(__super__){inherits(DebounceObservable,__super__);function DebounceObservable(source,dt,s){isScheduler(s)||(s=defaultScheduler);this.source=source;this._dt=dt;this._s=s;__super__.call(this);}DebounceObservable.prototype.subscribeCore=function(o){var cancelable=new SerialDisposable();return new BinaryDisposable(this.source.subscribe(new DebounceObserver(o,this._dt,this._s,cancelable)),cancelable);};return DebounceObservable;}(ObservableBase);var DebounceObserver=function(__super__){inherits(DebounceObserver,__super__);function DebounceObserver(observer,dueTime,scheduler,cancelable){this._o=observer;this._d=dueTime;this._scheduler=scheduler;this._c=cancelable;this._v=null;this._hv=false;this._id=0;__super__.call(this);}function scheduleFuture(s,state){state.self._hv&&state.self._id===state.currentId&&state.self._o.onNext(state.x);state.self._hv=false;}DebounceObserver.prototype.next=function(x){this._hv=true;this._v=x;var currentId=++this._id,d=new SingleAssignmentDisposable();this._c.setDisposable(d);d.setDisposable(this._scheduler.scheduleFuture(this,this._d,function(_,self){self._hv&&self._id===currentId&&self._o.onNext(x);self._hv=false;}));};DebounceObserver.prototype.error=function(e){this._c.dispose();this._o.onError(e);this._hv=false;this._id++;};DebounceObserver.prototype.completed=function(){this._c.dispose();this._hv&&this._o.onNext(this._v);this._o.onCompleted();this._hv=false;this._id++;};return DebounceObserver;}(AbstractObserver);function debounceWithSelector(source,durationSelector){return new AnonymousObservable(function(o){var value,hasValue=false,cancelable=new SerialDisposable(),id=0;var subscription=source.subscribe(function(x){var throttle=tryCatch(durationSelector)(x);if(throttle===errorObj){return o.onError(throttle.e);}isPromise(throttle)&&(throttle=observableFromPromise(throttle));hasValue=true;value=x;id++;var currentid=id,d=new SingleAssignmentDisposable();cancelable.setDisposable(d);d.setDisposable(throttle.subscribe(function(){hasValue&&id===currentid&&o.onNext(value);hasValue=false;d.dispose();},function(e){o.onError(e);},function(){hasValue&&id===currentid&&o.onNext(value);hasValue=false;d.dispose();}));},function(e){cancelable.dispose();o.onError(e);hasValue=false;id++;},function(){cancelable.dispose();hasValue&&o.onNext(value);o.onCompleted();hasValue=false;id++;});return new BinaryDisposable(subscription,cancelable);},source);}observableProto.debounce=function(){if(isFunction(arguments[0])){return debounceWithSelector(this,arguments[0]);}else if(typeof arguments[0]==='number'){return new DebounceObservable(this,arguments[0],arguments[1]);}else{throw new Error('Invalid arguments');}};/**
	   *  Projects each element of an observable sequence into zero or more windows which are produced based on timing information.
	   * @param {Number} timeSpan Length of each window (specified as an integer denoting milliseconds).
	   * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive windows (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent windows.
	   * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of windows.
	   */observableProto.windowWithTime=observableProto.windowTime=function(timeSpan,timeShiftOrScheduler,scheduler){var source=this,timeShift;timeShiftOrScheduler==null&&(timeShift=timeSpan);isScheduler(scheduler)||(scheduler=defaultScheduler);if(typeof timeShiftOrScheduler==='number'){timeShift=timeShiftOrScheduler;}else if(isScheduler(timeShiftOrScheduler)){timeShift=timeSpan;scheduler=timeShiftOrScheduler;}return new AnonymousObservable(function(observer){var groupDisposable,nextShift=timeShift,nextSpan=timeSpan,q=[],refCountDisposable,timerD=new SerialDisposable(),totalTime=0;groupDisposable=new CompositeDisposable(timerD),refCountDisposable=new RefCountDisposable(groupDisposable);function createTimer(){var m=new SingleAssignmentDisposable(),isSpan=false,isShift=false;timerD.setDisposable(m);if(nextSpan===nextShift){isSpan=true;isShift=true;}else if(nextSpan<nextShift){isSpan=true;}else{isShift=true;}var newTotalTime=isSpan?nextSpan:nextShift,ts=newTotalTime-totalTime;totalTime=newTotalTime;if(isSpan){nextSpan+=timeShift;}if(isShift){nextShift+=timeShift;}m.setDisposable(scheduler.scheduleFuture(null,ts,function(){if(isShift){var s=new Subject();q.push(s);observer.onNext(addRef(s,refCountDisposable));}isSpan&&q.shift().onCompleted();createTimer();}));};q.push(new Subject());observer.onNext(addRef(q[0],refCountDisposable));createTimer();groupDisposable.add(source.subscribe(function(x){for(var i=0,len=q.length;i<len;i++){q[i].onNext(x);}},function(e){for(var i=0,len=q.length;i<len;i++){q[i].onError(e);}observer.onError(e);},function(){for(var i=0,len=q.length;i<len;i++){q[i].onCompleted();}observer.onCompleted();}));return refCountDisposable;},source);};/**
	   *  Projects each element of an observable sequence into a window that is completed when either it's full or a given amount of time has elapsed.
	   * @param {Number} timeSpan Maximum time length of a window.
	   * @param {Number} count Maximum element count of a window.
	   * @param {Scheduler} [scheduler]  Scheduler to run windowing timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of windows.
	   */observableProto.windowWithTimeOrCount=observableProto.windowTimeOrCount=function(timeSpan,count,scheduler){var source=this;isScheduler(scheduler)||(scheduler=defaultScheduler);return new AnonymousObservable(function(observer){var timerD=new SerialDisposable(),groupDisposable=new CompositeDisposable(timerD),refCountDisposable=new RefCountDisposable(groupDisposable),n=0,windowId=0,s=new Subject();function createTimer(id){var m=new SingleAssignmentDisposable();timerD.setDisposable(m);m.setDisposable(scheduler.scheduleFuture(null,timeSpan,function(){if(id!==windowId){return;}n=0;var newId=++windowId;s.onCompleted();s=new Subject();observer.onNext(addRef(s,refCountDisposable));createTimer(newId);}));}observer.onNext(addRef(s,refCountDisposable));createTimer(0);groupDisposable.add(source.subscribe(function(x){var newId=0,newWindow=false;s.onNext(x);if(++n===count){newWindow=true;n=0;newId=++windowId;s.onCompleted();s=new Subject();observer.onNext(addRef(s,refCountDisposable));}newWindow&&createTimer(newId);},function(e){s.onError(e);observer.onError(e);},function(){s.onCompleted();observer.onCompleted();}));return refCountDisposable;},source);};function toArray(x){return x.toArray();}/**
	   *  Projects each element of an observable sequence into zero or more buffers which are produced based on timing information.
	   * @param {Number} timeSpan Length of each buffer (specified as an integer denoting milliseconds).
	   * @param {Mixed} [timeShiftOrScheduler]  Interval between creation of consecutive buffers (specified as an integer denoting milliseconds), or an optional scheduler parameter. If not specified, the time shift corresponds to the timeSpan parameter, resulting in non-overlapping adjacent buffers.
	   * @param {Scheduler} [scheduler]  Scheduler to run buffer timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of buffers.
	   */observableProto.bufferWithTime=observableProto.bufferTime=function(timeSpan,timeShiftOrScheduler,scheduler){return this.windowWithTime(timeSpan,timeShiftOrScheduler,scheduler).flatMap(toArray);};function toArray(x){return x.toArray();}/**
	   *  Projects each element of an observable sequence into a buffer that is completed when either it's full or a given amount of time has elapsed.
	   * @param {Number} timeSpan Maximum time length of a buffer.
	   * @param {Number} count Maximum element count of a buffer.
	   * @param {Scheduler} [scheduler]  Scheduler to run bufferin timers on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence of buffers.
	   */observableProto.bufferWithTimeOrCount=observableProto.bufferTimeOrCount=function(timeSpan,count,scheduler){return this.windowWithTimeOrCount(timeSpan,count,scheduler).flatMap(toArray);};var TimeIntervalObservable=function(__super__){inherits(TimeIntervalObservable,__super__);function TimeIntervalObservable(source,s){this.source=source;this._s=s;__super__.call(this);}TimeIntervalObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new TimeIntervalObserver(o,this._s));};return TimeIntervalObservable;}(ObservableBase);var TimeIntervalObserver=function(__super__){inherits(TimeIntervalObserver,__super__);function TimeIntervalObserver(o,s){this._o=o;this._s=s;this._l=s.now();__super__.call(this);}TimeIntervalObserver.prototype.next=function(x){var now=this._s.now(),span=now-this._l;this._l=now;this._o.onNext({value:x,interval:span});};TimeIntervalObserver.prototype.error=function(e){this._o.onError(e);};TimeIntervalObserver.prototype.completed=function(){this._o.onCompleted();};return TimeIntervalObserver;}(AbstractObserver);/**
	   *  Records the time interval between consecutive values in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timeInterval();
	   *  2 - res = source.timeInterval(Rx.Scheduler.timeout);
	   *
	   * @param [scheduler]  Scheduler used to compute time intervals. If not specified, the timeout scheduler is used.
	   * @returns {Observable} An observable sequence with time interval information on values.
	   */observableProto.timeInterval=function(scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new TimeIntervalObservable(this,scheduler);};var TimestampObservable=function(__super__){inherits(TimestampObservable,__super__);function TimestampObservable(source,s){this.source=source;this._s=s;__super__.call(this);}TimestampObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new TimestampObserver(o,this._s));};return TimestampObservable;}(ObservableBase);var TimestampObserver=function(__super__){inherits(TimestampObserver,__super__);function TimestampObserver(o,s){this._o=o;this._s=s;__super__.call(this);}TimestampObserver.prototype.next=function(x){this._o.onNext({value:x,timestamp:this._s.now()});};TimestampObserver.prototype.error=function(e){this._o.onError(e);};TimestampObserver.prototype.completed=function(){this._o.onCompleted();};return TimestampObserver;}(AbstractObserver);/**
	   *  Records the timestamp for each value in an observable sequence.
	   *
	   * @example
	   *  1 - res = source.timestamp(); // produces { value: x, timestamp: ts }
	   *  2 - res = source.timestamp(Rx.Scheduler.default);
	   *
	   * @param {Scheduler} [scheduler]  Scheduler used to compute timestamps. If not specified, the default scheduler is used.
	   * @returns {Observable} An observable sequence with timestamp information on values.
	   */observableProto.timestamp=function(scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new TimestampObservable(this,scheduler);};var SampleObservable=function(__super__){inherits(SampleObservable,__super__);function SampleObservable(source,sampler){this.source=source;this._sampler=sampler;__super__.call(this);}SampleObservable.prototype.subscribeCore=function(o){var state={o:o,atEnd:false,value:null,hasValue:false,sourceSubscription:new SingleAssignmentDisposable()};state.sourceSubscription.setDisposable(this.source.subscribe(new SampleSourceObserver(state)));return new BinaryDisposable(state.sourceSubscription,this._sampler.subscribe(new SamplerObserver(state)));};return SampleObservable;}(ObservableBase);var SamplerObserver=function(__super__){inherits(SamplerObserver,__super__);function SamplerObserver(s){this._s=s;__super__.call(this);}SamplerObserver.prototype._handleMessage=function(){if(this._s.hasValue){this._s.hasValue=false;this._s.o.onNext(this._s.value);}this._s.atEnd&&this._s.o.onCompleted();};SamplerObserver.prototype.next=function(){this._handleMessage();};SamplerObserver.prototype.error=function(e){this._s.onError(e);};SamplerObserver.prototype.completed=function(){this._handleMessage();};return SamplerObserver;}(AbstractObserver);var SampleSourceObserver=function(__super__){inherits(SampleSourceObserver,__super__);function SampleSourceObserver(s){this._s=s;__super__.call(this);}SampleSourceObserver.prototype.next=function(x){this._s.hasValue=true;this._s.value=x;};SampleSourceObserver.prototype.error=function(e){this._s.o.onError(e);};SampleSourceObserver.prototype.completed=function(){this._s.atEnd=true;this._s.sourceSubscription.dispose();};return SampleSourceObserver;}(AbstractObserver);/**
	   *  Samples the observable sequence at each interval.
	   *
	   * @example
	   *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
	   *  2 - res = source.sample(5000); // 5 seconds
	   *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
	   *
	   * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
	   * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Sampled observable sequence.
	   */observableProto.sample=function(intervalOrSampler,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return typeof intervalOrSampler==='number'?new SampleObservable(this,observableinterval(intervalOrSampler,scheduler)):new SampleObservable(this,intervalOrSampler);};var TimeoutError=Rx.TimeoutError=function(message){this.message=message||'Timeout has occurred';this.name='TimeoutError';Error.call(this);};TimeoutError.prototype=Object.create(Error.prototype);function timeoutWithSelector(source,firstTimeout,timeoutDurationSelector,other){if(isFunction(firstTimeout)){other=timeoutDurationSelector;timeoutDurationSelector=firstTimeout;firstTimeout=observableNever();}Observable.isObservable(other)||(other=observableThrow(new TimeoutError()));return new AnonymousObservable(function(o){var subscription=new SerialDisposable(),timer=new SerialDisposable(),original=new SingleAssignmentDisposable();subscription.setDisposable(original);var id=0,switched=false;function setTimer(timeout){var myId=id,d=new SingleAssignmentDisposable();function timerWins(){switched=myId===id;return switched;}timer.setDisposable(d);d.setDisposable(timeout.subscribe(function(){timerWins()&&subscription.setDisposable(other.subscribe(o));d.dispose();},function(e){timerWins()&&o.onError(e);},function(){timerWins()&&subscription.setDisposable(other.subscribe(o));}));};setTimer(firstTimeout);function oWins(){var res=!switched;if(res){id++;}return res;}original.setDisposable(source.subscribe(function(x){if(oWins()){o.onNext(x);var timeout=tryCatch(timeoutDurationSelector)(x);if(timeout===errorObj){return o.onError(timeout.e);}setTimer(isPromise(timeout)?observableFromPromise(timeout):timeout);}},function(e){oWins()&&o.onError(e);},function(){oWins()&&o.onCompleted();}));return new BinaryDisposable(subscription,timer);},source);}function timeout(source,dueTime,other,scheduler){if(isScheduler(other)){scheduler=other;other=observableThrow(new TimeoutError());}if(other instanceof Error){other=observableThrow(other);}isScheduler(scheduler)||(scheduler=defaultScheduler);Observable.isObservable(other)||(other=observableThrow(new TimeoutError()));return new AnonymousObservable(function(o){var id=0,original=new SingleAssignmentDisposable(),subscription=new SerialDisposable(),switched=false,timer=new SerialDisposable();subscription.setDisposable(original);function createTimer(){var myId=id;timer.setDisposable(scheduler.scheduleFuture(null,dueTime,function(){switched=id===myId;if(switched){isPromise(other)&&(other=observableFromPromise(other));subscription.setDisposable(other.subscribe(o));}}));}createTimer();original.setDisposable(source.subscribe(function(x){if(!switched){id++;o.onNext(x);createTimer();}},function(e){if(!switched){id++;o.onError(e);}},function(){if(!switched){id++;o.onCompleted();}}));return new BinaryDisposable(subscription,timer);},source);}observableProto.timeout=function(){var firstArg=arguments[0];if(firstArg instanceof Date||typeof firstArg==='number'){return timeout(this,firstArg,arguments[1],arguments[2]);}else if(Observable.isObservable(firstArg)||isFunction(firstArg)){return timeoutWithSelector(this,firstArg,arguments[1],arguments[2]);}else{throw new Error('Invalid arguments');}};var GenerateAbsoluteObservable=function(__super__){inherits(GenerateAbsoluteObservable,__super__);function GenerateAbsoluteObservable(state,cndFn,itrFn,resFn,timeFn,s){this._state=state;this._cndFn=cndFn;this._itrFn=itrFn;this._resFn=resFn;this._timeFn=timeFn;this._s=s;__super__.call(this);}function scheduleRecursive(state,recurse){state.hasResult&&state.o.onNext(state.result);if(state.first){state.first=false;}else{state.newState=tryCatch(state.self._itrFn)(state.newState);if(state.newState===errorObj){return state.o.onError(state.newState.e);}}state.hasResult=tryCatch(state.self._cndFn)(state.newState);if(state.hasResult===errorObj){return state.o.onError(state.hasResult.e);}if(state.hasResult){state.result=tryCatch(state.self._resFn)(state.newState);if(state.result===errorObj){return state.o.onError(state.result.e);}var time=tryCatch(state.self._timeFn)(state.newState);if(time===errorObj){return state.o.onError(time.e);}recurse(state,time);}else{state.o.onCompleted();}}GenerateAbsoluteObservable.prototype.subscribeCore=function(o){var state={o:o,self:this,newState:this._state,first:true,hasResult:false};return this._s.scheduleRecursiveFuture(state,new Date(this._s.now()),scheduleRecursive);};return GenerateAbsoluteObservable;}(ObservableBase);/**
	   *  GenerateAbsolutes an observable sequence by iterating a state from an initial state until the condition fails.
	   *
	   * @example
	   *  res = source.generateWithAbsoluteTime(0,
	   *      function (x) { return return true; },
	   *      function (x) { return x + 1; },
	   *      function (x) { return x; },
	   *      function (x) { return new Date(); }
	   *  });
	   *
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning Date values.
	   * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
	   * @returns {Observable} The generated sequence.
	   */Observable.generateWithAbsoluteTime=function(initialState,condition,iterate,resultSelector,timeSelector,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new GenerateAbsoluteObservable(initialState,condition,iterate,resultSelector,timeSelector,scheduler);};var GenerateRelativeObservable=function(__super__){inherits(GenerateRelativeObservable,__super__);function GenerateRelativeObservable(state,cndFn,itrFn,resFn,timeFn,s){this._state=state;this._cndFn=cndFn;this._itrFn=itrFn;this._resFn=resFn;this._timeFn=timeFn;this._s=s;__super__.call(this);}function scheduleRecursive(state,recurse){state.hasResult&&state.o.onNext(state.result);if(state.first){state.first=false;}else{state.newState=tryCatch(state.self._itrFn)(state.newState);if(state.newState===errorObj){return state.o.onError(state.newState.e);}}state.hasResult=tryCatch(state.self._cndFn)(state.newState);if(state.hasResult===errorObj){return state.o.onError(state.hasResult.e);}if(state.hasResult){state.result=tryCatch(state.self._resFn)(state.newState);if(state.result===errorObj){return state.o.onError(state.result.e);}var time=tryCatch(state.self._timeFn)(state.newState);if(time===errorObj){return state.o.onError(time.e);}recurse(state,time);}else{state.o.onCompleted();}}GenerateRelativeObservable.prototype.subscribeCore=function(o){var state={o:o,self:this,newState:this._state,first:true,hasResult:false};return this._s.scheduleRecursiveFuture(state,0,scheduleRecursive);};return GenerateRelativeObservable;}(ObservableBase);/**
	   *  Generates an observable sequence by iterating a state from an initial state until the condition fails.
	   *
	   * @example
	   *  res = source.generateWithRelativeTime(0,
	   *      function (x) { return return true; },
	   *      function (x) { return x + 1; },
	   *      function (x) { return x; },
	   *      function (x) { return 500; }
	   *  );
	   *
	   * @param {Mixed} initialState Initial state.
	   * @param {Function} condition Condition to terminate generation (upon returning false).
	   * @param {Function} iterate Iteration step function.
	   * @param {Function} resultSelector Selector function for results produced in the sequence.
	   * @param {Function} timeSelector Time selector function to control the speed of values being produced each iteration, returning integer values denoting milliseconds.
	   * @param {Scheduler} [scheduler]  Scheduler on which to run the generator loop. If not specified, the timeout scheduler is used.
	   * @returns {Observable} The generated sequence.
	   */Observable.generateWithRelativeTime=function(initialState,condition,iterate,resultSelector,timeSelector,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new GenerateRelativeObservable(initialState,condition,iterate,resultSelector,timeSelector,scheduler);};var DelaySubscription=function(__super__){inherits(DelaySubscription,__super__);function DelaySubscription(source,dt,s){this.source=source;this._dt=dt;this._s=s;__super__.call(this);}DelaySubscription.prototype.subscribeCore=function(o){var d=new SerialDisposable();d.setDisposable(this._s.scheduleFuture([this.source,o,d],this._dt,scheduleMethod));return d;};function scheduleMethod(s,state){var source=state[0],o=state[1],d=state[2];d.setDisposable(source.subscribe(o));}return DelaySubscription;}(ObservableBase);/**
	   *  Time shifts the observable sequence by delaying the subscription with the specified relative time duration, using the specified scheduler to run timers.
	   *
	   * @example
	   *  1 - res = source.delaySubscription(5000); // 5s
	   *  2 - res = source.delaySubscription(5000, Rx.Scheduler.default); // 5 seconds
	   *
	   * @param {Number} dueTime Relative or absolute time shift of the subscription.
	   * @param {Scheduler} [scheduler]  Scheduler to run the subscription delay timer on. If not specified, the timeout scheduler is used.
	   * @returns {Observable} Time-shifted sequence.
	   */observableProto.delaySubscription=function(dueTime,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new DelaySubscription(this,dueTime,scheduler);};var SkipLastWithTimeObservable=function(__super__){inherits(SkipLastWithTimeObservable,__super__);function SkipLastWithTimeObservable(source,d,s){this.source=source;this._d=d;this._s=s;__super__.call(this);}SkipLastWithTimeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new SkipLastWithTimeObserver(o,this));};return SkipLastWithTimeObservable;}(ObservableBase);var SkipLastWithTimeObserver=function(__super__){inherits(SkipLastWithTimeObserver,__super__);function SkipLastWithTimeObserver(o,p){this._o=o;this._s=p._s;this._d=p._d;this._q=[];__super__.call(this);}SkipLastWithTimeObserver.prototype.next=function(x){var now=this._s.now();this._q.push({interval:now,value:x});while(this._q.length>0&&now-this._q[0].interval>=this._d){this._o.onNext(this._q.shift().value);}};SkipLastWithTimeObserver.prototype.error=function(e){this._o.onError(e);};SkipLastWithTimeObserver.prototype.completed=function(){var now=this._s.now();while(this._q.length>0&&now-this._q[0].interval>=this._d){this._o.onNext(this._q.shift().value);}this._o.onCompleted();};return SkipLastWithTimeObserver;}(AbstractObserver);/**
	   *  Skips elements for the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for skipping elements from the end of the sequence.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout
	   * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the end of the source sequence.
	   */observableProto.skipLastWithTime=function(duration,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new SkipLastWithTimeObservable(this,duration,scheduler);};var TakeLastWithTimeObservable=function(__super__){inherits(TakeLastWithTimeObservable,__super__);function TakeLastWithTimeObservable(source,d,s){this.source=source;this._d=d;this._s=s;__super__.call(this);}TakeLastWithTimeObservable.prototype.subscribeCore=function(o){return this.source.subscribe(new TakeLastWithTimeObserver(o,this._d,this._s));};return TakeLastWithTimeObservable;}(ObservableBase);var TakeLastWithTimeObserver=function(__super__){inherits(TakeLastWithTimeObserver,__super__);function TakeLastWithTimeObserver(o,d,s){this._o=o;this._d=d;this._s=s;this._q=[];__super__.call(this);}TakeLastWithTimeObserver.prototype.next=function(x){var now=this._s.now();this._q.push({interval:now,value:x});while(this._q.length>0&&now-this._q[0].interval>=this._d){this._q.shift();}};TakeLastWithTimeObserver.prototype.error=function(e){this._o.onError(e);};TakeLastWithTimeObserver.prototype.completed=function(){var now=this._s.now();while(this._q.length>0){var next=this._q.shift();if(now-next.interval<=this._d){this._o.onNext(next.value);}}this._o.onCompleted();};return TakeLastWithTimeObserver;}(AbstractObserver);/**
	   *  Returns elements within the specified duration from the end of the observable source sequence, using the specified schedulers to run timers and to drain the collected elements.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the end of the sequence.
	   * @param {Scheduler} [scheduler]  Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements taken during the specified duration from the end of the source sequence.
	   */observableProto.takeLastWithTime=function(duration,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new TakeLastWithTimeObservable(this,duration,scheduler);};/**
	   *  Returns an array with the elements within the specified duration from the end of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the end of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence containing a single array with the elements taken during the specified duration from the end of the source sequence.
	   */observableProto.takeLastBufferWithTime=function(duration,scheduler){var source=this;isScheduler(scheduler)||(scheduler=defaultScheduler);return new AnonymousObservable(function(o){var q=[];return source.subscribe(function(x){var now=scheduler.now();q.push({interval:now,value:x});while(q.length>0&&now-q[0].interval>=duration){q.shift();}},function(e){o.onError(e);},function(){var now=scheduler.now(),res=[];while(q.length>0){var next=q.shift();now-next.interval<=duration&&res.push(next.value);}o.onNext(res);o.onCompleted();});},source);};var TakeWithTimeObservable=function(__super__){inherits(TakeWithTimeObservable,__super__);function TakeWithTimeObservable(source,d,s){this.source=source;this._d=d;this._s=s;__super__.call(this);}function scheduleMethod(s,o){o.onCompleted();}TakeWithTimeObservable.prototype.subscribeCore=function(o){return new BinaryDisposable(this._s.scheduleFuture(o,this._d,scheduleMethod),this.source.subscribe(o));};return TakeWithTimeObservable;}(ObservableBase);/**
	   *  Takes elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
	   *
	   * @example
	   *  1 - res = source.takeWithTime(5000,  [optional scheduler]);
	   * @description
	   *  This operator accumulates a queue with a length enough to store elements received during the initial duration window.
	   *  As more elements are received, elements older than the specified duration are taken from the queue and produced on the
	   *  result sequence. This causes elements to be delayed with duration.
	   * @param {Number} duration Duration for taking elements from the start of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements taken during the specified duration from the start of the source sequence.
	   */observableProto.takeWithTime=function(duration,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new TakeWithTimeObservable(this,duration,scheduler);};var SkipWithTimeObservable=function(__super__){inherits(SkipWithTimeObservable,__super__);function SkipWithTimeObservable(source,d,s){this.source=source;this._d=d;this._s=s;this._open=false;__super__.call(this);}function scheduleMethod(s,self){self._open=true;}SkipWithTimeObservable.prototype.subscribeCore=function(o){return new BinaryDisposable(this._s.scheduleFuture(this,this._d,scheduleMethod),this.source.subscribe(new SkipWithTimeObserver(o,this)));};return SkipWithTimeObservable;}(ObservableBase);var SkipWithTimeObserver=function(__super__){inherits(SkipWithTimeObserver,__super__);function SkipWithTimeObserver(o,p){this._o=o;this._p=p;__super__.call(this);}SkipWithTimeObserver.prototype.next=function(x){this._p._open&&this._o.onNext(x);};SkipWithTimeObserver.prototype.error=function(e){this._o.onError(e);};SkipWithTimeObserver.prototype.completed=function(){this._o.onCompleted();};return SkipWithTimeObserver;}(AbstractObserver);/**
	   *  Skips elements for the specified duration from the start of the observable source sequence, using the specified scheduler to run timers.
	   * @description
	   *  Specifying a zero value for duration doesn't guarantee no elements will be dropped from the start of the source sequence.
	   *  This is a side-effect of the asynchrony introduced by the scheduler, where the action that causes callbacks from the source sequence to be forwarded
	   *  may not execute immediately, despite the zero due time.
	   *
	   *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the duration.
	   * @param {Number} duration Duration for skipping elements from the start of the sequence.
	   * @param {Scheduler} scheduler Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements skipped during the specified duration from the start of the source sequence.
	   */observableProto.skipWithTime=function(duration,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new SkipWithTimeObservable(this,duration,scheduler);};var SkipUntilWithTimeObservable=function(__super__){inherits(SkipUntilWithTimeObservable,__super__);function SkipUntilWithTimeObservable(source,startTime,scheduler){this.source=source;this._st=startTime;this._s=scheduler;__super__.call(this);}function scheduleMethod(s,state){state._open=true;}SkipUntilWithTimeObservable.prototype.subscribeCore=function(o){this._open=false;return new BinaryDisposable(this._s.scheduleFuture(this,this._st,scheduleMethod),this.source.subscribe(new SkipUntilWithTimeObserver(o,this)));};return SkipUntilWithTimeObservable;}(ObservableBase);var SkipUntilWithTimeObserver=function(__super__){inherits(SkipUntilWithTimeObserver,__super__);function SkipUntilWithTimeObserver(o,p){this._o=o;this._p=p;__super__.call(this);}SkipUntilWithTimeObserver.prototype.next=function(x){this._p._open&&this._o.onNext(x);};SkipUntilWithTimeObserver.prototype.error=function(e){this._o.onError(e);};SkipUntilWithTimeObserver.prototype.completed=function(){this._o.onCompleted();};return SkipUntilWithTimeObserver;}(AbstractObserver);/**
	   *  Skips elements from the observable source sequence until the specified start time, using the specified scheduler to run timers.
	   *  Errors produced by the source sequence are always forwarded to the result sequence, even if the error occurs before the start time.
	   *
	   * @examples
	   *  1 - res = source.skipUntilWithTime(new Date(), [scheduler]);
	   *  2 - res = source.skipUntilWithTime(5000, [scheduler]);
	   * @param {Date|Number} startTime Time to start taking elements from the source sequence. If this value is less than or equal to Date(), no elements will be skipped.
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on. If not specified, defaults to Rx.Scheduler.timeout.
	   * @returns {Observable} An observable sequence with the elements skipped until the specified start time.
	   */observableProto.skipUntilWithTime=function(startTime,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);return new SkipUntilWithTimeObservable(this,startTime,scheduler);};/**
	   *  Takes elements for the specified duration until the specified end time, using the specified scheduler to run timers.
	   * @param {Number | Date} endTime Time to stop taking elements from the source sequence. If this value is less than or equal to new Date(), the result stream will complete immediately.
	   * @param {Scheduler} [scheduler] Scheduler to run the timer on.
	   * @returns {Observable} An observable sequence with the elements taken until the specified end time.
	   */observableProto.takeUntilWithTime=function(endTime,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);var source=this;return new AnonymousObservable(function(o){return new BinaryDisposable(scheduler.scheduleFuture(o,endTime,function(_,o){o.onCompleted();}),source.subscribe(o));},source);};/**
	   * Returns an Observable that emits only the first item emitted by the source Observable during sequential time windows of a specified duration.
	   * @param {Number} windowDuration time to wait before emitting another item after emitting the last item
	   * @param {Scheduler} [scheduler] the Scheduler to use internally to manage the timers that handle timeout for each item. If not provided, defaults to Scheduler.timeout.
	   * @returns {Observable} An Observable that performs the throttle operation.
	   */observableProto.throttle=function(windowDuration,scheduler){isScheduler(scheduler)||(scheduler=defaultScheduler);var duration=+windowDuration||0;if(duration<=0){throw new RangeError('windowDuration cannot be less or equal zero.');}var source=this;return new AnonymousObservable(function(o){var lastOnNext=0;return source.subscribe(function(x){var now=scheduler.now();if(lastOnNext===0||now-lastOnNext>=duration){lastOnNext=now;o.onNext(x);}},function(e){o.onError(e);},function(){o.onCompleted();});},source);};var TransduceObserver=function(__super__){inherits(TransduceObserver,__super__);function TransduceObserver(o,xform){this._o=o;this._xform=xform;__super__.call(this);}TransduceObserver.prototype.next=function(x){var res=tryCatch(this._xform['@@transducer/step']).call(this._xform,this._o,x);if(res===errorObj){this._o.onError(res.e);}};TransduceObserver.prototype.error=function(e){this._o.onError(e);};TransduceObserver.prototype.completed=function(){this._xform['@@transducer/result'](this._o);};return TransduceObserver;}(AbstractObserver);function transformForObserver(o){return{'@@transducer/init':function transducerInit(){return o;},'@@transducer/step':function transducerStep(obs,input){return obs.onNext(input);},'@@transducer/result':function transducerResult(obs){return obs.onCompleted();}};}/**
	   * Executes a transducer to transform the observable sequence
	   * @param {Transducer} transducer A transducer to execute
	   * @returns {Observable} An Observable sequence containing the results from the transducer.
	   */observableProto.transduce=function(transducer){var source=this;return new AnonymousObservable(function(o){var xform=transducer(transformForObserver(o));return source.subscribe(new TransduceObserver(o,xform));},source);};var SwitchFirstObservable=function(__super__){inherits(SwitchFirstObservable,__super__);function SwitchFirstObservable(source){this.source=source;__super__.call(this);}SwitchFirstObservable.prototype.subscribeCore=function(o){var m=new SingleAssignmentDisposable(),g=new CompositeDisposable(),state={hasCurrent:false,isStopped:false,o:o,g:g};g.add(m);m.setDisposable(this.source.subscribe(new SwitchFirstObserver(state)));return g;};return SwitchFirstObservable;}(ObservableBase);var SwitchFirstObserver=function(__super__){inherits(SwitchFirstObserver,__super__);function SwitchFirstObserver(state){this._s=state;__super__.call(this);}SwitchFirstObserver.prototype.next=function(x){if(!this._s.hasCurrent){this._s.hasCurrent=true;isPromise(x)&&(x=observableFromPromise(x));var inner=new SingleAssignmentDisposable();this._s.g.add(inner);inner.setDisposable(x.subscribe(new InnerObserver(this._s,inner)));}};SwitchFirstObserver.prototype.error=function(e){this._s.o.onError(e);};SwitchFirstObserver.prototype.completed=function(){this._s.isStopped=true;!this._s.hasCurrent&&this._s.g.length===1&&this._s.o.onCompleted();};inherits(InnerObserver,__super__);function InnerObserver(state,inner){this._s=state;this._i=inner;__super__.call(this);}InnerObserver.prototype.next=function(x){this._s.o.onNext(x);};InnerObserver.prototype.error=function(e){this._s.o.onError(e);};InnerObserver.prototype.completed=function(){this._s.g.remove(this._i);this._s.hasCurrent=false;this._s.isStopped&&this._s.g.length===1&&this._s.o.onCompleted();};return SwitchFirstObserver;}(AbstractObserver);/**
	   * Performs a exclusive waiting for the first to finish before subscribing to another observable.
	   * Observables that come in between subscriptions will be dropped on the floor.
	   * @returns {Observable} A exclusive observable with only the results that happen when subscribed.
	   */observableProto.switchFirst=function(){return new SwitchFirstObservable(this);};observableProto.flatMapFirst=observableProto.exhaustMap=function(selector,resultSelector,thisArg){return new FlatMapObservable(this,selector,resultSelector,thisArg).switchFirst();};observableProto.flatMapWithMaxConcurrent=observableProto.flatMapMaxConcurrent=function(limit,selector,resultSelector,thisArg){return new FlatMapObservable(this,selector,resultSelector,thisArg).merge(limit);};/** Provides a set of extension methods for virtual time scheduling. */var VirtualTimeScheduler=Rx.VirtualTimeScheduler=function(__super__){inherits(VirtualTimeScheduler,__super__);/**
	     * Creates a new virtual time scheduler with the specified initial clock value and absolute time comparer.
	     *
	     * @constructor
	     * @param {Number} initialClock Initial value for the clock.
	     * @param {Function} comparer Comparer to determine causality of events based on absolute time.
	     */function VirtualTimeScheduler(initialClock,comparer){this.clock=initialClock;this.comparer=comparer;this.isEnabled=false;this.queue=new PriorityQueue(1024);__super__.call(this);}var VirtualTimeSchedulerPrototype=VirtualTimeScheduler.prototype;VirtualTimeSchedulerPrototype.now=function(){return this.toAbsoluteTime(this.clock);};VirtualTimeSchedulerPrototype.schedule=function(state,action){return this.scheduleAbsolute(state,this.clock,action);};VirtualTimeSchedulerPrototype.scheduleFuture=function(state,dueTime,action){var dt=dueTime instanceof Date?this.toRelativeTime(dueTime-this.now()):this.toRelativeTime(dueTime);return this.scheduleRelative(state,dt,action);};/**
	     * Adds a relative time value to an absolute time value.
	     * @param {Number} absolute Absolute virtual time value.
	     * @param {Number} relative Relative virtual time value to add.
	     * @return {Number} Resulting absolute virtual time sum value.
	     */VirtualTimeSchedulerPrototype.add=notImplemented;/**
	     * Converts an absolute time to a number
	     * @param {Any} The absolute time.
	     * @returns {Number} The absolute time in ms
	     */VirtualTimeSchedulerPrototype.toAbsoluteTime=notImplemented;/**
	     * Converts the TimeSpan value to a relative virtual time value.
	     * @param {Number} timeSpan TimeSpan value to convert.
	     * @return {Number} Corresponding relative virtual time value.
	     */VirtualTimeSchedulerPrototype.toRelativeTime=notImplemented;/**
	     * Schedules a periodic piece of work by dynamically discovering the scheduler's capabilities. The periodic task will be emulated using recursive scheduling.
	     * @param {Mixed} state Initial state passed to the action upon the first iteration.
	     * @param {Number} period Period for running the work periodically.
	     * @param {Function} action Action to be executed, potentially updating the state.
	     * @returns {Disposable} The disposable object used to cancel the scheduled recurring action (best effort).
	     */VirtualTimeSchedulerPrototype.schedulePeriodic=function(state,period,action){var s=new SchedulePeriodicRecursive(this,state,period,action);return s.start();};/**
	     * Schedules an action to be executed after dueTime.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Number} dueTime Relative time after which to execute the action.
	     * @param {Function} action Action to be executed.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */VirtualTimeSchedulerPrototype.scheduleRelative=function(state,dueTime,action){var runAt=this.add(this.clock,dueTime);return this.scheduleAbsolute(state,runAt,action);};/**
	     * Starts the virtual time scheduler.
	     */VirtualTimeSchedulerPrototype.start=function(){if(!this.isEnabled){this.isEnabled=true;do{var next=this.getNext();if(next!==null){this.comparer(next.dueTime,this.clock)>0&&(this.clock=next.dueTime);next.invoke();}else{this.isEnabled=false;}}while(this.isEnabled);}};/**
	     * Stops the virtual time scheduler.
	     */VirtualTimeSchedulerPrototype.stop=function(){this.isEnabled=false;};/**
	     * Advances the scheduler's clock to the specified time, running all work till that point.
	     * @param {Number} time Absolute time to advance the scheduler's clock to.
	     */VirtualTimeSchedulerPrototype.advanceTo=function(time){var dueToClock=this.comparer(this.clock,time);if(this.comparer(this.clock,time)>0){throw new ArgumentOutOfRangeError();}if(dueToClock===0){return;}if(!this.isEnabled){this.isEnabled=true;do{var next=this.getNext();if(next!==null&&this.comparer(next.dueTime,time)<=0){this.comparer(next.dueTime,this.clock)>0&&(this.clock=next.dueTime);next.invoke();}else{this.isEnabled=false;}}while(this.isEnabled);this.clock=time;}};/**
	     * Advances the scheduler's clock by the specified relative time, running all work scheduled for that timespan.
	     * @param {Number} time Relative time to advance the scheduler's clock by.
	     */VirtualTimeSchedulerPrototype.advanceBy=function(time){var dt=this.add(this.clock,time),dueToClock=this.comparer(this.clock,dt);if(dueToClock>0){throw new ArgumentOutOfRangeError();}if(dueToClock===0){return;}this.advanceTo(dt);};/**
	     * Advances the scheduler's clock by the specified relative time.
	     * @param {Number} time Relative time to advance the scheduler's clock by.
	     */VirtualTimeSchedulerPrototype.sleep=function(time){var dt=this.add(this.clock,time);if(this.comparer(this.clock,dt)>=0){throw new ArgumentOutOfRangeError();}this.clock=dt;};/**
	     * Gets the next scheduled item to be executed.
	     * @returns {ScheduledItem} The next scheduled item.
	     */VirtualTimeSchedulerPrototype.getNext=function(){while(this.queue.length>0){var next=this.queue.peek();if(next.isCancelled()){this.queue.dequeue();}else{return next;}}return null;};/**
	     * Schedules an action to be executed at dueTime.
	     * @param {Mixed} state State passed to the action to be executed.
	     * @param {Number} dueTime Absolute time at which to execute the action.
	     * @param {Function} action Action to be executed.
	     * @returns {Disposable} The disposable object used to cancel the scheduled action (best effort).
	     */VirtualTimeSchedulerPrototype.scheduleAbsolute=function(state,dueTime,action){var self=this;function run(scheduler,state1){self.queue.remove(si);return action(scheduler,state1);}var si=new ScheduledItem(this,state,run,dueTime,this.comparer);this.queue.enqueue(si);return si.disposable;};return VirtualTimeScheduler;}(Scheduler);/** Provides a virtual time scheduler that uses Date for absolute time and number for relative time. */Rx.HistoricalScheduler=function(__super__){inherits(HistoricalScheduler,__super__);/**
	     * Creates a new historical scheduler with the specified initial clock value.
	     * @constructor
	     * @param {Number} initialClock Initial value for the clock.
	     * @param {Function} comparer Comparer to determine causality of events based on absolute time.
	     */function HistoricalScheduler(initialClock,comparer){var clock=initialClock==null?0:initialClock;var cmp=comparer||defaultSubComparer;__super__.call(this,clock,cmp);}var HistoricalSchedulerProto=HistoricalScheduler.prototype;/**
	     * Adds a relative time value to an absolute time value.
	     * @param {Number} absolute Absolute virtual time value.
	     * @param {Number} relative Relative virtual time value to add.
	     * @return {Number} Resulting absolute virtual time sum value.
	     */HistoricalSchedulerProto.add=function(absolute,relative){return absolute+relative;};HistoricalSchedulerProto.toAbsoluteTime=function(absolute){return new Date(absolute).getTime();};/**
	     * Converts the TimeSpan value to a relative virtual time value.
	     * @memberOf HistoricalScheduler
	     * @param {Number} timeSpan TimeSpan value to convert.
	     * @return {Number} Corresponding relative virtual time value.
	     */HistoricalSchedulerProto.toRelativeTime=function(timeSpan){return timeSpan;};return HistoricalScheduler;}(Rx.VirtualTimeScheduler);function OnNextPredicate(predicate){this.predicate=predicate;}OnNextPredicate.prototype.equals=function(other){if(other===this){return true;}if(other==null){return false;}if(other.kind!=='N'){return false;}return this.predicate(other.value);};function OnErrorPredicate(predicate){this.predicate=predicate;}OnErrorPredicate.prototype.equals=function(other){if(other===this){return true;}if(other==null){return false;}if(other.kind!=='E'){return false;}return this.predicate(other.error);};var ReactiveTest=Rx.ReactiveTest={/** Default virtual time used for creation of observable sequences in unit tests. */created:100,/** Default virtual time used to subscribe to observable sequences in unit tests. */subscribed:200,/** Default virtual time used to dispose subscriptions in unit tests. */disposed:1000,/**
	   * Factory method for an OnNext notification record at a given time with a given value or a predicate function.
	   *
	   * 1 - ReactiveTest.onNext(200, 42);
	   * 2 - ReactiveTest.onNext(200, function (x) { return x.length == 2; });
	   *
	   * @param ticks Recorded virtual time the OnNext notification occurs.
	   * @param value Recorded value stored in the OnNext notification or a predicate.
	   * @return Recorded OnNext notification.
	   */onNext:function onNext(ticks,value){return typeof value==='function'?new Recorded(ticks,new OnNextPredicate(value)):new Recorded(ticks,Notification.createOnNext(value));},/**
	   * Factory method for an OnError notification record at a given time with a given error.
	   *
	   * 1 - ReactiveTest.onNext(200, new Error('error'));
	   * 2 - ReactiveTest.onNext(200, function (e) { return e.message === 'error'; });
	   *
	   * @param ticks Recorded virtual time the OnError notification occurs.
	   * @param exception Recorded exception stored in the OnError notification.
	   * @return Recorded OnError notification.
	   */onError:function onError(ticks,error){return typeof error==='function'?new Recorded(ticks,new OnErrorPredicate(error)):new Recorded(ticks,Notification.createOnError(error));},/**
	   * Factory method for an OnCompleted notification record at a given time.
	   *
	   * @param ticks Recorded virtual time the OnCompleted notification occurs.
	   * @return Recorded OnCompleted notification.
	   */onCompleted:function onCompleted(ticks){return new Recorded(ticks,Notification.createOnCompleted());},/**
	   * Factory method for a subscription record based on a given subscription and disposal time.
	   *
	   * @param start Virtual time indicating when the subscription was created.
	   * @param end Virtual time indicating when the subscription was disposed.
	   * @return Subscription object.
	   */subscribe:function subscribe(start,end){return new Subscription(start,end);}};/**
	   * Creates a new object recording the production of the specified value at the given virtual time.
	   *
	   * @constructor
	   * @param {Number} time Virtual time the value was produced on.
	   * @param {Mixed} value Value that was produced.
	   * @param {Function} comparer An optional comparer.
	   */var Recorded=Rx.Recorded=function(time,value,comparer){this.time=time;this.value=value;this.comparer=comparer||defaultComparer;};/**
	   * Checks whether the given recorded object is equal to the current instance.
	   *
	   * @param {Recorded} other Recorded object to check for equality.
	   * @returns {Boolean} true if both objects are equal; false otherwise.
	   */Recorded.prototype.equals=function(other){return this.time===other.time&&this.comparer(this.value,other.value);};/**
	   * Returns a string representation of the current Recorded value.
	   *
	   * @returns {String} String representation of the current Recorded value.
	   */Recorded.prototype.toString=function(){return this.value.toString()+'@'+this.time;};/**
	   * Creates a new subscription object with the given virtual subscription and unsubscription time.
	   *
	   * @constructor
	   * @param {Number} subscribe Virtual time at which the subscription occurred.
	   * @param {Number} unsubscribe Virtual time at which the unsubscription occurred.
	   */var Subscription=Rx.Subscription=function(start,end){this.subscribe=start;this.unsubscribe=end||Number.MAX_VALUE;};/**
	   * Checks whether the given subscription is equal to the current instance.
	   * @param other Subscription object to check for equality.
	   * @returns {Boolean} true if both objects are equal; false otherwise.
	   */Subscription.prototype.equals=function(other){return this.subscribe===other.subscribe&&this.unsubscribe===other.unsubscribe;};/**
	   * Returns a string representation of the current Subscription value.
	   * @returns {String} String representation of the current Subscription value.
	   */Subscription.prototype.toString=function(){return'('+this.subscribe+', '+(this.unsubscribe===Number.MAX_VALUE?'Infinite':this.unsubscribe)+')';};var MockDisposable=Rx.MockDisposable=function(scheduler){this.scheduler=scheduler;this.disposes=[];this.disposes.push(this.scheduler.clock);};MockDisposable.prototype.dispose=function(){this.disposes.push(this.scheduler.clock);};var MockObserver=function(__super__){inherits(MockObserver,__super__);function MockObserver(scheduler){__super__.call(this);this.scheduler=scheduler;this.messages=[];}var MockObserverPrototype=MockObserver.prototype;MockObserverPrototype.onNext=function(value){this.messages.push(new Recorded(this.scheduler.clock,Notification.createOnNext(value)));};MockObserverPrototype.onError=function(e){this.messages.push(new Recorded(this.scheduler.clock,Notification.createOnError(e)));};MockObserverPrototype.onCompleted=function(){this.messages.push(new Recorded(this.scheduler.clock,Notification.createOnCompleted()));};return MockObserver;}(Observer);function MockPromise(scheduler,messages){var self=this;this.scheduler=scheduler;this.messages=messages;this.subscriptions=[];this.observers=[];for(var i=0,len=this.messages.length;i<len;i++){var message=this.messages[i],notification=message.value;(function(innerNotification){scheduler.scheduleAbsolute(null,message.time,function(){var obs=self.observers.slice(0);for(var j=0,jLen=obs.length;j<jLen;j++){innerNotification.accept(obs[j]);}return disposableEmpty;});})(notification);}}MockPromise.prototype.then=function(onResolved,onRejected){var self=this;this.subscriptions.push(new Subscription(this.scheduler.clock));var index=this.subscriptions.length-1;var newPromise;var observer=Rx.Observer.create(function(x){var retValue=onResolved(x);if(retValue&&typeof retValue.then==='function'){newPromise=retValue;}else{var ticks=self.scheduler.clock;newPromise=new MockPromise(self.scheduler,[Rx.ReactiveTest.onNext(ticks,undefined),Rx.ReactiveTest.onCompleted(ticks)]);}var idx=self.observers.indexOf(observer);self.observers.splice(idx,1);self.subscriptions[index]=new Subscription(self.subscriptions[index].subscribe,self.scheduler.clock);},function(err){onRejected(err);var idx=self.observers.indexOf(observer);self.observers.splice(idx,1);self.subscriptions[index]=new Subscription(self.subscriptions[index].subscribe,self.scheduler.clock);});this.observers.push(observer);return newPromise||new MockPromise(this.scheduler,this.messages);};var HotObservable=function(__super__){inherits(HotObservable,__super__);function HotObservable(scheduler,messages){__super__.call(this);var message,notification,observable=this;this.scheduler=scheduler;this.messages=messages;this.subscriptions=[];this.observers=[];for(var i=0,len=this.messages.length;i<len;i++){message=this.messages[i];notification=message.value;(function(innerNotification){scheduler.scheduleAbsolute(null,message.time,function(){var obs=observable.observers.slice(0);for(var j=0,jLen=obs.length;j<jLen;j++){innerNotification.accept(obs[j]);}return disposableEmpty;});})(notification);}}HotObservable.prototype._subscribe=function(o){var observable=this;this.observers.push(o);this.subscriptions.push(new Subscription(this.scheduler.clock));var index=this.subscriptions.length-1;return disposableCreate(function(){var idx=observable.observers.indexOf(o);observable.observers.splice(idx,1);observable.subscriptions[index]=new Subscription(observable.subscriptions[index].subscribe,observable.scheduler.clock);});};return HotObservable;}(Observable);var ColdObservable=function(__super__){inherits(ColdObservable,__super__);function ColdObservable(scheduler,messages){__super__.call(this);this.scheduler=scheduler;this.messages=messages;this.subscriptions=[];}ColdObservable.prototype._subscribe=function(o){var message,notification,observable=this;this.subscriptions.push(new Subscription(this.scheduler.clock));var index=this.subscriptions.length-1;var d=new CompositeDisposable();for(var i=0,len=this.messages.length;i<len;i++){message=this.messages[i];notification=message.value;(function(innerNotification){d.add(observable.scheduler.scheduleRelative(null,message.time,function(){innerNotification.accept(o);return disposableEmpty;}));})(notification);}return disposableCreate(function(){observable.subscriptions[index]=new Subscription(observable.subscriptions[index].subscribe,observable.scheduler.clock);d.dispose();});};return ColdObservable;}(Observable);/** Virtual time scheduler used for testing applications and libraries built using Reactive Extensions. */Rx.TestScheduler=function(__super__){inherits(TestScheduler,__super__);function baseComparer(x,y){return x>y?1:x<y?-1:0;}function TestScheduler(){__super__.call(this,0,baseComparer);}/**
	     * Schedules an action to be executed at the specified virtual time.
	     *
	     * @param state State passed to the action to be executed.
	     * @param dueTime Absolute virtual time at which to execute the action.
	     * @param action Action to be executed.
	     * @return Disposable object used to cancel the scheduled action (best effort).
	     */TestScheduler.prototype.scheduleAbsolute=function(state,dueTime,action){dueTime<=this.clock&&(dueTime=this.clock+1);return __super__.prototype.scheduleAbsolute.call(this,state,dueTime,action);};/**
	     * Adds a relative virtual time to an absolute virtual time value.
	     *
	     * @param absolute Absolute virtual time value.
	     * @param relative Relative virtual time value to add.
	     * @return Resulting absolute virtual time sum value.
	     */TestScheduler.prototype.add=function(absolute,relative){return absolute+relative;};/**
	     * Converts the absolute virtual time value to a DateTimeOffset value.
	     *
	     * @param absolute Absolute virtual time value to convert.
	     * @return Corresponding DateTimeOffset value.
	     */TestScheduler.prototype.toAbsoluteTime=function(absolute){return new Date(absolute).getTime();};/**
	     * Converts the TimeSpan value to a relative virtual time value.
	     *
	     * @param timeSpan TimeSpan value to convert.
	     * @return Corresponding relative virtual time value.
	     */TestScheduler.prototype.toRelativeTime=function(timeSpan){return timeSpan;};/**
	     * Starts the test scheduler and uses the specified virtual times to invoke the factory function, subscribe to the resulting sequence, and dispose the subscription.
	     *
	     * @param create Factory method to create an observable sequence.
	     * @param created Virtual time at which to invoke the factory to create an observable sequence.
	     * @param subscribed Virtual time at which to subscribe to the created observable sequence.
	     * @param disposed Virtual time at which to dispose the subscription.
	     * @return Observer with timestamped recordings of notification messages that were received during the virtual time window when the subscription to the source sequence was active.
	     */TestScheduler.prototype.startScheduler=function(createFn,settings){settings||(settings={});settings.created==null&&(settings.created=ReactiveTest.created);settings.subscribed==null&&(settings.subscribed=ReactiveTest.subscribed);settings.disposed==null&&(settings.disposed=ReactiveTest.disposed);var observer=this.createObserver(),source,subscription;this.scheduleAbsolute(null,settings.created,function(){source=createFn();return disposableEmpty;});this.scheduleAbsolute(null,settings.subscribed,function(){subscription=source.subscribe(observer);return disposableEmpty;});this.scheduleAbsolute(null,settings.disposed,function(){subscription.dispose();return disposableEmpty;});this.start();return observer;};/**
	     * Creates a hot observable using the specified timestamped notification messages either as an array or arguments.
	     * @param messages Notifications to surface through the created sequence at their specified absolute virtual times.
	     * @return Hot observable sequence that can be used to assert the timing of subscriptions and notifications.
	     */TestScheduler.prototype.createHotObservable=function(){var len=arguments.length,args;if(Array.isArray(arguments[0])){args=arguments[0];}else{args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}}return new HotObservable(this,args);};/**
	     * Creates a cold observable using the specified timestamped notification messages either as an array or arguments.
	     * @param messages Notifications to surface through the created sequence at their specified virtual time offsets from the sequence subscription time.
	     * @return Cold observable sequence that can be used to assert the timing of subscriptions and notifications.
	     */TestScheduler.prototype.createColdObservable=function(){var len=arguments.length,args;if(Array.isArray(arguments[0])){args=arguments[0];}else{args=new Array(len);for(var i=0;i<len;i++){args[i]=arguments[i];}}return new ColdObservable(this,args);};/**
	     * Creates a resolved promise with the given value and ticks
	     * @param {Number} ticks The absolute time of the resolution.
	     * @param {Any} value The value to yield at the given tick.
	     * @returns {MockPromise} A mock Promise which fulfills with the given value.
	     */TestScheduler.prototype.createResolvedPromise=function(ticks,value){return new MockPromise(this,[Rx.ReactiveTest.onNext(ticks,value),Rx.ReactiveTest.onCompleted(ticks)]);};/**
	     * Creates a rejected promise with the given reason and ticks
	     * @param {Number} ticks The absolute time of the resolution.
	     * @param {Any} reason The reason for rejection to yield at the given tick.
	     * @returns {MockPromise} A mock Promise which rejects with the given reason.
	     */TestScheduler.prototype.createRejectedPromise=function(ticks,reason){return new MockPromise(this,[Rx.ReactiveTest.onError(ticks,reason)]);};/**
	     * Creates an observer that records received notification messages and timestamps those.
	     * @return Observer that can be used to assert the timing of received notifications.
	     */TestScheduler.prototype.createObserver=function(){return new MockObserver(this);};return TestScheduler;}(VirtualTimeScheduler);var AnonymousObservable=Rx.AnonymousObservable=function(__super__){inherits(AnonymousObservable,__super__);// Fix subscriber to check for undefined or function returned to decorate as Disposable
	function fixSubscriber(subscriber){return subscriber&&isFunction(subscriber.dispose)?subscriber:isFunction(subscriber)?disposableCreate(subscriber):disposableEmpty;}function setDisposable(s,state){var ado=state[0],self=state[1];var sub=tryCatch(self.__subscribe).call(self,ado);if(sub===errorObj&&!ado.fail(errorObj.e)){thrower(errorObj.e);}ado.setDisposable(fixSubscriber(sub));}function AnonymousObservable(subscribe,parent){this.source=parent;this.__subscribe=subscribe;__super__.call(this);}AnonymousObservable.prototype._subscribe=function(o){var ado=new AutoDetachObserver(o),state=[ado,this];if(currentThreadScheduler.scheduleRequired()){currentThreadScheduler.schedule(state,setDisposable);}else{setDisposable(null,state);}return ado;};return AnonymousObservable;}(Observable);var AutoDetachObserver=function(__super__){inherits(AutoDetachObserver,__super__);function AutoDetachObserver(observer){__super__.call(this);this.observer=observer;this.m=new SingleAssignmentDisposable();}var AutoDetachObserverPrototype=AutoDetachObserver.prototype;AutoDetachObserverPrototype.next=function(value){var result=tryCatch(this.observer.onNext).call(this.observer,value);if(result===errorObj){this.dispose();thrower(result.e);}};AutoDetachObserverPrototype.error=function(err){var result=tryCatch(this.observer.onError).call(this.observer,err);this.dispose();result===errorObj&&thrower(result.e);};AutoDetachObserverPrototype.completed=function(){var result=tryCatch(this.observer.onCompleted).call(this.observer);this.dispose();result===errorObj&&thrower(result.e);};AutoDetachObserverPrototype.setDisposable=function(value){this.m.setDisposable(value);};AutoDetachObserverPrototype.getDisposable=function(){return this.m.getDisposable();};AutoDetachObserverPrototype.dispose=function(){__super__.prototype.dispose.call(this);this.m.dispose();};return AutoDetachObserver;}(AbstractObserver);var UnderlyingObservable=function(__super__){inherits(UnderlyingObservable,__super__);function UnderlyingObservable(m,u){this._m=m;this._u=u;__super__.call(this);}UnderlyingObservable.prototype.subscribeCore=function(o){return new BinaryDisposable(this._m.getDisposable(),this._u.subscribe(o));};return UnderlyingObservable;}(ObservableBase);var GroupedObservable=function(__super__){inherits(GroupedObservable,__super__);function GroupedObservable(key,underlyingObservable,mergedDisposable){__super__.call(this);this.key=key;this.underlyingObservable=!mergedDisposable?underlyingObservable:new UnderlyingObservable(mergedDisposable,underlyingObservable);}GroupedObservable.prototype._subscribe=function(o){return this.underlyingObservable.subscribe(o);};return GroupedObservable;}(Observable);/**
	   *  Represents an object that is both an observable sequence as well as an observer.
	   *  Each notification is broadcasted to all subscribed observers.
	   */var Subject=Rx.Subject=function(__super__){inherits(Subject,__super__);function Subject(){__super__.call(this);this.isDisposed=false;this.isStopped=false;this.observers=[];this.hasError=false;}addProperties(Subject.prototype,Observer.prototype,{_subscribe:function _subscribe(o){checkDisposed(this);if(!this.isStopped){this.observers.push(o);return new InnerSubscription(this,o);}if(this.hasError){o.onError(this.error);return disposableEmpty;}o.onCompleted();return disposableEmpty;},/**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */hasObservers:function hasObservers(){checkDisposed(this);return this.observers.length>0;},/**
	       * Notifies all subscribed observers about the end of the sequence.
	       */onCompleted:function onCompleted(){checkDisposed(this);if(!this.isStopped){this.isStopped=true;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onCompleted();}this.observers.length=0;}},/**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */onError:function onError(error){checkDisposed(this);if(!this.isStopped){this.isStopped=true;this.error=error;this.hasError=true;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onError(error);}this.observers.length=0;}},/**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */onNext:function onNext(value){checkDisposed(this);if(!this.isStopped){for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onNext(value);}}},/**
	       * Unsubscribe all observers and release resources.
	       */dispose:function dispose(){this.isDisposed=true;this.observers=null;}});/**
	     * Creates a subject from the specified observer and observable.
	     * @param {Observer} observer The observer used to send messages to the subject.
	     * @param {Observable} observable The observable used to subscribe to messages sent from the subject.
	     * @returns {Subject} Subject implemented using the given observer and observable.
	     */Subject.create=function(observer,observable){return new AnonymousSubject(observer,observable);};return Subject;}(Observable);/**
	   *  Represents the result of an asynchronous operation.
	   *  The last value before the OnCompleted notification, or the error received through OnError, is sent to all subscribed observers.
	   */var AsyncSubject=Rx.AsyncSubject=function(__super__){inherits(AsyncSubject,__super__);/**
	     * Creates a subject that can only receive one value and that value is cached for all future observations.
	     * @constructor
	     */function AsyncSubject(){__super__.call(this);this.isDisposed=false;this.isStopped=false;this.hasValue=false;this.observers=[];this.hasError=false;}addProperties(AsyncSubject.prototype,Observer.prototype,{_subscribe:function _subscribe(o){checkDisposed(this);if(!this.isStopped){this.observers.push(o);return new InnerSubscription(this,o);}if(this.hasError){o.onError(this.error);}else if(this.hasValue){o.onNext(this.value);o.onCompleted();}else{o.onCompleted();}return disposableEmpty;},/**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */hasObservers:function hasObservers(){checkDisposed(this);return this.observers.length>0;},/**
	       * Notifies all subscribed observers about the end of the sequence, also causing the last received value to be sent out (if any).
	       */onCompleted:function onCompleted(){var i,len;checkDisposed(this);if(!this.isStopped){this.isStopped=true;var os=cloneArray(this.observers),len=os.length;if(this.hasValue){for(i=0;i<len;i++){var o=os[i];o.onNext(this.value);o.onCompleted();}}else{for(i=0;i<len;i++){os[i].onCompleted();}}this.observers.length=0;}},/**
	       * Notifies all subscribed observers about the error.
	       * @param {Mixed} error The Error to send to all observers.
	       */onError:function onError(error){checkDisposed(this);if(!this.isStopped){this.isStopped=true;this.hasError=true;this.error=error;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onError(error);}this.observers.length=0;}},/**
	       * Sends a value to the subject. The last value received before successful termination will be sent to all subscribed and future observers.
	       * @param {Mixed} value The value to store in the subject.
	       */onNext:function onNext(value){checkDisposed(this);if(this.isStopped){return;}this.value=value;this.hasValue=true;},/**
	       * Unsubscribe all observers and release resources.
	       */dispose:function dispose(){this.isDisposed=true;this.observers=null;this.error=null;this.value=null;}});return AsyncSubject;}(Observable);/**
	   *  Represents a value that changes over time.
	   *  Observers can subscribe to the subject to receive the last (or initial) value and all subsequent notifications.
	   */var BehaviorSubject=Rx.BehaviorSubject=function(__super__){inherits(BehaviorSubject,__super__);function BehaviorSubject(value){__super__.call(this);this.value=value;this.observers=[];this.isDisposed=false;this.isStopped=false;this.hasError=false;}addProperties(BehaviorSubject.prototype,Observer.prototype,{_subscribe:function _subscribe(o){checkDisposed(this);if(!this.isStopped){this.observers.push(o);o.onNext(this.value);return new InnerSubscription(this,o);}if(this.hasError){o.onError(this.error);}else{o.onCompleted();}return disposableEmpty;},/**
	       * Gets the current value or throws an exception.
	       * Value is frozen after onCompleted is called.
	       * After onError is called always throws the specified exception.
	       * An exception is always thrown after dispose is called.
	       * @returns {Mixed} The initial value passed to the constructor until onNext is called; after which, the last value passed to onNext.
	       */getValue:function getValue(){checkDisposed(this);if(this.hasError){thrower(this.error);}return this.value;},/**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */hasObservers:function hasObservers(){checkDisposed(this);return this.observers.length>0;},/**
	       * Notifies all subscribed observers about the end of the sequence.
	       */onCompleted:function onCompleted(){checkDisposed(this);if(this.isStopped){return;}this.isStopped=true;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onCompleted();}this.observers.length=0;},/**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */onError:function onError(error){checkDisposed(this);if(this.isStopped){return;}this.isStopped=true;this.hasError=true;this.error=error;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onError(error);}this.observers.length=0;},/**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */onNext:function onNext(value){checkDisposed(this);if(this.isStopped){return;}this.value=value;for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){os[i].onNext(value);}},/**
	       * Unsubscribe all observers and release resources.
	       */dispose:function dispose(){this.isDisposed=true;this.observers=null;this.value=null;this.error=null;}});return BehaviorSubject;}(Observable);/**
	   * Represents an object that is both an observable sequence as well as an observer.
	   * Each notification is broadcasted to all subscribed and future observers, subject to buffer trimming policies.
	   */var ReplaySubject=Rx.ReplaySubject=function(__super__){var maxSafeInteger=Math.pow(2,53)-1;function createRemovableDisposable(subject,observer){return disposableCreate(function(){observer.dispose();!subject.isDisposed&&subject.observers.splice(subject.observers.indexOf(observer),1);});}inherits(ReplaySubject,__super__);/**
	     *  Initializes a new instance of the ReplaySubject class with the specified buffer size, window size and scheduler.
	     *  @param {Number} [bufferSize] Maximum element count of the replay buffer.
	     *  @param {Number} [windowSize] Maximum time length of the replay buffer.
	     *  @param {Scheduler} [scheduler] Scheduler the observers are invoked on.
	     */function ReplaySubject(bufferSize,windowSize,scheduler){this.bufferSize=bufferSize==null?maxSafeInteger:bufferSize;this.windowSize=windowSize==null?maxSafeInteger:windowSize;this.scheduler=scheduler||currentThreadScheduler;this.q=[];this.observers=[];this.isStopped=false;this.isDisposed=false;this.hasError=false;this.error=null;__super__.call(this);}addProperties(ReplaySubject.prototype,Observer.prototype,{_subscribe:function _subscribe(o){checkDisposed(this);var so=new ScheduledObserver(this.scheduler,o),subscription=createRemovableDisposable(this,so);this._trim(this.scheduler.now());this.observers.push(so);for(var i=0,len=this.q.length;i<len;i++){so.onNext(this.q[i].value);}if(this.hasError){so.onError(this.error);}else if(this.isStopped){so.onCompleted();}so.ensureActive();return subscription;},/**
	       * Indicates whether the subject has observers subscribed to it.
	       * @returns {Boolean} Indicates whether the subject has observers subscribed to it.
	       */hasObservers:function hasObservers(){checkDisposed(this);return this.observers.length>0;},_trim:function _trim(now){while(this.q.length>this.bufferSize){this.q.shift();}while(this.q.length>0&&now-this.q[0].interval>this.windowSize){this.q.shift();}},/**
	       * Notifies all subscribed observers about the arrival of the specified element in the sequence.
	       * @param {Mixed} value The value to send to all observers.
	       */onNext:function onNext(value){checkDisposed(this);if(this.isStopped){return;}var now=this.scheduler.now();this.q.push({interval:now,value:value});this._trim(now);for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){var observer=os[i];observer.onNext(value);observer.ensureActive();}},/**
	       * Notifies all subscribed observers about the exception.
	       * @param {Mixed} error The exception to send to all observers.
	       */onError:function onError(error){checkDisposed(this);if(this.isStopped){return;}this.isStopped=true;this.error=error;this.hasError=true;var now=this.scheduler.now();this._trim(now);for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){var observer=os[i];observer.onError(error);observer.ensureActive();}this.observers.length=0;},/**
	       * Notifies all subscribed observers about the end of the sequence.
	       */onCompleted:function onCompleted(){checkDisposed(this);if(this.isStopped){return;}this.isStopped=true;var now=this.scheduler.now();this._trim(now);for(var i=0,os=cloneArray(this.observers),len=os.length;i<len;i++){var observer=os[i];observer.onCompleted();observer.ensureActive();}this.observers.length=0;},/**
	       * Unsubscribe all observers and release resources.
	       */dispose:function dispose(){this.isDisposed=true;this.observers=null;}});return ReplaySubject;}(Observable);var AnonymousSubject=Rx.AnonymousSubject=function(__super__){inherits(AnonymousSubject,__super__);function AnonymousSubject(observer,observable){this.observer=observer;this.observable=observable;__super__.call(this);}addProperties(AnonymousSubject.prototype,Observer.prototype,{_subscribe:function _subscribe(o){return this.observable.subscribe(o);},onCompleted:function onCompleted(){this.observer.onCompleted();},onError:function onError(error){this.observer.onError(error);},onNext:function onNext(value){this.observer.onNext(value);}});return AnonymousSubject;}(Observable);/**
	  * Used to pause and resume streams.
	  */Rx.Pauser=function(__super__){inherits(Pauser,__super__);function Pauser(){__super__.call(this);}/**
	     * Pauses the underlying sequence.
	     */Pauser.prototype.pause=function(){this.onNext(false);};/**
	    * Resumes the underlying sequence.
	    */Pauser.prototype.resume=function(){this.onNext(true);};return Pauser;}(Subject);if("function"=='function'&&_typeof(__webpack_require__(6))=='object'&&__webpack_require__(6)){root.Rx=Rx;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Rx;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else if(freeExports&&freeModule){// in Node.js or RingoJS
	if(moduleExports){(freeModule.exports=Rx).Rx=Rx;}else{freeExports.Rx=Rx;}}else{// in a browser or Rhino
	root.Rx=Rx;}// All code before this point will be filtered from stack traces.
	var rEndingLine=captureLine();}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module), (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }
/******/ ]);