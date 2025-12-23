---
date: "2025-12-18"
tags: ["LLM Native", "Wúru", "Tiny teams"]
---

# LLM Native, Tiny Teams

La gran innovación del 2025 es para mí fue la nueva forma de organizar el trabajo para aprovechar al máximo la potencia que dan los LLMs. A la delantera, mostrando como es el futuro, van los workflows de empresas de software [^1], pero no tengo dudas que todas las profesiones van a ser revolucionadas. En lo personal, es un tema que siempre me interesó, en la universidad estudié ingeniería industrial porque quise entender siempre como organizar mejor los procesos y la productividad de las personas. Hace un siglo fue la revolución de la línea de montaje, ahora es como embeber LLMs para complementar al humano en esta era de la economía del conocimiento.

Descompongamos un poco las ideas. Primero, una compañía es una organización colectiva de personas para lograr un objetivo que sería imposible conseguir de forma individual. Alcanzar este objetivo implica orquestar una sumatoria de flujos de trabajo:

![Workflow sum](/images/workflow_sum.png)

Los flujos de trabajo transforman un input en un output, y en la era de los LLMs pueden automatizarse en una proporción que antes hubiera sido imposible. Los LLMs brillan en imitar el trabajo humano. Entonces podemos descomponer al workflow de esta forma:

![Workflow LLM human](/images/workflow_llm_human.png)

Decidir de manera óptima que parte del proceso delegar al LLM y que parte mantener en las personas es lo que define a una organización **LLM native**. Con el avance de los modelos y también la capacidad de ir construyendo contexto, esta frontera entre el humano y el LLM es muy móvil. En Wúru, por ejemplo, en el último año pasamos de no delegar casi nada a escribir con agentes (claude code, warp) entre el 20 y el 40% de todo el código.

Hay dos principios que yo considero fundamentales para guiar a una organización LLM native, que todo el tiempo está descubriendo como operar en la frontera de los LLMs.



1. **Nadie debería hacer a mano lo que se puede hacer con LLMs.**

   Quien me influenció al respecto es Francisco Ingham, el autor de [este manifesto](https://llmnative.dev/manifesto) y quien además coorganiza [esta comunidad](https://discord.gg/dmgG2wkhSu) en Discord para discutir y profundizar las ideas de la automatización con LLMs. El principio es muy sencillo, y vale tanto para los productos que la empresa crea como para como organiza su trabajo interno: toda la fricción, la burocracia, lo que es repetitivo y tedioso tiene que automatizarse. Cada persona esta activamente a la cacería de procesos donde aplicar LLMs. 

2. **Cada unidad de trabajo (o product feature) debería hacer más fácil de producir la siguiente unidad**

   Acá la startup pionera es [Every](https://every.to/) y su fundador Dan Shipper. La idea es que tradicionalmente en el software cuando uno agrega features al producto la complejidad de la ingeniería aumenta, y por lo tanto cada vez es más difícil mantenerlos y sumar nuevos. Con LLMs es posible revertir esta complejidad: a medida que uno trabaja, va creando y "destilando" componentes reusables - que pueden pensarse como la suma de contexto, procesos operativos estandarizados, habilidades codificadas y tools, que una vez construidas (como un [skill](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills) en Claude Code por ejemplo) pueden desplegarse por cualquier miembro del equipo. Así el trabajo futuro se simplifica.

&nbsp;

La aplicación de estos principios no es absoluta sino direccional. No hay una receta fija. Pero si uno avanza es muy probable que se encuentre trabajando con equipos mucho más pequeños que antes, donde los ingenieros (y todos los profesionales) son generalistas y abarcan stacks tecnológicos (dominios de expertise) cada vez más amplios, y quienes no son técnicos usan agentes para aportar al producto. Todos construyen (si es software, hacen pull requests) y se sienten parte del mismo y único equipo. A este formato algunos lo bautizaron como **Tiny Teams**. Por ahora ese futuro se ve más nítido en las empresas de software pero mi predicción es que en esa dirección avanzarán todas todas las organizaciones de la economía del conocimiento.



[^1]: Hay buenas razones por las que el software es particularmente bueno para automatizar con LLMs: la verificabilidad, la cantidad de data pública, y obviamente que los propios labs como Anthropic o OpenAI la iteran todos los días en sus equipos de ingeniería.
