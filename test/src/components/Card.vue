<script setup>
import { computed } from 'vue';

const props = defineProps({
    news: {
        type: Object,
        required: true
    }
})

const date = computed(() => {
    return new Date(props.news.date * 1000);
});
</script>

<template>
    <div class="card">
        <div v-if="news.image" class="card-image">
            <img :src="news.image" alt="">
        </div>
        <div class="card-body">
            <div class="card-date">
                <span>{{ date.getDate() }}</span>
                <span>{{ date.toLocaleDateString("en-US", {month: "long"}) }} <br> {{ date.getFullYear() }}</span>
            </div>
            <div class="card-title">
                <RouterLink :to="`${news.code}`">
                    {{ news.name }}
                </RouterLink>
            </div>
            <div class="card-text">{{ news.previewText }}</div>
            <div class="card-tags">{{ news.type.value }}</div>
        </div>
    </div>
</template>

<style scoped>
    .card {
        width: 32%;
        display: flex;
        flex-direction: column;
        margin-bottom: 64px;
        border: 1px solid rgba(15, 98, 254, 1);
        border-radius: 15px;
    }
    .card-body {
        padding: 32px;
    }
    .card-image img {
        width: 100%;
        border-radius: 15px 15px 0 0;
    }
    .card-date {
        display: flex;
        flex-direction: row;
        font-size: 15px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: -0.01em;
        text-align: left;
        color: rgba(161, 167, 181, 1);
    }
    .card-date span:first-child {
        font-size: 36px;
        line-height: 36px;
        padding-right: 5px;
    }

    .card-title {
        margin: 16px 0;
    }
    .card-title a {
        font-family: Nunito Sans;
        font-size: 22px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(12, 91, 239, 1);
        text-decoration: none;
    }

    .card-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: -0.01em;
        text-align: left;
        color: rgba(34, 35, 39, 1);
    }
    .card-tags {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(0, 19, 58, 1);

        background: rgba(240, 246, 254, 1);
        padding: 4px 16px 4px 16px;
        border-radius: 360px;
        gap: 2px;

        display: inline-block;
        margin-top: 40px;
    } 
</style>