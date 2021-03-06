import Cookie from 'js-cookie'

export default async function checkLogin () {
  const cookie = Cookie.get('5x-todo')
  if (!cookie) return false

  const api = 'https://todoo.5xcamp.us/check'
  const check = fetch(api, {
    headers: { Authorization: cookie }
  })

  try {
    const res = await check
    return res.ok
  } catch (error) {
    console.error('check error', error)
  }
}
