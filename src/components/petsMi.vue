<template>
    <div class="pets">
        <div v-for="pet in pets" :key="pet.id">
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