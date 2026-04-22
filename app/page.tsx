"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// --- CONFIGURCIÓN DE COLORES CON DEGRADADOS ---
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

// --- INTERFACES ---
interface GalleryImage { id: number; src: string; title: string; description: string; }
interface GalleryVideo { src: string; title: string; description: string; }

const App: React.FC = () => {
  const router = useRouter();
  
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/assets/img/instalacion.jpeg", title: "Instalaciones Rehabilitadas", description: "Aulas completamente renovadas" },
    { id: 2, src: "/assets/img/cbit.jpeg", title: "Centro CBIT", description: "Moderno centro de computación" },
    { id: 3, src: "/assets/img/cancha.jpeg", title: "Área Deportiva", description: "Canchas recuperadas" },
    { id: 4, src: "/assets/img/comedor.jpeg", title: "Comedor Escolar", description: "Espacio renovado" },
    { id: 5, src: "/assets/img/auditorio.jpeg", title: "Auditorio", description: "Espacio para eventos culturales" },
    { id: 6, src: "/assets/img/gallery/6.jpg", title: "Áreas Recreativas", description: "Espacios para el esparcimiento" },
  ];

  const galleryVideo: GalleryVideo = {
    src: "/assets/img/video.mp4",
    title: "Recorrido por la Institución",
    description: "Video institucional - Conoce nuestras instalaciones rehabilitadas"
  };

  useEffect(() => {
    // Carga dinámica de Bootstrap con manejo de tipos
    const loadBootstrap = async () => {
      try {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        return bootstrap;
      } catch (error) {
        console.error('Error loading Bootstrap:', error);
      }
    };
    loadBootstrap();
  }, []);

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: GRADIENTS.unifiedBg }}>
      <Navigation />
      <Masthead />
      <InicioSection />
      <GallerySection images={galleryImages} video={galleryVideo} />
      <TeamCarouselSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Navigation: React.FC = () => {
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    
    if (value === 'mision-vision') {
      router.push('/mision_vision');
    } else if (value === 'objetivos') {
      router.push('/objetivos');
    }
    
    // Reset select
    event.target.value = '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ 
      background: GRADIENTS.navbarGradient,
      padding: '1rem 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      borderBottom: `2px solid ${PALETTE.primary}`
    }}>
      <div className="container">
        <a className="navbar-brand" href="#page-top" style={{ fontWeight: 'bold', fontSize: '1.4rem' }}>U.E. "Ciudad Cuatricentenaria"</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="#inicio" style={{ 
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
              <select 
                onChange={handleSelectChange}
                defaultValue=""
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  color: 'white',
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  padding: '0.6rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  outline: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <option value="" disabled style={{ color: '#083344' }}>informacion</option>
                <option value="mision-vision" style={{ color: '#083344' }}>Misión y Visión</option>
                <option value="objetivos" style={{ color: '#083344' }}>Objetivos</option>
              </select>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeria" style={{ 
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
              <a className="nav-link" href="#team" style={{ 
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
              <a className="nav-link" href="#contacto" style={{ 
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

const Masthead: React.FC = () => (
  <header className="masthead" style={{
    height: '70vh',
    minHeight: '450px',
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
      background: 'rgba(0,0,0,0.3)',
      zIndex: 1
    }} />
    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
      <div className="masthead-heading text-uppercase" style={{ 
          fontFamily: "'Saira Stencil One', cursive", 
          fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
          padding: '1rem 2rem',
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.15)', 
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.4)', 
          borderRadius: '20px',
          color: '#FFFFFF', 
          boxShadow: `0 8px 32px ${PALETTE.shadow}`,
          letterSpacing: '1px'
        }}>
        U.E. Ciudad "Cuatricentenaria"
      </div>
    </div>
  </header>
);

const InicioSection: React.FC = () => (
  <section 
    className="page-section" 
    id="inicio" 
    style={{ 
      padding: '100px 0', 
      position: 'relative',
      overflow: 'hidden'
    }}
  >
    <video
      autoPlay
      loop
      muted
      playsInline
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transform: 'translate(-50%, -50%)',
        zIndex: 0
      }}
    >
      <source src="/assets/img/video.mp4" type="video/mp4" />
      Tu navegador no soporta videos HTML5.
    </video>
    
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1
    }} />
    
    <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
      <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Inicio</h2>
      <div className="row mt-5">
        {[
          { label: 'Calendario', icon: 'fa-calendar-alt', link: '/calendario', description: 'Consulta fechas importantes, evaluaciones y eventos académicos del año escolar.' },
          { label: 'Classroom', icon: 'fa-chalkboard-teacher', link: '/inicio', description: 'Accede a tus clases virtuales, tareas y recursos educativos en línea.' },
          { label: 'Horario', icon: 'fa-clock', link: '/horario', description: 'Revisa los horarios de clases por grado y sección.' }
        ].map((btn, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <a href={btn.link} className="text-decoration-none" style={{ display: 'block' }}>
              <div 
                className="p-4" 
                style={{
                  ...LIQUID_GLASS.container,
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  const overlay = e.currentTarget.querySelector('.button-overlay') as HTMLElement;
                  if (overlay) overlay.style.transform = 'translateX(0)';
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  const overlay = e.currentTarget.querySelector('.button-overlay') as HTMLElement;
                  if (overlay) overlay.style.transform = 'translateX(-100%)';
                }}
              >
                <div className="button-overlay" style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(0,187,126,0.2), transparent)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.6s ease',
                  pointerEvents: 'none'
                }} />
                
                <span className="fa-stack fa-4x mb-3" style={{
                  animation: i === 0 ? 'pulse 2s infinite' : 'none',
                  display: 'inline-block'
                }}>
                  <i className="fas fa-circle fa-stack-2x" style={{ color: PALETTE.primary }}></i>
                  <i className={`fas ${btn.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3" style={{ color: PALETTE.dark, fontWeight: 'bold' }}>{btn.label}</h4>
                <p style={{ color: '#1a1a1a', fontSize: '0.9rem', fontWeight: '500' }}>{btn.description}</p>
                
                <div style={{
                  marginTop: '15px',
                  opacity: 0,
                  transform: 'translateX(-10px)',
                  transition: 'all 0.3s ease',
                  color: PALETTE.primary,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }} className="button-arrow">
                  Ver más →
                </div>
                
                <style>
                  {`
                    .button-overlay {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      background: linear-gradient(90deg, transparent, rgba(0,187,126,0.15), transparent);
                      transform: translateX(-100%);
                      transition: transform 0.6s ease;
                      pointer-events: none;
                    }
                    
                    @keyframes pulse {
                      0%, 100% {
                        transform: scale(1);
                      }
                      50% {
                        transform: scale(1.05);
                      }
                    }
                    
                    .gallery-item:hover .button-arrow {
                      opacity: 1;
                      transform: translateX(0);
                    }
                  `}
                </style>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      .col-md-4:hover .button-arrow {
        opacity: 1 !important;
        transform: translateX(0) !important;
      }
    `}</style>
  </section>
);

const GallerySection: React.FC<{ images: GalleryImage[]; video: GalleryVideo }> = ({ images, video }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false);

  return (
    <section className="page-section" id="galeria" style={{ 
      padding: '100px 0', 
      position: 'relative',
      backgroundImage: `url('/assets/img/fondo4.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundColor: '#083344'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase" style={{
            fontFamily: "'Saira Stencil One', cursive",
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00BB7E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Galería</h2>
          <p style={{ color: '#FFFFFF', fontSize: '1.1rem', marginTop: '15px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: '500' }}>
            Conoce nuestras instalaciones rehabilitadas
          </p>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div 
              className="video-featured"
              style={{
                overflow: 'hidden',
                ...LIQUID_GLASS.container,
                cursor: 'pointer',
                background: 'rgba(0, 0, 0, 0.6)'
              }}
              onClick={() => setSelectedVideo(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ position: 'relative' }}>
                <video 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    maxHeight: '400px',
                    objectFit: 'cover'
                  }}
                  muted
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80px',
                  height: '80px',
                  background: 'rgba(0, 187, 126, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(4px)'
                }}>
                  <i className="fas fa-play" style={{ color: 'white', fontSize: '30px', marginLeft: '5px' }}></i>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '30px 20px 20px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: 'white', marginBottom: '5px' }}>{video.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>{video.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {images.map((img, index) => (
            <div key={img.id} className="col-lg-4 col-md-6">
              <div 
                className="gallery-item" 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`
                }} 
                onClick={() => setSelectedImage(img)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '260px',
                  backgroundColor: '#f0f2f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }} 
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#e0e0e0';
                        parent.style.display = 'flex';
                        parent.style.alignItems = 'center';
                        parent.style.justifyContent = 'center';
                        const fallbackText = document.createElement('span');
                        fallbackText.textContent = '📷 Imagen no disponible';
                        fallbackText.style.color = '#666';
                        fallbackText.style.fontSize = '14px';
                        parent.appendChild(fallbackText);
                      }
                      console.error(`Error loading image: ${img.src}`);
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.4)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '0';
                  }}>
                    <i className="fas fa-search-plus" style={{ color: 'white', fontSize: '40px' }}></i>
                  </div>
                </div>
                <div 
                  className="p-4 text-center"
                  style={{
                    background: 'white',
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px'
                  }}
                >
                  <h5 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, marginBottom: '5px' }}>{img.title}</h5>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {selectedVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => setSelectedVideo(false)}>
          <div style={{
            maxWidth: '90%',
            maxHeight: '90%',
            width: '80%',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)'
          }} onClick={(e) => e.stopPropagation()}>
            <video 
              controls
              autoPlay
              style={{ width: '100%', height: 'auto', maxHeight: '70vh' }}
            >
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="p-4 text-center">
              <h3 style={{ color: 'white' }}>{video.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>{video.description}</p>
              <button style={{
                background: GRADIENTS.buttonGradient,
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer'
              }} onClick={() => setSelectedVideo(false)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

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
          }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              style={{ width: '100%', height: 'auto', maxHeight: '70vh', objectFit: 'contain' }} 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const errorMsg = document.createElement('div');
                  errorMsg.textContent = '❌ Imagen no disponible';
                  errorMsg.style.padding = '50px';
                  errorMsg.style.textAlign = 'center';
                  parent.insertBefore(errorMsg, target);
                }
              }}
            />
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

const TeamCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const teamImages = [
    { src: "/assets/img/equipo1.jpg", name: "Equipo Directivo", role: "Directivos y Personal Administrativo" },
    { src: "/assets/img/equipo2.jpg", name: "Personal Docente", role: "Docentes y Personal de Apoyo" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="page-section" id="team" style={{ padding: '100px 0', background: GRADIENTS.unifiedBg }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading text-uppercase" style={LIQUID_GLASS.title}>Nuestro Equipo</h2>
          <p style={{ color: '#1a1a1a', fontSize: '1.1rem', marginTop: '15px' }}>
            Conoce a los profesionales que hacen posible la educación de calidad
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div 
              style={{
                ...LIQUID_GLASS.container,
                padding: '30px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'relative' }}>
                <div style={{
                  textAlign: 'center',
                  transition: 'all 0.5s ease'
                }}>
                  <div style={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <img 
                      src={teamImages[currentIndex].src} 
                      alt={teamImages[currentIndex].name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.style.backgroundColor = '#e0e0e0';
                          parent.style.display = 'flex';
                          parent.style.alignItems = 'center';
                          parent.style.justifyContent = 'center';
                          const fallbackText = document.createElement('span');
                          fallbackText.textContent = '📷 Fotografía del equipo';
                          fallbackText.style.color = '#666';
                          fallbackText.style.fontSize = '18px';
                          parent.appendChild(fallbackText);
                        }
                      }}
                    />
                  </div>
                  
                  <div style={{ marginTop: '25px' }}>
                    <h3 style={{ 
                      color: PALETTE.dark, 
                      fontWeight: 'bold',
                      marginBottom: '10px'
                    }}>
                      {teamImages[currentIndex].name}
                    </h3>
                    <p style={{ 
                      color: PALETTE.primary, 
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}>
                      {teamImages[currentIndex].role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={prevSlide}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  ❮
                </button>
                
                <button
                  onClick={nextSlide}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                  }}
                >
                  ❯
                </button>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px',
                  gap: '10px'
                }}>
                  {teamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        border: 'none',
                        background: currentIndex === index ? PALETTE.primary : '#ccc',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => (
  <section className="page-section" id="contacto" style={{ 
    padding: '100px 0', 
    position: 'relative',
    backgroundImage: `url('/assets/img/fondo3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundColor: '#083344',
    color: 'white'
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1
    }} />
    
    <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
      <h2 className="section-heading text-uppercase" style={{ 
        fontFamily: "'Saira Stencil One', cursive", 
        color: PALETTE.primary,
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>Contáctanos</h2>
      
      <div className="mt-5 mb-4">
        <div style={{
          ...LIQUID_GLASS.container,
          display: 'inline-block',
          padding: '15px 30px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)'
        }}>
          <i className="fas fa-envelope" style={{ marginRight: '10px', color: PALETTE.primary }}></i>
          <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>
            ueciudadcuatricentenaria1@gmail.com
          </span>
        </div>
      </div>
      
      <div className="mt-3">
        <a 
          href="mailto:ueciudadcuatricentenaria1@gmail.com" 
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