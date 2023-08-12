<template>
  <div class="pet">
    <!-- <h3>{{ pet.name }}</h3> -->
        <card>
          <template  #header>
            <img class="w-[300px] h-[250px] object-cover" 
            :src="pet.url" alt="Pet"
            />
          </template>
          <template #title>
            {{ pet.name }}
          </template>
          <template #subtitle>
            Age: {{ pet.age }}
          </template>
          <!-- <template #content>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique aliquam fugit sit sapiente 
            odio, at excepturi quam voluptatibus totam, dolore magni ullam consequatur reiciendis qui accusamus eligendi natus nobis quod!</p>
          </template> -->
          <template  #footer>
            <Button 
            @click="onRemove(pet.id, pet.name)"
            icon="pi pi-times" 
            label="Remove" 
            class="p-button-danger"
            style="margin-right: 4em;"
            ></Button>
            <Button 
            @click="$emit('add-favorite', pet.id)"
            icon="pi pi-heart"
            :class="[pet.isFavorite ? '' : 'p-button-outlined', 'p-button-rounded', 'p-button-danger']">
            </Button>
          </template>
        </card>
  </div>
</template>

<script>
export default {
    props: {
        pet: Object,
    },
    methods: {
      onRemove(id, name) {
        // console.log("Cliced",id, name);
        this.$emit("remove-pet", id, name)
      }
    }
}
</script>