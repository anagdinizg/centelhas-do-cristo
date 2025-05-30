<template>
    <v-container class="about-container">
        <v-row align="center" justify="center" dense>
            <v-col cols="12" md="10">
                <v-sheet class="info-section" elevation="3">
                    <div class="section-header">
                        <v-avatar size="56" color="#e9d8c2">
                            <v-icon color="#6b3e0d" size="32">mdi-account-plus</v-icon>
                        </v-avatar>
                        <h2 class="section-title">Junte-se a nós</h2>
                    </div>

                    <p class="section-description">
                        Quer fazer parte do <em>Centelhas do Cristo</em> e espalhar esperança pelas ruas? Preencha o
                        formulário abaixo para enviar suas informações para nossa equipe.
                        <strong>Sua participação é fundamental para que possamos continuar nosso trabalho de servir e
                            acolher quem mais precisa.</strong>
                    </p>

                    <!-- Observação Importante -->
                    <div class="highlight-info">
                        <v-avatar class="highlight-icon" size="40" color="#e9d8c2">
                            <v-icon color="#6b3e0d">mdi-calendar</v-icon>
                        </v-avatar>
                        <div class="highlight-text">
                            <p class="highlight-title">
                                <strong>Observação importante:</strong>
                            </p>
                            <p class="highlight-body">
                                As atividades principais da nossa organização acontecem aos sábados, não todos, mas
                                sempre aos sábados,
                                pois é nesse dia que preparamos e distribuímos as marmitas.
                                <br />
                                <strong>Sua disponibilidade nesse dia é essencial para integrar nossa equipe e fazer a
                                    diferença.</strong>
                            </p>
                        </div>
                    </div>

                    <v-form ref="participateForm" @submit.prevent="sendEmail">
                        <v-text-field v-model="formData.name" label="Nome completo" outlined dense required
                            color="#6b3e0d"></v-text-field>
                        <v-text-field v-model="formData.email" label="E-mail" type="email" outlined dense required
                            color="#6b3e0d"></v-text-field>
                        <v-text-field v-model="formData.phone" label="Telefone (WhatsApp)" outlined dense required
                            color="#6b3e0d"></v-text-field>

                        <v-checkbox v-model="formData.available" label="Tenho disponibilidade aos sábados para ajudar."
                            color="#6b3e0d" required></v-checkbox>

                        <v-card-actions class="justify-center">
                            <v-btn type="submit" class="join-button" rounded elevation="3" size="large">
                                <v-icon left color="e9d8c2" class="mr-2">mdi-send</v-icon>
                                Enviar
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ParticipateCDC',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                available: false,
            },
        };
    },
    methods: {
        sendEmail() {
            const subject = encodeURIComponent('Novo Formulário de Participação');
            const availability = this.formData.available ? 'Sim' : 'Não';
            const body = encodeURIComponent(
                `Nome completo: ${this.formData.name}\n` +
                `E-mail: ${this.formData.email}\n` +
                `Telefone (WhatsApp): ${this.formData.phone}\n` +
                `Disponibilidade aos sábados: ${availability}`
            );
            window.location.href = `mailto:centelhasdocristo@gmail.com?subject=${subject}&body=${body}`;
        },
    },
};
</script>

<style scoped>
.about-container {
    padding-top: 2rem;
}

.info-section {
    background-color: #fffdfc;
    border-radius: 24px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s ease;
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
    font-size: 1.8rem;
    color: #453728;
    font-family: "Playwrite RO", cursive;
}

.section-description {
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: justify;
    color: #4a3d2e;
    text-indent: 2rem;
    background: #fff9f2;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
    margin-bottom: 1rem;
}

/* OBSERVAÇÃO IMPORTANTE */
.highlight-info {
    display: flex;
    align-items: flex-start;
    background-color: #fdf5eb;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
    margin-bottom: 1.5rem;
}

.highlight-icon {
    flex-shrink: 0;
    margin-right: 1rem;
    align-self: center;
}

.highlight-text {
    flex: 1;
}

.highlight-title {
    font-size: 1.1rem;
    color: #6b3e0d;
    margin-bottom: 0.25rem;
}

.highlight-body {
    font-size: 1rem;
    color: #4a3d2e;
    line-height: 1.5;
    text-align: justify;
}

.join-button {
    background-color: #6b3e0d;
    color: #e9d8c2 !important;
    font-weight: bold;
    padding: 0.75rem 2rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    border-radius: 50px;
}

.join-button:hover {
    background-color: #5c3311;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(107, 62, 13, 0.3);
}
</style>
