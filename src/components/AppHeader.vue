<template>
  <header class="app-header ">
   <img src="/tudu_loogo2.png" alt="logo" class="logo_header"/>
    <button @click="logout" class="btn btn-outline-danger">Cerrar sesión</button>
  </header>
</template>

<script setup>
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

async function logout() {
  await userStore.signOut() 
  router.push('/auth') 
}
</script>

<style scoped>
.app-header {
  background-color: #dce5ff;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
   justify-content: space-between;
       align-items: center;
      
}
.logo_header {
  width: 10rem;
  height: auto;
}

.btn-outline-danger {
  background-color: transparent;
   color: #303c84;
   border: 2px solid #303c84;
  
}
.btn-outline-danger:hover{
  background-color: #303c84;
  color: white;
}

.btn-outline-danger:active{
  background-color: #303c84;
  color: white;
  border: 2px solid #303c84
}

</style>
