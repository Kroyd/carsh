<template>
<div class="search" style="margin-top: 20px">
  <form @submit="onSubmit" class="p-formgroup-inline"> 
    <div class="p-inputgroup flex-1">
        <label for="Name" class="p-sr-only" >Name</label>
        <InputText v-model="name" id="name" type="text" placeholder="name"></InputText>
    </div>
    <div class="p-inputgroup flex-1">
        <label for="age" class="p-sr-only">Age</label>
        <InputText v-model="age" id="age" type="number" placeholder="age"></InputText>
    </div>
    <div class="p-inputgroup flex-1">
        <label for="url" class="p-sr-only">URL</label>
        <InputText v-model="url" id="url" type="" placeholder="Image URL"></InputText>
    </div>
    <MyButton type="submit" label="Сохранить"></MyButton>
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
        isFavorite: true,
      }
    },
    methods: {
      onSubmit(e) {
        e.preventDefault();
        
        const newPet = {
          id: Math.random(),
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
 .search {
  
 }
</style>