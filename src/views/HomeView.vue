<template>
   <nav id="nav">
    <router-link to="/home">Home</router-link>
    <router-link :to="{name: 'about'}">About</router-link>
  </nav>
  <!-- <div class="home"></div> -->
  <add-pet
  @add-pet="addPet"
  ></add-pet> 
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
    // addPet(pet) {
    //   this.pets  = [...this.pets, pet]
    // },
    async addPet(pet) {
      const res = await fetch("https://64d7183d2a017531bc12f8c8.mockapi.io/Vuecarsh", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(pet)
      })

      const data =  await res.json();
      this.pets = [...this.pets, data]
    },
    // removePet(id, name) {
    //   console.log('Home', id);
    //   if(confirm('Вы дествительно хотите удалить картинки?')) {
    //     this.pets = this.pets.filter((pet) => pet.id !== id)
    //   }else {
    //     alert('Вы хорошый человека?')
    //     alert('Но хорошый некто не любить ' + name)
    //   }
    // },
    async removePet(id, name) {
      if(confirm('Вы дествительно хотите удалить картинки?')) {
         const res = await fetch(`https://64d7183d2a017531bc12f8c8.mockapi.io/Vuecarsh/${id}`,{
          method: "DELETE",
         });
         
         res.status === 200 ?  (this.pets = this.pets.filter((pet) => pet.id !== id)) 
         : alert(`Удалено ` + name) , alert(`Удалено ` + name)
      }else{
        alert('Вы хорошый человека?')
        alert('Но хорошый некто не любить ' + name)
      }
    },
    // addFavorite(id) {
    //   this.pets = this.pets.map((pet) => 
    //   pet.id === id ? {...pet, isFavorite: !pet.isFavorite} : pet 
    //   );
    // },
    
    async addFavorite(id) {
      const addFavorite = await this.fetchPet(id)
      const updateFavorite = {
        ...addFavorite, isFavorite: !addFavorite.isFavorite
      }

      const res = await fetch(`https://64d7183d2a017531bc12f8c8.mockapi.io/Vuecarsh/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateFavorite)
      })
      this.pets = this.pets.map((pet) => 
      pet.id === id ? {...pet, isFavorite: !pet.isFavorite} : pet
      );

      const data = await res.json()

      this.pets = this.pets.map((pet) => pet.id === id ?  {...pet, isFavorite: data.isFavorite} : pet )
    },
    async fetchPets() {
      const res = await fetch("https://64d7183d2a017531bc12f8c8.mockapi.io/Vuecarsh")
      const data = await res.json();
      return data
    },
    async fetchPet(id) {
      console.log(id);
      const res = await fetch(`https://64d7183d2a017531bc12f8c8.mockapi.io/Vuecarsh/${id}`);
      const data = await res.json()
      return data
    } 
  },
  data() {
    return {
      pets: [],
    }
  },  
  async created() {
    this.pets = await this.fetchPets()
    // this.pets = [
    //     {
    //       id: 1,
    //       name: "Rudy",
    //       age: 2,
    //       url:"data:image/jpeg;base64,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",
    //       isFavorite: true,
    //     },
    //     {
    //       id: 2,
    //       name: "JS",
    //       age: 3,
    //       url:"data:image/jpeg;base64,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",
    //       isFavorite: false,
    //     },
    // ]
  }
}
</script>

<style scoped>
   body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #231f20;
  color: white;
  padding: 20px 50px;
}

#nav a {
  font-size: 30px;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>