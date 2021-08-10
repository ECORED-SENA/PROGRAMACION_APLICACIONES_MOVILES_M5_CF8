export default {
  global: {
    componenteFormativo: 'Instalador y despliegue de la aplicación móvil',
    descripcionCurso:
      'En este componente, el aprendiz conocerá parámetros de desarrollo y ejecución de una <i>app</i> móvil. Estudiará elementos que aseguren la calidad del montaje y despliegue de la <i>app</i>, identificando, además, fallas e inconsistencias del proceso de desarrollo y funcionamiento. Sabrá definir acciones correctivas y pruebas pertinentes para ofrecer una <i>app</i> útil, segura y acorde a necesidades de organizaciones o del mercado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Calidad en desarrollo de <i>apps</i> móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Norma ISO 29119',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de pruebas de <i>software</i>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Pruebas de calidad de <i>software</i>',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Etapas para realizar pruebas de <i>software</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para pruebas de <i>apps</i> móviles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Validación de lineamientos para envió a las <i>app stores</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<i>Google Play</i>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<i>App Store</i>',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'Hesham, A. y Shakeel, A. (2018). Overview of Software Testing Standard ISO/IEC/IEEE 29119. International Journal of Computer Science and Network Security, 18(2), p. 112-116.',
      link:
        'https://www.researchgate.net/profile/Shakeel-Ahmed-46/publication/323759544_Overview_of_Software_Testing_Standard_ISOIECIEEE_29119/links/5e5923c84585152ce8f64d83/Overview-of-Software-Testing-Standard-ISO-IEC-IEEE-29119.pdf',
    },
    {
      referencia:
        'Bolaños, D., Sierra, A., y Alarcón, M. (2008). Pruebas de Software y JUnit. Pearson Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Correa, M. (2013). Composición del sistema operativo móvil IOS de Apple y el hardware y software que lo utilizan. Universidad Católica de Pereira.',
      link:
        'https://docplayer.es/1521033-Composicion-del-sistema-operativo-movil-ios-de-apple-y-el-hardware-y-software-que-lo-utilizan-melissa-correa-rios.html',
    },
    {
      referencia: 'ISO 25000. (s. f.). ISO/IEC 25040.',
      link: 'https://iso25000.com/index.php/normas-iso-25000/iso-25040?start=3',
    },
    {
      referencia:
        'Minguet, J. y Cueva, J. (2003). La calidad del software y su medida. Editorial Universitaria Ramón Areces.',
      link:
        'http://www.monografias.com/trabajos59/calidad-software/calidad-software.shtml',
    },
    {
      referencia:
        'Noriega, D., Gabino, N. y Hernández, C. (2007). Calidad de Software. Universidad de Matanzas "Camilo Cienfuegos"',
      link:
        'http://www.monografias.com/trabajos59/calidad-software/calidad-software.shtml',
    },
    {
      referencia:
        'Puglla, G. (2017). Marco de trabajo para control de calidad en el desarrollo de aplicaciones móviles bajo metodologías ágiles. Universidad Técnica Particular de Loja.',
      link:
        'https://docplayer.es/91113144-Universidad-tecnica-particular-de-loja-la-universidad-catolica-de-loja-area-tecnica.html',
    },
    {
      referencia:
        'Victoria, I. y Ramírez, F.  (2017). Definición de un proceso de pruebas para pequeñas organizaciones que desarrollan aplicaciones para móviles. Universidad del Cauca. ',
      link:
        'http://repositorio.unicauca.edu.co:8080/bitstream/handle/123456789/1743/DEFINICI%C3%93N%20DE%20UN%20PROCESO%20DE%20PRUEBAS%20PARA%20PEQUE%C3%91AS%20ORGANIZACIONES%20QUE%20%20DESARROLLAN%20APLICACIONES%20PARA%20M%C3%93VILES.pdf?sequence=1&isAllowed=y ',
    },
  ],
  glosario: [
    {
      termino: 'APK',
      significado:
        'Es el formato de una aplicación desarrollada exclusivamente para el sistema operativo de <i>Google, Android. APK</i> es el acrónimo de <i>Android Application Package</i> y, en comparación, es como los archivos <i>.EXE</i> en <i>Windows</i>.',
    },
    {
      termino: 'ASO',
      significado:
        'Proceso de optimizar aplicaciones móviles para tener una posición más alta en las tiendas y es descrito frecuentemente como el <i>SEO</i> de las <i>apps</i>. Es  el proceso de optimización para lograr una aceleración en la visibilidad de la aplicación e incrementar descargas.',
    },
    {
      termino: 'Backup',
      significado:
        'Es una copia de seguridad o una copia de respaldo que se realiza sobre los datos originales, con el fin de contar con un elemento que permita la recuperación de los datos, en caso de su pérdida.',
    },
    {
      termino: 'ISO',
      significado:
        'Es la Organización Internacional de Normalización, una institución encargada de la creación de estándares internacionales, compuesta por diversas organizaciones nacionales de normalización.',
    },
    {
      termino: 'Soportabilidad',
      significado:
        'También se puede encontrar como "portabilidad" es una de las definiciones utilizadas en programación de alto nivel. Se define como la característica que posee un <i>software</i> para ejecutarse en diferentes plataformas.',
    },
  ],
  complementario: [
    {
      texto:
        'Tech Community Day. (2020, 13 junio). Guillermo Zepeda - Despliegue de Aplicaciones Móviles con AppCenter [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SC1sRe3h-Qs',
    },
    {
      texto:
        'Moure, B. [MoureDev by Brais Moure]. (2019, 24 octubre). APP STORE 📲 Cómo PUBLICAR tu primera APP | Tutorial Español | MoureDev [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tg6YcD52jNA',
    },
    {
      texto:
        'Luján, E. D. [EDteam]. (2020, 16 junio). ¿Cómo subir tu app a la Play Store? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EOkKc1Oc92M',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Experto temático',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador Instruccional',
        centro: 'Centro de Gestión Industrial – Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle Ovalle',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
