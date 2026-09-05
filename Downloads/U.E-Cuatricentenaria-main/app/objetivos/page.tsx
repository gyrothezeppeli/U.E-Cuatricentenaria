// app/objetivos/page.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// --- CONFIGURACIÓN DE COLORES Y PALETA (MISMA QUE LA PÁGINA PRINCIPAL) ---
const COLORS = {
  bgDark: '#13231c',
  surface: '#1a2e26',
  primary: '#00BB7E',
  primaryDark: '#064E3B',
  textLight: '#f3f4f6',
  textMuted: 'rgba(243, 244, 246, 0.6)',
  lightShadow: '#223c32',
  darkShadow: '#12201a',
};

// --- DEFINICIÓN DE SOMBRAS Y ESTILOS NEUMÓRFICOS (MISMA QUE LA PÁGINA PRINCIPAL) ---
const NEUMORPH = {
  card: {
    background: COLORS.surface,
    borderRadius: '20px',
    boxShadow: `8px 8px 16px ${COLORS.darkShadow}, -8px -8px 16px ${COLORS.lightShadow}`,
    border: '1px solid rgba(255, 255, 255, 0.03)',
    transition: 'all 0.3s ease',
  },
  cardHover: {
    boxShadow: `12px 12px 24px ${COLORS.darkShadow}, -12px -12px 24px ${COLORS.lightShadow}`,
    transform: 'translateY(-4px)',
  },
  button: {
    background: COLORS.surface,
    borderRadius: '14px',
    boxShadow: `5px 5px 12px ${COLORS.darkShadow}, -5px -5px 12px ${COLORS.lightShadow}`,
    border: 'none',
    color: COLORS.textLight,
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buttonActive: {
    boxShadow: `inset 4px 4px 8px ${COLORS.darkShadow}, inset -4px -4px 8px ${COLORS.lightShadow}`,
    transform: 'scale(0.98)',
  },
  buttonPrimary: {
    background: `linear-gradient(145deg, #00cb89, #00a26d)`,
    borderRadius: '14px',
    boxShadow: `6px 6px 14px ${COLORS.darkShadow}, -6px -6px 14px ${COLORS.lightShadow}`,
    border: 'none',
    color: '#ffffff',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  inset: {
    background: COLORS.surface,
    borderRadius: '14px',
    boxShadow: `inset 5px 5px 10px ${COLORS.darkShadow}, inset -5px -5px 10px ${COLORS.lightShadow}`,
    border: '1px solid rgba(255, 255, 255, 0.02)',
    color: COLORS.textLight,
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  iconCircle: {
    background: COLORS.surface,
    borderRadius: '50%',
    boxShadow: `6px 6px 12px ${COLORS.darkShadow}, -6px -6px 12px ${COLORS.lightShadow}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

// --- COMPONENTE PRINCIPAL ---
export default function ObjetivosPage() {
  return (
    <div style={{
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: COLORS.bgDark,
      minHeight: '100vh',
      overflowX: 'hidden',
      color: COLORS.textLight
    }}>
      <Navigation />
      <Masthead />
      
      <div className="container py-5" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        {/* Objetivo General */}
        <div className="row mb-5">
          <div className="col-12">
            <div 
              style={NEUMORPH.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, NEUMORPH.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, NEUMORPH.card)}
            >
              <div className="p-4 p-md-5 text-center">
                <div style={{
                  ...NEUMORPH.iconCircle,
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem',
                  color: COLORS.primary,
                }}>
                  <span>★</span>
                </div>
                <h2 style={{
                  fontFamily: "'Saira Stencil One', cursive",
                  color: COLORS.primary,
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  marginBottom: '1rem',
                }}>
                  Objetivo General
                </h2>
                <div style={{
                  width: '60px',
                  height: '3px',
                  background: COLORS.primary,
                  margin: '0 auto 1.5rem',
                  borderRadius: '3px',
                }} />
                <p style={{
                  color: COLORS.textLight,
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                  lineHeight: '1.8',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}>
                  Desarrollar procesos educativos sostenibles, inclusivos y de calidad en dónde se logre la{' '}
                  <strong style={{ color: COLORS.primary }}>participación activa de la población estudiantil, social y docente</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objetivos Específicos */}
        <div className="row mb-5">
          <div className="col-12">
            <div 
              style={NEUMORPH.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, NEUMORPH.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, NEUMORPH.card)}
            >
              <div className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 style={{
                    fontFamily: "'Saira Stencil One', cursive",
                    color: COLORS.primary,
                    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  }}>
                    Objetivos Específicos
                  </h2>
                  <div style={{
                    width: '60px',
                    height: '3px',
                    background: COLORS.primary,
                    margin: '1rem auto',
                    borderRadius: '3px',
                  }} />
                  <p style={{ color: COLORS.textMuted, fontSize: '0.9rem' }}>
                    Metas que guían nuestra labor diaria
                  </p>
                </div>

                <div className="row g-4">
                  {/* Objetivo 1 */}
                  <div className="col-md-4">
                    <div 
                      style={{
                        ...NEUMORPH.inset,
                        padding: '1.5rem',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = COLORS.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: COLORS.primary,
                        marginBottom: '0.75rem',
                      }}>
                        01
                      </div>
                      <h3 style={{
                        color: COLORS.textLight,
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '0.75rem',
                      }}>
                        Excelencia Educativa
                      </h3>
                      <p style={{
                        color: COLORS.textMuted,
                        fontSize: '0.85rem',
                        lineHeight: '1.6',
                        marginBottom: 0,
                      }}>
                        Proporcionar procesos educativos sostenibles, inclusivos y de calidad en donde se logre la participación activa de toda la comunidad educativa.
                      </p>
                    </div>
                  </div>

                  {/* Objetivo 2 */}
                  <div className="col-md-4">
                    <div 
                      style={{
                        ...NEUMORPH.inset,
                        padding: '1.5rem',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = COLORS.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: COLORS.primary,
                        marginBottom: '0.75rem',
                      }}>
                        02
                      </div>
                      <h3 style={{
                        color: COLORS.textLight,
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '0.75rem',
                      }}>
                        Participación Activa
                      </h3>
                      <p style={{
                        color: COLORS.textMuted,
                        fontSize: '0.85rem',
                        lineHeight: '1.6',
                        marginBottom: 0,
                      }}>
                        Fomentar la participación activa del estudiante en todas las actividades pedagógicas, promoviendo un aprendizaje dinámico y colaborativo.
                      </p>
                    </div>
                  </div>

                  {/* Objetivo 3 */}
                  <div className="col-md-4">
                    <div 
                      style={{
                        ...NEUMORPH.inset,
                        padding: '1.5rem',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = COLORS.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: COLORS.primary,
                        marginBottom: '0.75rem',
                      }}>
                        03
                      </div>
                      <h3 style={{
                        color: COLORS.textLight,
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        marginBottom: '0.75rem',
                      }}>
                        Sentido de Pertenencia
                      </h3>
                      <p style={{
                        color: COLORS.textMuted,
                        fontSize: '0.85rem',
                        lineHeight: '1.6',
                        marginBottom: 0,
                      }}>
                        Incentivar a los estudiantes para que desarrollen estrategias que promuevan el sentido de pertenencia, fortaleciendo los valores institucionales y personales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores / Compromisos */}
        <div className="row mb-5">
          <div className="col-12">
            <div 
              style={NEUMORPH.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, NEUMORPH.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, NEUMORPH.card)}
            >
              <div className="p-4 p-md-5 text-center">
                <h3 style={{
                  fontFamily: "'Saira Stencil One', cursive",
                  color: COLORS.primary,
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  marginBottom: '1.5rem',
                }}>
                  Nuestros Compromisos
                </h3>
                <div className="d-flex flex-wrap justify-content-center gap-2 gap-md-3">
                  {['Sostenibilidad', 'Inclusión', 'Calidad', 'Participación', 'Valores', 'Pertenencia'].map((valor) => (
                    <span
                      key={valor}
                      style={{
                        ...NEUMORPH.inset,
                        padding: '0.5rem 1.25rem',
                        fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                        fontWeight: '600',
                        color: COLORS.textLight,
                        cursor: 'default',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = COLORS.primary;
                        e.currentTarget.style.borderColor = COLORS.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = COLORS.textLight;
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      {valor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de regreso */}
        <div className="text-center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <button
              style={{
                ...NEUMORPH.buttonPrimary,
                padding: '0.8rem 2.5rem',
                fontSize: 'clamp(0.85rem, 1vw, 1rem)',
                letterSpacing: '1px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ← Volver al Inicio
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// --- NAVIGATION (IGUAL QUE LA PÁGINA PRINCIPAL) ---
const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{
      backgroundColor: COLORS.surface,
      padding: '0.8rem 0',
      boxShadow: `0 10px 20px ${COLORS.darkShadow}`,
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div className="container" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <a className="navbar-brand" href="/" style={{
          fontWeight: '800',
          fontSize: 'clamp(1rem, 4vw, 1.3rem)',
          color: COLORS.primary,
          letterSpacing: '0.5px',
        }}>
          U.E. "Ciudad Cuatricentenaria"
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            ...NEUMORPH.button,
            padding: '8px 14px',
            ...(isMenuOpen ? NEUMORPH.buttonActive : {}),
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-3 py-lg-0" style={{
            alignItems: 'center',
            gap: '0.8rem',
          }}>
            {['inicio', 'galería', 'team', 'contacto'].map((item) => (
              <li className="nav-item" key={item} style={{ width: '100%' }}>
                <a
                  className="nav-link"
                  href={`/#${item === 'galería' ? 'galeria' : item}`}
                  style={{
                    ...NEUMORPH.button,
                    padding: '0.6rem 1.2rem',
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    letterSpacing: '1px',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// --- MASTHEAD (IGUAL QUE LA PÁGINA PRINCIPAL) ---
const Masthead: React.FC = () => (
  <header className="masthead" style={{
    height: '35vh',
    minHeight: '280px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'relative',
    marginTop: '60px',
    padding: '0 15px',
    backgroundImage: 'url("/assets/img/instalacion.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
    {/* Overlay oscuro */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(19, 35, 28, 0.7)',
      zIndex: 1,
    }} />

    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div style={{
        padding: '2.5rem 2rem',
        display: 'inline-block',
        maxWidth: '750px',
        width: '100%',
        backgroundColor: 'rgba(26, 46, 38, 0.85)',
        borderRadius: '20px',
        backdropFilter: 'blur(5px)',
        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)`,
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <h1 style={{
          fontFamily: "'Saira Stencil One', cursive",
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          color: COLORS.textLight,
          letterSpacing: '1px',
          marginBottom: '0.5rem',
        }}>
          Objetivos Institucionales
        </h1>
        <div style={{
          color: COLORS.primary,
          fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
          fontWeight: '600',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>
          Metas que guían nuestra labor
        </div>
      </div>
    </div>
  </header>
);

// --- FOOTER (IGUAL QUE LA PÁGINA PRINCIPAL) ---
const Footer: React.FC = () => (
  <footer className="footer py-4" style={{
    backgroundColor: COLORS.surface,
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    boxShadow: `0 -10px 20px ${COLORS.darkShadow}`,
    marginTop: '2rem',
  }}>
    <div className="container text-center">
      <span style={{
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: '0.85rem',
        display: 'block',
        letterSpacing: '1px',
      }}>
        Copyright 2026 | U.E Ciudad Cuatricentenaria
      </span>
      <span style={{
        color: COLORS.textMuted,
        fontSize: '0.75rem',
        display: 'block',
        marginTop: '4px',
      }}>
        Sistema de Gestión Educativa
      </span>
    </div>
  </footer>
);