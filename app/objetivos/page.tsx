// app/objetivos/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
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

// --- HOOK PARA DETECTAR TAMAÑO DE PANTALLA ---
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

// --- HOOK PARA DETECTAR ORIENTACIÓN ---
const useOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const handleOrientationChange = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    handleOrientationChange();
    window.addEventListener('resize', handleOrientationChange);
    return () => window.removeEventListener('resize', handleOrientationChange);
  }, []);

  return orientation;
};

const ObjetivosInstitucionalesPage: React.FC = () => {
  const { width } = useWindowSize();
  const orientation = useOrientation();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isLandscape = orientation === 'landscape' && isMobile;

  return (
    <div style={{ 
      fontFamily: "'Montserrat', sans-serif", 
      minHeight: '100vh',
      position: 'relative',
      backgroundImage: `url('/assets/img/fondo4.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
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
        
        {/* Hero Section - Ajustado para móviles y landscape */}
        <header className="masthead" style={{
          height: isMobile ? (isLandscape ? '30vh' : '25vh') : '35vh',
          minHeight: isMobile ? (isLandscape ? '180px' : '200px') : '250px',
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
          <div className="container" style={{ position: 'relative', zIndex: 2, padding: isMobile ? '0 15px' : '0' }}>
            <div className="masthead-heading text-uppercase" style={{ 
              fontFamily: "'Saira Stencil One', cursive", 
              fontSize: isMobile ? (isLandscape ? 'clamp(1.2rem, 4vw, 1.6rem)' : 'clamp(1.5rem, 5vw, 2rem)') : 'clamp(2rem, 6vw, 3.5rem)',
              padding: isMobile ? (isLandscape ? '0.5rem 1rem' : '0.8rem 1rem') : '1rem 2rem',
              display: 'inline-block',
              background: 'rgba(0, 187, 126, 0.2)', 
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 187, 126, 0.5)', 
              borderRadius: '20px',
              color: '#FFFFFF', 
              boxShadow: `0 8px 32px ${PALETTE.shadow}`,
              letterSpacing: '1px',
              wordBreak: 'break-word'
            }}>
              Objetivos Institucionales
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="container py-4 py-md-5" style={{ 
          paddingLeft: isMobile ? '15px' : 'auto', 
          paddingRight: isMobile ? '15px' : 'auto',
          maxWidth: isMobile ? '100%' : '1200px',
          margin: '0 auto'
        }}>
          
          {/* Tarjeta principal del Objetivo General */}
          <div className="row mb-4 mb-md-5 g-3 g-md-4">
            <div className="col-12">
              <div 
                className="p-4 p-md-5"
                style={{ 
                  background: 'linear-gradient(135deg, rgba(0, 187, 126, 0.9) 0%, rgba(6, 78, 59, 0.95) 100%)',
                  borderRadius: isMobile ? '20px' : '24px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                    e.currentTarget.style.boxShadow = '0 30px 50px rgba(0, 0, 0, 0.4), 0 0 0 3px rgba(0, 187, 126, 0.5) inset';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 2px rgba(0, 187, 126, 0.3) inset';
                  }
                }}
              >
                <div className="text-center mb-3 mb-md-4">
                  <div style={{ 
                    fontSize: isMobile ? (isLandscape ? '2rem' : '2.5rem') : '4rem',
                    marginBottom: isMobile ? '15px' : '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: isMobile ? '12px' : '15px',
                    borderRadius: '50%',
                    width: isMobile ? (isLandscape ? '60px' : '70px') : '90px',
                    height: isMobile ? (isLandscape ? '60px' : '70px') : '90px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>★</div>
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    color: 'white',
                    fontSize: isMobile ? (isLandscape ? '1.5rem' : '1.8rem') : '2.5rem',
                    marginBottom: isMobile ? '15px' : '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    letterSpacing: '1px'
                  }}>Objetivo General</h2>
                  <div style={{ 
                    width: '60px', 
                    height: '3px', 
                    background: 'white', 
                    margin: '15px auto',
                    borderRadius: '3px'
                  }}></div>
                </div>
                
                <div style={{ 
                  color: 'white', 
                  fontSize: isMobile ? (isLandscape ? '0.9rem' : '1rem') : '1.2rem',
                  lineHeight: isMobile ? '1.6' : '1.9',
                  textAlign: 'center',
                  maxWidth: '900px',
                  margin: '0 auto',
                  fontWeight: '500'
                }}>
                  <p style={{ marginBottom: '0' }}>
                    Desarrollar procesos educativos sostenibles, inclusivos y de calidad en dónde se logre la <strong>participación activa de la población estudiantil, social y docente</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Objetivos Específicos */}
          <div className="row mb-4 mb-md-5">
            <div className="col-12">
              <div 
                className="p-4 p-md-5" 
                style={{ 
                  ...LIQUID_GLASS.container,
                  background: 'rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(15px) saturate(180%)',
                  padding: isMobile ? '20px' : '48px'
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) {
                    Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) {
                    Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  }
                }}
              >
                <div className="text-center mb-4 mb-md-5">
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    color: '#FFFFFF',
                    fontSize: isMobile ? (isLandscape ? '1.5rem' : '1.8rem') : '2.5rem',
                    marginBottom: '15px'
                  }}>Objetivos Específicos</h2>
                  <div style={{ width: '60px', height: '3px', background: PALETTE.primary, margin: '15px auto', borderRadius: '3px' }}></div>
                  <div style={{ 
                    display: 'inline-block',
                    marginTop: '15px',
                    background: 'rgba(0, 187, 126, 0.15)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 187, 126, 0.4)', 
                    borderRadius: '50px',
                    padding: isMobile ? (isLandscape ? '6px 16px' : '8px 20px') : '12px 30px',
                  }}>
                    <p style={{ 
                      color: PALETTE.dark, 
                      fontSize: isMobile ? (isLandscape ? '0.75rem' : '0.85rem') : '1rem',
                      fontWeight: '600',
                      margin: 0,
                      letterSpacing: '0.5px'
                    }}>
                      Metas que guían nuestra labor diaria
                    </p>
                  </div>
                </div>

                <div className="row g-3 g-md-4">
                  {/* Objetivo Específico 1 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderTop: `4px solid ${PALETTE.primary}`,
                        borderRadius: '16px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateY(-8px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        fontSize: isMobile ? (isLandscape ? '1.3rem' : '1.5rem') : '2rem',
                        marginBottom: '12px',
                        color: PALETTE.primary,
                        fontWeight: 'bold'
                      }}>01</div>
                      <h3 style={{ 
                        color: PALETTE.dark, 
                        fontWeight: 'bold', 
                        marginBottom: '12px', 
                        fontSize: isMobile ? (isLandscape ? '1rem' : '1.1rem') : '1.3rem' 
                      }}>
                        Excelencia Educativa
                      </h3>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? (isLandscape ? '0.8rem' : '0.85rem') : '0.95rem', 
                        lineHeight: '1.6' 
                      }}>
                        Proporcionar procesos educativos sostenibles, inclusivos y de calidad en donde se logre la participación activa de toda la comunidad educativa.
                      </p>
                    </div>
                  </div>

                  {/* Objetivo Específico 2 - Mismo patrón */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderTop: `4px solid ${PALETTE.primary}`,
                        borderRadius: '16px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateY(-8px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        fontSize: isMobile ? (isLandscape ? '1.3rem' : '1.5rem') : '2rem',
                        marginBottom: '12px',
                        color: PALETTE.primary,
                        fontWeight: 'bold'
                      }}>02</div>
                      <h3 style={{ 
                        color: PALETTE.dark, 
                        fontWeight: 'bold', 
                        marginBottom: '12px', 
                        fontSize: isMobile ? (isLandscape ? '1rem' : '1.1rem') : '1.3rem' 
                      }}>
                        Participación Activa
                      </h3>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? (isLandscape ? '0.8rem' : '0.85rem') : '0.95rem', 
                        lineHeight: '1.6' 
                      }}>
                        Fomentar la participación activa del estudiante en todas las actividades pedagógicas, promoviendo un aprendizaje dinámico y colaborativo.
                      </p>
                    </div>
                  </div>

                  {/* Objetivo Específico 3 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderTop: `4px solid ${PALETTE.primary}`,
                        borderRadius: '16px',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateY(-8px)';
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        fontSize: isMobile ? (isLandscape ? '1.3rem' : '1.5rem') : '2rem',
                        marginBottom: '12px',
                        color: PALETTE.primary,
                        fontWeight: 'bold'
                      }}>03</div>
                      <h3 style={{ 
                        color: PALETTE.dark, 
                        fontWeight: 'bold', 
                        marginBottom: '12px', 
                        fontSize: isMobile ? (isLandscape ? '1rem' : '1.1rem') : '1.3rem' 
                      }}>
                        Sentido de Pertenencia
                      </h3>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? (isLandscape ? '0.8rem' : '0.85rem') : '0.95rem', 
                        lineHeight: '1.6' 
                      }}>
                        Incentivar a los estudiantes para que desarrollen estrategias que promuevan el sentido de pertenencia, fortaleciendo los valores institucionales y personales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de Valores - Responsive */}
          <div className="row mb-4 mb-md-5">
            <div className="col-12">
              <div 
                className="p-3 p-md-4 text-center"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <h3 style={{ 
                  color: 'white', 
                  fontFamily: "'Saira Stencil One', cursive",
                  marginBottom: '20px',
                  fontSize: isMobile ? (isLandscape ? '1.2rem' : '1.3rem') : '1.8rem'
                }}>
                  Nuestros Compromisos
                </h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
                  {['Sostenibilidad', 'Inclusión', 'Calidad', 'Participación', 'Valores', 'Pertenencia'].map((valor) => (
                    <span 
                      key={valor}
                      style={{
                        background: 'rgba(0, 187, 126, 0.2)',
                        border: '1px solid rgba(0, 187, 126, 0.5)',
                        padding: isMobile ? (isLandscape ? '4px 10px' : '5px 12px') : '8px 20px',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '500',
                        fontSize: isMobile ? (isLandscape ? '0.7rem' : '0.75rem') : '0.9rem',
                        backdropFilter: 'blur(5px)'
                      }}
                    >
                      {valor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Botón de regreso */}
          <div className="text-center mt-4 mt-md-5">
            <Link 
              href="/" 
              className="btn btn-xl text-uppercase" 
              style={{ 
                background: GRADIENTS.buttonGradient, 
                color: 'white', 
                padding: isMobile ? (isLandscape ? '0.6rem 1.2rem' : '0.8rem 1.5rem') : '1rem 2rem',
                fontSize: isMobile ? (isLandscape ? '0.8rem' : '0.9rem') : '1rem',
                border: 'none', 
                fontWeight: 'bold',
                borderRadius: '50px',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = GRADIENTS.buttonHoverGradient;
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isMobile) {
                  e.currentTarget.style.background = GRADIENTS.buttonGradient;
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }
              }}>
              ← Volver al Inicio
            </Link>
          </div>
        </div>

        {/* Scroll to top button - Mejora UX en móviles */}
        {isMobile && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: GRADIENTS.buttonGradient,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
              zIndex: 1000,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ↑
          </button>
        )}

        <Footer />
      </div>
    </div>
  );
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

// Componente de Navegación - Optimizado para móviles
const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ 
      background: GRADIENTS.navbarGradient,
      padding: isMobile ? '0.8rem 0' : '1rem 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      borderBottom: `2px solid ${PALETTE.primary}`
    }}>
      <div className="container">
        <a className="navbar-brand" href="/" style={{ 
          fontWeight: 'bold', 
          fontSize: isMobile ? '0.9rem' : '1.4rem',
          whiteSpace: isMobile ? 'normal' : 'nowrap',
          lineHeight: isMobile ? '1.2' : '1'
        }}>
          U.E. "Ciudad Cuatricentenaria"
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ border: 'none' }}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-3 py-lg-0" style={{ 
            alignItems: isMobile ? 'stretch' : 'center', 
            gap: isMobile ? '0' : '0.5rem'
          }}>
            <li className="nav-item">
              <a className="nav-link" href="/#inicio" onClick={handleLinkClick} style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: isMobile ? '0.8rem 1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block'
              }}>
                inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#galeria" onClick={handleLinkClick} style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: isMobile ? '0.8rem 1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block'
              }}>
                galería
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#team" onClick={handleLinkClick} style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: isMobile ? '0.8rem 1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block'
              }}>
                team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contacto" onClick={handleLinkClick} style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: isMobile ? '0.8rem 1rem' : '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block'
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
  <footer className="footer py-3 py-md-4" style={{ background: GRADIENTS.footerGradient, borderTop: `1px solid ${PALETTE.primary}` }}>
    <div className="container text-center">
      <span style={{ 
        background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent', 
        fontWeight: 'bold',
        fontSize: 'clamp(0.7rem, 4vw, 1rem)'
      }}>
        Copyright © UPTCMS 2026 | U.E Ciudad Cuatricentenaria
      </span>
    </div>
  </footer>
);

export default ObjetivosInstitucionalesPage;