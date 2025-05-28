import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
  }),

  actions: {
    async fetchTasks() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

        console.log("Fetched tasks:", data);

      if (error) throw error;
      this.tasks = data;
    },

    async createTask(task) {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...task, user_id: user.id }])
        .select();

      if (error) throw error;
      this.tasks.push(data[0]);
    },

    async updateTask(id, updates) {
      const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select();

      if (error) throw error;

      this.tasks = this.tasks.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      );
    },

    async deleteTask(id) {
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      if (error) throw error;
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },

    async toggleTask(id, completed) {
      const { error } = await supabase
        .from("tasks")
        .update({ completed: !completed })
        .eq("id", id);
      if (error) throw error;

      this.tasks = this.tasks.map((t) =>
        t.id === id ? { ...t, completed: !completed } : t
      );
    },
  },
});
