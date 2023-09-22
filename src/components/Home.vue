<template>
  <Header/>
  <div>
    <div class="blackbackground">
      <div class="secondary-box d-flex">
        <div class="container-padding">
          <h2>Welcome to Diwakar Jha Website<span class="name-purple" ></span></h2>
          <h5>Learn <span class="name-purple" id="element">Web Designing with Diwakar Jha</span></h5>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            delectus doloribus autem vero eveniet error inventore adipisci odit
            sint dolorem, impedit, quis, explicabo iste saepe veritatis aliquid
            eaque porro ipsa!
          </h6>
          <button class="btn-color Explore-more">Explore More</button>
        </div>
        <div class="mac-image">
          <img :src="mac" alt="" srcset="" />
        </div>
      </div>
    </div>
    <section>
      <div class="carousel">
        <h4 class="carousel-text">To Get the Latest Content</h4>
        <p>Please Click Here <span><i class="fa-solid fa-angles-down" style="color: #e62828;"></i></span></p>
        <Carousel/>
      </div>
    </section>
    <section>
      <div class="Footer">
        <Footer/>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from '@/components/Mycarousel.vue'
import MAC from "@/assets/mac.png";
import Header from "../components/Header.vue";
import Footer from './Footer.vue';
import Typed from 'typed.js';
export default {
  name: "HomePage",
  components: {
    Header,
    Carousel,
    Footer
  },
  data() {
    return {
      mac: MAC,
      typed: null
    };
  },
  mounted() {
    const options = {
      strings: ['DSA Course', 'Learn Web Designing','Learn DSA'],
      typeSpeed: 100,
      backSpeed:50,
      loop: true
    };

    // Initialize Typed.js on an element with an id of 'element'
    this.typed = new Typed('#element', options);
  },
  beforeUnmount() {
    // Destroy the Typed.js instance when the component is unmounted
    if (this.typed) {
      this.typed.destroy();
    }
  },
};
</script>

<style scoped>
:root {
  --purplecolor: purple;
  --greencolor: green;
}
.blackbackground {
  background-color: #000;
  border-bottom: 1px solid blue;
}
.secondary-box {
  padding: 150px 160px 0px 160px;
}
.container-padding {
  width: 50%;
  color: #fff;
}
.mac-image img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.Explore-more {
  background-color: #f3493d;

  color: #fff;
}
.carousel-text{
  color: #fff;
  text-align: center;
  font-weight: 600;
}
.btn-color {
  margin: 0px 20px;
  border-radius: 8%;
  padding: 6px;
  border: none;
}
.name-purple {
  /* color: var(--purplecolor); */
  color: purple;
}
.Footer{
  background-color: rgba(185, 178, 178, 0.397);
  padding: 150px 160px 0px 160px;
  background-color: #000;
  color: #fff;
}
.carousel{
  padding: 50px 160px 0px 160px;
  background-color: #000;
  color: #fff;
}

/* ########################### Media Query ##################### */

@media  screen and (max-width: 950px) {
  .container-padding {
  width: 80%;
}
  .secondary-box {
  padding: 150px 100px 0px 100px;
}
.carousel{
  padding: 150px 100px 0px 100px;
}
}

@media  screen and (max-width: 850px) {
  .Footer{
    padding: 50px 100px 0px 100px;
  }
}

@media  screen and (max-width: 799px) {
  .carousel{
  padding: 150px 100px 0px 100px;
}
}

@media  screen and (max-width: 730px) {
  .secondary-box {
    padding: 150px 50px 0px 50px;
}
}
@media  screen and (max-width: 697px) {
  .Footer{
    padding: 50px 50px 0px 50px;
  }
}
@media  screen and (max-width: 580px) {
  .secondary-box {
    flex-direction: column;
}
.container-padding {
  width: 100%;
  text-align: center;
  padding-bottom: 50px;
}
@media  screen and (max-width: 390px) {
  .carousel{
  padding: 150px 50px 0px 50px;
}
}

}
</style>
