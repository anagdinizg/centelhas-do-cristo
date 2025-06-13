<template>
    <v-container fluid class="donation-container">
        <v-row class="justify-center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="donation-main-card" elevation="4">
                    <v-card-title class="page-title">
                        <v-avatar size="56" color="#e9d8c2" class="mr-3">
                            <v-icon color="#6b3e0d" size="32">mdi-information</v-icon>
                        </v-avatar>
                        Sobre doação
                    </v-card-title>
                    <v-card-text>
                        <div class="highlight-text">
                            <p>
                                A doação de alimentos é um gesto de amor e
                                solidariedade que faz a diferença na vida de muitas famílias em
                                situação de vulnerabilidade.
                                Só no estado da Paraíba, aproximadamente <strong>300.000 pessoas</strong> enfrentam a
                                insegurança alimentar, o que representa cerca de <strong>8% da população</strong>.
                            </p>
                            <p>
                                Com sua contribuição, podemos oferecer o alívio e a
                                esperança que tantas famílias
                                precisam para enfrentar esse desafio. Doe e faça parte desta
                                transformação!
                            </p>
                        </div>
                    </v-card-text>
                </v-card>

                <div class="donation-grid">
                    <v-sheet class="info-section" elevation="3">
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-heart</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Por que doar?</h2>
                        </div>
                        <div class="section-description">
                            Sua contribuição é um ato de solidariedade que possibilita a melhoria da qualidade de vida
                            de
                            muitas pessoas e fortalece nossa
                            comunidade.
                        </div>
                    </v-sheet>

                    <v-sheet class="info-section" elevation="3">
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-hand-heart</v-icon>
                            </v-avatar>
                            <h2 class="section-title">O que fazemos com sua doação</h2>
                        </div>
                        <div class="section-description">
                            Utilizamos as doações para preparar e distribuir marmitas para pessoas e famílias em
                            situação de vulnerabilidade social.
                        </div>
                    </v-sheet>

                    <v-sheet class="info-section wide-card" elevation="3">
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-checkbox-marked-circle</v-icon>
                            </v-avatar>
                            <h2 class="section-title">O que doar</h2>
                        </div>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <strong class="list-title">Itens Aceitos:</strong>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="10" sm="5" md="4" v-for="item in acceptedItems" :key="item">
                                                <v-chip class="accepted-item-chip" size="large" variant="elevated"
                                                    prepend-icon="mdi-checkbox-marked-circle">{{ item }}</v-chip>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <strong class="list-title mt-4">Itens NÃO aceitos:</strong>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="10" sm="5" md="4" v-for="item in rejectedItems" :key="item">
                                                <v-chip class="rejected-item-chip" size="large" variant="elevated"
                                                    prepend-icon="mdi-cancel">{{ item }}</v-chip>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>

                    <v-sheet class="info-section" elevation="3">
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-map-marker</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Onde doar</h2>
                        </div>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <strong class="list-title">Doe presencialmente</strong>
                                    <ul>
                                        <li class="list-item">Sede da organização - Rua João Alves de Oliveira, 76,
                                            Centro, Campina Grande, Paraíba</li>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.285830451646!2d-35.87974278477455!3d-7.233983594608147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acef34a6b750459%3A0x9f5b5e9d5d3a2f4b!2sRua%20Jo%C3%A3o%20Alves%20de%20Oliveira%2C%2076%20-%20Centro%2C%20Campina%20Grande%20-%20PB%2C%2058100-110!5e0!3m2!1spt-BR!2sbr!4v1695900000000!5m2!1spt-BR!2sbr"
                                                    width="100%" height="250"
                                                    style="border:0; border-radius: 12px; margin-top: 16px;"
                                                    allowfullscreen="" loading="lazy"
                                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </ul>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>

                    <v-sheet class="info-section" elevation="3">
                        <div class="section-header">
                            <v-avatar size="56" color="#e9d8c2">
                                <v-icon color="#6b3e0d" size="32">mdi-hand-coin</v-icon>
                            </v-avatar>
                            <h2 class="section-title">Como doar</h2>
                        </div>
                        <v-list>
                            <v-list-item>
                                <v-list-item-content>
                                    <p class="list-item">
                                        <strong>Se a sua doação for monetária</strong>, você pode fazer um
                                        <strong>PIX</strong> diretamente para nós através da nossa chave pix, que é o
                                        nosso email: <strong>centelhasdocristo@gmail.com</strong>.
                                    </p>
                                    <p class="list-item mt-4">
                                        <strong>Se a doação não for monetária</strong>, veja o card "Onde doar".
                                    </p>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-sheet>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "DonationCDC",
    data() {
        return {
            acceptedItems: [
                "Alimentos saudáveis",
                "Recipientes descartáveis",
                "Dinheiro",
            ],
            rejectedItems: [
                "Bebidas alcoólicas",
                "Enlatados",
                "Perecíveis",
            ],
        };
    },
};
</script>

<style scoped>
.page-title {
    font-family: "Playwrite RO", cursive;
    font-size: 1.1rem;
}

.highlight-text {
    background-color: rgba(222, 119, 40, 0.078);
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
    text-indent: 2rem;
    font-size: 1.1rem;
    line-height: 1.8rem;
    color: #4a3d2e;
    margin: 0;
}

.donation-container {
    padding-top: 0;
}

.donation-main-card {
    background-color: #fffdfc;
    border-radius: 24px;
    padding: 1.5rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
    margin-bottom: 2rem;
    word-break: break-word;
    white-space: normal;
}

.donation-main-card:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
}

.donation-main-card .v-card-title {
    font-weight: 700;
    font-size: 1.5rem;
    color: #453728;
    word-break: break-word;
    white-space: normal;
}

.donation-main-card .v-card-text {
    font-size: 1.1rem;
    margin-top: 12px;
    line-height: 1.6;
    color: #453728;
}

.donation-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.wide-card {
    grid-column: span 2;
}

.info-section {
    background-color: #fffdfc;
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: fit-content;
}

.info-section:hover {
    transform: translateY(-4px);
}

.section-header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
}

.section-title {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: #453728;
    font-family: "Playwrite RO", cursive;
}

.section-description,
.list-item {
    font-size: 1.1rem;
    line-height: 1.9rem;
    text-align: justify;
    color: #4a3d2e;
    text-indent: 2rem;
    background: #fff9f2;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
    margin: 0;
}

.accepted-item-chip {
    background-color: #81daa6;
    color: #453728;
    font-size: 16px;
    padding: 3px 6px;
}

.rejected-item-chip {
    background-color: #c75959;
    color: white;
    font-size: 16px;
    padding: 3px 6px;
}

.whatsapp-button {
    background-color: #25d366 !important;
    color: white !important;
    padding: 5px 20px;
    font-weight: 700;
    text-transform: none;
}

.whatsapp-button:hover {
    background-color: #1ebea5 !important;
}

.highlighted-text {
    font-size: 1.1rem;
    font-weight: bold;
    color: #453728;
    background-color: #a4bbd3;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: transform 0.3s;
}

.highlighted-text:hover {
    transform: scale(1.02);
}

@media (max-width: 800px) {
    .donation-grid {
        grid-template-columns: 1fr;
    }

    .wide-card {
        grid-column: span 1;
    }
}
</style>
