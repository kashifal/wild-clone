import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    open: true,
    casino: "Casino",
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setSidebar() {
      this.open = !this.open;
    },
    setCasino(option) {
      this.casino = option;
    },
  },
});
