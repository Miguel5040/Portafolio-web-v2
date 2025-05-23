import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      title1: "Miguel Alberto is a",
      title2: "web developer based",
      title3: "in Los Cabos, Mexico.",
      projects: "Projects:",
      aboutRole: "Full stack web developer",
      experienceEducation: "Experience and Education:",
      description1: "Software development professional with <1>proven experience</1> in creating efficient digital solutions, automating processes, and maintaining web systems and platforms.",
      description2: "A <1>hardworking and dedicated</1> person. If you're looking for someone with experience, dedication, and a results-oriented mindset, feel free to check my resume.<3>See my resume here.</3>",
      experience1: "Software developer in a construction company",
      education1: "4Geeks Academy Bootcamp Full Stack Web Development",
      dateExperience1: "MAY 2024 - Present",
      dateEducation1: "SEP 2023 - FEB 2024",
      introduction: {
        text1: "he loves ",
        text2: "coffee",
        text3: ", running in the morning",
        text4: "play online chess",
        text5: "and program websites! ",
        text6: "view his work below, or say hi via ",
        text7: " or ",
        text8: "email",
        responsiveText1: "Miguel Alberto is a web developer based in Los Cabos, Mexico. He loves ",
        responsiveText2: "coffee",
        responsiveText3: ", running in the morning ",
        responsiveText4: ", play online chess ",
        responsiveText5: "and program websites! View his work below, or say hi via ",
        responsiveText6: " or ",
        responsiveText7: "email",
      },
      projectsCards: {
        project1: {
          name: "Hidroequipos website",
          description: "Website for the construction and maintenance company of pools in Los Cabos Hidroequipos",
        },
        project2: {
          name: "System for exporting product catalog",
          description: "System to extract information from a database",
        },
        project3: {
          name: "DMC website (In development)",
          description: "Website for selling tours and activities in Los Cabos",
        },
        project4: {
          name: "Pet+",
          description: "Application to keep total control over your pets",
        }
      },



      title: "Product Catalog Export: How I Automated a Manual Process in Our Company",
      diagramCaption: "Export system diagram",
      intro: "At the office, we use CONTPAQi as the main system to manage various administrative and accounting processes, including warehouse control. There we have the entire product catalog registered: prices, stock, suppliers, etc. However, to work with this information practically, we have always used Excel.",
      problemTitle: "The Problem and Initial Obstacles",
      problem: "Updating that catalog was a completely manual process: we had to export the data from CONTPAQi, filter it, sort it in Excel, and then paste it into a shared file. <1>This process took about 20 minutes each time</1>, and was prone to manual errors.",
      obstacle: "When I started working on automation, the first big obstacle was discovering that CONTPAQi does not offer an official API to access its data. This complicated the process, as I couldn't simply query from an external application. After some research, I decided to go straight to the source: the SQL Server database. I developed a JavaScript script that connects to the database, extracts, sorts, and filters the data, generating a ready-to-use <1>productos.csv</1> file.",
      scriptCaption: "Script for catalog extraction",
      remoteTitle: "Solving Remote Access and Exposing the Service",
      remote: "Having the updated file was only part of the challenge. Another problem was remote access: that file was generated on the office's physical server, and we needed to access it from anywhere, even outside the local network.\n\nTo solve this, I created a Node.js server with Express, setting up a \"/productos\" endpoint that runs the script and responds with the updated file. To quickly expose this service externally, I used Visual Studio Code's native port forwarding, which allows opening the local port to the internet without complex configurations. Finally, I connected Excel directly to that endpoint so that, with a single click, we could consume the updated data.",
      serverCaption: "Node.js server with Express",
      resultsTitle: "Results and Benefits",
      results: "The process went from being slow and repetitive to almost instantaneous, eliminating manual errors and ensuring the information is always up to date. This project not only solved a practical day-to-day problem but also demonstrated the value of applying well-thought-out technological solutions to optimize internal processes, achieving a real and measurable impact on the workflow.",
      mainMenu: "Main menu",





      footerText: "Website designed with React, Tailwind, Vite and Framer motion. Professional portfolio. Design inspired by Ivette Felix Uy",
    }
  },

  es: {
    translation: {
      title1: "Miguel Alberto es un",
      title2: "desarrollador web ubicado",
      title3: "en Los Cabos, Mexico.",
      projects: "Proyectos:",
      experienceEducation: "Experiencia y Educación",
      aboutRole: "Desarrollador web Full stack",
      description1: "Profesional del desarrollo de software con <1>experiencia comprobada</1> en la creación de soluciones digitales eficientes, automatización de procesos y mantenimiento de sistemas y plataformas web.",
      description2: "Persona <1>trabajadora y dedicada</1>, si buscas un perfil con experiencia, dedicación y enfoque en resultados, te invito a consultar mi currículum.<3>Mira mi curriculum aquí.</3>",
      experience1: "Desarrollador de software en empresa constructora",
      education1: "4Geeks Academy Bootcamp Desarrollo web Full Stack",
      dateExperience1: "MAY 2024 - Actualidad",
      dateEducation1: "SEP 2023 - FEB 2024",
      introduction: {
        text1: "¡Le encanta el ",
        text2: "café",
        text3: ", salir a correr en la mañana",
        text4: "jugar ajedrez en linea",
        text5: "y desarrollar páginas web! ",
        text6: "Mándale un saludo por ",
        text7: " o ",
        text8: "correo electrónico",
        responsiveText1: "Miguel Alberto es un desarrollador web ubicado en Los Cabos, México. ¡Le encanta el ",
        responsiveText2: "café",
        responsiveText3: ", salir a correr en la mañana ",
        responsiveText4: "jugar ajedrez en linea ",
        responsiveText5: "y desarrollar paginas web!. Mándale un saludo por ",
        responsiveText6: " o ",
      },
      projectsCards: {
        project1: {
          name: "Pagina web Hidroequipos",
          description: "Pagina web para la constructora y mantenimiento de albercas de Los Cabos Hidroequipos",
        },
        project2: {
          name: "Sistema para exportacion de catalogo de productos",
          description: "Sistema para extraer informacion de una base de datos",
        },
        project3: {
          name: "Pagina web DMC (En desarrollo)",
          description: "Pagina web para venta de tours y actividades en Los Cabos",
        },
        project4: {
          name: "Pet+",
          description: "Aplicación para llevar un control total sobre tus mascotas",
        },
      },



      title: "Exportación del catálogo de productos: cómo automatize un proceso manual en nuestra empresa",
      diagramCaption: "Diagrama de sistema de exportacion",
      intro: "En la oficina usamos CONTPAQi como sistema principal para manejar varios procesos administrativos y contables, entre ellos el control del almacén. Ahí tenemos registrado todo el catálogo de productos: precios, existencias, proveedores, etc. Sin embargo, para trabajar esa información de manera práctica, siempre la hemos usado en Excel.",
      problemTitle: "El problema y los primeros obstáculos",
      problem: "Actualizar ese catálogo era un proceso completamente manual: había que exportar los datos desde CONTPAQi, filtrarlos, ordenarlos en Excel y luego pegarlos en un archivo compartido. <1> Este proceso consumía alrededor de 20 minutos cada vez </1>, además de estar expuesto a errores manuales.",
      obstacle: "Cuando comencé a trabajar en la automatización, el primer gran obstáculo fue descubrir que CONTPAQi no ofrece una API oficial para acceder a sus datos. Esto complicaba el proceso, ya que no podía simplemente hacer consultas desde una aplicación externa. Después de investigar, decidí ir directamente al origen: la base de datos SQL Server. Desarrollé un script en JavaScript que se conecta a la base, extrae, ordena y filtra los datos, generando un archivo <1>productos.csv</1> listo para usarse.",
      scriptCaption: "Script para extraccion de catalgo",
      remoteTitle: "Resolver el acceso remoto y exponer el servicio",
      remote: "Tener el archivo actualizado era solo parte del reto. Otro problema era el acceso remoto: ese archivo se generaba en el servidor físico de la oficina, y necesitábamos poder consumirlo desde cualquier lugar, incluso fuera de la red local.\n\nPara resolverlo, creé un servidor en Node.js con Express, configurando un endpoint \"/productos\" que ejecuta el script y responde con el archivo actualizado. Para exponer este servicio al exterior de manera rápida, utilicé el port forwarding nativo de Visual Studio Code, que permite abrir el puerto local a internet sin necesidad de configuraciones complejas. Finalmente, conecté Excel directamente a ese endpoint para que, con un solo clic, pudiera consumir los datos actualizados.",
      serverCaption: "Servidor Node.js con Express",
      resultsTitle: "Resultados y beneficios",
      results: "El proceso pasó de ser lento y repetitivo a casi instantáneo, eliminando errores manuales y asegurando que la información esté siempre actualizada. Este proyecto no solo resolvió un problema práctico del día a día, sino que demostró el valor de aplicar soluciones tecnológicas bien pensadas para optimizar procesos internos, logrando un impacto real y medible en el flujo de trabajo.",
      mainMenu: "Menu principal",


      footerText: "Página web diseñada con React, Tailwind, Vite y Framer motion. Portafolio profesional. Diseño inspirado en Ivette Felix Uy",
    }
  }
}

i18n
  .use(LanguageDetector) // Detects the user's language
  .use(initReactI18next)
  .init({
    resources,
    // lng: "es", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
