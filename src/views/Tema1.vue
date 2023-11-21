<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Seguimiento y control

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema1/1.png')

      .col-8
        p.mb-5 Para iniciar la revisión de los aspectos esenciales de seguimiento y control, es necesario revisar los conceptos básicos relacionados con las #[b herramientas informáticas y los principios éticos de la información], ya que estos son básicos para darle un correcto manejo a los datos e información que se obtiene en el desarrollo de las actividades de mejora continua.
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row 
            .col-4
              img(src='@/assets/curso/temas/tema1/2.svg')
            .col-8
              p A nivel general las herramientas informáticas constan de elementos esenciales:
              .row 
                .col-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Bases de datos.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Hojas de cálculo.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Procesadores de texto.
                .col-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Presentaciones.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Correo electrónico.

    p(data-aos="fade-right").mb-5 Para comprender bien el uso de estas herramientas informáticas, se deben conocer los elementos del ordenador, que es el insumo básico para todo tipo de acción dirigida a su uso.  La información, puede ser presentada bajo dos líneas:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario1.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/3.svg', alt='Texto que describa la imagen')
        h3.text-center Analógica
        p.mb-5 Los datos son presentados en el rango de un intervalo continuo. Por ejemplo, la temperatura corporal puede estar en los rangos de 36 °C y 40 °C (parámetros básicos), pudiendo obtener un valor de 37.5 °C o 39.5 °C.
      .col-md.tarjeta.color-secundario2.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema1/4.svg', alt='Texto que describa la imagen')
        h3.text-center Digital
        p En este tipo de información se pueden encontrar valores de tipo entero, como por ejemplo los estados de la materia: sólido, líquido, gaseoso y plasmático. 

    p(data-aos="fade-right").mb-5 Algunos de los elementos claves de las herramientas informáticas que permiten la interacción entre los diferentes actores partícipes de la comunicación empresarial, son:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Bases de datos
            p Son estructuras que han sido proyectadas y formuladas para gestionar los datos, permitiendo que sean ordenados, clasificados, gestionados, calculados.
            p A nivel general, se distinguen tres categorías los cuales son archivos de imágenes, bases de datos completos y bases de datos referenciales. Los elementos claves de las bases de datos son:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Archivos.
              li 
                i.lista-ul__vineta
                | Registros.
              li 
                i.lista-ul__vineta
                | Campos.
              li 
                i.lista-ul__vineta
                | Datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Hojas de cálculo
            p Son aplicaciones que ayudan a facilitar las actividades como son los números y el cálculo de estos. También son útiles para realizar tablas de tipo financiero, representación de datos y gráficos. Algunas de las funciones que se incluyen en las hojas de cálculo son:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Uso de fórmulas definidas. 
              li 
                i.lista-ul__vineta
                | Lenguajes de programación y macros. 
              li 
                i.lista-ul__vineta
                | Gráficos. 
              li 
                i.lista-ul__vineta
                | Herramientas de tipo matemático. 
              li 
                i.lista-ul__vineta
                | Funciones de tipo estadístico, procesador de texto y base de datos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/6.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Procesadores de texto
            p Permiten manipular el texto que es visualizado en una pantalla. Algunas de sus funciones son:
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Cambiar márgenes.
              li 
                i.lista-ul__vineta
                | Cambiar la distancia entre las líneas.
              li 
                i.lista-ul__vineta
                | Numerar líneas de texto.
              li 
                i.lista-ul__vineta
                | Justificar o centrar textos.
              li 
                i.lista-ul__vineta
                | Incluir tablas.
              li 
                i.lista-ul__vineta
                | Crear correos masivos.
              li 
                i.lista-ul__vineta
                | Diseñar gráficos.
              li 
                i.lista-ul__vineta
                | Crear páginas web.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Presentaciones
            p Corresponden con el grupo de elementos que ayuda a exponer un tema, evento o idea de forma gráfica y visual.
            p Por lo general, las presentaciones combinan comunicación viva con material de tipo visual. Una de las herramientas más usadas para realizar presentaciones en Power Point.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Correo electrónico
            p Se dispone de una dirección electrónica de la cual se pueden enviar mensajes, así como recibirlos. El correo electrónico tienes varias ventajas, dentro de las cuales se pueden destacar:

            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Facilidad en el uso de sus funciones.
              li 
                i.lista-ul__vineta
                | Economía.
              li 
                i.lista-ul__vineta
                | Se puede enviar cualquier tipo de información: documentos, imágenes, programas, videos, presentaciones, entre otros.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/9.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 Es importante indicar que en la actualidad las empresas hacen uso intensivo de las bases de datos para optimizar la generación y procesamiento de información. En tal sentido, y debido a su gran uso, para este tipo de herramientas, existen cuatro (4) enfoques de bases de datos:

    .BGIMG02.p-4.mb-5
      PasosB.color-primario
        .row(titulo="Jerárquico")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/10.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h2 Jerárquico
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Utiliza árboles para representar datos de manera lógica. 
              li 
                i.lista-ul__vineta
                | Los segmentos se relacionan de uno a varios.
              li 
                i.lista-ul__vineta
                | Cada segmento tiene uno o más campos. 
              li 
                i.lista-ul__vineta
                | Cada registro matriz tiene distintos números de registros hijos. 
              li 
                i.lista-ul__vineta
                | Al eliminar un registro matriz, se eliminan los registros hijos. 
              li 
                i.lista-ul__vineta
                | Todo registro hijo debe tener un registro matriz. 
            p #[b Ejemplo:] cada establecimiento sujeto a inspección, vigilancia y control puede ser evaluado por varios entes de control y tendrá muchas fechas de auditoría.

        .row(titulo="De Red")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/11.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h2 De Red
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Utilizan estructuras de datos no lineales. 
              li 
                i.lista-ul__vineta
                | Un registro A tiene relación con cualquier número de registros B; un registro B se puede asociar a cualquier número de registros A. Esta relación no soporta el indicador muchos a muchos, y es necesario denominar el registro conector con los campos básicos de los datos a relacionar.  
            p #[b Ejemplo:] Un inspector realiza la evaluación de inspección, vigilancia y control a muchos establecimientos y cada establecimiento puede ser evaluado por muchos inspectores. 

        .row(titulo="Relacional")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/12.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h2 Relacional
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Utiliza diversas tablas bidimensionales para representar datos y sus relaciones. 
              li 
                i.lista-ul__vineta
                | Cada tabla es similar a un archivo.
              li 
                i.lista-ul__vineta
                | Las filas de las tablas son los registros del archivo. 
              li 
                i.lista-ul__vineta
                | Las columnas corresponden con los campos de los registros. 
              li 
                i.lista-ul__vineta
                | Se almacena información de tipo homogénea organizada en filas y columnas. 

            p #[b Ejemplo:] cada fila para el nombre de las IPS, y cada columna contiene los datos de atributos de calidad relacionados con pertinencia, accesibilidad, continuidad, oportunidad y seguridad. 
        
        .row(titulo="Documental")
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/13.png', alt='Texto que describa la imagen')
          .col-md-6.mb-4.mb-md-0
            h2 Documental
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Gestionan grandes cantidades de datos de tipo textual y con poca estructura. 
              li 
                i.lista-ul__vineta
                | Los registros son denominados documentos. 
              li 
                i.lista-ul__vineta
                | La base de datos documental está conformada por grupo de documentos subdividido por campos. 
              li 
                i.lista-ul__vineta
                | A cada registro le corresponde un documento y este puede ser: 
                br
                br
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Base de datos tipo texto completo. 
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Archivos de imágenes de tipo electrónico. 
              li
                ul
                  li 
                    i.lista-ul__vineta
                    | Bases de datos referenciales.
        
    p(data-aos="fade-right").mb-5 Por otra parte, las bases de datos pueden tener diversas tipologías dentro de las cuales se encuentran: 

    .row.justify-content-center.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/14.svg' alt='AvatarTop')
          h3 Organismo productor
          p Bases de datos de:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Entidades públicas y administrativas.
            li 
              i.lista-ul__vineta
              | Instituciones sin ánimo de lucro.
            li 
              i.lista-ul__vineta
              | Entidades privadas o comerciales.
            li 
              i.lista-ul__vineta
              | Cooperación – Red.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/15.svg' alt='AvatarTop')
          h3 Modo de acceso
          p Se pueden generar:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Bases de datos de acceso local.
            li 
              i.lista-ul__vineta
              | Datos en sistema de almacenamiento DAS.
            li 
              i.lista-ul__vineta
              | Base de datos en línea (conexión telefónica, internet, vía web).

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/16.svg' alt='AvatarTop')
          h3 Cobertura temática y destinatario
          p Bases de datos como:
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Tecnológicas y científicas.
            li 
              i.lista-ul__vineta
              | Empresariales y económicas.
            li 
              i.lista-ul__vineta
              | De medios de comunicación.
            li 
              i.lista-ul__vineta
              | De política, administrativa y jurídica.
            li 
              i.lista-ul__vineta
              | De tipo sanitario.
            li 
              i.lista-ul__vineta
              | Del gran público.

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/17.svg' alt='AvatarTop')
          h3 Modelo de tratamiento documental
          p Corresponde con las bases de datos:

          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Sin análisis del contenido.
            li 
              i.lista-ul__vineta
              | Catálogo de bibliotecas.
            li 
              i.lista-ul__vineta
              | Con análisis documental completo e índice de citas. 

        .tarjeta.color-primario1.p-4.col-ipad
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema1/18.svg' alt='AvatarTop')
          h3 Cobertura documental
          p Puede ser de uno o varios documentos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/19.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Se debe tener presente que la búsqueda en las bases de datos puede darse:
        br
        br
        ul.lista-ul--color
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | De manera directa.
          br
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Por medio de índices.
          br
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | En jerarquía.
          br
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Por medio de códigos. 

    p(data-aos="fade-right") Tal y como lo expone la UNESCO, los denominados principios éticos fueron debatidos teniendo en cuenta los criterios de tipo ético, legal y social respecto al uso de las diversas tecnologías de la información y de la comunicación (TIC).  
    p(data-aos="fade-right").mb-5 La UNESCO en estrecha colaboración con los estados miembros, realiza un gran trabajo en pro del fortalecimiento de las dimensiones éticas de la sociedad de la información lo que favorece las decisiones de la Cumbre Mundial sobre la Sociedad de la Información (CMSI), quienes plantean un acceso libre, sin presencia de obstáculos y utilizando redes interactivas.  

    .tarjeta.color-secundario2.p-4.mb-5(style="border-radius:01")
      .row.justify-content-center
        .col-6
          p En tal sentido, la información que se manipule a nivel institucional debe contar con principios éticos: 
          ul.lista-ul--color
            li 
              i.fas.fa-circle
              | Privacidad y disposición de la información.
            li 
              i.fas.fa-circle
              | Transparencia.
            li 
              i.fas.fa-circle
              | Seguridad.
            li 
              i.fas.fa-circle
              | Acceso.
            li 
              i.fas.fa-circle
              | Resguardo legítimo.
            li 
              i.fas.fa-circle
              | Alternativa menos invasora.
            li 
              i.fas.fa-circle
              | Responsabilidad.
        .col-4
          img(src='@/assets/curso/temas/tema1/20.svg' alt='AvatarTop')

    p(data-aos="fade-right").mb-5 En el área de salud ambiental, acorde con las actividades desarrolladas, se cuenta con la propuesta de varias normas que hacen parte del mantenimiento de la ética en el manejo de toda la información. Estas se describen como: 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Dar garantía de que los datos emitidos sean de características confiables, actuales, suficientes, útiles y de pertinencia.
          br
          li 
            i.fas.fa-circle
            | Generar la confidencialidad de los datos.
          br
          li 
            i.fas.fa-circle
            | Tener las medidas de seguridad de los equipos que tengan manejo y almacenamiento de datos.
          br
          li 
            i.fas.fa-circle
            | Promover el respeto por la privacidad. 
          br
          li 
            i.fas.fa-circle
            | Hacer entrega exclusivamente de la información que sea solicitada. La entrega de información debe ser oportuna.
          br
          li 
            i.fas.fa-circle
            | Realizar un proceso de comunicación sistemática y oportuna.
          br
          li 
            i.fas.fa-circle
            | Promover el respeto de las reglas de educación formal durante la comunicación.
          br
          li 
            i.fas.fa-circle
            | Entregar a los usuarios la mejor solución de varias opciones respecto a sus requerimientos.

    p(data-aos="fade-right").mb-5 Es necesario reconocer que todo tipo de decisión organizacional está basada en datos y premisas, por tanto, estos requieren que sean analizados detalladamente y que contengan información veraz y de calidad. A nivel organizacional existen tres tipos de información:

    .row(data-aos="fade-left").mb-5
      .col-4.mb-4.mb-lg-0
        .tarjeta--boton.color-secundario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/22.svg', alt='Texto que describa la imagen')

          h3.text-center Estratégica
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Es usada para la planificación. 
            li 
              i.lista-ul__vineta
              | Abarca períodos de largo plazo. 
            li 
              i.lista-ul__vineta
              | Permite validar los avances técnicos, conocer las necesidades de los usuarios y conseguir liquidez para la organización.

      .col-4.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/23.svg', alt='Texto que describa la imagen')

          h3.text-center Táctica
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Ayuda a la toma de decisiones a mediano plazo. 
            li 
              i.lista-ul__vineta
              | Ayuda en la puesta en marcha de la planificación. 


      .col-4.mb-4.mb-sm-0
        .tarjeta--boton.color-acento-botones.p-4(style='height:100%')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema1/24.svg', alt='Texto que describa la imagen')

          h3.text-center Operativa
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Está relacionada con actividades estructuradas y repetitivas. 
            li 
              i.lista-ul__vineta
              | Ayuda para verificar el cumplimiento de las metas y así mismo entregar información suficiente a los niveles gerenciales para que se verifiquen avances y se puedan tomar decisiones.

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema1/25.png')

      .col-8
        .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-4
          .row 
            .col-4
              img(src='@/assets/curso/temas/tema1/26.svg')
            .col-8
              p En conclusión, la información organizacional sirve para el seguimiento y la toma de decisiones a:
              .row 
                .col-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Corto.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Mediano.
                    li 
                      i.fas.fa-chevron-right(style="color:#00223D")
                      | Largo plazo.
        p Adicional a esto, es necesario reconocer que en el área de la salud ambiental debe existir una interacción constante entre los usuarios y el personal sanitario, lo que hace que este tipo de información manejada tanto a nivel interno como externo cuente con los lineamientos éticos necesarios.  
              
    p(data-aos="fade-right").mb-5 Teniendo en cuenta los elementos descritos como las herramientas de información y la ética que se debe generar alrededor de ésta, se debe comenzar a referirse a las acciones de seguimiento y control, las cuales son conceptos básicos que deben ser manejados para la mejora continua en los procesos institucionales. El procedimiento de seguimiento y control son todas aquellas actividades enfocadas en realizar la verificación de los objetivos de calidad dispuestos en la planeación estratégica. Por medio de estas dos acciones se busca entender el progreso de los objetivos con el fin de implementar las acciones preventivas y correctivas.

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Principios de mejora continua

    p(data-aos="fade-right").mb-5 Cuando se hace referencia a mejora continua, se relaciona con procesos de tipo gradual y continuo que favorece la eficacia y la eficiencia para cumplir con los objetivos organizacionales. Por lo general, la mejora continua es nombrada como #[em “Kaizen”], la cual es una palabra compuesta por Kai que significa cambio y la palabra Zen que tiene como significado bueno.  La mejora continua, se basa en tres (3) principios fundamentales: 

    .row.justify-content-center.mb-5 
      .col-10 
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.align-items-center 
            .col-2
              img(src='@/assets/curso/temas/tema1/27.svg')
            .col-10
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span.text-dark.text-bold 1
                  | La retroalimentación que favorece la autorreflexión.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-dark.text-bold 2
                  | La eficiencia ayuda en la identificación, reducción o eliminación de los obstáculos que puedan estar presentes en el proceso.
                li 
                  .lista-ol--cuadro__vineta
                    span.text-dark.text-bold 3
                  | La evolución es la que está relacionada con el desarrollo exponencial y permanente. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/28.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Cambiar la cultura organizacional tiene como eje central la mejora continua de los procesos. Para que se dé, hay algunos factores que son indispensables:
        br
        br
        ul.lista-ul--color
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Liderazgo.
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Acciones basadas en prevención y no en solución.
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Constancia.
          br
          li 
            ul
              li
                ul
                  li
                    ul
                      li
                        i.fas.fa-circle
                        | Cambio de mentalidad a largo plazo. 

    p(data-aos="fade-right").mb-5 Los principios de la calidad están directamente relacionados con las acciones de mejora continua ya que estos sugieren que: 

    .row.justify-content-center 
      .col-10
        PasosA.color-primario.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              h3 Principio 1
              p  Las acciones de la organización están enfocadas hacia el cliente ya que dependen de ellos y por tanto debe existir una amplia comprensión de sus necesidades actuales y futuras, se debe dar cumplimiento a sus requerimientos y hacer un gran esfuerzo por ir más allá de sus expectativas. 
      
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/29.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/30.png', alt='Texto que describa la imagen')
            .col-md-6
              h3 Principio 2
              p Debe existir un enfoque basado en los procesos. Los resultados que se desean alcanzar se deben manejar como procesos. Estos se interrelacionan entre sí y tienen necesidades de ingreso y resultados al final. La interacción entre los procesos de la empresa se denomina “enfoque basado en procesos”. 

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Principio 3
              p Consta de un enfoque de sistemas para la gestión en donde se debe conocer, comprender y darle gestión a los procesos que se encuentren interrelacionados entre sí. 

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/31.png', alt='Texto que describa la imagen')
                
          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/32.png', alt='Texto que describa la imagen')
            .col-md-6
              h3 Principio 4
              p Se le denomina enfoque basado en hechos para realizar toma decisiones. Este principio se centra en la vigilancia, la evaluación continua y el análisis de los datos e información obtenida.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Principio 5
              p Se debe contar con líderes que acompañen los procesos con el fin que todos los colaboradores se puedan involucrar en el logro de los objetivos, políticas y metas planeadas.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/33.png', alt='Texto que describa la imagen')

          .row
            .col-md-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/34.png', alt='Texto que describa la imagen')
            .col-md-6
              h3 Principio 6
              p La participación de todo el personal es indispensable para la construcción de la cultura organizacional, la cual se basa en la participación y el apoyo en todos los procesos institucionales.

          .row
            .col-md-6.mb-4.mb-md-0
              h3 Principio 7
              p La mejora continua en torno al desempeño global de la organización debe ser un objetivo constante.
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/35.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 El proceso de mejora continua cuenta con cuatro (4) etapas del ciclo de la calidad. Estas etapas fueron creadas por Walther Shewhart, pero posteriormente trabajadas por Deming, hacia el año 1950. Los cuatro (4) pasos consisten en:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Planear
          p.text-center En este paso se definen las políticas, los objetivos y los procesos que sean indispensables para lograr los resultados de la organización. En esta etapa se define el qué y cómo hacer para lograr lo proyectado.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Hacer
          p.text-center Está enfocada en el desarrollo e implementación de todo lo planeado.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Verificar
          p.text-center Se realiza el seguimiento de las actividades desarrolladas e implementadas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Actuar
          p.text-center Es la etapa en donde se implementan las acciones de mejora ante los hallazgos encontrados. 

    p(data-aos="fade-right").mb-5 Adicional a conocer el significado de cada etapa, es importante identificar la evolución cronológica del ciclo PHVA: 

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-8
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 1.] <em>Evolución cronológica ciclo PHVA </em>

        .row.justify-content-center.align-items-center.mb-5
          .col.desktop(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/36.svg', alt='En la figura 1 se muestra la evolución cronológica del ciclo PHVA a través de la historia desde la etapa artesanal hasta la actualidad.')
            figcaption Nota. Adaptado de Ciclo de la calidad PHVA. Zapata Gómez (2015). 

        .row.justify-content-center.align-items-center.mb-5
          .col.movil(data-aos="fade-right")
            a.anexo.mb-4(:href="obtenerLink('/downloads/evolucion_cronologica_ciclo_PHVA.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p #[b Descargar.] Figura 1. Evolución cronológica ciclo PHVA

    p(data-aos="fade-right").mb-5 A nivel conceptual la evolución de los procesos relacionados con ciclos de mejora se desarrolló de la siguiente manera: 

    .row.justify-content-center.mb-5
      .col-3
        LineaTiempoE.color-primario
          .row(titulo="1920" subtitulo="")
            .col.mb-4.mb-lg-0
              p #[b Enfoque:] producto.
              p #[b Etapa:] control de calidad.

          .row(titulo="1950" subtitulo="")
            .col.mb-4.mb-lg-0
              p #[b Enfoque:] proceso.
              p #[b Etapa:] aseguramiento de la calidad.

          .row(titulo="1970" subtitulo="")
            .col.mb-4.mb-lg-0
              p #[b Enfoque:] cliente.
              p #[b Etapa:] calidad total.

          .row(titulo="1990" subtitulo="")
            .col.mb-4.mb-lg-0
              p #[b Enfoque:] empresa.
              p #[b Etapa:] mejoramiento.

    p(data-aos="fade-right").mb-5 La mejora continua consiste en cumplir de manera repetida el ciclo completo de planear, hacer, verificar y actuar, con retroalimentación constante y agregando todas las acciones preventivas, correctivas y de seguimiento que sean necesarias para que los procesos cada día sean afianzados y mejorados. 

    .row.justify-content-center.align-items-center.mb-5
      .col-6.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Ciclo PHVA </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/37.svg', alt='En la figura 2 se muestra el ciclo PHVA, planear, hacer, verificar y actuar.')

    .row.justify-content-center.align-items-center.mb-5
      .col-6.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 2.] <em>Ciclo PHVA </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/37-m.svg', alt='En la figura 2 se muestra el ciclo PHVA, planear, hacer, verificar y actuar.')

    .BGIMG03.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-1.col-sm-1.col-md-1.mb-4.mb-md-0
          img(src="@/assets/curso/temas/tema1/38.svg")

        .col-md.col-lg-9
          h3 Ciclo de la calidad PHVA
          p.mb-4 Para ampliar la conceptualización se invita a realizar la lectura del libro Ciclo de la calidad PHVA
        .col-md.col-lg-2
          a.boton.color-acento-botones.texto-blanco(href=('https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/129837?page=1') target="_blank" type="application/pdf")
            span Enlace web
            i.fas.fa-file-download


    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Comunicación

    .row.justify-content-center.align-items-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema1/39.svg')

      .col-8
        p Lo primero que se debe abordar son los aspectos generales en torno a la comunicación empresarial y los equipos de trabajo, ya que por medio de ellos se logra operativizar todas las acciones propuestas en los procesos de mejora continua. La comunicación empresarial es definida como el grupo de procesos que se tienen en una organización con el objetivo de transmitir información de tipo institucional tanto a nivel interno como externo, por medio de diversas estrategias. Trabajar en pro de la comunicación empresarial favorece la realización de los objetivos de la compañía y por tanto la adecuada función de todos los colaboradores internos. 
        p.mb-5 Para favorecer la correcta ejecución de estos objetivos, se debe comprender los diferentes elementos que componen la comunicación empresarial:     

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/40.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | #[b Emisor:] es quien comienza la acción de comunicar y dar la información; el emisor es quien decide de qué manera va a realizar la acción.
          br
          li 
            i.fas.fa-circle
            | #[b Receptor:] es quien recibe el mensaje o la información, ajustándose e interpretando, teniendo en cuenta el lenguaje utilizado y otros elementos importantes como la comunicación no verbal o la entonación; por lo general la interpretación es la que determina la capacidad de generar una respuesta al emisor si el receptor así lo requiere.  
          br
          li 
            i.fas.fa-circle
            | #[b Mensaje:] es el contenido o información generado; puede ser dado cara a cara o por medio de un correo electrónico, por mensaje escrito u otro tipo de estrategias como las redes sociales. 
          br
          li 
            i.fas.fa-circle
            | #[b Canal de comunicación:] es el medio por el que se entrega la información o mensaje dado. 
          br
          li 
            i.fas.fa-circle
            | #[b Código:] es el elemento básico en la comunicación, es aquel lenguaje de tipo hablado o escrito que el emisor utiliza para crear el mensaje que necesita entregar. 
          br
          li 
            i.fas.fa-circle
            | #[b Contexto:] es el entorno que encierra al emisor y al receptor en el instante de realizarse la comunicación.
          br
          li 
            i.fas.fa-circle
            | #[b La relación empresarial:] todos los trabajadores y colaboradores internos deben saber cuál es su función dentro de la empresa.
          br
          li 
            i.fas.fa-circle
            | #[b El factor humano:] dentro de la comunicación empresarial debe hacerle saber a los empleados su importancia dentro de la empresa. 
          br
          li 
            i.fas.fa-circle
            | #[b La cultura de la empresa:] transmitir de forma apropiada la cultura de la empresa a los empleados permite reforzar el sentido de pertenencia y la unión del empleado con su entorno laboral. 

    p(data-aos="fade-right").mb-5 Así mismo, es importante conocer los componentes del proceso comunicativo:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#EAF2E1")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/41.svg' alt='AvatarTop')
        h2.text-center Fuente
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Las personas. 
          li 
            i.lista-ul__vineta
            | Los bancos de datos. 
          li 
            i.lista-ul__vineta
            | Los escritos.


      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E6EBFB")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/42.svg' alt='AvatarTop')
        h2.text-center Mensaje
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Calidad de los contenidos. 
          li 
            i.lista-ul__vineta
            | Calidad del lenguaje: 
          li 
            i.lista-ul__vineta
            | Codificar la comunicación organizacional. 
          li 
            i.lista-ul__vineta
            | Decodificar e interpretar los términos que se agreguen a la comunicación empresarial.


      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#EAF2E1")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/43.svg' alt='AvatarTop')
        h2.text-center Canal (Medio)
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Oral. 
          li 
            i.lista-ul__vineta
            | Escrito. 
          li 
            i.lista-ul__vineta
            | Técnico. 
          li 
            i.lista-ul__vineta
            | Gesticular.

      .col-md-6.col-lg.tarjeta--tabla.p-4(style="background-color:#E6EBFB")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/44.svg' alt='AvatarTop')
        h2.text-center Emisor y receptor
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Habilidades en la comunicación. 
          li 
            i.lista-ul__vineta
            | Adecuada predisposición para la comunicación. 
          li 
            i.lista-ul__vineta
            | Nivel de conocimiento. 
          li 
            i.lista-ul__vineta
            | Nivel de experiencia. 
          li 
            i.lista-ul__vineta
            | Nivel de cultura. 
          li 
            i.lista-ul__vineta
            | Nivel de claridad.

    p(data-aos="fade-right").mb-5 Adicionalmente, se debe tener presente que la asertividad en la comunicación empresarial dentro del ciclo PHVA puede tener elementos como:

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/45.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	Planificación estratégica.
          br
          li 
            i.fas.fa-circle
            |	Profesionales expertos en técnicas de comunicación.
          br
          li 
            i.fas.fa-circle
            |	Reconocimiento del público con el que se interactúa.
          br
          li 
            i.fas.fa-circle
            |	Posibles canales de comunicación.
          br
          li 
            i.fas.fa-circle
            |	Medición de los resultados.

    .row.justify-content-center.align-items-center.mb-5
      .col-5
        img(src='@/assets/curso/temas/tema1/46.png')

      .col-7
        p Tener presente que la comunicación empresarial tiene como objetivos:
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	Motivar.
          li 
            i.fas.fa-circle
            |	Facilitar el control sobre los resultados o metas definidas.
          li 
            i.fas.fa-circle
            |	Mejorar la interacción entre las áreas funcionales de la empresa.
          li 
            i.fas.fa-circle
            |	Favorecer el flujo de la información.
          li 
            i.fas.fa-circle
            |	Entregar una correcta retroalimentación respecto a la comunicación generada.

    p(data-aos="fade-right") La comunicación empresarial, tiene dos (2) tipos: interna y externa.
    p(data-aos="fade-right").mb-5 La comunicación interna es aquella que se genera al interior de la empresa. Por medio de ella se establecen canales y medios de comunicación:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/47.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación descendente
        p Proviene de los niveles más altos de la jerarquía de la empresa hacia los trabajadores de menor nivel; ejemplo, del gerente a los trabajadores. Es unidireccional, se usa para notificaciones, instrucciones o entrega de otro tipo de información.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/48.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación horizontal
        p Se da entre trabajadores del mismo rango, por ejemplo, colegas de la misma área. No es de orden jerárquico, se usa para compartir datos, información, dar gestión a solicitudes entre otras.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/49.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación ascendente
        p De áreas operativas hacia las de gestión o gerencia. Se utiliza como método de retroalimentación de empleados a superiores, proporcionando ideas, solicitudes, sugerencias u cualquier solicitud o petición de tipo formal.
      
    p(data-aos="fade-right").mb-5 Adicional se debe complementar la información de la comunicación interna, con la descripción de las formas de transferir la comunicación a nivel organizacional (ver figura): 

    .row.justify-content-center.align-items-center.mb-5
      .col.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Formas de comunicación</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/95.svg', alt='La figura 3 indica las formas de comunicación, las cuales pueden ser en rueda, en círculo y en canales completos.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    .row.justify-content-center.align-items-center.mb-5
      .col.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Formas de comunicación</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/95-m.svg', alt='La figura 3 indica las formas de comunicación, las cuales pueden ser en rueda, en círculo y en canales completos.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    p(data-aos="fade-right").mb-5 Por otro lado, la comunicación externa es aquella que permite establecer contacto con el público, los clientes u otras personas externas a la organización. Los objetivos principales de la comunicación externa corresponden con el manejo de la imagen y posición competitiva:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/53.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación estratégica
        p Su objetivo es obtener datos importantes de la competencia para generar una posición competitiva.
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/54.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación operativa
        p Está relacionada con la actividad y el desarrollo diario de la compañía. Se genera con los públicos de la organización de manera cotidiana. Incluye todos los tipos de comunicaciones públicas como por ejemplo clientes, proveedores y competidores.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/55.svg', alt='Texto que describa la imagen')
        h3.text-center Comunicación de notoriedad
        p Se genera como estrategia para proyectar la empresa como marca, es decir, la imagen de los productos o servicios. Se realizan actividades como promociones, marketing, publicidad y patrocinios.

    p(data-aos="fade-right").mb-5 Con el fin de permitir la comunicación, se cuenta con los medios de comunicación empresarial, que corresponden con recursos:

    .row.justify-content-center.mb-5 
      .col-10 
        .tarjeta.color-secundario2.p-4(style="border-radius:0")
          .row.align-items-center 
            .col-2
              img(src='@/assets/curso/temas/tema1/56.svg')
            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Escritos.
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Hablados.
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Canales de tipo tecnológico: reuniones, intranet, correo electrónico, chats internos, redes sociales corporativas, videoconferencia, blog, televisión corporativa y teléfono, entre otros.

    p(data-aos="fade-right").mb-5 Una correcta comunicación establece relaciones funcionales dentro de las diversas áreas de la empresa y fortalece el trabajo en equipo. Para que la comunicación sea correcta y veraz, se debe cumplir con algunas características como: 

    .row.justify-content-center.mb-5 
      .col-10 
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.align-items-center 
            .col-2
              img(src='@/assets/curso/temas/tema1/57.svg')
            .col-10
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Tener claridad en los conceptos que se van a emitir. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | El emisor y el receptor deben utilizar el mismo código o lenguaje. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Se deben eliminar la mayoría de los obstáculos o ruidos presentes en la comunicación. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Utilizar el canal de comunicación más conveniente. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Se debe tener en cuenta el momento situacional por el cual se esté dando el proceso de comunicación. 

    p(data-aos="fade-right").mb-5 La comunicación empresarial cuenta con etapas que se deben cumplir para darle correcta ejecución a la misma y dependerá en gran medida si la comunicación es unidireccional o bidireccional. A saber, cada una debe cumplir con: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Comunicación unidireccional </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/58.svg', alt='En la figura 4 se muestra un ejemplo de la comunicación unidireccional.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Comunicación unidireccional </em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/58-m.svg', alt='En la figura 4 se muestra un ejemplo de la comunicación unidireccional.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Comunicación bidireccional</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/59.svg', alt='En la figura 5 se muestra un ejemplo de la comunicación unidireccional.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    .row.justify-content-center.align-items-center.mb-5
      .col-10.movil(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 5.] <em>Comunicación bidireccional</em>
        figure
          img.mb-3(src='@/assets/curso/temas/tema1/59-m.svg', alt='En la figura 5 se muestra un ejemplo de la comunicación unidireccional.')
        figcaption Nota: Dirección de la salud. Drovetta (1992).

    p(data-aos="fade-right").mb-5 Para que las personas puedan lograr una comunicación asertiva y efectiva se deben cumplir con los elementos descritos anteriormente, los cuales permiten fortalecer los lazos organizacionales y el trabajo en equipo. 

    .BGIMG01.p-4.mb-5
      PasosB.color-primario
        .row
          .col-md-7.mb-4.mb-md-0
            p El trabajo en equipo se genera por la necesidad de lograr el alcance de las metas empresariales por medio de diversas:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                |	Estrategias.
              li 
                i.fas.fa-circle
                |	Metodologías.
              li 
                i.fas.fa-circle
                |	Procedimientos.
              li 
                i.fas.fa-circle
                |	Técnicas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/60.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Adicional a los beneficios estratégicos, se obtienen beneficios a nivel personal como:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                |	Sentido de pertenencia.
              li 
                i.fas.fa-circle
                |	Mejora de rendimientos.
              li 
                i.fas.fa-circle
                |	Actitudes.
              li 
                i.fas.fa-circle
                |	Habilidades.
              li 
                i.fas.fa-circle
                |	Seguridad.
              li 
                i.fas.fa-circle
                |	Autoestima.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/61.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Para que exista un verdadero trabajo en equipo deben existir elementos como:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                |	Complementariedad.
              li 
                i.fas.fa-circle
                |	Comunicación.
              li 
                i.fas.fa-circle
                |	Coordinación.
              li 
                i.fas.fa-circle
                |	Confianza.
              li 
                i.fas.fa-circle
                |	Compromiso. 
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/62.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Los principales beneficios del trabajo en equipo consisten en:
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                |	Creación de sinergias.
              li 
                i.fas.fa-circle
                |	Favorecer la proactividad y empoderamiento de los trabajadores.
              li 
                i.fas.fa-circle
                |	Crear estructuras horizontales.
              li 
                i.fas.fa-circle
                |	Afianzar la toma de responsabilidades.
              li 
                i.fas.fa-circle
                |	Mejorar los lazos interpersonales.

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/63.png', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            p Las condiciones esenciales para conformar un equipo de trabajo consisten en: 
            ul.lista-ul--color
              li 
                i.fas.fa-circle
                |	Tener los objetivos claros ya que cada meta debe ser específica, medible y relevante. 
              li 
                i.fas.fa-circle
                |	Establecer un correcto compromiso de todos los miembros del equipo. 
              li 
                i.fas.fa-circle
                |	Estructurar la correcta interacción entre los compañeros del equipo. 
              li 
                i.fas.fa-circle
                |	Crear líneas de comunicación eficientes. 
              li 
                i.fas.fa-circle
                |	Establecer el correcto proceso para la toma de decisiones. 

          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/64.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-3
        img(src='@/assets/curso/temas/tema1/65.svg')
      .col-9
        p Más allá de la conformación del equipo de trabajo, es necesario que estos sean eficientes, lo que se logra por medio de: 
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	#[b Preparación:] ayuda a que el equipo tenga conocimiento de los roles, así como la correcta comprensión de las tareas para lograr los objetivos planteados. Se deben asignar las diversas tareas acordes con el perfil de cada miembro del equipo, tanto desde lo conceptual como lo aptitudinal y actitudinal. 
          li 
            i.fas.fa-circle
            |	#[b Espíritu de equipo:] las relaciones interpersonales de los miembros del equipo influyen en gran medida en el desempeño y desarrollo de las tareas asignadas. Es recomendable que exista un líder de equipo quien debe estar enterado de todas las situaciones y gestionarlas entre los miembros del equipo, garantizando un buen clima y ambiente laboral.   
          li 
            i.fas.fa-circle
            |	#[b Motivación:] todo equipo puede mejorar el nivel de productividad y ser más funcional cuando cada miembro siente motivación hacia el logro de los objetivos tanto desde lo individual como lo colectivo.  

    p(data-aos="fade-right").mb-5 En el año 2015, Mario Neuman, experto en la organización de equipos, explicó cuáles son los perfiles que podrían ser ideales para organizar los equipos de trabajo. Dentro de la descripción que realizó en su libro “Proyecto Safari” se destacan los siguientes perfiles:

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Impulsor
            p Es similar al perfil de líder, se caracteriza por ser dinámico, enérgico y resolutivo. Le gusta que exista control o liderazgo sobre sus acciones y que se le oriente en lo que debe hacer. Su principal característica dentro del equipo de trabajo es ejercer presión, mediar las discusiones, organizar los resultados y darles acción a las tareas propuestas. Ante la presión que ejerce sobre los miembros del equipo, puede llegar a faltarles al respeto y provocar polémicas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/66.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Creativo
            p Corresponde a la persona que tiene una enorme capacidad para resolver problemas y ejecutar estrategias. Tiene ideas de innovación y existe mucha confianza en sus capacidades. Por ser altamente proactivos en la búsqueda y aporte de ideas nuevas, suelen creer que sus ideas son mejores que las de los demás y evitan escuchar las ideas de otros.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/67.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Observador
            p Se caracteriza por ser una persona de personalidad introvertida, se le hace difícil expresar sus opiniones y no suele tomar la iniciativa. Su principal característica es que posee una gran inteligencia, capacidad de crítica, ideas objetivas, de personalidad tranquila y analiza de forma adecuada todas las consecuencias producto de las acciones realizadas. Este tipo de personalidad favorece el análisis del negocio desde diferentes ángulos, ya que puede comparar la viabilidad de las ideas, propuestas y resultados.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/68.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Disciplinado
            p Tiene una mente cerrada que no le permite ir afuera de los parámetros establecidos, por lo general es inflexible y le cuesta enfrentarse a diversos cambios y otras oportunidades. Por lo general son altamente productivos en sus actividades laborales y le gusta planear y desarrollar sus actividades teniendo la posibilidad de que alguien le marque su camino.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/69.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Mediador
            p Ayuda a mediar todo tipo de tensiones generadas en el equipo de trabajo, logrando dar soluciones oportunas ante las diversas situaciones que se pueden presentar. Su personalidad es ser sociable, de escucha activa y procura que todos estén cómodos y a gusto. Es altamente diplomático, lo que puede generar dificultades en la toma de decisiones frente a los demás.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/70.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Investigador
            p Demuestra ánimo e ilusión cuando inicia un nuevo proyecto, suele ir perdiendo el ánimo en el transcurso del tiempo. Es de personalidad sociable y de actitud positiva frente a las actividades cotidianas. Posee una buena capacidad para comunicarse con los demás y encontrar los recursos que se requieran. Tiene buenas capacidades comunicativas, por lo cual, puede ayudar a gestionar contactos que sean pertinentes para la empresa.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/71.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Perfeccionista
            p Está en la disposición de trabajar muchas horas para que el proyecto tenga buen fin. Es una persona meticulosa e inquieta, lo que genera que este tipo de personalidad no le guste delegar funciones a otras personas por falta de confianza. Este tipo de personalidad es necesaria en el equipo de trabajo para que se cumplan con las tareas y los plazos definidos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/72.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Líder o coordinador
            p Este tipo de personalidad es responsable de la dinámica general del equipo de trabajo. Es quien guía al equipo para concretar los objetivos organizacionales, por medio de la escucha activa, la motivación constante y la retroalimentación positiva.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/73.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right") En relación al liderazgo, es necesario indicar que cumple con varias características que complementan el trabajo organizacional y por tanto contribuyen a las acciones de mejora continua en torno al fortalecimiento organizacional. 
    p(data-aos="fade-right").mb-5 El liderazgo es definido como aquella capacidad que tiene una persona de influir sobre los demás en torno a la toma de decisiones, es decir, el líder ejerce cierto poder sobre los demás. Las cualidades básicas con las que debe contar una persona líder son la persuasión, el poder, el nivel de influencia, el entusiasmo y la motivación. 
    
    .row.justify-content-center.align-items-center
      .col-10
        .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema1/74.svg')

            .col-10
              p Se debe diferenciar los conceptos entre líder, liderato y liderazgo. 
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | #[b Líder:] es aquella persona con capacidad para influir en los demás para darles orientación y dirección de manera efectiva para alcanzar las metas y objetivos propuestos. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | #[b Liderato:] corresponde con el #[em status] o la posición del líder dentro del equipo de trabajo. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | #[b Liderazgo:] se considera liderazgo a la capacidad de influir, guiar y dirigir a los miembros del equipo hacia la obtención de las metas y los objetivos organizacionales. 

    p(data-aos="fade-right").mb-5 Dentro de los tipos de liderazgo se pueden identificar: 

    .row.justify-content-center.mb-5
      .col-4
        img(src='@/assets/curso/temas/tema1/75.svg').mb-5
        h3 Autocrático o autoritario
        p Este tipo de líder crea las metas sin contar con la participación del equipo de trabajo. Posee poca fe y entusiasmo en las personas subordinadas. A nivel general cree que el dinero es la única recompensa para sus colaboradores, así que da órdenes, no permite las preguntas ni tampoco entrega explicaciones. 
      .col-4
        img(src='@/assets/curso/temas/tema1/76.svg').mb-5
        h3 Democrático o participativo
        p Las tomas de decisiones son compartidas entre el equipo de trabajo y el líder, ya que éste es un miembro más del equipo. Este tipo de líder cree en su equipo y por tanto las tareas son asimiladas de forma libre por cada uno de los miembros del equipo sin ejercer presiones, ya que lo más importante es la asimilación de responsabilidades en busca del bien común. Adicional a esto mantiene una comunicación constante, fluida y si es necesario entrega las explicaciones que el equipo requiera. 
      .col-4
        img(src='@/assets/curso/temas/tema1/77.svg').mb-5
        h3 Laissez faire (liberal)
        p Existe libertad completa de equipo de trabajo con una participación limitada por parte del líder, quien no establece las metas claras para el equipo de trabajo. La toma de decisiones es asumida por cualquier miembro del equipo de trabajo y el líder no tiene ningún intento por evaluar o darle control a los sucesos o eventos que suceden y que pueden afectar la organización.   

    p(data-aos="fade-right").mb-5 Para finalizar es importante abordar la reflexión realizada por el señor Alfonso Silíceo, quien aclara a que se refiere el liderazgo y la jerarquía. Acorde con lo expuesto por esta persona se puede presentar los siguientes escenarios: 

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        .tarjeta.color-primario1.p-4(style="border-radius:0")
          .row.justify-content-center.align-items-center
            .col-2
              img(src='@/assets/curso/temas/tema1/78.svg')

            .col-10
              p Se debe diferenciar los conceptos entre líder, liderato y liderazgo. 
              ul.lista-ul--color
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Presencia de influencia positiva, aunque no haya jerarquía, título poder, es considerado #[b liderazgo.] 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Presencia de jerarquía, título y fuerza de poder con ausencia de influencia positiva, no es considerado liderazgo. 
                li 
                  i.fas.fa-chevron-right(style="color:#00223D")
                  | Presencia de influencia positiva y adicional a esto título, jerarquía y fuerza de poder, es considerado #[b liderazgo de mayor impacto] y logro efectivo de resultados. 
                  
    p(data-aos="fade-right") Para que las actividades organizacionales se realicen de manera articulada y adecuada, es importante efectuar una adecuada #[b conformación de los equipos de trabajo], acorde con los perfiles ocupacionales y profesionales y las necesidades a suplir en el marco del direccionamiento estratégico.
    p(data-aos="fade-right").mb-5 La conformación de los equipos de trabajo debe estar basada en las necesidades organizacionales, dentro de los tipos de equipos de trabajo se destacan: 

    .BGIMG01.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Informales
            p Se organizan de manera natural y con un objetivo social principalmente. Por lo general en este tipo de equipo, los miembros son unidos por un interés en común acorde con los objetivos organizacionales planteados. La conformación de estos equipos suele darse de manera orgánica sin que existe una coordinación o planeación detrás de ella.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/79.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Tradicionales
            p Se basan en las funciones y actividades que vinculan a los miembros. Su conformación suele darse de manera controlada por parte de la organización teniendo en cuenta los objetivos estratégicos planteados.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/80.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Para resolver problemas
            p Se conforman partiendo de algún tipo de dificultad o problema que debe ser resuelto. La conformación suele darse con la unión de los trabajadores que provienen de diversas áreas de la empresa y los cuales se integran para darle solución a lo que se requiera.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/81.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 De liderazgo
            p Está conformado por los miembros requeridos y el líder responsable del equipo de trabajo. Este líder ayuda en la gestión de procesos que influyen en el alcance de metas y objetivos estratégicos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/82.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Auto dirigidos
            p Toman los objetivos a cumplir y los ejecutan de manera autónoma sin existencia de un líder o una ejecución jerárquica. Su conformación es flexible.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/83.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h3 Virtuales
            p Tiene como objetivo realizar actividades de manera virtual. La conformación se operativiza por medio de diversas plataformas virtuales.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/84.png', alt='Texto que describa la imagen')

    p(data-aos="fade-right").mb-5 Para la conformación de los equipos de trabajo es importante tener presente los siguientes elementos: 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/85.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	Definir la dinámica de trabajo, cómo va a funcionar el sistema de jerarquía, la distribución de las responsabilidades y los liderazgos que surgirán. 
          br
          li 
            i.fas.fa-circle
            |	Se deben generar los códigos, reglas y la estructura general que deberá tener en cuenta el equipo de trabajo para el logro de los objetivos estratégicos. 
          br
          li 
            i.fas.fa-circle
            |	Para realizar el seguimiento a los equipos de trabajo, es importante que se genere una evaluación de desempeño acorde con los objetivos planteados y de esta manera se puede evaluar el rendimiento global del equipo.  
          br
          li 
            i.fas.fa-circle
            |	Los equipos de trabajo deben contar con motivación permanente. 
          br
          li 
            i.fas.fa-circle
            |	Se debe promover la colaboración interna entre los miembros del equipo de trabajo. Al promover la debida colaboración, se fomenta un clima organizacional positivo y favorable que ayude en el desarrollo de las actividades. 
          br
          li 
            i.fas.fa-circle
            |	Es importante gestionar la capacitación y entrenamiento de los miembros del equipo de trabajo con el fin de fomentar el desarrollo de las capacidades lo que impacta de manera positiva la ejecución de las actividades. 
          br
          li 
            i.fas.fa-circle
            |	Es positivo generar retroalimentación permanente con el fin de identificar los aspectos por mejorar. 
          br
          li 
            i.fas.fa-circle
            |	Se debe prevenir la desintegración del equipo de trabajo ya que esto impacta de manera negativa en la ejecución de las actividades asignadas. 

    .row.mb-5
      .col-5
        img(src='@/assets/curso/temas/tema1/86.png')
      .col-7
        p Para que los equipos de trabajo puedan lograr las metas propuestas es necesario:
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	Reconocer la meta general.
          li 
            i.fas.fa-circle
            |	Tomar las decisiones pertinentes y oportunas.
          li 
            i.fas.fa-circle
            |	Realizar el debido seguimiento a cada uno de los miembros del equipo de trabajo.
          li 
            i.fas.fa-circle
            |	Mantener el clima organizacional.
          li 
            i.fas.fa-circle
            |	Mantener unas condiciones adecuadas de trabajo.

    p(data-aos="fade-right").mb-5 A nivel general, las técnicas que se usan para planear el trabajo colaborativo son: 

    .tarjeta.color-secundario2.p-4(style="border-radius:0").mb-5
      .row.justify-content-center.align-items-center
        .col-2
          img(src='@/assets/curso/temas/tema1/87.svg')

        .col-10
          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              | #[b Realizar la identificación del problema o metas por lograr:] por medio de esta identificación se puede analizar lo que se pretende lograr con las acciones que ejecute el equipo colaborativo. 
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              | #[b Conocer los conocimientos previos:] se debe evaluar y definir cuáles son los conocimientos, habilidades, aptitudes y actitudes de cada uno de los miembros con el fin de saber en qué actividades puede aportar cada miembro. Teniendo este amplio conocimiento, se pueden asignar las tareas a cada miembro del equipo colaborativo.  
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              | #[b Consolidar una propuesta para el trabajo colaborativo:] se debe detallar el plan de acción a seguir por parte del equipo colaborativo, teniendo en cuenta la asignación de responsabilidades y tiempos de ejecución. 
            li 
              i.fas.fa-chevron-right(style="color:#00223D")
              | #[b Tener en cuenta el trabajo individual:] si bien se ha creado el equipo colaborativo con el fin de cumplir las metas dadas, cada miembro del equipo tiene la posibilidad de trabajar de manera individual acorde con las tareas que le hayan sido asignadas, sin olvidar que hace parte del equipo y teniendo presente que las decisiones de impacto deben ser analizadas y consultadas con los demás miembros. 
       
    p(data-aos="fade-right").mb-5 Otros elementos para tener en cuenta dentro de las técnicas para planear el trabajo colaborativo son: 

    AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario1")(data-aos="flip-up").mb-5 
      .row(titulo="Definir el ambiente en donde se desarrollan las actividades")
        .col-md-6.mb-4.mb-md-0
          p La descripción del ambiente debe incluir 

          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Lugar físico:] distribución.
            li 
              i.lista-ul__vineta
              | #[b Clima organizacional:] motivación. 
            li 
              i.lista-ul__vineta
              | #[b Sensibilización:] capacidad de socialización. 
            li 
              i.lista-ul__vineta
              | #[b Dinamismo:] visualización del equipo de trabajo. 
            li 
              i.lista-ul__vineta
              | #[b Recursos:] materiales con los cuales cuenta el equipo colaborativo.

      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/88.png', alt='Texto que describa la imagen')

      .row(titulo="Definir la participación de los miembros del equipo")
        .col-md-6.mb-4.mb-md-0
          p Se debe dejar claro cómo se va a dar la participación e interacción del equipo de trabajo. 
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Trabajo por grupos o subgrupos. 
            li 
              i.lista-ul__vineta
              | Conferencias presenciales o virtuales. 
            li 
              i.lista-ul__vineta
              | Congresos. 
            li 
              i.lista-ul__vineta
              | Panel. 
            li 
              i.lista-ul__vineta
              | Simposios.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/89.png', alt='Texto que describa la imagen')

      .row(titulo="Conocer el grado de madurez de los miembros del equipo")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | #[b Grado de interés:] seguridad en las acciones a realizar. 
            li 
              i.lista-ul__vineta
              | #[b Conciencia:] la actitud frente a las actividades propuestas. 
            li 
              i.lista-ul__vineta
              | #[b Aptitud:] experiencia. 
            li 
              i.lista-ul__vineta
              | Capacidad de organización, planeación y perseverancia.
           
      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/90.png', alt='Texto que describa la imagen')

      .row(titulo="Concretar los propósitos del equipo colaborativo")
        .col-md-6.mb-4.mb-md-0
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | La capacidad de participación. 
            li 
              i.lista-ul__vineta
              | Las destrezas o habilidades. 
            li 
              i.lista-ul__vineta
              | Las actitudes y hábitos. 
            li 
              i.lista-ul__vineta
              | El desempeño y las competencias. 
            li 
              i.lista-ul__vineta
              | Las situaciones que se puedan presentar. 
            li 
              i.lista-ul__vineta
              | Las opiniones y capacidad de decisión.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/91.png', alt='Texto que describa la imagen')

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/92.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Dentro del equipo colaborativo es indispensable contar con un moderador o líder al cual se le debe evaluar: 
        br
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            | Perfil profesional y nivel de responsabilidad. 
          br
          li 
            i.fas.fa-circle
            | Preparación y actualización. 
          br
          li 
            i.fas.fa-circle
            | Madurez. 
          br
          li 
            i.fas.fa-circle
            | Seguridad y capacidad de dicción. 
          br
          li 
            i.fas.fa-circle
            | Vitalidad y entusiasmo.

    p(data-aos="fade-right") Es indispensable que los equipos de trabajo y las demás acciones realizadas por parte de los miembros de la organización, cuente con la debida #[b gestión del talento humano], el cual corresponde con el proceso que realiza todas las acciones de administrar el recurso humano, teniendo en cuenta el hecho de destacar las acciones positivas de cada colaborador interno de la empresa. La gestión implica la búsqueda del talento humano y la retención de este dentro de la empresa. 
    p(data-aos="fade-right").mb-5 Acorde con lo expuesto por John M. Ivancevich en el año 2004, en su libro Administración de los recursos humanos, esta administración cuenta con los siguientes objetivos: 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/93.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	Utilizar de manera oportuna y eficiente las habilidades y competencias de los recursos humanos. En este objetivo es necesario hacer productivas todas las fortalezas y habilidades del personal. 
          br
          li 
            i.fas.fa-circle
            |	Generar espacios de formación y capacitación al personal. 
          br
          li 
            i.fas.fa-circle
            |	Promover el trabajo oportuno y eficiente, fortaleciendo la cultura de entrega de incentivos en función del aprendizaje, la agilidad y mayor confianza en las actividades ejecutadas. 
          br
          li 
            i.fas.fa-circle
            |	Generar un ambiente de armonía y equilibrio entre los gerentes de operación y los encargados de recursos humanos. 
          br
          li 
            i.fas.fa-circle
            |	Marcar las directrices estratégicas del área para que se logre ser una rama activa del equipo de dirección. 
          br
          li 
            i.fas.fa-circle
            |	Contar con un plan que se integre todos los objetivos, políticas y procedimientos de manera coherente y se puedan cumplir con todas las metas propuestas en el área. 
          br
          li 
            i.fas.fa-circle
            |	Definir los objetivos generales y específicos del área, además de los plazos para su debido cumplimiento. 
          br
          li 
            i.fas.fa-circle
            |	Concretar los límites de las acciones a realizar. 
          br
          li 
            i.fas.fa-circle
            |	Definir a qué instancia superior está sujeta el área de gestión del talento humano concretando aquellas actividades que estén subordinadas y requieran de aprobación por parte de un área directiva superior. 

    p(data-aos="fade-right").mb-5 La gestión del talento humano incluye varios elementos o actividades que se desarrollan dentro del área, estas actividades son: 

    .row.mb-5
      .col-6
        img(src='@/assets/curso/temas/tema1/94.png')
      .col-6 
        ul.lista-ul--color
          li 
            i.fas.fa-circle
            |	El proceso de reclutamiento del personal: esta actividad incluye la planeación, la evaluación, la selección del personal y finalmente el proceso de contratación. 
          li 
            i.fas.fa-circle
            |	La selección del personal. 
          li 
            i.fas.fa-circle
            |	La contratación del personal. 
          li 
            i.fas.fa-circle
            |	La integración del trabajador a la empresa. 
          li 
            i.fas.fa-circle
            |	La incorporación del trabajador en el lugar adecuado. 
          li 
            i.fas.fa-circle
            |	El proceso de evaluación de desempeño. 
          li 
            i.fas.fa-circle
            |	La acción de terminación laboral. 
          li 
            i.fas.fa-circle
            |	Trabajar por el clima laboral. 
          li 
            i.fas.fa-circle
            |	Realizar la formación de los trabajadores. 
          li 
            i.fas.fa-circle
            |	Garantizar la capacitación de los trabajadores. 
          li 
            i.fas.fa-circle
            |	Fortalecer los procesos de promoción de los trabajadores. 
          li 
            i.fas.fa-circle
            |	Promover los procesos de conciliación. 
          li 
            i.fas.fa-circle
            |	Prevenir los accidentes y riesgos laborales. 
          li 
            i.fas.fa-circle
            |	Garantizar las condiciones de higiene y seguridad en el trabajo. 
          li 
            i.fas.fa-circle
            |	Procurar aspectos varios que se puedan presentar en la ejecución de las actividades tales como residencia y alimentación, por ejemplo. 
          li 
            i.fas.fa-circle
            |	Realizar la elaboración de las nóminas. 
          li 
            i.fas.fa-circle
            |	Garantizar el pago de los sueldos, honorarios, vacaciones, primas y demás pagos que apliquen. 
          li 
            i.fas.fa-circle
            |	Generar el pago de la liquidación cuando la relación laboral se finalice. 
          li 
            i.fas.fa-circle
            |	Garantizar el pago de la seguridad social acorde con la modalidad de contratación. 
          li 
            i.fas.fa-circle
            |	Elaborar los contratos de trabajo acorde con la modalidad de contratación. 
          li 
            i.fas.fa-circle
            |	Controlar la asistencia de los trabajadores, así como el horario de entrada y salida acorde con la modalidad de contratación. 
          li 
            i.fas.fa-circle
            |	Realizar comités de seguimiento con levantamiento de acta formal por cada reunión realizada. 
          li 
            i.fas.fa-circle
            |	Garantizar la operatividad del reglamento interno de trabajo. 
          li 
            i.fas.fa-circle
            |	Dar trámite a los permisos solicitados, así como al período de vacaciones. 
          li 
            i.fas.fa-circle
            |	Realizar la terminación del contrato laboral cuando el caso lo amerite. 


    p(data-aos="fade-right").mb-5 El hecho de contar con un buen proceso de gestión del talento humano tiene algunos beneficios dentro de la organización los cuales pueden describirse como mejor productividad, menos pérdidas económicas, incremento de la satisfacción laboral y mayor lealtad y compromiso por parte de los colaboradores internos. 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
