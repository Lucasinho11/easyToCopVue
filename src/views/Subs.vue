<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Abonnements</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="all-subs">
        <ion-card>
                <ion-card-header>
                    <ion-card-title>Premium</ion-card-title>
                    <ion-card-subtitle>5,99€/mois</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <h1>Inclus:</h1>
                    <p>-Accès à quelques drops</p>
                    <div>
                        <a href="#" class="buttons-subs-drop">
                        Payer
                        </a>
                    </div>
                    

                </ion-card-content>
          </ion-card>
          <ion-card>
                <ion-card-header>
                    <ion-card-title>V.I.P</ion-card-title>
                    <ion-card-subtitle>19,99€/mois</ion-card-subtitle>
                </ion-card-header>

                <ion-card-content>
                  <h1>Inclus:</h1>
                    <p>-Accès à tous les drops</p>
                    <p>-Gagne une box spéciale annuelle</p>
                    <div>
                        <a href="#" class="buttons-subs-drop">
                        Payer
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
  name: 'Subs',
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
  .all-subs{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
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
</style>