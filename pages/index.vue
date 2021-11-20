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
        // Twitter Card
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Sara Bennour - Développeur Front-End',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Développeur Front-End',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://sarabennour.com/assets/images/og-image.jpg',
        },
      ],
    }
  },
}
</script>
