var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increase(ev, amount) {
      this.count = this.count + amount;
      console.log(ev);
    },
    decrease(amount) {
      this.count = this.count - amount;
    },
    test(ev) {
      console.log("test");
      console.log(ev);
    },
    test1(ev) {
      console.log("test");
      console.log(ev);
    },
  },
});

app.mount("#app");
