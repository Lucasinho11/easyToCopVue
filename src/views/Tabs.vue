<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="actus" href="/tabs/actus">
          <ion-icon :icon="newspaperOutline" />
          <ion-label>Actualités</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="drops" href="/tabs/drops">
          <ion-icon :icon="flameOutline" />
          <ion-label>Drops</ion-label>
        </ion-tab-button>
        
         <ion-tab-button tab="subs" href="/tabs/subs">
          <ion-icon :icon="cardOutline" />
          <ion-label>Abonnements</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="infos" href="/tabs/infos">
          <ion-icon :icon="informationCircleOutline" />
          <ion-label>Infos</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { cardOutline,informationCircleOutline, newspaperOutline, flameOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      cardOutline, 
      informationCircleOutline, 
      newspaperOutline,
      flameOutline
    }
  }
}
</script>