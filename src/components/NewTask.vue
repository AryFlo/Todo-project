<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label class="form-label">Título</label>
      <input v-model="form.title" type="text" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Descripción</label>
      <textarea
        v-model="form.description"
        class="form-control"
        rows="3"
      ></textarea>
    </div>
    <div class="d-flex justify-content-end">
      <button
        type="button"
        class="btn btn-secondary me-2"
        data-bs-dismiss="modal"
      >
        Cancelar
      </button>
      <button type="submit" class="btn btn-primary">
        {{ task?.id ? "Guardar cambios" : "Crear tarea" }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useTaskStore } from "../store/task";

const props = defineProps({
  task: Object,
});

const emit = defineEmits(["close"]);
const taskStore = useTaskStore();

const form = ref({
  title: "",
  description: "",
});

watch(
  () => props.task,
  (newVal) => {
    if (newVal) {
      form.value = {
        title: newVal.title,
        description: newVal.description,
      };
    } else {
      form.value = { title: "", description: "" };
    }
  },
  { immediate: true }
);

const handleSubmit = async () => {
  try {
    if (props.task?.id) {
      await taskStore.updateTask(props.task.id, form.value);
    } else {
      await taskStore.createTask(form.value);
    }
    emit("close");
  } catch (err) {
    console.error("Error al guardar tarea:", err);
  }
};
</script>
