<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 text-animation">Resume</h2>
      <div class="row">
        <div class="col-md-4 ">
          <h1 id="education">EDUCATION</h1>
          <div class="card">
            <div v-if="education" class="flex-container">
              <div v-for="education of education" :key="education.name">
                <div class="content m-1">
                  <div class="header">
                    <p class="title fw-bold">{{ education.name }}</p>
                    <p class="date">{{ education.date }}</p>
                    <p>{{ education.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="col-md-12 mt-4 p-1" id="experience">
      <h1 id="experience">MY WORK EXPERIENCE</h1>
      <div class="p-2 m-4 border border-2 border-black rounded-3">
        <div
          v-if="experiences"
          class="flex-container d-flex flex-wrap justify-content-evenly"
        >
          <div v-for="experience of experiences" :key="experience.name">
            <h4 class="fs-4 fw-bold text-primary" id="jobTitle">
              {{ experience.jobTitle }}
            </h4>
            <h5 class="fs-5 text-white">{{ experience.company }}</h5>
          <br/>
            <h5 class="text-secondary">{{ experience.date }}</h5>
            <p id="p" class="fs-6 text-white">
              {{ experience.description }} <br />
            </p>
            <br />
          </div>
        </div>
        <div v-else>Loading Experience...</div>
      </div>
      <h1>Skills</h1>
            <div class="skills">
              <div class="logo-skills">
              <img src="https://i.postimg.cc/Tw9S9NCG/icons8-css-240-2.png" alt="CSS Logo" class="" loading="lazy">
              <img src="https://i.postimg.cc/cCvmnFzF/icons8-html-240-2.png" alt="HTML Logo" class="" loading="lazy">
              <img src="https://i.postimg.cc/MG4b87HR/icons8-bootstrap-240-2.png" alt="Bootstrap logo" class="" loading="lazy">
              <img src="https://i.postimg.cc/Vs2TFtFJ/icons8-git-240.png" alt="Github logo" class="" loading="lazy">
              <img src="https://i.postimg.cc/ZYjnBTPs/icons8-figma-240.png" alt="Figma logo" class="" loading="lazy">
              <img src="https://i.postimg.cc/Ss1KPdKF/icons8-excel-240-1.png" alt="Excel" class="" loading="lazy">
              </div>

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
.title {
  font-weight: 600;
  font-size: 20px;
  border-bottom: 1px solid #2c3e50;
}
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.1);
}

.date {
  color: purple;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
</style>