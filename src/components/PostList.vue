<template>
  <div>
    <h2>Sortable Post List</h2>
    <div>
        <div v-for="(post, index) in postList" :key="post.id">
            <div class="card">
                <div>{{post.id}}. {{post.title}}</div>
                <div>
                    <div v-if="index>0">
                        <button class="swap-btn" v-on:click="swapPost(post, index, index-1)">&uarr;</button>
                    </div>
                    
                    <div v-if="index < (postList.length-1)">
                        <button  class="swap-btn" v-on:click="swapPost(post, index, index+1)">&darr;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PostList',
  mounted() {
      this.$store.dispatch("getAllPosts")
  },
  methods: {
      swapPost(post, from, to ) {
          console.log("Move", from, "to", to, post );
          this.$store.dispatch("swapPost", {post:post, from:from, to:to});
      }
  },
  computed: {
      postLoadingState() {
          return this.$store.getters["getPostListLoagingState"]
      },
      postList() {
          return this.$store.getters["getPostList"]
      }
  }
}
</script>

<style>
.card {
    padding: 20px 10px;
    border: 1px solid #aaa;
    width: 80%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
}
.swap-btn {
    margin: 5px;
}
@media (max-width: 768px) {
  .card {
    width: auto;
  }
}
</style>
