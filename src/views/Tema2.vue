<template lang="pug">
.curso-main-container.pb-3.tema2
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de gestión de calidad

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema2/1.png')

      .col-8
        p.mb-5 Antes de indagar los aspectos generales del Sistema De Gestión de Calidad (SGC), es importante dar el concepto de sistema de gestión, el cual es definido como un conjunto de componentes que tienen impacto a nivel decisional, funcional y operativo que actúan de manera conjunta para dar cumplimiento a los objetivos empresariales.
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.align-items-center 
            .col-4
              img(src='@/assets/curso/temas/tema2/2.svg')
            .col-8
              p Dentro del sistema de gestión se ven inmersos procesos que se ejecutan en todos los niveles de la organización tanto a nivel operativo, táctico y estratégico:
              .row
                .col-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Planeación.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | 	Organización.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | 	Puesta en marcha.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | 	Seguimiento.
                   
    p(data-aos="fade-right").mb-5 Ahora se puede realizar la revisión del concepto asociado a los sistemas de gestión de la calidad, los cuales se definen como el grupo de elementos relacionados entre sí enfocados en lograr la meta de calidad ya sea de un servicio o un producto. El sistema de gestión nace de la interacción que existe entre los recursos con los que se cuentan dentro de la organización, los procesos estratégicos, misionales y de apoyo, las políticas y los objetivos estratégicos. El sistema de gestión de la calidad tiene propósitos claves: 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Mejorar los procesos.
          br
          li 
            i.fas.fa-circle
            | Reducir los costos de no calidad. 
          br
          li 
            i.fas.fa-circle
            | Conocer las oportunidades de capacitación.
          br
          li 
            i.fas.fa-circle
            | Sumar al personal a las actividades empresariales. 
          br
          li 
            i.fas.fa-circle
            | Estructurar los objetivos estratégicos de la organización. 

    p(data-aos="fade-right").mb-5 Así mismo los beneficios más relevantes del SGC a considerar son: 

    .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
      .row.justify-content-center.align-items-center
        .col-2
          img(src='@/assets/curso/temas/tema2/4.svg')

        .col-10
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	Satisfacer las necesidades del cliente, lo cual favorece la confianza en la organización. 
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	Satisfacer las necesidades de la organización, lo cual favorece el cumplimiento de las regulaciones organizacionales y la generación de productos y servicios de la manera más eficiente respecto a los costos y recursos, favoreciendo la expansión, el crecimiento y la obtención de ganancias.

    p(data-aos="fade-right").mb-5 En el marco de las normas ISO, los sistemas de gestión se enfocan en diversas líneas, dentro de las cuales se destacan: 

    .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
      .row.justify-content-center.align-items-center
        .col-2
          img(src='@/assets/curso/temas/tema2/5.svg')

        .col-10
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	#[b Sistema de Gestión de la Calidad:] ISO 9000, ISO 9001; en esta última se encuentran condensados el SGC, la responsabilidad de la dirección, la administración de los recursos, la realización del producto, la medición, el análisis y la mejora. 
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	#[b Sistema de gestión ambiental:] ISO 14000, ISO 14001. 
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	#[b Sistema de gestión en seguridad y salud ocupacional:] OHSAS 18000, OHSAS 18001:2007. 

    p(data-aos="fade-right").mb-5 Para que el SGC se dé adecuadamente debe existir una adecuada interacción entre varios elementos. A continuación, se describen los aspectos más importantes de cada uno de ellos, los cuales se deben interrelacionar para que el SGC sea efectivo:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Estrategia
            p Es indispensable que se estructuren las políticas, objetivos y lineamientos para alcanzar la calidad y por ende satisfacción del cliente interno y externo. Todas las políticas deben estar alineadas con los objetivos estratégicos generales de la institución.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/6.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Procesos
            p Se deben definir claramente los procesos misionales, estratégicos y de apoyo. Así mismo se deben organizar en el debido orden los procedimientos, actividades y tareas que hacen parte de cada proceso para la debida obtención del producto o entrega del servicio proyectado. Es importante tener en cuenta elementos básicos para el seguimiento y control de cada uno de los procesos definidos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Recursos
            p Dentro de los recursos que se debe tener en cuenta para operativizar el SGC está: humanos, económicos, de infraestructura, conocimientos y habilidades del personal.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Estructura
            p Es indispensable concretar y estructurar las diversas responsabilidades, lineamientos de autoridad y flujo de la comunicación entre las áreas de la organización.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/9.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Documentos
            p Se deben definir con claridad los procedimientos, los documentos, los formularios, los registros y demás documentación necesaria para la ejecución eficaz y eficiente de los procesos y por tanto de la organización.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/10.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 Ampliando la clasificación de los recursos, se puede indicar:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Humanos
            p Se constituyen en el elemento indispensable dentro de la gestión empresarial. Deben contar con los conocimientos, experiencia, habilidad y destrezas que ayudan en la operativización de los procesos acorde con las capacidades y habilidades que requiere el puesto de trabajo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/11.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Económicos
            p Dan garantía del soporte financiero que se requiere para alcanzar los objetivos estratégicos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/12.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Infraestructura y equipos
            p Incluyen todas las instalaciones, equipos, hardware-software y demás elementos necesarios para dar gestión a las actividades estratégicas planeadas. Toda la infraestructura y los equipos deben corresponder con el tamaño de la empresa y con los objetivos estratégicos.
            p Lo que corresponde con infraestructura y equipos debe contar con un elemento clave denominado mantenimiento, el cual debe realizarse preventivamente o como método de corrección.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/13.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Conocimiento y la experiencia
            p Estos activos son considerados intangibles. El conocimiento y la experiencia se adquieren durante el transcurso del tiempo por medio de la especialización de las prácticas y los procesos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/14.png', alt='Texto que describa la imagen')

    .row.justify-content-center 
      .col-10
        .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/15.svg')

            .col-10
              p Para lograr un adecuado SGC es indispensable contar varios elementos dentro de los cuales se destacan:
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Estándares de calidad.
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Técnicas para la evaluación.
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Seguimiento.

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Estándares de calidad

    p(data-aos="fade-right") Los estándares de calidad son definidos como los puntos de referencia los cuales debe cumplir un servicio o un producto con el fin de cumplir con las expectativas exigidas por el cliente o en otros escenarios por las exigencias exigidas en la norma. El estándar de calidad se caracteriza por ser el parámetro de evaluación de la calidad esperada. 
    p(data-aos="fade-right").mb-5 Dentro de los estándares de calidad se puede visualizar el nivel máximo aceptable de calidad en el marco de una acción, una actividad, un programa o un servicio con el fin de obtener excelencia en los procesos. En los tipos de estándares de calidad se pueden distinguir aquellos que están enfocados en: 

    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/16.svg')

            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	La calidad de los insumos y los productos. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	La calidad de los procesos. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	La calidad del servicio. 

    p(data-aos="fade-right").mb-5 Dentro de los estándares de calidad es importante tener en cuenta los estándares de calidad en el marco del Sistema Obligatorio Garantía de la Calidad SOGC, de la inspección, vigilancia y control sanitario y los estándares de calidad para certificación institucional más conocidos como las normas ISO.   

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Técnicas para la evaluación y seguimiento

    p(data-aos="fade-right").mb-5 Las acciones de seguimiento y evaluación favorecen la eficacia en los procesos al tener una vinculación clara entre las intervenciones pasadas, presentes y futuras acorde con los resultados. La evaluación y el seguimiento ayudan a que la organización pueda obtener la información pertinente con el fin de realizar ajustes, orientación y planificación de nuevas estrategias en pro de garantizar el cumplimiento de los objetivos expuestos. Dentro de los propósitos generales de la evaluación y el seguimiento se encuentran:

    .row.justify-content-center.mb-5 
      .col-10
        .tarjeta.color-secundario2.p-4(style="border-radius:0")
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/17.svg')

            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Mejorar el desempeño y obtener los resultados deseados. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Realizar la medición y el análisis del desempeño. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Fortalecer el aprendizaje organizacional. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Garantizar la correcta toma de decisiones teniendo en cuenta la información obtenida. 
    p(data-aos="fade-right").mb-5 En tal sentido, es importante describir algunos conceptos relacionados con evaluación y seguimiento:

    .row.justify-content-center.mb-5
      .col-3
        img(src='@/assets/curso/temas/tema2/18.png').mb-5
        h3 Seguimiento
        p Es una acción continua que tiene como objetivo principal dar la información necesaria a la organización para realizar las intervenciones que sean necesarias para procurar el cumplimiento de las acciones establecidas.
      .col-3
        img(src='@/assets/curso/temas/tema2/19.png').mb-5
        h3 Evaluación
        p Es la acción para evaluar de manera sistemática y objetiva el logro hacia las metas definidas a nivel organizacional.
      .col-3
        img(src='@/assets/curso/temas/tema2/20.png').mb-5
        h3 Retroalimentación
        p Se define como un proceso por medio del cual se divulga la información que se requiere para determinar los resultados del seguimiento y la evaluación realizada a los procesos.
      .col-3
        img(src='@/assets/curso/temas/tema2/21.png').mb-5
        h3 Control
        p Es considerado como una función administrativa la cual ayuda a evaluar en rendimiento. Acorde con lo expuesto por Melinkoff (1990), el control permite verificar si todo se realiza acorde con lo planeado y a los objetivos estratégicos definidos.

    p(data-aos="fade-right").mb-5 En lo relacionado al control, se debe precisar que su objetivo principal es identificar las faltas y los errores para realizar las respectivas correcciones y prevenir la repetición de las desviaciones presentadas. Para ejecutar las acciones de control, es necesario implementarlo teniendo en cuenta 2 elementos:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b 1) Momento de ejecución:] incluye los siguientes tipos de control:
        br
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	#[b Precontrol o control preliminar:] orientado hacia el futuro, es decir, a la prevención de los problemas antes que ocurran. Es realizado al inicio de las actividades y garantiza sus acciones por medio de las políticas, procedimientos y reglas. 
          br
          li 
            i.fas.fa-circle
            |	#[b Control concurrente o coincidente:] se realiza durante la ejecución de las actividades y tiene como elementos claves la dirección y vigilancia de todas las actividades con el fin de garantizar el cumplimiento de las políticas, procedimientos y demás lineamientos previamente establecidos. 
          br
          li 
            i.fas.fa-circle
            |	#[b Postcontrol o control por retroalimentación:] se realiza posterior a la ejecución de las actividades establecidas, por tanto, se enfoca en los resultados y sugiere las acciones correctivas necesarias con el fin de evitar se vuelvan a presentar las desviaciones.


    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p #[b 2) Función:] acorde con la función realizada en las acciones de control, se pueden distinguir:
        br
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	#[b Control de gestión:] es transversal a la institución, permite comparar los resultados obtenidos con los objetivos estratégicos proyectados, en un período determinado de tiempo, utilizando indicadores de gestión.

    p(data-aos="fade-right").mb-5 Los #[b indicadores de gestión], son aquellos que permiten medir cuantitativamente el comportamiento y el desempeño de los procesos y son comparados con puntos de referencia para evaluar las posibles desviaciones y así implementar las acciones que sean necesarias, ya sean correctivas o preventivas. En términos generales permiten evaluar la planeación estratégica y así mismo conocer el estado de implementación de la misión y la visión; así mismo permiten evaluar el desempeño de las áreas y también el individual de los colaboradores internos. Los beneficios de su implementación son: 

    .row.justify-content-center 
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/24.svg')
            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Aportar información relevante para la toma de decisiones. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Visualizar la eficiencia de las acciones de la empresa. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Favorecer la identificación de problemas presentes y aquellos que se puedan presentar a futuro. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Los tres (3) tipos de indicadores de gestión pueden ser: 
        br
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	#[b Internos y externos:] permiten valorar el impacto de las acciones organizacionales a nivel externo e interno. 
          br
          li 
            i.fas.fa-circle
            |	#[b Cuantitativos y cualitativos:] permiten medir con valores numéricos (cuantitativo) y por medio de percepciones de tipo subjetiva (cualitativos) la gestión organizacional. 
          br
          li 
            i.fas.fa-circle
            |	#[b De eficiencia y eficacia:] permiten medir el funcionamiento (eficacia) y el uso racional de los recursos (eficiencia) de los procesos organizacionales.

    .row.justify-content-center 
      .col-10
        .row.justify-content-center 
          .col-6
            p Estos últimos (eficiencia y eficacia), se conocen como:
            .row 
              .col-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    |	Seguimiento.
                  li 
                    i.fas.fa-circle
                    |	Control.
                  li 
                    i.fas.fa-circle
                    |	Monitoreo.
                  li 
                    i.fas.fa-circle
                    |	Actividades.
              .col-6
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle
                    | Tareas.
                  li 
                    i.fas.fa-circle
                    | Metas.
                  li 
                    i.fas.fa-circle
                    | Progresos.
                  li 
                    i.fas.fa-circle
                    | Procesos.
          .col-6
            img(src='@/assets/curso/temas/tema2/26.png')

    p(data-aos="fade-right").mb-5 Los cuales pertenecen al subsistema denominado de seguimiento que permite evaluar el uso de los recursos durante la ejecución de los diversos planes, programas y proyectos organizacionales. Los indicadores de gestión ayudan a evaluar la productividad física de los insumos que se utilizan en los procesos organizacionales de la siguiente manera: 

    .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-3
              img(src='@/assets/curso/temas/tema2/27.svg')

            .col-9
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Uso de los recursos humanos, financieros y físicos. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Evaluar la dimensión del tiempo. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Corroborar el cumplimiento de las tareas, actividades y metas. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Valorar el rendimiento físico denominado productividad, el cual se logra evaluar calculando el resultado de los logros y los recursos que fueron utilizados. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Conocer el costo promedio de las acciones realizadas. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Dar el resultado del grado de eficiencia. 

    p(data-aos="fade-right").mb-5 #[b Los indicadores de logro] o eficacia son también conocidos como indicadores de impacto, de objetivos, de éxito; pertenecen al subsistema denominado de evaluación que permite evaluar los cambios en las variables de tipo socioeconómico generadas en las acciones organizacionales. Estos indicadores se basan en los objetivos o metas formuladas y los logros obtenidos. Por lo general existen cuatro (4) tipos de indicadores de eficacia los cuales apuntan a: 

    .row.justify-content-center 
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/28.svg')
            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Indicadores de impacto / logros a largo plazo.  
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Indicadores de efecto / logros a mediano plazo. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Indicadores de resultados/ logros a corto plazo. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Indicadores de producto / logros inmediatos 
    
    p(data-aos="fade-right").mb-5 A nivel general los indicadores se pueden resumir de la siguiente manera: 

    .row.justify-content-center.align-items-center.mb-5
      .col-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Presentación de indicadores</em>
        .tabla-a.color-acento-contenido
          table.text-center
            caption Nota. Evaluación de proyectos sociales. Quintero (1997). 
            thead
              tr
                th(colspan="6") Objetivo
              tr
                td(style="background-color:#F6F6F6")(colspan="6") #[b Variable]
              tr
                th(colspan="6") Indicador
            tbody
              tr(style="background-color:#F6F6F6")
                td(colspan="3") De gestión
                td(colspan="3") De logro
              tr(style="background-color:#F6F6F6")
                td(colspan="3") Actividades
                td(colspan="3") Impacto
              tr(style="background-color:#F6F6F6")
                td(colspan="3") Recursos
                td(colspan="3") Efecto
              tr(style="background-color:#F6F6F6")
                td(colspan="3") Tiempo
                td(colspan="3") Resultado
              tr(style="background-color:#F6F6F6")
                td(colspan="3") Presupuesto
                td(colspan="3") Producto
            thead
              tr
                th(colspan="2") #[em Status] y/o estándares
                th(colspan="2") Metas
                th(colspan="2") Logros y opiniones

    p(data-aos="fade-right").mb-5 Adicional a la comprensión respecto a los tipos de indicadores que se pueden tener dentro de la estructura organizacional es importante conocer cómo se construyen y qué elementos los componen: 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Componentes de un indicador 

    .tarjeta.color-secundario2.p-4.mb-5
      .row.justify-content-center 
        .col-auto
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                span Nombre-descriptor 
                  span
                    i.fas.fa-clone
                .indicador--click(v-if="mostrarIndicador")
          
          ModalA(:abrir-modal.sync="modal1")
            .BGIMG03.p-4.p-md-5
              .row.align-items-center
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/30.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h4 Nombre-descriptor
                  .titulo-segundo.color-acento-contenido
                  p Corresponde con la expresión verbal del patrón de evaluación el cual se personifica y se singulariza.
                  p #[b Ejemplo:] recursos humanos para la gestión ambiental. 
        .col-auto
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                span Atributo 
                  span
                    i.fas.fa-clone
                .indicador--click(v-if="mostrarIndicador")
          
          ModalA(:abrir-modal.sync="modal2")
            .BGIMG03.p-4.p-md-5
              .row.align-items-center
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/31.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h4 Atributo
                  .titulo-segundo.color-acento-contenido
                  p Calidad o cualidad del indicador.
                  p #[b Ejemplo:] recursos humanos para la gestión ambiental según el grado de escolaridad. 
        .col-auto
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                span Unidad de medida 
                  span
                    i.fas.fa-clone
                .indicador--click(v-if="mostrarIndicador")
          
          ModalA(:abrir-modal.sync="modal3")
            .BGIMG03.p-4.p-md-5
              .row.align-items-center
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/32.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h4 Unidad de medida
                  .titulo-segundo.color-acento-contenido
                  p Es la que determina con qué unidad se formula el indicador. Puede darse en kilogramo, pesos, metros, habitantes, días, entre otros.
                  p #[b Ejemplo:] porcentaje del recurso humano para la gestión ambiental con grado de especialización.
        .col-auto
          .row
            .col-auto
              a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                span Unidad operacional 
                  span
                    i.fas.fa-clone
                .indicador--click(v-if="mostrarIndicador")
          
          ModalA(:abrir-modal.sync="modal4")
            .BGIMG03.p-4.p-md-5
              .row.align-items-center
                .col-md-3
                  figure
                    img(src='@/assets/curso/temas/tema2/33.svg', alt='Texto que describa la imagen')
                .col-md-9.mb-4.mb-md-0
                  h4 Unidad operacional
                  .titulo-segundo.color-acento-contenido
                  p Es la forma de expresar o calcular de forma matemática el indicador. La unidad operacional corresponde con la fórmula del indicador.
                  p #[b Ejemplo:] número de recurso humano con grado de especialización para la gestión ambiental por cien, igual número total del recurso humano para la gestión ambiental.
        
    .row.justify-content-center 
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/34.svg')

            .col-10
              p #[b Control organizacional:] realiza comparación de lo planeado con las acciones que se estén realizando, ayuda a implementar rutinas y procedimientos estandarizados. 
    
    p(data-aos="fade-right") Los #[b procedimientos estandarizados], se utilizan para garantizar que los procesos sean uniformes y consistentes acorde con las características de los servicios o productos ofertados por la organización. Dentro de los procedimientos estandarizados se realiza la descripción detallada de realizar una tarea, teniendo en cuenta buenas prácticas y procesos de calidad acordes con los objetivos estratégicos planteados. La aplicación de los procedimientos estandarizados permite que los niveles de calidad y servicio sean óptimos, permitiendo la minimización o eliminación de errores y riesgos asociados a la ejecución de las actividades asociadas. 
    p(data-aos="fade-right").mb-5 Estos, en general son instrucciones escritas que se originan para diversas actividades, las cuales ayudan a que las áreas de la organización y también cada colaborador interno pueda conocer con exactitud lo que le corresponde hacer y en el momento indicado y teniendo en cuenta el trabajo articulado con otros miembros del equipo de trabajo. 

    .row.justify-content-center 
      .col-10
        .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema2/35.svg')

            .col-10
              p #[b Control directivo:] compara los resultados de la organización con el sector externo, es decir, con el entorno y la competencia. El control directivo trabaja en pro del futuro analizando si las acciones presentes han sido seleccionadas de manera correcta. 

    .row.justify-content-center.align-items-center.mb-5
      .col-8.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Pirámide del control empresarial</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/36.svg', alt='En la figura 5 se muestra la pirámide del control empresarial que contiene 5 niveles que van desde el control de las operaciones hasta el de las responsabilidades.')
        figcaption Nota. La gestión del control de la empresa. Eslava (2013). 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Pirámide del control empresarial</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema2/36-m.svg', alt='En la figura 5 se muestra la pirámide del control empresarial que contiene 5 niveles que van desde el control de las operaciones hasta el de las responsabilidades.')
        figcaption Nota. La gestión del control de la empresa. Eslava (2013). 

    p(data-aos="fade-right").mb-5 Acorde con lo expuesto por Paganini, el proceso de control de la calidad tiene tres aspectos relevantes que son: 

    .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
      ul.lista-ul--color
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          | La búsqueda de datos para comparar la calidad esperada con la calidad observada con el fin de identificar desviaciones, problemas de no calidad e incumplimientos que se estén generando. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          | Hacer un análisis que ayude a identificar las causas que dan origen a los problemas. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          | Hacer una toma de decisiones para conocer las acciones que se deben seguir y llevarlas a la práctica con el fin de lograr el control o eliminación de las causas que originan los problemas. 


</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
