<script setup>
import AppLayout from '../components/AppLayout.vue'
import Card from '../components/Card.vue'
import { useRootStore } from '@/stores/root';
import { storeToRefs } from 'pinia';

const rootStore = useRootStore();
rootStore.getNews();

function getNews1(page){
    rootStore.getNews(page)
}

const { news, total, current } = storeToRefs(rootStore);
</script>

<template>
    <AppLayout>
        <div class="container d-flex mt-64">
            <Card v-for="item in news" :key="item.date" :news="item" />
        </div>
        <div class="btn-more" v-if="total && current != total" @click="getNews1(current + 1)">Загрузить ещё</div>
    </AppLayout>
</template>

<style scoped>
    .d-flex {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .mt-64 {
        margin-top: 64px;
    }
    .btn-more {
        width: 203px;
        height: 56px;
        padding: 16px 32px 16px 32px;
        gap: 8px;
        display: block;
        margin: 72px auto;
        border: 1px solid rgba(0, 45, 191, 1);
        border-radius: 15px;

        font-size: 20px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: -0.01em;
        text-align: center;
        color: rgba(0, 45, 191, 1);
    }
</style>