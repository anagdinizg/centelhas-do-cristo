<template>
  <v-container class="about-container">
    <v-row class="full-height" align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="section-header text-center">
            <h1 class="project-title">Sobre o projeto</h1>
          </v-card-title>
          <v-card-text>
            <h1 class="section-title">Nossa missão</h1>
            <p class="section-description">
              No coração do Centelhas do Cristo está o compromisso de oferecer mais do que
              refeições: entregamos esperança, dignidade e acolhimento àqueles que enfrentam as dificuldades mais
              desafiadoras. O que começou com apenas duas pessoas cresceu graças à fé, à determinação e ao poder da
              solidariedade. Com o passar do tempo, a vontade de impactar mais vidas trouxe novos voluntários e o apoio
              da comunidade. Hoje, com uma equipe ativa de 10 voluntários, conseguimos levar mais de 180 refeições às
              ruas todos os sábados, sempre com o mesmo propósito: alimentar corpos e almas. A missão do Centelhas do
              Cristo vai além da caridade. Nosso objetivo é construir uma corrente de amor que inspire mais pessoas a
              fazerem parte de uma transformação social. Cada marmita entregue não é apenas alimento, mas também um
              gesto de cuidado e respeito por quem mais precisa. Seguimos movidos pela generosidade das doações e pela
              força de quem acredita em nosso trabalho, provando que juntos podemos acender centelhas de esperança onde
              mais falta luz.
            </p>
            <v-img src="src/assets/imagemGrupo.jpg" alt="Imagem do grupo" />
            <h1 class="section-title">Quem somos</h1>
            <p class="section-description">
              O projeto Centelhas do Cristo nasceu com o propósito de levar alimento e
              esperança para aqueles que mais
              precisam. Criado em 2020 por Iris Naque com apoio do marido, os dois começaram a distribuir marmitas para
              moradores de rua na cidade de Campina Grande, na Paraíba. Inicialmente, apenas os dois se dedicavam ao
              projeto. Mesmo conseguindo alimentar algumas pessoas, a sensação de frustração por não conseguir ajudar
              ainda mais pessoas era inevitável. Com esse desejo, muita fé e determinação, mais voluntários chegaram ao
              projeto depois de divulgações de conhecido para conhecido. O time só aumentava, e a página no Instagram
              surgiu. Havia certo receio em expandir as atividades para as redes sociais. O projeto sempre viveu a base
              de doações, e continua assim até hoje. Com o apoio e participação de cada vez mais pessoas, atualmente, o
              projeto conta com 10 voluntários constantemente ativos, que conseguem distribuir mais de 180 marmitas
              todos os sábados.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutCDC'
}
</script>

<style scoped>
.about-container {
  padding-top: 0;
}

.section-title {
  font-size: 2rem;
  color: #453728;
  margin-bottom: 10px;
}

.project-title {
  font-size: 2rem;
  color: #453728;
  word-wrap: break-word;
}

.section-description {
  font-size: 1.3rem;
  line-height: 2rem;
  padding-bottom: 3rem;
  text-align: justify;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

v-card {
  border-radius: 8px;
}
</style>