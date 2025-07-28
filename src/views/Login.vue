<script setup>
import { login } from '../utills/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

// const login = () => {
//     localStorage.setItem('auth', 'true')
//     router.push('/admin')
// }

function handleLogin(router) {
    login(router)
}

</script>
<template>
    <div class="container login-container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="login-box">
                    <h3 class="text-center mb-4">Login</h3>
                    <form @submit.prevent="handleLogin">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" required>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" required>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label pt-1" for="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                    <p class="mt-3 text-center">
                        <a href="#">Forgot password?</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    body {
        background-color: #f8f9fa;
    }
    .login-container {
        margin-top: 100px;
    }
    .login-box {
        padding: 30px;
        border-radius: 10px;
        background-color: #ffffff;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    }
</style>