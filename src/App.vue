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
  background-color: rgb(251, 250, 250);
}
</style>