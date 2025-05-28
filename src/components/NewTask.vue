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
    <div class="d-flex ">

            <button
        type="button"
        class="btn btn-secondary me-2"
        data-bs-dismiss="modal"
      >
        Cancelar
      </button>
      <button type="submit" class="btn btn-primary custom-btn">
        {{ task?.id ? "Guardar cambios" : "¡Vamos a por ella!" }}
      </button>


    </div>
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
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

const resetForm = () => {
  form.value = {
    title: "",
    description: "",
  };
};

// Watch for changes in the task prop and update the form accordingly
watch(
  () => props.task,
  (newVal) => {
    if (newVal) {
      form.value = {
        title: newVal.title,
        description: newVal.description,
      };
    } else {
      resetForm();
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
      await taskStore.fetchTasks();
    }

    emit("close");
    resetForm();
  } catch (err) {
    console.error("Error al guardar tarea:", err);
  }
};
</script>

<style scoped>
.d-flex {
    display: flex !important
;
    justify-content: flex-end;
}

.custom-btn {
  background-color: #8a9af9;
  border-color: #8a9af9;
}

.btn-secondary {
  background-color: #a8abae9f;
  border-color: #a8abae9f;
}
</style>