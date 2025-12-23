---
date: "2025-12-18"
tags: ["LLM Native", "Wúru", "Tiny teams"]
---

# LLM Native, Tiny Teams

La gran innovación del 2025 es para mi fue la nueva forma de organizar el trabajo para aprovechar al máximo la potencia que dan los LLMs. A la delantera, mostrando como es el futuro, van los workflows de empresas de software [^1], pero no tengo dudas que todas las profesiones van a ser revolucionadas. En lo personal, es un tema que siempre me interesó, en la universidad estudié ingeniería industrial porque quise entender siempre como organizar mejor los procesos y la productividad de las personas. Hace un siglo fue la revolución de la linea de montaje, ahora es como embeber LLMs para complementar al humano en esta era de la economía del conocimiento.

Descompongamos un poco las ideas. Primero, una compañia es una organización colectiva de personas para lograr un objetivo que sería imposible conseguir de forma individual. Alcanzar este objetivo implica orquestar una sumatoria de flujos de trabajo:

![Workflow sum](/images/workflow_sum.png)

Los flujos de trabajo transforman un input en un output, y en la era de los LLMs pueden automatizarse en una proporción que antes hubiera sido imposible. Los LLMs brillan en imitar en trabajo humano. Entonces podemos descomponer al workflow de esta forma:

![Workflow LLM human](/images/workflow_llm_human.png)

Decidir de manera óptima que parte del proceso delegar al LLM y que parte mantener en las personas es lo que define a una organización **LLM native**. Con el avance de los modelos y también la capacidad de ir construyendo contexto (claude code skills o Claude.MD), esta frontera entre el humano y el LLM es muy móvil. En Wúru, por ejemplo, en el último año pasamos de no delegar casi nada a escrbir con agentes (claude code, warp) entre el 20 y el 40% de todo el código.

Hay dos principios que yo considero fundamentales para guiar a una organización LLM native, que todo el tiempo esta descrubriendo como operar en la frontera de los LLMs.



**1. Nadie debería hacer a mano lo que se puede hacer con AI / LLMs.**
Quien me influenció al respecto es Francisco Ingham, el autor de [este manifesto LLM Native](https://llmnative.dev/manifesto) y quién ademas coorganiza [esta comunidad](https://discord.gg/dmgG2wkhSu) en Discord para discutir y profundizar las ideas de la automatización con LLMs.

**2. Cada unidad de trabajo (o product feature) debería hacer más fácil de producir la siguiente unidad**
Acá la startup pionera es Every y su fundador Dan Shipper. La idea es que tradicionalmente en el software cuando uno agrega features al producto la complejidad de la ingenería aumenta, y por lo tanto cada vez es más dificil mantenerlos y sumar nuevos. Con LLMs es posible revertir esta compejidad: a medida que uno trabaja, va creando y "destilando" componentes reusables - que pueden pensarse como la suma de contexto, procesos operativos estandarizados, habilidades codificadas y tools, que una vez construidas (como un skill en claude code por ejemplo) pueden desplegarse por cualquier miembro del equipo. Así el trabajo futuro se simplifica.



La aplicación de estos principios no es absoluta sino direccional. No hay una receta fija. Pero si uno avanza es muy problable que se encuentre trabajando con equipos mucho más pequeños que antes, donde los ingenieros son generalistas y abarcan stacks tecnológicos cada vez más amplios, y quienes no son ingenieros usan agentes para aportar al producto. Todos construyen, hacen pull requests y se sienten parte del mismo y único equipo. A este formato algunos lo bautizaron como **Tiny Teams**, y a mi me parece que el futuro de las organizaciones está ahi.



[^1]: Hay buenas razones por las que el software es particularmente bueno para automatizar con LLMs: la verificabilidad, la cantidad de data publica, y obviamente que los propios labs como Anthropic o OpenAI la iteran todos los días en sus equipos de ingeniería.
