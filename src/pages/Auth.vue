
<template>
  <div class="container-fluid vh-100 d-flex align-items-center bg-white">
    <div class="row w-100 overflow-hidden">
      <div
        class="col-md-6 d-none d-md-flex align-items-center justify-content-center"
      >
        <img
          :src="
            isLogin ? '/login-illustration.png' : '/signup-illustration.png'
          "
          alt="illustration"
          class="img-fluid p-4"
        />
      </div>

      <div
        class="col-md-6 d-flex align-items-center justify-content-center p-5"
      >
        <div class="w-100" style="max-width: 400px">
          <img src="/tudu_logo.png" alt="logo" class="logo" />
          <SignIn v-if="isLogin" />
          <SignUp v-else />

          <div class="mt-4 text-center">
            <button class="btn btn-link p-0" @click="toggleMode">
              {{
                isLogin
                  ? "¿Aún no tienes una cuenta? Regístrate"
                  : "¿Ya tienes una cuenta? Inicia sesión"
              }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";

import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

const isLogin = ref(true);
const userStore = useUserStore();
const router = useRouter();

function toggleMode() {
  isLogin.value = !isLogin.value;
}

onMounted(() => {
  if (userStore.user) {
    router.push("/dashboard");
  }
});
</script>

<style scoped>
.logo {
  max-width: 60%;
  height: auto;
  margin-bottom: 150px;
  align-content: end;
  
}
 
.img-fluid {
  max-width: 80%;
  border-radius: 50px;
  justify-content: end;
}

.btn-link {
  color: #303c84 ;
}

</style>
