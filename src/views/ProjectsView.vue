<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2 text-animation">Projects</h2>
            <p>{{ $store.state.projects.description }}</p>
        </div>
    </div>
</template>

<script>
    export default {
      computed: {
    fetchData(){
      this.$store.dispatch('fetchData');
    }
  },
  mounted(){
    this.fetchData
  }
    }
</script>

<style scoped>
.text-animation {
  overflow: hidden;
  animation: typing 3s backwards;
  white-space: nowrap;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

</style>