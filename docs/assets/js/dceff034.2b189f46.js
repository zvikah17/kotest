"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[6401],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(h,s(s({ref:e},d),{},{components:n})):r.createElement(h,s({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87326:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=["components"],l={id:"ktor",title:"Ktor Matchers",slug:"ktor-matchers.html",sidebar_label:"Ktor"},i=void 0,p={unversionedId:"assertions/ktor",id:"assertions/ktor",title:"Ktor Matchers",description:"Code is kept on a separate repository and on a different group: io.kotest.extensions.",source:"@site/docs/assertions/ktor.md",sourceDirName:"assertions",slug:"/assertions/ktor-matchers.html",permalink:"/docs/next/assertions/ktor-matchers.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/ktor.md",tags:[],version:"current",frontMatter:{id:"ktor",title:"Ktor Matchers",slug:"ktor-matchers.html",sidebar_label:"Ktor"},sidebar:"assertions",previous:{title:"Schema matchers",permalink:"/docs/next/assertions/json/json-schema-matchers.html"},next:{title:"Android",permalink:"/docs/next/assertions/android-matchers.html"}},d={},u=[{value:"Test Application Response",id:"test-application-response",level:3},{value:"HttpResponse",id:"httpresponse",level:3}],c={toc:u};function m(t){var e=t.components,n=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Code is kept on a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-assertions-ktor"},"separate repository")," and on a different group: ",(0,o.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Dependency")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://search.maven.org/#search%7Cga%7C1%7Ckotest-assertions-ktor"},(0,o.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20release"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-assertions-ktor/"},(0,o.kt)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20snapshot"}))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},'implementation("io.kotest.extensions:kotest-assertions-ktor:version")')),(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},'implementation "io.kotest.extensions:kotest-assertions-ktor:version"'))),(0,o.kt)("p",null,"Matchers for ",(0,o.kt)("a",{parentName:"p",href:"https://ktor.io/"},"Ktor")," are provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module."),(0,o.kt)("h3",{id:"test-application-response"},"Test Application Response"),(0,o.kt)("p",null,"The following matchers are used when testing via the ktor server testkit."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveStatus(HttpStatusCode)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response had the given http status code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveContent(content)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response has the given body")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveContentType(ContentType)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response has the given Content Type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveHeader(name, value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given name=value header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveCookie(name, value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given cookie")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveCacheControl(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given cache control header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveETag(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given etag header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"TestApplicationResponse.shouldHaveContentEncoding(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given content encoding header")))),(0,o.kt)("h3",{id:"httpresponse"},"HttpResponse"),(0,o.kt)("p",null,"The following matchers can be used against responses from the ktor http client."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveStatus(HttpStatusCode)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response had the given http status code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveContentType(ContentType)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response has the given Content Type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveHeader(name, value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given name=value header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveVersion(HttpProtocolVersion)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response used the given protocol version")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveCacheControl(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given cache control header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveETag(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given etag header")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HttpResponse.shouldHaveContentEncoding(value)")),(0,o.kt)("td",{parentName:"tr",align:null},"Asserts that the response included the given content encoding header")))))}m.isMDXComponent=!0}}]);