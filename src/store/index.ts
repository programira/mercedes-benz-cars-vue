import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    token: localStorage.getItem('token') || '',
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars
  }
  },
  actions: {
    getCars({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/posts') // zameni link i vidi za token
          .then(response => {
              commit('SET_CARS', response.data)
      })
  }
  },
  modules: {
  }
})
