<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-left") La gestión turística eficiente es un pilar fundamental para el desarrollo sostenible de los destinos y servicios turísticos. En este contexto, el uso de indicadores de gestión se establece como una herramienta esencial para medir, evaluar y optimizar el desempeño de las actividades turísticas. Estos indicadores permiten un análisis integral de las operaciones, facilitando la toma de decisiones basada en datos y garantizando la calidad y sostenibilidad de la oferta turística.

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.mb-3.order-lg-1.order-2
        .cajon-b.color-primario.p-3.mb-0
          p El monitoreo y el seguimiento constituyen elementos clave en esta gestión. A través de metodologías adecuadas, es posible recopilar información relevante sobre el progreso y la efectividad de las estrategias implementadas. Estas metodologías incluyen la recolección, análisis y comparación de datos con estándares establecidos, lo que permite identificar oportunidades de mejora y optimización dentro del sector turístico.
          p Los indicadores de gestión turística, como la ocupación hotelera, la satisfacción del visitante y el impacto económico, entre otros, permiten evaluar diversas dimensiones del turismo. Su aplicación efectiva facilita la identificación de tendencias, la evaluación de impactos y la implementación de medidas correctivas cuando sea necesario. Para ello, el análisis de resultados se realiza mediante técnicas especializadas que aseguran la precisión y relevancia de las conclusiones obtenidas.
      .col-lg-5.col-md-7.col-8.mb-3.order-lg-2.order-1.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img01.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.c2.color-secundario.p-4
          p Finalmente, la generación de informes y la retroalimentación continua desempeñan un papel fundamental en la mejora constante de la gestión turística. Los informes permiten comunicar los hallazgos de manera clara y estructurada, mientras que la retroalimentación fomenta la adaptación y el refinamiento de las estrategias. De esta manera, el ciclo de mejora continua contribuye a un desarrollo turístico más resiliente y sostenible, promoviendo experiencias de alta calidad para los visitantes y beneficios duraderos para las comunidades locales.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
