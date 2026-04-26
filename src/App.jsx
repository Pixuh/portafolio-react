import './App.css'

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <h1 className="logo">JC</h1>
          <ul className="menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#propuesta">Propuesta</a></li>
            <li><a href="#simulacion">Simulación</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#inteligencia">Sistema</a></li>
            <li><a href="#impacto">Impacto</a></li>
            <li><a href="#plan">Plan</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <span className="tag">Propuesta de Proyecto de Título</span>
          <h2>Sistema inteligente para evacuaciones en tiempo real</h2>
          <p>
            Plataforma digital para gestionar evacuaciones, monitorear personas,
            optimizar rutas y apoyar la toma de decisiones durante emergencias.
          </p>

          <div className="hero-buttons">
            <a className="btn" href="#propuesta">Ver propuesta</a>
            <a className="btn-secondary" href="#simulacion">Ver simulación</a>
          </div>
        </section>

        <section id="propuesta" className="section">
          <h2>Presentación del proyecto</h2>
          <p>
            Sistema informático orientado a mejorar los procesos de evacuación en
            organizaciones mediante monitoreo en tiempo real, control de personas
            evacuadas y optimización de rutas.
          </p>

          <div className="cards">
            <article className="card">
              <h3>Monitoreo en tiempo real</h3>
              <p>Permite visualizar el avance de la evacuación desde un panel de control.</p>
            </article>

            <article className="card">
              <h3>Control de personas</h3>
              <p>Facilita identificar personas evacuadas, pendientes o registradas.</p>
            </article>

            <article className="card">
              <h3>Optimización de rutas</h3>
              <p>Utiliza mapas configurables y algoritmos para mejorar desplazamientos.</p>
            </article>
          </div>
        </section>

        <section id="problema" className="section dark">
          <h2>Problema detectado</h2>
          <p>
            Actualmente, muchos procesos de evacuación se basan en señaléticas,
            simulacros y conteos manuales. Esto limita la visibilidad del proceso,
            aumenta la posibilidad de errores y dificulta la toma de decisiones
            durante una emergencia.
          </p>
        </section>

        <section id="simulacion" className="section">
          <span className="tag">Demo visual</span>
          <h2>Simulación de detección</h2>
          <p>
            Representación conceptual de una persona siendo detectada por un sensor
            dentro de un entorno controlado.
          </p>

          <div className="video-container">
            <video autoPlay loop muted playsInline className="demo-video">
              <source src={`${import.meta.env.BASE_URL}demo.mp4`} type="video/mp4" />
            </video>
          </div>

          <p className="demo-caption">
            Esta simulación apoya la idea de monitoreo en tiempo real, permitiendo
            detectar presencia, registrar eventos y entregar información al panel de control.
          </p>
        </section>

        <section id="dashboard" className="section dark">
          <h2>Dashboard de evacuación</h2>
          <p>
            Ejemplo de indicadores que el sistema podría mostrar durante una emergencia.
          </p>

          <div className="dashboard-clean">
            <article className="stat-card">
              <span className="stat-label">Evacuados</span>
              <h3>85%</h3>
              <p>Personas registradas como evacuadas.</p>
            </article>

            <article className="stat-card warning">
              <span className="stat-label">Pendientes</span>
              <h3>12</h3>
              <p>Personas faltantes por confirmar.</p>
            </article>

            <article className="stat-card">
              <span className="stat-label">Tiempo promedio</span>
              <h3>2:35</h3>
              <p>Duración estimada del proceso.</p>
            </article>

            <article className="stat-card success">
              <span className="stat-label">Sistema</span>
              <h3>Activo</h3>
              <p>Monitoreo disponible en tiempo real.</p>
            </article>
          </div>
        </section>

        <section id="inteligencia" className="section">
          <h2>Componente inteligente del sistema</h2>

          <div className="timeline">
            <article>
              <span>01</span>
              <h3>Mapa configurable</h3>
              <p>Registro de zonas, salidas, pasillos y puntos de encuentro.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Modelo mediante grafos</h3>
              <p>Representación del entorno mediante nodos y conexiones.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Algoritmo de rutas</h3>
              <p>Aplicación de Dijkstra para calcular caminos eficientes.</p>
            </article>

            <article>
              <span>04</span>
              <h3>Apoyo a decisiones</h3>
              <p>Entrega de información clara durante situaciones críticas.</p>
            </article>
          </div>
        </section>

        <section id="impacto" className="section dark">
          <h2>Impacto esperado</h2>

          <div className="compare">
            <article className="compare-card before">
              <h3>Antes</h3>
              <ul>
                <li>Conteo manual de personas.</li>
                <li>Sin información centralizada.</li>
                <li>Rutas estáticas.</li>
                <li>Mayor riesgo de errores.</li>
              </ul>
            </article>

            <article className="compare-card after">
              <h3>Después</h3>
              <ul>
                <li>Monitoreo en tiempo real.</li>
                <li>Panel de control centralizado.</li>
                <li>Rutas optimizadas.</li>
                <li>Mejor toma de decisiones.</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="tecnologias" className="section">
          <h2>Tecnologías consideradas</h2>
          <p>
            El sistema puede desarrollarse con tecnologías web modernas, separando
            frontend, backend, base de datos y lógica de optimización.
          </p>

          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>Base de datos</span>
            <span>Grafos</span>
            <span>Dijkstra</span>
            <span>Dashboard</span>
            <span>Scrum</span>
          </div>
        </section>

        <section id="plan" className="section dark">
          <h2>Plan de trabajo</h2>
          <p>
            El desarrollo se plantea mediante una metodología ágil e incremental,
            permitiendo construir, validar y mejorar el sistema por etapas.
          </p>

          <div className="roadmap">
            <article>
              <span>01</span>
              <h3>Análisis</h3>
              <p>Estudio del problema y procesos actuales.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Diseño</h3>
              <p>Arquitectura, base de datos y estructura del sistema.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Desarrollo</h3>
              <p>Implementación de módulos principales.</p>
            </article>

            <article>
              <span>04</span>
              <h3>Algoritmo</h3>
              <p>Integración del cálculo de rutas.</p>
            </article>

            <article>
              <span>05</span>
              <h3>Pruebas</h3>
              <p>Evaluación mediante simulaciones.</p>
            </article>
          </div>
        </section>

        <section id="contacto" className="contacto">
          <h2>Contacto</h2>
          <p>Proyecto desarrollado por Jose Caniumil Riffo.</p>
          <a className="btn" href="mailto:jose.caniumil2001@alumnos.ubiobio.cl">
            Enviar correo
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Jose Caniumil | Propuesta de Proyecto de Título</p>
      </footer>
    </>
  )
}

export default App