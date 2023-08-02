import { defineStore } from 'pinia'
import axios from 'axios'

const URL = 'https://flems.github.io/test/api/news/'

export const useRootStore = defineStore('root',{
  state: () => ({
    news: [],
    total: 0,
    current: 0,
    page: null
  }),
  actions: {
    async getNews(page) {
      const data = await axios.get(page ? `${URL}${page}/` : `${URL}`)
      this.news = this.news.concat(data?.data?.items);
      this.total = data?.data?.nav?.total
      this.current = data?.data?.nav?.current
    },
    setPage(val) {
      this.page = val;
    }
  }
})
