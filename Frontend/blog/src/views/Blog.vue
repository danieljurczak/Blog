<template>
  <div class="container">
    <div>
      <div class="post" v-for="post in posts" :key="post.id">
        <router-link
        class="title"
        :to="{ name: 'details', params: { postId: post.id }}">
          <h2>{{post.title}}</h2>
        </router-link>
        <h5>{{post.created_at.slice(0, 10)}}</h5>
        <img :src="post.image">
        <router-link
        class="read-more"
        :to="{ name: 'details', params: { postId: post.id }}">
          Czytaj więcej...
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    posts: []
  }),
  computed: {
    ...mapGetters(["allPosts"])
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
      this.fetchPosts().then(() => this.posts = this.allPosts);
  }
};
</script>
<style scoped>
div.container {
  width: 750px;
  color:black;
}
img {
  width:100%;
}
h2 {
  font-size: 200%;
  margin-bottom: 4px;
}
a{
  text-decoration: none;
  color: #551A8B;
}
a:hover {
  text-decoration: underline;
}
h5 {
  margin:0;
  margin-bottom:4px;
  color:rgb(177, 177, 177);
}
.post {
  margin-bottom: 40px;
}
</style>
