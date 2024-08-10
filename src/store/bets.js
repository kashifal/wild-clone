import { defineStore } from "pinia";

export const useBetStore = defineStore("bets", {
  state: () => ({
    all_bets: [],
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    setBets(bet) {
      console.log(bet, "..");
      if (this.all_bets.includes(bet)) {
        console.log("Already Added");
      } else {
        this.all_bets.push(bet);
      }
    },
    removeBet(id) {
      this.all_bets.splice(this.all_bets.indexOf(id), 1);
    },

    clearBets() {
      this.all_bets = [];
    },
  },
});
