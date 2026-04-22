"use client";

import React from 'react';
import Link from 'next/link';

// --- CONFIGURACIÓN DE COLORES CON DEGRADADOS ---
const PALETTE = {
  dark: '#083344',
  primary: '#00BB7E',
  accent: '#064E3B',
  glass: 'rgba(255, 255, 255, 0.25)',
  shadow: 'rgba(8, 51, 68, 0.3)'
};

// --- DEGRADADOS ---
const GRADIENTS = {
  unifiedBg: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
  buttonGradient: 'linear-gradient(135deg, #00BB7E 0%, #064E3B 100%)',
  buttonHoverGradient: 'linear-gradient(135deg, #064E3B 0%, #00BB7E 100%)',
  navbarGradient: 'linear-gradient(135deg, #083344 0%, #064E3B 100%)',
  footerGradient: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
};

// --- ESTILO LIQUID GLASS ---
const LIQUID_GLASS = {
  title: {
    background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontFamily: "'Saira Stencil One', cursive"
  }
};

// --- INTERFACES ---
interface NivelEducativo {
  nombre: string;
  descripcion: string;
  href: string;
  icono: string;
  color: string;
}

// --- DATOS DE LOS NIVELES EDUCATIVOS CON RUTAS INTERNAS ---
const nivelesData: NivelEducativo[] = [
  {
    nombre: "Educación Inicial",
    descripcion: "Preescolar - 1er y 2do Nivel",
    href: "/Classroom/inicial",
    icono: "🎨",
    color: "#f59e0b"
  },
  {
    nombre: "Educación Primaria",
    descripcion: "1er a 6to Grado",
    href: "Classroom/primaria",
    icono: "📚",
    color: "#10b981"
  },
  {
    nombre: "Educación Media",
    descripcion: "1er a 5to Año (Liceo)",
    href: "/Classroom/media",
    icono: "🎓",
    color: "#3b82f6"
  }
];

// --- COMPONENTE PRINCIPAL ---
const ClassroomPortalPage: React.FC = () => {
  return (
    <div style={{ 
      fontFamily: "'Montserrat', sans-serif", 
      background: GRADIENTS.unifiedBg,
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: GRADIENTS.navbarGradient }}>
        <div className="container">
          <Link href="/" className="navbar-brand" style={{ fontWeight: 'bold', textDecoration: 'none' }}>
            U.E Ciudad Cuatricentenaria
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><Link href="/" className="nav-link">Inicio</Link></li>
              <li className="nav-item"><Link href="/#contacto" className="nav-link">Contacto</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="masthead" style={{
        height: '50vh',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundImage: `url('/assets/img/header-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        marginTop: '56px'
      }}>
        <div className="container">
          <div className="masthead-heading text-uppercase" style={{ 
            fontFamily: "'Saira Stencil One', cursive", 
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            padding: '1.5rem 2rem',
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            borderRadius: '25px',
            color: '#FFFFFF',
            boxShadow: `0 8px 32px ${PALETTE.shadow}`
          }}>
            Acceso a Classroom
          </div>
          <p style={{ 
            marginTop: '1.5rem', 
            fontSize: '1.2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Selecciona tu nivel educativo para acceder a sus aulas virtuales
          </p>
        </div>
      </header>

      {/* Sección de Niveles - 3 botones grandes con Link de Next.js */}
      <section id="niveles" style={{ padding: '80px 0', background: GRADIENTS.unifiedBg }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>
              Niveles Educativos
            </h2>
            <p style={{ color: '#1a1a1a', fontWeight: '500', marginTop: '1rem' }}>
              Haz clic en tu nivel para ver todos los cursos disponibles
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {nivelesData.map((nivel, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <Link 
                  href={nivel.href}
                  className="nivel-card h-100"
                  style={{
                    display: 'block',
                    cursor: 'pointer',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(-8px)';
                    target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                  }}
                >
                  <div 
                    className="card-body text-center p-5"
                    style={{
                      background: `linear-gradient(135deg, white 0%, ${nivel.color}10 100%)`,
                      borderTop: `6px solid ${nivel.color}`
                    }}
                  >
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                      {nivel.icono}
                    </div>
                    <h2 style={{ 
                      color: nivel.color, 
                      fontSize: '1.8rem', 
                      fontWeight: '700',
                      marginBottom: '0.5rem'
                    }}>
                      {nivel.nombre}
                    </h2>
                    <p style={{ color: '#4a5568', marginBottom: '1.5rem' }}>
                      {nivel.descripcion}
                    </p>
                    <div
                      style={{
                        background: GRADIENTS.buttonGradient,
                        border: 'none',
                        padding: '0.8rem 2rem',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '600',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        textAlign: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = GRADIENTS.buttonHoverGradient;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = GRADIENTS.buttonGradient;
                      }}
                    >
                      Ver cursos
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4" style={{ background: GRADIENTS.footerGradient, borderTop: `1px solid ${PALETTE.primary}` }}>
        <div className="container text-center">
          <span style={{ background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 'bold' }}>
            © 2026 U.E Ciudad Cuatricentenaria | Portal de Acceso a Classroom
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ClassroomPortalPage;