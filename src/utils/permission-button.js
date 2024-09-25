import store from '@/store'
export function ispermission(permission) {
  return store.getters.userinfo.roles.points.includes(permission)
}
