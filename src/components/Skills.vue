<template>
  <div>
    <h2 style="color: #fff; font-weight: 600;">My Technical Skills</h2>
    <div class="d-flex my-tech-skills">
      <div class="d-flex tech-skills">
        <div class="html tech-skill"><img :src="HTML" alt="Network Error"/><p>HTML</p></div>
        <div class="css tech-skill"><img :src="Css" alt="Network Error"/><p>CSS</p></div>
        <div class="js tech-skill"><img :src="Js" alt="Network Error"/><p>JavaScript</p></div>
      </div>

      <div class="d-flex tech-skills">
        <div class="c tech-skill"><img :src="C" alt="Network Error"/><p>C</p></div>
        <div class="c++ tech-skill"><img :src="Cplusplus" alt="Network Error"/><p>C++</p></div>
        <div class="java tech-skill"><img :src="Java" alt="Network Error"/><p>Java</p></div>
      </div>
      <div class="d-flex tech-skills">
        <div class="Node tech-skill"><img :src="Node" alt="Network Error"/><p>Node</p></div>
        <div class="React tech-skill"><img :src="React" alt="Network Error"/><p>React</p></div>
        <div class="Vue tech-skill"><img :src="Vue" alt="Network Error"/><p>Vue</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import HTML from "@/assets/HTML.png";
import Css from "@/assets/Css.png";
import Js from "@/assets/Js.jpeg";
import Java from "@/assets/Java.png";
import C from '@/assets/c.png';
import Cplusplus from '@/assets/C++.png';
import React from '@/assets/React.png';
import Vue from '@/assets/Vue.png';
import Node from '@/assets/Node.png';

export default {
  name: "SkillPage",
  data() {
    return {
      HTML: HTML,
      Css: Css,
      Js: Js,
      Java: Java,
      C: C,
      Cplusplus: Cplusplus,
      Node: Node,
      React: React,
      Vue: Vue
    };
  },
};
</script>

<style scoped>
.tech-skill img{
    width: 100px;
    height: 100px;
    padding: 0px 10px;
    border-radius: 50%;
}

.my-tech-skills{
    justify-content: center;
    padding: 50px 0px;
    flex-wrap: wrap;
    border-bottom: 1px solid lightblue;
}
.tech-skill p{
    color: #fff;
}
</style>
