<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">Actu</h1></div>
            <div><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="div-card">
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Le retour des Air Jordan 4!</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <img src="/assets/img/wallpaper.jpeg"  alt="">
                    <p>Les air jordan 4 sont de retour pour votre plus grand plaisir!</p>
                </ion-card-content>
            </ion-card>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent,IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import { contact} from 'ionicons/icons';


export default  {
  name: 'Actus',
  components: { IonHeader, IonToolbar, IonContent, IonPage,IonCard, IonCardHeader, IonCardTitle, IonCardContent },
  setup() {
    return {
        contact
    }
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
    height: 86vh;
}
</style>
