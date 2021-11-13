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
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.description,
        },
      ],
    }
  },
}
</script>
