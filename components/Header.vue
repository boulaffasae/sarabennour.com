<template>
  <header class="container">
    <nav class="main-nav">
      <NuxtLink class="main-nav__link" to="/" exact>Home</NuxtLink>
      <NuxtLink class="main-nav__link" to="/blog">Blog</NuxtLink>
    </nav>
  </header>
</template>

<style>
.main-nav {
  text-align: right;
}

.main-nav__link {
  color: #666;
  display: inline-block;
  margin: 0 0.25rem;
  padding: 0.5rem;
  text-decoration: none !important;
}

.main-nav__link:hover {
  color: #000;
}

.main-nav__link.nuxt-link-active {
  position: relative;
}

.main-nav__link.nuxt-link-active::after {
  background-image: linear-gradient(to top, #ffc823 30%, transparent 45%);
  bottom: 0;
  content: "";
  height: 25%;
  left: 0;
  position: absolute;
  transform-origin: left bottom;
  transform: rotate(-2deg);
  width: 100%;
  z-index: -1;
}
</style>
