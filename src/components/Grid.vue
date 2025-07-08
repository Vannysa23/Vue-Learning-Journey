<script setup>
    import { workoutProgram } from '../utills';
    
    const workoutTypes = ['Push', 'Pull', 'Legs']

</script>

<template>
    <section id="grid">
        <button :key="workoutIdx" v-for="(workout, workoutIdx) in Object.keys(workoutProgram)" class="card-button plan-card">
            <div class="day">
                <p>Day {{ workoutIdx < 9 ? '0' + (workoutIdx + 1) : workoutIdx + 1 }}</p>
                <i class="fa-solid fa-dumbbell" v-if="workoutIdx % 3 == 0"></i>
                <i class="fa-solid fa-weight-hanging" v-if="workoutIdx % 3 == 1"></i>
                <i class="fa-solid fa-bolt" v-if="workoutIdx % 3 == 2"></i>
            </div>
            <h3>{{ workoutTypes[workoutIdx % 3] }}</h3>
        </button>
    </section>
    
</template>

<style scoped>
    #grid {
        padding-top: 20px;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    #grid button {
        width: 100%;
    }

    .plan-card {
        display: flex;
        flex-direction: column;
    }

    .day {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #grid button h3 {
        padding-top: 1rem;
    }

</style>
