<template>
    <div class="row">
      <h2 class="display-2 text-animation">Home</h2>
    </div>
</template>

<script>


export default {
  name: "HomeView",
  components: {},
};
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
