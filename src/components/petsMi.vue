<template>
    <div class="p-grid">
        <div v-for="pet in pets" :key="pet.id">
             <!-- <h3>{{ pet.name }}</h3> -->
            <pet-mi :pet="pet"></pet-mi>
        </div>
    </div>
</template>

<script>
import petMi from './petMi.vue';

export default {
    components: { petMi },
    props: {
        pets: Array,
    },
    data() {
        return {
            
        }
    },
}
</script>