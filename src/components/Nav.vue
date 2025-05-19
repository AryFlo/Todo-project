<template>
  <nav class="nav-bar">
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/auth">Cerrar sesión</router-link>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: #35495e;
  padding: 1rem;
}

.nav-bar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-bar a.router-link-active {
  text-decoration: underline;
}
</style>
