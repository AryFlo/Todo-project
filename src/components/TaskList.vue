<template>
  <div class="row">
    <div class="col-md-6 mb-4">
      <h4>📌 Por realizar</h4>
      <TaskItem
        v-for="task in todoTasks"
        :key="task.id"
        :task="task"
        @edit="emit('edit', $event)"
      />
    </div>

    <div class="col-md-6 mb-4">
      <h4>✅ Finalizadas</h4>
      <TaskItem
        v-for="task in doneTasks"
        :key="task.id"
        :task="task"
        @edit="emit('edit', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTaskStore } from "../store/task";
import TaskItem from "./TaskItem.vue";

const emit = defineEmits(["edit"]);
const taskStore = useTaskStore();
const todoTasks = computed(() => taskStore.tasks.filter((t) => !t.completed));
const doneTasks = computed(() => taskStore.tasks.filter((t) => t.completed));
</script>
