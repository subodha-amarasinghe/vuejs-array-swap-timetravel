<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4 p-4 text-blue-800">Sortable Post List</h2>
    <div>
        <div v-for="(post, index) in postList" :key="post.id">
            <div class="bg-gray-100 flex items-center justify-between m-4 p-4 text-blue-800">
                <div>{{post.id}}. {{post.title}}</div>
                <div class="ml-4">
                    <div v-if="index>0">
                        <button class="hover:bg-blue-300 py-2 px-4 rounded font-black" v-on:click="swapPost(post, index, index-1)">&uarr;</button>
                    </div>
                    
                    <div v-if="index < (postList.length-1)">
                        <button  class="hover:bg-blue-300 py-2 px-4 rounded font-black" v-on:click="swapPost(post, index, index+1)">&darr;</button>
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
      this.fecthPosts()
  },

  methods: {
      fecthPosts() {
          this.$store.dispatch("getAllPosts")
      },
      swapPost(post, from, to ) {
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

</style>
