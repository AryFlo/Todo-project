
<template>
  <div>
    <h2 class="mb-2">Regístrate</h2>
    <p class="subtitle mb-5"> Porque cada día empieza mejor con un plan. </p>

    <form @submit.prevent="handleSignUp">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Contraseña</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Confirmar contraseña</label>
        <input v-model="confirmPassword" type="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-success w-100">Registrarse</button>

      <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
      <p v-if="successMessage" class="text-success mt-3">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../store/user'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const userStore = useUserStore()

// Sign Up logic -> Calls the userStore's signUp method
async function handleSignUp() {
  errorMessage.value = ''
  successMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Las contraseñas no coinciden.'
    return
  }

  try {
    await userStore.signUp(email.value, password.value)
    successMessage.value = 'Te hemos enviado un correo de confirmación.'
  } catch (err) {
    errorMessage.value = err.message
  }
}
</script>


<style scoped>
.btn-success {
    background-color: #8a9af9;
   border-color: #8a9af9;
}

.btn-success:hover {
   background-color: #303c84;
   border-color: #303c84;
}

.text-danger {
    color: rgb(37, 184, 128);
}
</style>