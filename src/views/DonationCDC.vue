<template>
    <v-container fluid class="donation-container">
        <v-row class="full-height" align="center" justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-card class="donation-card" elevation="4">
                    <v-card-title class="headline text-center">
                        <h1 class="donation-title">
                            Informações sobre doação
                        </h1>
                    </v-card-title>

                    <v-card-text>
                        <v-card-text class="card-content">
                            A doação de alimentos é essencial para ajudar as pessoas em situação de vulnerabilidade
                            e fome. A fome é uma realidade difícil para muitas famílias, e sua contribuição pode
                            fazer uma diferença significativa. No estado da Paraíba, cerca de <strong>300.000
                                pessoas</strong> enfrentam insegurança alimentar, o que representa aproximadamente
                            <strong>8%</strong> da população. Sua ajuda pode fornecer o alívio necessário para
                            aqueles que mais precisam.
                        </v-card-text>

                        <v-tabs v-model="tab" background-color="#a4bbd3" dark>
                            <v-tab>O que Doar</v-tab>
                            <v-tab>Como Doar</v-tab>
                            <v-tab>Onde Doar</v-tab>
                            <v-tab>O que fazemos com sua doação</v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">
                            <v-tab-item v-if="tab === 0">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <strong class="list-title">Itens Aceitos:</strong>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="10" sm="5" md="4" v-for="item in acceptedItems"
                                                        :key="item">
                                                        <v-chip class="accepted-item-chip" size="large"
                                                            variant="elevated"
                                                            prepend-icon="mdi-checkbox-marked-circle">{{ item
                                                            }}</v-chip>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            <strong class="list-title mt-4">Itens NÃO aceitos:</strong>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="5" v-for="item in rejectedItems"
                                                        :key="item">
                                                        <v-chip class="rejected-item-chip" size="large"
                                                            variant="elevated" prepend-icon="mdi-cancel">{{ item
                                                            }}</v-chip>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-tab-item>

                            <v-tab-item v-if="tab === 1">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <p class="list-item">
                                                <strong>Se a sua doação for monetária</strong>, você pode fazer um
                                                <strong>PIX</strong>
                                                diretamente para nós através da nossa chave pix, que é o nosso email:
                                                <strong>centelhasdocristo@gmail.com</strong>.
                                                Para confirmar sua doação, entre em contato pelo WhatsApp abaixo.
                                            </p>
                                            <p class="list-item mt-4">
                                                <strong>Se a doação não for monetária</strong>, veja a aba "Onde doar".
                                                Após escolher a
                                                melhor forma para você, entre em contato pelo WhatsApp para finalizar o
                                                processo.
                                            </p>
                                            <v-row class="mt-4" justify="center">
                                                <v-col cols="auto">
                                                    <v-btn href="https://wa.me/5583991795613" target="_blank"
                                                        class="whatsapp-button" large>
                                                        <v-icon left>mdi-whatsapp</v-icon>
                                                        <p class="ml-1">WhatsApp</p>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-tab-item>

                            <v-tab-item v-if="tab === 2">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <strong class="list-title">Presencialmente:</strong>
                                            <ul>
                                                <li class="list-item">Universidade Facisa - Avenida Argemiro de
                                                    Figueiredo, 1901, Itararé, Campina Grande, Paraíba</li>
                                                <li class="list-item">Sede da organização - Rua João Alves de Oliveira,
                                                    76, Centro, Campina
                                                    Grande, Paraíba (Combinar dia e hora pelo whatsapp)</li>
                                            </ul>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-list-item>
                                        <v-list-item-content>
                                            <strong class="list-title">Virtualmente:</strong>
                                            <p class="list-item">Entre em contato pelo WhatsApp para organizar a
                                                transferência ou a busca do alimento/dinheiro no local do doador.</p>
                                            <v-row class="mt-4" justify="center">
                                                <v-col cols="auto">
                                                    <v-btn href="https://wa.me/5583991795613" target="_blank"
                                                        class="whatsapp-button" large>
                                                        <v-icon left>mdi-whatsapp</v-icon>
                                                        <p class="ml-1">WhatsApp</p>
                                                    </v-btn>
                                                </v-col>
                                            </v-row>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-tab-item>

                            <v-tab-item v-if="tab === 3">
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-content>
                                            <strong class="list-title">O que fazemos com sua doação:</strong>
                                            <p class="list-item">
                                                As doações recebidas são utilizadas de forma a maximizar o impacto
                                                social em nossa comunidade. Aqui estão algumas das maneiras como
                                                utilizamos sua generosidade:
                                            </p>
                                            <ul>
                                                <li class="list-item">Preparamos e distribuímos marmitas
                                                    com alimentos saudáveis para pessoas em situação de rua e
                                                    vulnerabilidade.</li>
                                                <li class="list-item">Compramos itens de higiene pessoal para
                                                    distribuir em abrigos e comunidades carentes.</li>
                                                <li class="list-item">Fornecemos roupas e brinquedos para crianças
                                                    e famílias em situação de vulnerabilidade.</li>
                                            </ul>
                                            <p class="highlighted-text">
                                                <v-icon left>mdi-alert-circle</v-icon>
                                                Sua doação não apenas ajuda a alimentar, mas também a dignificar
                                                e apoiar aqueles que mais precisam.
                                            </p>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'DonationCDC',
    data() {
        return {
            tab: 0,
            acceptedItems: [
                "Alimentos saudáveis",
                "Recipientes descartáveis",
                "Itens de higiene pessoal",
                "Roupas",
                "Brinquedos",
                "Dinheiro"
            ],
            rejectedItems: [
                "Bebidas alcoólicas",
                "Enlatados",
                "Salsicha",
                "Roupas rasgadas",
                "Brinquedos quebrados",
                "Itens de higiene pessoal usados"
            ]
        };
    }
};
</script>

<style scoped>
.donation-container {
    padding-top: 0;
}

.button-layout {
    font-size: large;
    font-weight: bolder;
}

.donation-title {
    font-size: 2rem;
    color: #453728;
}

.v-btn {
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 18px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-tab:hover {
    background-color: #a4bbd3;
    transform: scale(1.05);
    font-weight: bolder;
}

.v-tab {
    color: #453728;
    font-size: large;
}

.donation-card {
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    margin-top: 0;
}

.donation-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-4px);
}

.card-content {
    font-size: large;
    color: #453728;
    text-align: justify;
}

.accepted-item-chip {
    background-color: #a4bbd3;
    color: #453728;
    font-size: 16px;
    padding: 3px 6px;
}

.rejected-item-chip {
    background-color: #453728;
    color: white;
    font-size: 16px;
    padding: 3px 6px;
}

.whatsapp-button {
    background-color: #25d366;
    color: white;
    padding: 5px 20px;
}

.whatsapp-button:hover {
    background-color: #1ebea5;
}

.headline {
    font-size: 32px;
    color: #453728;
}

.list-title {
    font-size: x-large;
    text-align: justify;
}

.list-item {
    font-size: large;
    text-align: justify;
}

.highlighted-text {
    font-size: large;
    font-weight: bold;
    color: #453728;
    background-color: #a4bbd3;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 15px;
    transition: transform 0.3s;
}

.highlighted-text:hover {
    transform: scale(1.02);
}
</style>
