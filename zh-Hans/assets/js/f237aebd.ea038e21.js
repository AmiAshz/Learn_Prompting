"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="\ud83d\udfe2 \u7ed9\u51fa\u6307\u4ee4",p={unversionedId:"basics/instructions",id:"basics/instructions",title:"\ud83d\udfe2 \u7ed9\u51fa\u6307\u4ee4",description:"\u6700\u7b80\u5355\u7684\u63d0\u793a\u65b9\u6cd5\u4e4b\u4e00\u5c31\u662f\u76f4\u63a5\u7ed9\u51fa\u6307\u4ee4\u3002\u6211\u4eec\u4e0a\u4e00\u4e2a\u90e8\u5206\u4e2d\u5c31\u5df2\u7ecf\u770b\u5230\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6307\u4ee4\uff081,000,000 * 9,000\u7b49\u4e8e\u51e0? \u8bf7\u786e\u4fdd\u8f93\u5165\u6b63\u786e\u6570\u91cf\u7684\u96f6\uff0c\u5373\u4f7f\u6570\u91cf\u5f88\u591a\u4e5f\u8981\u5982\u6b64:\uff09\u3002\u7136\u800c\uff0c\u73b0\u4ee3\u4eba\u5de5\u667a\u80fd\u53ef\u4ee5\u9075\u5faa\u66f4\u590d\u6742\u7684\u6307\u4ee4\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/basics/instructions.md",sourceDirName:"basics",slug:"/basics/instructions",permalink:"/zh-Hans/docs/basics/instructions",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/instructions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u63d0\u793a\u8fc7\u7a0b",permalink:"/zh-Hans/docs/basics/prompting"},next:{title:"\ud83d\udfe2 \u89d2\u8272\u63d0\u793a",permalink:"/zh-Hans/docs/basics/roles"}},l={},s=[{value:"\u793a\u4f8b 1",id:"\u793a\u4f8b-1",level:4},{value:"\u793a\u4f8b 2",id:"\u793a\u4f8b-2",level:4},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u7ed9\u51fa\u6307\u4ee4"},"\ud83d\udfe2 \u7ed9\u51fa\u6307\u4ee4"),(0,i.kt)("p",null,"\u6700\u7b80\u5355\u7684\u63d0\u793a\u65b9\u6cd5\u4e4b\u4e00\u5c31\u662f\u76f4\u63a5\u7ed9\u51fa\u6307\u4ee4\u3002\u6211\u4eec\u4e0a\u4e00\u4e2a\u90e8\u5206\u4e2d\u5c31\u5df2\u7ecf\u770b\u5230\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u6307\u4ee4\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"1,000,000 * 9,000\u7b49\u4e8e\u51e0? \u8bf7\u786e\u4fdd\u8f93\u5165\u6b63\u786e\u6570\u91cf\u7684\u96f6\uff0c\u5373\u4f7f\u6570\u91cf\u5f88\u591a\u4e5f\u8981\u5982\u6b64:"),"\uff09\u3002\u7136\u800c\uff0c\u73b0\u4ee3\u4eba\u5de5\u667a\u80fd\u53ef\u4ee5\u9075\u5faa\u66f4\u590d\u6742\u7684\u6307\u4ee4\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a Dyno \u4ea4\u4e92\u5f0f\u5d4c\u5165\u793a\u4f8b\u3002\u5982\u679c\u60a8\u770b\u4e0d\u5230\u5b83\uff0c\u8bf7\u786e\u4fdd\u5728\u60a8\u7684\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u4e86 JavaScript\u3002\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u6f14\u793a\uff0c\u60a8\u53ef\u4ee5\u7f16\u8f91\u6587\u672c\u5e76\u5355\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Generate"),"\u6309\u94ae\u91cd\u65b0\u8fd0\u884c\u4eba\u5de5\u667a\u80fd\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b 1"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\u4e00\u4e2a\u7528\u6237\u5728\u8868\u5355\u4e2d\u8f93\u5165\u4e86\u4ed6\u4eec\u7684\u540d\u5b57\u548c\u59d3\u6c0f\uff0c\u4f46\u6211\u4eec\u4e0d\u77e5\u9053\u4ed6\u4eec\u7684\u540d\u5b57\u548c\u59d3\u6c0f\u7684\u987a\u5e8f\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u201c\u59d3, \u540d\u201d\u7684\u683c\u5f0f\u3002\u5c06\u4ee5\u4e0b\u8f93\u5165\u8f6c\u6362\u4e3a\u8be5\u683c\u5f0f\uff1a\\n\\njohn doe","initial-response":"Doe, John","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,i.kt)("br",null),"AI \u80fd\u591f\u8f7b\u677e\u5730\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002\u4f7f\u7528\u6307\u4ee4\u63d0\u793a\uff0c\u5b83\u53ef\u4ee5\u89e3\u51b3\u8bb8\u591a\u5176\u4ed6\u7b80\u5355\u548c\u66f4\u590d\u6742\u7684\u95ee\u9898\u3002",(0,i.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b 2"),(0,i.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u66f4\u590d\u6742\u7684\u4f8b\u5b50",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'\u8bf7\u9605\u8bfb\u4ee5\u4e0b\u9500\u552e\u90ae\u4ef6\u3002\u5220\u9664\u4efb\u4f55\u53ef\u7528\u4e8e\u8bc6\u522b\u4e2a\u4eba\u8eab\u4efd\u7684\u4fe1\u606f (PII)\uff0c\u5e76\u7528\u76f8\u5e94\u7684\u5360\u4f4d\u7b26\u66ff\u6362\u5b83\u3002\u4f8b\u5982\uff0c\u7528"[\u59d3\u540d]"\u66ff\u6362"John Doe"\u3002\n\n\u4f60\u597d John\uff0c\n\n\u6211\u5199\u4fe1\u7ed9\u4f60\u662f\u56e0\u4e3a\u6211\u6ce8\u610f\u5230\u4f60\u6700\u8fd1\u4e70\u4e86\u4e00\u8f86\u65b0\u8f66\u3002\u6211\u662f\u4e00\u5bb6\u5f53\u5730\u7ecf\u9500\u5546 (Cheap Dealz) \u7684\u9500\u552e\u5458\uff0c\u6211\u60f3\u8ba9\u4f60\u77e5\u9053\u6211\u4eec\u6709\u4e00\u8f86\u65b0\u8f66\u7684\u8d85\u503c\u4f18\u60e0\u3002\u5982\u679c\u4f60\u6709\u5174\u8da3\uff0c\u8bf7\u544a\u8bc9\u6211\u3002\n\n\u8c22\u8c22\uff0c\n\nJimmy Smith\n\n\u7535\u8bdd\uff1a410-805-2345\n\u7535\u5b50\u90ae\u4ef6\uff1ajimmysmith@cheapdealz.com\n')),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,i.kt)("a",{parentName:"p",href:"https://beta.openai.com/playground/p/002o3gmji5jlwUfRq9d7KDHc?model=text-davinci-003"},"AI\u7684\u56de\u7b54"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\n\u4f60\u597d [\u59d3\u540d]\uff0c\n\n\u6211\u5199\u4fe1\u7ed9\u4f60\u662f\u56e0\u4e3a\u6211\u6ce8\u610f\u5230\u4f60\u6700\u8fd1\u4e70\u4e86\u4e00\u8f86\u65b0\u8f66\u3002\u6211\u662f\u4e00\u5bb6\u5f53\u5730\u7ecf\u9500\u5546 ([\u7ecf\u9500\u5546\u540d\u79f0]) \u7684\u9500\u552e\u5458\uff0c\u6211\u60f3\u8ba9\u4f60\u77e5\u9053\u6211\u4eec\u6709\u4e00\u8f86\u65b0\u8f66\u7684\u8d85\u503c\u4f18\u60e0\u3002\u5982\u679c\u4f60\u6709\u5174\u8da3\uff0c\u8bf7\u544a\u8bc9\u6211\u3002\n\n\u8c22\u8c22\uff0c\n\n[\u9500\u552e\u5458\u59d3\u540d]\n\n\u7535\u8bdd\uff1a[\u7535\u8bdd\u53f7\u7801]\n\u7535\u5b50\u90ae\u4ef6\uff1a[\u7535\u5b50\u90ae\u4ef6\u5730\u5740]\n// highlight-end\n")),(0,i.kt)("p",null,"\u770b\u5230\u6a21\u578b\u5982\u4f55\u4ece\u6307\u4ee4\u4e2d\u63a8\u65ad\u51fa\u7ed3\u679c\u771f\u7684\u5f88\u9177\u3002\u4f8b\u5982\uff0c\u5b83\u77e5\u9053\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"Cheap Dealz"),"\u66ff\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"[\u7ecf\u9500\u5546\u540d\u79f0]"),"\uff0c\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"Jimmy Smith"),"\u66ff\u6362\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"[\u9500\u552e\u5458\u59d3\u540d]"),"\uff0c\u5373\u4f7f\u6211\u4eec\u6ca1\u6709\u660e\u786e\u544a\u8bc9\u5b83\u8fd9\u6837\u505a\u3002"),(0,i.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,i.kt)("p",null,"\ud83d\udea7 \u8fd9\u4e2a\u9875\u9762\u9700\u8981\u5f15\u7528 \ud83d\udea7"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"\u5141\u8bb8 AI \u4ece\u6587\u672c\u4e2d\u5220\u9664\u4e2a\u4eba\u8eab\u4efd\u4fe1\u606f (PII) \u662f\u4e00\u79cd\u6709\u594f\u6548\u7684\u65b9\u6cd5\uff0c\u4f46\u5e94\u8be5\u975e\u5e38\u8c28\u614e\u4f7f\u7528\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u4f1a\u72af\u9519\u8bef\u3002",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);