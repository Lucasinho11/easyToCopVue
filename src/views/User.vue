<template>

  <ion-page>
    
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Mon Compte</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <div class="all-infos" v-if="user.token">
          <ion-card>
                <ion-card-header>
                    <ion-card-title><h1 style="text-align: center">{{user.data.name}}</h1></ion-card-title>
                </ion-card-header>

                <ion-card-content>
                  <ion-list>
                    <form action="" @submit.prevent="updateUser(form)">
                            <div v-if="msg.success" style="text-align:center">
                              <p style="color: green">{{msg.success}}</p>
                            </div><br>
                        <ion-item>
                            
                            <ion-label>Pseudo</ion-label>
                            <ion-input placeholder="Lubasinski" v-model="form.name"></ion-input>
                            </ion-item>
                            <ion-item>
                            <ion-label>Email</ion-label>
                            <ion-input placeholder="lucas.lebgdelastreet@gmail.com" v-model="form.email" type="email"></ion-input>
                            </ion-item>
                            <ion-item>
                            <ion-label>Mot de passe</ion-label>
                            <ion-input v-model="form.password" type="password"></ion-input>
                            </ion-item>
                            <div v-if="msg.error" style="text-align:center">
                              <p style="color: red">{{msg.error}}</p>
                            </div>
                        <ion-item>
                          <div style="display:flex; justify-content: center; align-items:center">
                              <a href="" class="buttons-subs-drop">
                                <button type="submit" style="background-color: transparent; width: 100%">
                                    Modifier
                                </button>
                                </a>
                          </div>
                            
                        </ion-item>
                        <ion-item>
                            <p>Télécharger la facture</p>
                        </ion-item>
                        <ion-item>
                          
                            <a href="http://easy2cop.herokuapp.com/user">Modifier l'abonnement</a>
                        </ion-item>
                      <ion-item>
                          <p style="color: red" @click.prevent="logout">se déconnecter</p>
                      </ion-item>
                    </form>
                  </ion-list>
                </ion-card-content>
              </ion-card>

        </div>
        <div class="all-infos" v-else>
          <ion-card>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                        <router-link to="/tabs/register">S'inscrire</router-link>
                    </ion-item>
                    <ion-item>
                        <router-link to="/tabs/login">Se connecter</router-link>
                    </ion-item>

                    
                  </ion-list>
                </ion-card-content>
              </ion-card>
        </div>
        
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonInput} from '@ionic/vue';
import {mapActions, mapGetters } from 'vuex'
export default  {
  name: 'User',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonCard, IonCardContent, IonList, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonInput},
  data(){
    return{
      form:{
        email: '',
        password: '',
        name: '',
      }
    }
  },
    computed: {
        ...mapGetters(['user']),
        ...mapGetters(['msg'])
    },
    methods: {
        ...mapActions(['logout']),
        ...mapActions(['update']),
        updateUser(form){
            this.msg.success = ''
            this.msg.error =''
            if(this.form.name.length == 0||this.form.email.length == 0||this.form.password.length == 0){
                this.msg.error='Veuillez remplir tous les champs!'
            }
            else{
                this.update(form)
            }
            
        },
        mounted(){
        this.msg.error =''
        this.msg.success = ''
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
   .all-infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

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
