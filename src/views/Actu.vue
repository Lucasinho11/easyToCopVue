<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Actu</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="div-card" v-for="actu in actus" :key="actu.id">
          <div v-if="actu.id == $route.params.id">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>{{actu.name}}</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <img :src="actu.img"  alt="">
                    <p>{{actu.description}}</p>
                </ion-card-content>
            </ion-card>
            </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent,IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { contact} from 'ionicons/icons';
import { mapActions, mapGetters } from 'vuex'

export default  {
  name: 'Actus',
  components: { IonHeader, IonToolbar, IonContent, IonPage,IonCard, IonCardHeader, IonCardTitle, IonCardContent },
  setup() {
    return {
        contact
    }
  },
  computed: {
        ...mapGetters(['actus']),
    },
    methods:{
        ...mapActions(['allActus']),
    },
    mounted(){
        this.allActus()
    }
}
</script>
<style scoped>
  a:link 
{ 
 text-decoration:none; 
} 
  .div-header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    margin: 0;
    border-bottom: 2px solid #919191;
  }
.div-card{
    display: flex;
    align-items: center;
}
</style>
