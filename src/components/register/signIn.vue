<template>
  <v-card elevation="5" id="v-card_login">
    <img src="../../assets/logoBook.png" alt="" class="img_logo" />
    <h2 class="v-card_title">Welcome!</h2>
    <h6 class="v-cart_title">Please enter your information</h6>
    <v-form @submit.prevent="submit" v-model="valid" ref="formLogIn">
      <v-text-field
        v-model="user.email"
        label="E-mail"
        required
        :rules="emailRules"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        label="Password"
        required
        :rules="passwordRules"
      ></v-text-field>

      <v-btn
        id="v-form_button"
        class="mr-4"
        @click="submit"
        block
        style="background-color: rgba(15, 14, 14, 0.847; color: white;  text-transform: capitalize; "
      >
        Sign Up
      </v-btn>
      <v-btn
        id="v-form_button"
        class="mr-4"
        block
        style="text-transform: capitalize"
        >Sign Up with Google</v-btn
      >
      <p style="margin-top: 50px">
        Do you have a count?<a href="#" @click.prevent="changeStatus">Login</a>
      </p>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    user: {
      email: "",
      password: "",
    },
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length > 3 || "Required 4 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
  }),

  methods: {
    changeStatus() {
      this.$emit("changeStatus");
    },
    submit() {
      if (this.$refs.formLogIn.validate()) {
        console.log("Funciona");
        //Aqui poner codigo de la peticion http
        this.$axios
          .post("/api/register/", this.user)
          .then((response) => {
            console.log(response);

            localStorage.setItem(`token`, response.data.token);
            this.$axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
            this.$router.push({name: 'main'})
          })
          .catch((error) => {
            console.log("This is a message of the error")
            alert(error.message);
          });
      }
    },
  },
};
</script>

<style>
#v-card_login {
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img_logo {
  width: 60px;
  height: 60px;
  margin: 10px;
}
.v-card_title {
  font-family: sans-serif;
}
#v-form_button {
  margin-top: 10px;
  border-radius: 20px;
  font-size: 13px;
}
.align-bottom {
  align-self: flex-end;
}
.content_img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>