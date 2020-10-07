<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4 p-4 text-blue-800">List of Actions commited</h1>
    <div>
        <div v-for="(item, index) in historyList" :key="index">
            <div class="bg-gray-100 full flex items-center justify-between m-4 p-4 text-blue-800">
                <div>Moved Post No. {{item.post.id}} from index {{item.from}} to {{item.to}}</div>
                <div class="ml-4">
                    <button class="bg-transparent text-xs hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" v-on:click="timeTravel(index)">Time Travel</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CommitedActions',
  computed: {
      historyList() {
          return this.$store.getters["getHistory"]
      }
  },
  methods: {
      timeTravel(id) {
          console.log("TIME TRAVEL", id)
          this.$store.dispatch("timeTravel", id)
      }
  }
}
</script>

<style>

</style>