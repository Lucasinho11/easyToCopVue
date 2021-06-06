<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">EasyToCop</h1></div>
            <div><a href="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></a></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="pres">
          <h1>Ne manque plus la paire<br> de tes rêves !</h1>
          <p>Marre de ne pas être sélectionné ?<br>Avec nos services, tu as beaucoup plus de chance de cop ta paire de speakers préférée !</p>
          <div>
                <a href="/tabs/subs" class="buttons-subs">
                        Voir les abonnements
                </a>
            </div>
        </div>
        
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';

export default  {
  name: 'Drops',
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
  .pres{
    background-color: #111111;
    border-bottom: 5px solid #5D19FF;
    height: 100%;
}
.pres > h1{
    color: #36FFB0;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}
.pres > p{
    color: white;
    text-align: center;
    font-size: 20px;
}


div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buttons-subs{
    margin-top: 2vh;
    background-color: #5D19FF;
    text-align: center;
    color: white;
    width: 200px;
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
}



</style>
