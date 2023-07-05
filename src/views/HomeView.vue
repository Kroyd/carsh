<template>
  <div class="home"></div>
  <petsMi :pets="pets"/> 
</template>

<script>
import petsMi from "../components/petsMi.vue";
export default {
  name: 'HomeView',
  components: { petsMi, },
  data() {
    return {
      pets: [
        {
          id: 1,
          name: "Rudy",
          age: 2,
          img:
            "https://img.freepik.com/free-photo/beautiful-redhead-woman-with-curly-hair-smiling-looking-at-camera-sitting-at-table-over-white-wall_176420-17042.jpg?w=740&t=st=1688212883~exp=1688213483~hmac=81764a2a93a341cddf727d9cbc081c9cf20b334a05be0ebe7fe43761caef7a7e",
          isFavorite: true,
        },
        {
          id: 1,
          name: "JS",
          age: 2,
          img:
            "https://img.freepik.com/free-photo/woman-portrait-indoors_624325-3423.jpg?w=740&t=st=1688212966~exp=1688213566~hmac=f4ed84f33288cb455cb5e3b92d509d8276fc026ed81a844adcc1703984af55e1",
          isFavorite: false,
        },
      ]
    }
  }
}
</script>
