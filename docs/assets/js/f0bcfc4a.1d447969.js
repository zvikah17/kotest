"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6227],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35448:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],l={title:"Clues",slug:"clues.html"},i=void 0,u={unversionedId:"assertions/clues",id:"version-5.2/assertions/clues",title:"Clues",description:"Clues only work if you are using the Kotest test framework in conjuction with the assertions library",source:"@site/versioned_docs/version-5.2/assertions/clues.md",sourceDirName:"assertions",slug:"/assertions/clues.html",permalink:"/docs/5.2/assertions/clues.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/assertions/clues.md",tags:[],version:"5.2",frontMatter:{title:"Clues",slug:"clues.html"},sidebar:"assertions",previous:{title:"Exceptions",permalink:"/docs/5.2/assertions/exceptions.html"},next:{title:"Soft Assertions",permalink:"/docs/5.2/assertions/soft-assertions.html"}},c={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Clues only work if you are using the Kotest test framework in conjuction with the assertions library"))),(0,a.kt)("p",null,"Sometimes a failed assertion contains enough information in the error message to know what went wrong."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'username shouldBe "sksamuel"\n')),(0,a.kt)("p",null,"Might give an error like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'expected: "sksamuel" but was: "sam@myemailaddress.com"\n')),(0,a.kt)("p",null,"And you would be able to see that you were populating the username field with an email address."),(0,a.kt)("p",null,"But let's say you had a test like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"user.name shouldNotBe null\n")),(0,a.kt)("p",null,"If this failed, you would simply get:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<null> should not equal <null>\n")),(0,a.kt)("p",null,"Which isn't particularly helpful. This is where ",(0,a.kt)("inlineCode",{parentName:"p"},"withClue")," comes into play."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"withClue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"asClue")," helpers can add extra context to assertions so failures are self explanatory:"),(0,a.kt)("p",null,"For example, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"withClue")," with a string message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'withClue("Name should be present") {\n  user.name shouldNotBe null\n}\n')),(0,a.kt)("p",null,"Would give an error like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Name should be present\n<null> should not equal <null>\n")),(0,a.kt)("p",null,"We can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"asClue")," extension function to turn any object into the clue message."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'data class HttpResponse(val status: Int, val body: String)\n\nval response = HttpResponse(404, "the content")\n\nresponse.asClue {\n    it.status shouldBe 200\n    it.body shouldBe "the content"\n}\n')),(0,a.kt)("p",null,"Would output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HttpResponse(status=404, body=the content)\nExpected :200\nActual   :404\n")))}d.isMDXComponent=!0}}]);