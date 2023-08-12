<template>
    <div class="flex justify-content items-center grid">
        <div class="p-col-12 p-lg-6 p-lg-3" v-for="pet in pets" :key="pet.id">
             <!-- <h3>{{ pet.name }}</h3> -->
            <pet-mi 
            class="mt-[50px] mx-[25px] "
            @remove-pet="$emit('remove-pet', pet.id ,pet.name)" 
            @add-favorite="$emit('add-favorite', pet.id)" 
            :pet="pet"
            ></pet-mi>
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
    emits: ["remove-pet", "add-favorite"],
    data() {
        return {
            
        }
    },
}
</script>

<style></style>