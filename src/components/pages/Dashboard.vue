<script setup>

    import Grid from '../Grid.vue'
    import { gymHealthFacts } from '../../utills/index.js'

    const randomNumber = Math.floor(Math.random() * gymHealthFacts.length);
    const todayFact = gymHealthFacts[randomNumber];

</script>   

<template>
    <section id="dashboard">
        <div class="card tip-contaienr">
            <h2>Welcome Soldier</h2>
            <div>
                <p class="tip"> <strong>Daily Tip</strong> <br/> {{ todayFact }} </p>
            </div>
            <button>Start Workout</button>
            <Grid />
        </div>
    </section>
</template>

<style scoped>

    .tip-container,
    .tip-container div,
    #dashboard {
        display: flex;
    }

    .tip-container,
    #dashboard {
        flex-direction: column;
    }

    #dashboard {
        gap: 2rem;
    }

    .tip-container {
        gap: 0.5rem;
    }

    @media (min-width: 640px) { 
        .tip-container {
            gap: 4rem;
        }
    }

</style>
