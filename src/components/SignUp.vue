<template>
  <div>
    <h2>Regístrate</h2>
    <form @submit.prevent="handleSignUp">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <input v-model="confirmPassword" type="password" placeholder="Confirmar contraseña" required />
      <button type="submit">Registrarse</button>

      <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
      <p v-if="successMessage" style="color:green">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useUserStore } from '../store/user'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const userStore = useUserStore()

async function handleSignUp() {
  errorMessage.value = ''
  successMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Las contraseñas no coinciden.'
    return
  }

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })

  if (error) {
    errorMessage.value = error.message
    return
  }

  successMessage.value = 'Te hemos enviado un correo de confirmación. Revisa tu bandeja de entrada.'
}
</script>
