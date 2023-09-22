<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div>
        <router-link class="navbar-brand" to="/"
          ><img :src="logo" alt="logo" class="logoimage"
        /></router-link>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link text-white"
              >Home <span class="sr-only">(current)</span></router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/user/about" class="nav-link text-white"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/user/login"
              class="nav-link text-white"
              v-if="!isAuthenticated"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/user/signup"
              class="nav-link text-white"
              v-if="!isAuthenticated"
              >Signup</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-white"
              to=""
              v-if="isAuthenticated"
              @click="handlelogout"
              >Logout</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import logo from "@/assets/w3villa.png";
import { mapActions, mapState } from "vuex";
export default {
  name: "HeaderPage",
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  data() {
    return {
      logo: logo,
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),

    handlelogout() {
      this.logout();
      // this.$store.dispatch("auth/logout", false);
      this.$router.push("/user/login");
    },
  },
};
</script>

<style scoped>
.logoimage {
  height: 60px;
  width: 80px;
}
</style>
