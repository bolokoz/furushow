---
nota: 3
justificativa: asdfoasidjfaos
images: asdfasdfoj
title: Centrale
description: Avaliação de Parmegiana
date: 2024-07-20T04:00:00.000Z
category:
  - Food Rating
tag:
  - Parmegiana
acompanhamentos:
  - arrroz
---

123

<!-- One plus one equals: {{ frontmatter.porcao }} -->

<!-- Titulo: {{ title }} -->

<!-- <span v-for="i in 3"> span: {{ i }} </span>

<h1>{{ $frontmatter.title }}</h1>
  <p>{{ $frontmatter.description }}</p>
  <p>Author: {{ $frontmatter.price }}</p>

This is default theme built-in `<Badge />` component <Badge text="demo" /> -->

<!-- <FoodReview :review="$frontmatter" /> -->
<FoodReview2 :review="$frontmatter" />



<script setup>
import FoodReview from "@FoodReview";
import FoodReview2 from "@FoodReview2";
// import {computed} from 'vue'
// const now = computed(() => Date.now())
// console.log(now)
// console.log(this.frontmatter)
</script>