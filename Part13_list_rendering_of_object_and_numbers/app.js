var app = Vue.createApp({
  data() {
    return {
      aboutMe: {
        name: "Md Imran Hossain",
        nickName: "imran",
        website: "https://mdimranh.com",
      },
      skills: [
        { name: "HTML", experience: 5 },
        { name: "CSS", experience: 4 },
        { name: "JS", experience: 8 },
      ],
    };
  },
  methods: {},
});

app.mount("#app");
