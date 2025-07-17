<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow p-4 rounded">
                    <h2 class="mb-4 text-center">Login</h2>
                    <form @submit.prevent="handleSubmit">
                    <!-- Email -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input
                        type="email"
                        class="form-control"
                        id="email"
                        v-model="email"
                        :class="{ 'is-invalid': emailError }"
                        />
                        <div class="invalid-feedback">{{ emailError }}</div>
                    </div>

                    <!-- Password -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input
                        type="password"
                        class="form-control"
                        id="password"
                        v-model="password"
                        :class="{ 'is-invalid': passwordError }"
                        />
                        <div class="invalid-feedback">{{ passwordError }}</div>
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="btn btn-primary w-100">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { ref } from 'vue';

    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');

    function handleSubmit () {
        const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{4,}$/;

        emailError.value = '';
        passwordError.value = '';

        if (emailPattern.test(email.value)) {
            if (passwordPattern.test(password.value)) {
                emailError.value = '';
                passwordError.value = '';
                alert('Login successfully');
                
            } else {
                passwordError.value = "Incorrect password!";
            }
        } else {
            emailError.value = "Incorrect email address!";
        }
    }
</script>

<style scoped>

</style>