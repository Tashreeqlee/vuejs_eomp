<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 text-animation">Testimonials</h2>
    </div>
    <div v-if="testimonials" class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="col d-flex justify-content-center mb-3"
        id="section"
      >
        <div class="card mb-3">
          <div class="container">
            <div class="card-body">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="img-fluid mb-3"
              />
            </div>
          </div>
          <div class="description">
            <h1 class="fw-bold">{{ testimonial.name }}</h1>
            <h2 class="fs-6 fw-semibold" id="connection">
              {{ testimonial.connection }}
            </h2>
            <p>"{{ testimonial.message }}"</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
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
/* Testimonial description */
.description {
  text-align: center;
}

.description h1 {
  font-weight: bold;
}

.description h2 {
  font-size: 0.875rem;
  font-weight: 600;
}

.description p {
  margin-top: 10px;
}

#connection {
  color: black !important;
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}
</style>