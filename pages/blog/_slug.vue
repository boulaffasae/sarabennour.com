<template>
  <section>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return {
      post,
    }
  },
  head() {
    return {
      title: `${this.post.title} - Sara Bennour`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
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
          content: `${this.post.title} - Sara Bennour`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://sarabennour.com/images/blog/${this.post.slug}/og-image.jpeg`,
        },
      ],
    }
  },
}
</script>
