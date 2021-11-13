<template>
  <section>
    <h1>Blog</h1>
    <ul v-for="post in posts" :key="post.slug">
      <li>
        <h2>
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: post.slug } }">{{
            post.title
          }}</NuxtLink>
        </h2>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts,
    }
  },
  head() {
    return {
      title: 'Blog - Sara Bennour',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Blog',
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Blog' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Blog',
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Blog',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Blog',
        },
      ],
    }
  },
}
</script>
