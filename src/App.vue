<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div><RouterLink tag="li" class="col" class-active="active" to="/">Demo</RouterLink></div>
        <div><RouterLink tag="li" class="col" class-active="active" to="/todo">To do App</RouterLink></div>
        <div><RouterLink tag="li" class="col" class-active="active" to="/calculator">Calculator</RouterLink></div>
        <div><RouterLink tag="li" class="col" class-active="active" to="/login">Login</RouterLink></div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: rgb(255, 255, 210);
}

nav div {
  display: inline-block;
  padding: 0rem 0.5rem;
  background-color: rgb(131, 246, 246);
  border: solid 1pt;
  border-radius: 4pt;
  font-family: 'Times New Roman', Times, serif;
  text-decoration: none;
  font-size: 1.5rem;
}

</style>
