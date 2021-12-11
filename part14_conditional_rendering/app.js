var app = Vue.createApp({
  data() {
    return {
      review: "",
      show: true,
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 10 },
        { name: "JS", experience: 15 },
      ],
    };
  },

  computed: {
    totalCount1() {
      console.log("Count from computed property");
      return this.skills.length;
    },
    experiencedSkills() {
      let es = this.skills.filter((item) => {
        return item.experience >= 10;
      });
      return es;
    },
  },

  methods: {
    removeSkill(i) {
      this.skills.splice(i, 1);
    },
    totalCount() {
      console.log("Counted from totalCount");
      return this.skills.length;
    },
  },
});

app.mount("#app");
