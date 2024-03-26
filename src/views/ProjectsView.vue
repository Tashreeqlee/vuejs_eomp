<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 text-animation">Projects</h2>
      <div
        v-if="projects"
        class="row d-flex justify-content-center"
      >
        <div
          v-for="project of projects"
          :key="project.id"
          :project="project"
          id="card"
          class="card m-4 col-3 p-2"
        >
          <div id="btn" class="d-flex p-0 gap-2 justify-content-center">
            <a :href="project.vercel" target="_blank"
              ><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>VERCEL</button></a
            >
            <a :href="project.github" target="_blank"
              ><button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-git" viewBox="0 0 16 16">
                            <path d="M15.698 7.287 8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45 1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025 1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"/>
                        </svg>GITHUB</button></a
            >
          </div>
          <h5 class="text-center pt-3 fw-bold">{{ project.name }}</h5>
          <img
            :src="project.image"
            :alt="project.name"
            class="d-block w-100 img-fluid"
            style="width: 100%; height: 100%"
          />
          <p class="text-center">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
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
#project-card {
  background-color: #f8f6dd;
  border: 2px solid black;
}
#btn {
  border-radius: 15px;
}
button {
  color: black;
  border: 3px solid black;
  background-color: #5c95cf;
  border-radius: 6px;
}
button:hover{
  transform: scale(1.1);
}
#card {
  transition: transform 0.3s ease;
}

#card:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .card {
    flex: 0 0 100%;
    max-width: 100%;
    padding-left: 2%;
  }
}

</style>