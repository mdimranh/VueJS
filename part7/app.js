var app = Vue.createApp({
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleKeyup(e) {
      this.name = e.target.value;
    },
    handleFormSubmit(e) {
      console.log("Form Submitted");
    },
    handleCardClick(e) {
      console.log(e);
      console.log("Card clicked");
    },
    handleViewClick(e) {
      console.log(e);
      // e.stopPropagation();
      console.log("View clicked");
    },
  },
});

app.mount("#app");
