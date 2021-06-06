<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">Mon Compte</h1></div>
            <div><a href="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></a></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="all-infos">
        <ion-card>
                <ion-card-content>
                    <ion-list>
                        <ion-item>
                            <ion-label>Email</ion-label>
                            <ion-input type="email" placeholder="lucas.lebgdelastreet@gmail.com"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>Mot de passe</ion-label>
                            <ion-input type="password" placeholder="12345"></ion-input>
                        </ion-item>
                            <div>
                                <a href="#" class="buttons-subs-drop">
                                        Modifier
                                </a>
                            </div>                    
                  </ion-list>
                </ion-card-content>
          </ion-card>
          <ion-card>
                <ion-card-header>
                    <ion-card-title>Mon abonnement</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                        <p>Modifier la méthode de paiement</p>
                    </ion-item>
                    <ion-item>
                        <p>Changer d'abonnement</p>
                    </ion-item>
                    <ion-item>
                        <p>Suspendre l'abonnement</p>
                    </ion-item>
                    <ion-item>
                        <p style="color: red">Annuler l'abonnement</p>
                    </ion-item>
                    <ion-item>
                        <ion-label>Code Promo</ion-label>
                            <ion-input type="text" placeholder="CLEMENT10"></ion-input>
                    </ion-item>
                    <ion-item>
                        <p>Télécharger la facture</p>
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

export default  {
  name: 'User',
  components: { IonHeader, IonToolbar, IonContent, IonPage }
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
