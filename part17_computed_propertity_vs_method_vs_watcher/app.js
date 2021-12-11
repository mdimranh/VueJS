var app = Vue.createApp({
  data() {
    return {
      name: {
        firstName: "",
        lastName: "",
        fullName: "",
      },
    };
  },

  computed: {
    // fullName() {
    //   return this.name.firstName + " " + this.name.lastName;
    // },
  },
  methods: {
    // fullName1() {
    //   return this.name.firstName + " " + this.name.lastName;
    // },
  },
  watch: {
    "name.firstName": function (newValue) {
      this.name.fullName = newValue + " " + this.name.lastName;
    },
    "name.lastName": function (newValue) {
      this.name.fullName = this.name.firstName + " " + newValue;
    },
  },
});

app.mount("#app");
