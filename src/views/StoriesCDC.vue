<template>
    <v-container fluid class="page-container">
        <v-row class="fill-height" align="center" justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="content-card">
                    <v-card-title class="card-title text-center">
                        <h1 class="main-title">Transformando Vidas com Solidariedade</h1>
                    </v-card-title>

                    <v-card-text>
                        <p class="text-center description-text">
                            Cada relato aqui representa uma chama de esperança acesa pelo projeto. Nossas ações
                            ajudam a levar dignidade, amor e apoio para aqueles que mais precisam.
                        </p>

                        <v-row>
                            <v-col cols="12" md="6" lg="4" v-for="(story, index) in stories" :key="index">
                                <v-card class="story-card mx-auto">
                                    <v-card-text>
                                        <p class="story-name">{{ story.name }}</p>
                                        <div v-for="(item, idx) in story.qna" :key="idx" class="qna-item">
                                            <p><strong>{{ item.question }}</strong></p>
                                            <p>{{ item.answer }}</p>
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <v-card class="cta-card mt-4">
                    <v-card-title class="card-title text-center">
                        <h1 class="main-title">Deseja apoiar nossa missão?</h1>
                    </v-card-title>
                    <v-card-actions class="cta-actions justify-center">
                        <v-btn block
                            href="https://docs.google.com/forms/d/1hM6E61IXSf-jRx8PQsHNUaLWd42fP7spH05lbTLwS3o/edit"
                            target="_blank" variant="tonal" size="x-large" color="#a4bbd3" class="cta-button">
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
    name: 'StoriesCDC',
    data() {
        return {
            stories: [
                {
                    name: 'LUANA RODRIGUES (Voluntária)',
                    qna: [
                        {
                            question: 'O que você sente ao participar do Centelhas de Cristo?',
                            answer: 'O projeto preencheu um enorme vazio, um vazio de quem sabe que fora da caridade não há salvação, então me sinto cumprido uma missão.'
                        },
                        {
                            question: 'O que motiva você a continuar?',
                            answer: 'Entender que como cristã esta é uma missão que recebi e devo honrar esta missão, com muita alegria e amor.'
                        }
                    ]
                },
                {
                    name: 'ROSSANA ARAÚJO (Voluntária)',
                    qna: [
                        {
                            question: 'O que você sente ao participar do Centelhas de Cristo?',
                            answer: 'Sinto gratidão a Deus por poder auxiliar o meu próximo, sinto que sou útil, que a minha vida tem sentido.'
                        },
                        {
                            question: 'O que motiva você a continuar?',
                            answer: 'O que nos motiva a continuar é a certeza de que amor e caridade são transformadores.'
                        }
                    ]
                },
                {
                    name: 'ALEXANDRE MARQUES (Voluntário)',
                    qna: [
                        {
                            question: 'O que você sente ao participar do Centelhas de Cristo?',
                            answer: 'Sentimento de complemento, ou seja, estava faltando algo na minha vida!'
                        },
                        {
                            question: 'O que motiva você a continuar?',
                            answer: 'Além de me fazer bem, me faz olhar a vida com mais gratidão.'
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.page-container {
    padding-top: 0;
}

.content-card,
.cta-card {
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 2rem;
    color: #453728;
}

.main-title {
    font-size: 2rem;
    color: #453728;
    text-wrap: wrap;
}

.description-text {
    font-size: 1.25rem;
    line-height: 1.5;
    padding-bottom: 3rem;
}

.story-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
}

.story-name {
    font-weight: bold;
    color: #453728;
    font-size: 1.3rem;
}

.qna-item {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.qna-item p {
    margin: 0.5rem 0;
}

.qna-item strong {
    color: #a4bbd3;
    text-decoration: underline;
}

.cta-actions {
    display: flex;
    justify-content: center;
}

.cta-button {
    font-size: large;
    font-weight: bolder;
}

.v-btn {
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-btn:hover {
    background-color: #5a4d3a;
    transform: scale(1.05);
}
</style>
