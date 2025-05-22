<template>
  <div>
    <h2 class="mb-2">Inicia sesión en tu cuenta</h2>
    <p class="subtitle mb-5"> ¿Listo para tachar cosas de tu lista? </p>

    <form @submit.prevent="handleSignIn">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary w-100">Iniciar sesión</button>

      <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const loading = ref(false)

const userStore = useUserStore()
const router = useRouter()

async function handleSignIn() {
  errorMessage.value = ''
  loading.value = true

  try {
    await userStore.signIn(email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    errorMessage.value = err.message
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.btn-primary {
    background-color: #303c84;
   border-color: #303c84;
}

.btn-primary:hover {
   background-color: #8a9af9;
   border-color: #8a9af9;
}


</style>
