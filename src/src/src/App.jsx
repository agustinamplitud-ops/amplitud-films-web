import React, { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/98 backdrop-blur border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-wider">◯ AMPLITUD</div>
          <div className="hidden md:flex gap-12 text-sm">
            {[
              { label: 'Qué somos', id: 'about' },
              { label: 'Arsenal', id: 'arsenal' },
              { label: 'Servicios', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Videos', id: 'videos' },
              { label: 'Contacto', id: 'contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-yellow-400 transition font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 p-6 space-y-4">
            {[
              { label: 'Qué somos', id: 'about' },
              { label: 'Arsenal', id: 'arsenal' },
              { label: 'Servicios', id: 'services' },
              { label: 'Portfolio', id: 'portfolio' },
              { label: 'Videos', id: 'videos' },
              { label: 'Contacto', id: 'contact' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left hover:text-yellow-400"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section 
        className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://i.imgur.com/BKpVU0u.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-black mb-8 tracking-tighter">
            AMPLITUD
          </h1>

          <p className="text-3xl md:text-5xl font-black mb-12 text-yellow-400 leading-tight">
            Great companies start with small stories.
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Transformamos la comunicación artesanal en una infraestructura digital escalable, previsible y protegida. Profesionalizamos tu marca, eliminamos el caos operativo y dejamos huella inolvidable.
          </p>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-lg rounded transition transform hover:scale-105 duration-300"
          >
            ESCRIBE TU HISTORIA
          </button>
        </div>
      </section>

      {/* Qué es Amplitud */}
      <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl font-black mb-20 text-center">QUIÉNES SOMOS</h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="border-l-4 border-white pl-8">
            <h3 className="text-2xl font-black mb-6 text-yellow-400">PROPÓSITO</h3>
            <p className="text-gray-300 leading-relaxed">
              Evitar que las grandes innovaciones mueran en el anonimato. Existimos para que tu marca brille y deje una huella inolvidable en todos tus canales digitales.
            </p>
          </div>
          <div className="border-l-4 border-white pl-8">
            <h3 className="text-2xl font-black mb-6 text-yellow-400">MISIÓN</h3>
            <p className="text-gray-300 leading-relaxed">
              Profesionalizar la creación de contenido y generar confianza estructural, eliminando el caos operativo. Construimos infraestructura digital que trabaja para ti.
            </p>
          </div>
          <div className="border-l-4 border-white pl-8">
            <h3 className="text-2xl font-black mb-6 text-yellow-400">VISIÓN</h3>
            <p className="text-gray-300 leading-relaxed">
              Ser el estándar de oro en dirección de arte narrativa iberoamericana. Solución lógica para empresas de alto valor que buscan escalar resultados mediante vanguardia tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Arsenal */}
      <section id="arsenal" className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center">NUESTRO ARSENAL</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'REELS & SHORT FORM',
                desc: 'Paquetes de contenido dinámico, alta retención, optimizados para TikTok/Instagram. Diseñados algorítmicamente para dominar la atención en redes sociales.',
                icon: '●',
              },
              {
                title: 'ALTA COMPLEJIDAD (4K)',
                desc: 'Films narrativos, dirección de arte, sonido FX, calidad cinematográfica premium. Producciones que cuentan historias de impacto duradero.',
                icon: '4K',
              },
              {
                title: 'COBERTURA & TESTIMONIALES',
                desc: 'Presencia en eventos, periodismo de marca, capturando el pulso día a día. Documentamos tu movement y construimos confianza con audiencias reales.',
                icon: '◆',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900/50 border border-white/10 p-10 rounded">
                <div className="text-5xl font-black text-yellow-400 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-black mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios & Pricing */}
      <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl font-black mb-20 text-center">SERVICIOS & PRECIOS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              tier: 'STARTER',
              price: 'Desde $200.000',
              period: '',
              desc: 'Para marcas que recién inician su transformación digital',
              features: [
                '4 Reels de alta calidad/mes',
                'Gestión editorial básica',
                'Estrategia de contenido inicial',
                '2 reuniones de feedback',
                'Reportes mensuales',
              ],
              cta: 'Comenzar',
            },
            {
              tier: 'PROFESSIONAL',
              price: 'Personalizado',
              period: '',
              desc: 'Para marcas que buscan escalabilidad con infraestructura sólida',
              features: [
                '8 Reels + 2 Videos en 4K/mes',
                'BAF Framework implementado',
                'Cobertura de eventos mensuales',
                'Auditoría narrativa completa',
                '4 reuniones estratégicas',
                'Reportes analíticos avanzados',
                'Protección de activos digitales',
              ],
              cta: 'Escalar',
              featured: true,
            },
            {
              tier: 'ENTERPRISE',
              price: 'Personalizado',
              period: '',
              desc: 'Solución completa para empresas de alto valor que buscan liderazgo',
              features: [
                'Producción ilimitada de contenido',
                'Team de especialistas dedicado',
                'Integración total con operaciones',
                'Estrategia narrativa personalizada',
                'Acceso prioritario a innovación',
                'Consultoría estratégica mensual',
                'Seguridad y protección premium',
                'Casos de estudio y awards',
              ],
              cta: 'Consultar',
            },
          ].map((plan, i) => (
            <div
              key={i}
              className={`rounded border p-8 transition transform hover:scale-105 duration-300 ${
                plan.featured
                  ? 'bg-yellow-400/10 border-yellow-400 shadow-lg shadow-yellow-400/20 md:scale-105'
                  : 'bg-gray-900/50 border-white/10'
              }`}
            >
              {plan.featured && (
                <div className="bg-yellow-400 text-black text-xs font-black px-4 py-2 rounded w-fit mb-6">
                  MÁS POPULAR
                </div>
              )}
              <h3 className={`text-3xl font-black mb-2 ${plan.featured ? 'text-yellow-400' : 'text-white'}`}>
                {plan.tier}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <Check size={16} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('contact')}
                className={`w-full py-3 font-black rounded transition ${
                  plan.featured
                    ? 'bg-yellow-400 hover:bg-yellow-300 text-black'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center">NUESTRO TRABAJO</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[1, 2].map(i => (
              <div key={i} className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-white/10 overflow-hidden hover:border-white/30 transition">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-gray-400">Trabajo Visual {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded border border-white/10 overflow-hidden hover:border-white/30 transition">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🎬</div>
                    <p className="text-gray-400 text-sm">Proyecto {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl font-black mb-20 text-center">NUESTRO CONTENIDO EN VIDEO</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            'https://www.youtube.com/embed/Kp3MzLqwvC4',
            'https://www.youtube.com/embed/hrQ_yhVoQeU',
            'https://www.youtube.com/embed/5rlOeD-X_Os',
          ].map((url, i) => (
            <div key={i} className="aspect-video rounded border border-white/10 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`Video ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section className="py-32 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-black mb-20 text-center">MARCAS QUE CONFÍAN EN NOSOTROS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Allprocar',
              'Octopus',
              'Grupo Wee',
              'Heisenbeer',
              'Johnson & Johnson',
              'Bairoletto',
            ].map((client, i) => (
              <div key={i} className="p-12 border border-white/10 rounded bg-gray-900/50 text-center hover:border-yellow-400 transition">
                <p className="text-xl font-black text-white">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAF Framework */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl font-black mb-12 text-center">BAF FRAMEWORK</h2>
        <p className="text-center text-gray-400 mb-20 text-lg max-w-3xl mx-auto">
          Brand Architecture Framework — El sistema operativo de tu comunicación digital. Una infraestructura centralizada que integra storytelling potente con operación eficiente.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: 'ESTRUCTURA',
              tool: 'Figma',
              desc: 'Ecosistema centralizado y cerebro estratégico. Trazabilidad total de todos tus activos digitales.',
              icon: '▭',
            },
            {
              title: 'INTELIGENCIA',
              tool: 'Claude AI',
              desc: 'Inteligencia de mercado, auditoría narrativa y escalabilidad de contenido con precisión.',
              icon: '◈',
            },
            {
              title: 'OPERACIÓN',
              tool: 'Gamificación de Roles',
              desc: 'Eficiencia de equipos, retención de talento y dinámicas ágiles que funcionan.',
              icon: '⚙',
            },
          ].map((item, i) => (
            <div key={i} className="bg-gray-900/50 border border-white/10 p-10 rounded hover:border-white/30 transition">
              <div className="text-5xl font-black text-yellow-400 mb-4">{item.icon}</div>
              <h3 className="text-sm text-yellow-400 font-black mb-2 tracking-wide">{item.title}</h3>
              <h4 className="text-3xl font-black mb-6">{item.tool}</h4>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6 bg-white/5 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-black mb-8">ACCIÓN</h2>
          <p className="text-3xl font-black text-yellow-400 mb-12">ESCRIBAMOS TU HISTORIA</p>

          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            ¿Listo para transformar tu marca en una infraestructura digital escalable, previsible y protegida? Contáctanos hoy y descubre cómo Amplitud puede llevar tu negocio al siguiente nivel.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/5492615870816"
              className="px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black rounded transition transform hover:scale-105 duration-300"
            >
              📱 +549 261 5870816
            </a>
            <a
              href="mailto:agustin.amplitud@gmail.com"
              className="px-10 py-4 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-black rounded transition transform hover:scale-105 duration-300"
            >
              ✉️ agustin.amplitud@gmail.com
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-16">© 2026 Amplitud. Profesionalizando narrativas, escalando marcas.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
