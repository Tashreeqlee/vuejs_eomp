<template>
    <div class="row">
      <h2 class="display-2 text-animation">Resume</h2>
          </div>
          <div class="container-fluid">
      <div class="row">
        <h1 id="experience">EDUCATION</h1>
      <div class="card">
      <div v-if="education" class="flex-container">
          <div v-for="education of education" :key="education.name">
          <h3>{{ education.date }}</h3>
            <h2 class="text-black">
              {{ education.name }}</h2>
              <p class="color">{{ education.description }}</p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="col-md-12 mt-4 p-1" id="experience">
      <h1>WORK EXPERIENCE</h1>
      <div class="p-2 m-4 border border-2 border-black rounded-3">
        <div
          v-if="experiences"
          class="flex-container d-flex flex-wrap justify-content-evenly"
        >
          <div v-for="experience of experiences" :key="experience.name">
            <h4 class="fs-4 fw-bold" id="jobTitle">
              {{ experience.jobTitle }}
            </h4>
            <h5 class="fs-5 text-white">{{ experience.company }}</h5>
          <br/>
            <h5 class="date">{{ experience.date }}</h5>
            <p id="p" class="fs-6 text-white">
              {{ experience.description }} <br />
            </p>
            <br />
          </div>
        </div>
        <div v-else>Loading Experience...</div>
      </div>
    </div>
      <h1 id="experience">Skills</h1>
            <div class="skills">
              <div class="logo-skills">
              <img src="https://i.postimg.cc/Tw9S9NCG/icons8-css-240-2.png" alt="CSS Logo" loading="lazy">
              <img src="https://i.postimg.cc/cCvmnFzF/icons8-html-240-2.png" alt="HTML Logo" loading="lazy">
              <img src="https://i.postimg.cc/SNw1bYTw/icons8-javascript-240.png" alt="Javascript Logo" loading="lazy">
              <img src="https://i.postimg.cc/MG4b87HR/icons8-bootstrap-240-2.png" alt="Bootstrap logo" loading="lazy">
              <img src="https://i.postimg.cc/Vs2TFtFJ/icons8-git-240.png" alt="Github logo" loading="lazy">
              <img src="https://i.postimg.cc/pVmgNvV5/icons8-vuejs-240.png" alt="Vuejs logo" loading="lazy">
              </div>

            </div>
   
</template>

<script>
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    experiences() {
      return this.$store.state.experiences;
    },
  },

  mounted() {
    this.$store.dispatch("fetchEducation");
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
.date {
  color: rgb(3, 221, 3);
}
.skills img {
  animation: fadeIn 1s ease-in-out;
}

/* logo animation */
h1 {
  text-align: center;
}

.skills {
  display: flex;
  justify-content: center;
}
.logo-skills img {
  transition: transform 0.3s ease-in-out;
}

.logo-skills img:hover {
  transform: scale(1.2);
}
#experience {
  font-family: 'DM Serif Display', serif;
}
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}

.fs-4{
  color: rgb(3, 221, 3);
}

</style>