<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2 text-animation">Resume</h2>
        </div>
    </div>
</template>

<script>
    export default {
      computed: {
    educations() {
      return this.$store.state.educations;
    },
    experiences() {
      return this.$store.state.experiences;
    },
  },

  mounted() {
    this.$store.dispatch("fetchEducations");
    this.$store.dispatch("fetchExperiences");
  },
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