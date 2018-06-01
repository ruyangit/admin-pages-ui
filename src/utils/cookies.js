import Cookies from 'js-cookie'
/**
 * 存储cookies
 */
export const setCookies = (key, value) => {
  if (!key) return
  if (typeof value !== 'string') {
      value = JSON.stringify(value)
  }
  Cookies.set(key, value)
}

/**
* 获取cookies
*/
export const getCookies = key => {
  if (!key) return
  return Cookies.get(key)
}

/**
* 删除cookies
*/
export const removeCookies = key => {
  if (!key) return
  Cookies.remove(key)
}
