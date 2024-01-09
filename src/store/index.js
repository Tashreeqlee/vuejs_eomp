import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    about: [],
  },
  getters: {
  },
  mutations: {
    setAbout(state, data){
      state.about = data
    },
    setProjects(state, data){
      state.projects = data
    },
  },
  actions: {
    fetchData(context){
      axios.get('http://localhost:3000/about')
      .then((about)=>{
        console.log(about.data[0]);
        context.commit("setAbout",about.data[0])
      })

    },
    fetchData(context){
      axios.get('http://localhost:3000/projects')
      .then((projects)=>{
        console.log(projects.data[0]);
        context.commit("setProjects",projects.data[0])
      })

    }
  },
  modules: {
  }
})
