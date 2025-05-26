<template>
  <div class="card mb-3" :class="{ 'bg-light': task.completed }">
    <div class="card-body d-flex justify-content-between align-items-start">
      <div>
        <button
          @click="toggle"
          class="btn btn-outline-success"
          :title="
            task.completed ? 'Marcar como pendiente' : 'Marcar como completada'
          "
        >
          <i
            class="bi"
            :class="
              task.completed ? 'bi-arrow-counterclockwise' : 'bi-check-circle'
            "
          ></i>
        </button>
        <h5 class="card-title mb-1">
          <span :class="{ 'text-decoration-line-through': task.completed }">
            {{ task.title }}
          </span>
        </h5>
        <p class="card-text text-muted">{{ task.description }}</p>
      </div>

      <div class="btn-group btn-group-sm">
        <button @click="$emit('edit', task)" class="btn btn-outline-primary">
          <i class="bi bi-pencil"></i>
        </button>
        <button @click="remove" class="btn btn-outline-danger" title="Eliminar">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../store/task";
const props = defineProps({ task: Object });
const emit = defineEmits(["edit"]);

const taskStore = useTaskStore();

const toggle = () => taskStore.toggleTask(props.task.id, props.task.completed);
const remove = () => taskStore.deleteTask(props.task.id);
</script>
