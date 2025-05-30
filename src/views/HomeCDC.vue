<template>
  <v-container fluid class="container-home">
    <v-row class="fill-height intro-background" align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <v-card class="intro-card-about-style mx-auto" max-width="1000">
          <div class="section-header">
            <v-img src="https://i.ibb.co/9p9Y8gg/31bdfa64-9b03-4f2b-b2f1-83d942ea8b2a.jpg"
              alt="Logo Centelhas do Cristo" max-width="60" height="60" class="mr-4 rounded-circle" contain></v-img>
            <h2 class="section-title">Bem-Vindo ao Centelhas do Cristo</h2>
          </div>
          <div class="section-description">
            <p>
              O Centelhas do Cristo é um movimento fraterno dedicado a iluminar corações através da prática do amor, da
              fé e do serviço ao próximo. Nosso objetivo é, através de ações concretas,
              promover a solidariedade, o acolhimento e a esperança.
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" lg="3" v-for="card in cards" :key="card.title">
        <v-card class="mx-auto mb-5 card-warm" max-width="300" :to="card.link" style="cursor: pointer;" elevation="2">
          <div class="circle-image-wrapper">
            <v-img :src="card.img" class="circle-image" cover alt="Imagem do card" :title="card.title" eager></v-img>
          </div>
          <v-card-title class="card-title d-flex align-center justify-center">
            <v-icon class="mr-2" color="#7a4f1e" size="24">{{ card.icon }}</v-icon>
            {{ card.title }}
          </v-card-title>
          <v-card-subtitle class="card-subtitle text-center">{{ card.subtitle }}</v-card-subtitle>
          <v-card-text>
            <p class="card-description">{{ card.description }}</p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn variant="tonal" class="button-layout" block color="#7A4F1E" :to="card.link" size="small">
              Saiba Mais
            </v-btn>
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
          icon: 'mdi-hand-heart',
          subtitle: 'Como e onde doar',
          description: 'Descubra como suas contribuições ajudam a alimentar e transformar vidas.',
          img: 'https://img.freepik.com/fotos-gratis/alto-angulo-de-pessoas-colocando-comida-na-caixa-de-doacoes_23-2148613143.jpg',
          link: { name: 'Donation' }
        },
        {
          title: 'Torne-se Membro',
          icon: 'mdi-account-plus',
          subtitle: 'Junte-se à nossa equipe',
          description: 'Participe ativamente levando cuidado e atenção para quem mais precisa.',
          img: 'https://img.freepik.com/fotos-gratis/voluntario-segurando-caixa-com-comida-para-doacao_23-2148637976.jpg',
          link: { name: 'Participate' }
        },
        {
          title: 'Relatos',
          icon: 'mdi-book-open-page-variant',
          subtitle: 'Histórias que inspiram',
          description: 'Leia testemunhos que mostram como o amor transforma realidades.',
          img: 'https://img.freepik.com/fotos-gratis/voluntarios-de-tiro-medio-com-doacoes-de-alimentos_23-2149182005.jpg',
          link: { name: 'Stories' }
        },
        {
          title: 'Sobre o Projeto',
          icon: 'mdi-information-outline',
          subtitle: 'Conheça nossa jornada',
          description: 'Entenda a missão e os valores que movem o Centelhas do Cristo.',
          img: 'https://img.freepik.com/fotos-gratis/grupo-de-diferentes-pessoas-trabalhando-como-voluntario-em-um-banco-de-alimentos_23-2149012216.jpg',
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
  padding: 30px 0;
  position: relative;
  border-radius: 12px;
}

.intro-card-about-style {
  background-color: #fffdfc;
  border-radius: 24px;
  padding: 1rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  margin-bottom: 2rem;
}

.intro-card-about-style:hover {
  transform: translateY(-4px);
}

.intro-card-about-style .section-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.5rem;
}

.intro-card-about-style .section-title {
  margin-left: 1rem;
  font-size: 1.6rem;
  color: #453728;
  font-family: "Playwrite RO", cursive;
}

.intro-card-about-style .section-description {
  font-size: 1.3rem;
  line-height: 1.8rem;
  text-align: justify;
  color: #4a3d2e;
  text-indent: 2rem;
  background: #fff9f2;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: inset 0 0 6px rgba(107, 62, 13, 0.05);
}

.card-warm {
  border-radius: 14px;
  box-shadow: 0 6px 12px rgba(122, 79, 30, 0.1);
  background: #fffdfc;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  padding-top: 50px;
  overflow: visible !important;
}

.card-warm:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 24px rgba(122, 79, 30, 0.2);
}

.circle-image-wrapper {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(122, 79, 30, 0.2);
  border: 4px solid #fff8f0;
  background-color: #fff8f0;
  z-index: 10;
}

.circle-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  transition: transform 0.4s ease;
}

.card-title {
  color: #7a4f1e;
  font-family: "Playwrite RO", cursive;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 0;
  text-align: center;
}

.card-subtitle {
  color: #7a4f1e;
  font-size: 0.9rem;
  font-weight: 500;
  font-style: italic;
  margin-bottom: 8px;
  text-align: center;
}

.card-description {
  font-size: 0.9rem;
  color: #5a462a;
  margin: 0 10px 10px 10px;
  line-height: 1.4;
  text-align: justify;
  flex-grow: 1;
}

.button-layout {
  font-family: "Playwrite RO", cursive;
  font-size: 0.7rem;
  font-weight: 700;
  margin: 0 16px 12px 16px;
  border-radius: 14px;
  background-color: #7a4f1e;
  color: #f9f4ed !important;
  box-shadow: 0 2px 4px rgba(122, 79, 30, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button-layout:hover {
  background-color: #a4bbd3;
  box-shadow: 0 4px 8px rgba(107, 141, 189, 0.6);
  color: #fff !important;
}

@media (max-width: 600px) {
  .circle-image-wrapper {
    width: 70px;
    height: 70px;
    top: -35px;
  }

  .hero-content {
    padding: 16px;
  }
}
</style>