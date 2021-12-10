var app = Vue.createApp({
  data() {
    return {
      newSkill: "",
      newExperience: "",
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 4 },
        { name: "JS", experience: 8 },
      ],
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ name: this.newSkill, experience: this.newExperience });
      this.newSkill = "";
      this.newExperience = "";
    },
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
  },
});

app.mount("#app");
