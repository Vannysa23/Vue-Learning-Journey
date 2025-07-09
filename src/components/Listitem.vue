
<template>
    <div class="col-6">
        <div class="card">
            <div class="card-header">
                <h3>Department: {{ department }}</h3>
                <button type="button" class="deleteBtn" @click="$emit('deleteItem', position)">Delete Item</button>
            </div>
            <p>Name: {{ name }}</p>
            <p>salary: <strong>{{ salary }}</strong> </p>
            <p>position: {{ position }}</p>
        </div>
        
    </div>
</template>

<script setup>

    defineProps({
        name: String,
        department: String,
        salary: Number,
        position: Number
    });
</script>

<style scoped>
.col-6 {
    display: inline-flex;
    width: 50%;
    padding: 1rem;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

}
h3{
    padding-bottom: 0.5rem;
}
p{
    padding-inline: 1rem;
}
.card {
    width: 100%;
    border: 1px solid black;
    border-radius: 10px;
    color: cadetblue;
}



</style>