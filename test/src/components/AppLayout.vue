<script setup>
</script>

<template>
    <header>
      <div class="header-top">
        <div class="container">
          <div class="logo">
            <img src="/images/logo.png" alt="">
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <div class="container">
          <div class="header-title">Новости</div>
        </div>
      </div>
    </header>
    <div class="main">
        <slot></slot>
    </div>
    <footer>
      <div class="container">
        <div class="logo">
          <img src="/images/logo.png" alt="">
        </div>
        <div class="copy">© alpha, 2023</div>
      </div>
    </footer>
</template>

<style scoped>
</style>