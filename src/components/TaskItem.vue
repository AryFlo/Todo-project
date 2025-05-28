<template>
  <div class="card mb-3" :class="{ 'bg-light': task.completed }">
    <div class="card-body d-flex justify-content-between align-items-start">
      <div>
        <div>
          <button
            @click="toggle"
            class="btn btn-outline-success me-4 mb-3 custom-btn3"
            :title="
              task.completed
                ? 'Marcar como pendiente'
                : 'Marcar como completada'
            "
            @mouseover="hoverCheck = true"
            @mouseleave="hoverCheck = false"
          >
            <i
              class="bi"
              :class="
                task.completed
                  ? 'bi-arrow-repeat'
                  : hoverCheck
                  ? 'bi-check'
                  : 'bi-square'
              "
            ></i>

            {{ task.completed ? "Volver a activar" : "¡Misión cumplida!" }}
          </button>
        </div>

        <h5 class="card-title mb-1">
          <span :class="{ 'text-decoration-line-through': task.completed }">
            {{ task.title }}
          </span>
        </h5>
        <p class="card-text">{{ task.description }}</p>
      </div>

      <div class="btn-group btn-group-sm">
        <button
          @click="$emit('edit', task)"
          class="btn btn-outline-primary custom-btn"
        >
          <i class="bi bi-pencil"></i>
        </button>
        <button
          @click="remove"
          class="btn btn-outline-danger custom-btn2"
          title="Eliminar"
        >
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
    <span class="text-muted m-3 align-self-end">
      <i class="bi bi-calendar-event me-1 mb-3"></i>
      {{ formatDate(task.created_at) }}
    </span>
  </div>
</template>

<script setup>
import { useTaskStore } from "../store/task";
import { ref } from "vue";

const hoverCheck = ref(false);

const props = defineProps({ task: Object });
const emit = defineEmits(["edit"]);

const taskStore = useTaskStore();

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const toggle = () => {
  taskStore.toggleTask(props.task.id, props.task.completed);
};

const remove = () => {
  const confirmDelete = confirm("¿Seguro que quieres decirle adiós?");
  if (confirmDelete) {
    taskStore.deleteTask(props.task.id);
  }
};
</script>

<style scoped>
.card{
  border-radius: 10px;
  
}
.card-title {
  color: #303c84;
}

.text-muted {
  color: #9a9a9a !important;
}
.custom-btn {
  color: #9a9a9a;
  border-color: #9a9a9a;
}

.custom-btn:hover {
  color: #ffffff;
  border-color: #303c84;
  background-color: #303c84;
}

.custom-btn2 {
  color: #9a9a9a;
  border-color: #9a9a9a;
}

.custom-btn2:hover {
  color: #ffffff;
  border-color: #ef8018;
  background-color: #ef8018;
}

.custom-btn3 {
  color: #02d7ad;
  border-color: #02d7ad;
  size: 1rem;
}

.custom-btn3:hover {
  color: #ffffff;
  border-color: #02d7ad;
  background-color: #02d7ad;
}
</style>
