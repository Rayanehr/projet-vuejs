<script setup>
import Footer from "./components/Footer.vue"
import Header from "./components/Header.vue"

// si vous voulez utilisez pinia , il faut placer ces deux lignes dans le composant de votre choix.
//import { useDefaultStore } from './stores/index'
//const store = useDefaultStore()
</script>

<template>
  <main>
    <Header />
    <router-view></router-view>
    <Footer />
  </main>
</template>

<style>
</style>
