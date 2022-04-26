import { createStore, useStore } from "vuex";
import Axios from "axios";
import router from "../router";
import { useToast } from 'vue-toastification'

const toastification = useToast()

const toast = {
  default(message) {
    toastification(message)
  },
  success(message) {
    toastification.success(message)
  },
  info(message) {
    toastification.info(message)
  },
  warning(message) {
    toastification.warning(message)
  },
  error(message) {
    toastification.error(message)
  },
}

const Main = createStore({
  state: {
    email: "",
    password: "",
    pass: false,
    loading: true,
    keyword: "",
    villains: [],
    generalStats: {
      combat: null,
      intelligence: null,
      power: null,
      durability: null,
      speed: null,
      strength: null,
    },
    heroes: [],
    myTeam: [],
    error: false,
    carouselCard: [],
  },
  
  mutations: {
    setLoading(state,payload){
      state.loading = payload
    },
    addGeneralStats(state, payload){
      state.generalStats.combat += parseInt(payload.powerstats.combat);
      state.generalStats.intelligence += parseInt(payload.powerstats.intelligence);
      state.generalStats.power += parseInt(payload.powerstats.power);
      state.generalStats.durability += parseInt(payload.powerstats.durability);
      state.generalStats.speed += parseInt(payload.powerstats.speed);
      state.generalStats.strength += parseInt(payload.powerstats.strength);
    },
    deleteGeneralStats(state, payload){
      state.generalStats.combat -= parseInt(payload.powerstats.combat);
      state.generalStats.intelligence -= parseInt(payload.powerstats.intelligence);
      state.generalStats.power -= parseInt(payload.powerstats.power);
      state.generalStats.durability -= parseInt(payload.powerstats.durability);
      state.generalStats.speed -= parseInt(payload.powerstats.speed);
      state.generalStats.strength -= parseInt(payload.powerstats.strength);
    },
    setError(state, payload){
      state.error = payload
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setPassword(state, payload) {
      state.password = payload;
    },
    setKeyword(state, payload) {
      state.keyword = payload;
    },
    setCarouselCard(state, payload) {
      state.carouselCard = payload;
    },
    setVillains(state, payload) {
      return state.villains.push(payload)
    },
    setHeroes(state, payload) {
      return state.heroes.push(payload)
    },
    setMyTeam(state, payload) {
      return state.myTeam.push(payload)
    },
    setDeleteMyTeam(state, payload) {
      return state.myTeam = state.myTeam.filter((heroe) => heroe.id !== payload.id);
    },
    setDeleteHeroe(state, payload) {
      return state.heroes = state.heroes.filter((heroe) => heroe.id !== payload.id);
    },
    setDeleteVillain(state, payload) {
      return state.villains = state.villains.filter((heroe) => heroe.id !== payload.id);
    }

  },

  actions: {
    async fetchData({ commit }) {
      try {
        const res = await Axios.post("http://challenge-react.alkemy.org/", {
          email: this.state.email,
          password: this.state.password,
        });

        res && router.push({ path: "/home" });
      } catch (error) {
        console.log(error);
        return toast.error('Password or Email incorrect')
      }
    },

    async getHeroes({ commit }) {
      commit("setLoading", true)
      try {
        const store = useStore();
        const res = await Axios.get(
          `https://www.superheroapi.com/api.php/5166170890063630/search/${this.state.keyword}`
        );
        console.log(res)
        if (res) {
          setTimeout(() => commit("setLoading", false), 1000);
          commit("setError", false)
        } 
        if (res.data.response === "error") {
          return toast.error('Sorry, character not found')
        }
        return commit("setCarouselCard", res.data.results);
      } catch (error) {
        console.log(error);
        return toast.error('Sorry, character not found')
      }
    },

    addMyTeam({ commit }, item) {
      const array = JSON.parse(JSON.stringify(this.state.myTeam));

      const arrayHeroes = JSON.parse(JSON.stringify(this.state.heroes));

      const arrayVillains = JSON.parse(JSON.stringify(this.state.villains));

      if(item.biography.alignment === "good" || item.biography.alignment === "neutral" || item.biography.alignment === "-") {

        if (array.length === 6) {
            return toast.error('Team is already full')
          
        }

        if (array.find(char => char.id === item.id)) {
            
          return toast.error('This character is already in your team')

        }

        if (arrayHeroes.length === 3) {

          return toast.warning('The good team is already full')

        }
        
       
        
          toast.success('Added!')
          commit("addGeneralStats", item)
          commit("setMyTeam", item)
          commit("setHeroes", item)
        

    }

    if(item.biography.alignment === "bad") {

        if (array.length === 6) {

          return toast.error('Team is already full')
           
        }

        if (array.find(char => char.id === item.id)) {

          return toast.error('This character is already in your team')
           
        }

        if (arrayVillains.length === 3) {
          return toast.warning('The bad team is already full')
           
        }
      
          toast.success('Added!')
          commit("addGeneralStats", item)
          commit("setMyTeam", item)
          commit("setVillains", item)
        

    }
    },
    deleteMyTeam({ commit }, item) {

      if(item.biography.alignment === "good" || item.biography.alignment === "neutral"  || item.biography.alignment === "-") {
        
        return (
          toast.success('Deleted'),
          commit("deleteGeneralStats", item),
          commit("setDeleteHeroe", item),
          commit("setDeleteMyTeam", item)
        )
      }

      if(item.biography.alignment === "bad") { 
        
        return (
          toast.success('Deleted'),
          commit("deleteGeneralStats", item),
          commit("setDeleteVillain", item),
          commit("setDeleteMyTeam", item)
        )
      }

      
    }
  },
});

export default Main;
