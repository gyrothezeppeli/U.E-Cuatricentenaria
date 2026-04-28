// app/historia/page.tsx
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

const ResenaHistoricaPage: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

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
        
        {/* Hero Section - Responsive */}
        <header className="masthead" style={{
          height: isMobile ? '25vh' : '35vh',
          minHeight: isMobile ? '200px' : '250px',
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
              fontSize: isMobile ? 'clamp(1.5rem, 5vw, 2rem)' : 'clamp(2rem, 6vw, 3.5rem)',
              padding: isMobile ? '0.8rem 1rem' : '1rem 2rem',
              display: 'inline-block',
              background: 'rgba(0, 187, 126, 0.2)', 
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(0, 187, 126, 0.5)', 
              borderRadius: '20px',
              color: '#FFFFFF', 
              boxShadow: `0 8px 32px ${PALETTE.shadow}`,
              letterSpacing: '1px'
            }}>
              Reseña Histórica
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="container py-4 py-md-5" style={{ paddingLeft: isMobile ? '15px' : 'auto', paddingRight: isMobile ? '15px' : 'auto' }}>
          
          {/* Tarjeta principal de historia */}
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
                    fontSize: isMobile ? '2.5rem' : '4rem',
                    marginBottom: isMobile ? '15px' : '20px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    padding: isMobile ? '12px' : '15px',
                    borderRadius: '50%',
                    width: isMobile ? '70px' : '90px',
                    height: isMobile ? '70px' : '90px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                  }}>📖</div>
                  <h2 style={{ 
                    fontFamily: "'Saira Stencil One', cursive", 
                    color: 'white',
                    fontSize: isMobile ? '1.8rem' : '2.5rem',
                    marginBottom: isMobile ? '15px' : '20px',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    letterSpacing: '1px'
                  }}>30 Años de Historia</h2>
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
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  lineHeight: isMobile ? '1.7' : '1.9',
                  textAlign: 'justify',
                  maxWidth: '900px',
                  margin: '0 auto'
                }}>
                  <p style={{ marginBottom: '1rem' }}>
                    La Unidad Educativa <strong>"Ciudad Cuatricentenaria"</strong> abrió sus puertas en <strong>1996</strong> en el corazón de Caricuao, Caracas, fruto del esfuerzo conjunto entre la comunidad organizada, el gobierno local y un grupo de educadores visionarios que creían en el poder transformador de la enseñanza.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    Nuestros inicios fueron modestos: tres aulas prefabricadas, una cancha deportiva en tierra y una matrícula inicial de 120 estudiantes. A pesar de las limitaciones, el compromiso de docentes, padres y vecinos permitió que, año tras año, fuéramos creciendo y consolidándonos como un referente educativo en el oeste de la capital.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    En 2004, logramos la construcción del primer pabellón de aulas gracias a una alianza estratégica con la Alcaldía Mayor. Luego vinieron el laboratorio de ciencias (2008), la biblioteca escolar (2012) y el tan anhelado comedor estudiantil (2015), que hoy alimenta a más de 300 jóvenes diariamente.
                  </p>
                  <p style={{ marginBottom: '1rem' }}>
                    El año 2020 representó un desafío sin precedentes. La pandemia nos obligó a reinventarnos y acelerar nuestra transformación digital. Con el apoyo de la comunidad y donaciones de equipos, implementamos un programa de educación a distancia que permitió que ningún estudiante quedara rezagado.
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    Hoy, al celebrar nuestro <strong>30° aniversario</strong>, miramos con orgullo el camino recorrido. Seguimos firmes en nuestra misión de ofrecer educación integral, con infraestructura rehabilitada y un equipo humano comprometido con la excelencia. La U.E. "Ciudad Cuatricentenaria" no es solo una escuela: es el resultado del sueño colectivo de una comunidad que cree en la educación como el motor del cambio social.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hitos importantes - Línea de tiempo visual */}
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
                    background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: isMobile ? '1.8rem' : '2.5rem',
                    marginBottom: '15px'
                  }}>Hitos de Nuestra Historia</h2>
                  <div style={{ width: '60px', height: '3px', background: PALETTE.primary, margin: '15px auto', borderRadius: '3px' }}></div>
                  <div style={{ 
                    display: 'inline-block',
                    marginTop: '15px',
                    background: 'rgba(0, 187, 126, 0.15)', 
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 187, 126, 0.4)', 
                    borderRadius: '50px',
                    padding: isMobile ? '8px 20px' : '12px 30px',
                  }}>
                    <p style={{ 
                      color: PALETTE.dark, 
                      fontSize: isMobile ? '0.85rem' : '1rem',
                      fontWeight: '600',
                      margin: 0,
                      letterSpacing: '0.5px'
                    }}>
                      Momentos que marcaron nuestro camino
                    </p>
                  </div>
                </div>

                <div className="row g-3 g-md-4">
                  {/* Hito 1996 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>1996</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Fundación
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Iniciamos con 120 estudiantes en tres aulas prefabricadas, sentando las bases de nuestra identidad educativa.
                      </p>
                    </div>
                  </div>

                  {/* Hito 2004 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>2004</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Primer Pabellón
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Construcción del primer pabellón de aulas gracias a alianza con la Alcaldía Mayor.
                      </p>
                    </div>
                  </div>

                  {/* Hito 2008 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>2008</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Laboratorio de Ciencias
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Inauguración del laboratorio, impulsando la formación científica de nuestros estudiantes.
                      </p>
                    </div>
                  </div>

                  {/* Hito 2012 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>2012</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Biblioteca Escolar
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Apertura de la biblioteca, fomentando el hábito de la lectura y la investigación.
                      </p>
                    </div>
                  </div>

                  {/* Hito 2015 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>2015</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Comedor Estudiantil
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Inauguración del comedor, garantizando alimentación diaria a más de 300 estudiantes.
                      </p>
                    </div>
                  </div>

                  {/* Hito 2020 */}
                  <div className="col-md-6 col-lg-4">
                    <div 
                      className="p-3 p-md-4 rounded-3 h-100"
                      style={{ 
                        transition: 'all 0.4s ease',
                        background: 'rgba(255, 255, 255, 0.8)',
                        borderLeft: `4px solid ${PALETTE.primary}`,
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 1)';
                          e.currentTarget.style.transform = 'translateX(5px)';
                          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isMobile) {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                          e.currentTarget.style.transform = 'translateX(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: isMobile ? '10px' : '15px', 
                        marginBottom: isMobile ? '12px' : '15px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ 
                          fontSize: isMobile ? '1.5rem' : '2rem', 
                          color: PALETTE.primary,
                          fontWeight: 'bold'
                        }}>2020</div>
                        <h3 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, fontSize: isMobile ? '1rem' : '1.2rem' }}>
                          Transformación Digital
                        </h3>
                      </div>
                      <p style={{ 
                        color: '#1a1a1a', 
                        fontSize: isMobile ? '0.85rem' : '0.95rem', 
                        lineHeight: '1.6', 
                        marginLeft: isMobile ? '0' : '45px'
                      }}>
                        Implementación de educación a distancia, asegurando continuidad académica durante la pandemia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de regreso - Responsive */}
          <div className="text-center mt-4 mt-md-5">
            <Link 
              href="/" 
              className="btn btn-xl text-uppercase" 
              style={{ 
                background: GRADIENTS.buttonGradient, 
                color: 'white', 
                padding: isMobile ? '0.8rem 1.5rem' : '1rem 2rem',
                fontSize: isMobile ? '0.9rem' : '1rem',
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

        <Footer />
      </div>
    </div>
  );
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

// Componente Footer - Responsive
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

export default ResenaHistoricaPage;