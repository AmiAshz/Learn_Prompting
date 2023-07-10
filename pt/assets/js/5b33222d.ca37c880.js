"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7054],{3905:(l,b,G)=>{G.d(b,{Zo:()=>e,kt:()=>W});var g=G(67294);function c(l,b,G){return b in l?Object.defineProperty(l,b,{value:G,enumerable:!0,configurable:!0,writable:!0}):l[b]=G,l}function d(l,b){var G=Object.keys(l);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(l);b&&(g=g.filter((function(b){return Object.getOwnPropertyDescriptor(l,b).enumerable}))),G.push.apply(G,g)}return G}function I(l){for(var b=1;b<arguments.length;b++){var G=null!=arguments[b]?arguments[b]:{};b%2?d(Object(G),!0).forEach((function(b){c(l,b,G[b])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(G)):d(Object(G)).forEach((function(b){Object.defineProperty(l,b,Object.getOwnPropertyDescriptor(G,b))}))}return l}function Z(l,b){if(null==l)return{};var G,g,c=function(l,b){if(null==l)return{};var G,g,c={},d=Object.keys(l);for(g=0;g<d.length;g++)G=d[g],b.indexOf(G)>=0||(c[G]=l[G]);return c}(l,b);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(l);for(g=0;g<d.length;g++)G=d[g],b.indexOf(G)>=0||Object.prototype.propertyIsEnumerable.call(l,G)&&(c[G]=l[G])}return c}var a=g.createContext({}),m=function(l){var b=g.useContext(a),G=b;return l&&(G="function"==typeof l?l(b):I(I({},b),l)),G},e=function(l){var b=m(l.components);return g.createElement(a.Provider,{value:b},l.children)},t="mdxType",B={inlineCode:"code",wrapper:function(l){var b=l.children;return g.createElement(g.Fragment,{},b)}},i=g.forwardRef((function(l,b){var G=l.components,c=l.mdxType,d=l.originalType,a=l.parentName,e=Z(l,["components","mdxType","originalType","parentName"]),t=m(G),i=c,W=t["".concat(a,".").concat(i)]||t[i]||B[i]||d;return G?g.createElement(W,I(I({ref:b},e),{},{components:G})):g.createElement(W,I({ref:b},e))}));function W(l,b){var G=arguments,c=b&&b.mdxType;if("string"==typeof l||c){var d=G.length,I=new Array(d);I[0]=i;var Z={};for(var a in b)hasOwnProperty.call(b,a)&&(Z[a]=b[a]);Z.originalType=l,Z[t]="string"==typeof l?l:c,I[1]=Z;for(var m=2;m<d;m++)I[m]=G[m];return g.createElement.apply(null,I)}return g.createElement.apply(null,G)}i.displayName="MDXCreateElement"},33096:(l,b,G)=>{G.r(b),G.d(b,{assets:()=>a,contentTitle:()=>I,default:()=>B,frontMatter:()=>d,metadata:()=>Z,toc:()=>m});var g=G(87462),c=(G(67294),G(3905));const d={sidebar_position:10},I="\ud83d\udfe2 Writing An Email",Z={unversionedId:"basic_applications/writing_emails",id:"basic_applications/writing_emails",title:"\ud83d\udfe2 Writing An Email",description:"Writing emails can be a time consuming task, especially when you need to read through an email you received first. This section will cover use cases ranging from a simple email telling your boss you are sick today to more complex cold lead emails.",source:"@site/docs/basic_applications/writing_emails.md",sourceDirName:"basic_applications",slug:"/basic_applications/writing_emails",permalink:"/pt/docs/basic_applications/writing_emails",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/writing_emails.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Estruturando Dados",permalink:"/pt/docs/basic_applications/table_generation"},next:{title:"\ud83d\udfe2 Blogs",permalink:"/pt/docs/basic_applications/blog_generation"}},a={},m=[{value:"Basic Sick Day Email",id:"basic-sick-day-email",level:2},{value:"Style Modifiers/Instructions",id:"style-modifiersinstructions",level:2},{value:"Responding to an Email",id:"responding-to-an-email",level:2},{value:"Cold Emails",id:"cold-emails",level:2},{value:"Using unstructured information",id:"using-unstructured-information",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"More",id:"more",level:2}],e={toc:m},t="wrapper";function B(l){let{components:b,...G}=l;return(0,c.kt)(t,(0,g.Z)({},e,G,{components:b,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-writing-an-email"},"\ud83d\udfe2 Writing An Email"),(0,c.kt)("p",null,"Writing emails can be a time consuming task, especially when you need to read through an email you received first. This section will cover use cases ranging from a simple email telling your boss you are sick today to more complex cold lead emails."),(0,c.kt)("h2",{id:"basic-sick-day-email"},"Basic Sick Day Email"),(0,c.kt)("p",null,"Imagine that you wake up sick one day and can't go into work (or just don't want to \ud83d\ude08). Here is a simple prompt that writes an email to your boss telling them you are sick. "),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlN1YmplY3Q6IE91dCBvZiBPZmZpY2UgLSBTaWNrXG5cbkRlYXIgSm9obixcblxuSSBhbSB3cml0aW5nIHRvIGluZm9ybSB5b3UgdGhhdCBJIHdpbGwgYmUgb3V0IG9mIG9mZmljZSB0b2RheSBkdWUgdG8gaWxsbmVzcy4gSSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlIHRoaXMgbWF5IGNhdXNlLlxuXG5JIHdpbGwgYmUgc3VyZSB0byBrZWVwIHlvdSB1cGRhdGVkIG9uIG15IHByb2dyZXNzIGFuZCB3aWxsIGJlIGJhY2sgaW4gdGhlIG9mZmljZSBhcyBzb29uIGFzIEkgYW0gZmVlbGluZyBiZXR0ZXIuXG5cblRoYW5rIHlvdSBmb3IgeW91ciB1bmRlcnN0YW5kaW5nLlxuXG5TaW5jZXJlbHksXG5NYXJpbyIsInByb21wdCI6Ik15IE5hbWU6IE1hcmlvXG5Cb3NzJ3MgbmFtZTogSm9oblxuXG5Xcml0ZSBhbiBlbWFpbCB0byBteSBib3NzIHNheWluZyB0aGF0IEkgd2lsbCBiZSBvdXQgb2Ygb2ZmaWNlIHRvZGF5IHNpbmNlIEkgYW0gc2ljay4gIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null,"This email works, but is pretty boring. Let's spice it up a bit!"),(0,c.kt)("h2",{id:"style-modifiersinstructions"},"Style Modifiers/Instructions"),(0,c.kt)("p",null,"It is very easy to modify the style of the email. For example, you can ask the AI to be 'humorous' or instruct it to 'Include a funny reason'."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRlYXIgSm9obixcblxuSSdtIHdyaXRpbmcgdG8gbGV0IHlvdSBrbm93IHRoYXQgSSB3aWxsIGJlIG91dCBvZiBvZmZpY2UgdG9kYXkuIEkga25vdyBJJ20gc3VwcG9zZWQgdG8gYmUgd29ya2luZywgYnV0IEkganVzdCBjb3VsZG4ndCByZXNpc3QgdGhlIGNhbGwgb2YgdGhlIHNpcmVuIHNvbmcgb2YgdGhlIGxvY2FsIGRvbnV0IHNob3AuIEknbSBzdXJlIHlvdSB1bmRlcnN0YW5kLlxuXG5JJ2xsIGJlIGJhY2sgaW4gdGhlIG9mZmljZSB0b21vcnJvdyBhbmQgd2lsbCBtYWtlIHVwIHRoZSB0aW1lLlxuXG5UaGFua3MsXG5NYXJpbyIsInByb21wdCI6Ik15IE5hbWU6IE1hcmlvXG5Cb3NzJ3MgbmFtZTogSm9oblxuXG5Xcml0ZSBhIGh1bW9yb3VzIHlldCBwcm9mZXNzaW9uYWwgZW1haWwgdG8gbXkgYm9zcyBzYXlpbmcgdGhhdCBJIHdpbGwgYmUgb3V0IG9mIG9mZmljZSB0b2RheSBzaW5jZSBJIGFtIHNpY2suIFxuQmUgY29uY2lzZSBhbmQgZnVubnkuIEluY2x1ZGUgYSBmdW5ueSByZWFzb246IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("br",null),(0,c.kt)("p",null,"Here is another example that is more serious/professional."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlN1YmplY3Q6IE91dCBvZiBPZmZpY2UgLSBTaWNrXG5cbkRlYXIgSm9obixcblxuSSBhbSB3cml0aW5nIHRvIGluZm9ybSB5b3UgdGhhdCBJIHdpbGwgYmUgb3V0IG9mIG9mZmljZSB0b2RheSBkdWUgdG8gaWxsbmVzcy4gSSBhcG9sb2dpemUgZm9yIGFueSBpbmNvbnZlbmllbmNlIHRoaXMgbWF5IGNhdXNlLlxuXG5UaGFuayB5b3UgZm9yIHlvdXIgdW5kZXJzdGFuZGluZy5cblxuU2luY2VyZWx5LFxuTWFyaW8iLCJwcm9tcHQiOiJNeSBOYW1lOiBNYXJpb1xuQm9zcydzIG5hbWU6IEpvaG5cblxuV3JpdGUgYSAqKnNlcmlvdXMqKiwgcHJvZmVzc2lvbmFsIGVtYWlsIHRvIG15IGJvc3Mgc2F5aW5nIHRoYXQgSSB3aWxsIGJlIG91dCBvZiBvZmZpY2UgdG9kYXkgc2luY2UgSSBhbSBzaWNrLiBcbkJlIGNvbmNpc2U6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("br",null),(0,c.kt)("h2",{id:"responding-to-an-email"},"Responding to an Email"),(0,c.kt)("p",null,"Imagine that you receive a long email from your boss with a lot of information. You need to respond to the email, but you don't have time to read through the entire thing. You can plug the email into an AI and ask it to ",(0,c.kt)("inlineCode",{parentName:"p"},"Generate a summary of this and a list of action items"),"."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlN1bW1hcnk6IEpvaG4gaXMgcmVxdWVzdGluZyBNYXJpbydzIGFzc2lzdGFuY2UgaW4gYWRkcmVzc2luZyB1c2VyIGludGVyZmFjZSBpc3N1ZXMgd2l0aCB0aGUgc29mdHdhcmUgTWFyaW8gaGFzIGJlZW4gd29ya2luZyBvbi4gVGhlIGlzc3VlcyBpbnZvbHZlIGRpZmZpY3VsdHkgYWNjZXNzaW5nIGNlcnRhaW4gZmVhdHVyZXMgYW5kIHRoZSBVSSBub3QgYmVpbmcgaW50dWl0aXZlIGVub3VnaC4gTWFyaW8ncyBleHBlcnRpc2UgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIGZhbWlsaWFyaXR5IHdpdGggdGhlIHNvZnR3YXJlIG1ha2UgaGltIHRoZSBpZGVhbCBwZXJzb24gdG8gaGVscCB3aXRoIHRoaXMgdGFzay5cblxuQWN0aW9uIEl0ZW1zOlxuLSBNYWtlIGNoYW5nZXMgdG8gdGhlIGxheW91dCwgZGVzaWduLCBvciBmdW5jdGlvbmFsaXR5IG9mIHRoZSBVSVxuLSBSZXF1ZXN0IGFkZGl0aW9uYWwgcmVzb3VyY2VzIG9yIHN1cHBvcnQgaWYgbmVlZGVkXG4tIFByb3ZpZGUgYW4gZXN0aW1hdGVkIHRpbWVsaW5lIGZvciBjb21wbGV0aW9uIG9mIG1vZGlmaWNhdGlvbnMiLCJwcm9tcHQiOiJEZWFyIE1hcmlvLFxuXG5JIGhvcGUgeW91J3JlIGRvaW5nIHdlbGwuIEkgYW0gd3JpdGluZyB0byBwcm92aWRlIHlvdSB3aXRoIHNvbWUgdXBkYXRlcyBvbiBvdXIgY29tcGFueSBhbmQgdG8gcmVxdWVzdCB5b3VyIGFzc2lzdGFuY2UgaW4gYWRkcmVzc2luZyBhbiBpc3N1ZSB3aXRoIHRoZSB1c2VyIGludGVyZmFjZSAoVUkpIG9mIHRoZSBzb2Z0d2FyZSB5b3UgaGF2ZSBiZWVuIHdvcmtpbmcgb24uXG5cbkFzIHlvdSBrbm93LCBvdXIgY29tcGFueSBoYXMgYmVlbiBmb2N1c2luZyBvbiBwcm92aWRpbmcgYSB1c2VyLWZyaWVuZGx5IGV4cGVyaWVuY2UgdG8gb3VyIGN1c3RvbWVycywgYW5kIHdlIGhhdmUgaWRlbnRpZmllZCBzb21lIGlzc3VlcyB3aXRoIHRoZSBVSSBvZiB0aGUgc29mdHdhcmUuIFNwZWNpZmljYWxseSwgd2UgaGF2ZSByZWNlaXZlZCBmZWVkYmFjayBmcm9tIG91ciB1c2VycyB0aGF0IHRoZXkgYXJlIGhhdmluZyBkaWZmaWN1bHR5IGFjY2Vzc2luZyBjZXJ0YWluIGZlYXR1cmVzLCBhbmQgdGhhdCB0aGUgVUkgaXMgbm90IGludHVpdGl2ZSBlbm91Z2guXG5cbldlIG5lZWQgeW91ciBoZWxwIHRvIGFkZHJlc3MgdGhlc2UgaXNzdWVzIGFuZCBtYWtlIGltcHJvdmVtZW50cyB0byB0aGUgVUkgb2YgdGhlIHNvZnR3YXJlLiBUaGlzIG1heSBpbnZvbHZlIG1ha2luZyBjaGFuZ2VzIHRvIHRoZSBsYXlvdXQsIGRlc2lnbiwgb3IgZnVuY3Rpb25hbGl0eSBvZiB0aGUgVUkuIFdlIGJlbGlldmUgdGhhdCB5b3VyIGV4cGVydGlzZSBpbiBzb2Z0d2FyZSBkZXZlbG9wbWVudCBhbmQgeW91ciBmYW1pbGlhcml0eSB3aXRoIHRoZSBzb2Z0d2FyZSB3aWxsIG1ha2UgeW91IHRoZSBpZGVhbCBwZXJzb24gdG8gaGVscCB1cyB3aXRoIHRoaXMgdGFzay5cblxuSWYgeW91IG5lZWQgYW55IGFkZGl0aW9uYWwgcmVzb3VyY2VzIG9yIHN1cHBvcnQgdG8gY29tcGxldGUgdGhpcyB0YXNrLCBwbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIGxldCBtZSBrbm93LiBBZGRpdGlvbmFsbHksIEkgd291bGQgYXBwcmVjaWF0ZSBpdCBpZiB5b3UgY291bGQgcHJvdmlkZSBtZSB3aXRoIGFuIGVzdGltYXRlZCB0aW1lbGluZSBmb3Igd2hlbiB5b3UgZXhwZWN0IHRoZXNlIG1vZGlmaWNhdGlvbnMgdG8gYmUgY29tcGxldGVkLlxuXG5JZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIG5lZWQgZnVydGhlciBjbGFyaWZpY2F0aW9uLCBwbGVhc2UgZG8gbm90IGhlc2l0YXRlIHRvIGNvbnRhY3QgbWUuXG5cblRoYW5rIHlvdSBmb3IgeW91ciBoYXJkIHdvcmsgYW5kIGRlZGljYXRpb24gdG8gb3VyIGNvbXBhbnkuIEkgbG9vayBmb3J3YXJkIHRvIGhlYXJpbmcgYmFjayBmcm9tIHlvdSBzb29uLlxuXG5CZXN0IHJlZ2FyZHMsXG5Kb2huXG5cbkdlbmVyYXRlIGEgc3VtbWFyeSBvZiB0aGlzIGFuZCBhIGxpc3Qgb2YgYWN0aW9uIGl0ZW1zLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("br",null),"You can then use this summary to write a response email.",(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IkRlYXIgSm9obixcblxuVGhhbmsgeW91IGZvciByZWFjaGluZyBvdXQgdG8gbWUgYWJvdXQgdGhlIHVzZXIgaW50ZXJmYWNlIGlzc3VlcyB3aXRoIHRoZSBzb2Z0d2FyZSBJIGhhdmUgYmVlbiB3b3JraW5nIG9uLiBJIHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2YgbWFraW5nIHN1cmUgdGhlIFVJIGlzIGludHVpdGl2ZSBhbmQgZWFzeSB0byB1c2UsIGFuZCBJIGFtIGhhcHB5IHRvIGhlbHAuXG5cbkkgd2lsbCBiZWdpbiBtYWtpbmcgY2hhbmdlcyB0byB0aGUgbGF5b3V0LCBkZXNpZ24sIGFuZCBmdW5jdGlvbmFsaXR5IG9mIHRoZSBVSSB0byBhZGRyZXNzIHRoZSBpc3N1ZXMgeW91IGhhdmUgbWVudGlvbmVkLiBJZiBJIG5lZWQgYWRkaXRpb25hbCByZXNvdXJjZXMgb3Igc3VwcG9ydCwgSSB3aWxsIGxldCB5b3Uga25vdy4gSSB3aWxsIGFsc28gcHJvdmlkZSBhbiBlc3RpbWF0ZWQgdGltZWxpbmUgZm9yIGNvbXBsZXRpb24gb2YgdGhlIG1vZGlmaWNhdGlvbnMuXG5cblBsZWFzZSBsZXQgbWUga25vdyBpZiB5b3UgaGF2ZSBhbnkgcXVlc3Rpb25zIG9yIGNvbmNlcm5zLlxuXG5TaW5jZXJlbHksXG5NYXJpbyIsInByb21wdCI6IlN1bW1hcnk6IEpvaG4gaXMgcmVxdWVzdGluZyBNYXJpbydzIGFzc2lzdGFuY2UgaW4gYWRkcmVzc2luZyB1c2VyIGludGVyZmFjZSBpc3N1ZXMgd2l0aCB0aGUgc29mdHdhcmUgTWFyaW8gaGFzIGJlZW4gd29ya2luZyBvbi4gVGhlIGlzc3VlcyBpbnZvbHZlIGRpZmZpY3VsdHkgYWNjZXNzaW5nIGNlcnRhaW4gZmVhdHVyZXMgYW5kIHRoZSBVSSBub3QgYmVpbmcgaW50dWl0aXZlIGVub3VnaC4gTWFyaW8ncyBleHBlcnRpc2UgaW4gc29mdHdhcmUgZGV2ZWxvcG1lbnQgYW5kIGZhbWlsaWFyaXR5IHdpdGggdGhlIHNvZnR3YXJlIG1ha2UgaGltIHRoZSBpZGVhbCBwZXJzb24gdG8gaGVscCB3aXRoIHRoaXMgdGFzay5cblxuQWN0aW9uIEl0ZW1zOlxuLSBNYWtlIGNoYW5nZXMgdG8gdGhlIGxheW91dCwgZGVzaWduLCBvciBmdW5jdGlvbmFsaXR5IG9mIHRoZSBVSVxuLSBSZXF1ZXN0IGFkZGl0aW9uYWwgcmVzb3VyY2VzIG9yIHN1cHBvcnQgaWYgbmVlZGVkXG4tIFByb3ZpZGUgYW4gZXN0aW1hdGVkIHRpbWVsaW5lIGZvciBjb21wbGV0aW9uIG9mIG1vZGlmaWNhdGlvbnNcblxuV3JpdGUgYSByZXNwb25zZSBlbWFpbCBmcm9tIE1hcmlvIHVzaW5nIHRoZSBhYm92ZSBlbWFpbCBzdW1tYXJ5OiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("br",null),"Note that you can often combine these two steps into one. You can ask the AI to generate a response email directly from the email you received.",(0,c.kt)("h2",{id:"cold-emails"},"Cold Emails"),(0,c.kt)("p",null,"Cold emails are emails sent to people that you don't know. It is difficult to get a response from cold emails, so it can be helpful to send out a lot of personally customized emails. Let's see how to do that with GPT-3",(0,c.kt)("sup",{parentName:"p",id:"fnref-1"},(0,c.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IlN1YmplY3Q6IEEgbW9kZXJuIENSTSB0byBoZWxwIHlvdXIgYnVzaW5lc3MgZ3Jvd1xuXG5EZWFyIFByYW5hdixcblxuTXkgbmFtZSBpcyBNYXggYW5kIEknbSB0aGUgZm91bmRlciBvZiBOaWdodGZhbGwsIGEgbmVvLUNSTSB0aGF0IGhlbHBzIGJ1c2luZXNzZXMgc3RyZWFtbGluZSB0aGVpciBjdXN0b21lciByZWxhdGlvbnNoaXAgbWFuYWdlbWVudC5cblxuV2UgdW5kZXJzdGFuZCB0aGF0IG1hbmFnaW5nIGN1c3RvbWVyIHJlbGF0aW9uc2hpcHMgY2FuIGJlIGEgY2hhbGxlbmdlLCBlc3BlY2lhbGx5IGFzIHlvdXIgYnVzaW5lc3MgZ3Jvd3MuIFRoYXQncyB3aHkgd2UgY3JlYXRlZCBOaWdodGZhbGwsIGEgbW9kZXJuIENSTSB0aGF0IGhlbHBzIHlvdSBzdGF5IG9yZ2FuaXplZCBhbmQgY29ubmVjdGVkIHdpdGggeW91ciBjdXN0b21lcnMuXG5cbk5pZ2h0ZmFsbCBvZmZlcnMgYSByYW5nZSBvZiBmZWF0dXJlcywgaW5jbHVkaW5nIGF1dG9tYXRlZCBjdXN0b21lciBzZWdtZW50YXRpb24sIHBlcnNvbmFsaXplZCBjdXN0b21lciBqb3VybmV5cywgYW5kIHJlYWwtdGltZSBhbmFseXRpY3MuIFdlIGFsc28gcHJvdmlkZSAyNC83IGN1c3RvbWVyIHN1cHBvcnQgdG8gZW5zdXJlIHRoYXQgeW91IGdldCB0aGUgbW9zdCBvdXQgb2Ygb3VyIHByb2R1Y3QuXG5cbkknZCBsb3ZlIHRvIGRpc2N1c3MgaG93IE5pZ2h0ZmFsbCBjYW4gaGVscCB5b3VyIGJ1c2luZXNzIGdyb3cuIFdvdWxkIHlvdSBiZSBhdmFpbGFibGUgZm9yIGEgY2FsbCBzb21ldGltZSB0aGlzIHdlZWs%2FXG5cbkkgbG9vayBmb3J3YXJkIHRvIGhlYXJpbmcgZnJvbSB5b3UuXG5cbkJlc3QsXG5NYXgiLCJwcm9tcHQiOiJDb21wYW55IG5hbWU6IE5pZ2h0ZmFsbFxuTXkgbmFtZTogTWF4XG5Xcml0ZSBhIGNvbGQgb3V0cmVhY2ggZW1haWwgdG8gdGhpcyBmb3VuZGVyLCBuYW1lZCBQcmFuYXYsIHBpdGNoaW5nIGhpbSBvdXIgcHJvZHVjdCwgd2hpY2ggaXMgYSBuZW8tQ1JNLiBNYWtlIHRoZSBlbWFpbCBmb3JtYWwsIHlldCBhcHByb2FjaGFibGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null,"This is neat, but we can do better. Let's add some more information to the prompt."),(0,c.kt)("h3",{id:"using-unstructured-information"},"Using unstructured information"),(0,c.kt)("p",null,"Say you have the linkedin profile of the person you are sending the email to. You can add that information to the prompt to make the email more personalized. Let's use the ",(0,c.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/snpranav/"},"founder of Strive's LinkedIn")," as an example. We'll copy a bunch of information from his profile and add it to the prompt."),(0,c.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjoxLCJ0ZW1wZXJhdHVyZSI6MC43LCJtYXhUb2tlbnMiOjI1Niwib3V0cHV0IjoiRGVhciBQcmFuYXYsXG5cbk15IG5hbWUgaXMgTWF4IGFuZCBJIGFtIHJlYWNoaW5nIG91dCB0byB5b3UgYmVjYXVzZSBJIGJlbGlldmUgb3VyIHByb2R1Y3QsIE5pZ2h0ZmFsbCwgY291bGQgYmUgYSBncmVhdCBmaXQgZm9yIHlvdS4gQXMgYSBjby1mb3VuZGVyIG9mIFN0cml2ZSBhbmQgRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXMgYXQgU3RhcnR1cCBTaGVsbCwgSSdtIHN1cmUgeW91IHVuZGVyc3RhbmQgdGhlIGltcG9ydGFuY2Ugb2YgaGF2aW5nIGEgcmVsaWFibGUgQ1JNIHRvIGhlbHAgbWFuYWdlIGN1c3RvbWVyIHJlbGF0aW9uc2hpcHMuXG5cbk5pZ2h0ZmFsbCBpcyBhIG5lby1DUk0gdGhhdCBoZWxwcyBmb3VuZGVycyBhbmQgZW50cmVwcmVuZXVycyBsaWtlIHlvdXJzZWxmIHRvIGVhc2lseSBtYW5hZ2UgY3VzdG9tZXIgcmVsYXRpb25zaGlwcyBhbmQgdHJhY2sgY3VzdG9tZXIgZGF0YS4gT3VyIHByb2R1Y3QgaXMgZGVzaWduZWQgdG8gYmUgdXNlci1mcmllbmRseSBhbmQgaW50dWl0aXZlLCBzbyB5b3UgY2FuIGZvY3VzIG9uIGdyb3dpbmcgeW91ciBidXNpbmVzcyB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHRoZSB0ZWNobmljYWwgZGV0YWlscy5cblxuSSB0aGluayB5b3Ugd291bGQgZmluZCBOaWdodGZhbGwgdG8gYmUgYSBncmVhdCBhc3NldCB0byB5b3VyIGJ1c2luZXNzLiBJZiB5b3UncmUgaW50ZXJlc3RlZCwgSSdkIGxvdmUgdG8gc2NoZWR1bGUgYSBjYWxsIHRvIGRpc2N1c3MgZnVydGhlci5cblxuQmVzdCxcbk1heCIsInByb21wdCI6IlxuUHJhbmF2IFNoaWthcnB1ciAgMXN0IGRlZ3JlZSBjb25uZWN0aW9uMXN0XG5EZXZlbG9wZXIgQWR2b2NhdGUuIFByb2JsZW0gU29sdmVyLiBQcmV2aW91c2x5OiBDby1mb3VuZGVyIFN0cml2ZSwgSW50ZWwgSVNFRiBBbHVtXG5cbkV4cGVyaWVuY2VFeHBlcmllbmNlXG5UaGFsZXMgQ2xvdWQgU2VjdXJpdHkgbG9nb1xuRGV2ZWxvcGVyIEFkdm9jYXRlRGV2ZWxvcGVyIEFkdm9jYXRlXG5UaGFsZXMgQ2xvdWQgU2VjdXJpdHlUaGFsZXMgQ2xvdWQgU2VjdXJpdHlcbkFwciAyMDIyIC0gUHJlc2VudCC3IDEgeXJBcHIgMjAyMiAtIFByZXNlbnQgtyAxIHlyXG4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVzJ3MgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC5cbi0gU3BlYXJoZWFkZWQgZGV2ZWxvcGVyIGFkb3B0aW9uIG9mIHByb2R1Y3QgYXQgdGhlIFJTQSBjb25mZXJlbmNlIDIwMjIgYW5kIEt1YmVDb24gMjAyMi5cbi0gUHJlc2VudGVkIGEgdGFsayBhdCBIYXNoaUNvcnAncyBhbm51YWwgY29uZmVyZW5jZSAtIEhhc2hpQ29uZiAyMDIyIGluIExBIC0gYWJvdXQgXCJTZWN1cmluZyBBbnkgRGF0YSBTb3VyY2VcIi4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVzJ3MgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC4gLSBTcGVhcmhlYWRlZCBkZXZlbG9wZXIgYWRvcHRpb24gb2YgcHJvZHVjdCBhdCB0aGUgUlNBIGNvbmZlcmVuY2UgMjAyMiBhbmQgS3ViZUNvbiAyMDIyLiAtIFByZXNlbnRlZCBhIHRhbGsgYXQgSGFzaGlDb3JwJ3MgYW5udWFsIGNvbmZlcmVuY2UgLSBIYXNoaUNvbmYgMjAyMiBpbiBMQSAtIGFib3V0IFwiU2VjdXJpbmcgQW55IERhdGEgU291cmNlXCIuIHNlZSBtb3JlXG5Ta2lsbHM6IERhdGEgRW5jcnlwdGlvbiBTdGFuZGFyZCAoREVTKSC3IENyeXB0b2dyYXBoeSC3IEN5YmVyc2VjdXJpdHkgtyBDb250ZW50IENyZWF0aW9uILcgQXp1cmUgS3ViZXJuZXRlcyBTZXJ2aWNlIChBS1MpILcgR29vZ2xlIEt1YmVybmV0ZXMgRW5naW5lIChHS0UpU2tpbGxzOiBEYXRhIEVuY3J5cHRpb24gU3RhbmRhcmQgKERFUykgtyBDcnlwdG9ncmFwaHkgtyBDeWJlcnNlY3VyaXR5ILcgQ29udGVudCBDcmVhdGlvbiC3IEF6dXJlIEt1YmVybmV0ZXMgU2VydmljZSAoQUtTKSC3IEdvb2dsZSBLdWJlcm5ldGVzIEVuZ2luZSAoR0tFKVxuU3RhcnR1cCBTaGVsbCBsb2dvXG5EaXJlY3RvciBvZiBGb3VuZGVyIFJlc291cmNlc0RpcmVjdG9yIG9mIEZvdW5kZXIgUmVzb3VyY2VzXG5TdGFydHVwIFNoZWxsU3RhcnR1cCBTaGVsbFxuRmViIDIwMjIgLSBQcmVzZW50ILcgMSB5ciAyIG1vc0ZlYiAyMDIyIC0gUHJlc2VudCC3IDEgeXIgMiBtb3NcbkNvbGxlZ2UgUGFyaywgTWFyeWxhbmQsIFVuaXRlZCBTdGF0ZXNDb2xsZWdlIFBhcmssIE1hcnlsYW5kLCBVbml0ZWQgU3RhdGVzXG4tIENsb3NlZCBwYXJ0bmVyc2hpcHMgb2YgZm91bmRlciByZXNvdXJjZXMgd2l0aCB2YXJpb3VzIHRlY2ggY29tcGFuaWVzIGxpa2UgVmVyY2VsLCBNb25nb0RCLCBldGMuXG4tIFNvdXJjZWQgb3ZlciAkNTAsMDAwIG9mIGNyZWRpdHMgYW5kIHJlc291cmNlcyBmb3IgZm91bmRlcnMgYXQgU3RhcnR1cCBTaGVsbCBpbiB0aGUgc3BhbiBvZiAzIG1vbnRocy4tIENsb3NlZCBwYXJ0bmVyc2hpcHMgb2YgZm91bmRlciByZXNvdXJjZXMgd2l0aCB2YXJpb3VzIHRlY2ggY29tcGFuaWVzIGxpa2UgVmVyY2VsLCBNb25nb0RCLCBldGMuIC0gU291cmNlZCBvdmVyICQ1MCwwMDAgb2YgY3JlZGl0cyBhbmQgcmVzb3VyY2VzIGZvciBmb3VuZGVycyBhdCBTdGFydHVwIFNoZWxsIGluIHRoZSBzcGFuIG9mIDMgbW9udGhzLlxuU2tpbGxzOiBTdHJhdGVnaWMgUGFydG5lcnNoaXBzU2tpbGxzOiBTdHJhdGVnaWMgUGFydG5lcnNoaXBzXG5TdHJpdmUgTmV0d29yayBsb2dvXG5Dby1Gb3VuZGVyQ28tRm91bmRlclxuU3RyaXZlU3RyaXZlXG5EZWMgMjAyMCAtIE5vdiAyMDIxILcgMSB5ckRlYyAyMDIwIC0gTm92IDIwMjEgtyAxIHlyXG4tIEZvdW5kZWQgSW5kaWEncyBmaXJzdCBjb2hvcnQtYmFzZWQgbGVhcm5pbmcgcGxhdGZvcm0gZm9yIHBhc3Npb24tcmVsYXRlZCBjb3Vyc2VzLiBIYWQgN0srIG1vbnRobHkgYWN0aXZlIHVzZXJzLlxuLSBCdWlsdCB0aGUgbGVhcm5pbmcgcGxhdGZvcm0gZnJvbSB0aGUgZ3JvdW5kIHVwIGFuZCBtYW5hZ2VkIHRyYWZmaWMgdG8gdGhlIHdlYnNpdGUgYXQgc2NhbGUgYW5kIG92ZXJzYXcgdGhlIHNhbGVzIGFuZCBtYXJrZXRpbmcgZXhlY3V0aW9uLlxuLSBOZWdvdGlhdGVkIHdpdGggMTAwWC5WQyBhbmQgUGVvcGxlIEdyb3VwIHRvIHJhaXNlICQ1MEsgc2VlZCBmdW5kaW5nIGZvciBTdHJpdmUuLSBGb3VuZGVkIEluZGlhJ3MgZmlyc3QgY29ob3J0LWJhc2VkIGxlYXJuaW5nIHBsYXRmb3JtIGZvciBwYXNzaW9uLXJlbGF0ZWQgY291cnNlcy4gSGFkIDdLKyBtb250aGx5IGFjdGl2ZSB1c2Vycy4gLSBCdWlsdCB0aGUgbGVhcm5pbmcgcGxhdGZvcm0gZnJvbSB0aGUgZ3JvdW5kIHVwIGFuZCBtYW5hZ2VkIHRyYWZmaWMgdG8gdGhlIHdlYnNpdGUgYXQgc2NhbGUgYW5kIG92ZXJzYXcgdGhlIHNhbGVzIGFuZCBtYXJrZXRpbmcgZXhlY3V0aW9uLiAtIE5lZ290aWF0ZWQgd2l0aCAxMDBYLlZDIGFuZCBQZW9wbGUgR3JvdXAgdG8gcmFpc2UgJDUwSyBzZWVkIGZ1bmRpbmcgZm9yIFN0cml2ZS5zZWUgbW9yZVxuU2tpbGxzOiBHbyAoUHJvZ3JhbW1pbmcgTGFuZ3VhZ2UpILcgUHl0aG9uIChQcm9ncmFtbWluZyBMYW5ndWFnZSkgtyBQcm9kdWN0IE1hbmFnZW1lbnQgtyBQcm9kdWN0IE1hcmtldGluZyC3IE5leHQuanMgtyBBbWF6b24gRUtTXG5cbkVkdWNhdGlvbkVkdWNhdGlvblxuVW5pdmVyc2l0eSBvZiBNYXJ5bGFuZCBsb2dvXG5Vbml2ZXJzaXR5IG9mIE1hcnlsYW5kVW5pdmVyc2l0eSBvZiBNYXJ5bGFuZFxuVW5kZXJncmFkdWF0ZSwgTWF0aGVtYXRpY3MgYW5kIENvbXB1dGVyIFNjaWVuY2VVbmRlcmdyYWR1YXRlLCBNYXRoZW1hdGljcyBhbmQgQ29tcHV0ZXIgU2NpZW5jZVxuQXVnIDIwMTkgLSBNYXkgMjAyM0F1ZyAyMDE5IC0gTWF5IDIwMjNcbkFjdGl2aXRpZXMgYW5kIHNvY2lldGllczogRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXMgYXQgU3RhcnR1cCBTaGVsbEFjdGl2aXRpZXMgYW5kIHNvY2lldGllczogRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXMgYXQgU3RhcnR1cCBTaGVsbFxuRXhwbG9yaW5nIHRoZSBiZWF1dHkgb2YgbWF0aGVtYXRpY3Mgd2l0aCB0aGUgcHJhY3RpY2FsaXR5IG9mIGNvbXB1dGVyIHNjaWVuY2VcblxuV3JpdGUgYSBjb2xkIG91dHJlYWNoIGVtYWlsIHRvIHRoaXMgZm91bmRlciwgcGl0Y2hpbmcgaGltIG91ciBwcm9kdWN0LCBOaWdodGZhbGwsIHdoaWNoIGlzIGEgbmVvLUNSTS4gTXkgbmFtZSBpcyBNYXguIE1ha2UgdGhlIGVtYWlsIGZvcm1hbCwgeWV0IGFwcHJvYWNoYWJsZS4gTWVudGlvbiByZWxldmFudCBkZXRhaWxzIGZyb20gaGlzIExpbmtlZEluIGluZm9ybWF0aW9uIGFib3ZlIHRvIGhlbHAgcGl0Y2ggdGhlIHByb2R1Y3QuUHJhbmF2IFNoaWthcnB1ciAgMXN0IGRlZ3JlZSBjb25uZWN0aW9uMXN0XG5EZXZlbG9wZXIgQWR2b2NhdGUuIFByb2JsZW0gU29sdmVyLiBQcmV2aW91c2x5OiBDby1mb3VuZGVyIFN0cml2ZSwgSW50ZWwgSVNFRiBBbHVtXG5cbkV4cGVyaWVuY2VFeHBlcmllbmNlXG5UaGFsZXMgQ2xvdWQgU2VjdXJpdHkgbG9nb1xuRGV2ZWxvcGVyIEFkdm9jYXRlRGV2ZWxvcGVyIEFkdm9jYXRlXG5UaGFsZXMgQ2xvdWQgU2VjdXJpdHlUaGFsZXMgQ2xvdWQgU2VjdXJpdHlcbkFwciAyMDIyIC0gUHJlc2VudCC3IDEgeXJBcHIgMjAyMiAtIFByZXNlbnQgtyAxIHlyXG4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVzJ3MgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC5cbi0gU3BlYXJoZWFkZWQgZGV2ZWxvcGVyIGFkb3B0aW9uIG9mIHByb2R1Y3QgYXQgdGhlIFJTQSBjb25mZXJlbmNlIDIwMjIgYW5kIEt1YmVDb24gMjAyMi5cbi0gUHJlc2VudGVkIGEgdGFsayBhdCBIYXNoaUNvcnAncyBhbm51YWwgY29uZmVyZW5jZSAtIEhhc2hpQ29uZiAyMDIyIGluIExBIC0gYWJvdXQgXCJTZWN1cmluZyBBbnkgRGF0YSBTb3VyY2VcIi4tIEV4ZWN1dGVkIGdvLXRvLW1hcmtldCBhbmQgYm9vc3RlZCBkZXZlbG9wZXIgZW5nYWdlbWVudCBmb3IgVGhhbGVzJ3MgbmV3IGRhdGEgZW5jcnlwdGlvbiBwcm9kdWN0IGxhdW5jaC4gLSBTcGVhcmhlYWRlZCBkZXZlbG9wZXIgYWRvcHRpb24gb2YgcHJvZHVjdCBhdCB0aGUgUlNBIGNvbmZlcmVuY2UgMjAyMiBhbmQgS3ViZUNvbiAyMDIyLiAtIFByZXNlbnRlZCBhIHRhbGsgYXQgSGFzaGlDb3JwJ3MgYW5udWFsIGNvbmZlcmVuY2UgLSBIYXNoaUNvbmYgMjAyMiBpbiBMQSAtIGFib3V0IFwiU2VjdXJpbmcgQW55IERhdGEgU291cmNlXCIuc2VlIG1vcmVcblNraWxsczogRGF0YSBFbmNyeXB0aW9uIFN0YW5kYXJkIChERVMpILcgQ3J5cHRvZ3JhcGh5ILcgQ3liZXJzZWN1cml0eSC3IENvbnRlbnQgQ3JlYXRpb24gtyBBenVyZSBLdWJlcm5ldGVzIFNlcnZpY2UgKEFLUykgtyBHb29nbGUgS3ViZXJuZXRlcyBFbmdpbmUgKEdLRSlTa2lsbHM6IERhdGEgRW5jcnlwdGlvbiBTdGFuZGFyZCAoREVTKSC3IENyeXB0b2dyYXBoeSC3IEN5YmVyc2VjdXJpdHkgtyBDb250ZW50IENyZWF0aW9uILcgQXp1cmUgS3ViZXJuZXRlcyBTZXJ2aWNlIChBS1MpILcgR29vZ2xlIEt1YmVybmV0ZXMgRW5naW5lIChHS0UpXG5TdGFydHVwIFNoZWxsIGxvZ29cbkRpcmVjdG9yIG9mIEZvdW5kZXIgUmVzb3VyY2VzRGlyZWN0b3Igb2YgRm91bmRlciBSZXNvdXJjZXNcblN0YXJ0dXAgU2hlbGxTdGFydHVwIFNoZWxsXG5GZWIgMjAyMiAtIFByZXNlbnQgtyAxIHlyIDIgbW9zRmViIDIwMjIgLSBQcmVzZW50ILcgMSB5ciAyIG1vc1xuQ29sbGVnZSBQYXJrLCBNYXJ5bGFuZCwgVW5pdGVkIFN0YXRlc0NvbGxlZ2UgUGFyaywgTWFyeWxhbmQsIFVuaXRlZCBTdGF0ZXNcbi0gQ2xvc2VkIHBhcnRuZXJzaGlwcyBvZiBmb3VuZGVyIHJlc291cmNlcyB3aXRoIHZhcmlvdXMgdGVjaCBjb21wYW5pZXMgbGlrZSBWZXJjZWwsIE1vbmdvREIsIGV0Yy5cbi0gU291cmNlZCBvdmVyICQ1MCwwMDAgb2YgY3JlZGl0cyBhbmQgcmVzb3VyY2VzIGZvciBmb3VuZGVycyBhdCBTdGFydHVwIFNoZWxsIGluIHRoZSBzcGFuIG9mIDMgbW9udGhzLi0gQ2xvc2VkIHBhcnRuZXJzaGlwcyBvZiBmb3VuZGVyIHJlc291cmNlcyB3aXRoIHZhcmlvdXMgdGVjaCBjb21wYW5pZXMgbGlrZSBWZXJjZWwsIE1vbmdvREIsIGV0Yy4gLSBTb3VyY2VkIG92ZXIgJDUwLDAwMCBvZiBjcmVkaXRzIGFuZCByZXNvdXJjZXMgZm9yIGZvdW5kZXJzIGF0IFN0YXJ0dXAgU2hlbGwgaW4gdGhlIHNwYW4gb2YgMyBtb250aHMuXG5Ta2lsbHM6IFN0cmF0ZWdpYyBQYXJ0bmVyc2hpcHNTa2lsbHM6IFN0cmF0ZWdpYyBQYXJ0bmVyc2hpcHNcblN0cml2ZSBOZXR3b3JrIGxvZ29cbkNvLUZvdW5kZXJDby1Gb3VuZGVyXG5TdHJpdmVTdHJpdmVcbkRlYyAyMDIwIC0gTm92IDIwMjEgtyAxIHlyRGVjIDIwMjAgLSBOb3YgMjAyMSC3IDEgeXJcbi0gRm91bmRlZCBJbmRpYSdzIGZpcnN0IGNvaG9ydC1iYXNlZCBsZWFybmluZyBwbGF0Zm9ybSBmb3IgcGFzc2lvbi1yZWxhdGVkIGNvdXJzZXMuIEhhZCA3SysgbW9udGhseSBhY3RpdmUgdXNlcnMuXG4tIEJ1aWx0IHRoZSBsZWFybmluZyBwbGF0Zm9ybSBmcm9tIHRoZSBncm91bmQgdXAgYW5kIG1hbmFnZWQgdHJhZmZpYyB0byB0aGUgd2Vic2l0ZSBhdCBzY2FsZSBhbmQgb3ZlcnNhdyB0aGUgc2FsZXMgYW5kIG1hcmtldGluZyBleGVjdXRpb24uXG4tIE5lZ290aWF0ZWQgd2l0aCAxMDBYLlZDIGFuZCBQZW9wbGUgR3JvdXAgdG8gcmFpc2UgJDUwSyBzZWVkIGZ1bmRpbmcgZm9yIFN0cml2ZS4tIEZvdW5kZWQgSW5kaWEncyBmaXJzdCBjb2hvcnQtYmFzZWQgbGVhcm5pbmcgcGxhdGZvcm0gZm9yIHBhc3Npb24tcmVsYXRlZCBjb3Vyc2VzLiBIYWQgN0srIG1vbnRobHkgYWN0aXZlIHVzZXJzLiAtIEJ1aWx0IHRoZSBsZWFybmluZyBwbGF0Zm9ybSBmcm9tIHRoZSBncm91bmQgdXAgYW5kIG1hbmFnZWQgdHJhZmZpYyB0byB0aGUgd2Vic2l0ZSBhdCBzY2FsZSBhbmQgb3ZlcnNhdyB0aGUgc2FsZXMgYW5kIG1hcmtldGluZyBleGVjdXRpb24uIC0gTmVnb3RpYXRlZCB3aXRoIDEwMFguVkMgYW5kIFBlb3BsZSBHcm91cCB0byByYWlzZSAkNTBLIHNlZWQgZnVuZGluZyBmb3IgU3RyaXZlLnNlZSBtb3JlXG5Ta2lsbHM6IEdvIChQcm9ncmFtbWluZyBMYW5ndWFnZSkgtyBQeXRob24gKFByb2dyYW1taW5nIExhbmd1YWdlKSC3IFByb2R1Y3QgTWFuYWdlbWVudCC3IFByb2R1Y3QgTWFya2V0aW5nILcgTmV4dC5qcyC3IEFtYXpvbiBFS1NcblxuRWR1Y2F0aW9uRWR1Y2F0aW9uXG5Vbml2ZXJzaXR5IG9mIE1hcnlsYW5kIGxvZ29cblVuaXZlcnNpdHkgb2YgTWFyeWxhbmRVbml2ZXJzaXR5IG9mIE1hcnlsYW5kXG5VbmRlcmdyYWR1YXRlLCBNYXRoZW1hdGljcyBhbmQgQ29tcHV0ZXIgU2NpZW5jZVVuZGVyZ3JhZHVhdGUsIE1hdGhlbWF0aWNzIGFuZCBDb21wdXRlciBTY2llbmNlXG5BdWcgMjAxOSAtIE1heSAyMDIzQXVnIDIwMTkgLSBNYXkgMjAyM1xuQWN0aXZpdGllcyBhbmQgc29jaWV0aWVzOiBEaXJlY3RvciBvZiBGb3VuZGVyIFJlc291cmNlcyBhdCBTdGFydHVwIFNoZWxsQWN0aXZpdGllcyBhbmQgc29jaWV0aWVzOiBEaXJlY3RvciBvZiBGb3VuZGVyIFJlc291cmNlcyBhdCBTdGFydHVwIFNoZWxsXG5FeHBsb3JpbmcgdGhlIGJlYXV0eSBvZiBtYXRoZW1hdGljcyB3aXRoIHRoZSBwcmFjdGljYWxpdHkgb2YgY29tcHV0ZXIgc2NpZW5jZVxuXG5Xcml0ZSBhIGNvbGQgb3V0cmVhY2ggZW1haWwgdG8gdGhpcyBmb3VuZGVyLCBwaXRjaGluZyBoaW0gb3VyIHByb2R1Y3QsIE5pZ2h0ZmFsbCwgd2hpY2ggaXMgYSBuZW8tQ1JNLiBNeSBuYW1lIGlzIE1heC4gTWFrZSB0aGUgZW1haWwgZm9ybWFsLCB5ZXQgYXBwcm9hY2hhYmxlLiBNZW50aW9uIHJlbGV2YW50IGRldGFpbHMgZnJvbSBoaXMgTGlua2VkSW4gaW5mb3JtYXRpb24gYWJvdmUgdG8gaGVscCBwaXRjaCB0aGUgcHJvZHVjdC4iLCJtb2RlbCI6InRleHQtZGF2aW5jaS0wMDMifQ%3D%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,c.kt)("p",null,"It is super useful that LLMs can cut through the clutter of all the information we copied from LinkedIn. This cold outreach process can also be automated at a larger scale by scraping LinkedIn for relevant information."),(0,c.kt)("h2",{id:"conclusion"},"Conclusion"),(0,c.kt)("p",null,"LLMs can help you write emails! Make sure you read what they write before sending it \ud83d\ude09"),(0,c.kt)("h2",{id:"more"},"More"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://zapier.com/blog/use-openai-gpt-3-to-write-emails/"},"Zapier"))),(0,c.kt)("div",{className:"footnotes"},(0,c.kt)("hr",{parentName:"div"}),(0,c.kt)("ol",{parentName:"div"},(0,c.kt)("li",{parentName:"ol",id:"fn-1"},"Bonta, A. (2022). How to use OpenAI\u2019s ChatGPT to write the perfect cold email. https://www.streak.com/post/how-to-use-ai-to-write-perfect-cold-emails\n",(0,c.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}B.isMDXComponent=!0}}]);