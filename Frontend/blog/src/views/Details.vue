<template>
  <div class="container">
    <div>
      <h2>
          {{postDetails.title}}
      </h2>
      <span>
          {{postDetails.created_at.slice(0, 10)}}
      </span>
      <img :src="postDetails.image" alt="">
      <p v-html="postDetails.content" class="pre-formatted">  
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    postDetails: {}
  }),
  computed: {
    ...mapGetters(["allPostDetails"])
  },
  methods: {
    ...mapActions(["fetchPostDetails"])
  },
  created() {
      this.fetchPostDetails(this.$route.params.postId).then(() => this.postDetails = this.allPostDetails);
  }
};
</script>
<style scoped>
div.container {
    color: #551A8B;
    width:750px;
}
h2 {
    font-size: 200%;
    margin-bottom: 10px;
}
img {
    width: 100%;
}
span {
    margin-bottom:5px;
    display:block;
}
.pre-formatted {
     white-space: pre-line;

}
p {
    width: 100%;
}
</style>
