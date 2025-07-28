<script setup>

  // import Welcome from './components/pages/Welcome.vue';
  // import Layout from './components/layouts/layout.vue';
  // import Dashboard from './components/pages/Dashboard.vue';
  // import Login from './components/pages/LoginFrm.vue';
  // import Workout from './components/pages/Workout.vue';
  // import Listitem from './components/Listitem.vue';
  // import BaseButton from './components/ui/BaseButton.vue';
  // import Calculator from './components/Calculator.vue';

  // const selectedDisplay = 6;

  import { isLoggedIn, logout } from './utills/auth'
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'

  // let database = ref([
  //     {
  //         name: "Johnny",
  //         department: "Marketing",
  //         salary: 30000,
  //     },
  //     {
  //         name: "Miky",
  //         department: "Marketing",
  //         salary: 30000,
  //     },
  //     {
  //         name: "Sally",
  //         department: "IT",
  //         salary: 30000,
  //     },
  //     {
  //         name: "Money",
  //         department: "Finance",
  //         salary: 30000,
  //     },
  //     {
  //         name: "John",
  //         department: "HR",
  //         salary: 30000,
  //     },
  //     {
  //         name: "Silly",
  //         department: "Marketing",
  //         salary: 30000,
  //     },
  //     {
  //         name: "Picky",
  //         department: "Admin",
  //         salary: 30000,
  //     },
  // ]);

  // function deleteCard(position) {
  //   database.value.splice(position, 1);
  // }

  // function addCard() {
  //   const newItem = {
  //     name: "New Employee",
  //     department: "Unknown",
  //     salary: 0,
  //   }
  //   database.value.push(newItem);
  // }

  const router = useRouter()

  const loginText = computed(() => isLoggedIn.value ? 'Logout' : 'Login')

  function handleLogin() {
    login(router)
  }

  function handleLogout() {
    logout(router)
  }


</script>

<template>
  <!-- parent component
  <Layout>
    components / children components
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
    <Login v-if="selectedDisplay == 6" />

  </Layout> -->

  <div>
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <a href="/" class="d-flex align-items-start mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="./assets/img/logo.png" width="35px" alt="Logo image">
            <h2 class="ps-2">Vue</h2>
          </a>

          <ul class="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <router-link class="nav-link fs-md-6 fs-5 px-2 text-white" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="nav-link fs-md-6 fs-5 px-2 text-white" to="/admin">Admin</router-link> 
            </li>
          </ul>

          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">
              <router-link v-if="!isLoggedIn" to="/login" class="nav-link text-white login-txt">{{ loginText }}</router-link>
              <a v-else href="/logout" 
              class="nav-link text-white login-text"
              @click.prevent="handleLogout"
              >{{ loginText }}</a>

            </button>
            <button type="button" class="btn btn-warning">
              <router-link class="nav-link text-white login-txt" to="/contact">Contact</router-link>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="position-relative">
      <!-- <div class="position-absolute bottom-0">
        <p class="mx-auto">&copy; 2025 My Blog</p>

      </div> -->
    </footer>
  </div>



</template>

<style scoped>
.login-txt:hover {
  color: black !important;
}
/* 
footer {
  bottom: 0;
} */

</style>
