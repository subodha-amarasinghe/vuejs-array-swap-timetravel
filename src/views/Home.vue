<template>
  <div class="app-container">
      <div class="row">
          <div class="col">
              <PostList />
          </div>
          <div class="col">
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
.app-container {
    max-width: 1280px;
    width: 100%;
    margin: auto;
}
.row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-direction: row;
}
.col {
    flex:1
}
@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }
}
</style>
