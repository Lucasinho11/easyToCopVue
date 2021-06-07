<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><a href="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></a></div>
            <div><h1 style="color: #00FFB4">Infos</h1></div>
            <div><a href="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></a></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
     <div class="all-infos">
        <ion-card>
                <ion-card-header>
                    <h1 style="font-size: 20px; font-weigth: bold; color: black">📍19 rue Yves Toudic 75010 Paris</h1>
                    <h1 style="font-size: 20px; font-weigth: bold; color: black">✉️contact@ecole-webstart.com</h1>
                    <h1 style="font-size: 20px; font-weigth: bold; color: black">📞01 42 41 97 76</h1>
                </ion-card-header>

                <ion-card-content>
                    <img src="/assets/img/screen.png" alt="" style="width: 100%">
                </ion-card-content>
          </ion-card>
          <ion-card>
                <ion-card-header>
                    <ion-card-title>Contactez-nous</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label>Nom</ion-label>
                      <ion-input placeholder="Lubasinski"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label>Prénom</ion-label>
                      <ion-input placeholder="Lucas"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label>Email</ion-label>
                      <ion-input placeholder="lucas.lebgdelastreet@gmail.com"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label>Objet</ion-label>
                      <ion-input placeholder="Problème de commande"></ion-input>
                    </ion-item>
                    <ion-item>
                      <ion-label>Message</ion-label>
                      <ion-textarea placeholder="Bonjour, ..."></ion-textarea>
                    </ion-item>
                    
                  </ion-list>
                </ion-card-content>
                <div>
                <a href="#" class="buttons-subs-drop">
                        Envoyer
                </a>
              </div>
              </ion-card>

        </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonCardTitle } from '@ionic/vue';
export default  {
  name: 'Infos',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonTextarea, IonCardTitle }
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
    justify-content: space-around;

  }

div{
    display: flex;
    justify-content: center;
}
.buttons-subs-drop{
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