<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Tipos de informes de resultados
    
    .col-auto.mb-5(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-left") Los informes de resultados en el monitoreo turístico en Colombia permiten evaluar el desempeño de las estrategias implementadas y orientar la toma de decisiones. Existen diferentes tipos de informes, cada uno con una función específica:

    .row.justify-content-center(data-aos="flip-up")
      .tarjeta--container.row.mb-5
        .col-xl.col-md-6.tarjeta.color-primario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img02.svg', alt='Imagen decorativa')
            
          h4.text-center Informes parciales
          p.text-center Se elaboran en distintas etapas del monitoreo para proporcionar un análisis preliminar de los datos recolectados. Permiten realizar ajustes en tiempo real a las estrategias turísticas, facilitando una evaluación continua del proceso.

        .col-xl.col-md-6.tarjeta.color-secundario.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img03.svg', alt='Imagen decorativa')
            
          h4.text-center Informes finales
          p.text-center Presentan un análisis completo de los hallazgos obtenidos al término del monitoreo. Incluyen conclusiones, recomendaciones y sirven como base para la formulación de políticas y estrategias turísticas.

        .col-xl.col-md-6.tarjeta.color-acento-contenido.p-5
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6.col-md-6
              figure
                img(src='@/assets/curso/temas/tema6/img04.svg', alt='Imagen decorativa')
            
          h4.text-center Informes temáticos
          p.text-center Se centran en aspectos específicos del turismo, como el impacto ambiental, la sostenibilidad o la satisfacción del turista. Permiten profundizar en áreas clave y generar recomendaciones concretas.

    p.mb-0(data-aos="fade-left") Es fundamental que estos informes sean claros, estructurados y adaptados a las necesidades de los actores involucrados en la gestión del turismo en Colombia.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Estructura de un informe de monitoreo turístico

    p.mb-4(data-aos="fade-left") La estructura de un informe de monitoreo turístico en Colombia puede variar según el propósito del estudio y los lineamientos de la entidad que lo solicita. No obstante, existe un esquema comúnmente aceptado que facilita la presentación clara y organizada de la información. A continuación, se presentan los elementos clave del informe:
    .row.justify-content-center.mb-4
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img05.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Portada
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Título del informe.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Nombre del autor o autores.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Institución o entidad responsable.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Fecha de elaboración.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img06.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Resumen
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Síntesis del contenido del informe (150 - 250 palabras).
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Objetivo del monitoreo, metodología y principales hallazgos.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img07.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Introducción
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Contexto y justificación del estudio.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Objetivos del monitoreo (general y específicos).
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Alcance del informe.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img08.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Metodología
              ul.lista-ul
                li.mb-0 
                  i.fas.fa-angle-right
                  p.mb-0 Métodos empleados para la recopilación y análisis de datos.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Fuentes de información (primarias y secundarias).
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Técnicas de recolección de datos (encuestas, entrevistas, observación, análisis estadístico, etc.).
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Definición de la población y muestra estudiada.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img09.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Resultados
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Presentación de los hallazgos obtenidos.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Uso de gráficos, tablas y estadísticas para ilustrar la información.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img10.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Análisis y Discusión
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Interpretación de los resultados obtenidos.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Comparación con estudios previos o normativas existentes.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Identificación de tendencias, problemáticas o áreas de mejora.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img11.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Conclusiones y recomendaciones
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Resumen de los hallazgos más relevantes.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Reflexión sobre el estado del turismo en la zona analizada.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Propuestas para futuras investigaciones o acciones de mejora.
      .col-lg-6.col-sm-10.mb-3(data-aos="fade-right")
        .tarjeta.BG09.p-4.h-100
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema6/img12.svg' alt="Imagen decorativa")
            .col-lg-10
              .h4 Bibliografía
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Relación de fuentes consultadas, siguiendo las normas de citación vigentes (APA u otro formato requerido).
    p(data-aos="fade-left") Cada sección del informe debe adaptarse a los objetivos específicos del estudio y a los requisitos de la entidad que lo solicita. Además, es recomendable mantenerse actualizado sobre las directrices de citación y presentación para garantizar la validez y rigor del documento.
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Comunicación efectiva de los resultados a los actores clave
    
    p.mb-4(data-aos="fade-left") Para garantizar el impacto de los informes turísticos, es fundamental comunicarlos de manera efectiva a los actores clave del sector. Algunas estrategias incluyen:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-9.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 Identificación de actores clave:
              p.mb-0 Empresarios, agencias de viajes, autoridades locales, ONG y comunidades.
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 Adaptación del mensaje:
              p.mb-0 Uso de un lenguaje claro y accesible, evitando jerga técnica innecesaria.
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 Selección de canales de comunicación:
              p.mb-0 Informes escritos, presentaciones, reuniones, redes sociales y plataformas digitales.
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 Visualización de datos:
              p.mb-0 Uso de gráficos y tablas para facilitar la comprensión.
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 <em>Feedback</em> y participación:
              p.mb-0 Incentivar la retroalimentación de los actores clave y su participación activa en el proceso.
          .col-lg-4.col-sm-10.mb-4(data-aos="fade-right")
            .tarjeta.tarjeta--BG10.p-4.h-100
              h4 Seguimiento y evaluación:
              p.mb-0 Medir la efectividad de la comunicación mediante encuestas o reuniones de análisis.
      .col-lg-3.col-7.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema6/img13.png', alt='Imagen decorativa')
    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Recomendaciones basadas en el análisis de los informes

    p.mb-4(data-aos="fade-left") Las recomendaciones derivadas del análisis de los informes deben ser estructuradas y aplicables. Para ello, se sugiere seguir estos pasos:

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-4(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-2.order-2
              h3 Análisis de datos
              p Identificación de patrones, tendencias y áreas de mejora en indicadores clave del turismo (llegada de turistas, ocupación hotelera, ingresos, impacto ambiental, etc.).
            .col-lg-6.col-md-8.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-1
              figure
                img(src='@/assets/curso/temas/tema6/img14.png', alt='Imagen decorativa')

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-8.mb-3.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1
              figure
                img(src='@/assets/curso/temas/tema6/img15.png', alt='Imagen decorativa')
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2
              h3 Identificación de problemas y oportunidades
              p Determinar las problemáticas más críticas y las oportunidades para mejorar el sector.
            
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-2.order-2
              h3 Formulación de recomendaciones
              ul.lista-ul
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Específicas y medibles: con objetivos claros y posibilidad de evaluar su implementación.
                li.mb-0
                  i.fas.fa-angle-right
                  p.mb-0 Basadas en evidencia: fundamentadas en los hallazgos del análisis y estudios previos.
                li
                  i.fas.fa-angle-right
                  p.mb-0 Viables y realistas: considerando los recursos disponibles y la situación del sector.
            .col-lg-6.col-md-8.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-1.order-1
              figure
                img(src='@/assets/curso/temas/tema6/img16.png', alt='Imagen decorativa')
            
            
          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-8.order-lg-1.order-1.mb-lg-0.mb-4.order-md-1.order-1
              figure
                img(src='@/assets/curso/temas/tema6/img17.png', alt='Imagen decorativa')
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-2.order-2.order-md-2.order-2
              h3 Priorización de recomendaciones
              p Clasificación en función de su impacto y viabilidad.
            

          .row.justify-content-center.align-items-center
            .col-lg-6.col-md-8.col-12.mb-4.mb-md-0.order-lg-1.order-2.order-md-2.order-2
              h3 Presentación clara
              p Organización de las recomendaciones en un formato comprensible, con apoyo de tablas o gráficos si es necesario.
            .col-lg-6.col-md-8.col-8.order-lg-2.order-1.mb-lg-0.mb-4.order-md-1.order-1
              figure
                img(src='@/assets/curso/temas/tema6/img18.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") A partir del análisis de los informes de monitoreo turístico en Colombia, se pueden formular recomendaciones orientadas a mejorar la gestión del sector. Algunas de estas sugerencias incluyen:

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img19.svg", alt="alt").img90.m-auto
          h4.text-center Fomentar la capacitación de personal
          p.text-center.mb-0 Implementar programas de formación continua para el personal de servicios turísticos, con el fin de mejorar la calidad de la atención al cliente y fomentar la sostenibilidad.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img20.svg", alt="alt").img90.m-auto
          h4.text-center Desarrollo de infraestructura
          p.text-center.mb-0 Invertir en la mejora de la infraestructura turística en áreas menos desarrolladas para diversificar las opciones de destino y aumentar la competitividad.

      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad(data-aos="flip-left")
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/temas/tema6/img21.svg", alt="alt").img90.m-auto
          h4.text-center Promoción de destinos emergentes
          p.text-center.mb-0 Realizar campañas de <em>marketing</em> para promocionar destinos turísticos emergentes en Colombia, con énfasis en la cultura local y el ecoturismo.

    p(data-aos="fade-left") Con estos enfoques, se garantiza que los informes no solo informen, sino que también impulsen la mejora continua del turismo en Colombia.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
