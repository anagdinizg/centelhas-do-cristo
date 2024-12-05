<template>
  <v-container>
    <v-row class="fill-height intro-background" align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card class="mx-auto mb-4 intro-card" max-width="600">
          <v-card-title class="headline white--text text-wrap">Bem-vindo ao Centelhas do Cristo</v-card-title>
          <v-card-text class="intro-text">
            <p class="intro-description">Centelhas do Cristo é uma organização dedicada a fazer a diferença na
              comunidade. Nós
              coletamos doações
              monetárias e alimentícias, preparamos alimentos saudáveis e distribuímos em marmitas todos os sábados.
              Nosso objetivo é apoiar aqueles que precisam e promover o bem-estar na nossa comunidade.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" lg="3" v-for="card in cards" :key="card.title">
        <v-card class="mx-auto mb-4" max-width="400" :to="card.link" style="cursor: pointer;">
          <v-img :src="card.img" class="card-image"></v-img>
          <v-card-title class="card-title">{{ card.title }}</v-card-title>
          <v-card-subtitle class="card-subtitle">{{ card.subtitle }}</v-card-subtitle>
          <v-card-text>
            <p class="card-description">{{ card.description }}</p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn variant="tonal" class="button-layout" block color="#a4bbd3" :to="card.link">Saiba Mais</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCDC',
  data() {
    return {
      cards: [
        {
          title: 'Doações',
          subtitle: 'Como e onde doar',
          description: 'Saiba mais sobre como fazer doações para o projeto.',
          img: 'https://img.freepik.com/fotos-gratis/alto-angulo-de-pessoas-colocando-comida-na-caixa-de-doacoes_23-2148613143.jpg?t=st=1725286536~exp=1725290136~hmac=5a72b36fdc48ea720889cef509773c35e3227af4d024a3c30bb3eb202545136c&w=1060',
          link: { name: 'Donation' }
        },
        {
          title: 'Torne-se Membro',
          subtitle: 'Participe da nossa equipe',
          description: 'Descubra como você pode se envolver e ajudar o projeto como membro.',
          img: 'https://img.freepik.com/fotos-gratis/voluntario-segurando-caixa-com-comida-para-doacao_23-2148637976.jpg?t=st=1725286580~exp=1725290180~hmac=785f87fbe3ed78bacd1d8b8088774f58626425ac168eb254ebb326fb6ce5229c&w=1060',
          link: { name: 'Participate' }
        },
        {
          title: 'Relatos',
          subtitle: 'Histórias inspiradoras',
          description: 'Leia os relatos das pessoas que participam do projeto.',
          img: 'https://img.freepik.com/fotos-gratis/voluntarios-de-tiro-medio-com-doacoes-de-alimentos_23-2149182005.jpg?t=st=1725286678~exp=1725290278~hmac=60eb71dfc063ea4cc23bf84ebb546725ae701a2f046fe32720eded9667648886&w=1060',
          link: { name: 'Stories' }
        },
        {
          title: 'Sobre o Projeto',
          subtitle: 'Informações e detalhes',
          description: 'Conheça mais sobre a missão, visão e valores da Centelhas do Cristo.',
          img: 'https://img.freepik.com/fotos-gratis/grupo-de-diferentes-pessoas-trabalhando-como-voluntario-em-um-banco-de-alimentos_23-2149012216.jpg?t=st=1725286746~exp=1725290346~hmac=2f8d05169d01a76c0f0dc0d92c86f6b1d0c7606d264eec879f91b851b4427039&w=1060',
          link: { name: 'About' }
        }
      ]
    }
  }
}
</script>

<style scoped>
.intro-description {
  text-align: justify;
}

.intro-background {
  background: url('https://img.freepik.com/fotos-premium/close-up-de-maos-de-um-voluntario-39s-entregando-um-prato-de-comida-a-uma-pessoa-necessitada-ajuda-alimentar-de-caridade-ajudando-os-necessitados-distribuindo-comida-na-comunidade-fornecendo-comida-gratuita-aos-sem-abrigo_248459-21766.jpg?w=1060') no-repeat center center;
  background-size: cover;
  padding: 40px 0;
  position: relative;
  border-radius: 12px;
}

.button-layout {
  font-size: large;
  font-weight: bolder;
}

.intro-card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.8);
}

.intro-card .headline {
  font-size: xx-large;
  font-weight: bold;
  margin-bottom: 16px;
}

.intro-text {
  padding: 16px;
  font-size: large;
  color: #453728;
}

.v-card {
  border-radius: 12px;
  transition: transform 0.3s;
  overflow: hidden;
}

.v-card:hover {
  transform: scale(1.05);
}

.card-image {
  width: calc(100% - 24px);
  height: 200px;
  margin: 12px;
  border-radius: 15px;
  object-fit: cover;
}

.card-title {
  color: #453728;
  font-size: x-large;
}

.card-subtitle {
  color: #453728;
  font-size: large;
}

.card-description {
  font-size: large;
}

.v-card.mb-4 {
  margin-bottom: 16px;
}

.v-btn {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.v-btn:hover {
  background-color: #5a4d3a;
  transform: scale(1.05);
}
</style>