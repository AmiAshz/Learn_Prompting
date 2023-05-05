"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1595],{26289:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>m});var o=a(87462),i=(a(67294),a(3905));const n=a.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",r=a.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png";var l=a(39145);const s={sidebar_position:3,locale:"en-us",style:"chicago"},p="\ud83d\udfe2 Chain of Thought Prompting",h={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 Chain of Thought Prompting",description:"Chain of Thought (CoT) prompting (@wei2022chain) is a recently developed prompting",source:"@site/docs/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 Zero Shot Chain of Thought",permalink:"/docs/intermediate/zero_shot_cot"}},d={},m=[{value:"Example",id:"example",level:2},{value:"Incorrect",id:"incorrect",level:4},{value:"Correct",id:"correct",level:4},{value:"Results",id:"results",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Notes",id:"notes",level:2}],c={toc:m},g="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(g,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-chain-of-thought-prompting"},"\ud83d\udfe2 Chain of Thought Prompting"),(0,i.kt)("p",null,"Chain of Thought (CoT) prompting",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a recently developed prompting\nmethod, which encourages the LLM to explain its reasoning. The below image",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\nshows a ",(0,i.kt)("a",{parentName:"p",id:"few shot standard prompt_4_10_1683259604752","data-tooltip-html":"Standard prompts that have exemplars in them. Exemplars are examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"few shot standard prompt"),(0,i.kt)(l.u,{anchorId:"few shot standard prompt_4_10_1683259604752",clickable:!0,mdxType:"Tooltip"})," (left) compared to a chain of thought prompt (right)."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:n,style:{width:"750px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Regular Prompting vs CoT (Wei et al.)"),(0,i.kt)("p",null,"The main idea of CoT is that by showing the LLM some few shot ",(0,i.kt)("a",{parentName:"p",id:"exemplars_0_62_1683259604752","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,i.kt)(l.u,{anchorId:"exemplars_0_62_1683259604752",clickable:!0,mdxType:"Tooltip"})," where the reasoning\nprocess is explained in the exemplars, the LLM will also show the reasoning process\nwhen answering the prompt. This explanation of reasoning often leads to more accurate\nresults."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here are a few demos. The first shows GPT-3 (davinci-003)\nfailing to solve a simple word problem. The second shows GPT-3 (davinci-003) succesfully solving the same problem, by using CoT prompting."),(0,i.kt)("h4",{id:"incorrect"},"Incorrect"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yay4iLCJwcm9tcHQiOiJXaGljaCBpcyBhIGZhc3RlciB3YXkgdG8gZ2V0IHRvIHdvcms%2FXG5PcHRpb24gMTogVGFrZSBhIDEwMDAgbWludXRlIGJ1cywgdGhlbiBhIGhhbGYgaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYmlrZSByaWRlLlxuT3B0aW9uIDI6IFRha2UgYW4gODAwIG1pbnV0ZSBidXMsIHRoZW4gYW4gaG91ciB0cmFpbiwgYW5kIGZpbmFsbHkgYSAzMCBtaW51dGUgYmlrZSByaWRlLiIsIm1vZGVsIjoidGV4dC1kYXZpbmNpLTAwMyJ9",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h4",{id:"correct"},"Correct"),(0,i.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6Ik9wdGlvbiAxIHdpbGwgdGFrZSAxMDAwKzMwKzEwID0gMTA0MCBtaW51dGVzLlxuT3B0aW9uIDIgd2lsbCB0YWtlIDgwMCs2MCszMCA9IDg5MCBtaW51dGVzLlxuU2luY2UgT3B0aW9uIDIgdGFrZXMgODkwIG1pbnV0ZXMgYW5kIE9wdGlvbiAxIHRha2VzIDEwNDAgbWludXRlcywgT3B0aW9uIDIgaXMgZmFzdGVyLiIsInByb21wdCI6IldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgaG9tZT9cbk9wdGlvbiAxOiBUYWtlIGFuIDEwIG1pbnV0ZXMgYnVzLCB0aGVuIGFuIDQwIG1pbnV0ZSBidXMsIGFuZCBmaW5hbGx5IGEgMTAgbWludXRlIHRyYWluLlxuT3B0aW9uIDI6IFRha2UgYSA5MCBtaW51dGVzIHRyYWluLCB0aGVuIGEgNDUgbWludXRlIGJpa2UgcmlkZSwgYW5kIGZpbmFsbHkgYSAxMCBtaW51dGUgYnVzLlxuT3B0aW9uIDEgd2lsbCB0YWtlIDEwKzQwKzEwID0gNjAgbWludXRlcy5cbk9wdGlvbiAyIHdpbGwgdGFrZSA5MCs0NSsxMD0xNDUgbWludXRlcy5cblNpbmNlIE9wdGlvbiAxIHRha2VzIDYwIG1pbnV0ZXMgYW5kIE9wdGlvbiAyIHRha2VzIDE0NSBtaW51dGVzLCBPcHRpb24gMSBpcyBmYXN0ZXIuXG5cbldoaWNoIGlzIGEgZmFzdGVyIHdheSB0byBnZXQgdG8gd29yaz9cbk9wdGlvbiAxOiBUYWtlIGEgMTAwMCBtaW51dGUgYnVzLCB0aGVuIGEgaGFsZiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDEwIG1pbnV0ZSBiaWtlIHJpZGUuXG5PcHRpb24gMjogVGFrZSBhbiA4MDAgbWludXRlIGJ1cywgdGhlbiBhbiBob3VyIHRyYWluLCBhbmQgZmluYWxseSBhIDMwIG1pbnV0ZSBiaWtlIHJpZGUuIiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("p",null,"CoT has been shown to be effective in improving results on tasks like\narithmetic, commonsense, and symbolic reasoning tasks",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nIn particular, prompted PaLM 540B",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," achieves 57% solve\nrate accuracy on GSM8K",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (SOTA at the time)."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:r,style:{width:"300px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"Comparison of models on the GSM8K benchmark (Wei et al.)"),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,'Importantly, according to Wei et al., "CoT only yields performance gains when used with models of \u223c100B parameters". Smaller models wrote illogical chains of thought, which led to worse accuracy than standard prompting. Models usually get performance boosts from CoT prompting in a manner proportional to the size of the model.'),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"No language models were ",(0,i.kt)("del",{parentName:"p"},"hurt")," finetuned in the process of writing this chapter \ud83d\ude0a."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);