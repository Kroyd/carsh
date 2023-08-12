<template>
  <div class="pet">
    <!-- <h3>{{ pet.name }}</h3> -->
        <my-card  >
          <template  #header>
            <img
            src=""
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
            @click="onRemove(pet.id)"
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
        </my-card>
  </div>
</template>

<script>
export default {
    props: {
        pet: Object,
    },
    methods: {
      onRemove(id) {
        // console.log("Cliced",id);
        this.$emit("remove-pet", id)
      }
    }
}
</script>

<style>
img {
  height: 250px;
  object-fit: cover;
  justify-content: space-around;
}
</style>