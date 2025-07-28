
<script setup>
import { ref } from 'vue'
import axios from 'axios' //what does this do
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup' //?
// import { onMounted, onUnmounted } from 'vue'; //what are they, what do they do?



//schema
const schema = yup.object({
    name: yup.string().required('Name is required!'),
    email: yup.string().email('Invalid email').required('Email is required!'),
    message: yup.string().min(5, 'Message must be at least 5 characters').required(),
})

//Veevalidate form
const { handleSubmit, resetForm } = useForm({ validationSchema: schema })
const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: message, errorMessage: messageError } = useField('message')

//state, state in vue?
const loading = ref(false)
const success = ref(false)
const apiError = ref(null)
//are we currently declare them as boolean?

const onSubmit = handleSubmit(async (values) => {
    // where does this values arguement come from?
    loading.value = true
    apiError.value = null

    try{
        await axios.post('http://localhost:3000/messages', values)
        success.value = true
        resetForm()
    } catch (err) {
        apiError.value = err.response?.data?.message || 'Something went wrong.'
    } finally {
        loading.value = false
    }
})

</script>
<template>
    <section class="contact-us">
        <div class="container h-100 d-flex align-items-center">
            <div class="card">
                <div class="row h-100">
                    <div class="col-7">
                        <h1 class="title text-center w-100">Send Us Message</h1>
                        <!-- what's the benefitcials of VeeValidate library? -->
                        <form @submit="onSubmit" class="max-w-md mx-auto p-5 space-y-4 border rounded-lg border-0">
                            <div class="mb-3 d-flex align-items-start pt-5">
                                <label class="form-label my-1 me-5 fs-5">Name: </label>
                                <div class="w-100">
                                    <input type="text" v-model.trim="name" class="form-control py-3">
                                    <!-- v-model usage? what properties can be used with v-model -->
                                    <p class="text-sm text-danger">{{ nameError }}</p>
                                </div>
                                
                            </div>

                            <div class="mb-3 d-flex align-items-start">
                                <label class="form-label my-1 me-5 fs-5">Email: </label>
                                <div class="w-100">
                                    <input type="email" class="form-control py-3" v-model="email">
                                    <p class="text-sm text-danger pt-2">{{ emailError }}</p>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label fs-5">Message: </label>
                                <textarea class="form-control" rows="3" aria-label="message" v-model="message"></textarea>
                                <span class="text-sm text-danger">{{ messageError }}</span>

                            </div>


                            <div class="d-flex justify-content-end"> 
                                <button :disabled="loading" class="btn btn-outline-success">
                                    {{ loading ? 'Sending...' : 'Send Message' }}
                                </button>
                            </div>
                            

                            <p v-if="apiError" class="text-danger mt-2">Error: {{ apiError }}</p>
                            <p v-if="success" class="text-success mt-2">Message sent successfully!</p>
                        </form>

                    </div>
                    <div class="col-5">
                        <img src="../assets/img/phnompenh.jpg" width="100%" class="card-img object-fit-cover" alt="PhnomPenh Image">
                    </div>
            </div>
            </div>


        </div>
    </section>

</template>

<style scoped>

.contact-us{
    height: 100vh;
    background-image: url('../assets/img/phnompenh.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.title {
    font-size: 50px;
    padding-top: 50px;
}
.contact-us .card{
    border-radius: 20px;
    height: 80%;
    overflow: hidden;
}

.contact-us .card .card-img {
    background-position: center;
    height: 100%;
}

.card textarea {
    resize: none;
}

</style>