"use client";

import React, { useEffect } from 'react';

// --- CONFIGURACIÓN DE COLORES CON DEGRADADOS (Basada en tu imagen) ---
const PALETTE = {
  dark: '#083344',    // Azul petróleo profundo (Cuadro izquierdo)
  primary: '#00BB7E', // Verde esmeralda vibrante (Cuadro central)
  accent: '#064E3B',  // Verde bosque profundo (Cuadro derecho)
  glass: 'rgba(255, 255, 255, 0.25)',
  shadow: 'rgba(8, 51, 68, 0.3)'
};

// --- DEGRADADO ÚNICO PARA TODAS LAS SECCIONES ---
const GRADIENTS = {
  // Degradado único para todas las secciones
  unifiedBg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
  // Degradado para tarjetas y elementos interactivos
  cardGradient: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
  cardHoverGradient: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,250,255,1) 100%)',
  // Degradado para botones
  buttonGradient: 'linear-gradient(135deg, #00BB7E 0%, #064E3B 100%)',
  buttonHoverGradient: 'linear-gradient(135deg, #064E3B 0%, #00BB7E 100%)',
  // Degradado para el navbar
  navbarGradient: 'linear-gradient(135deg, #083344 0%, #064E3B 100%)',
  // Degradado para el footer
  footerGradient: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
};

// --- ESTILO LIQUID GLASS ---
const LIQUID_GLASS = {
  container: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(12px) saturate(180%)',
    WebkitBackdropFilter: 'blur(12px) saturate(180%)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    transition: 'all 0.3s ease'
  },
  containerHover: {
    background: 'rgba(255, 255, 255, 0.35)',
    backdropFilter: 'blur(16px) saturate(200%)',
    WebkitBackdropFilter: 'blur(16px) saturate(200%)',
    transform: 'translateY(-5px)'
  },
  title: {
    background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontFamily: "'Saira Stencil One', cursive"
  }
};

// --- INTERFACES ---
interface TeamMember { name: string; role: string; image: string; social: { twitter: string; facebook: string; linkedin: string; }; }
interface TimelineItem { year: string; title: string; description: string; image: string; inverted?: boolean; }
interface GalleryImage { id: number; src: string; title: string; description: string; }

const App: React.FC = () => {
  const teamMembers: TeamMember[] = [
    { name: "Parveen Anand", role: "Directora Académica", image: "/assets/img/team/1.jpg", social: { twitter: "#!", facebook: "#!", linkedin: "#!" } },
    { name: "Diana Petersen", role: "Coordinadora de Control de Estudios", image: "/assets/img/team/2.jpg", social: { twitter: "#!", facebook: "#!", linkedin: "#!" } },
    { name: "Larry Parker", role: "Soporte Técnico CBIT", image: "/assets/img/team/3.jpg", social: { twitter: "#!", facebook: "#!", linkedin: "#!" } }
  ];

  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/assets/img/gallery/1.jpg", title: "Instalaciones Rehabilitadas", description: "Aulas completamente renovadas" },
    { id: 2, src: "/assets/img/gallery/2.jpg", title: "Centro CBIT", description: "Moderno centro de computación" },
    { id: 3, src: "/assets/img/gallery/3.jpg", title: "Área Deportiva", description: "Canchas recuperadas" },
    { id: 4, src: "/assets/img/gallery/4.jpg", title: "Comedor Escolar", description: "Espacio renovado" },
    { id: 5, src: "/assets/img/gallery/5.jpg", title: "Auditorio", description: "Espacio para eventos culturales" },
    { id: 6, src: "/assets/img/gallery/6.jpg", title: "Áreas Recreativas", description: "Espacios para el esparcimiento" },
  ];

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: GRADIENTS.unifiedBg }}>
      <Navigation />
      <Masthead />
      <InicioSection />
      <MisionVisionSection />
      <ResenaHistoricaSection />
      <GallerySection images={galleryImages} />
      <TeamSection members={teamMembers} />
      <ContactSection />
      <Footer />
    </div>
  );
};

// --- COMPONENTES ---

const Navigation: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ background: GRADIENTS.navbarGradient }}>
    <div className="container">
      <a className="navbar-brand" href="#page-top" style={{ fontWeight: 'bold' }}>U.E Ciudad Cuatricentenaria</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
          {['inicio', 'mision-vision', 'resena-historica', 'galeria', 'team', 'contacto'].map((item) => (
            <li className="nav-item" key={item}>
              <a className="nav-link" href={`#${item}`}>{item.replace('-', ' ')}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const Masthead: React.FC = () => (
  <header className="masthead" style={{
    height: '100vh', display: 'flex', alignItems: 'center', color: 'white',
    backgroundImage: `url('/assets/img/header-bg.jpg')`,
    backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center'
  }}>
    <div className="container">
      <div className="masthead-heading text-uppercase" style={{ 
          fontFamily: "'Saira Stencil One', cursive", fontSize: 'clamp(2rem, 8vw, 4.5rem)',
          padding: '1.5rem 2.5rem', display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.4)', borderRadius: '25px',
          color: '#FFFFFF', boxShadow: `0 8px 32px ${PALETTE.shadow}`
        }}>
        U.E Ciudad Cuatricentenaria
      </div>
    </div>
  </header>
);

const InicioSection: React.FC = () => (
  <section className="page-section" id="inicio" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
    <div className="container text-center">
      <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Inicio</h2>
      <div className="row mt-5">
        {[
          { label: 'Calendario', icon: 'fa-calendar-alt', link: '/calendario' },
          { label: 'Classroom', icon: 'fa-chalkboard-teacher', link: '/classroom' },
          { label: 'Horario', icon: 'fa-clock', link: '/horario' }
        ].map((btn, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <a href={btn.link} className="text-decoration-none" style={{ display: 'block' }}>
              <div 
                className="p-4" 
                style={LIQUID_GLASS.container}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
                }}
              >
                <span className="fa-stack fa-4x mb-3">
                  <i className="fas fa-circle fa-stack-2x" style={{ color: PALETTE.primary }}></i>
                  <i className={`fas ${btn.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3" style={{ color: PALETTE.dark, fontWeight: 'bold' }}>{btn.label}</h4>
                <p style={{ color: '#1a1a1a', fontSize: '0.9rem', fontWeight: '500' }}>Accede a la información actualizada de {btn.label.toLowerCase()} escolar.</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MisionVisionSection: React.FC = () => (
  <section className="page-section" id="mision-vision" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Misión y Visión</h2>
      </div>
      <div className="row">
        {[
          { title: 'Misión', text: 'Proporcionar educación integral de calidad en un entorno seguro y rehabilitado, fortaleciendo la formación académica, científica y cultural de la comunidad de Caricuao.' },
          { title: 'Visión', text: 'Consolidarse como una institución modelo donde la unión comunidad-escuela garantiza la excelencia educativa utilizando la infraestructura recuperada como base.' }
        ].map((item, i) => (
          <div className="col-lg-6 mb-4" key={i}>
            <div 
              className="p-5" 
              style={{ ...LIQUID_GLASS.container, height: '100%' }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
              }}
            >
              <h3 style={{ 
                fontFamily: "'Saira Stencil One', cursive", 
                background: GRADIENTS.buttonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px' 
              }}>{item.title}</h3>
              <p style={{ fontSize: '1.1rem', color: '#1a1a1a', fontWeight: '500', lineHeight: '1.7' }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ResenaHistoricaSection: React.FC = () => (
  <section className="page-section" id="resena-historica" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Reseña Histórica</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div 
            className="p-4" 
            style={LIQUID_GLASS.container}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
            }}
          >
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#1a1a1a', fontWeight: '500', marginBottom: 0 }}>
              La U.E.N. Ciudad Cuatricentenaria, ubicada en Caricuao, fue reinaugurada en marzo de 2025. Con capacidad para 1.300 estudiantes, cuenta con 20 salones, CBIT y áreas deportivas de alto nivel.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const GallerySection: React.FC<{ images: GalleryImage[] }> = ({ images }) => {
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null);

  return (
    <section className="page-section" id="galeria" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Galería</h2>
        </div>
        <div className="row g-4">
          {images.map((img) => (
            <div key={img.id} className="col-lg-4 col-md-6">
              <div 
                className="gallery-item" 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }} 
                onClick={() => setSelectedImage(img)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img src={img.src} alt={img.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                <div 
                  className="p-3 text-center"
                  style={LIQUID_GLASS.container}
                >
                  <h5 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0 }}>{img.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.9)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => setSelectedImage(null)}>
          <div style={{
            maxWidth: '90%',
            maxHeight: '90%',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)'
          }}>
            <img src={selectedImage.src} alt={selectedImage.title} style={{ width: '100%', height: 'auto' }} />
            <div className="p-4 text-center">
              <h3 style={{ color: PALETTE.dark }}>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
              <button style={{
                background: GRADIENTS.buttonGradient,
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer'
              }} onClick={() => setSelectedImage(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const TeamSection: React.FC<{ members: TeamMember[] }> = ({ members }) => (
  <section className="page-section" id="team" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
    <div className="container text-center">
      <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Nuestro Equipo</h2>
      <div className="row mt-5">
        {members.map((m, i) => (
          <div key={i} className="col-lg-4 mb-4">
            <div 
              style={{
                ...LIQUID_GLASS.container,
                padding: '20px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
              }}
              onMouseLeave={(e) => {
                Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
              }}
            >
              <img 
                className="mx-auto rounded-circle" 
                src={m.image} 
                alt={m.name} 
                style={{ 
                  width: '180px', 
                  height: '180px', 
                  border: `5px solid ${PALETTE.primary}`, 
                  objectFit: 'cover',
                  marginBottom: '15px'
                }} 
              />
              <h4 className="mt-3" style={{ color: PALETTE.dark, fontWeight: 'bold' }}>{m.name}</h4>
              <p style={{ color: '#1a1a1a', fontWeight: '500' }}>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section className="page-section" id="contacto" style={{ background: GRADIENTS.navbarGradient, padding: '100px 0', color: 'white' }}>
    <div className="container text-center">
      <h2 className="section-heading text-uppercase" style={{ 
        fontFamily: "'Saira Stencil One', cursive", 
        color: PALETTE.primary,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>Contáctanos</h2>
      <div className="mt-5">
        <a 
          href="mailto:contacto@uptcms.edu.ve" 
          className="btn btn-xl text-uppercase mx-3" 
          style={{ 
            background: GRADIENTS.buttonGradient, 
            color: 'white', 
            padding: '1rem 2rem', 
            border: 'none', 
            fontWeight: 'bold',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = GRADIENTS.buttonHoverGradient;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = GRADIENTS.buttonGradient;
            e.currentTarget.style.transform = 'scale(1)';
          }}>
          ✉️ Enviar Mensaje
        </a>
        
        <a 
          href="https://maps.app.goo.gl/1FCg2i3KPujfGUuY8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-xl text-uppercase mx-3" 
          style={{ 
            background: GRADIENTS.buttonGradient, 
            color: 'white', 
            padding: '1rem 2rem', 
            border: 'none', 
            fontWeight: 'bold',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = GRADIENTS.buttonHoverGradient;
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = GRADIENTS.buttonGradient;
            e.currentTarget.style.transform = 'scale(1)';
          }}>
          📍 Ubícanos
        </a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer py-4" style={{ background: GRADIENTS.footerGradient, borderTop: `1px solid ${PALETTE.primary}` }}>
    <div className="container text-center">
      <span style={{ background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
        Copyright © UPTCMS 2026 | U.E Ciudad Cuatricentenaria
      </span>
    </div>
  </footer>
);

export default App;