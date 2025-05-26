<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label class="form-label">Título</label>
      <input v-model="title" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Descripción</label>
      <textarea v-model="description" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Guardar cambios</button>
    <button
      type="button"
      class="btn btn-secondary ms-2"
      @click="$emit('close')"
    >
      Cancelar
    </button>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import { useTaskStore } from "../store/task";

const props = defineProps({ task: Object });
const emit = defineEmits(["close"]);

const taskStore = useTaskStore();

const title = ref("");
const description = ref("");

watch(
  () => props.task,
  (newTask) => {
    if (newTask) {
      title.value = newTask.title;
      description.value = newTask.description;
    }
  },
  { immediate: true }
);

const handleSubmit = async () => {
  if (!title.value.trim()) return;

  await taskStore.updateTask(props.task.id, {
    title: title.value,
    description: description.value,
  });

  emit("close");
};
</script>
