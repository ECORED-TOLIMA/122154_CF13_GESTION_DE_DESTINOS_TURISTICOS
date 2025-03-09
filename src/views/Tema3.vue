<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Indicadores de gestión turística
    
    .col-auto.mb-4(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Los indicadores de gestión turística en Colombia son herramientas clave para evaluar el desempeño del sector y optimizar la toma de decisiones. Su uso permite medir la eficacia de las estrategias implementadas, asignar recursos de manera eficiente y monitorear tendencias que impactan el desarrollo sostenible del turismo.
    p.mb-4(data-aos="fade-left") Entre los indicadores más utilizados se encuentran el número de turistas, la tasa de ocupación hotelera, el ingreso por turismo y la satisfacción del visitante. Estos datos no solo facilitan la planificación a nivel local y nacional, sino que también contribuyen a mejorar la competitividad de los destinos colombianos en el ámbito internacional.
    p.mb-4(data-aos="fade-left") La adopción de estándares internacionales en la medición de indicadores fortalece el posicionamiento de Colombia en el mercado turístico global. Tanto el sector público como el privado han integrado estos indicadores con un enfoque multidimensional, considerando aspectos económicos, sociales y ambientales. Esta perspectiva integral garantiza un turismo sostenible que beneficia a las comunidades locales y preserva el patrimonio natural y cultural del país.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.c2.color-secundario.p-4
          p En conclusión, los indicadores de gestión turística son herramientas esenciales para impulsar un turismo equilibrado y sostenible en Colombia. Su correcta implementación permite un crecimiento ordenado del sector, asegurando su viabilidad a largo plazo.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Definición y selección de indicadores clave

    p.mb-4(data-aos="fade-left") Los indicadores clave en el turismo son herramientas fundamentales para medir el impacto y el desempeño de la actividad turística en un destino. Su uso permite evaluar el crecimiento del sector, identificar oportunidades de mejora y orientar la toma de decisiones estratégicas.
    p.mb-4(data-aos="fade-left") Para que un indicador sea efectivo, debe ser medible, relevante y proporcionar información útil para la planificación turística. En Colombia, la selección de estos indicadores se basa en su capacidad para reflejar las dinámicas del sector y su contribución al desarrollo sostenible. Entre los más utilizados se encuentran:
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.c1.p-4
          .row.justify-content-center
            .col-lg-7.col-12.order-lg-1.order-2
              ul.lista-ul
                li 
                  i.lista-ul__vineta(style="color: #FFCE73")
                  p.mb-0 Número de llegadas de turistas internacionales, que permite medir la demanda y el posicionamiento del país como destino.
                li 
                  i.lista-ul__vineta(style="color: #FFCE73")
                  p.mb-0 Tasa de ocupación hotelera, que refleja la actividad del sector hotelero y la estacionalidad del turismo.
                li 
                  i.lista-ul__vineta(style="color: #FFCE73")
                  p.mb-0 Ingresos generados por el turismo, indicador clave para evaluar el impacto económico en la región.
                li 
                  i.lista-ul__vineta(style="color: #FFCE73")
                  p.mb-0 Satisfacción del turista, obtenida a través de encuestas para medir la percepción y calidad del servicio.
                li 
                  i.lista-ul__vineta(style="color: #FFCE73")
                  p.mb-0 Impacto ambiental del turismo, que analiza la sostenibilidad de las actividades turísticas en ecosistemas sensibles.
            .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img02.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") La selección de estos indicadores debe ser un proceso participativo, en el que intervengan el gobierno, las empresas del sector y las comunidades locales, garantizando que la información recopilada contribuya a un turismo responsable y competitivo.

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Tipos de indicadores de gestión (económicos, sociales y ambientales)
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Diseño de indicadores específicos para el territorio
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Cómo establecer metas e hitos medibles

</template>

<script>
export default {
  name: 'Tema3',
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
