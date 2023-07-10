<template>
  <!-- <div class="home"></div> -->
  <add-pet></add-pet> 
  <petsMi  
  @remove-pet="removePet" 
  :pets="pets"
  @add-favorite="addFavorite"
  />
</template>

<script>
import petsMi from "../components/petsMi";
import AddPet from "../components/AddPet";

export default {
  name: 'HomeView',
  components: { petsMi, AddPet, },
  methods: {
    removePet(id) {
      // console.log('Home', id);
      if(confirm('Вы дествительно хотите удалить картинки?')) {
        this.pets = this.pets.filter((pet) => pet.id !== id)
      }else {
        alert('Вы хорошый человека?')
      }
    },
    addFavorite(id) {
      this.pets = this.pets.map((pet) => 
      pet.id === id ? {...pet, isFavorite: !pet.isFavorite} : pet 
      );
    },
  },
  data() {
    return {
      pets: [],
    }
  },  
  created() {
    this.pets = [
    {
          id: 1,
          name: "Rudy",
          age: 2,
          img:
            "https://img.freepik.com/free-photo/beautiful-redhead-woman-with-curly-hair-smiling-looking-at-camera-sitting-at-table-over-white-wall_176420-17042.jpg?w=740&t=st=1688212883~exp=1688213483~hmac=81764a2a93a341cddf727d9cbc081c9cf20b334a05be0ebe7fe43761caef7a7e",
          isFavorite: true,
        },
        {
          id: 2,
          name: "JS",
          age: 3,
          img:
            "https://img.freepik.com/free-photo/woman-portrait-indoors_624325-3423.jpg?w=740&t=st=1688212966~exp=1688213566~hmac=f4ed84f33288cb455cb5e3b92d509d8276fc026ed81a844adcc1703984af55e1",
          isFavorite: false,
        },
    ]
  }
}
</script>
