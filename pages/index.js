import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
<div>
      <Head>
        <title>Llantería Huezo</title>
        <meta name="description" content="Migración de infraestructura a la nube para la llantería Huezo" />
      </Head>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', textAlign: 'center' }}>
        <h1>Llantería Huezo</h1>
        <p>Gestión eficiente de citas y consultas</p>
      </header>
      <nav style={{ backgroundColor: '#444', display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <a href="#citas" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Agendar Cita</a>
        <a href="#consultas" style={{ color: '#fff', margin: '0 10px', textDecoration: 'none' }}>Realizar Consulta</a>
      </nav>
      <main style={{ padding: '20px' }}>
        <section id="introduccion" style={{ marginBottom: '20px' }}>
          <h2>Introducción</h2>
          <p>
            Este proyecto propone la migración de la infraestructura física de la llantería Huezo a la nube,
            mejorando la eficiencia operativa, la accesibilidad y la seguridad de los datos.
          </p>
        </section>
        <section id="objetivos" style={{ marginBottom: '20px' }}>
          <h2>Objetivos</h2>
          <ul>
            <li>Migrar la infraestructura física a una solución en la nube.</li>
            <li>Optimizar la administración de procesos de ventas e inventarios.</li>
            <li>Mejorar la accesibilidad y seguridad de la información.</li>
          </ul>
        </section>
        <section id="citas" style={{ marginBottom: '20px' }}>
          <h2>Agendar Cita</h2>
          <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '10px' }} />
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" name="fecha" style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '10px' }} />
            <label htmlFor="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" rows={4} style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '10px' }}></textarea>
          </form>
        </section>
        <section id="consultas" style={{ marginBottom: '20px' }}>
          <h2>Realizar Consulta</h2>
          <form>
            <label htmlFor="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '10px' }} />
            <label htmlFor="consulta">Consulta:</label>
            <textarea id="consulta" name="consulta" rows={4} style={{ display: 'block', marginBottom: '10px', width: '100%', padding: '10px' }}></textarea>
          </form>
        </section>
      </main>
    </div>
  );
}
