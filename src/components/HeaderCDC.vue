<template>
    <v-app-bar app color="#a4bbd3" dark class="app-bar">
        <v-container>
            <v-row align="center" no-gutters>
                <v-col cols="auto" class="d-none d-md-flex align-center">
                    <div class="logo-container">
                        <v-img src="https://i.ibb.co/9p9Y8gg/31bdfa64-9b03-4f2b-b2f1-83d942ea8b2a.jpg"
                            alt="Logo Centelhas do Cristo" class="logo" />
                    </div>
                    <v-toolbar-title class="title">Centelhas do Cristo</v-toolbar-title>
                </v-col>

                <v-spacer class="d-none d-md-flex"></v-spacer>

                <v-col cols="auto" class="d-none d-md-flex text-right">
                    <v-btn :to="{ name: 'Home' }" text class="btn">Início</v-btn>
                    <v-btn :to="{ name: 'About' }" text>Sobre nós</v-btn>
                    <v-btn :to="{ name: 'Donation' }" text>Doação</v-btn>
                    <v-btn :to="{ name: 'Participate' }" text>Torne-se Membro</v-btn>
                    <v-btn :to="{ name: 'Stories' }" text>Relatos</v-btn>
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
            <v-list-item :to="{ name: 'Stories' }">
                <v-list-item-content>
                    <v-list-item-title>Relatos</v-list-item-title>
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
    min-height: 70px;
}

.v-app-bar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: #453728;
    margin-left: 16px;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 16px;
}

.logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.logo-small {
    width: 40px;
    height: 40px;
    object-fit: cover;
}

.v-btn {
    margin: 0 4px;
    color: #453728;
    font-size: medium;
}

.d-none {
    display: none;
}

.d-md-flex {
    display: flex;
}

.d-md-none {
    display: none;
}

@media (min-width: 960px) {
    .d-none {
        display: none;
    }

    .d-md-flex {
        display: flex;
    }

    .d-md-none {
        display: none;
    }
}

@media (max-width: 600px) {
    .app-bar {
        min-height: auto;
    }

    .logo-container {
        margin-right: 8px;
        width: 50px;
        height: 50px;
    }

    .logo-small {
        width: 40px;
        height: 40px;
    }

    .v-btn {
        font-size: 16px;
        padding: 0.5rem 1rem;
    }

    .v-col {
        margin-bottom: 10px;
    }

    .v-row {
        justify-content: space-evenly;
    }
}
</style>