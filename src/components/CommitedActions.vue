<template>
  <div>
    <h2>List of Actions commited</h2>
    <div>
        <div v-for="(item, index) in historyList" :key="index">
            <div class="card">
                <div>Moved Post No. {{item.post.id}} from index {{item.from}} to {{item.to}}</div>
                <div>
                    <button v-on:click="timeTravel(index)">Time Travel</button>
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