export default {
  global: {
    componenteFormativo:
      'Seguimiento y control de actividades, mejora continua y proceso administrativo. ',
    descripcionCurso:
      'Las acciones de mejora continua son indispensables en la ejecución del plan de direccionamiento estratégico, ya que permiten corregir aquellas desviaciones detectadas y así lograr un proceso de evaluación y seguimiento efectivo que permita no sólo la mejora y el alcance de altos estándares de calidad, sino también la estandarización de las buenas prácticas dentro de la organización. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Seguimiento y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios de mejora continua',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Comunicación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistemas de gestión de calidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación de tareas y resultados',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_14_331316.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Seguimiento y control.',
      referencia:
        'Agüera Ibáñez, R. E. (2006). Liderazgo y compromiso social: hacia un nuevo tipo de liderazgo estratégico, ético y con compromiso social. Editorial Miguel Ángel Porrúa.  ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/75278',
    },
    {
      tema: 'Principios de mejora continua. ',
      referencia:
        'Zapata Gómez, A. (2015). Ciclo de la calidad PHVA. Editorial Universidad Nacional de Colombia.  ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/129837',
    },
    {
      tema: 'Sistemas de gestión de calidad',
      referencia:
        'Zapata Gómez, A. (2012). Gestión de la calidad: hacia un modelo integrado de estándares. Editorial Universidad Nacional de Colombia.  ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/127952',
    },
    {
      tema: 'Verificación de tareas y resultados',
      referencia:
        'López Lemos, P. (2016). Herramientas para la mejora de la calidad: métodos para la mejora continua y la solución de problemas. FC Editorial.  ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/114213',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos ',
      significado:
        'Múltiples tipos de registros que incluye la relación entre ellos. ',
    },
    {
      termino: 'Efectividad ',
      significado:
        'Expresa claramente la relación entre el resultado y los objetivos planeados, es decir, entre lo logrado y lo planeado. ',
    },
    {
      termino: 'Estrategia',
      significado:
        'Es la forma concreta y específica de dar solución a una determinada situación y la cual se lleva a cabo con la sumatoria de tácticas. ',
    },
    {
      termino: 'Evaluación',
      significado:
        'Es el análisis de los planes, programas o proyectos cuando estos estén siendo realizados o ya estén ejecutados. Por medio de la evaluación se puede evidenciar los progresos y los resultados.  ',
    },
    {
      termino: 'Evaluación exante',
      significado:
        'Es la que se realiza antes de que sean iniciadas las actividades y su finalidad es analizar la viabilidad de estas. ',
    },
    {
      termino: 'Evaluación <em>expost</em>',
      significado:
        'Es la que se realiza al terminar una actividad y el cronograma inicial. por medio de esta se puede definir los logros inmediatos y a mediano plazo. ',
    },
    {
      termino: 'Evaluación de resultados',
      significado:
        'Permite conocer de forma concluyente si se cumplió de manera parcial, total o si no existió tal cumplimiento. ',
    },
    {
      termino: 'Evaluación de impacto ',
      significado:
        'Permite conocer si con la ejecución de las actividades planteadas no solo se logró el cumplimiento de la meta sino también existió un cambio o transformación en las áreas beneficiarias de la actividad. ',
    },
    {
      termino: 'Indicadores ',
      significado:
        'Son los criterios para valorar y evaluar el comportamiento y las diversas dinámicas de las variables. ',
    },
    {
      termino: 'Indicadores de efecto',
      significado: 'Son aquellos relacionados con los logros a mediano plazo. ',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'Son aquellos que tienen como objetivo evaluar la eficiencia de insumos, recursos y esfuerzos. ',
    },
    {
      termino: 'Indicadores de impacto',
      significado:
        'Se relaciona con los logros a largo plazo y con la contribución de estos en el cumplimiento de la misión, visión y objetivos estratégicos. ',
    },
    {
      termino: 'Indicadores de logro',
      significado:
        'Se refieren a todos los hechos que sean concretos, verificables, medibles, evaluables que son definidos a partir de cada objetivo. ',
    },
    {
      termino: 'Indicadores de producto',
      significado:
        'Son los relacionados con el plazo inmediato y las contribuciones de las actividades realizadas en el logro del objetivo macro. ',
    },
    {
      termino: 'Indicadores de resultado',
      significado:
        'Son aquellos relacionados con los logros a corto plazo y las contribuciones de las actividades en dar solución a los problemas y necesidades detectadas. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Agüera Ibáñez, R. E. (2006). Liderazgo y compromiso social: hacia un nuevo tipo de liderazgo estratégico, ético y con compromiso social. Editorial Miguel Ángel Porrúa. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/75278 ',
    },
    {
      referencia:
        'Ana Isabel Sordo. (16 de mayo de 2022). ¿Qué es la comunicación empresarial?, introducción completa. ',
      link: 'https://blog.hubspot.es/marketing/comunicacion-empresarial',
    },
    {
      referencia:
        'Bouzas Ortiz, J. A. & Reyes Gaytán, G. (2019). Gestión del talento humano. IURE Editores. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/130372 ',
    },
    {
      referencia:
        'CEP, E. (Il.). (2014). Teoría de herramientas informáticas para auxiliares administrativos. Manual Ámbito Intersectorial. Editorial CEP, S.L. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/51071',
    },
    {
      referencia:
        'Drovetta, S. (1992). Dirección de la salud. Macchi grupo editor S.A.  ',
      link: '',
    },
    {
      referencia:
        'Gavilondo Mariño, X.  Rodríguez Dopico, R, Muñoz Morejón, M., Vialart Vidal, M. y Mariño Weatheerly, M. (2016). ',
      link: '',
    },
    {
      referencia:
        'Normas Éticas para el manejo de Información en Salud. Revista Cubana de Informática Médica, 8(1), 152-157. ',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1684-18592016000100013&lng=es&tlng=es. ',
    },
    {
      referencia:
        'López Lemos, P. (2016). Herramientas para la mejora de la calidad: métodos para la mejora continua y la solución de problemas. FC Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/114213',
    },
    {
      referencia:
        'Oficina de Evaluación del PNUD. (2009). Manual de seguimiento y evaluación de resultados. B - PNUD. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/35075 ',
    },
    {
      referencia:
        'Quintero Uribe V. (1997). Evaluación de proyectos sociales, construcción de indicadores, tercera edición. Ingeniera gráfica. ',
      link: '',
    },
    {
      referencia: 'UNESCO. Ética de la información. ',
      link: 'https://es.unesco.org/themes/etica-informacion. ',
    },
    {
      referencia:
        'Zapata Gómez, A. (2012). Gestión de la calidad: hacia un modelo integrado de estándares. Editorial Universidad Nacional de Colombia. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/127952 ',
    },
    {
      referencia:
        'Zapata Gómez, A. (2015). Ciclo de la calidad PHVA. Editorial Universidad Nacional de Colombia. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/129837 ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Luz Adriana Cárdenas González',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Iván Uribe Ortiz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Davison Gaitán Escobar',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
