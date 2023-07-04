<template>
  <div class="pet">
    <h3>{{ pet.name }}</h3>
    <MyButton label="Save"/>
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