<template>
    <button type="button" class="addBtn" @click="$emit('addItem')">Add Item</button>
</template>

<style scoped>
    .addBtn{
        display: block;
    }
</style>