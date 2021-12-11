var app = Vue.createApp({
  data() {
    return {
      show: true,
      show1: true,
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 },
      ],
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    toggle1() {
      this.show1 = !this.show1;
    },
  },
});

app.mount("#app");
