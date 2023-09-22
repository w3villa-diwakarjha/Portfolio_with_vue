<template>
  <div v-for="(image, index) in images" :key="index">
    <div class="card card-style" style="width: 18rem">
      <img :src="image.src" class="card-img-top" :alt="image.alt" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">View Courses</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'coursesCard',
    props: {
        images: {
            type: Array,
            required: true,
        }
    }
};
</script>

<style scoped>

.card-style{
    margin: 0px 10px;
    border-bottom: 1px solid white;
}
.card-style img{
    border-bottom: 1px solid lightgray;
}
.card-text{
    color: black;
}
</style>
