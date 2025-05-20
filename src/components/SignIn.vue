<template>
  <div>
    <h2>Inicia sesión en tu cuenta</h2>
    <form @submit.prevent="handleSignIn">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit" :disabled="loading">
        {{ loading ? 'Iniciando...' : 'Iniciar sesión' }}
      </button>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)
const loading = ref(false)
const userStore = useUserStore()
const router = useRouter()

async function handleSignIn() {
  error.value = null
  loading.value = true

  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })

  if (signInError) {
    error.value = signInError.message
    loading.value = false
    return
  }

  userStore.setUser(data.user)
  router.push('/dashboard')
  loading.value = false
}
</script>
