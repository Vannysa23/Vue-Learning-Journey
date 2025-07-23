<script setup> 
import { ref } from 'vue'
const posts = ref([
    { slug: 'hello-world', title: 'Hellow World', content: 'Welcome to my blog!' },
    { slug: 'vue-routing', title: 'Vue Routing', content: "Let's learn Vue Router"}
])

</script>

<template>
    <h1>Blog</h1>
    <ul>
        <li v-for="post in posts" :key="post.slug">
            <router-link :to="`/blog/${post.slug}`">{{ post.title }}</router-link>

        </li>
    </ul>
</template>