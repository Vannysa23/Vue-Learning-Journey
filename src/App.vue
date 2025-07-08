<script setup>

  import Welcome from './components/pages/Welcome.vue';
  import Layout from './components/layouts/layout.vue';
  import Dashboard from './components/pages/Dashboard.vue';
  import Workout from './components/pages/Workout.vue';

  const selectedDisplay = 2;

</script>

<template>
  <!-- parent component -->
  <Layout>
    <!-- components / children components -->
    <Welcome v-if="selectedDisplay == 1" />
    <Dashboard v-if="selectedDisplay == 2" />
    <Workout v-if="selectedDisplay == 3" />

  </Layout>



</template>

<style scoped>
 
</style>
