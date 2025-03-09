<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Mejora continua y retroalimentación

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        p La mejora continua en la gestión turística de Colombia es un proceso sistemático que busca optimizar las estrategias y prácticas del sector mediante la evaluación constante de indicadores clave. Este enfoque garantiza una mayor calidad en los servicios turísticos, mayor satisfacción del visitante y un impacto positivo en la economía local. La recopilación y análisis de datos permiten a las organizaciones identificar oportunidades de mejora, implementar cambios estratégicos y monitorear su efectividad.
        p En este contexto, la retroalimentación juega un papel fundamental, ya que proporciona información basada en la experiencia de turistas, comunidades y actores del sector. La integración de estos insumos en la toma de decisiones permite que la gestión turística evolucione en función de las necesidades del mercado y las tendencias emergentes. Además, este enfoque favorece la sostenibilidad del turismo, asegurando que el crecimiento del sector esté alineado con el bienestar de las comunidades locales y la preservación del entorno natural.
      .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema7/img01.svg', alt='Imagen decorativa')

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Incorporación de resultados en el ciclo de mejora continua

    p.mb-4(data-aos="fade-left") Para que la mejora continua sea efectiva, es fundamental integrar los resultados obtenidos en cada fase del ciclo de gestión turística. Este proceso incluye:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img02.svg' alt='AvatarTop')
          h4.text-center Definición de indicadores de gestión
          p Se establecen métricas claras y medibles relacionadas con satisfacción del cliente, ocupación hotelera, calidad del servicio y sostenibilidad.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img03.svg' alt='AvatarTop')
          h4.text-center Recolección de datos
          p Se implementan metodologías como encuestas, entrevistas y análisis de tendencias para obtener información precisa sobre el desempeño turístico.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img04.svg' alt='AvatarTop')
          h4.text-center Análisis de resultados
          p Se identifican patrones, fortalezas y áreas de mejora que permitan tomar decisiones fundamentadas.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img05.svg' alt='AvatarTop')
          h4.text-center Implementación de mejoras
          p Se aplican ajustes estratégicos, como optimización de infraestructuras, capacitación del personal y diversificación de la oferta turística.

        .tarjeta.tarjeta--BG07.p-4
          .row.justify-content-center.mb-3
            .col-lg-5.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema7/img06.svg' alt='AvatarTop')
          h4.text-center Evaluación y retroalimentación
          p Se monitorea el impacto de las acciones implementadas y se recoge retroalimentación de visitantes y actores del sector para ajustar las estrategias.

    p(data-aos="fade-left") Este enfoque permite una evolución constante de la gestión turística en Colombia, garantizando un servicio de alta calidad y promoviendo la competitividad del sector.

      
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Propuestas de ajustes y cambios en la estrategia turística

      
    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Importancia de la retroalimentación para la sostenibilidad del destino

      


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
