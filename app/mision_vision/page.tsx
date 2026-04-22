// app/mision_vision/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// --- CONFIGURACIÓN DE COLORES CON DEGRADADOS ---
const PALETTE = {
  dark: '#083344',
  primary: '#00BB7E',
  accent: '#064E3B',
  glass: 'rgba(255, 255, 255, 0.25)',
  shadow: 'rgba(8, 51, 68, 0.3)'
};

// --- DEGRADADO ÚNICO PARA TODAS LAS SECCIONES ---
const GRADIENTS = {
  unifiedBg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
  cardGradient: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
  cardHoverGradient: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(240,250,255,1) 100%)',
  buttonGradient: 'linear-gradient(135deg, #00BB7E 0%, #064E3B 100%)',
  buttonHoverGradient: 'linear-gradient(135deg, #064E3B 0%, #00BB7E 100%)',
  navbarGradient: 'linear-gradient(135deg, #083344 0%, #064E3B 100%)',
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

const MisionVisionPage: React.FC = () => {
  return (
    <div style={{ 
      fontFamily: "'Montserrat', sans-serif", 
      minHeight: '100vh',
      position: 'relative',
      backgroundImage: `url('/assets/img/fondo4.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundColor: '#083344'
    }}>
      {/* Overlay para mejorar legibilidad */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.65)',
        zIndex: 0
      }} />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />
        
        {/* Hero Section */}
        <header className="masthead" style={{
          height: '35vh',
          minHeight: '250px',
          display: 'flex', 
          alignItems: 'center', 
          color: 'white',
          backgroundImage: `url('/assets/img/header-bg.jpg')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          textAlign: 'center',
          marginTop: '0',
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 1
          }} />
          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="masthead-heading text-uppercase" style={{ 
                fontFamily: "'Saira Stencil One', cursive", 
                fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                padding: '1rem 2rem',
                display: 'inline-block',
                background: 'rgba(0, 187, 126, 0.2)', 
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(0, 187, 126, 0.5)', 
                borderRadius: '20px',
                color: '#FFFFFF', 
                boxShadow: `0 8px 32px ${PALETTE.shadow}`,
                letterSpacing: '2px'
              }}>
              Misión y Visión
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="container py-5">
          
          {/* Grid de Misión y Visión - Versión mejorada y llamativa */}
          <div className="row mb-5 g-4">
            {/* Tarjeta de Misión */}
            <div className="col-lg-6">
              <div 
                className="p-5 h-100"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 187, 126, 0.9) 0%, rgba(6, 78, 59, 0.95) 100%)',
                  borderRadius: '24px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 50px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(0, 187, 126, 0.5) inset';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset';
                }}
              >
                <div className="text-center">
                  <div style={{ 
                    fontSize: '4rem', 
                    marginBottom: '20px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '15px',
                    borderRadius: '50%',
                    width: '90px',
                    height: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}></div>
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    color: 'white',
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    letterSpacing: '1px'
                  }}>Misión</h2>
                  <div style={{ 
                    width: '80px', 
                    height: '3px', 
                    background: 'white', 
                    margin: '20px auto',
                    borderRadius: '3px'
                  }}></div>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: 'white', 
                    fontWeight: '500', 
                    lineHeight: '1.8', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    Proporcionar educación integral de calidad en un entorno seguro y rehabilitado, fortaleciendo la formación académica, científica y cultural de la comunidad de Caricuao.
                  </p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Visión */}
            <div className="col-lg-6">
              <div 
                className="p-5 h-100"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(8, 51, 68, 0.95) 0%, rgba(0, 187, 126, 0.85) 100%)',
                  borderRadius: '24px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 50px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(0, 187, 126, 0.5) inset';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset';
                }}
              >
                <div className="text-center">
                  <div style={{ 
                    fontSize: '4rem', 
                    marginBottom: '20px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: '15px',
                    borderRadius: '50%',
                    width: '90px',
                    height: '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}></div>
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    color: 'white',
                    fontSize: '2.5rem',
                    marginBottom: '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    letterSpacing: '1px'
                  }}>Visión</h2>
                  <div style={{ 
                    width: '80px', 
                    height: '3px', 
                    background: 'white', 
                    margin: '20px auto',
                    borderRadius: '3px'
                  }}></div>
                  <p style={{ 
                    fontSize: '1.1rem', 
                    color: 'white', 
                    fontWeight: '500', 
                    lineHeight: '1.8', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    Consolidarse como una institución modelo donde la unión comunidad-escuela garantiza la excelencia educativa utilizando la infraestructura recuperada como base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ¿Por qué elegirnos? - Sección mejorada */}
          <div className="row mb-5">
            <div className="col-12">
              <div 
                className="p-5" 
                style={{ 
                  ...LIQUID_GLASS.container,
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(15px) saturate(180%)'
                }}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
              >
                <div className="text-center mb-5">
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '2.5rem',
                    marginBottom: '15px'
                  }}>¿Por qué elegirnos?</h2>
                  <div style={{ width: '80px', height: '3px', background: PALETTE.primary, margin: '20px auto', borderRadius: '3px' }}></div>
                  
                  {/* Contenedor estilo header para el texto */}
                  <div style={{ 
                    display: 'inline-block',
                    marginTop: '20px',
                    background: 'rgba(0, 187, 126, 0.15)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 187, 126, 0.4)', 
                    borderRadius: '50px',
                    padding: '12px 30px',
                    boxShadow: `0 4px 15px ${PALETTE.shadow}`
                  }}>
                    <p style={{ 
                      color: PALETTE.dark, 
                      fontSize: '1rem', 
                      fontWeight: '600',
                      margin: 0,
                      letterSpacing: '0.5px'
                    }}>
                      Razones que nos hacen diferentes y nos impulsan a ser mejores cada día
                    </p>
                  </div>
                </div>

                <div className="row g-4">
                  {/* Educación integral y de calidad */}
                  <div className="col-md-6">
                    <div 
                      className="p-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{ 
                          fontSize: '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>01</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: '1.3rem' }}>
                          Educación integral y de calidad
                        </h3>
                      </div>
                      <p style={{ color: '#1a1a1a', fontSize: '0.95rem', lineHeight: '1.7', marginLeft: '45px' }}>
                        Nuestra misión es clara: proporcionar una formación académica, científica y cultural sólida para cada joven de Caricuao. No dejamos a nadie atrás.
                      </p>
                    </div>
                  </div>

                  {/* Entorno rehabilitado y seguro */}
                  <div className="col-md-6">
                    <div 
                      className="p-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{ 
                          fontSize: '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>02</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: '1.3rem' }}>
                          Entorno rehabilitado y seguro
                        </h3>
                      </div>
                      <p style={{ color: '#1a1a1a', fontSize: '0.95rem', lineHeight: '1.7', marginLeft: '45px' }}>
                        Hemos recuperado nuestra infraestructura porque creemos que el aprendizaje florece donde hay respeto, orden y condiciones adecuadas para estudiar.
                      </p>
                    </div>
                  </div>

                  {/* Comunidad + escuela = éxito */}
                  <div className="col-md-6">
                    <div 
                      className="p-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{ 
                          fontSize: '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>03</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: '1.3rem' }}>
                          Comunidad más escuela es éxito
                        </h3>
                      </div>
                      <p style={{ color: '#1a1a1a', fontSize: '0.95rem', lineHeight: '1.7', marginLeft: '45px' }}>
                        Nuestra visión es consolidarnos como una institución modelo donde la unión entre la comunidad educativa (familias, docentes, alumnos y vecinos) garantiza la excelencia.
                      </p>
                    </div>
                  </div>

                  {/* Compromiso con Caricuao */}
                  <div className="col-md-6">
                    <div 
                      className="p-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                        <div style={{ 
                          fontSize: '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>04</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: '1.3rem' }}>
                          Compromiso con Caricuao
                        </h3>
                      </div>
                      <p style={{ color: '#1a1a1a', fontSize: '0.95rem', lineHeight: '1.7', marginLeft: '45px' }}>
                        Somos parte de este territorio. Trabajamos cada día para fortalecer su cultura, su ciencia y su futuro, con las puertas abiertas a todas las familias que confían en nosotros.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de regreso */}
          <div className="text-center mt-5">
            <Link 
              href="/" 
              className="btn btn-xl text-uppercase" 
              style={{ 
                background: GRADIENTS.buttonGradient, 
                color: 'white', 
                padding: '1rem 2rem', 
                border: 'none', 
                fontWeight: 'bold',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = GRADIENTS.buttonHoverGradient;
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = GRADIENTS.buttonGradient;
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}>
              ← Volver al Inicio
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

// Componente de Navegación
const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ 
      background: GRADIENTS.navbarGradient,
      padding: '1rem 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      borderBottom: `2px solid ${PALETTE.primary}`
    }}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>U.E. "Ciudad Cuatricentenaria"</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="/#inicio" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#galeria" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#team" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacto" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Componente Footer
const Footer: React.FC = () => (
  <footer className="footer py-4" style={{ background: GRADIENTS.footerGradient, borderTop: `1px solid ${PALETTE.primary}` }}>
    <div className="container text-center">
      <span style={{ background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
        Copyright © UPTCMS 2026 | U.E Ciudad Cuatricentenaria
      </span>
    </div>
  </footer>
);

export default MisionVisionPage;