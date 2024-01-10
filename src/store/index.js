import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    projects: null,
  },
  getters: {
  },
  mutations: {
    setProjects: (state,value) => {
      state.projects = value;
    },
  },
  actions: {
    // fetchData(context){
    //   axios.get('https://tashreeqlee.github.io/vueporfoliodata/')
    //   .then((projects)=>{
    //     console.log(projects.data[0]);
    //     context.commit("setProjects",projects.data[0])
    //   })

    // }
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
    }

  },
  modules: {
  }
})
