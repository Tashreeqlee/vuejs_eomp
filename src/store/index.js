import { createStore } from 'vuex'
export default createStore({
  state: {
    projects: null,
    testimonials: null,
    educations: null, 
    experiences: null,

  },
  getters: {
  },
  mutations: {
    setProjects: (state,value) => {
      state.projects = value;
    },
    setTestimonials: (state, value) => {
      state.testimonials = value; 
    },
    setEducation: (state, value) => {
      state.education = value;
    },
    setExperiences: (state, value) => {
      state.experiences = value;
    },
  },
  actions: {
    async fetchProjects (context){
      try{
        let {projects} = await(await fetch('https://tashreeqlee.github.io/vueporfoliodata/')).json()
        if (projects){
          context.commit("setProjects", projects)
        }
        else {alert("error")}
      }
      catch(e){
        console.error(error)
      }
    },
    async fetchTestimonials (context){
      try {
        let {testimonials} = await(await fetch('https://tashreeqlee.github.io/vueporfoliodata/')).json()
        if (testimonials){
          context.commit("setTestimonials", testimonials)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
    async fetchEducation (context){
      try {
        let {education} = await(await fetch('https://tashreeqlee.github.io/vueporfoliodata/')).json()
        if (education){
          context.commit("setEducation", education)
        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
    async fetchExperiences (context){
      try {
        let {experiences} = await(await fetch('https://tashreeqlee.github.io/vueporfoliodata/')).json()
        if (experiences){
          context.commit("setExperiences", experiences)

        }
        else {alert("error")}
      }

      catch(e){
        console.error(error)
      }
    },
  },
  modules: {
  }
})
