<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Hay que recordar que el control es una de las funciones administrativas que forma parte de las actividades desarrolladas en el ciclo planear, hacer, verificar y actuar, es decir, en la mejora continua. Dentro del ciclo, el control tiene mayor participación en la verificación o comprobación. Por medio de las acciones de control se realiza la validación y verificación de todas las actividades realizadas, determinando si existe el cumplimiento de los programas, planes y proyectos planeados, lo cual favorece la formulación de acciones correctivas y de mejora. 
    p En conclusión, el control administrativo permite definir los estándares (cantidad, calidad, tiempo y costos) para la evaluación de los resultados obtenidos con el fin de corregir desviaciones, prevenirlas y mejorar continuamente las acciones. Tanto la medición de estándares y demás elementos de la planeación se hacen por medio del uso de indicadores de productividad, eficiencia, eficacia, efectividad, calidad, capacidad, ganancia, rentabilidad, entre otros.
    p.mb-5 Partiendo de lo anterior y lo plasmado en este componente formativo, a continuación, se consolida su información a través del siguiente mapa conceptual: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
