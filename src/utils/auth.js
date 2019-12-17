import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const DeviceTokenKey = 'device'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 区分页面访问设备
export function getDeviceToken() {
  return Cookies.get(DeviceTokenKey)
}

export function setDeviceToken(token) {
  return Cookies.set(DeviceTokenKey, token)
}

export function removeDeviceToken() {
  return Cookies.remove(DeviceTokenKey)
}
