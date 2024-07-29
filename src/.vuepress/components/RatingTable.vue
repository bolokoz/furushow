<script setup>
import { usePageData, useRoutes } from 'vuepress/client'

// const props = defineProps({
//     page: usePageData
// })

</script>

<template>
    <h1>Rating Table</h1>
    <br>
    <p>page props</p>
    <!-- <p>{{ page }}</p> -->

    <br>

    <p>Use page data directly</p>
    <p>{{ (useRoutes())}}</p>
</template>