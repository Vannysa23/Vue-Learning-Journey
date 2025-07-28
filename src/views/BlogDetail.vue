<script setup>
    import { ref } from 'vue'
    import { useRoute } from 'vue-router' //what does that {useRoute} do?

    const route = useRoute()
    const post = ref(null)

    const posts = [
        { slug: 'hello-world', title: 'Hello World', content: 'Welcome to my blog!' },
        { slug: 'vue-routing', title: 'Vue Routing', content: "Let's learn Vue Router"}
    ]

    post.value = posts.find(p => p.slug === route.params.slug)

</script>
<template>
    <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
    </div>
    <div v-else>
        <p>Post not found</p>
    </div>


</template>
<style>

</style>