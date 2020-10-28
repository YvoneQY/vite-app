import service from './service'

export function loginIn() {
  return service({
    url: '/login',
    method: 'post',
    data
  })
}
