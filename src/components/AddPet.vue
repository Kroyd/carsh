<template>
<div class="search" style="margin-top: 20px">
  <div class="p-formgroup-inline"> 
    <div class="p-inputgroup flex-1">
        <label for="Name" class="p-sr-only" >Name</label>
        <InputText id="name" type="text" placeholder="name"></InputText>
    </div>
    <div class="p-inputgroup flex-1">
        <label for="age" class="p-sr-only">Age</label>
        <InputText id="age" type="number" placeholder="age"></InputText>
    </div>
    <div class="p-inputgroup flex-1">
        <label for="url" class="p-sr-only">URL</label>
        <InputText id="url" type="" placeholder="Image URL"></InputText>
    </div>
    <MyButton type="button" label="Save"></MyButton>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
 .search {
  
 }
</style>