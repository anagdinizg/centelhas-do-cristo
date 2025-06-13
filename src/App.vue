<template>
  <v-app>
    <HeaderCDC />
    <v-main class="content">
      <v-container class="mt-2 mb-2">
        <router-view />
      </v-container>
    </v-main>
    <FooterCDC />
  </v-app>
</template>

<script setup>
import HeaderCDC from './components/HeaderCDC.vue'
import FooterCDC from './components/FooterCDC.vue'
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content {
  position: relative;
  z-index: 0;
  min-height: 100vh;
  background-image: url('/public/assets/bgColor.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
}

.content::before {
  content: "";
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: -1;
}
</style>