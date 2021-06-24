<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="bg-nav2">
          <div class="div-header">
            <div style="width: 10%;"><router-link to="/"><img src="/assets/img/logo.png" alt="" style="width: 100%"></router-link></div>
            <div><h1 style="color: #00FFB4">Connexion</h1></div>
            <div><router-link to="/tabs/user"><i class="fas fa-user-circle" style="font-size: 25px; color:#00FFB4"></i></router-link></div>
          </div>      
      </ion-toolbar>
    </ion-header>
    <ion-content>
     <div class="register" v-if="!user.token">
          <ion-card>
              
              <form @submit.prevent="loginUser(form)" method="post">
                    <ion-card-header>
                        <ion-card-title style="text-align:center">Connectez-vous</ion-card-title>
                        <div v-if="msg.success" style="text-align:center">
                            <p style="color: green">{{msg.success}}</p>
                        </div>
                    </ion-card-header>

                    <ion-card-content>
                    <ion-list>
                        <ion-item>
                        <ion-label>Email</ion-label>
                        <ion-input placeholder="lucas.lebgdelastreet@gmail.com" v-model="form.email" type="email"></ion-input>
                        </ion-item>
                        <ion-item>
                        <ion-label>Mot de passe</ion-label>
                        <ion-input v-model="form.password" type="password"></ion-input>
                        </ion-item>
                    </ion-list>
                    </ion-card-content>
                    <div v-if="msg.error" style="text-align:center">
                        <p style="color: red">{{msg.error}}</p>
                    </div>
                    <div>
                    <a href="" class="buttons-subs-drop">
                        <button type="submit" style="background-color: transparent; width: 100%">
                            Se connecter
                        </button>
                    </a>
                    
                </div>
                <div style="text-align:center">
                    <router-link to="/tabs/register">Vous n'avez pas de compte? Inscrivez-vous ici.</router-link>
                </div><br>
              </form>
              </ion-card>

        </div>
        <div class="register" v-else>
            <ion-card>
                <ion-card-header>
                    <ion-card-title>Vous êtes connecté</ion-card-title>
                    <div style="text-align: center">
                        <router-link to="/tabs/user">Mon compte</router-link>
                    </div>
                    
                </ion-card-header>
            </ion-card>
        </div>
    </ion-content>
  </ion-page>
</template>
<script>
import { IonPage, IonHeader, IonToolbar, IonContent, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonCardTitle } from '@ionic/vue';
import { mapActions, mapGetters } from 'vuex'

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonList, IonItem, IonLabel, IonInput, IonCardTitle },
  data(){
      return{
          form: {
              email: '',
              password: ''
          },
      }
  },
  computed: {
        ...mapGetters(['msg']),
        ...mapGetters(['user'])
    },
    methods: {
        ...mapActions(['login']),
        loginUser(form){
            this.msg.success = ''
            this.msg.error =''
            if(this.form.email.length == 0||this.form.password.length == 0){
                this.msg.error='Veuillez remplir tous les champs!'
            }
            else{
                this.login(form)
            }
            
        }
    },
    mounted(){
        this.msg.error =''
        this.msg.success = ''
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
  

div{
    display: flex;
    justify-content: center;
}
.register{
    display: flex;
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
</style>