var app = Vue.createApp({
  data() {
    return {
      tutorialInfo: {
        name: "vue js 3 bangla tutorial",
        githubLink: "https:/github.com/mdimranh/vuejs3",
      },
      website: '<a href="tutorialInfo.githubLink">github</a>',
    };
  },
});

app.mount("#app");
