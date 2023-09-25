<template>
  <div>
    <h2 style="font-weight: 600">My Courses & Certificate</h2>
    <div>
      <h3>My Courses</h3>
      <div class="d-flex">
        <coursesCard :images="courseData" />
      </div>
    </div>

    <div>
      <h3>My Certificate & Offer Letter</h3>
      <div class="d-flex">
        <coursesCard :images="Certificate" />
      </div>
    </div>
  </div>
</template>

<script>
import coursesCard from "./coursesCard.vue";
export default {
  name: "CoursesPage",
  components: {
    coursesCard,
  },
  data() {
    return {
      courseData: [
        {
          src: require("@/assets/HTML.png"),
          alt: "HTML",
        },

        {
          src: require("@/assets/Js.jpeg"),
          alt: "Node",
        },

        {
          src: require("@/assets/React.png"),
          alt: "React",
        },
      ],

      Certificate: [
        {
            src: require("@/assets/HTML.png"),
            alt: "Internship Certificate",
        },
        {
            src: require("@/assets/Node.png"),
            alt: "Internship Certificate",
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
