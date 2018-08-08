import Vue from 'vue'
export const state = () => ({
  news: []
})

export const mutations = {
  setNews(state, payload) {
    Vue.set(state, 'news', payload)
  }
}
