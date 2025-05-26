<template>
  <div
    class="navbar d-flex justify-content-between align-items-center px-4 py-3 shadow mb-4"
  >
    <h3 class="fw-bold mb-0 text-white">Lo que toca hoy (o no)</h3>

    <div class="d-flex align-items-center gap-5">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#newTaskModal"
      >
        Añadir tarea +
      </button>
      <button class="btn btn-light rounded-circle shadow-sm">
        <i class="bi bi-search fs-5"></i>
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
}

.btn-primary:hover {
  background-color: #a4b1fe;
  border-color: #8a9af9;
}
</style>
