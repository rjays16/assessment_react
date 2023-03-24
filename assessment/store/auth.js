import axios from 'axios'

export const state = () => ({
  user: null,
  authenticated: false
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    state.authenticated = Boolean(user)
  },
  LOGOUT(state) {
    state.user = null
    state.authenticated = false
  }
}

export const actions = {
  async login({ commit }, credentials) {
    try {
      const response = await axios.post(`${process.env.BASE_URL}account/login`, credentials)

      commit('SET_USER', response.data.user)
      localStorage.setItem('assessment-token', response.data.access_token)
    } catch (error) {
      console.error(error)
    }
  },

  async logout({ commit }) {
    try {
      await axios.post('account/logout')
    } catch (error) {
      console.error(error)
    }

    commit('LOGOUT')
    localStorage.removeItem('assessment-token')
  },

  async register({ commit }, user) {
    try {
      const response = await axios.post(`${process.env.BASE_URL}account`, user)

      commit('SET_USER', response.data.user)
      localStorage.setItem('assessment-token', response.data.access_token)
    } catch (error) {
      console.error(error)
    }
  }
}
