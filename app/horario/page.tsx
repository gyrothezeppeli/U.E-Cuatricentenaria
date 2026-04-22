"use client";

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import {
  Clock,
  User,
  GraduationCap,
  School,
  Star,
  Edit,
  Trash2,
  Plus,
  LogIn,
  LogOut,
  Calendar,
  CalendarDays,
  Building2,
  Download,
  Eye,
  Sun,
  Moon,
  HomeIcon,
  ChevronRight
} from 'lucide-react';

// Tipos
type HorarioItem = {
  id: string;
  nivel: string;
  grado: string;
  seccion: string;
  dia: string;
  hora: string;
  curso: string;
  aula: string;
  profesor: string;
};

// Días de la semana
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// Horas por sección en formato normal (12 horas con AM/PM)
const horasManana = ['7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM'];
const horasTarde = ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

// Todos los grados por nivel
const primariaGrados = ['1° Nivel', '2° Nivel', '3° Nivel'];
const colegioGrados = ['1° Grado', '2° Grado', '3° Grado', '4° Grado', '5° Grado', '6° Grado'];
const mediaGeneralGrados = ['1° Año', '2° Año', '3° Año', '4° Año', '5° Año'];

// Colores para grados (degradado de verdes)
const gradoColors: Record<string, string> = {
  '1° Nivel': '#d8f3dc',
  '2° Nivel': '#b7e4c7',
  '3° Nivel': '#95d5b2',
  '1° Grado': '#74c69d',
  '2° Grado': '#52b788',
  '3° Grado': '#40916c',
  '4° Grado': '#2d6a4f',
  '5° Grado': '#1b4332',
  '6° Grado': '#081c15',
  '1° Año': '#74c69d',
  '2° Año': '#52b788',
  '3° Año': '#40916c',
  '4° Año': '#2d6a4f',
  '5° Año': '#1b4332'
};

// Configuración de secciones
const seccionesConfig = {
  'A': {
    nombre: 'Sección A',
    horario: 'Mañana',
    horas: horasManana,
    icono: <Sun size={20} />,
    color: '#ffffff',
    colorLight: '#f0fdf4',
    colorBg: '#ffffff',
    textColor: '#000000',
    descripcion: 'Horario de 7:00 AM a 11:00 AM',
    grados: [...primariaGrados, ...colegioGrados, ...mediaGeneralGrados]
  },
  'B': {
    nombre: 'Sección B',
    horario: 'Mañana',
    horas: horasManana,
    icono: <Sun size={20} />,
    color: '#2d6a4f',
    colorLight: '#d8f3dc',
    colorBg: '#2d6a4f',
    textColor: '#ffffff',
    descripcion: 'Horario de 7:00 AM a 11:00 AM',
    grados: [...colegioGrados, ...mediaGeneralGrados]
  },
  'C': {
    nombre: 'Sección C',
    horario: 'Tarde',
    horas: horasTarde,
    icono: <Moon size={20} />,
    color: '#1b4332',
    colorLight: '#b7e4c7',
    colorBg: '#1b4332',
    textColor: '#ffffff',
    descripcion: 'Horario de 1:00 PM a 4:00 PM',
    grados: [...colegioGrados, ...mediaGeneralGrados]
  }
};

// Datos iniciales completos
const generarHorariosIniciales = (): HorarioItem[] => {
  const horarios: HorarioItem[] = [];
  let id = 1;

  const cursosPorNivel: Record<string, Record<string, string[]>> = {
    'Primaria': {
      '1° Nivel': ['Matemáticas', 'Lectura', 'Ciencias', 'Arte', 'Educación Física'],
      '2° Nivel': ['Matemáticas', 'Comprensión Lectora', 'Ciencias Sociales', 'Inglés', 'Música'],
      '3° Nivel': ['Matemáticas Intermedias', 'Lengua', 'Biología', 'Historia', 'Educación Física']
    },
    'Colegio': {
      '1° Grado': ['Álgebra', 'Gramática', 'Geometría', 'Cálculo', 'Educación Física'],
      '2° Grado': ['Geometría', 'Literatura', 'Física', 'Filosofía', 'Inglés'],
      '3° Grado': ['Cálculo', 'Redacción', 'Química', 'Economía', 'Historia'],
      '4° Grado': ['Trigonometría', 'Literatura', 'Física Moderna', 'Historia', 'Francés'],
      '5° Grado': ['Estadística', 'Literatura Europea', 'Bioquímica', 'Sociología', 'Programación'],
      '6° Grado': ['Precálculo', 'Comunicación', 'Física Avanzada', 'Filosofía Política', 'Robótica']
    },
    'Media General': {
      '1° Año': ['Álgebra Lineal', 'Literatura', 'Termodinámica', 'Historia', 'Inglés Técnico'],
      '2° Año': ['Cálculo Diferencial', 'Análisis Literario', 'Electromagnetismo', 'Geografía', 'Base de Datos'],
      '3° Año': ['Cálculo Integral', 'Literatura Hispanoamericana', 'Química Orgánica', 'Derecho Civil', 'Redes'],
      '4° Año': ['Ecuaciones Diferenciales', 'Teoría Literaria', 'Mecánica Cuántica', 'Economía', 'Inteligencia Artificial'],
      '5° Año': ['Matemática Avanzada', 'Seminario', 'Física de Partículas', 'Derecho Penal', 'Desarrollo Software']
    }
  };

  const profesoresPorNivel: Record<string, string[]> = {
    'Primaria': ['Dra. Martínez', 'Dra. Gómez', 'Dr. Rodríguez', 'Dra. Castro', 'Prof. Torres'],
    'Colegio': ['Dr. Pérez', 'Dra. López', 'Dra. Martínez', 'Dr. Rodríguez', 'Prof. Smith', 'Ing. Torres'],
    'Media General': ['Dr. Martínez', 'Dra. Gómez', 'Dr. Rodríguez', 'Dr. Pérez', 'Prof. Smith', 'Ing. Torres']
  };

  const aulasPorNivel: Record<string, string[]> = {
    'Primaria': ['A-101', 'A-102', 'Lab-101', 'C-301', 'Gimnasio'],
    'Colegio': ['A-105', 'A-106', 'Lab-103', 'C-304', 'Gimnasio', 'Lab-Comp'],
    'Media General': ['E-101', 'E-102', 'Lab-301', 'E-103', 'E-104', 'Lab-Comp2']
  };

  const getNivelByGrado = (grado: string): string => {
    if (primariaGrados.includes(grado)) return 'Primaria';
    if (colegioGrados.includes(grado)) return 'Colegio';
    return 'Media General';
  };

  for (const [seccion, config] of Object.entries(seccionesConfig)) {
    for (const grado of config.grados) {
      const nivel = getNivelByGrado(grado);
      const cursos = cursosPorNivel[nivel]?.[grado] || ['Matemáticas', 'Lengua', 'Ciencias', 'Arte', 'Educación Física'];
      const profs = profesoresPorNivel[nivel] || ['Dr. Pérez', 'Dra. López'];
      const aulasList = aulasPorNivel[nivel] || ['A-101', 'A-102'];
      
      for (const dia of diasSemana) {
        for (let i = 0; i < config.horas.length; i++) {
          const hora = config.horas[i];
          const cursoIndex = i % cursos.length;
          const profIndex = (i + dia.length) % profs.length;
          const aulaIndex = (i + dia.length) % aulasList.length;
          
          horarios.push({
            id: String(id++),
            nivel,
            grado,
            seccion,
            dia,
            hora,
            curso: cursos[cursoIndex],
            aula: aulasList[aulaIndex],
            profesor: profs[profIndex]
          });
        }
      }
    }
  }
  
  return horarios;
};

const horariosIniciales = generarHorariosIniciales();

export default function App() {
  const [paginaActual, setPaginaActual] = useState<'principal' | 'horarios'>('principal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [horarios, setHorarios] = useState<HorarioItem[]>(horariosIniciales);
  const [editandoHorario, setEditandoHorario] = useState<HorarioItem | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [horarioAEliminar, setHorarioAEliminar] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSeccionGrado, setSelectedSeccionGrado] = useState<{ seccion: string; grado: string } | null>(null);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState<{ seccion: string; grado: string } | null>(null);
  const [exportando, setExportando] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState<string>('A');

  const [formData, setFormData] = useState({
    seccion: 'A',
    grado: '1° Nivel',
    dia: 'Lunes',
    hora: '7:00 AM',
    curso: '',
    aula: '',
    profesor: ''
  });

  const handleLogin = () => {
    if (password === 'admin123') {
      setIsLoggedIn(true);
      setShowLogin(false);
      setPassword('');
    } else {
      alert('Contraseña incorrecta');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const getDatosTabla = (seccion: string, grado: string) => {
    const config = seccionesConfig[seccion as keyof typeof seccionesConfig];
    const matriz: { [key: string]: { [key: string]: HorarioItem | null } } = {};
    
    config.horas.forEach(hora => {
      matriz[hora] = {};
      diasSemana.forEach(dia => {
        const horario = horarios.find(h => 
          h.seccion === seccion && 
          h.grado === grado && 
          h.dia === dia && 
          h.hora === hora
        );
        matriz[hora][dia] = horario || null;
      });
    });
    
    return matriz;
  };

  const agregarHorario = () => {
    if (!formData.curso || !formData.profesor || !formData.aula) {
      alert('Complete todos los campos');
      return;
    }
    const nuevoId = (Math.max(...horarios.map(h => parseInt(h.id)), 0) + 1).toString();
    setHorarios([...horarios, { ...formData, id: nuevoId, nivel: 'Personalizado' }]);
    setShowAddModal(false);
    setSelectedSeccionGrado(null);
    setFormData({ seccion: 'A', grado: '1° Nivel', dia: 'Lunes', hora: '7:00 AM', curso: '', aula: '', profesor: '' });
    alert('Horario agregado');
  };

  const editarHorario = () => {
    if (!editandoHorario) return;
    setHorarios(horarios.map(h => h.id === editandoHorario.id ? { ...editandoHorario, ...formData } : h));
    setShowEditModal(false);
    setEditandoHorario(null);
    alert('Horario editado');
  };

  const eliminarHorario = (id: string) => {
    setHorarios(horarios.filter(h => h.id !== id));
    setShowDeleteConfirm(false);
    setHorarioAEliminar(null);
    alert('Horario eliminado');
  };

  const abrirEditModal = (horario: HorarioItem) => {
    setEditandoHorario(horario);
    setFormData({
      seccion: horario.seccion,
      grado: horario.grado,
      dia: horario.dia,
      hora: horario.hora,
      curso: horario.curso,
      aula: horario.aula,
      profesor: horario.profesor
    });
    setShowEditModal(true);
  };

  const confirmarEliminar = (id: string) => {
    setHorarioAEliminar(id);
    setShowDeleteConfirm(true);
  };

  const abrirAddModal = (seccion: string, grado: string, dia: string, hora: string) => {
    setSelectedSeccionGrado({ seccion, grado });
    setFormData({
      seccion,
      grado,
      dia,
      hora,
      curso: '',
      aula: '',
      profesor: ''
    });
    setShowAddModal(true);
  };

  const abrirDetailModal = (seccion: string, grado: string) => {
    setSelectedDetail({ seccion, grado });
    setShowDetailModal(true);
  };

  const exportarPDF = (seccion: string, grado: string) => {
    setExportando(true);
    try {
      const horariosGrado = horarios.filter(h => h.seccion === seccion && h.grado === grado);
      const config = seccionesConfig[seccion as keyof typeof seccionesConfig];
      const gradoColor = gradoColors[grado] || config.color;
      
      const doc = new jsPDF('l', 'mm', 'a4');
      
      doc.setFont('times', 'normal');
      doc.setFontSize(16);
      doc.setTextColor(gradoColor === '#ffffff' ? '#000000' : gradoColor);
      doc.text(`Horario Académico - ${config.nombre}`, 14, 20);
      
      doc.setFontSize(12);
      doc.text(`${grado}`, 14, 30);
      
      doc.setFontSize(9);
      doc.setTextColor(100, 100, 100);
      doc.text(`${config.descripcion}`, 14, 38);
      
      const tableData = [];
      for (const hora of config.horas) {
        const row = [hora];
        for (const dia of diasSemana) {
          const horario = horariosGrado.find(h => h.dia === dia && h.hora === hora);
          row.push(horario ? `${horario.curso}\n${horario.profesor}\n${horario.aula}` : '---');
        }
        tableData.push(row);
      }
      
      autoTable(doc, {
        head: [['Hora', ...diasSemana]],
        body: tableData,
        startY: 45,
        theme: 'striped',
        headStyles: {
          fillColor: gradoColor === '#ffffff' ? '#dddddd' : gradoColor,
          textColor: gradoColor === '#ffffff' ? '#000000' : [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8
        },
        bodyStyles: {
          fontSize: 7,
          cellPadding: 2,
          font: 'times'
        },
        columnStyles: {
          0: { cellWidth: 25 }
        },
        alternateRowStyles: {
          fillColor: [240, 248, 240]
        }
      });
      
      doc.save(`${config.nombre}_${grado}_Horario.pdf`);
    } catch (error) {
      alert('Error al generar PDF');
    } finally {
      setExportando(false);
    }
  };

  // Página Principal
  const PaginaPrincipal = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #d8f3dc 100%)', fontFamily: 'Times New Roman, Times, serif' }}>
      <div style={{ padding: '80px 20px 60px', textAlign: 'center', color: '#000000' }}>
        <School size={64} style={{ marginBottom: '20px', color: '#2d6a4f' }} />
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#000000', fontFamily: 'Times New Roman, Times, serif' }}>
          Sistema de Gestión de Horarios
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.7, color: '#000000', fontFamily: 'Times New Roman, Times, serif' }}> </p>
       
      </div>

      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#000000', marginBottom: '40px', fontSize: '2rem', fontFamily: 'Times New Roman, Times, serif' }}>
          Secciones disponibles
        </h2>
        <div className="row g-4">
          {Object.entries(seccionesConfig).map(([key, config]) => (
            <div key={key} className="col-md-4">
              <div
                style={{
                  backgroundColor: config.colorBg,
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  color: config.textColor,
                  fontFamily: 'Times New Roman, Times, serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
                onClick={() => {
                  setSeccionActiva(key);
                  setPaginaActual('horarios');
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: key === 'A' ? '#e8f5e9' : (key === 'B' ? '#2d6a4f20' : '#1b433220'),
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}>
                  {key === 'A' ? <Sun size={32} color="#2d6a4f" /> : (key === 'B' ? <Sun size={32} color="#ffffff" /> : <Moon size={32} color="#ffffff" />)}
                </div>
                <h3 style={{ color: key === 'A' ? '#000000' : '#ffffff', marginBottom: '10px', fontFamily: 'Times New Roman, Times, serif' }}>{config.nombre}</h3>
                <p style={{ color: key === 'A' ? '#666666' : '#cccccc', marginBottom: '5px', fontFamily: 'Times New Roman, Times, serif' }}>{config.horario}</p>
                <p style={{ color: key === 'A' ? '#999999' : '#aaaaaa', fontSize: '0.85rem', fontFamily: 'Times New Roman, Times, serif' }}>{config.descripcion}</p>
                <div style={{ marginTop: '15px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '5px 12px',
                    backgroundColor: key === 'A' ? '#e8f5e9' : (key === 'B' ? '#2d6a4f' : '#1b4332'),
                    color: '#ffffff',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontFamily: 'Times New Roman, Times, serif'
                  }}>
                    {config.grados.length} grados
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '30px', color: '#000000', opacity: 0.7, fontFamily: 'Times New Roman, Times, serif' }}>
        <p>Todos los derechos reservados a la U. E. "Ciudad Catricentenaría"</p>
      </footer>
    </div>
  );

  // Página de Horarios
  const PaginaHorarios = () => {
    const configActual = seccionesConfig[seccionActiva as keyof typeof seccionesConfig];
    const horariosSeccion = horarios.filter(h => h.seccion === seccionActiva);
    const gradosUnicos = [...new Set(horariosSeccion.map(h => h.grado))];
    
    const primariaGradosSeccion = gradosUnicos.filter(g => primariaGrados.includes(g));
    const colegioGradosSeccion = gradosUnicos.filter(g => colegioGrados.includes(g));
    const mediaGradosSeccion = gradosUnicos.filter(g => mediaGeneralGrados.includes(g));
    
    const nivelesOrden = [
      { nombre: 'Primaria', grados: primariaGradosSeccion, color: '#2d6a4f' },
      { nombre: 'Colegio', grados: colegioGradosSeccion, color: '#1b4332' },
      { nombre: 'Media General', grados: mediaGradosSeccion, color: '#081c15' }
    ];
    
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#e8f5e9', padding: '20px 0', fontFamily: 'Times New Roman, Times, serif' }}>
        
        <nav className="navbar navbar-dark py-2" style={{ backgroundColor: '#000000' }}>
          <div className="container-fluid">
            <div className="d-flex align-items-center gap-3">
              <button onClick={() => setPaginaActual('principal')} className="btn btn-sm btn-outline-light" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Times New Roman, Times, serif' }}>
                <HomeIcon size={16} /> Inicio
              </button>
              <span className="navbar-brand d-flex align-items-center gap-2" style={{ fontSize: '1.1rem', color: '#ffffff', fontFamily: 'Times New Roman, Times, serif' }}>
                <School size={20} color="#ffffff" /> {configActual.nombre} - {configActual.horario}
              </span>
            </div>
            <div className="d-flex gap-2">
              {!isLoggedIn ? (
                <button className="btn btn-sm btn-outline-light" onClick={() => setShowLogin(true)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  <LogIn size={14} /> Profesor
                </button>
              ) : (
                <button className="btn btn-sm btn-outline-danger" onClick={handleLogout} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  <LogOut size={14} /> Salir
                </button>
              )}
            </div>
          </div>
        </nav>

        {showLogin && (
          <div className="modal-overlay" onClick={() => setShowLogin(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              <div className="modal-header" style={{ backgroundColor: configActual.colorBg }}>
                <h5 className="mb-0" style={{ color: configActual.textColor, fontFamily: 'Times New Roman, Times, serif' }}>Acceso Profesores</h5>
                <button className="btn-close" onClick={() => setShowLogin(false)}></button>
              </div>
              <div className="modal-body">
                <input type="password" className="form-control" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleLogin()} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
                <small className="text-muted mt-2 d-block" style={{ fontFamily: 'Times New Roman, Times, serif' }}></small>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowLogin(false)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Cancelar</button>
                <button className="btn btn-success" onClick={handleLogin} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Ingresar</button>
              </div>
            </div>
          </div>
        )}

        <header style={{ padding: '20px 0', background: configActual.colorBg, marginBottom: '30px' }}>
          <div className="container text-center">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
              {seccionActiva === 'A' ? <Sun size={32} color={configActual.textColor} /> : (seccionActiva === 'B' ? <Sun size={32} color={configActual.textColor} /> : <Moon size={32} color={configActual.textColor} />)}
              <h1 style={{ color: configActual.textColor, margin: 0, fontSize: '2.5rem', fontFamily: 'Times New Roman, Times, serif' }}>{configActual.nombre}</h1>
            </div>
            <p style={{ color: configActual.textColor, opacity: 0.9, fontSize: '1rem', fontFamily: 'Times New Roman, Times, serif' }}>{configActual.descripcion}</p>
            <p style={{ color: configActual.textColor, opacity: 0.8, fontSize: '0.9rem', marginTop: '5px', fontFamily: 'Times New Roman, Times, serif' }}>
              {seccionActiva === 'A' && 'Incluye: Primaria (1°-3° Nivel), Colegio (1°-6° Grado), Media General (1°-5° Año)'}
              {(seccionActiva === 'B' || seccionActiva === 'C') && 'Incluye: Colegio (1°-6° Grado), Media General (1°-5° Año)'}
            </p>
            {isLoggedIn && (
              <div className="alert alert-light d-inline-block px-3 py-1 mt-2" style={{ fontSize: '0.85rem', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'Times New Roman, Times, serif' }}>
                <Edit size={12} /> Modo Edición Activado
                <button className="btn btn-sm ms-2" style={{ backgroundColor: configActual.colorBg, color: configActual.textColor, border: '1px solid', fontFamily: 'Times New Roman, Times, serif' }} onClick={() => setShowAddModal(true)}>
                  <Plus size={12} /> Agregar Horario
                </button>
              </div>
            )}
          </div>
        </header>

        <section style={{ padding: '0 0 20px 0' }}>
          <div className="container-fluid px-4">
            {nivelesOrden.map(nivel => {
              if (nivel.grados.length === 0) return null;
              
              return (
                <div key={nivel.nombre} className="mb-5" style={{ marginBottom: '40px' }}>
                  <div className="d-flex align-items-center gap-2 mb-4 pb-2" style={{ borderBottom: `2px solid ${nivel.color}`, marginBottom: '20px' }}>
                    <div style={{ width: '4px', height: '28px', backgroundColor: nivel.color, borderRadius: '2px' }}></div>
                    <h3 style={{ color: nivel.color, margin: 0, fontSize: '1.6rem', fontWeight: 'bold', fontFamily: 'Times New Roman, Times, serif' }}>{nivel.nombre}</h3>
                    <span className="badge" style={{ backgroundColor: nivel.color, color: 'white', fontSize: '0.8rem', padding: '5px 12px', fontFamily: 'Times New Roman, Times, serif' }}>{nivel.grados.length} grados</span>
                  </div>
                  
                  <div className="row g-4">
                    {nivel.grados.map(grado => {
                      const datosTabla = getDatosTabla(seccionActiva, grado);
                      const gradoColor = gradoColors[grado] || configActual.colorLight;
                      const esPrimaria = nivel.nombre === 'Primaria';
                      const textColor = esPrimaria ? '#000000' : '#ffffff';
                      
                      return (
                        <div key={grado} className="col-xl-4 col-lg-6 col-md-12">
                          <div className="card h-100 shadow-lg" style={{ 
                            borderRadius: '12px', 
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                            marginBottom: '10px',
                            fontFamily: 'Times New Roman, Times, serif'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 20px 30px rgba(0,0,0,0.15)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                          }}>
                            <div className="card-header" style={{ 
                              backgroundColor: gradoColor, 
                              color: textColor,
                              borderRadius: '12px 12px 0 0', 
                              padding: '12px 15px',
                              borderBottom: 'none',
                              fontFamily: 'Times New Roman, Times, serif'
                            }}>
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center gap-2">
                                  {nivel.nombre === 'Primaria' && <Star size={16} />}
                                  {nivel.nombre === 'Colegio' && <Building2 size={16} />}
                                  {nivel.nombre === 'Media General' && <GraduationCap size={16} />}
                                  <strong style={{ fontSize: '1.1rem' }}>{grado}</strong>
                                </div>
                                <div className="d-flex gap-2">
                                  <button className="btn btn-sm" style={{ 
                                    backgroundColor: esPrimaria ? '#00000020' : '#ffffff20', 
                                    color: textColor,
                                    borderRadius: '6px',
                                    padding: '4px 8px',
                                    fontFamily: 'Times New Roman, Times, serif'
                                  }} onClick={() => exportarPDF(seccionActiva, grado)} title="Exportar PDF">
                                    <Download size={14} />
                                  </button>
                                  <button className="btn btn-sm" style={{ 
                                    backgroundColor: esPrimaria ? '#00000020' : '#ffffff20', 
                                    color: textColor,
                                    borderRadius: '6px',
                                    padding: '4px 8px',
                                    fontFamily: 'Times New Roman, Times, serif'
                                  }} onClick={() => abrirDetailModal(seccionActiva, grado)} title="Ver detalles">
                                    <Eye size={14} />
                                  </button>
                                </div>
                              </div>
                            </div>
                            
                            <div className="card-body p-0">
                              <div className="table-responsive">
                                <table className="table table-bordered mb-0" style={{ fontSize: '0.75rem', width: '100%', fontFamily: 'Times New Roman, Times, serif' }}>
                                  <thead style={{ backgroundColor: configActual.colorLight }}>
                                    <tr>
                                      <th style={{ width: '75px', textAlign: 'center', padding: '8px', fontFamily: 'Times New Roman, Times, serif' }}>Hora</th>
                                      {diasSemana.map(dia => (
                                        <th key={dia} style={{ textAlign: 'center', minWidth: '85px', padding: '8px', fontFamily: 'Times New Roman, Times, serif' }}>{dia.substring(0, 3)}</th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {configActual.horas.map(hora => {
                                      const fila = datosTabla[hora];
                                      return (
                                        <tr key={hora}>
                                          <td className="fw-bold text-center" style={{ backgroundColor: '#f8f9fa', padding: '8px', verticalAlign: 'middle', fontFamily: 'Times New Roman, Times, serif' }}>{hora}</td>
                                          {diasSemana.map(dia => {
                                            const horario = fila ? fila[dia] : null;
                                            return (
                                              <td 
                                                key={dia} 
                                                style={{ padding: '8px', cursor: isLoggedIn ? 'pointer' : 'default', backgroundColor: horario ? '#ffffff' : configActual.colorLight, verticalAlign: 'top', fontFamily: 'Times New Roman, Times, serif' }}
                                                onClick={() => {
                                                  if (isLoggedIn && horario) {
                                                    abrirEditModal(horario);
                                                  } else if (isLoggedIn && !horario) {
                                                    abrirAddModal(seccionActiva, grado, dia, hora);
                                                  }
                                                }}
                                              >
                                                {horario ? (
                                                  <div>
                                                    <div><strong style={{ fontSize: '0.8rem' }}>{horario.curso}</strong></div>
                                                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>{horario.profesor}</div>
                                                    <div className="text-muted" style={{ fontSize: '0.65rem' }}>{horario.aula}</div>
                                                    {isLoggedIn && (
                                                      <div className="mt-1">
                                                        <button className="btn btn-sm btn-link p-0 me-1" onClick={(e) => { e.stopPropagation(); abrirEditModal(horario); }} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                                          <Edit size={10} />
                                                        </button>
                                                        <button className="btn btn-sm btn-link p-0 text-danger" onClick={(e) => { e.stopPropagation(); confirmarEliminar(horario.id); }} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                                          <Trash2 size={10} />
                                                        </button>
                                                      </div>
                                                    )}
                                                  </div>
                                                ) : (
                                                  <div className="text-center text-muted py-1">
                                                    <small>---</small>
                                                    {isLoggedIn && (
                                                      <div>
                                                        <button className="btn btn-sm btn-link p-0" onClick={(e) => { e.stopPropagation(); abrirAddModal(seccionActiva, grado, dia, hora); }} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                                          <Plus size={10} />
                                                        </button>
                                                      </div>
                                                    )}
                                                  </div>
                                                )}
                                              </td>
                                            );
                                          })}
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            
                            <div className="card-footer text-center" style={{ backgroundColor: '#f8f9fa', fontSize: '0.7rem', padding: '8px', borderTop: `1px solid ${gradoColor}40`, fontFamily: 'Times New Roman, Times, serif' }}>
                              <small>{horarios.filter(h => h.seccion === seccionActiva && h.grado === grado).length} clases semanales</small>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Modales */}
        {showAddModal && isLoggedIn && (
          <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              <div className="modal-header" style={{ backgroundColor: configActual.colorBg }}>
                <h5 className="mb-0" style={{ color: configActual.textColor, fontFamily: 'Times New Roman, Times, serif' }}>Agregar Horario - {configActual.nombre}</h5>
                <button className="btn-close" onClick={() => setShowAddModal(false)}></button>
              </div>
              <div className="modal-body">
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Grado</label>
                <select className="form-select mb-2" value={formData.grado} onChange={(e) => setFormData({ ...formData, grado: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {gradosUnicos.map(g => <option key={g}>{g}</option>)}
                </select>
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Día</label>
                <select className="form-select mb-2" value={formData.dia} onChange={(e) => setFormData({ ...formData, dia: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {diasSemana.map(d => <option key={d}>{d}</option>)}
                </select>
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Hora</label>
                <select className="form-select mb-2" value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {configActual.horas.map(h => <option key={h}>{h}</option>)}
                </select>
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Curso</label>
                <input type="text" className="form-control mb-2" placeholder="Nombre del curso" value={formData.curso} onChange={(e) => setFormData({ ...formData, curso: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Profesor</label>
                <input type="text" className="form-control mb-2" placeholder="Nombre del profesor" value={formData.profesor} onChange={(e) => setFormData({ ...formData, profesor: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Aula</label>
                <input type="text" className="form-control mb-2" placeholder="Aula" value={formData.aula} onChange={(e) => setFormData({ ...formData, aula: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowAddModal(false)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Cancelar</button>
                <button className="btn btn-success" onClick={agregarHorario} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Agregar</button>
              </div>
            </div>
          </div>
        )}

        {showEditModal && isLoggedIn && (
          <div className="modal-overlay" onClick={() => setShowEditModal(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              <div className="modal-header" style={{ backgroundColor: configActual.colorBg }}>
                <h5 className="mb-0" style={{ color: configActual.textColor, fontFamily: 'Times New Roman, Times, serif' }}>Editar Horario</h5>
                <button className="btn-close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Día</label>
                <select className="form-select mb-2" value={formData.dia} onChange={(e) => setFormData({ ...formData, dia: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {diasSemana.map(d => <option key={d}>{d}</option>)}
                </select>
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Hora</label>
                <select className="form-select mb-2" value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                  {configActual.horas.map(h => <option key={h}>{h}</option>)}
                </select>
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Curso</label>
                <input type="text" className="form-control mb-2" value={formData.curso} onChange={(e) => setFormData({ ...formData, curso: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Profesor</label>
                <input type="text" className="form-control mb-2" value={formData.profesor} onChange={(e) => setFormData({ ...formData, profesor: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
                <label className="form-label" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Aula</label>
                <input type="text" className="form-control mb-2" value={formData.aula} onChange={(e) => setFormData({ ...formData, aula: e.target.value })} style={{ fontFamily: 'Times New Roman, Times, serif' }} />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowEditModal(false)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Cancelar</button>
                <button className="btn btn-primary" onClick={editarHorario} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Guardar</button>
              </div>
            </div>
          </div>
        )}

        {showDeleteConfirm && isLoggedIn && (
          <div className="modal-overlay" onClick={() => setShowDeleteConfirm(false)}>
            <div className="modal-container-small" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              <div className="modal-header" style={{ backgroundColor: '#dc2626' }}>
                <h5 className="mb-0 text-white" style={{ fontFamily: 'Times New Roman, Times, serif' }}>Confirmar Eliminación</h5>
                <button className="btn-close btn-close-white" onClick={() => setShowDeleteConfirm(false)}></button>
              </div>
              <div className="modal-body text-center">
                <Trash2 size={40} style={{ color: '#dc2626' }} />
                <p className="mt-2" style={{ fontFamily: 'Times New Roman, Times, serif' }}>¿Estás seguro de eliminar este horario?</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeleteConfirm(false)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Cancelar</button>
                <button className="btn btn-danger" onClick={() => horarioAEliminar && eliminarHorario(horarioAEliminar)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Eliminar</button>
              </div>
            </div>
          </div>
        )}

        {showDetailModal && selectedDetail && (
          <div className="modal-overlay" onClick={() => setShowDetailModal(false)}>
            <div className="modal-container-large" onClick={(e) => e.stopPropagation()} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
              <div className="modal-header" style={{ backgroundColor: gradoColors[selectedDetail.grado] || configActual.colorBg }}>
                <h5 className="mb-0" style={{ color: selectedDetail.grado.includes('Nivel') ? '#000000' : '#ffffff', fontFamily: 'Times New Roman, Times, serif' }}>{selectedDetail.grado} - Horario Completo</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-light" onClick={() => exportarPDF(selectedDetail.seccion, selectedDetail.grado)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <Download size={14} /> PDF
                  </button>
                  <button className="btn-close" onClick={() => setShowDetailModal(false)}></button>
                </div>
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                    <thead style={{ backgroundColor: configActual.colorLight }}>
                      <tr>
                        <th style={{ width: '100px', fontFamily: 'Times New Roman, Times, serif' }}>Hora</th>
                        {diasSemana.map(dia => (
                          <th key={dia} style={{ minWidth: '120px', fontFamily: 'Times New Roman, Times, serif' }}>{dia}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {configActual.horas.map(hora => {
                        const horariosHora = horarios.filter(h => 
                          h.seccion === selectedDetail.seccion && 
                          h.grado === selectedDetail.grado && 
                          h.hora === hora
                        );
                        return (
                          <tr key={hora}>
                            <td className="fw-bold" style={{ fontFamily: 'Times New Roman, Times, serif' }}>{hora}</td>
                            {diasSemana.map(dia => {
                              const horario = horariosHora.find(h => h.dia === dia);
                              return (
                                <td key={dia} style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                                  {horario ? (
                                    <div>
                                      <strong>{horario.curso}</strong><br />
                                      <small className="text-muted">Profesor: {horario.profesor}</small><br />
                                      <small className="text-muted">Aula: {horario.aula}</small>
                                    </div>
                                  ) : (
                                    <span className="text-muted">Sin clase</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDetailModal(false)} style={{ fontFamily: 'Times New Roman, Times, serif' }}>Cerrar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return paginaActual === 'principal' ? <PaginaPrincipal /> : <PaginaHorarios />;
}

// Estilos globales
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    * {
      font-family: 'Times New Roman', Times, serif !important;
    }
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1050;
    }
    .modal-container {
      background: white;
      border-radius: 10px;
      max-width: 500px;
      width: 90%;
      max-height: 80vh;
      overflow: auto;
    }
    .modal-container-large {
      background: white;
      border-radius: 10px;
      max-width: 1200px;
      width: 95%;
      max-height: 85vh;
      overflow: auto;
    }
    .modal-container-small {
      background: white;
      border-radius: 10px;
      max-width: 350px;
      width: 90%;
    }
    .modal-header {
      padding: 15px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-body {
      padding: 15px;
    }
    .modal-footer {
      padding: 15px;
      border-top: 1px solid #dee2e6;
      display: flex;
      justify-content: flex-end;
      gap: 10px;
    }
    .table td, .table th {
      vertical-align: middle;
    }
    .btn, .form-control, .form-select, .navbar-brand, .nav-link, .card-header, .card-footer, .badge {
      font-family: 'Times New Roman', Times, serif !important;
    }
  `;
  document.head.appendChild(styleSheet);
}