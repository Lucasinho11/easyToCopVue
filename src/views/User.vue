<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Mon Compte</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="all-infos" v-if="user.token">
          <ion-card>
                <ion-card-header>
                    <ion-card-title><h1 style="text-align: center">{{user.data.name}}</h1></ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                        <p>Modifier l'abonnement</p>
                    </ion-item>
                    <ion-item>
                        <p>Télécharger la facture</p>
                    </ion-item>
                    <ion-item>
                        <p style="color: red" @click.prevent="logout">se déconnecter</p>
                    </ion-item>

                    
                  </ion-list>
                </ion-card-content>
              </ion-card>

        </div>
        <div class="all-infos" v-else>
          <ion-card>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                        <router-link to="/tabs/register">S'inscrire</router-link>
                    </ion-item>
                    <ion-item>
                        <router-link to="/tabs/login">Se connecter</router-link>
                    </ion-item>

                    
                  </ion-list>
                </ion-card-content>
              </ion-card>
        </div>
        
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import {mapActions, mapGetters } from 'vuex'
export default  {
  name: 'User',
  components: { IonHeader, IonToolbar, IonContent, IonPage },
    computed: {
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['logout'])
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
   .all-infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

  }

div{
    display: flex;
    justify-content: center;
}
.buttons-subs-drop{
    margin-top: 2%;
    background-color: #5D19FF;
    margin-bottom: 2%;
    text-align: center;
    color: white;
    width: 200px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
}



</style>
