"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3457],{8323:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const t=n.p+"assets/images/least_to_most_formal-486e9639afd8c95f3b069b29872d9dfd.webp";var s=n(39145);const l={sidebar_position:7,locale:"es-mx",style:"chicago"},i="\ud83d\udfe1 Least to Most Prompting",d={unversionedId:"intermediate/least_to_most",id:"intermediate/least_to_most",title:"\ud83d\udfe1 Least to Most Prompting",description:"Prompting de menos a m\xe1s (LtM) (Zhou et al., 2022) lleva la t\xe9cnica de %%CoT prompting|prompting de CoT%% un paso m\xe1s all\xe1 al descomponer un problema en subproblemas y resolver cada uno. Esta t\xe9cnica est\xe1 inspirada en estrategias educativas del mundo real para ni\xf1os.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intermediate/least_to_most.md",sourceDirName:"intermediate",slug:"/intermediate/least_to_most",permalink:"/es/docs/intermediate/least_to_most",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/least_to_most.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,locale:"es-mx",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Generated Knowledge",permalink:"/es/docs/intermediate/generated_knowledge"},next:{title:"\ud83d\udfe2 \xbfQu\xe9 es una Promoci\xf3n?",permalink:"/es/docs/intermediate/whats_in_a_prompt"}},c={},u=[{value:"Ejemplo: Respuesta a una consulta del cliente",id:"ejemplo-respuesta-a-una-consulta-del-cliente",level:2},{value:"Ejemplo: concatenaci\xf3n de letras",id:"ejemplo-concatenaci\xf3n-de-letras",level:2},{value:"Primer intento: Est\xe1ndar",id:"primer-intento-est\xe1ndar",level:3},{value:"Segundo intento: Cadena de pensamiento (CoT)",id:"segundo-intento-cadena-de-pensamiento-cot",level:3},{value:"Tercer intento: De menor a mayor (un solo prompt)",id:"tercer-intento-de-menor-a-mayor-un-solo-prompt",level:3},{value:"Resultados",id:"resultados",level:3},{value:"Ejemplo: generalizaci\xf3n composicional (SCAN)",id:"ejemplo-generalizaci\xf3n-composicional-scan",level:2},{value:"Primer intento: Standard prompting",id:"primer-intento-standard-prompting",level:3},{value:"Segundo intento: De menos a m\xe1s, primer paso - Reducci\xf3n",id:"segundo-intento-de-menos-a-m\xe1s-primer-paso---reducci\xf3n",level:3},{value:"Segundo intento: De menor a mayor, segundo paso - Cartograf\xeda",id:"segundo-intento-de-menor-a-mayor-segundo-paso---cartograf\xeda",level:3},{value:"Resultados",id:"resultados-1",level:3}],p={toc:u},m="wrapper";function g(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-least-to-most-prompting"},"\ud83d\udfe1 Least to Most Prompting"),(0,r.kt)("p",null,"Prompting de menos a m\xe1s (LtM) (Zhou et al., 2022) lleva la t\xe9cnica de ",(0,r.kt)("a",{parentName:"p",id:"prompting de CoT_0_71_1689720644981","data-tooltip-html":"La idea principal de CoT es que al mostrarle al LLM algunos ejemplos de few-shot donde se explica el proceso de razonamiento en los ejemplos, el LLM tambi\xe9n mostrar\xe1 el proceso de razonamiento al responder a la solicitud.","data-tooltip-place":"top"},"CoT prompting"),(0,r.kt)(s.u,{anchorId:"prompting de CoT_0_71_1689720644981",clickable:!0,mdxType:"Tooltip"})," un paso m\xe1s all\xe1 al descomponer un problema en subproblemas y resolver cada uno. Esta t\xe9cnica est\xe1 inspirada en estrategias educativas del mundo real para ni\xf1os."),(0,r.kt)("p",null,"Al igual que en CoT prompting, el problema a resolver se descompone en un conjunto de subproblemas que se construyen uno sobre otro. En una segunda etapa, estos subproblemas se resuelven uno por uno. A diferencia de la cadena de pensamiento, la soluci\xf3n de los subproblemas anteriores se alimenta en el prompt para tratar de resolver el siguiente problema."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:t,style:{width:"600px"},alt:"A diagram of a least to most prompting"})),(0,r.kt)("div",{style:{textAlign:"center"}},"Diagram of a Least to Most prompting"),(0,r.kt)("h2",{id:"ejemplo-respuesta-a-una-consulta-del-cliente"},"Ejemplo: Respuesta a una consulta del cliente"),(0,r.kt)("p",null,"Formulemos una pregunta de atenci\xf3n al cliente un poco complicada:"),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CONSULTA DEL CLIENTE:\\nAcabo de comprar una camiseta de tu colecci\xf3n Arnold el 1 de marzo. Vi que estaba en descuento, as\xed que compr\xe9 una camisa que originalmente costaba $30 y obtuve un 40% de descuento. Vi que tienes un nuevo descuento del 50% para las camisetas. \xbfMe pregunto si puedo devolver la camisa y tener suficiente cr\xe9dito en la tienda para comprar dos de tus camisetas?\\n\\nINSTRUCCIONES:\\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones son permitidas dentro de los 30 d\xedas. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas van desde $18-$100 en tu tienda. No inventes ninguna informaci\xf3n sobre las pol\xedticas de descuento.","initial-response":"Gracias por su consulta. Desafortunadamente, como compr\xf3 la camiseta el 1 de marzo, est\xe1 fuera de nuestra pol\xedtica de devoluciones de 30 d\xedas. Sin embargo, actualmente tenemos un descuento del 50% en todas las camisetas, por lo que podr\xeda comprar dos camisetas con el mismo monto de cr\xe9dito en la tienda. Los precios de nuestras camisetas van desde $18-$100. Por favor, h\xe1ganos saber si tiene alguna otra pregunta.","max-tokens":"256","box-rows":"16","model-temp":"0","top-p":"0"},(0,r.kt)("noscript",null,"No se pudo cargar Dyno Embed: JavaScript debe estar habilitado")),(0,r.kt)("br",null),"Esto ha fallado (estamos dentro del tiempo de retorno), as\xed que vamos a intentar dividirlo en subproblemas:",(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CONSULTA DEL CLIENTE:\\nAcabo de comprar una camiseta de tu colecci\xf3n Arnold el 1 de marzo. Vi que estaba en descuento, as\xed que compr\xe9 una camiseta que originalmente costaba $30, y obtuve un 40% de descuento. Vi que tienes un nuevo descuento para camisetas al 50%. Me pregunto si puedo devolver la camiseta y tener suficiente cr\xe9dito en la tienda para comprar dos de tus camisetas.\\n\\nINSTRUCCIONES:\\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones son permitidas dentro de los 30 d\xedas. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas van desde $18-$100 en tu tienda. No inventes informaci\xf3n sobre las pol\xedticas de descuento.\\n\xbfQu\xe9 subproblemas deben resolverse antes de responder la consulta?","initial-response":"1. Determinar si el cliente se encuentra dentro de la ventana de devoluci\xf3n de 30 d\xedas.\\n2. Calcular la cantidad de cr\xe9dito en la tienda que el cliente recibir\xeda si devolviera la camiseta.\\n3. Calcular el costo de dos camisetas con el actual descuento del 50%.\\n4. Determinar si el cliente tiene suficiente cr\xe9dito en la tienda para comprar dos camisetas.","max-tokens":"256","box-rows":"12","model-temp":"0","top-p":"0"},(0,r.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,r.kt)("br",null),"Tratemos de resolver el primer subproblema:",(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CONSULTA DEL CLIENTE:\\nAcabo de comprar una camiseta de la colecci\xf3n Arnold el 1 de marzo. Vi que estaba en descuento, as\xed que compr\xe9 una camiseta que originalmente costaba $30, y obtuve un 40% de descuento. Vi que tienen un nuevo descuento para camisetas del 50%. Me pregunto si puedo devolver la camiseta y tener suficiente cr\xe9dito en la tienda para comprar dos de sus camisetas.\\n\\nINSTRUCCIONES:\\nEres un agente de servicio al cliente encargado de responder amablemente a las consultas de los clientes. Las devoluciones se permiten dentro de los 30 d\xedas. La fecha de hoy es el 29 de marzo. Actualmente hay un descuento del 50% en todas las camisetas. Los precios de las camisetas oscilan entre $18 y $100 en su tienda. No invente ninguna informaci\xf3n sobre pol\xedticas de descuento.\\nDetermina si el cliente est\xe1 dentro de la ventana de devoluci\xf3n de 30 d\xedas. Vamos paso a paso.","initial-response":"S\xed, el cliente se encuentra dentro de la ventana de devoluci\xf3n de 30 d\xedas. El cliente compr\xf3 la camiseta el 1 de marzo y la fecha de hoy es el 29 de marzo, lo que est\xe1 dentro de la ventana de devoluci\xf3n de 30 d\xedas. \\n\\nPor lo tanto, el cliente es elegible para devolver la camiseta y recibir un cr\xe9dito en la tienda por la compra. El cliente puede usar el cr\xe9dito en la tienda para comprar dos camisetas con el actual descuento del 50%.","max-tokens":"256","box-rows":"19","model-temp":"0","top-p":"0"},(0,r.kt)("noscript",null,"Error al cargar Dyno Embed: JavaScript debe estar habilitado")),(0,r.kt)("p",null,"Con s\xf3lo resolver el primer subproblema, pod\xedamos resolver todo el problema. Si GPT-3 no devolv\xeda una respuesta inmediatamente, podr\xedamos haber resuelto el siguiente subproblema y as\xed sucesivamente hasta que devolviera una respuesta. Obs\xe9rvese que utilizamos ",(0,r.kt)("inlineCode",{parentName:"p"},"Vayamos paso a paso"),". La adici\xf3n de esta frase no siempre es necesaria, pero ayuda para este ejemplo."),(0,r.kt)("h2",{id:"ejemplo-concatenaci\xf3n-de-letras"},"Ejemplo: concatenaci\xf3n de letras"),(0,r.kt)("p",null,"LtM se introdujo originalmente utilizando una solicitud de pocos ejemplos, en lugar de una instrucci\xf3n expl\xedcita para descomponer un problema en m\xfaltiples pasos (como se ve arriba). Adem\xe1s, a veces se puede implementar con una sola solicitud en lugar de solicitudes concatenadas. Examinemos el problema de concatenar la \xfaltima letra de palabras individuales",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," (por ejemplo, dadas las palabras de entrada cake, etymology, la salida deber\xeda ser ey)."),(0,r.kt)("h3",{id:"primer-intento-est\xe1ndar"},"Primer intento: Est\xe1ndar"),(0,r.kt)("p",null,"El prompt est\xe1ndar con ejemplos de few-shot funciona muy mal, incluso con un modelo m\xe1s avanzado como text-davinci-003."),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: think, machine\\nA: ke\\n\\nQ: learning, reasoning, generalization\\nA: ggn\\n\\nQ: artificial, intelligence\\nA: le\\n\\nQ: transformer, language, vision\\nA: ren\\n\\nQ: foo,bar,baz,blip\\nA:","initial-response":"lip","max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"segundo-intento-cadena-de-pensamiento-cot"},"Segundo intento: Cadena de pensamiento (CoT)"),(0,r.kt)("p",null,"Chain of Thought obtiene unos resultados significativamente mejores que los de la incitaci\xf3n est\xe1ndar. Esto se debe a que ahora permite al modelo considerar la extracci\xf3n de la \xfaltima letra de cada palabra por s\xed mismo, reduciendo la complejidad a la operaci\xf3n de agrupar letras que ha recogido previamente. Sin embargo, esto empieza a fallar con tama\xf1os m\xe1s grandes."),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: think, machine\\nA: La \xfaltima letra de "think" es "k". La \xfaltima letra de "machine" es "e". Entonces "think, machine" es "ke".\\n\\nQ: learning, reasoning, generalization\\nA: La \xfaltima letra de "learning" es "g". La \xfaltima letra de "reasoning" es "n". La \xfaltima letra de "generalization" es "n". Entonces "learning, reasoning, generalization" es "ggn".\\n\\nQ: artificial, intelligence\\nA: La \xfaltima letra de "artificial" es "l". La \xfaltima letra de "intelligence" es "e". Entonces "artificial, intelligence" es "le".\\n\\nQ: transformer, language, vision\\nA: La \xfaltima letra de "transformer" es "r". La \xfaltima letra de "language" es "e". La \xfaltima letra de "vision" es "n". Entonces "transformer, language, vision" es "ren".\\n\\nQ: foo,bar,baz,blip\\nA:',"initial-response":'La \xfaltima letra de "foo" es "o". La \xfaltima letra de "bar" es "r". La \xfaltima letra de "baz" es "z". La \xfaltima letra de "blip" es "p". Por lo tanto, "foo,bar,baz,blip" es "orzp".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"tercer-intento-de-menor-a-mayor-un-solo-prompt"},"Tercer intento: De menor a mayor (un solo prompt)"),(0,r.kt)("p",null,"Con el m\xe9todo de menor a mayor, aumentamos el concepto de cadena de pensamiento reformulando los pasos individuales para volver a expresar el resultado concatenado previamente. De este modo, cada paso se reduce a concatenar una sola letra nueva. As\xed se obtienen buenos resultados hasta 12 o m\xe1s palabras."),(0,r.kt)("p",null,'Este enfoque puede parecer muy similar al de la Cadena de Pensamiento, pero es conceptualmente muy diferente. Aqu\xed, en cada paso, introducimos la concatenaci\xf3n anterior. En el caso de "think, machine, learning", en lugar de concatenar las letras "k", "e", "g" individualmente, concatenar\xe1 "k" y "e", luego "ke" y "g". Como resultado de esta reintroducci\xf3n del trabajo anterior, el modelo puede ahora generalizarse a cadenas mucho m\xe1s largas porque lleva el resultado de forma incremental y s\xf3lo necesita hacer una peque\xf1a cantidad de trabajo en cada paso.'),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: think, machine\\nA: La \xfaltima letra de "think" es "k". La \xfaltima letra de "machine" es "e". Concatenando "k" y "e" nos da "ke". Entonces "think, machine" nos da "ke".\\n\\nQ: think, machine, learning\\nA: "think, machine" entrega "ke". La \xfaltima letra de "learning" es "g". Concatenando "ke" y "g" nos da "keg". Entonces "think, machine, learning" es "keg".\\n\\nQ: transformer, language\\nA: La \xfaltima letra de "transformer" es "r". La \xfaltima letra de "language" es "e". Concatenando "r" y "e" nos da "re". Entonces "transformer, language" es "re".\\n\\nQ: transformer, language, vision\\nA: "transformer, language" entrega "re". La \xfaltima letra de "vision" es "n". Concatenando "re" y "n" nos da "ren". Entonces "transformer, language, vision" es "ren".\\n\\nQ: foo,bar,baz,blip,learn,prompting,world,shaking,event,dancefloor,prisma,giraffe\\nA:',"initial-response":'La \xfaltima letra de "foo" es "o". La \xfaltima letra de "bar" es "r". Concatenando "o" y "r" nos da "or". La \xfaltima letra de "baz" es "z". Concatenando "or" y "z" nos da "orz". La \xfaltima letra de "blip" es "p". Concatenando "orz" y "p" nos da "orzp". La \xfaltima letra de "learn" es "n". Concatenando "orzp" y "n" nos da "orzpn". La \xfaltima letra de "prompting" es "g". Concatenando "orzpn" y "g" nos da "orzpng". La \xfaltima letra de "world" es "d". Concatenando "orzpng" y "d" nos da "orzpngd". La \xfaltima letra de "shaking" es "g". Concatenando "orzpngd" y "g" nos da "orzpngdg". La \xfaltima letra de "event" es "t". Concatenando "orzpngdg" y "t" nos da "orzpngdgt".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"resultados"},"Resultados"),(0,r.kt)("p",null,"En el \xfaltimo problema de concatenaci\xf3n de letras con 12 palabras, Chain of Thought tiene una precisi\xf3n del 34%, mientras que Least to Most tiene una precisi\xf3n del 74% (el art\xedculo utiliza text-davinci-002 como modelo)."),(0,r.kt)("h2",{id:"ejemplo-generalizaci\xf3n-composicional-scan"},"Ejemplo: generalizaci\xf3n composicional (SCAN)"),(0,r.kt)("p",null,"La prueba de referencia SCAN",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),' requiere que el modelo convierta el lenguaje natural en secuencias de acciones. Por ejemplo, la frase "correr a la izquierda y caminar dos veces" se traducir\xeda como " TURN_LEFT + RUN + WALK ',"*",' 2". Los modelos ling\xfc\xedsticos funcionan especialmente mal cuando se enfrentan a secuencias m\xe1s largas que las del conjunto de entrenamiento.'),(0,r.kt)("h3",{id:"primer-intento-standard-prompting"},"Primer intento: Standard prompting"),(0,r.kt)("p",null,"Utilizando prompts est\xe1ndar simples, text-davinci-003 llega impresionantemente lejos, pero sigue fallando."),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: girar a la izquierda\\nA: TURN LEFT\\n\\nQ: girar a la derecha\\nA: TURN RIGHT\\n\\nQ: saltar a la izquierda\\nA: TURN LEFT + JUMP\\n\\nQ: correr a la derecha\\nA: TURN RIGHT + RUN\\n\\nQ: mirar dos veces\\nA: LOOK * 2\\n\\nQ: correr y mirar dos veces\\nA: RUN + LOOK * 2\\n\\nQ: saltar a la derecha tres veces\\nA: (TURN RIGHT + JUMP) * 3\\n\\nQ: caminar despu\xe9s de correr\\nA: RUN + WALK\\n\\nQ: girar en direcci\xf3n opuesta a la izquierda\\nA: TURN LEFT * 2\\n\\nQ: dar la vuelta a la izquierda\\nA: TURN LEFT * 4\\n\\nQ: girar en direcci\xf3n opuesta a la derecha\\nA: TURN RIGHT * 2\\n\\nQ: dar la vuelta a la derecha\\nA: TURN RIGHT * 4\\n\\nQ: caminar en direcci\xf3n opuesta a la izquierda\\nA: TURN LEFT * 2 + WALK\\n\\nQ: caminar alrededor de la izquierda\\nA: (TURN LEFT + WALK) * 4\\n\\nQ: "saltar alrededor de la izquierda dos veces despu\xe9s de caminar en direcci\xf3n opuesta a la izquierda tres veces" \\nA:',"initial-response":"(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2","max-tokens":"512","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"segundo-intento-de-menos-a-m\xe1s-primer-paso---reducci\xf3n"},"Segundo intento: De menos a m\xe1s, primer paso - Reducci\xf3n"),(0,r.kt)("p",null,"Aqu\xed, trabajamos con 2 diferentes prompts. El primer prompt se utiliza para reducir el problema de entrada a una secuencia de pasos m\xe1s simple. El segundo prompt se utiliza para mapear esta secuencia simplificada de pasos en acciones reales."),(0,r.kt)("p",null,"Ambos prompts son bastante largos y usan notaci\xf3n de Python comprimida para la acci\xf3n para ahorrar tokens."),(0,r.kt)("p",null,'El primer paso descompone la descripci\xf3n del lenguaje natural en un lenguaje m\xe1s expl\xedcito, pero a\xfan humano. Esto ayudar\xe1 al paso de mapeo a entender las cosas en secuencia.\nPor ejemplo, "saltar hacia la izquierda dos veces" se reduce a "saltar a la izquierda" -> ',(0,r.kt)("inlineCode",{parentName:"p"},"TURN_LEFT + JUMP"),' y "saltar alrededor a la izquierda" -> ',(0,r.kt)("inlineCode",{parentName:"p"},"(TURN_LEFT + JUMP) * 4"),". Del mismo modo, el paso de reducci\xf3n es el que se utiliza para explicar el concepto de repetici\xf3n (dos veces, tres veces, etc...)."),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: mira a la derecha despu\xe9s de mirar dos veces\\nA: "mira a la derecha despu\xe9s de mirar dos veces" se puede resolver con: "mira a la derecha", "mira dos veces".\\n\\nQ: salta opuesto a la derecha tres veces y camina\\nA: "salta opuesto a la derecha tres veces" se puede resolver con: "salta opuesto a la derecha", "salta opuesto a la derecha tres veces". "caminar" se puede resolver con "caminar". Entonces, "salta opuesto a la derecha tres veces y camina" se puede resolver con: "salta opuesto a la derecha", "salta opuesto a la derecha tres veces", "caminar".\\n\\nQ: corre a la izquierda dos veces y corre a la derecha\\nA: "corre a la izquierda dos veces" se puede resolver con: "corre a la izquierda", "corre a la izquierda dos veces". "corre a la derecha" se puede resolver con "corre a la derecha". Entonces, "corre a la izquierda dos veces y corre a la derecha" se puede resolver con: "corre a la izquierda", "corre a la izquierda dos veces", "corre a la derecha".\\n\\nQ: corre opuesto a la derecha\\nA: "corre opuesto a la derecha" se puede resolver con "corre opuesto a la derecha".\\n\\nQ: mira opuesto a la derecha tres veces despu\xe9s de caminar\\nA: "mira opuesto a la derecha tres veces" se puede resolver con: "mira opuesto a la derecha", "mira opuesto a la derecha tres veces". "caminar" se puede resolver con "caminar". Entonces, "mira opuesto a la derecha tres veces despu\xe9s de caminar" se puede resolver con: "mira opuesto a la derecha", "mira opuesto a la derecha tres veces", "caminar".\\n\\nQ: salta alrededor de la derecha\\nA: "salta a la derecha" se puede resolver con: "salta a la derecha", "salta alrededor de la derecha". Entonces, "salta alrededor de la derecha" se puede resolver con: "salta a la derecha", "salta alrededor de la derecha".\\n\\nQ: mira a la derecha tres veces y camina\\nA: "mira a la derecha tres veces" puede ser resuelto por: "mira a la derecha", "mira alrededor a la derecha", "mira alrededor a la derecha tres veces". "caminar" puede ser resuelto por "caminar". As\xed que, "mira a la derecha tres veces y camina" puede ser resuelto por: "mira a la derecha", "mira alrededor a la derecha", "mira alrededor a la derecha tres veces", "caminar".\\n\\nQ: gira a la derecha despu\xe9s de correr a la derecha tres veces\\nA: "gira a la derecha" puede ser resuelto por: "gira a la derecha". "correr a la derecha tres veces" puede ser resuelto por: "correr a la derecha", "correr a la derecha tres veces". As\xed que, "gira a la derecha despu\xe9s de correr a la derecha tres veces" puede ser resuelto por: "gira a la derecha", "correr a la derecha", "correr a la derecha tres veces".\\n\\nQ: salta alrededor a la izquierda dos veces despu\xe9s de caminar opuesto a la izquierda tres veces\\nA:',"initial-response":'"saltar alrededor de la izquierda dos veces" se puede resolver como: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces". "caminar opuesto a la izquierda tres veces" se puede resolver como: "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces". Por lo tanto, "saltar alrededor de la izquierda dos veces despu\xe9s de caminar opuesto a la izquierda tres veces" se puede resolver como: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces", "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"segundo-intento-de-menor-a-mayor-segundo-paso---cartograf\xeda"},"Segundo intento: De menor a mayor, segundo paso - Cartograf\xeda"),(0,r.kt)("p",null,"En el segundo paso, utilizamos el resultado de la reducci\xf3n y, de nuevo, una instrucci\xf3n bastante larga (14 casos) para traducir la descripci\xf3n reducida en lenguaje natural en una secuencia de acciones."),(0,r.kt)("p",null,"Aqu\xed inyectamos el resultado del primer paso:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"saltar dos veces a la izquierda" puede resolverse con: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces". "camina hacia la izquierda tres veces" puede ser resuelto por: "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces". Por lo tanto, "saltar alrededor de la izquierda dos veces despu\xe9s de caminar frente a la izquierda tres veces" se puede resolver por: "saltar a la izquierda", "saltar alrededor de la izquierda", "saltar alrededor de la izquierda dos veces", "caminar opuesto a la izquierda", "caminar opuesto a la izquierda tres veces".')),(0,r.kt)("p",null,"en el LLM."),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: turn left\\nA: "turn left" produce "TURN LEFT".\\n\\nQ: turn right\\nA: "turn right" produce "TURN RIGHT".\\n\\nQ: jump left\\nA: La salida de "jump left" concatena: la salida de "turn left", la salida de "jump". "turn left" produce "TURN LEFT". "jump" produce "JUMP". Entonces concatenando la salida de "turn left" y la salida de "jump" conduce a "TURN LEFT" + "JUMP". Entonces la salida de "jump left" es "TURN LEFT" + "JUMP".\\n\\nQ: run right\\nA: La salida de "run right" concatena: la salida de "turn right", la salida de "run". "turn right" produce "TURN RIGHT". "run" produce "RUN". Entonces concatenando la salida de "turn right" y la salida de "run" conduce a "TURN RIGHT" + "RUN". Entonces la salida de "run right" es "TURN RIGHT" + "RUN".\\n\\nQ: look twice\\nA: La salida de "look twice" concatena: la salida de "look", la salida de "look". "look" produce "LOOK". Entonces repitiendo la salida de "look" dos veces conduce a "LOOK" * 2. Entonces la salida de "look twice" es "LOOK" * 2.\\n\\nQ: run and look twice\\nA: La salida de "run and look twice" concatena: la salida de "run", la salida de "look twice". "run" produce "RUN". "look twice" produce "LOOK" * 2. Entonces concatenando la salida de "run" y la salida de "look twice" conduce a "RUN" + "LOOK" * 2. Entonces la salida de "run and look twice" es "RUN" + "LOOK" * 2.\\n\\nQ: jump right thrice\\nA: La salida de "jump right thrice" concatena: la salida de "jump right", la salida de "jump right", la salida de "jump right". "jump right" produce "TURN RIGHT" + "JUMP". Entonces repitiendo la salida de "jump right" tres veces nos da ("TURN RIGHT" + "JUMP") * 3. Entonces la salida de "jump right thrice" is ("TURN RIGHT" + "JUMP") * 3.\\n\\nQ: walk after run\\nA: La salida de "walk after run" concatena: la salida de "run", la salida de "walk". "run" produce "RUN". "walk" produce "WALK". Entonces concatenando la salida de "run" y la salida de "walk" conduce a "RUN" + "WALK". Entonces la salida de "walk after run" es "RUN" + "WALK".\\n\\nQ: turn opposite left\\nA: La salida de "turn opposite left" concatena: la salida de "turn left", la salida de "turn left". "turn left" produce "TURN LEFT". Entonces repitiendo la salida de "turn left" twice leads to "TURN LEFT" * 2. Entonces la salida de "turn opposite left" es "TURN LEFT" * 2.\\n\\nQ: turn around left\\nA: La salida de "turn around left" concatena: la salida de "turn left", la salida de "turn left", la salida de "turn left", la salida de "turn left". "turn left" produce "TURN LEFT". Entonces repitiendo la salida de "turn left" cuatro veces nos da "TURN LEFT" * 4. Entonces la salida de "turn around left" es "TURN LEFT" * 4.\\n\\nQ: turn opposite right\\nA: La salida de "turn opposite right" concatena: la salida de "turn right", la salida de "turn right". "turn right" produce "TURN RIGHT". Entonces repitiendo la salida de "turn right" twice leads to "TURN RIGHT" * 2. Entonces la salida de "turn opposite right" es "TURN RIGHT" * 2.\\n\\nQ: turn around right\\nA: La salida de "turn around right" concatena: la salida de "turn right", la salida de "turn right", la salida de "turn right", la salida de "turn right". "turn right" produce "TURN RIGHT". Entonces repitiendo la salida de "turn right" cuatro veces nos da "TURN RIGHT" * 4. Entonces la salida de "turn around right" es "TURN RIGHT" * 4.\\n\\nQ: walk opposite left\\nA: La salida de "walk opposite left" concatena: la salida de "turn opposite left", la salida de "walk". "turn opposite left" produce "TURN LEFT" * 2. "walk" produce "WALK". Entonces concatenando la salida de "turn opposite left" y la salida de "walk" conduce a "TURN LEFT" * 2 + "WALK". Entonces la salida de "walk opposite left" es "TURN LEFT" * 2 + "WALK".\\n\\nQ: walk around left\\nA: La salida de "walk around left" concatena: la salida de "walk left", la salida de "walk left", la salida de "walk left", la salida de "walk left". "walk left" produce "TURN LEFT" + "WALK". Entonces repitiendo la salida de "walk around left" cuatro veces nos da ("TURN LEFT" + "WALK") * 4. Entonces la salida de "walk around left" is ("TURN LEFT" + "WALK") * 4.\\n\\nQ: "jump around left twice after walk opposite left thrice" \\nA:',"initial-response":'La salida de "jump around left twice after walk opposite left thrice" concatena: la salida de "walk opposite left thrice", la salida de "jump around left twice". "walk opposite left thrice" outputs "TURN LEFT" * 2 + "WALK" * 3. "jump around left twice" outputs ("TURN LEFT" + "JUMP") * 4. Entonces concatenando la salida de "walk opposite left thrice" and la salida de "jump around left twice" conduce a "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4. Entonces la salida de "jump around left twice after walk opposite left thrice" es "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4.',"max-tokens":"1024","box-rows":"18","model-temp":"0.2"}),(0,r.kt)("h3",{id:"resultados-1"},"Resultados"),(0,r.kt)("p",null,"LtM conlleva m\xfaltiples mejoras:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mejora de la precisi\xf3n con respecto a Chain of Thought"),(0,r.kt)("li",{parentName:"ul"},"mayor generalizaci\xf3n en problemas m\xe1s dif\xedciles que los del prompt"),(0,r.kt)("li",{parentName:"ul"},"mejora espectacular del rendimiento en la generalizaci\xf3n composicional, en particular en la prueba de referencia SCAN",(0,r.kt)("sup",{parentName:"li",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),".")),(0,r.kt)("p",null,"Las instrucciones est\xe1ndar con texto-davinci-002 (el modelo utilizado en el art\xedculo) dan como resultado un 6% de problemas SCAN resueltos con \xe9xito, mientras que las instrucciones de menor a mayor dan como resultado una impresionante tasa de \xe9xito del 76%. Los resultados son a\xfan m\xe1s significativos con code-davinci-002, donde Least to Most logra una tasa de \xe9xito del 99.7%."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);