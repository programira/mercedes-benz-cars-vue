import Vue from 'vue'
import Vuex from 'vuex'
import cars from './modules/cars'

import { Locales } from '@/i18n/locales'
import { defaultLocale } from '@/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cars
  },
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

})
