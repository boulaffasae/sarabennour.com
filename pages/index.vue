<template>
  <section>
    <h1>Bonjour ! Je suis Sarah</h1>
    <div>Développeur Front-End</div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sara Bennour - Développeur Front-End',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Développeur Front-End',
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Sara Bennour' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Développeur Front-End',
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Sara Bennour',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Développeur Front-End',
        },
      ],
    }
  },
}
</script>
