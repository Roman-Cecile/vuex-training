<template>
  <div>
    <h1>ideas</h1>
    <ul>
      <li v-for="idea in allIdeas" :key="idea.createdAt">{{ idea.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    },
  },
};
</script>

<style></style>
