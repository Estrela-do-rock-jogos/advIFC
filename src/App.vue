<script setup>
    import { onMounted, ref } from 'vue'
    import { useWordStore } from '@/stores/word.js'
    import Loading from 'vue-loading-overlay';

    const isLoading = ref(false)

    const wordStore = useWordStore();

    onMounted(async() => {
        isLoading.value = true;
        await wordStore.fetchWord();
        isLoading.value = false;
    });
    

    
</script>

<template>
<section id="main">
    
</section>

<loading v-model:active="isLoading" is-full-page />

</template>

<style scoped></style>
