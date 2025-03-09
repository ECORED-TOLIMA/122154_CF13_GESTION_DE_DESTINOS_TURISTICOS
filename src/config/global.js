export default {
  global: {
    Name: 'Indicadores de gestión turística',
    Description:
      'El monitoreo y seguimiento en gestión turística abarca conceptos, metodologías y herramientas para evaluar impactos y mejorar estrategias. Se distinguen tipos de indicadores, análisis de resultados y la importancia de informes efectivos. La retroalimentación y la mejora continua son cruciales para la sostenibilidad del destino, permitiendo gestionar riesgos y aprovechar oportunidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Monitoreo y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y fundamentos del monitoreo y seguimiento',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia del monitoreo en la gestión turística',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Diferencias entre monitoreo y evaluación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Buenas prácticas en monitoreo turístico',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías del monitoreo y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principales enfoques metodológicos en monitoreo turístico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Herramientas tecnológicas para el monitoreo en el sector turístico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Análisis comparativo de metodologías aplicadas a territorios turísticos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Ejemplos de aplicación práctica en destinos turísticos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores de gestión turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición y selección de indicadores clave',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Tipos de indicadores de gestión (económicos, sociales y ambientales)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Diseño de indicadores específicos para el territorio',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Cómo establecer metas e hitos medibles',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Impactos del monitoreo y seguimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de impactos positivos y negativos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Gestión de riesgos y oportunidades en base a los resultados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Relación entre monitoreo y toma de decisiones estratégicas',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Casos de estudio: evaluación de impactos en destinos turísticos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Técnicas de análisis de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Métodos cuantitativos y cualitativos para el análisis',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Interpretación de datos y tendencias',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Uso de <em>software</em> especializado para la gestión de resultados',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Evaluación de la efectividad de las estrategias turísticas',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Tipos de informes de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estructura de un informe de monitoreo turístico',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Comunicación efectiva de los resultados a los actores clave',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Recomendaciones basadas en el análisis de los informes',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Mejora continua y retroalimentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Incorporación de resultados en el ciclo de mejora continua',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Propuestas de ajustes y cambios en la estrategia turística',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Importancia de la retroalimentación para la sostenibilidad del destino',
            hash: 't_7_3',
          },
        ],
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
      tema: '3. Indicadores de gestión turística',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Indicadores [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=olkrrqKWp5E',
    },
    {
      tema: '5. Técnicas de análisis de resultados',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Técnicas para el análisis de datos [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pjTI4UOgkM8',
    },
    {
      tema: '7. Mejora continua y retroalimentación',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). La mejora continua en las organizaciones; generalidades [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Xv6z-0kyTtY',
    },
  ],
  glosario: [
    {
      termino: 'Desarrollo sostenible de destinos',
      significado:
        'modelo turístico que busca satisfacer las necesidades de los visitantes, la industria, el entorno y las comunidades anfitrionas, sin comprometer el medioambiente o la sociedad. Es una respuesta a los desafíos ambientales y sociales que enfrenta el planeta, y permite que las generaciones futuras puedan disfrutar de los mismos destinos.',
    },
    {
      termino: 'Efectividad de las estrategias turísticas',
      significado:
        'se refiere a la combinación de la eficiencia, la eficacia y la fidelización de los clientes. Esto debe contribuir a que se alcancen los objetivos, se obtengan los recursos necesarios y se satisfaga a los turistas.',
    },
    {
      termino: 'Enfoque de sostenibilidad',
      significado:
        'busca satisfacer las necesidades del presente sin comprometer la capacidad de las futuras generaciones para hacer lo mismo. Esto implica garantizar el equilibrio entre el crecimiento económico, el cuidado del medio ambiente y el bienestar social. La sostenibilidad se basa en la idea de que los recursos del medio ambiente no son ilimitados, por lo que es necesario preservarlos y usarlos de manera racional.',
    },
    {
      termino: 'Evaluación de impactos',
      significado:
        'es un tipo de evaluación que mide los cambios en el bienestar de las personas que se pueden atribuir a un programa o política. Su objetivo es responder a preguntas sobre causa y efecto, y conocer el impacto de un programa sobre un resultado de interés. Los resultados de la evaluación de impactos permiten obtener conclusiones, sobre la eficacia de un programa para resolver el problema al que está enfocado.',
    },
    {
      termino: 'Gestión turística',
      significado:
        'conjunto de procedimientos que se realizan para administrar la industria de viajes y hotelería, y lograr los objetivos de un destino turístico. Esto implica la planificación, coordinación, diseño, implementación y evaluación de programas y proyectos relacionados con el turismo, la gastronomía y la hospitalidad.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'es una expresión cuantitativa que se utiliza para medir el desempeño de un proceso, y que permite evaluar la eficacia con la que una empresa está logrando sus objetivos. Son también conocidos como indicadores clave de rendimiento (KPI en inglés), pueden ser internos o externos, cuantitativos o cualitativos.',
    },
    {
      termino: 'Indicadores de sostenibilidad',
      significado:
        'es una herramienta que se utiliza para medir el funcionamiento de una empresa en términos de sostenibilidad. Se trata de un factor que se puede medir y que contribuye a que un negocio sea sostenible.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'es una filosofía que consiste en analizar, identificar oportunidades y realizar cambios graduales en los procesos, productos y personal de una empresa. Su objetivo es mejorar la calidad y reducir el desperdicio.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'proceso continuo y sistemático mediante el cual se verifica la eficiencia y la eficacia de un proyecto mediante la identificación de sus logros y debilidades y en consecuencia, se recomiendan medidas correctivas para optimizar los resultados esperados del proyecto.',
    },
    {
      termino: 'Técnicas de análisis',
      significado:
        'herramientas que se utilizan para separar las partes de una realidad y conocer sus elementos fundamentales y relaciones. Se basan en un proceso planificado, sistemático y progresivo que utiliza la lógica y el análisis objetivo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bigné, E., & Andreu, L. (2004). Gestión turística de destinos. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Dangi, T., & Jamal, T. (2016). An integrated approach to sustainable tourism: The case of Bhutan. Tourism Management Perspectives, 18, 23-33.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2011). Sinergia: Sistema Nacional de Evaluación de Gestión y Resultados. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2014). Guía para el monitoreo de proyectos. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2016). Informe del Presidente al Congreso de la República 2016. DNP. ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Sinergia/Documentos/Informe_Presidente_al_Congreso_de_la_Republica_2016.pdf',
    },
    {
      referencia:
        'Gómez, L., & Pérez, J. (2019). Evaluación de la sostenibilidad en destinos turísticos emergentes. Revista de Turismo y Desarrollo, 10(1), 45-60.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2006). Dirección de Marketing (12.ª ed.). Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14585/mod_resource/content/1/libro%20direccion-de-marketing%28kotler-keller_2006%29.pdf',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2024). Guía técnica del manual de buenas prácticas en turismo responsable.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo de Colombia. (2022). Plan de desarrollo turístico sostenible 2022-2026.',
      link: '',
    },
    {
      referencia:
        'Observatorio de Desarrollo Económico. (2008). Metodologías de monitoreo y evaluación para proyectos de desarrollo. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial del Turismo (UNWTO). (2018). Measuring sustainable tourism: Developing a statistical framework for sustainable tourism. UNWTO Publications.',
      link: '',
    },
    {
      referencia:
        'Rainforest Alliance. (2005). Buenas prácticas para turismo sostenible. Fondo Multilateral de Inversiones, Banco Interamericano de Desarrollo y Ford Foundation.',
      link:
        'https://students.aiu.edu/submissions/profiles/resources/onlineBook/M8V3c8_tourism_practices_guide_spanish.pdf',
    },
    {
      referencia:
        'Torres, A., & González, J. (2019). Análisis de herramientas tecnológicas en el sector turístico en Colombia: Un enfoque a las redes sociales. Journal of Tourism Research, 12(2), 155-172.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General ',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Juan Carlos Camargo Solano',
          cargo: 'Experto temático',
          centro:
            'Centro Nacional de Hotelería, Turismo y Alimentos - Regional Distrito Capital',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñadora web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
}
