<template>
  <div>
    <form @submit.prevent="create">
      <label for="idea-title">Idea's title</label><br />
      <input type="text" id="idea-title" v-model="title" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    create() {
      const idea = {
        createdAt: new Date(),
        title: this.title,
      };
      // this.$store.commit("CREATE_IDEAS", idea); // Passe directement par mutation
      this.$store.dispatch("createIdea", idea); // Passe d'abord par action qui dispatch puis mutation
      this.title = "";
    },
  },
};
</script>

<style></style>
