<template>
  <v-app-bar app color="#a4bbd3" dark class="app-bar">
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="auto" class="d-none d-md-flex align-center">
          <div class="logo-container">
            <v-img src="https://i.ibb.co/9p9Y8gg/31bdfa64-9b03-4f2b-b2f1-83d942ea8b2a.jpg"
              alt="Logo Centelhas do Cristo" class="logo my-1" />
          </div>
          <v-toolbar-title class="title">Centelhas do Cristo</v-toolbar-title>
        </v-col>

        <v-spacer class="d-none d-md-flex"></v-spacer>

        <v-col cols="auto" class="d-none d-md-flex text-right">
          <v-btn :to="{ name: 'Home' }" text>Início</v-btn>
          <v-btn :to="{ name: 'About' }" text>Sobre nós</v-btn>
          <v-btn :to="{ name: 'Donation' }" text>Doação</v-btn>
          <v-btn :to="{ name: 'Participate' }" text>Torne-se Membro</v-btn>
          <v-btn :to="{ name: 'OurJob' }" text>Nosso Trabalho</v-btn>

        </v-col>

        <v-col cols="auto" class="d-flex d-md-none align-center justify-between">
          <div class="logo-container">
            <v-img src="https://i.ibb.co/9p9Y8gg/31bdfa64-9b03-4f2b-b2f1-83d942ea8b2a.jpg"
              alt="Logo Centelhas do Cristo" class="logo-small" />
          </div>

          <v-btn @click="drawer = !drawer" icon aria-label="Menu">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary color="#a4bbd3" style="color: #453728">
    <v-list>
      <v-list-item :to="{ name: 'Home' }">
        <v-list-item-content>
          <v-list-item-title>Início</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'About' }">
        <v-list-item-content>
          <v-list-item-title>Sobre nós</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'Donation' }">
        <v-list-item-content>
          <v-list-item-title>Doação</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'Participate' }">
        <v-list-item-content>
          <v-list-item-title>Torne-se Membro</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item :to="{ name: 'OurJob' }">
        <v-list-item-content>
          <v-list-item-title>Nosso Trabalho</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'HeaderCDC',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #a4bbd3 !important;
  box-shadow: 0 4px 10px rgba(122, 79, 30, 0.1);
  backdrop-filter: blur(8px);
  padding: 5px;
}

.title {
  font-family: "Playwrite RO", cursive;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #453728;
  margin-left: 16px;
}

.v-btn {
  margin: 0 6px;
  color: #453728 !important;
  font-size: 1rem;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: none;
  transition: background-color 0.4s ease, box-shadow 0.4s ease;
  border-radius: 24px;
  padding: 8px 20px;
}

.v-btn:hover {
  background-color: #fdf2e8 !important;
  box-shadow: 0 4px 10px rgba(122, 79, 30, 0.2);
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fff;
  margin-right: 16px;
  box-shadow: 0 3px 6px rgba(122, 79, 30, 0.2);
}
</style>