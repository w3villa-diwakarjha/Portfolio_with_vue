<template>
  <div>
    <Header />
    <div class="graybackground">
      <div class="d-flex secondary-box">
        <div class="main-box">
          <div class="main-text"><p>GET Every Single Solutions</p></div>
          <div class="content-box">I'm a software Developer Diwakar Jha</div>
          <div class="main-desc-container">
            <p class="desc-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quia impedit corrupti aliquid rerum aperiam at facilis laudantium
              aliquam ipsam? Magnam dolorum sunt fuga debitis officiis quisquam
              praesentium consectetur earum!
            </p>
            <button class="btn-color Learn-more">Learn More</button>
            <button class="btn-color">Hire Me</button>
          </div>
        </div>
        <div>
          <div class="image-section">
            <img :src="man" alt="logo" class="Man_image" />
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="Myskills">
        <Skills/>
      </div>
    </section>
    <Section>
      <div class="Courses">
        <Courses/>
      </div>
    </Section>
    <section>
      <div class="Footer">
        <Footer/>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Skills from './Skills.vue';
import man from "@/assets/man.png";
import Footer from './Footer.vue';
import Courses from './Courses.vue';

export default {
    name: "AboutPage",
    data() {
    return {
      man: man,
    };
  },
  components: {
    Header,
    Skills,
    Footer,
    Courses,
  }
};
</script>

<style scoped>
.graybackground {
  /* background-color: rgba(207, 207, 207, 0.26); */
  background: #000;
}
.main-box {
  height: 100%;
  width: 50%;
  color: #fff;
}
.secondary-box {
  padding: 150px 160px 0px 160px;
  border-bottom: 1px solid lightblue;
}
.main-text {
  color: darkorange;
  font-size: 16px;
}
.content-box {
  width: 70%;
  font-size: 32px;
  color: #1a205e;
  font-weight: 600;
}
.desc-text {
  font-size: 12px;
  /* color: rgba(68, 66, 66, 0.637); */
}
.Learn-more {
  background-color: #f3493d;
  color: #fff;
}
.btn-color {
  margin: 0px 20px;
  border-radius: 8%;
  padding: 6px;
  border: none;
}
.Man_image{
    height: 100%;
}
.image-section img{
    width: 100%;
    height: 100%;
}


/* #################### Skills Section ######################### */
.Myskills{
  padding-top: 50px;
  text-align: center;
  background-color: black;
  border-bottom: 1px solid lightgrey;
}
.Courses{
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border-bottom: 1px solid lightgray;
  /* padding: 50px 0px; */
  padding: 50px 160px 0px 160px;
}
.Courses div h2{
  text-align: center;
}
.Footer{
  background-color: rgb(0, 0, 0);
  padding: 50px 160px 0px 160px;
}

/* ////////////////// Media Query /////////////////// */

@media screen and (max-width: 1050px){
    .content-box{
        width: 100%;
    }
    .secondary-box{
        padding: 106px 100px 0px 100px;
    }
}
/* @media screen and (max-width: 999px){
    .main-box{
        width: 70%;
    }
} */

@media screen and (max-width: 950px) {
    .secondary-box{
        padding: 110px 50px 0px 50px;
    }
}

@media screen and (max-width: 780px) {
    .btn-color{
        padding: 4px;
        margin: 0px 5px;
    }
    .main-box{
        width: 80%;
    }
    .image-section{
        width: 110%;
    }
}

@media screen and (max-width: 590px) {
    .secondary-box{
        flex-direction: column;
    }
    .image-section{
        margin: 70px 0px;
    }
    .main-box{
        width: 100%;
    }
    .main-text,.content-box{
        text-align: center;
    }
    .main-desc-container{
        text-align: center;
    }
}

</style>
