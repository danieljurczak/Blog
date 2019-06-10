import axios from 'axios';

const baseUrl = "http://localhost:8000/api";

const state = {
    posts: []
};

const getters = {
    allPosts: state => state.posts
};

const actions = {
    async fetchPosts({ commit }) {
        const response = await axios.get(`${baseUrl}/post/`);
        commit('setPosts', response.data);
    }
}

const mutations = {
    setPosts: (state, posts) => (state.posts = posts)
}

export default {
    state,
    getters,
    actions,
    mutations
};