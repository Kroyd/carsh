<template>
  <div class="pet">
    <!-- <h3>{{ pet.name }}</h3> -->
        <MyCard style="width: 25em;">
          <template #header>
            <img 
            src="https://img.freepik.com/free-photo/beautiful-redhead-woman-with-curly-hair-smiling-looking-at-camera-sitting-at-table-over-white-wall_176420-17042.jpg?w=740&t=st=1688212883~exp=1688213483~hmac=81764a2a93a341cddf727d9cbc081c9cf20b334a05be0ebe7fe43761caef7a7e" 
            style="height: 15rem;"
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
          <template #footer>
            <MyButton 
            icon="pi pi-times" 
            label="Remove" 
            class="p-button-danger"
            style="margin-right: 4em;"
            ></MyButton>
            <MyButton 
            icon="pi pi-heart" 
            class="p-button-rounded p-button-danger">
            </MyButton>
            <MyButton
              icon="pi pi-heart"
              class="p-button-rounded p-button-danger p-button-outlined"  
            >
            </MyButton>
          </template>
        </MyCard>
  </div>
</template>

<script>
export default {
    props: {
        pet: Object,
    },
}
</script>

<style>

</style>