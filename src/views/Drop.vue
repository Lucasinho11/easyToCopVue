<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><img src="/assets/img/logo.png" alt="" style="width: 100%"></div>
            <div><h1 style="color: #00FFB4">AJ4</h1></div>
            <div><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>

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
  .pres-drops{
    background-color: #111111;
    height: 35vh;
    padding-top: 10vh;
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
}
.img-drop-img{
    width: 200px;
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
