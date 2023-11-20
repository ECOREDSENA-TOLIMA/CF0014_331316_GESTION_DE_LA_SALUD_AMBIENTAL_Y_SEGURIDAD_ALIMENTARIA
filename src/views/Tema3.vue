<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación de tareas y resultados

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | El sistema de seguimiento y evaluación, conocido como el proceso de verificación de tareas y resultados, es el medio por el cual se puede valorar el alcance de los objetivos organizacionales programados.
          br
          li 
            i.fas.fa-circle
            | Los instrumentos de verificación o verificadores son aquellas herramientas que permiten validar si las metas organizacionales en función del sistema de calidad se han cumplido y en qué proporción o magnitud.
          br
          li 
            i.fas.fa-circle
            | El sistema de seguimiento y evaluación tiene el propósito de contribuir en el conocimiento de los avances y progresos, evaluando el nivel de cumplimiento y propiciando la información necesaria que permita implementar las debidas acciones correctivas, preventivas, de seguimiento que sean necesarias y así mismo sistematizar las experiencias. 

    p(data-aos="fade-right").mb-5 La verificación de las tareas y resultados lleva implícito el sistema de seguimiento, el cual implica actividades claras como la observación, el registro y la sistematización de las actividades y tareas ejecutadas y los recursos institucionales que se han utilizado en función de estas. Los procesos de verificación soportan al proceso de evaluación el cual funciona como la estimación clara de los productos, resultados, efectos e impactos tanto a nivel interno como externo de la organización. 

    .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
      .row.justify-content-center.align-items-center
        .col-2
          img(src='@/assets/curso/temas/tema3/2.svg')

        .col-10
          p Las acciones de verificación deben indicar de manera detallada y con profundidad todos los elementos relativos a sus funciones, las metodologías empleadas, las variables, indicadores e instrumentos; así como todas las áreas y el personal que participa en el logro de los objetivos organizacionales. Las acciones dirigidas a la verificación se pueden considerar bajo dos (2) aspectos enfocados en:
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	El seguimiento de avances.
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              |	La evaluación de logros.

    p(data-aos="fade-right") Ambos enfoques tienen como finalidad la programación, reprogramación y la validez de estrategias, procesos, procedimientos y demás actividades que se realicen en función del cumplimiento de los objetivos organizacionales. 
    p(data-aos="fade-right").mb-5 El siguiente es un resumen de los sistemas de verificación de tareas y resultados (ver tabla):

    .row.justify-content-center.align-items-center.mb-5
      .col-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] <em>Resumen importancia de los sistemas de verificación de tareas y resultados</em>
        .tabla-a.color-acento-contenido
          table
            caption Nota. Evaluación de proyectos sociales. Quintero (1997). 
            thead
              tr
                th.text-center(colspan="2") Sistemas de verificación
            tbody
              tr.text-center(style="background-color:#F6F6F6")
                td #[b Seguimiento de tareas]
                td #[b Seguimiento de los resultados o proceso de evaluación]
              tr
                td Se evalúa el proceso, las estrategias y las tácticas utilizadas. 
                  br
                  | Dirigidas a la eficiencia en las acciones implementadas.  
                td Se evalúan los logros obtenidos. 
                  br
                  | Está dirigida a la eficacia en las acciones realizadas. 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Instrumentos

    .row.mb-5
      .col-10
        p Acorde con los elementos vistos respecto a el control y el seguimiento, es indispensable tener en cuenta los instrumentos por medio de los cuales se puedan ejercer las acciones de control y seguimiento. Como se enunció anteriormente, las herramientas de control y seguimiento son definidas como los elementos necesarios para la búsqueda de la información en el marco del estudio de los problemas de calidad y al análisis de los factores que la determinan. Existen herramientas (instrumentos) enfocados hacia el control y la mejora de la calidad. 
      .col-2 
        img(src='@/assets/curso/temas/tema3/3.svg')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Instrumentos/herramientas de control de calidad

    .row.mb-5
      .col-10
        p Estas herramientas se caracterizan porque pueden ser manejadas por todos los miembros de la organización, ser empleadas en todos los niveles de operación y favorecer la recopilación y organización de datos logrando identificar problemas para implementar las acciones correctivas a las que den lugar. Este tipo de instrumentos son utilizados cuando se cuenta con información respecto al problema o situación a evaluar, pero requiere ser organizada y agrupada si es el caso, para su posterior análisis. 
      .col-2 
        img(src='@/assets/curso/temas/tema3/4.svg')

    p(data-aos="fade-right").mb-5 Las 7 herramientas de control son:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Hojas de control/hoja de comprobación/#[em Checklist]
            p Son formatos que se diseñan para la recolección de información relacionada con un proceso, procedimiento o actividad. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/5.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Gráficos estadísticos
            p Se utilizan para darle control y mejora a los procesos teniendo en cuenta las variables de tiempo. Facilitan determinar los límites de control de proceso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/6.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Diagrama de Ishikawa/causa - efecto
            p Por medio de esta se logra conocer y clasificar las causas relacionadas a un problema.  Se pueden identificar algunas categorías como causas primarias las cuales pueden ser insumos, personas, maquinaria, procesos y el entorno. A partir de estos, se realiza identificación de causas secundarias y se van ramificando, obteniendo forma de espina.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Histograma
            p Consiste en un grupo de gráficos tipo barra vertical en donde cada barra evidencia la cantidad de datos que están relacionados con una categoría específica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Diagrama de Pareto
            p Es un método utilizado para analizar las causas más y menos importantes de un problema. Acorde con el principio de Pareto, el 80% de los defectos se originan por un 20 % de causas.  
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/9.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Diagrama de dispersión
            p Es una herramienta que permite conocer la relación entre dos variables. La relación entre variables se denomina correlación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/10.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Estratificación
            p Es un procedimiento el cual se realiza clasificando y mostrando de forma gráfica los datos disponibles por los grupos con características similares. Incluyen varias herramientas de las cuales algunas permiten obtener los datos, otras permiten analizar el problema y ayuda a ver los datos de forma gráfica.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Instrumentos/herramientas de mejora de la calidad

    .row.mb-5
      .col-2 
        img(src='@/assets/curso/temas/tema3/12.svg')
      .col-10
        p Favorecen los procesos de mejora en aquellas situaciones que se presentan, pero de las cuales existen pocos datos. El objetivo de estas herramientas es más proactivo ya que facilita la organización, conocer los problemas y posibles fallos del servicio o producto. Estas herramientas para la mejora de la calidad actúan como un complemento a las herramientas de control de la calidad y busca que todas las áreas de la organización, incluyendo las directivas participen en la gestión de la calidad.
        p Las 7 herramientas de mejoramiento son:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de afinidad
            p Da la posibilidad de unir varias ideas relacionadas entre sí en algunas categorías más amplias. Se usa cuando existe mucha información y esta se encuentra desorganizada.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/13.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de relaciones
            p Es usado en las fases iniciales de estructuración y gestión de datos. Tiene como fin conocer las diversas ideas o elementos que componen el proceso determinado.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/14.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de árbol
            p Permite conocer de forma gráfica todos los posibles resultados y escenarios de un acontecimiento. Los posibles resultados son finitos y concretos.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/15.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de matriz
            p Define las relaciones entre diversas ideas las cuales pertenecen a categorías diferentes. Se ubican en filas y columnas. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/16.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Matriz de priorización
            p Se usa para dar prioridad y orden a una gama de soluciones teniendo en cuenta determinados criterios. Por lo general los criterios más usados en este tipo de herramienta son costos, la comparación entre el riesgo y el beneficio, tiempo de implementación, entre otros. 
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/17.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de proceso de decisión
            p Teniendo ya una solución en curso, se debe conocer los elementos para anticiparse a la ocurrencia de problemas. El objetivo de la herramienta es lograr una serie de contramedidas que sean aceptables que son identificadas con “O” y una serie de contramedidas que son posibles pero inaceptables y las cuales se identifican con “X”.  
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/18.png', alt='Texto que describa la imagen')

        .row
          .col-md-5.mb-4.mb-md-0
            h3 Diagrama de flechas
            p Permiten visualizar la planificación completa de un proyecto, incluyendo el orden en el que se van a realizar las acciones y el tiempo necesario para ejecutarlas. Los círculos representan el tiempo, las fechas representan las actividades.
          .col-md-7
            figure
              img(src='@/assets/curso/temas/tema3/19.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 La relación entre las distintas herramientas de mejora continua se puede resumir de la siguiente manera:  

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-secundario2.p-4(style="border-radius:0")
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema3/20.svg')
            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Para la agrupación y la obtención de ideas: usar el diagrama de afinidad. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Para establecer relaciones entre las ideas: usar el diagrama de relaciones y el diagrama matriz. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Para la identificación y la priorización de soluciones: usar el diagrama de árbol y la matriz de priorización.  
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  |	Para la identificación de fallos potenciales y la planificación de los proyectos: usar el diagrama de flechas y el diagrama de proceso de decisión. 
 
    p(data-aos="fade-right").mb-5 Acorde con las herramientas expuestas para el control y el mejoramiento de la calidad, se presenta el siguiente comparativo (ver tabla): 

    .row.justify-content-center.align-items-center.mb-5
      .col-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 4.] <em>Herramientas para la gestión de la calidad</em>
        .tabla-a.color-acento-contenido
          table.text-center
            caption Nota. Herramientas para la mejora de la calidad: métodos para la mejora continua y la solución de problemas. López Lemos (2016). 
            thead
              tr
                th 7 herramientas de control
                th 7 herramientas de mejoramiento
            tbody
              tr(style="background-color:#F6F6F6")
                td Diagrama de Pareto.
                td Diagrama de afinidad. 
              tr
                td Diagrama causa – efecto. 
                td Diagrama de relación. 
              tr(style="background-color:#F6F6F6")
                td Histograma.
                td Diagrama de matriz.  
              tr
                td Hoja de recogida de datos. 
                td Diagrama de árbol. 
              tr(style="background-color:#F6F6F6")
                td Gráfico de control. 
                td Matriz de priorización. 
              tr
                td Diagrama de dispersión. 
                td Diagrama de flechas. 
              tr(style="background-color:#F6F6F6")
                td Estratificación. 
                td Diagrama de proceso de decisión. 

    .tarjeta.color-primario1.p-4(style="border-radius:0").mb-5
      .row.justify-content-center.align-items-center
        .col-3
          img(src='@/assets/curso/temas/tema3/21.svg')

        .col-9
          p Dentro de las herramientas de control y de mejoramiento vistas, es importante resaltar la utilidad de la hoja de comprobación o más comúnmente llamada de verificación o #[b #[em checklist]] ya que es una herramienta que permite simplificar y facilitar el proceso para la toma de los datos por parte tanto del personal operativo como directivo.
          p  Posterior a la recolección de los datos estos se llevan a otras herramientas para procesar la información obtenida y así de esta manera obtener el diagnóstico esperado. 

    p(data-aos="fade-right").mb-5 Para el diseño de la hoja de comprobación se debe tener claridad en qué y por qué se desea controlar u obtener los datos. Adicional a esto, se debe garantizar que la hoja de verificación contenga la información que sea necesaria sin pasar por el exceso o por defecto de esta. La información obtenida de este tipo de listas puede darse en dos líneas: 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | #[b Cualitativa:] incluye las tareas, los resultados no cuantitativos, las observaciones, opiniones y posibles estimaciones.
          br
          li 
            i.fas.fa-circle
            | #[b Cuantitativa:] evalúa las dimensiones, los pesos, las temperaturas, los volúmenes y el tiempo. 

    p(data-aos="fade-right").mb-5 Dentro de los datos básicos que se deben incluir dentro de las hojas de verificación, sobresalen: 

    .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
      ul.lista-ul--color
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Definir el área, proceso o actividad para la cual está diseñada la hoja de comprobación. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Debe incluir la fecha de inicio y la fecha de fin para completar los datos. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Contar con el espacio para el nombre del responsable de la verificación de la hoja de comprobación. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Espacio asignado para las observaciones. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Tipo de letra clara y con buena redacción que permita una lectura fácil. Es importante resaltar que todas las hojas de comprobación deben ser claras y sencillas. 
        li 
          i.fas.fa-chevron-right(style="color:#00223D")
          |	Antes de implementar la hoja de verificación, se debe realizar una prueba piloto para confirmar que toda la información a recolectar sea pertinente con el proceso, área o actividad a evaluar. 

    p(data-aos="fade-right").mb-5 Para la implementación de la hoja de verificación es importante definir con claridad desde el inicio el cómo, quién y durante cuánto tiempo se debe conservar la información obtenida, además de concretar qué elementos son importantes para garantizar que dicha información sea confiable y a quién debe ser entregada. También se debe dejar en claro cuál es el uso de la información obtenida y el fin de los resultados obtenidos. 

    .row.justify-content-center.mb-5
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema3/23.svg')
            .col-10
              p #[b Acciones correctivas:] la acción correctiva permite identificar las causas reales de las desviaciones o problemas de calidad detectados. 

    p(data-aos="fade-right") En el marco de implementar las acciones correctivas se debe tener claridad respecto en los términos que se relacionan en este campo, ya que una corrección puede significar una respuesta inmediata que resuelve la no conformidad presentada, pero sin lograr una identificación de la causa raíz que produce dicho problema o no conformidad, lo cual puede provocar que la no conformidad se presente en repetidas ocasiones. 
    p(data-aos="fade-right").mb-5 La magnitud y la eficacia de las acciones correctivas se basa en una real identificación de la causa raíz. Cuando se presente la no conformidad es necesario seleccionar las acciones correctivas que tengan una mayor probabilidad de eliminar el problema y prevenir futuras recurrencias de los hechos. Las acciones correctivas ayudan a facilitar las acciones de control y también las acciones de seguimiento en función de decisiones de mejora tomadas. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Las acciones correctivas se pueden dar a partir de los siguientes hechos: 
        br
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Presencia de no conformidades, mayores o menores visualizadas por medio de las auditorías internas o externas del SGC. 
          br
          li 
            i.fas.fa-circle
            | Reporte de quejas o reclamos por parte de los usuarios. 
          br
          li 
            i.fas.fa-circle
            | Los servicios no conformes o no conformidades halladas en las revisiones directivas. 
          br
          li 
            i.fas.fa-circle
            | Fallas o desviaciones en los procesos que afecten la calidad del servicio ofertado. 
          br
          li 
            i.fas.fa-circle
            | Informe de las evaluaciones realizadas por los entes de control- 
          br
          li 
            i.fas.fa-circle
            | Ante el incumplimiento de requisitos legales y normativos. 
          br
          li 
            i.fas.fa-circle
            | Por presencia de accidentes graves. 

    .d-flex.flex-wrap.align-items-center(data-aos="fade-right").mb-5
      img(src='@/assets/curso/temas/icono.svg' style="max-width: 30px;")
      .h3.col-auto.pb-2.mb-0.ms-2(style=" color: #455B2D;") Informes de gestión

    p(data-aos="fade-right") El informe de gestión es un documento que toma como referencia el conjunto de datos en función de los resultados esperados, teniendo en cuenta los objetivos estratégicos de la organización. Por lo general los informes de gestión se presentan en función de un periodo de tiempo el cual es definido por la organización. Los informes de gestión permiten ver con claridad los avances, dificultades y aspectos por mejorar en función de los objetivos estratégicos. 

    p(data-aos="fade-right").mb-5 Para realizar el informe de gestión se deben tener en cuenta unos elementos básicos los cuales se describen a continuación:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Título
            p Permite identificar las temáticas que se van a abordar. Debe ser claro y sencillo.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/25.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Contextualización
            p Es importante realizar una breve introducción respecto a los datos que se van a presentar, las métricas utilizadas, la información estadística y los resultados que se van a presentar por medio del informe.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/26.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Objetivos
            p Se debe incluir los objetivos de presentar el informe de gestión, este objetivo u objetivos debe ser coherente con toda la información que se va a presentar en el informe central.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/27.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Resumen
            p Por medio del resumen el lector del informe puede realizar una lectura rápida. Debe contener los datos más relevantes del informe, las cuales pueden servir como medio ágil y seguro para la toma de decisiones por parte de las diversas áreas funcionales de la organización. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/28.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Presentación de resultados
            p En este espacio es indispensable presentar todos los datos relevantes que hacen parte del informe. La presentación de los resultados implica exponer las estadísticas, tablas, gráficos y demás elementos utilizados. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/29.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Conclusión
            p Este paso es el desenlace del informe y en este espacio se deben hacer evidentes todos los hallazgos, resultados y demás elementos encontrados al reunir todos los datos e información producto de las acciones ejecutadas. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/30.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 Para realizar el informe de gestión es necesario seguir unos pasos básicos para que este cuente con la información necesaria y suficiente para la toma de decisiones:

    .row.justify-content-center 
      .col-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              p Realizar una planificación clara en donde se concrete qué datos se van a presentar: 
              ul.lista-ul--color
                li 
                  i.fas.fa-check(style="color:#12263F")
                  |	¿Para quién se hace el informe?
                li 
                  i.fas.fa-check(style="color:#12263F")
                  |	¿Cuál es la finalidad de entregar el informe?
                li 
                  i.fas.fa-check(style="color:#12263F")
                  |	¿Qué información se va a condensar?
                li 
                  i.fas.fa-check(style="color:#12263F")
                  |	¿Qué datos son primordiales y ayudarán en la toma de decisiones?
               
      
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/31.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/32.png', alt='Texto que describa la imagen')
            .col-md-6
              p Seleccionar las herramientas de tipo automatizadas para el procesamiento y obtención de datos claros respecto a lo que se pretende presentar.


          .row
            .col-md-6.mb-4.mb-md-0
              p Se debe usar un lenguaje claro y objetivo, en donde quede en evidencia el manejo y dominio del tema presentado y el nivel de sintetizar la información y poderla transformarla en información ejecutiva de fácil comprensión para todos los involucrados en el seguimiento, control y toma de decisiones.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/33.png', alt='Texto que describa la imagen')
                
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/34.png', alt='Texto que describa la imagen')
            .col-md-6
              p Ante toda la información que se presente es necesario dar una contextualización clara, con una narrativa amplia que permita al lector tener una idea clara en función de los datos recopilados y procesados, así como de los resultados obtenidos.


          .row
            .col-md-6.mb-4.mb-md-0
              p Seleccionar métricas a usar, así como los indicadores que se van a exponer. Hay que recordar que los indicadores pueden generarse en varias líneas, por tanto, es importante concretar cuáles serán usados: indicadores de contexto, indicadores de logro, éxito o resultado, indicadores de gestión e indicadores estratégicos.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/35.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/36.png', alt='Texto que describa la imagen')
            .col-md-6
              p Definir un punto de referencia o comparación, ya sea entre las metas esperadas o en función del tiempo. Se pueden comparar los resultados de dos periodos. Es importante establecer puntos de comparación para que los logros tengan un contexto claro de alcance o no alcance frente a lo planeado.

          .row
            .col-md-6.mb-4.mb-md-0
              p Se deben incluir los elementos visuales, pueden ser las gráficas, los mapas conceptuales o mentales, entre otros que puedan dar orientación y guía frente a la información que se presente.

          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/37.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/38.png', alt='Texto que describa la imagen')
            .col-md-6
              p Se debe realizar una revisión final de manera minuciosa. Evaluar que no se vayan a presentar datos equivocados fallas en la ortografía o demás errores que pueda opacar el objetivo inicial del informe el cual es el presentar datos consolidados para la toma de decisiones.


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
