import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    open: false,
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setSidebar() {
      this.open = !this.open;
    },
  },
});
