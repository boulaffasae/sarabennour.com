<template>
  <section>
    <h1>Blog</h1>
    <ul v-for="post in posts" :key="post.slug">
      <li>
        <h2 class="post__heading">
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
          content: 'Blog - Sara Bennour',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Blog',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://sarabennour.com/assets/images/blog/og-image.jpg',
        },
      ],
    }
  },
}
</script>

<style>
.post__heading a {
  color: #000;
  font-weight: 400;
  text-decoration: none !important;
}
</style>
