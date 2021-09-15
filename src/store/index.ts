import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { Locales } from '@/i18n/locales'
import { defaultLocale } from '@/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    token: localStorage.getItem('token') || '',
    language: defaultLocale
  },
  mutations: {
    SET_CARS(state, cars) {
      state.cars = cars
    },
    SET_LANGUAGE: (state, payload: Locales) => {
      state.language = payload
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
