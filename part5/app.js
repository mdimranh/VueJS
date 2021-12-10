var app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    // increase() {
    //   this.count++;
    // },
    decrease() {
      if (this.count > 0) {
        this.count--;
      }
    },
  },
});

app.mount("#app");
