<script setup>

  import Welcome from './components/pages/Welcome.vue';
  import Layout from './components/layouts/layout.vue';
  import Dashboard from './components/pages/Dashboard.vue';
  import Workout from './components/pages/Workout.vue';
  import Listitem from './components/Listitem.vue';
  import BaseButton from './components/ui/BaseButton.vue';
  import Calculator from './components/Calculator.vue';

  const selectedDisplay = 5;

  import { ref } from "vue";

  let database = ref([
      {
          name: "Johnny",
          department: "Marketing",
          salary: 30000,
      },
      {
          name: "Miky",
          department: "Marketing",
          salary: 30000,
      },
      {
          name: "Sally",
          department: "IT",
          salary: 30000,
      },
      {
          name: "Money",
          department: "Finance",
          salary: 30000,
      },
      {
          name: "John",
          department: "HR",
          salary: 30000,
      },
      {
          name: "Silly",
          department: "Marketing",
          salary: 30000,
      },
      {
          name: "Picky",
          department: "Admin",
          salary: 30000,
      },
  ]);

  function deleteCard(position) {
    database.value.splice(position, 1);
  }

  function addCard() {
    const newItem = {
      name: "New Employee",
      department: "Unknown",
      salary: 0,
    }
    database.value.push(newItem);
  }

</script>

<template>
  <!-- parent component -->
  <Layout>
    <!-- components / children components -->
    <Welcome v-if="selectedDisplay == 1" />
    <Dashboard v-if="selectedDisplay == 2" />
    <Workout v-if="selectedDisplay == 3" />
    <BaseButton v-if="selectedDisplay == 4"
      @addItem="addCard"
    />
    <Listitem v-if="selectedDisplay == 4"  
      v-for="(item, index) in database"
      :name="item.name"
      :department="item.department"
      :salary="item.salary"
      :position="index"
      @deleteItem="deleteCard"
    />
    <Calculator v-if="selectedDisplay == 5" />

  </Layout>



</template>

<style scoped>
 
</style>
