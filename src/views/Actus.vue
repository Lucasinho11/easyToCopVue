<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">Actualités</h1></div>
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
import ExploreContainer from '@/components/ExploreContainer.vue';
import { contact} from 'ionicons/icons';


export default  {
  name: 'Actus',
  components: { ExploreContainer, IonHeader, IonToolbar, IonContent, IonPage },
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
</style>
