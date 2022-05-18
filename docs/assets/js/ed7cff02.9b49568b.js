"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[776],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1161:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"instant",title:"Current Instant Listeners",sidebar_label:"Current Instant Listeners",slug:"instant.html"},l=void 0,c={unversionedId:"extensions/instant",id:"version-5.3/extensions/instant",title:"Current Instant Listeners",description:"Current instant listeners",source:"@site/versioned_docs/version-5.3/extensions/instant.md",sourceDirName:"extensions",slug:"/extensions/instant.html",permalink:"/docs/extensions/instant.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/extensions/instant.md",tags:[],version:"5.3",frontMatter:{id:"instant",title:"Current Instant Listeners",sidebar_label:"Current Instant Listeners",slug:"instant.html"},sidebar:"extensions",previous:{title:"Allure",permalink:"/docs/extensions/allure.html"},next:{title:"Koin",permalink:"/docs/extensions/koin.html"}},u={},p=[{value:"Current instant listeners",id:"current-instant-listeners",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"current-instant-listeners"},"Current instant listeners"),(0,a.kt)("p",null,"Sometimes you may want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," static functions located in ",(0,a.kt)("inlineCode",{parentName:"p"},"java.time")," classes for multiple reasons, such as setting the creation date of an entity"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data class MyEntity(creationDate: LocalDateTime = LocalDateTime.now())"),"."),(0,a.kt)("p",null,"But what to do when you want to test that value? ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," will be different\neach time you call it!"),(0,a.kt)("p",null,"For that, Kotest provides ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantNowListener")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"withConstantNow")," functions."),(0,a.kt)("p",null,"While executing your code, your ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," will always be the value that you want to test against."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val foreverNow = LocalDateTime.now()\n\nwithConstantNow(foreverNow) {\n  LocalDateTime.now() shouldBe foreverNow\n  delay(10) // Code is taking a small amount of time to execute, but `now` changed!\n  LocalDateTime.now() shouldBe foreverNow\n}\n\n")),(0,a.kt)("p",null,"Or, with a listener for all the tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"  override fun listeners() = listOf(\n    ConstantNowTestListener(foreverNow)\n  )\n")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"withContantNow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ConstantNowTestListener")," are very sensitive to race conditions. Using them, mocks the static method ",(0,a.kt)("inlineCode",{parentName:"p"},"now")," which is global to the whole JVM instance,\nif you're using it while running test in parallel, the results may be inconsistent."))))}d.isMDXComponent=!0}}]);