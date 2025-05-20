<template>
  <div>
    <SignIn v-if="isLogin" />
    <SignUp v-else />
    <button @click="toggleMode">
      {{ isLogin ? '¿Aún no tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'

const isLogin = ref(true)
const userStore = useUserStore()
const router = useRouter()

function toggleMode() {
  isLogin.value = !isLogin.value
}


onMounted(() => {
  if (userStore.user) {
    router.push('/dashboard')
  }
})
</script>