<template>
  <v-container class="about-container">
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="8">
        <v-sheet class="info-section mission-section" elevation="3">
          <div class="section-header">
            <v-avatar size="56" color="#e9d8c2">
              <v-icon color="#6b3e0d" size="32">mdi-heart-outline</v-icon>
            </v-avatar>
            <h2 class="section-title">Nossa missão</h2>
          </div>
          <p class="section-description">
            No coração do <em>Centelhas do Cristo</em>, pulsa uma missão que vai muito além de alimentar o corpo:
            queremos aquecer almas. Acreditamos que cada refeição entregue carrega junto uma porção de esperança,
            carinho e dignidade. O que nasceu do gesto simples de dois corações dispostos a ajudar, hoje se tornou uma
            verdadeira corrente de amor. Com a força da fé e da solidariedade, multiplicamos esforços e afetos: todos os
            sábados, são mais de 180 marmitas servidas com dedicação.
            <br><br>
            Nossa missão é clara: transformar realidades com gestos de cuidado, mostrar que ninguém está sozinho e que a
            luz da compaixão pode brilhar mesmo nos momentos mais escuros. Cada marmita não é apenas alimento — é prova
            de que o amor move o mundo.
          </p>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="8">
        <v-img src="/assets/equipe6.jpg" alt="Imagem do grupo" class="group-image rounded" height="500" cover />
      </v-col>

      <v-col cols="12" md="8">
        <v-sheet class="info-section identity-section" elevation="3">
          <div class="section-header">
            <v-avatar size="56" color="#e9d8c2">
              <v-icon color="#6b3e0d" size="32">mdi-account-group</v-icon>
            </v-avatar>
            <h2 class="section-title">Quem somos</h2>
          </div>
          <p class="section-description">
            Somos um grupo de voluntários movidos pelo amor ao próximo. O projeto <em>Centelhas do Cristo</em> nasceu em
            2020, quando Iris Naque e seu marido decidiram, por conta própria, levar refeições a quem mais precisava nas
            ruas de Campina Grande. Com o tempo, o gesto silencioso foi ecoando de pessoa para pessoa, ganhando força,
            voz e propósito.
            <br><br>
            Hoje, somos dez corações atuando ativamente todos os sábados, unidos por um único desejo: levar não só
            alimento, mas também escuta, presença e acolhimento. Vivemos da generosidade de doações, e acreditamos na
            transformação através da empatia. Somos prova viva de que o bem se multiplica — e que a esperança, quando
            partilhada, se torna infinita.
          </p>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="8">
        <v-sheet class="info-section stories-section" elevation="3">
          <div class="section-header">
            <v-avatar size="56" color="#e9d8c2">
              <v-icon color="#6b3e0d" size="32">mdi-fire</v-icon>
            </v-avatar>
            <h2 class="section-title">Depoimentos</h2>
          </div>
          <v-row>
            <v-col cols="12" v-for="(story, index) in stories" :key="index">
              <v-card class="story-card">
                <v-card-title class="story-name">
                  <v-avatar size="40" color="#e9d8c2" class="mr-2">
                    <v-icon color="#6b3e0d">mdi-account-heart</v-icon>
                  </v-avatar>
                  {{ story.name }}
                </v-card-title>
                <v-card-text class="story-text">
                  <v-icon color="#a4bbd3" size="28" class="quote-icon">
                    mdi-format-quote-open
                  </v-icon>
                  {{ story.text }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="8">
        <v-sheet class="info-section instagram-section" elevation="4">
          <div class="section-header">
            <v-avatar size="56" color="#e9d8c2">
              <v-icon color="#6b3e0d" size="32">mdi-instagram</v-icon>
            </v-avatar>
            <h2 class="section-title">Siga-nos no Instagram</h2>
          </div>
          <p class="section-description">
            Fique por dentro das <strong>atualizações semanais</strong>, veja fotos, histórias e acompanhe de perto o
            impacto que sua doação faz na vida de tantas pessoas.
            <br /><br />
            <v-row align="center" justify="center" class="my-4">
              <v-btn class="instagram-button" href="https://www.instagram.com/centelhasdocristo" target="_blank" rounded
                elevation="3">
                <v-icon left color="#e9d8c2" class="mr-2">mdi-instagram</v-icon>
                @centelhasdocristo
              </v-btn>
            </v-row>
          </p>
        </v-sheet>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const stories = ref([
  {
    name: 'Luana Rodrigues (Voluntária)',
    text: 'O projeto preencheu um enorme vazio na minha vida. Sei que fora da caridade não há salvação, e hoje me sinto cumprindo uma missão.'
  },
  {
    name: 'Rossana Araújo (Voluntária)',
    text: 'Sinto gratidão a Deus por poder auxiliar o próximo. Sinto que sou útil e que minha vida tem sentido.'
  },
  {
    name: 'Alexandre Marques (Voluntário)',
    text: 'No Centelhas de Cristo encontrei algo que faltava na minha vida: o sentimento de complemento, de missão.'
  }
]);
</script>

<style scoped>
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
  font-size: 1.5rem;
  color: #453728;
  font-family: "Playwrite RO", cursive;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.9rem;
  text-align: justify;
  color: #4a3d2e;
  text-indent: 2rem;
  background: #fff9f2;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
}

.group-image {
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.story-card {
  background-color: #fff9f2;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.story-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(107, 62, 13, 0.15);
}

.story-name {
  font-weight: bold;
  color: #453728;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.story-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a3d2e;
  position: relative;
}

.quote-icon {
  position: absolute;
  top: -8px;
  left: -8px;
  opacity: 0.2;
  font-size: 3rem;
}

.instagram-button {
  background-color: #6b3e0d;
  color: #e9d8c2 !important;
  font-weight: bold;
  transition: transform 0.3s, box-shadow 0.3s;
}

.instagram-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(107, 62, 13, 0.2);
}

@media (max-width: 600px) {
  .section-title {
    font-size: 1.5rem;
  }

  .section-description {
    font-size: 1.2rem;
  }
}
</style>
