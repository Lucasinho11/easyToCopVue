<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Actualités</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="actus-container">
        <div class="actu" v-for="actu in actus" :key="actu.id">
            <div class="actu-title">
                <img class="img-title-actu" src="/assets/img/logo.png"  alt="">
                <h1>{{actu.name}}</h1>
            </div>
            <div class="actu-img">
                <img class="img-actu" :src="actu.img" alt="">
            </div>
            <div class="actu-more">
                <router-link :to="{ path: '/tabs/actus/'+ actu.id}"><p>Lire la suite</p></router-link>
                
            </div>
        </div>
        

    </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { contact} from 'ionicons/icons';
import { mapActions, mapGetters } from 'vuex'


export default  {
  name: 'Actus',
  components: { IonHeader, IonToolbar, IonContent, IonPage },
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
  .actus-container{
    display: flex;
    flex-direction: column;
  }
  .actu{
    display: flex;
    flex-direction: column;
    border-bottom: #919191 1px solid;
  }
  .img-title-actu{
    width: 10%;
  }
  .actu-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 2%;
    padding-top: 2%;
    padding-bottom: 2%;
  }
    .actu-title > h1{
      font-size: 20px;
      padding-left: 2%;
    }
    .actu-more{
      padding-left: 2%;
    }
</style>
