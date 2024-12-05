<template>
    <v-container fluid class="container-adjusted">
        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="pa-4">
                    <v-card-title class="headline text-center">
                        <h1 class="title-responsive">Membros atuais</h1>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6" v-for="member in members" :key="member.name">
                                    <v-card class="mx-auto" prepend-icon="mdi-account" :subtitle="member.profession"
                                        :title="member.name">
                                        <v-card-text style="font-size: 1.1rem">{{ member.assignment }}</v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>

                <v-card class="mt-4 pa-4">
                    <v-card-title class="headline text-center">
                        <h1 class="title-responsive text-wrap">Deseja tornar-se um membro da equipe?</h1>
                    </v-card-title>
                    <v-card-actions class="justify-center">
                        <v-btn block
                            href="https://docs.google.com/forms/d/1hM6E61IXSf-jRx8PQsHNUaLWd42fP7spH05lbTLwS3o/edit"
                            target="_blank" variant="tonal" size="x-large" color="#a4bbd3" class="button-layout">
                            Cadastrar-se aqui
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ParticipateCDC',
    data() {
        return {
            members: [
                {
                    name: 'Iris Naque'
                },
                {
                    name: 'Alexandre Marques'
                },
                {
                    name: 'Chris Moreira'
                },
                {
                    name: 'Gleryston Cavalcanti'
                },
                {
                    name: 'Luana Rodrigues'
                },
                {
                    name: 'Rossana Araújo'
                },
                {
                    name: 'Patrício Araújo'
                },
            ],
        };
    },
};
</script>

<style scoped>
.container-adjusted {
    padding-top: 0;
}

.button-layout {
    font-size: large;
    font-weight: bolder;
}

.v-card {
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title-responsive {
    font-size: 2rem;
    color: #453728;
}

.v-btn {
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-btn:hover {
    background-color: #5a4d3a;
    transform: scale(1.05);
}
</style>