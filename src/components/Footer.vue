<template>
  <div class="parent-footer">
    <h2 class="follow-text">Contact and Follow us</h2>
    <div class="main-footer d-flex">
        <div class="footer-img">
          <img :src="diwakar" alt="" />
        </div>
      
      <div class="copyright">
        <p>Copyright © 2023 My Website</p>
      </div>
      <div class="contact-icon">
        <div class="facebook">
          <router-link to="#"><i class="fa-brands fa-facebook" style="color: #454547;"></i></router-link>
        </div>
        <div class="github">
          <router-link to="#"><i class="fa-brands fa-github" style="color: #454547;"></i></router-link>
        </div>
        <div class="linkedin">
          <router-link to="#"
            ><i class="fa-brands fa-linkedin" style="color: #454547;"></i
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import diwakar from "@/assets/diwakar.jpeg";

export default {
  name: "FooterPage",
  data() {
    return {
      diwakar: diwakar,
    };
  },
};
</script>

<style scoped>
.footer-img img {
  border-radius: 50%;
  height: 100px;
}
.footer-img {
  border-right: 1px solid lightgray;
  margin-top: 25px;
  padding-right: 10px;
  padding-top: 20px;
}
.main-footer {
  justify-content: space-between;
}
.contact-icon {
  display: flex;
  margin-top: 150px;
}
:is(.facebook, .github, .linkedin) {
  padding: 5px;
  cursor: pointer;
}
:is(.facebook i, .github i, .linkedin i) {
  font-size: 20px;
}

.follow-text {
  text-align: center;
  font-weight: 600;
  color: #fff;
}
.copyright {
  margin-top: 150px;
  color: rgb(131, 131, 131);
}

/* #################### Media Query ####################### */

@media screen and (max-width: 580px) {
  .main-footer {
    flex-direction: column;
    text-align: center;
  }
  .footer-img, .copyright, .contact-icon{
    border: none;
    margin: 30px 0px;
  }
}

.contact-icon{
    justify-content: space-around;
} 
</style>
