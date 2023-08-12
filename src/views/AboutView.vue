<template>
   <nav id="nav">
    <router-link to="/home">Home</router-link>
    <router-link :to="{name: 'about'}">About</router-link>
  </nav>
  <div class="about">
    <h1 class="text-[50px]">This is an about page</h1>
  </div>
</template>

<style >
.about{
  margin-top: 500px;
}
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