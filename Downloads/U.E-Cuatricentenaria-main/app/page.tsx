"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// --- CONFIGURACIÓN DE COLORES Y PALETA ---
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

// --- DEFINICIÓN DE SOMBRAS Y ESTILOS NEUMÓRFICOS ---
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

// --- INTERFACES ---
interface GalleryImage { id: number; src: string; title: string; description: string; }
interface GalleryVideo { src: string; title: string; description: string; }

// --- COMPONENTE PRINCIPAL DE LA PÁGINA ---
export default function Home() {
  const galleryImages: GalleryImage[] = [
    { id: 1, src: "/assets/img/instalacion.jpeg", title: "Instalaciones Rehabilitadas", description: "Aulas completamente renovadas" },
    { id: 2, src: "/assets/img/pc2.jpeg", title: "Centro CBIT", description: "Moderno centro de computación" },
    { id: 3, src: "/assets/img/cancha.jpeg", title: "Área Deportiva", description: "Canchas recuperadas" },
    { id: 4, src: "/assets/img/comedor.jpeg", title: "Comedor Escolar", description: "Espacio renovado" },
    { id: 5, src: "/assets/img/auditorio.jpeg", title: "Auditorio", description: "Espacio para eventos culturales" },
  ];

  const galleryVideo: GalleryVideo = {
    src: "/assets/img/video.mp4",
    title: "Recorrido por la Institución",
    description: "Video institucional - Conoce nuestras instalaciones rehabilitadas"
  };

  useEffect(() => {
    const loadBootstrap = async () => {
      try {
        await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      } catch (error) {
        console.error('Error loading Bootstrap:', error);
      }
    };
    loadBootstrap();
  }, []);

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
      <InicioSection />
      <GallerySection images={galleryImages} video={galleryVideo} />
      <TeamCarouselSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

// --- NAVIGATION ---
const Navigation: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'mision-vision') router.push('/mision_vision');
    else if (value === 'objetivos') router.push('/objetivos');
    else if (value === 'historia') router.push('/historia');
    
    event.target.value = '';
    setIsSelectOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top" id="mainNav" style={{ 
      backgroundColor: COLORS.surface,
      padding: '0.8rem 0',
      boxShadow: `0 10px 20px ${COLORS.darkShadow}`,
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
        <a className="navbar-brand" href="#page-top" style={{ 
          fontWeight: '800', 
          fontSize: 'clamp(1rem, 4vw, 1.3rem)',
          color: COLORS.primary,
          letterSpacing: '0.5px'
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
            ...(isMenuOpen ? NEUMORPH.buttonActive : {})
          }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
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
                  href={`#${item === 'galería' ? 'galeria' : item}`} 
                  style={{ 
                    ...NEUMORPH.button,
                    padding: '0.6rem 1.2rem',
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '0.85rem',
                    letterSpacing: '1px'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item" style={{ width: '100%', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <select 
                  onChange={handleSelectChange}
                  onFocus={() => setIsSelectOpen(true)}
                  onBlur={() => setIsSelectOpen(false)}
                  defaultValue=""
                  style={{
                    ...NEUMORPH.inset,
                    color: COLORS.textLight,
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    padding: '0.6rem 2.2rem 0.6rem 1rem',
                    width: '100%',
                    textAlign: 'center',
                    cursor: 'pointer',
                    fontWeight: '600',
                    appearance: 'none',
                    WebkitAppearance: 'none'
                  }}
                >
                  <option value="" disabled style={{ color: COLORS.textMuted, background: COLORS.surface }}>
                    INFORMACIÓN
                  </option>
                  <option value="historia" style={{ color: COLORS.textLight, background: COLORS.surface }}>
                    Reseña Histórica
                  </option>
                  <option value="mision-vision" style={{ color: COLORS.textLight, background: COLORS.surface }}>
                    Misión y Visión
                  </option>
                  <option value="objetivos" style={{ color: COLORS.textLight, background: COLORS.surface }}>
                    Objetivos
                  </option>
                </select>
                <div style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: `translateY(-50%) ${isSelectOpen ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                  pointerEvents: 'none',
                  color: COLORS.primary,
                  fontSize: '10px',
                  transition: 'transform 0.3s ease'
                }}>
                  ▼
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// --- MASTHEAD CON IMAGEN DE FONDO ---
const Masthead: React.FC = () => (
  <header 
    className="masthead" 
    style={{
      height: '55vh',
      minHeight: '380px',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      marginTop: '60px',
      padding: '0 15px',
      // Imagen de fondo
      backgroundImage: 'url("/assets/img/instalacion.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    {/* Overlay oscuro para mejorar legibilidad */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(19, 35, 28, 0.7)',
      zIndex: 1,
    }} />
    
    <div className="container" style={{ 
      position: 'relative',
      zIndex: 2,
    }}>
      <div style={{
        padding: '3rem 2rem',
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
          fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
          color: COLORS.textLight,
          letterSpacing: '1px',
          marginBottom: '0.5rem',
        }}>
          U.E. "Ciudad Cuatricentenaria"
        </h1>
        <div style={{
          color: COLORS.primary,
          fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
          fontWeight: '600',
          letterSpacing: '3px',
          textTransform: 'uppercase'
        }}>
          Educación de Excelencia
        </div>
      </div>
    </div>
  </header>
);

// --- INICIO SECTION ---
const InicioSection: React.FC = () => (
  <section className="page-section" id="inicio" style={{ padding: '60px 15px' }}>
    <div className="container text-center">
      <h2 style={{
        fontFamily: "'Saira Stencil One', cursive",
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
        marginBottom: '2.5rem',
        color: COLORS.primary,
      }}>Inicio</h2>
      <div className="row g-4">
        {[
          { label: 'Calendario', icon: 'fa-calendar-alt', link: '/calendario', description: 'Consulta fechas importantes, evaluaciones y eventos académicos del año escolar.' },
          { label: 'Classroom', icon: 'fa-chalkboard-teacher', link: '/inicio', description: 'Accede a tus clases virtuales, tareas y recursos educativos en línea.' },
          { label: 'Horario', icon: 'fa-clock', link: '/horario', description: 'Revisa los horarios de clases por grado y sección.' }
        ].map((btn, i) => (
          <div className="col-12 col-md-4" key={i}>
            <a href={btn.link} className="text-decoration-none">
              <div 
                style={{
                  ...NEUMORPH.card,
                  padding: '2.5rem 1.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, NEUMORPH.cardHover)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, NEUMORPH.card)}
              >
                <div style={{
                  ...NEUMORPH.iconCircle,
                  width: '80px',
                  height: '80px',
                  marginBottom: '1.5rem',
                  color: COLORS.primary
                }}>
                  <i className={`fas ${btn.icon} fa-2x`}></i>
                </div>
                <h3 style={{ color: COLORS.textLight, fontWeight: '700', fontSize: '1.3rem', marginBottom: '0.8rem' }}>{btn.label}</h3>
                <p style={{ color: COLORS.textMuted, fontSize: '0.88rem', lineHeight: '1.5', margin: 0 }}>{btn.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- GALLERY SECTION ---
const GallerySection: React.FC<{ images: GalleryImage[]; video: GalleryVideo }> = ({ images, video }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="page-section" id="galeria" style={{ padding: '60px 15px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: "'Saira Stencil One', cursive",
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: COLORS.primary,
          }}>Galería</h2>
          <p style={{ color: COLORS.textMuted, fontSize: '0.95rem' }}>
            Conoce nuestras instalaciones rehabilitadas
          </p>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div 
              style={{
                ...NEUMORPH.card,
                padding: '15px',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedVideo(true)}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, NEUMORPH.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, NEUMORPH.card)}
            >
              <div style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden' }}>
                <video style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} muted playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  ...NEUMORPH.iconCircle,
                  width: '65px',
                  height: '65px',
                  backgroundColor: COLORS.primary,
                  color: '#fff',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
                }}>
                  <i className="fas fa-play" style={{ fontSize: '22px', marginLeft: '3px' }}></i>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(13, 31, 24, 0.95) 80%)',
                  padding: '20px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ color: COLORS.textLight, marginBottom: '4px', fontSize: '1.1rem' }}>{video.title}</h4>
                  <p style={{ color: COLORS.textMuted, marginBottom: 0, fontSize: '0.85rem' }}>{video.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div style={{ 
              ...NEUMORPH.card, 
              padding: '25px', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'relative',
                borderRadius: '15px',
                overflow: 'hidden',
                backgroundColor: COLORS.bgDark,
                height: '400px',
              }}>
                <img 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'opacity 0.5s ease-in-out'
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
                
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(13, 31, 24, 0.95) 80%)',
                  padding: '30px 20px 20px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ color: COLORS.textLight, fontWeight: '700', fontSize: '1.3rem', marginBottom: '4px' }}>
                    {images[currentIndex].title}
                  </h3>
                  <p style={{ color: COLORS.textMuted, fontSize: '0.9rem', margin: 0 }}>
                    {images[currentIndex].description}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(images[currentIndex]);
                  }}
                  style={{
                    ...NEUMORPH.buttonPrimary,
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    padding: '8px 16px',
                    fontSize: '0.8rem',
                    zIndex: 10
                  }}
                >
                  <i className="fas fa-expand" style={{ marginRight: '6px' }}></i>
                  Ampliar
                </button>
              </div>

              <button
                onClick={prevSlide}
                style={{
                  ...NEUMORPH.button,
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                  fontSize: '1.2rem'
                }}
              >
                ❮
              </button>
              
              <button
                onClick={nextSlide}
                style={{
                  ...NEUMORPH.button,
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 5,
                  fontSize: '1.2rem'
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
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: currentIndex === index ? COLORS.primary : COLORS.darkShadow,
                      boxShadow: currentIndex === index ? `0 0 10px ${COLORS.primary}` : 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <div style={{
                textAlign: 'center',
                marginTop: '8px',
                color: COLORS.textMuted,
                fontSize: '0.8rem'
              }}>
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {(selectedVideo || selectedImage) && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(10, 20, 15, 0.85)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => { setSelectedVideo(false); setSelectedImage(null); }}>
          <div style={{
            ...NEUMORPH.card,
            maxWidth: '700px',
            width: '100%',
            padding: '20px',
            overflow: 'hidden',
          }} onClick={(e) => e.stopPropagation()}>
            {selectedVideo ? (
              <video controls autoPlay playsInline style={{ width: '100%', borderRadius: '12px', maxHeight: '50vh' }}>
                <source src={video.src} type="video/mp4" />
              </video>
            ) : (
              <img src={selectedImage?.src} alt={selectedImage?.title} style={{ width: '100%', borderRadius: '12px', maxHeight: '50vh', objectFit: 'contain' }} />
            )}
            <div className="mt-3 text-center">
              <h4 style={{ color: COLORS.textLight, fontSize: '1.1rem' }}>{selectedVideo ? video.title : selectedImage?.title}</h4>
              <p style={{ color: COLORS.textMuted, fontSize: '0.85rem' }}>{selectedVideo ? video.description : selectedImage?.description}</p>
              <button 
                style={{ ...NEUMORPH.buttonPrimary, padding: '8px 25px', marginTop: '10px' }}
                onClick={() => { setSelectedVideo(false); setSelectedImage(null); }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// --- TEAM CAROUSEL SECTION ---
const TeamCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const teamImages = [
    { src: "/assets/img/equipo1.jpg", name: "Nuestro Equipo Docente", role: "Compromiso y excelencia educativa" },
    { src: "/assets/img/equipo2.jpg", name: "Personal Administrativo", role: "Atención y gestión constante" }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % teamImages.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);

  return (
    <section className="page-section" id="team" style={{ padding: '60px 15px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{
            fontFamily: "'Saira Stencil One', cursive",
            fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
            color: COLORS.primary,
          }}>Nuestro Equipo</h2>
          <p style={{ color: COLORS.textMuted, fontSize: '0.95rem' }}>
            Conoce a los profesionales que hacen posible la educación de calidad
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div style={{ ...NEUMORPH.card, padding: '25px', position: 'relative' }}>
              <div style={{
                height: '300px',
                borderRadius: '15px',
                overflow: 'hidden',
                backgroundColor: COLORS.bgDark,
                position: 'relative'
              }}>
                <img 
                  src={teamImages[currentIndex].src} 
                  alt={teamImages[currentIndex].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              <div className="text-center mt-3">
                <h3 style={{ color: COLORS.textLight, fontWeight: '700', fontSize: '1.2rem', marginBottom: '4px' }}>
                  {teamImages[currentIndex].name}
                </h3>
                <p style={{ color: COLORS.primary, fontWeight: '600', fontSize: '0.9rem', margin: 0 }}>
                  {teamImages[currentIndex].role}
                </p>
              </div>

              <button
                onClick={prevSlide}
                style={{
                  ...NEUMORPH.button,
                  position: 'absolute',
                  left: '10px',
                  top: '45%',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ❮
              </button>
              
              <button
                onClick={nextSlide}
                style={{
                  ...NEUMORPH.button,
                  position: 'absolute',
                  right: '10px',
                  top: '45%',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ❯
              </button>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px', gap: '8px' }}>
                {teamImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: currentIndex === index ? COLORS.primary : COLORS.darkShadow,
                      boxShadow: currentIndex === index ? `0 0 8px ${COLORS.primary}` : 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CONTACT SECTION ---
const ContactSection: React.FC = () => (
  <section className="page-section" id="contacto" style={{ padding: '60px 15px' }}>
    <div className="container text-center">
      <h2 style={{ 
        fontFamily: "'Saira Stencil One', cursive", 
        color: COLORS.primary,
        fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
        marginBottom: '2rem'
      }}>Contáctanos</h2>
      
      <div className="mb-4">
        <div style={{
          ...NEUMORPH.inset,
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 25px',
          maxWidth: '100%',
          wordBreak: 'break-word',
        }}>
          <i className="fas fa-envelope" style={{ color: COLORS.primary }}></i>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', color: COLORS.textLight }}>
            ueciudadcuatricentenaria1@gmail.com
          </span>
        </div>
      </div>
      
      <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
        <a 
          href="mailto:ueciudadcuatricentenaria1@gmail.com" 
          style={{ 
            ...NEUMORPH.buttonPrimary,
            padding: '0.8rem 2rem',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textAlign: 'center'
          }}
        >
          Enviar Mensaje
        </a>
        
        <a 
          href="https://maps.app.goo.gl/1FCg2i3KPujfGUuY8" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            ...NEUMORPH.button,
            padding: '0.8rem 2rem',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            letterSpacing: '1px'
          }}
        >
          <i className="fas fa-map-marker-alt" style={{ color: COLORS.primary }}></i>
          Ubícanos
        </a>
      </div>
    </div>
  </section>
);

// --- FOOTER ---
const Footer: React.FC = () => (
  <footer className="footer py-4" style={{ 
    backgroundColor: COLORS.surface, 
    borderTop: `1px solid rgba(255, 255, 255, 0.05)`,
    boxShadow: `0 -10px 20px ${COLORS.darkShadow}`
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