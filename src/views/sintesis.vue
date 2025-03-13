<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se describe un enfoque general del componente formativo Indicadores de gestión turística, el cual aborda la importancia del monitoreo y seguimiento en la gestión de destinos, destacando sus fundamentos, diferencias con la evaluación y buenas prácticas para su aplicación. Asimismo, se presentan metodologías y herramientas tecnológicas utilizadas en el monitoreo turístico, junto con un análisis comparativo de enfoques aplicados a distintos territorios. Se profundiza en la definición y selección de indicadores clave, abarcando dimensiones económicas, sociales y ambientales, así como su diseño y establecimiento de metas medibles. También se exploran los impactos del monitoreo, su influencia en la toma de decisiones estratégicas y la gestión de riesgos y oportunidades. Además, se detallan técnicas de análisis de resultados, incluyendo métodos cuantitativos y cualitativos, interpretación de tendencias y uso de <em>software</em> especializado. Se analizan los tipos de informes de resultados, su estructura y estrategias para una comunicación efectiva con actores clave. Finalmente, se resalta la importancia de la mejora continua y la retroalimentación, enfatizando cómo la incorporación de resultados permite ajustar estrategias y fomentar la sostenibilidad del destino.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Indicadores de gestión turística, ofrece herramientas para el monitoreo y seguimiento de destinos, abordando metodologías, selección de indicadores clave y análisis de impactos. Se incluyen técnicas de interpretación de datos, elaboración de informes y estrategias de mejora continua, garantizando una gestión turística eficiente y sostenible.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
