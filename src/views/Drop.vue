<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">AJ4</h1></div>
            <div><a href="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></a></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="div-card">
            <ion-card>
                <ion-card-header>
                    <ion-card-subtitle>NIKE AIR JORDAN 4 RETRO</ion-card-subtitle>
                    <ion-card-title>MILITARY BLUE</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                    <img src="/assets/img/aj4.png"  alt="">
                    <div>
                        <a href="#" class="buttons-subs-drop">
                        S'inscrire
                        </a>
                    </div>
                    

                </ion-card-content>
            </ion-card>
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/vue';

export default  {
  name: 'Drops',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent }
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
.buttons-subs-drop{
    margin-top: 2vh;
    background-color: #5D19FF;
    text-align: center;
    color: white;
    width: 200px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
}
div{
    display: flex;
    justify-content: center;
}
.div-card{
    align-items: center;
    height: 86vh;
}


</style>
