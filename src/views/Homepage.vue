<script setup>
    import router from '@/router';
    import axios from 'axios'
    import {ref, watch} from 'vue'
    import Toast from '../components/toasts.vue'
    import Navbar from '../components/navbar.vue'


</script>

<template>
    <section class="container">
        <Navbar></Navbar>
    </section>
</template>
    
<style scoped>
.container{
    width: 100vw;
    height: 100vh;
}
</style>