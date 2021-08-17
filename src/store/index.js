import { createStore } from "vuex";

export default createStore({
  state: {
    ideas: {},
  },
  mutations: {
    CREATE_IDEAS(state, payload) {
      const id = Date.now();
      state.ideas = { ...state.ideas, [id]: payload };
      console.log(state.ideas);
    },
  },
  actions: {
    createIdea(context, payload) {
      context.commit("CREATE_IDEAS", payload);
    },
  },
  getters: {
    allIdeas(state) {
      // each key is an Id
      const allIdeas = Object.keys(state.ideas).map((key) => state.ideas[key]);
      return allIdeas;
    },
  },
  modules: {},
});
