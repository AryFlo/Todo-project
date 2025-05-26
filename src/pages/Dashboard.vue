<template>
  <div>
    <AppHeader />
    <Nav />

    <main class="container mt-4">
      <h2 class="mb-4">Tareas</h2>
      <TaskList @edit="openEditModal" />

      <div
        class="modal"
        id="newTaskModal"
        tabindex="-1"
        aria-labelledby="newTaskModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="newTaskModalLabel">
                {{ taskToEdit ? "Editar tarea" : "Crear nueva tarea" }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>
            <div class="modal-body">
              <NewTask :task="taskToEdit" @close="closeModal" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import AppHeader from "../components/AppHeader.vue";
import Nav from "../components/Nav.vue";
import TaskList from "../components/TaskList.vue";
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../store/task";

const taskStore = useTaskStore();

onMounted(() => {
  taskStore.fetchTasks();
});

const taskToEdit = ref(null);

const openEditModal = (task) => {
  taskToEdit.value = task;
  const modal = new bootstrap.Modal(document.getElementById("newTaskModal"));
  modal.show();
};

const closeModal = () => {
  const modalEl = document.getElementById("newTaskModal");
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }
  taskToEdit.value = null;
};
</script>
