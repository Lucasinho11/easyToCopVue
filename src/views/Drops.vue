<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><a href="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></a></div>
            <div><h1 style="color: #00FFB4">Drops</h1></div>
            <div><a href="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></a></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="pres-drops">
          <h1>Tous les prochains drops</h1>
        </div>
        <div v-for="drop in drops" :key="drop.id">
            <div class="drop-date">
                <h1>{{drop.dropTime}}</h1>
            </div>
            <router-link :to="{ path: '/tabs/drops/'+ drop.id}">
                <div class="drop">
                    <div>
                        <p>{{drop.label}}</p>
                        <h1>{{drop.name}}</h1>
                    </div>
                    <div class="img-drop">
                            <img class="img-drop-img" :src="drop.img"  alt="">
                    </div>
                </div>
            </router-link>
        </div>
        
        
        
    </ion-content>
  </ion-page>
</template>


<script>
import { IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex'

export default  {
  name: 'Drops',
  components: { IonHeader, IonToolbar, IonContent, IonPage },
  computed: {
        ...mapGetters(['drops']),
    },
    methods:{
        ...mapActions(['allDrops']),
    },
    mounted(){
        this.allDrops()
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
  .pres-drops{
    background-color: #111111;
    height: 35vh;
    padding-top: 12.5vh;
}
.pres-drops > h1{
    color: #36FFB0;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
}
  .drop-date{
    background-color: #36FFB0;
    font-weight: bold;
    font-size: 30px;
    color: black;
    border-bottom: 2px solid gray;
    padding-left: 2%;
    padding-top:0.1px ;
}
.drop >div> h1{
    padding-left: 2%;
    font-size: 20px;
    font-weight: bold;
    color: black;

}
.drop >div> p{
    padding-top: 3%;
    padding-left: 2%;
    font-size: 15px;
    color: black;
}
.drop{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    padding-top:20px ;
    padding-bottom:20px ;
    padding-right: 10px;
    padding-left: 10px;
}
.img-drop-img{
    width: 180px;
}
.drop-container{
    height: 85vh;
    padding-top: 10%;
}
.text-drops{
    padding-left: 2%;
}
.img-drop{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}


.text-drops > h1{
    padding-left: 2%;
    font-size: 30px;
    font-weight: bold;
    color: black;
}
.text-drops > p{
    padding-left: 2%;
    font-size: 15px;
    color: black;
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
    font-size: 15px;
}
.img-drop > p{
    font-weight: bold;
    font-size: 10px;
}
.img-drop-img2{
    width: 500px;
}


</style>
