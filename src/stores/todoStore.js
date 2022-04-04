import { defineStore } from 'pinia'
import { getTodo } from '@/methods/todo'

export default defineStore('todo', {
  state: () => ({
    todoList: [],
    filter: 'all'
  }),
  getters: {
    unfinishedTodos (state) {
      return state.todoList.filter(todo => !todo.completed_at)
    },
    finishedTodos (state) {
      return state.todoList.filter(todo => todo.completed_at)
    }
  },
  actions: {
    showTodos () {
      switch (this.filter) {
        case 'finished':
          return this.finishedTodos
        case 'unfinished':
          return this.unfinishedTodos
        default:
          return this.todoList
      }
    },
    async getTodoData () {
      this.todoList = await getTodo()
    }
  }
})
