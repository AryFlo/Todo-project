<template>
  <router-view />

</template>


<script setup>
import { onMounted } from 'vue'
import { useUserStore } from './store/user'

const userStore = useUserStore()

onMounted(async () => {
  try {
    await userStore.fetchUser()
  } catch (e) {
    console.error("Error al cargar usuario:", e.message)
  }
})
</script>


<style scoped>

</style>
