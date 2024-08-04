<!-- BlogPost.vue -->
<script setup>
defineProps(['review'])
// console.log(frontmatter)
</script>

<template>
    {{ review }}

    <div class="food-card">
  <img src="http://lorempixel.com.br/300/300" alt="Food Image" class="food-image">
  <div class="card-content">
    <h2 class="food-title">Restaurante: {{ review.title }}</h2>
    <p class="food-description">Juicy beef patty, crispy bacon, and melted cheese on a toasted bun.</p>
    <div class="rating">
      <span class="star">★</span>
      <span class="star">★</span>
      <span class="star">★</span>
      <span class="star">★</span>
      <span class="star">☆</span>
    </div>
    <p class="price">$12.99</p>
    <p class="cuisine">American</p>
    <p class="restaurant">Burger Joint</p>
  </div>
</div>

<Catalog base="/foodraing/vinhos"></Catalog>



</template>

<style>

.price, .cuisine, .restaurant {
  font-size: 14px;
  margin-top: 5px;
}

.food-card {
  width: 80wh;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px;
}

.food-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 20px;
}

.food-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.food-description {
  line-height: 1.5;
}

.rating {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.star {
  font-size: 20px;
  color: gold;
}


</style>
