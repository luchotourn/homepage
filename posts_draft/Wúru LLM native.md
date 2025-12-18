## Wúru LLM native

Desde que escuché el podcast de Every ([How two engineers ship like a team of 15 with AI agents](https://open.spotify.com/episode/19w1iF1rILoX6gGY0aypPn?si=f34cd0e667c44f54)) en Junio de 2025, es que me convencí que llego una nueva forma de construir un empresa de producto de software.

En particular Claude Code como forma de hacer vibe coding, accediendo a muchos tools de CLI y con una capacidad total de integrarse al workflow de Github. A partir de ahi, empezamos a profundizar los métodos de trabajo agenticos en la Claude Code Session. Surgieron muchos casos de uso interesantes, pero al mismo tiempo limitaciones para que todos el equipo lo pudiera utilizar ya que nuestra estructura de repos y la forma de levantar Wúru local no esta pensadas para darle un contexto adecualdo a Claude Code.

¿Cuáles son los patrones idenficados?

El código está en la frontera de la redefinición de las profesiones, y por lo tanto si queremos estar a la vanguardia tenemos que rempensar como organizamos nuestra empresa, workflows y colaboraciones.

<u>Algunos patrones identificados</u>

1) La estructura de nuestra infra y repositorios quedó obsoleta. No nos permite el dinamismo de levantar en local, iterar con computer use, conectar mcps, explotar en agentic coding. Propongo invertir en armar un Agent-Native Architecture. 
2) Armar un agente dentro de Wúru. Que sea un wrapper de un LLM. Entonces los features que quiero probar son promps, no código. El prompt describe el resultado, y luego el agente define como llevarlo a cabo con las tools que tiene a su disposición. Ejemplo: armar un prompt que explique como quiero priorizar las solicitudes del inbox, que las acomode y arme un scoring.

3. Compount engineering: **Each unit of engineering work should make subsequent units of work easier—not harder.**  Traditional development accumulates technical debt. Every feature adds complexity. Every change increases maintenance burden. The codebase becomes harder to work with over time.

   Compounding engineering inverts this. Each feature you build:

   - Documents patterns for the next feature
   - Creates reusable components that accelerate future work
   - Establishes conventions that reduce decision fatigue
   - Codifies knowledge that compounds across the team



Estrategia 2026

**Producto**

A) Contruir el 20% de automatizaciones que faltan

- Asistente para eliminar pasos intermedios
- Ambient AI en quirófanos para ahorrar clicks

B) Nueva apuesta

Wúru Scribe: Voice to text para acelerar, sumarizar, 

**Organización**

Tiny Team + LLM Native  + Skills 

Equipo chico, multidisciplinario, que cofidica skills (como claude code) para hacerlos accesibles para todos. 

**Negocio**

30% orgánico

30% new network

30% new product

