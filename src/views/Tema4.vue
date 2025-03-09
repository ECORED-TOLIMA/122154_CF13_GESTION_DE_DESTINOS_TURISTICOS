<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Impactos del monitoreo y seguimiento
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-7.col-12.order-lg-1.order-2
        p El monitoreo del turismo en Colombia es una herramienta clave para evaluar su impacto socioeconómico y ambiental. A través de la recolección de datos, encuestas y análisis de tendencias, es posible comprender el comportamiento de los turistas, sus preferencias y los efectos de la actividad turística en las comunidades locales. Esto permite a las autoridades y operadores turísticos diseñar estrategias que promuevan un desarrollo sostenible, maximizando los beneficios económicos y minimizando los impactos negativos sobre el entorno, la cultura y el bienestar de la población.
        p Además, el seguimiento continuo del sector facilita la evaluación de la efectividad de las políticas públicas y programas implementados. La recopilación de información actualizada permite ajustar estrategias para abordar desafíos como el turismo masivo, la degradación ambiental y la pérdida de identidad cultural. Asimismo, contribuye a mejorar la infraestructura y la calidad de los servicios turísticos, garantizando una experiencia más equitativa y sostenible. En este sentido, un enfoque basado en datos fortalece la competitividad del sector y fomenta un turismo más responsable y consciente, que respete los recursos naturales y las comunidades locales.
      .col-lg-5.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/img01.svg', alt='Imagen decorativa')

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Identificación de impactos positivos y negativos
    p.mb-4(data-aos="fade-left") El turismo en Colombia genera múltiples impactos que pueden ser positivos o negativos, dependiendo de la forma en que se gestione. Su desarrollo sostenible requiere un análisis detallado para maximizar los beneficios y mitigar los riesgos.
    p.mb-4(data-aos="fade-left") Entre los impactos positivos, destaca el crecimiento económico, ya que el turismo impulsa el empleo y la inversión en sectores como la hotelería, el transporte y el comercio. Regiones como Cartagena y Santa Marta han visto un incremento significativo en su Producto Interno Bruto (PIB) gracias a la llegada de turistas nacionales e internacionales. Asimismo, el desarrollo de infraestructura ha mejorado la conectividad y accesibilidad de diversos destinos. La modernización de aeropuertos, la construcción de carreteras y la ampliación de servicios turísticos no solo benefician a los visitantes, sino también a las comunidades locales.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img02.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Otro impacto positivo es la conservación del patrimonio, ya que la valorización de sitios turísticos fomenta la protección del medio ambiente y la preservación cultural. Destinos como el Parque Nacional Natural Tayrona han implementado estrategias de ecoturismo que contribuyen a la sostenibilidad de los recursos naturales, promoviendo un turismo responsable.
          br
          br
          | 

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .cajon.cajon.c1.p-4.p-md-5
          .row.justify-content-center
            .col-lg-9.col-12.order-lg-1.order-2
              p Otro aspecto negativo es el desplazamiento de comunidades. La expansión de proyectos turísticos, como la construcción de hoteles y complejos vacacionales, ha llevado en algunos casos a la reubicación de poblaciones locales, afectando su calidad de vida y su identidad cultural. En el Eje Cafetero, han surgido conflictos sociales debido a la transformación de tierras agrícolas en zonas turísticas.
              p Además, el turismo puede aumentar la inequidad social. Aunque genera empleos, muchos de ellos son informales o con condiciones laborales precarias, lo que impide que las comunidades receptoras se beneficien equitativamente del crecimiento del sector. En varias regiones turísticas, los ingresos derivados del turismo están concentrados en grandes empresas, dejando de lado a pequeños emprendedores y trabajadores locales.
              p Dado este panorama, resulta fundamental implementar estrategias que equilibren los beneficios económicos con la protección ambiental y el bienestar social. Un turismo sostenible permitirá que Colombia continúe aprovechando su potencial sin comprometer sus recursos naturales ni afectar a sus comunidades.
            .col-lg-3.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img03.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-left") Sin embargo, el turismo también presenta impactos negativos que requieren una gestión adecuada. Uno de los más preocupantes es la degradación ambiental, pues el crecimiento descontrolado de visitantes puede causar contaminación, erosión de playas y sobreexplotación de recursos naturales. En San Andrés, por ejemplo, el alto flujo de turistas ha generado problemas de conservación en sus ecosistemas marinos.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Gestión de riesgos y oportunidades en base a los resultados
    
    p.mb-4(data-aos="fade-left") La gestión de riesgos y oportunidades en el sector turístico de Colombia es esencial para garantizar su sostenibilidad y crecimiento. Este enfoque permite minimizar impactos negativos, fortalecer la resiliencia del sector y aprovechar ventajas competitivas. A continuación, se describen los principales aspectos de la gestión de riesgos y oportunidades:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Identificación de riesgos")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img04.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0 <b>Riesgos naturales</b>: desastres climáticos que afectan destinos turísticos.
              li 
                i.fas.fa-angle-right
                p.mb-0 <b>Riesgos de seguridad</b>: crimen organizado, conflictos sociales y problemas de orden público.
              li 
                i.fas.fa-angle-right
                p.mb-0 <b>Riesgos económicos</b>: fluctuaciones en la economía global que pueden reducir la demanda turística.

      .py-3.py-md-4(titulo="Evaluación de oportunidades")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img05.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0 Un riesgo como la vulnerabilidad ante desastres naturales puede ser una oportunidad para mejorar la infraestructura y fomentar prácticas turísticas sostenibles.
              li 
                i.fas.fa-angle-right
                p.mb-0 La inversión en seguridad y en la imagen del país puede aumentar la confianza de los viajeros y diversificar la oferta turística.

      .py-3.py-md-4(titulo="Planificación estratégica")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img06.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0 Desarrollo de políticas de seguridad turística.
              li 
                i.fas.fa-angle-right
                p.mb-0 Capacitación del personal del sector en gestión de crisis.
              li 
                i.fas.fa-angle-right
                p.mb-0 Diversificación de la oferta turística para reducir la dependencia de un solo mercado.
              li 
                i.fas.fa-angle-right
                p.mb-0 Estrategias de marketing para recuperar la confianza de los turistas tras eventos adversos.

      .py-3.py-md-4(titulo="Colaboración interinstitucional")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img07.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0 Coordinación entre el gobierno, las empresas turísticas y las comunidades locales.
              li 
                i.fas.fa-angle-right
                p.mb-0 Implementación de soluciones efectivas y sostenibles mediante el trabajo conjunto.
              li 
                i.fas.fa-angle-right
                p.mb-0 Respuesta eficiente ante emergencias y planificación a largo plazo.

      .py-3.py-md-4(titulo="Sostenibilidad como eje central")
        .row.justify-content-center.p-4
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img08.png', alt='Imagen decorativa')
          .col-lg-5.order-lg-1.order-2
            ul.lista-ul
              li 
                i.fas.fa-angle-right
                p.mb-0 Promoción de prácticas responsables para reducir el impacto ambiental del turismo.
              li 
                i.fas.fa-angle-right
                p.mb-0 Atracción de viajeros interesados en experiencias sostenibles y auténticas.
              li 
                i.fas.fa-angle-right
                p.mb-0 Fortalecimiento de la competitividad del sector en el mercado global.

    p(data-aos="fade-left") En conclusión, la gestión de riesgos y oportunidades en el turismo colombiano debe basarse en un enfoque preventivo, colaborativo y sostenible. Identificar amenazas, mitigar sus efectos y aprovechar oportunidades emergentes permitirá consolidar un turismo más resiliente y equilibrado, capaz de generar beneficios económicos sin comprometer el bienestar social y ambiental del país.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Relación entre monitoreo y toma de decisiones estratégicas

    .tarjeta.tarjeta--BG05.p-4.p-md-5.mb-4
      p.mb-5(data-aos="fade-left") El turismo en Colombia genera múltiples impactos que pueden ser positivos o negativos, dependiendo de la forma en que se gestione. Su desarrollo sostenible requiere un análisis detallado para maximizar los beneficios y mitigar los riesgos. 
      .row.justify-content-center
        .col-lg-10.col-12
          .row.justify-content-center
            .col-lg-6.col-12.order-lg-1.order-2
              p Entre los impactos positivos, destaca el crecimiento económico, ya que el turismo impulsa el empleo y la inversión en sectores como la hotelería, el transporte y el comercio. Regiones como Cartagena y Santa Marta han visto un incremento significativo en su Producto Interno Bruto (PIB) gracias a la llegada de turistas nacionales e internacionales. Asimismo, el desarrollo de infraestructura ha mejorado la conectividad y accesibilidad de diversos destinos. La modernización de aeropuertos, la construcción de carreteras y la ampliación de servicios turísticos no solo benefician a los visitantes, sino también a las comunidades locales.
              p Otro impacto positivo es la conservación del patrimonio, ya que la valorización de sitios turísticos fomenta la protección del medio ambiente y la preservación cultural. Destinos como el Parque Nacional Natural Tayrona han implementado estrategias de ecoturismo que contribuyen a la sostenibilidad de los recursos naturales, promoviendo un turismo responsable.
            .col-lg-6.col-md-8.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema4/img09.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade-left") Sin embargo, el turismo también presenta impactos negativos que requieren una gestión adecuada. Uno de los más preocupantes es la degradación ambiental, pues el crecimiento descontrolado de visitantes puede causar contaminación, erosión de playas y sobreexplotación de recursos naturales. En San Andrés, por ejemplo, el alto flujo de turistas ha generado problemas de conservación en sus ecosistemas marinos.
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Otro aspecto negativo es el desplazamiento de comunidades. La expansión de proyectos turísticos, como la construcción de hoteles y complejos vacacionales, ha llevado en algunos casos a la reubicación de poblaciones locales, afectando su calidad de vida y su identidad cultural. En el Eje Cafetero, han surgido conflictos sociales debido a la transformación de tierras agrícolas en zonas turísticas.
          br
          br
          | 
    p.mb-4(data-aos="fade-left") Además, el turismo puede aumentar la inequidad social. Aunque genera empleos, muchos de ellos son informales o con condiciones laborales precarias, lo que impide que las comunidades receptoras se beneficien equitativamente del crecimiento del sector. En varias regiones turísticas, los ingresos derivados del turismo están concentrados en grandes empresas, dejando de lado a pequeños emprendedores y trabajadores locales. 
    p(data-aos="fade-left") Dado este panorama, resulta fundamental implementar estrategias que equilibren los beneficios económicos con la protección ambiental y el bienestar social. Un turismo sostenible permitirá que Colombia continúe aprovechando su potencial sin comprometer sus recursos naturales ni afectar a sus comunidades. 

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Casos de estudio: evaluación de impactos en destinos turísticos

    p.mb-4(data-aos="fade-left") El análisis de casos de estudio permite comprender los diversos impactos que el turismo genera en diferentes destinos, abarcando dimensiones ambientales, económicas, sociales y culturales. A través de estos estudios, es posible identificar los principales desafíos y estrategias de mitigación implementadas para fomentar un turismo sostenible.
    p.mb-4(data-aos="fade-left") A continuación, se presentan algunos destinos turísticos y los impactos evaluados en cada uno:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span <em>Evaluación de impactos en destinos turísticos</em>
        .tabla-a.clstabla.color-acento-contenido
          table
            thead
              tr
                th(style= "width: 20%") Destino turístico
                th(style= "width: 40%") Impactos evaluados
                th(style= "width: 40%") Descripción Breve
            tbody
              tr
                td.text-bold(style="background-color: #fff") Cartagena
                td(style="background-color: #fff") Impactos ambientales
                td(style="background-color: #fff") Evaluación de la contaminación generada por cruceros y el manejo inadecuado de residuos sólidos.
              tr
                td.text-bold(style="background-color: #fff") San Andrés
                td(style="background-color: #fff") Impacto económico y social 
                td(style="background-color: #fff") Análisis de la presión turística sobre los recursos naturales y la economía local.
              tr
                td.text-bold(style="background-color: #fff") Parque Nacional Natural Tayrona
                td(style="background-color: #fff") Impacto ecológico
                td(style="background-color: #fff") Estudio del daño en ecosistemas sensibles por el turismo masivo y medidas de conservación implementadas.
              tr
                td.text-bold(style="background-color: #fff") Medellín
                td(style="background-color: #fff") Impacto cultural
                td(style="background-color: #fff") Efecto del turismo en la transformación de la identidad cultural y la gentrificación en barrios tradicionales.
              tr
                td.text-bold(style="background-color: #fff") Eje Cafetero
                td(style="background-color: #fff") Impacto económico
                td(style="background-color: #fff") Evaluación del crecimiento económico por el turismo rural y su relación con la agricultura tradicional.
              tr
                td.text-bold(style="background-color: #fff") Bogotá
                td(style="background-color: #fff") Impacto social y urbano
                td(style="background-color: #fff") Efectos del turismo en la movilidad urbana y los cambios en el uso del suelo en zonas turísticas.
              tr
                td.text-bold(style="background-color: #fff") Leticia (Amazonas)
                td(style="background-color: #fff") Impacto ambiental
                td(style="background-color: #fff") Evaluación de la sostenibilidad de las prácticas turísticas y su efecto sobre la biodiversidad local.
              tr
                td.text-bold(style="background-color: #fff") Caño Cristales
                td(style="background-color: #fff") Impacto ecológico y turístico
                td(style="background-color: #fff") Análisis del impacto del turismo controlado en el ecosistema y su regeneración natural.
              tr
                td.text-bold(style="background-color: #fff") Villa de Leyva
                td(style="background-color: #fff") Impacto patrimonial
                td(style="background-color: #fff") Efecto del turismo en la conservación del patrimonio arquitectónico y cultural.
              tr
                td.text-bold(style="background-color: #fff") Santa Marta
                td(style="background-color: #fff") Impacto social
                td(style="background-color: #fff") Estudio de los efectos del turismo en las comunidades locales y los conflictos por el acceso a recursos.
              tr
                td.text-bold(style="background-color: #fff") Costa Rica
                td(style="background-color: #fff") Impacto económico y ambiental
                td(style="background-color: #fff") Análisis del impacto del ecoturismo en parques nacionales.
              tr
                td.text-bold(style="background-color: #fff") Venecia
                td(style="background-color: #fff") Impacto social y urbano
                td(style="background-color: #fff") Evaluación de los efectos del turismo masivo sobre la infraestructura y la calidad de vida local.
              tr
                td.text-bold(style="background-color: #fff") Bali
                td(style="background-color: #fff") Impacto cultural
                td(style="background-color: #fff") Estudio sobre el impacto cultural y medioambiental del desarrollo turístico en Bali, Indonesia.
              tr
                td.text-bold(style="background-color: #fff") Gran Barrera de Coral
                td(style="background-color: #fff") Impacto ambiental
                td(style="background-color: #fff") Evaluación de los efectos del turismo en el ecosistema de la Gran Barrera de Coral, Australia.
              tr
                td.text-bold(style="background-color: #fff") Galápagos
                td(style="background-color: #fff") Impacto ambiental
                td(style="background-color: #fff") Análisis del impacto del turismo en el ecosistema único de las Islas Galápagos y las medidas de sostenibilidad implementadas.
              tr
                td.text-bold(style="background-color: #fff") Nueva Orleans
                td(style="background-color: #fff") Impacto social y ambiental
                td(style="background-color: #fff") Estudio sobre la recuperación del turismo tras el huracán Katrina y sus impactos en la comunidad.
              tr
                td.text-bold(style="background-color: #fff") Patagonia
                td(style="background-color: #fff") Impacto ambiental y económico
                td(style="background-color: #fff") Evaluación del impacto del turismo en la biodiversidad y la economía local en la Patagonia argentina.
              tr
                td.text-bold(style="background-color: #fff") Machu Picchu
                td(style="background-color: #fff") Impacto cultural y ambiental
                td(style="background-color: #fff") Análisis del impacto del turismo en la conservación del patrimonio cultural y natural en Machu Picchu, Perú.
              tr
                td.text-bold(style="background-color: #fff") Barcelona
                td(style="background-color: #fff") Impacto cultural y urbano
                td(style="background-color: #fff") Evaluación de los efectos de la urbanización y el turismo en la vida urbana y el patrimonio arquitectónico de Barcelona.
              tr
                td.text-bold(style="background-color: #fff") Antártida
                td(style="background-color: #fff") Impacto ambiental
                td(style="background-color: #fff") Estudio sobre los efectos del turismo en el ecosistema antártico y las políticas de gestión implementadas.
</template>

<script>
export default {
  name: 'Tema4',
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
