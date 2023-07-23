<script setup>
import AppLayout from '../components/AppLayout.vue'
</script>

<template>
    <AppLayout>
        <div class="wrapper">
            <div class="row d-flex">
                <div class="col">11111</div>
                <div class="col">22222</div>
            </div>
        </div>
    </AppLayout>
</template>

<style scoped>
    .d-flex {
        display: flex;
        flex-direction: row;
    }
    .wrapper {
        width: 80%;
        margin: auto;
        border: #000 solid 2px;
    }
    .col {
        width: 50%
    }
</style>