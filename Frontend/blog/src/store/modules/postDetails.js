import axios from 'axios';

const baseUrl = "http://localhost:8000/api";

const state = {
    PostDetails: []
};

const getters = {
    allPostDetails: state => state.PostDetails
};

const actions = {
    async fetchPostDetails({ commit }, postId) {
        const response = await axios.get(`${baseUrl}/post/${postId}`);
        commit('setPostDetails', response.data);
    }
}

const mutations = {
    setPostDetails: (state, PostDetails) => (state.PostDetails = PostDetails)
}

export default {
    state,
    getters,
    actions,
    mutations
};