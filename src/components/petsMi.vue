<template>
    <div class="p-grid p-jc-around">
        <div class="p-col-12 p-md-6 p-lg-3" v-for="pet in pets" :key="pet.id">
             <!-- <h3>{{ pet.name }}</h3> -->
            <pet-mi @remove-pet="$emit('remove-pet', pet.id)" :pet="pet"></pet-mi>
        </div>
    </div>
</template>

<script>
import petMi from './petMi';

export default {
    components: { petMi },
    props: {
        pets: Array,
    },
    emits: ["remove-pet"],
    data() {
        return {
            
        }
    },
}
</script>