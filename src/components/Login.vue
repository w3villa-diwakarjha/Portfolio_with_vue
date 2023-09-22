<template>
  <div>
    <Header />
    <div class="container form-margin">
      <h1>Login Page</h1>
      <p>{{ message }}</p>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="text"
            v-model="formData.username"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            v-model="formData.password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >Remember me</label
          >
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <div class="form-group mt-3" ><router-link to="/user/signup">Signup</router-link></div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from 'axios'
export default {
  name: "LoginPage",
  components: {
    Header,
  },
  data(){
    return {
        formData: {
            username: '',
            password: '',
        },
        message: '',
    };
  },
  methods: {

    login(){
      console.log(this)
        const {username,password}=this.formData;
        if(username&&password){
            axios.post('http://localhost:5000/user/login',this.formData)
            .then((res)=>{
                console.log(res);
                this.message= "Login Successful";
                this.$store.dispatch('auth/login', true);
                this.$router.push('/');
            })
            .catch((err)=>{
                this.message="Invalid Login Credential"
                console.log(err);
            })
        }
        else{
            this.message= "Username or password is Empty"
        }
    }
  }
};
</script>

<style scoped>
.form-margin{
    margin-top: 8rem;
}
</style>
