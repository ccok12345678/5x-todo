import Cookies from 'js-cookie'

export async function getTodo () {
  const api = 'https://todoo.5xcamp.us/todos'
  const get = fetch(api, {
    headers: { Authorization: Cookies.get('5x-todo') }
  })

  const res = await get
  return await res.json()
}
