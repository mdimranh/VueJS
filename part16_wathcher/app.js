var app = Vue.createApp({
  data() {
    return {
      mobile: "",
      msg: "",
      name: {
        firstName: "",
        lastName: "",
      },
    };
  },

  watch: {
    mobile(newValue) {
      if (isNaN(newValue)) {
        this.msg = "Enter valid number";
      } else {
        this.msg = "";
      }
      if (newValue.length == 11) {
        this.msg = "An OTP has been sent";
      } else if (newValue.length > 11) {
        this.msg = "Number can't be more than 11 digit";
      }
    },
    // "name.firstName": function (newValue, oldValue) {
    //   console.log(newValue, oldValue);
    // },
    name: {
      deep: true,
      handler: function (newValue, oldValue) {
        console.log(newValue);
      },
    },
  },
});

app.mount("#app");
