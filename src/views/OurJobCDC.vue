<template>
    <v-container fluid class="work-container">
        <v-row class="justify-center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="main-card" elevation="4">
                    <v-card-title>
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-hands-pray</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Nosso Trabalho</h2>
                        </div>
                    </v-card-title>
                    <v-card-text class="highlight-text">
                        Cada ação do Centelhas do Cristo é feita com amor, cuidado e presença. Reunimos aqui alguns
                        registros das nossas atividades para que você possa sentir de perto o impacto que juntos estamos
                        construindo.
                    </v-card-text>
                </v-card>

                <v-card class="section-card" elevation="4">
                    <v-card-title>
                        <div class="section-header">
                            <v-avatar size="48" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="28">mdi-silverware-fork-knife</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Preparando com Amor</h2>
                        </div>
                    </v-card-title>
                    <div class="section-content">

                    </div>
                    <v-card-text>
                        <div class="section-content">
                            <div class="gallery-grid">
                                <v-card v-for="(item, index) in preparando" :key="'prep-' + index" class="gallery-card"
                                    elevation="2">
                                    <v-img :src="item.img" height="200px" class="card-image-top" cover />
                                    <v-card-text class="gallery-text">{{ item.desc }}</v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>

                <v-card class="section-card" elevation="4">
                    <v-card-title>
                        <div class="section-header">
                            <v-avatar size="48" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="28">mdi-truck-delivery-outline</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Distribuindo Esperança</h2>
                        </div>
                    </v-card-title>
                    <div class="section-content"></div>
                    <v-card-text>
                        <div class="section-content">
                            <div class="gallery-grid">
                                <v-card v-for="(item, index) in distribuindo" :key="'dist-' + index"
                                    class="gallery-card" elevation="2">
                                    <v-img :src="item.img" height="200px" class="card-image-top" cover />
                                    <v-card-text class="gallery-text">{{ item.desc }}</v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>

                <v-card class="section-card" elevation="4">
                    <v-card-title>
                        <div class="section-header">
                            <v-avatar size="48" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="28">mdi-account-group</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Momentos em Equipe</h2>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <div class="section-content">
                            <div class="gallery-grid">
                                <v-card v-for="(item, index) in equipe" :key="'equipe-' + index" class="gallery-card"
                                    elevation="2">
                                    <v-img :src="item.img" height="200px" class="card-image-top" cover />
                                    <v-card-text class="gallery-text">{{ item.desc }}</v-card-text>
                                </v-card>
                            </div>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "OurJobCDC",
    data() {
        return {
            preparando: [
                { img: "/assets/atividade1.jpg", desc: "Cada refeição preparada é um abraço em forma de alimento." },
                { img: "/assets/comida1.jpg", desc: "Panelas cheias de esperança, temperadas com carinho." },
                { img: "/assets/equipe1.jpg", desc: "Mãos que montam marmitas, corações que espalham amor." },
                { img: "/assets/atividade5.jpg", desc: "Pequenos gestos que aquecem vidas e renovam sonhos." },
                { img: "/assets/atividade7.jpg", desc: "Nossa equipe: alegria e dedicação em cada detalhe." },
                { img: "/assets/atividade12.jpg", desc: "Marmitas repletas de cuidado, prontas para transformar dias." }
            ],
            distribuindo: [
                { img: "/assets/distribuicao.jpg", desc: "Esperança entregue em cada caixa, em cada sorriso recebido." },
                { img: "/assets/distribuicao1.jpg", desc: "O pouco que compartilhamos pode ser tudo para alguém." },
                { img: "/assets/distribuicao2.jpg", desc: "Marmitas que alimentam o corpo e fortalecem a alma." },
                { img: "/assets/distribuicao3.jpg", desc: "Chegamos onde a necessidade chama, levando acolhimento." },
                { img: "/assets/distribuicao5.jpg", desc: "Em cada entrega, um encontro de solidariedade e afeto." },
                { img: "/assets/distribuicao4.jpg", desc: "Distribuir esperança é multiplicar motivos para sorrir." }
            ],
            equipe: [
                { img: "/assets/equipe.jpg", desc: "Juntos, somos mais fortes para transformar realidades." },
                { img: "/assets/equipe6.jpg", desc: "Sorrisos que se somam, formando uma corrente de amor." },
                { img: "/assets/equipe2.jpg", desc: "União e alegria: nossa energia para servir ao próximo." },
                { img: "/assets/equipe3.jpg", desc: "Já pensou em fazer parte dessa família do bem?" },
                { img: "/assets/equipe4.jpg", desc: "Um gesto de amor pode mudar o mundo de alguém." },
                { img: "/assets/equipe5.jpg", desc: "Venha somar seu coração ao nosso propósito." }
            ]
        };
    }
};
</script>

<style scoped>
.work-container {
    padding-top: 0;
}

.section-content {
    margin-top: .5rem;
}

.section-header {
    display: flex;
    align-items: center;
}

.section-title {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #453728;
    font-family: "Playwrite RO", cursive;
}

.main-card {
    background-color: #fffdfc;
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.main-card .v-card-text {
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: #4a3d2e;
    text-indent: 2rem;
}

.highlight-text {
    background-color: rgba(222, 119, 40, 0.078);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 1.5rem;
    box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
}

.section-card {
    background-color: #fffdfc;
    border-radius: 24px;
    margin-bottom: 2rem;
    padding: 1.5rem 1rem;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.05);
}

.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
}

.gallery-card {
    background-color: #fff9f2;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(107, 62, 13, 0.1);
}

.card-image-top {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    object-fit: cover;
}

.gallery-text {
    padding: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #4a3d2e;
    text-align: justify;
}
</style>
