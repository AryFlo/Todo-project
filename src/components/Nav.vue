<template>
  <div
    class="navbar d-flex justify-content-center px-4 py-3 shadow mb-4"
  >
    <h4 class="fw-bold mb-0 text-white">¿Qué plan para hoy?</h4>

    <div class="d-flex align-items-center gap-5 m-10">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#newTaskModal"
      >
        Añadir tarea +
      </button>

    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.navbar {
  background-color: #303c84;
}

.btn-primary {
  background-color: #8a9af9;
  border-color: #8a9af9;
  margin-left: 50px;
}

.btn-primary:hover {
  background-color: #a4b1fe;
  border-color: #8a9af9;
}
</style>
