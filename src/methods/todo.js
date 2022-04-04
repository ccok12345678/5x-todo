import Cookies from 'js-cookie'

export async function getTodo () {
  const api = 'https://todoo.5xcamp.us/todos'
  const get = fetch(api, {
    headers: { Authorization: Cookies.get('5x-todo') }
  })

  const res = await get
  const data = await res.json()
  return await data.todos
}

export async function addTodo (todo) {
  const api = 'https://todoo.5xcamp.us/todos'
  const add = fetch(api, {
    method: 'POST',
    headers: {
      Authorization: Cookies.get('5x-todo'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo: { content: todo } })
  })
  return await add
}

export async function removeTodo (todoId) {
  const api = `https://todoo.5xcamp.us/todos/${todoId}`
  const remove = fetch(api, {
    method: 'DELETE',
    headers: { Authorization: Cookies.get('5x-todo') }
  })
  return await remove
}
