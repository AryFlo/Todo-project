<template>
  <div class="row">
    <div class="col-md-6 mb-4 title-tasks">
      <h4>Tómalas con calma... pero no las ignores 😉</h4>
      <TaskItem
        v-for="task in todoTasks"
        :key="task.id"
        :task="task"
        @edit="emit('edit', $event)"
      />
    </div>

    <div class="col-md-6 mb-4 title-tasks">
      <h4>¡Todo listo! Puedes ir por un café ☕</h4>
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

// To-do y Done Tasks Computed Properties
const todoTasks = computed(() => taskStore.tasks.filter((t) => !t.completed));
const doneTasks = computed(() => taskStore.tasks.filter((t) => t.completed));
</script>

<style scoped> 
.title-tasks {
  color: #303c84;
}

h4{
  margin-bottom: 20px;
}
</style>