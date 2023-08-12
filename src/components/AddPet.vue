<template>
<div class="mt-[20px]" >
  <form @submit="onSubmit" class="flex justify-start mx-[20px]"> 
    <div class="">
        <label for="Name" class="p-sr-only" >Name</label>
        <InputText v-model="name" id="name" type="text" placeholder="name"></InputText>
    </div>
    <div class="ml-[20px]">
        <label for="age" class="p-sr-only">Age</label>
        <InputText v-model="age" id="age" type="number" placeholder="age"></InputText>
    </div>
    <div class="ml-[20px]">
        <label for="url" class="p-sr-only">URL</label>
        <InputText v-model="url" id="url" type="text" placeholder="Image URL"></InputText>
    </div>
    <div class="ml-[20px]">
      <Button  type="submit" label="Сохранить"></Button>
    </div>
  </form>
</div> 
</template>

<script>
export default {
    name: 'AddPet',
    data() {
      return {
        name: "",
        age: "",
        url: "",
        isFavorite: false,
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        
        const newPet = {
          // id: Math.random(),
          name: this.name,
          age: this.age,
          url: this.url,
          isFavorite: this.isFavorite,
        }
        console.log(newPet);
        this.$emit('add-pet', newPet);

        this.name = "";
        this.age = "",
        this.url = ""
      }
    }
}
</script>

<style scoped>
</style>