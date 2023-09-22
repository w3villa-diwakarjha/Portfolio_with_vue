<template>
  <div>
    <div class="mycarousel">
      <div class="owl-carousel owl-theme">
        <div class="item"><img :src="mac" alt="" /></div>
        <div class="item">
          <router-link to="#">
            <img :src="video" alt="No Video" srcset="" />
          </router-link>
        </div>
        <div class="item">
          <router-link to="#">
            <img :src="video" alt="No Video" srcset="" />
          </router-link>
        </div>
        <div class="item">
          <router-link to="#">
            <img :src="video" alt="No Video" srcset="" />
          </router-link>
        </div>
        <div class="item">
          <router-link to="#">
            <img :src="video" alt="No Video" srcset="" />
          </router-link>
        </div>
        <div class="item">
          <router-link to="#">
            <img :src="video" alt="No Video" srcset="" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import video from "@/assets/video.jpeg";
import $ from "jquery"; // Import jQuery first
import "owl.carousel/dist/owl.carousel.min";
import mac from "@/assets/mac.png";

export default {
  name: "CarouselPage",
  data() {
    return {
      mac: mac,
      video: video,
    };
  },
  mounted() {
    $(document).ready(() => {
      const $ = window.$;
      $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        // autoplay: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 3,
          },
        },
      });
    });
  },
};
</script>

<style scoped>
.owl-carousel {
  width: 100%;
  height: 100%;
}

.item {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 200px;
}

.mycarousel {
  height: 200px;
}
.item img {
  width: 100%;
  height: 100%;
}
</style>