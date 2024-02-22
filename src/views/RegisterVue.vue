<template>
  <div class="content">
    <v-sheet
      class="sheet"
      color="grey darken-1"
      elevation="18"
      height="500"
      width="900"
    >
      <div class="content_img" :class="{ 'content_img_right' : showSignIn}" >
        <transition name="fade" mode="out-in">
          <img v-if="showSignIn" key="login" src="../../public/LogIn.svg" alt="" style="height: 500px;">
          <img v-else key="signin" src="../../public/SingIn.svg" alt="" style="height: 500px;">
        </transition>
        

      </div>
      <div class="login" :class="{ 'login_left' : showSignIn}">
        <SignIn @changeStatus="changeStatus" v-if="showSignIn"  />
        <LogIn @changeStatus="changeStatus" v-else />
 
        
      </div>
      

    </v-sheet>
  </div>
</template>

<script>
import LogIn from "../components/register/logIn.vue"
import SignIn from "../components/register/signIn.vue"


export default {
  components:{
    LogIn,
    SignIn
  },
  
  data: () => ({
    showSignIn: false,
  }),

  methods: {
    changeStatus(){
      this.showSignIn= !this.showSignIn
    }
  
  },
};
</script>

<style>
.content {
  border: 1px solid rgb(15, 14, 14);
  height: 100%;
  width: 100%;
  background-color: rgba(15, 14, 14, 0.847);
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_img{
  display: flex;
  transition: transform 0.5s ease;
}
.content_img_right{
  transform: translateX(65%);
}

.sheet {
  margin: auto;
  border-radius: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: minmax(150px, 2fr) minmax(200px, 1.3fr);
}

.login{
  transition: transform 0.7s ease;

}

.login_left{
  transform: translateX(-154%);

}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.17s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}


</style>