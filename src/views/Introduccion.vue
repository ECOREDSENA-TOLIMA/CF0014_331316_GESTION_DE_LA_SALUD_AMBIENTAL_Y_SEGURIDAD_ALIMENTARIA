<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p(data-aos="fade-right").mb-5 Estimado aprendiz, se da la bienvenida al componente que abarca los elementos de gestión de la calidad fundamentales en el desarrollo y ejecución de actividades que se generen en torno a la salud ambiental, dándole soporte a los lineamientos gubernamentales enfocados en salud pública y gestión de las condiciones sanitarias.
    figure
      .video 
        iframe(width="560" height="315" src="https://www.youtube.com/embed/c6_PPnrxQBE?si=acQPtESZ3-C0LAL2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen)




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
