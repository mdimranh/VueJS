var app = Vue.createApp({
  data() {
    return {
      textColor: "red",
      bgColor: "green",
    };
  },
  methods: {
    setClass(className) {
      this.activeClass = className;
    },
  },
});

app.mount("#app");
