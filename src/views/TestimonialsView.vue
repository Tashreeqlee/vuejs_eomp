<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2 text-animation">Testimonials</h2>
        </div>
    </div>
</template>

<script>
    export default {
        
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