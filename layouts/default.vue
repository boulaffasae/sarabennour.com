<template>
  <div class="main-site">
    <Header />
    <main class="container">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<style>
.main-site {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
