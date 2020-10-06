<template>
  <div class="container mx-auto">
      <div class="grid grid-flow-row sm:grid-flow-row md:grid-flow-row-dense lg:grid-flow-col-dense xl:grid-flow-col">
          <div class="row-auto">
              <PostList />
          </div>
          <div class="row-auto">
              <CommitedActions />
          </div>
      </div>
  </div>
</template>

<script>
import CommitedActions from '../components/CommitedActions';
import PostList from '../components/PostList';
export default {
    name: 'Home',
    components:{PostList,CommitedActions}
}
</script>

<style>

</style>
