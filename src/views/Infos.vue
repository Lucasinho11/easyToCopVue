<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">Infos</h1></div>
            <div><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
    
      <ExploreContainer name="Tab 1 page" />
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
export default  {
  name: 'Infos',
  components: { IonHeader, IonToolbar, IonContent, IonPage }
}
</script>
<style scoped>
  .div-header{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }
</style>