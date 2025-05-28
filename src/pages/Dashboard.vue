<template>
  <div>
    <AppHeader />
    <Nav />

    <main class="container mt-4">
      <h2 class="mb-5 mt-5 text-center">
        ¡Misiones en marcha! 🔥 Tus pendientes te esperan
      </h2>

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
                {{ taskToEdit ? "🚀 Editar misión" : " 🚀 Nueva misión " }}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
                @click="closeModal"
              ></button>
            </div>
            <div class="modal-body">
              <NewTask
                :key="taskToEdit?.id || 'new'"
                :task="taskToEdit"
                @close="closeModal"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import AppHeader from "../components/AppHeader.vue";
import Nav from "../components/Nav.vue";
import TaskList from "../components/TaskList.vue";
import NewTask from "../components/NewTask.vue";
import { useTaskStore } from "../store/task";

const taskStore = useTaskStore();
const taskToEdit = ref(null);
let modalInstance = null;

onMounted(() => {
  taskStore.fetchTasks();
});

const showModal = async () => {
  await nextTick();
  const modalEl = document.getElementById("newTaskModal");
  if (!modalInstance) {
    modalInstance = new bootstrap.Modal(modalEl, { backdrop: "static" });
  }
  modalInstance.show();
};

const hideModal = () => {
  const modalEl = document.getElementById("newTaskModal");
  if (modalEl) {
    const instance = bootstrap.Modal.getInstance(modalEl);
    if (instance) instance.hide();
  }
};

const openEditModal = (task) => {
  taskToEdit.value = { ...task };
  showModal();
};

const closeModal = () => {
  hideModal();
  taskToEdit.value = null;
};
</script>

<style scoped>
h2 {
  color: #6779dc;
}
</style>
