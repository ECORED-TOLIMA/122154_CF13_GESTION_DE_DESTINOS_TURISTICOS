<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Técnicas de análisis de resultados
    
    .col-auto.mb-4(data-aos="flip-up")
      figure
        img(src='@/assets/curso/temas/tema5/img01.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Para evaluar el desempeño y la efectividad de las políticas de gestión turística en Colombia, se emplean diversas técnicas de análisis. Estas permiten interpretar los indicadores del sector y facilitar la toma de decisiones estratégicas. A continuación, se presentan las principales metodologías utilizadas: 

    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img02.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h4 Análisis cuantitativo
              p Se basa en datos numéricos y herramientas estadísticas para medir el rendimiento del sector. Incluye métodos como análisis de varianza, regresión y análisis descriptivo.

      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img03.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h4 Análisis cualitativo
              p Examina las percepciones y experiencias de los actores turísticos mediante técnicas como entrevistas, grupos focales y análisis de contenido.

      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img04.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h4 <em>Benchmarking</em>
              p Compara los indicadores de gestión con los de otros destinos u organizaciones, identificando buenas prácticas y oportunidades de mejora.

      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img05.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h4 Análisis de tendencias
              p Observa la evolución de los datos a lo largo del tiempo para detectar patrones y prever cambios en el comportamiento del turismo.

      .col-lg-6.mb-3
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/img06.svg' alt='AvatarTop')
          .tarjeta.color2(style= "width: 100%")
            .p-4
              h4 Análisis SWOT (FODA)
              p Evalúa fortalezas, oportunidades, debilidades y amenazas del sector turístico en un contexto específico, proporcionando una visión integral para la planificación estratégica.

    p(data-aos="fade-left") El uso adecuado de estas técnicas permite obtener información valiosa para la gestión turística, facilitando la identificación de oportunidades de mejora y la implementación de estrategias más efectivas. Al integrar estos análisis en la toma de decisiones, se optimizan los recursos y se impulsa un desarrollo turístico más sostenible y competitivo.

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Métodos cuantitativos y cualitativos para el análisis

    p.mb-4(data-aos="fade-left") El análisis de los indicadores de gestión turística en Colombia puede realizarse mediante métodos cuantitativos y cualitativos, cada uno con enfoques y herramientas específicas para interpretar el desempeño del sector. A continuación, se describen ambos métodos y su aplicación en el turismo:
    
    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10.col-12
        ImagenInfograficaB.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema5/img07.svg', alt='Imagen decortiva')

          div(x="20%" y="44.9%" tooltip="Métodos cuantitativos" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Encuestas y cuestionarios</b>: se emplean para recolectar información de grandes grupos de turistas, operadores o residentes sobre aspectos como satisfacción, número de visitantes y gasto promedio.
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Análisis estadístico</b>: utiliza técnicas como regresión, correlación y análisis de series temporales para evaluar indicadores como el crecimiento del turismo y las tasas de ocupación hotelera.
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Modelos econométricos</b>: permiten predecir y evaluar el impacto de variables económicas y políticas en el sector turístico, facilitando la toma de decisiones estratégicas.

          div(x="78.9%" y="44.9%" tooltip="Métodos cualitativos" numero="+")
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Entrevistas y grupos focales</b>: recopilan opiniones y percepciones de turistas, empresarios y comunidades locales sobre la gestión turística y su impacto.
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Análisis documental</b>: implica la revisión de documentos estratégicos, informes de políticas turísticas y estudios de casos relacionados con el turismo en Colombia.
              li 
                i.fas.fa-angle-right
                p.mb-0(style="color: #fff") <b>Observación participante</b>: permite a los investigadores involucrarse en actividades turísticas para comprender mejor sus dinámicas y desafíos.

    .row.justify-content-center(data-aos="fade-left")
      .col-lg-10.col-12
        p.mb-4 Los indicadores cuantitativos incluyen estadísticas sobre la llegada de turistas internacionales, los ingresos generados por el turismo y las tasas de ocupación hotelera. Por otro lado, los indicadores cualitativos abarcan las percepciones de los residentes sobre el impacto del turismo, la evaluación de la sostenibilidad de las prácticas turísticas y los niveles de satisfacción de los visitantes con la oferta turística.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Interpretación de datos y tendencias
    
    p.mb-4(data-aos="fade-left") La interpretación de los datos y tendencias de los indicadores de gestión turística en Colombia requiere un análisis detallado de la información recopilada, considerando su contexto y su relación con los objetivos de desarrollo turístico del país. A continuación, se describen los pasos para la interpretación de datos y tendencias:

    .row.justify-content-center.align-items-center(data-aos="flip-up")
      .col-lg-10.col-12
        LineaTiempoE.color-acento-contenido.mb-5
          .row(titulo="01")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img08.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Definición de indicadores de gestión turística
                p.mb-0 Identificación de los indicadores clave para el análisis, como el número de visitantes, los ingresos por turismo, la sostenibilidad y la satisfacción del cliente.

          .row(titulo="02")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img09.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Recolección de datos
                p.mb-0 Obtención de información de fuentes confiables, como el Ministerio de Comercio, Industria y Turismo de Colombia, el DANE y organismos internacionales.

          .row(titulo="03")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img10.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Análisis cuantitativo y cualitativo
                p.mb-0 Aplicación de métodos estadísticos para identificar tendencias, incluyendo promedios, variaciones y correlaciones, complementados con un análisis cualitativo sobre políticas públicas, percepciones de los turistas e impactos sociales.

          .row(titulo="04")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img11.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Identificación de tendencias
                p.mb-0 Evaluación de los cambios a lo largo del tiempo para detectar patrones, como el aumento del turismo internacional o la estacionalidad en la demanda.

          .row(titulo="05")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img12.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Contextualización de resultados
                p.mb-0 Relación de los hallazgos con el contexto socioeconómico del país, las políticas implementadas y las transformaciones en la industria turística a nivel global.

          .row(titulo="06")
            .col-lg-2.mb-3.mb-lg-0.col-6
              figure
                img.img200(src='@/assets/curso/temas/tema5/img13.svg', alt='Imagen decorativa')
            .col-lg-10.mb-4.mb-lg-0
              h3 Conclusiones y recomendaciones
                p.mb-0 Síntesis de los principales hallazgos sobre la efectividad de las estrategias de gestión turística y formulación de recomendaciones basadas en los resultados.

    p(data-aos="fade-left") La interpretación de los datos no solo permite evaluar el desempeño del sector turístico, sino también anticipar desafíos y oportunidades para su desarrollo sostenible. Al identificar tendencias y patrones, es posible diseñar estrategias más eficaces que impulsen la competitividad del turismo en Colombia, fomenten la inversión y mejoren la experiencia de los visitantes. Además, una adecuada contextualización de los resultados contribuye a la formulación de políticas públicas que respondan a las necesidades del sector y promuevan un crecimiento equilibrado y responsable.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Uso de <em>software</em> especializado para la gestión de resultados

    p.mb-4(data-aos="fade-left") El uso de <em>software</em> especializado en la gestión de resultados en el sector turístico en Colombia, ha crecido significativamente en los últimos años. Estas herramientas permiten mejorar la eficiencia operativa, optimizar la experiencia del cliente y facilitar la toma de decisiones basadas en datos. A continuación, se presentan algunas de las principales aplicaciones de estos sistemas:

    .row.mb-4(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img14.svg' alt='AvatarTop')
        h4.text-center Sistemas de gestión de información
        p.text-center Permiten almacenar, procesar y analizar datos relacionados con reservas, atención al cliente y administración de recursos. Su implementación ayuda a mejorar la oferta de servicios y la satisfacción del cliente.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img15.svg' alt='AvatarTop')
        h4.text-center Análisis de datos
        p.text-center El uso de <em>software</em> analítico facilita la identificación de tendencias y patrones en el comportamiento de los turistas. Herramientas de Business Intelligence (BI) permiten a las empresas ajustar sus estrategias de marketing y optimizar sus servicios en función de la demanda.
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img16.svg' alt='AvatarTop')
        h4.text-center Gestión de Relaciones con Clientes (CRM)
        p.text-center Los sistemas de CRM ayudan a gestionar la interacción con los clientes a lo largo de su experiencia turística, desde la promoción de servicios hasta la fidelización. Esto resulta clave en un sector altamente competitivo.
      .col-md-6.col-lg.tarjeta--tabla1.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img17.svg' alt='AvatarTop')
        h4.text-center Plataformas de reservas y gestión de inventarios
        p.text-center Los sistemas de reservas en línea permiten a los turistas realizar sus reservas de manera eficiente, mientras que los sistemas de gestión de inventarios ayudan a controlar la disponibilidad de servicios y productos turísticos.

    p(data-aos="fade-left") El uso de estas herramientas no solo optimiza la gestión operativa y comercial, sino que también permite una toma de decisiones más estratégica y basada en datos. La integración con tecnologías emergentes como la inteligencia artificial y el Big Data representa una oportunidad para mejorar la sostenibilidad y la innovación en la industria turística en Colombia.
    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Evaluación de la efectividad de las estrategias turísticas

    p.mb-4(data-aos="fade-left") La evaluación de la efectividad de las estrategias turísticas en Colombia requiere un enfoque estructurado que permita analizar su impacto en el desarrollo del sector. Este proceso implica la identificación de estrategias implementadas, el uso de indicadores clave y la aplicación de metodologías de análisis para formular recomendaciones basadas en evidencia.

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-8.col-12.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row.mb-5(titulo="Estrategias implementadas en el turismo colombiano")
            .col-lg-12.mb-4.mb-md-0
              p Se han desarrollado diversas estrategias para fortalecer la industria turística, entre las que se destacan la promoción internacional con campañas como “Colombia, país de la belleza”, orientadas a atraer turistas extranjeros y mejorar la imagen del país. También se han realizado inversiones en transporte, alojamiento y conectividad para optimizar la experiencia del visitante y fortalecer la competitividad del sector. Además, se ha impulsado la diversificación de productos turísticos mediante el fomento de segmentos como el ecoturismo, el turismo cultural y el turismo de aventura, promoviendo destinos menos tradicionales y fomentando la sostenibilidad.
          .row.mb-5(titulo="Evaluación de la efectividad de las estrategias")
            .col-lg-12.mb-4.mb-md-0
              p Para determinar el impacto de estas estrategias, se emplean indicadores que permiten medir su éxito. Entre los cuantitativos se encuentran el crecimiento en el número de visitantes nacionales e internacionales, el gasto promedio por turista y la contribución del turismo al PIB, así como la generación de empleo en el sector. En cuanto a los cualitativos, se evalúa la percepción y satisfacción de los turistas, el impacto del turismo en la calidad de vida de las comunidades locales y el nivel de sostenibilidad en el desarrollo de proyectos turísticos.
          .row.mb-5(titulo="Análisis de indicadores y metodologías")
            .col-lg-12.mb-4.mb-md-0
              p El análisis de estos indicadores se realiza mediante metodologías mixtas, combinando estudios estadísticos con encuestas y entrevistas para obtener una visión integral del impacto de las estrategias. Se emplean herramientas de Business Intelligence (BI), análisis comparativo y estudios de caso para identificar tendencias y formular recomendaciones de mejora en la planificación y gestión turística.
          .row.mb-5(titulo="Desafíos en la evaluación de estrategias turísticas")
            .col-lg-12.mb-4.mb-md-0
              p La evaluación enfrenta diversos desafíos, como la disponibilidad y calidad de los datos turísticos, que pueden afectar la precisión del análisis. Asimismo, la estacionalidad y factores externos, como crisis económicas o sanitarias, pueden distorsionar los resultados. Finalmente, es fundamental garantizar que el crecimiento del sector sea sostenible y beneficie a las comunidades locales sin generar impactos negativos en el entorno.
      .col-lg-4.col-7.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema5/img18.png', alt='Imagen decorativa')


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
