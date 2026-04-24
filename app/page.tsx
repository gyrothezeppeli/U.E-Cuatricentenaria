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
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: GRADIENTS.unifiedBg, overflowX: 'hidden' }}>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    
    if (value === 'mision-vision') {
      router.push('/mision_vision');
    } else if (value === 'objetivos') {
      router.push('/objetivos');
    } else if (value === 'historia') {
      router.push('/historia');
    }
    
    event.target.value = '';
    setIsSelectOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ 
      background: GRADIENTS.navbarGradient,
      padding: '0.75rem 0',
      boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      borderBottom: `2px solid ${PALETTE.primary}`
    }}>
      <div className="container" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <a className="navbar-brand" href="#page-top" style={{ 
          fontWeight: 'bold', 
          fontSize: 'clamp(1rem, 4vw, 1.4rem)',
          whiteSpace: 'normal',
          lineHeight: '1.2'
        }}>
          U.E. "Ciudad Cuatricentenaria"
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarResponsive"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ border: 'none' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0" style={{ 
            alignItems: 'center', 
            gap: '0.5rem',
            width: '100%'
          }}>
            <li className="nav-item" style={{ width: '100%' }}>
              <a className="nav-link" href="#inicio" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block',
                textAlign: 'center'
              }}
              onClick={() => setIsMenuOpen(false)}
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
            <li className="nav-item" style={{ width: '100%', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <select 
                  onChange={handleSelectChange}
                  onFocus={() => setIsSelectOpen(true)}
                  onBlur={() => setIsSelectOpen(false)}
                  defaultValue=""
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    border: `1px solid ${isSelectOpen ? PALETTE.primary : 'rgba(255,255,255,0.3)'}`,
                    color: 'white',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    padding: '0.6rem 2rem 0.6rem 1rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    outline: 'none',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    textAlign: 'center',
                    textAlignLast: 'center',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    boxShadow: isSelectOpen ? `0 0 0 3px ${PALETTE.primary}40` : 'none',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <option value="" disabled style={{ color: '#083344', background: '#f0f9ff', fontWeight: 'bold' }}>
                    Información
                  </option>
                  <option value="historia" style={{ color: '#083344', background: '#f0f9ff', padding: '10px' }}>
                    Reseña Histórica
                  </option>
                  <option value="mision-vision" style={{ color: '#083344', background: '#f0f9ff', padding: '10px' }}>
                    Misión y Visión
                  </option>
                  <option value="objetivos" style={{ color: '#083344', background: '#f0f9ff', padding: '10px' }}>
                    Objetivos
                  </option>
                </select>
                <div style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: `translateY(-50%) ${isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                  pointerEvents: 'none',
                  color: PALETTE.primary,
                  fontSize: '12px',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </div>
              </div>
            </li>
            <li className="nav-item" style={{ width: '100%' }}>
              <a className="nav-link" href="#galeria" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block',
                textAlign: 'center'
              }}
              onClick={() => setIsMenuOpen(false)}
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
            <li className="nav-item" style={{ width: '100%' }}>
              <a className="nav-link" href="#team" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block',
                textAlign: 'center'
              }}
              onClick={() => setIsMenuOpen(false)}
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
            <li className="nav-item" style={{ width: '100%' }}>
              <a className="nav-link" href="#contacto" style={{ 
                fontWeight: '600',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                display: 'block',
                textAlign: 'center'
              }}
              onClick={() => setIsMenuOpen(false)}
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
    height: '60vh',
    minHeight: '350px',
    display: 'flex', 
    alignItems: 'center', 
    color: 'white',
    backgroundImage: `url('/assets/img/header-bg.jpg')`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    textAlign: 'center',
    marginTop: '0',
    position: 'relative',
    padding: '0 15px'
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
    <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 15px' }}>
      <div className="masthead-heading text-uppercase" style={{ 
          fontFamily: "'Saira Stencil One', cursive", 
          fontSize: 'clamp(1.5rem, 6vw, 3rem)',
          padding: '0.75rem 1rem',
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.15)', 
          backdropFilter: 'blur(10px)',
          border: '2px solid rgba(255, 255, 255, 0.4)', 
          borderRadius: '20px',
          color: '#FFFFFF', 
          boxShadow: `0 8px 32px ${PALETTE.shadow}`,
          letterSpacing: '1px',
          wordBreak: 'break-word'
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
      padding: '60px 15px', 
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
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1
    }} />
    
    <div className="container text-center" style={{ position: 'relative', zIndex: 2, padding: '0' }}>
      <h2 className="section-heading text-uppercase" style={{
        ...LIQUID_GLASS.title,
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        marginBottom: '1.5rem'
      }}>Inicio</h2>
      <div className="row g-3 mt-3">
        {[
          { label: 'Calendario', icon: 'fa-calendar-alt', link: '/calendario', description: 'Consulta fechas importantes, evaluaciones y eventos académicos del año escolar.' },
          { label: 'Classroom', icon: 'fa-chalkboard-teacher', link: '/inicio', description: 'Accede a tus clases virtuales, tareas y recursos educativos en línea.' },
          { label: 'Horario', icon: 'fa-clock', link: '/horario', description: 'Revisa los horarios de clases por grado y sección.' }
        ].map((btn, i) => (
          <div className="col-12 col-md-4 mb-3" key={i}>
            <a href={btn.link} className="text-decoration-none" style={{ display: 'block' }}>
              <div 
                className="p-3 p-md-4" 
                style={{
                  ...LIQUID_GLASS.container,
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px) saturate(180%)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (window.innerWidth > 768) {
                    Object.assign(e.currentTarget.style, LIQUID_GLASS.containerHover);
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (window.innerWidth > 768) {
                    Object.assign(e.currentTarget.style, LIQUID_GLASS.container);
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }
                }}
              >
                <span className="fa-stack fa-3x fa-4x-md mb-3" style={{
                  display: 'inline-block'
                }}>
                  <i className="fas fa-circle fa-stack-2x" style={{ color: PALETTE.primary }}></i>
                  <i className={`fas ${btn.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3" style={{ color: PALETTE.dark, fontWeight: 'bold', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>{btn.label}</h4>
                <p style={{ color: '#1a1a1a', fontSize: 'clamp(0.8rem, 3vw, 0.9rem)', fontWeight: '500' }}>{btn.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection: React.FC<{ images: GalleryImage[]; video: GalleryVideo }> = ({ images, video }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false);

  return (
    <section className="page-section" id="galeria" style={{ 
      padding: '60px 15px', 
      position: 'relative',
      backgroundImage: `url('/assets/img/fondo4.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#083344'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0' }}>
        <div className="text-center mb-4">
          <h2 className="section-heading text-uppercase" style={{
            fontFamily: "'Saira Stencil One', cursive",
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #00BB7E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Galería</h2>
          <p style={{ color: '#FFFFFF', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', marginTop: '10px', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', fontWeight: '500', padding: '0 15px' }}>
            Conoce nuestras instalaciones rehabilitadas
          </p>
        </div>

        <div className="row mb-4">
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
            >
              <div style={{ position: 'relative' }}>
                <video 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block',
                    maxHeight: '300px',
                    objectFit: 'cover'
                  }}
                  muted
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  background: 'rgba(0, 187, 126, 0.9)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(4px)'
                }}>
                  <i className="fas fa-play" style={{ color: 'white', fontSize: '24px', marginLeft: '4px' }}></i>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                  padding: '20px 15px 15px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: 'white', marginBottom: '5px', fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}>{video.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 0, fontSize: 'clamp(0.8rem, 3vw, 0.9rem)' }}>{video.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row g-3">
          {images.map((img, index) => (
            <div key={img.id} className="col-12 col-sm-6 col-lg-4">
              <div 
                className="gallery-item" 
                style={{ 
                  cursor: 'pointer', 
                  borderRadius: '15px', 
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  background: 'white',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }} 
                onClick={() => setSelectedImage(img)}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
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
                        fallbackText.textContent = 'Imagen no disponible';
                        fallbackText.style.color = '#666';
                        fallbackText.style.fontSize = '14px';
                        parent.appendChild(fallbackText);
                      }
                    }}
                  />
                </div>
                <div 
                  className="p-3 text-center"
                  style={{
                    background: 'white',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px'
                  }}
                >
                  <h5 style={{ color: PALETTE.dark, fontWeight: 'bold', margin: 0, marginBottom: '5px', fontSize: 'clamp(0.9rem, 3.5vw, 1rem)' }}>{img.title}</h5>
                  <p style={{ margin: 0, fontSize: 'clamp(0.75rem, 3vw, 0.85rem)', color: '#666' }}>{img.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
          cursor: 'pointer',
          padding: '15px'
        }} onClick={() => setSelectedVideo(false)}>
          <div style={{
            maxWidth: '95%',
            maxHeight: '90%',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)'
          }} onClick={(e) => e.stopPropagation()}>
            <video 
              controls
              autoPlay
              playsInline
              style={{ width: '100%', height: 'auto', maxHeight: '50vh' }}
            >
              <source src={video.src} type="video/mp4" />
              Tu navegador no soporta videos HTML5.
            </video>
            <div className="p-3 text-center">
              <h3 style={{ color: 'white', fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}>{video.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.8rem, 3vw, 0.9rem)' }}>{video.description}</p>
              <button style={{
                background: GRADIENTS.buttonGradient,
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px'
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
          background: 'rgba(0,0,0,0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: '15px'
        }} onClick={() => setSelectedImage(null)}>
          <div style={{
            maxWidth: '95%',
            maxHeight: '90%',
            background: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '15px',
            overflow: 'hidden',
            backdropFilter: 'blur(12px)'
          }} onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title} 
              style={{ width: '100%', height: 'auto', maxHeight: '50vh', objectFit: 'contain' }} 
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const errorMsg = document.createElement('div');
                  errorMsg.textContent = 'Imagen no disponible';
                  errorMsg.style.padding = '30px';
                  errorMsg.style.textAlign = 'center';
                  parent.insertBefore(errorMsg, target);
                }
              }}
            />
            <div className="p-3 text-center">
              <h3 style={{ color: PALETTE.dark, fontSize: 'clamp(1rem, 4vw, 1.25rem)' }}>{selectedImage.title}</h3>
              <p style={{ fontSize: 'clamp(0.8rem, 3vw, 0.9rem)' }}>{selectedImage.description}</p>
              <button style={{
                background: GRADIENTS.buttonGradient,
                border: 'none',
                padding: '8px 16px',
                borderRadius: '5px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px'
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
    { src: "/assets/img/equipo1.jpg", name: "Nuestro equipo", role: "" },
    { src: "/assets/img/equipo2.jpg", name: "Nuestro equipo", role: "" }
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
    <section className="page-section" id="team" style={{ padding: '60px 15px', background: GRADIENTS.unifiedBg }}>
      <div className="container" style={{ padding: '0' }}>
        <div className="text-center mb-4">
          <h2 className="section-heading text-uppercase" style={{
            ...LIQUID_GLASS.title,
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)'
          }}>Nuestro Equipo</h2>
          <p style={{ color: '#1a1a1a', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', marginTop: '10px', padding: '0 15px' }}>
            Conoce a los profesionales que hacen posible la educación de calidad
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div 
              style={{
                ...LIQUID_GLASS.container,
                padding: '20px 15px',
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
                    height: '300px',
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
                          fallbackText.textContent = 'Fotografía del equipo';
                          fallbackText.style.color = '#666';
                          fallbackText.style.fontSize = '16px';
                          parent.appendChild(fallbackText);
                        }
                      }}
                    />
                  </div>
                  
                  <div style={{ marginTop: '20px' }}>
                    <h3 style={{ 
                      color: PALETTE.dark, 
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)'
                    }}>
                      {teamImages[currentIndex].name}
                    </h3>
                    <p style={{ 
                      color: PALETTE.primary, 
                      fontWeight: '600',
                      fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                    }}>
                      {teamImages[currentIndex].role}
                    </p>
                  </div>
                </div>

                <button
                  onClick={prevSlide}
                  style={{
                    position: 'absolute',
                    left: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  ❮
                </button>
                
                <button
                  onClick={nextSlide}
                  style={{
                    position: 'absolute',
                    right: '5px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    zIndex: 10
                  }}
                >
                  ❯
                </button>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '15px',
                  gap: '8px'
                }}>
                  {teamImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: 'none',
                        background: currentIndex === index ? PALETTE.primary : '#ccc',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0
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
    padding: '60px 15px', 
    position: 'relative',
    backgroundImage: `url('/assets/img/fondo3.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#083344',
    color: 'white'
  }}>
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      zIndex: 1
    }} />
    
    <div className="container text-center" style={{ position: 'relative', zIndex: 2, padding: '0' }}>
      <h2 className="section-heading text-uppercase" style={{ 
        fontFamily: "'Saira Stencil One', cursive", 
        color: PALETTE.primary,
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
        marginBottom: '1rem'
      }}>Contáctanos</h2>
      
      <div className="mt-4 mb-4">
        <div style={{
          ...LIQUID_GLASS.container,
          display: 'inline-block',
          padding: '12px 20px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(10px)',
          width: '100%',
          maxWidth: '90%',
          wordBreak: 'break-word'
        }}>
          <i className="fas fa-envelope" style={{ marginRight: '8px', color: PALETTE.primary }}></i>
          <span style={{ fontSize: 'clamp(0.8rem, 3.5vw, 1rem)', fontWeight: '500' }}>
            ueciudadcuatricentenaria1@gmail.com
          </span>
        </div>
      </div>
      
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
        <a 
          href="mailto:ueciudadcuatricentenaria1@gmail.com" 
          className="btn btn-xl text-uppercase" 
          style={{ 
            background: GRADIENTS.buttonGradient, 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            border: 'none', 
            fontWeight: 'bold',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)'
          }}>
          Enviar Mensaje
        </a>
        
        <a 
          href="https://maps.app.goo.gl/1FCg2i3KPujfGUuY8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-xl text-uppercase" 
          style={{ 
            background: GRADIENTS.buttonGradient, 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            border: 'none', 
            fontWeight: 'bold',
            borderRadius: '10px',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: 'clamp(0.8rem, 3vw, 1rem)'
          }}>
          Ubícanos
        </a>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="footer py-3" style={{ background: GRADIENTS.footerGradient, borderTop: `1px solid ${PALETTE.primary}` }}>
    <div className="container text-center" style={{ padding: '0 15px' }}>
      <span style={{ 
        background: 'linear-gradient(135deg, #083344 0%, #00BB7E 100%)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent', 
        fontWeight: 'bold',
        fontSize: 'clamp(0.7rem, 3vw, 0.9rem)',
        display: 'block'
      }}>
        Copyright 2026 | U.E Ciudad Cuatricentenaria
      </span>
    </div>
  </footer>
);

export default App;