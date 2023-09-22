<template>
  <div>
    <Header />
    <div class="container form-margin">
      <h1>Signup Page</h1>
      <p>{{ message }}</p>
      <div>
        <form @submit.prevent="signup">
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
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember me</label
            >
          </div>
          <button type="submit" class="btn btn-primary">Signup</button>
        </form>
        <div class="form-group mt-3" ><router-link to="/user/login">Signin</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
// import axios from 'login_signup/node_modules/axios/dist/axios'
import axios from 'axios';
export default {
  name: "SignupPage",
  components: {
    Header,
  },
  data(){
    return {
        formData: {
            username: '',
            password: ''
        },
        message: ''
    };
  },
  methods: {
    signup(){
        const {username,password}=this.formData;
        if(username&&password){
            axios.post('http://localhost:5000/user/signup',this.formData)
            .then((res)=>{
                console.log(res.data.message);
                this.message= "Signup Successful"
                this.$router.push('/user/login');
            })
            .catch((err)=>{
                this.message= "Username already Exist"
                console.log(err);
            })
        }else{
            this.message="Username or Password is Empty"
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