import { isPlainObject, isDate } from './util'

function encode (val:string): string {
  return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/ig, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/ig, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/ig, '[')
        .replace(/%5D/ig, ']')
}

export default function buildURL (url: string, params?: any): string {
  if (!params) return url
  const parts: string[] = []

  Object.keys(params).forEach((key) => {
    const val = params[key]
    if (val === null || val === undefined) {
      return
    }
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach((item) => {
      if (isDate(item)) {
        item = item.toISOString()
      } else if (isPlainObject(item)) {
        item = JSON.stringify(item)
      }
      parts.push(`${encode(key)}=${encode(item)}`)
    })
  })
  let serializedParams = parts.join('&')
  if (serializedParams) {
    // 判断是否有哈希
    const markedIndex = serializedParams.indexOf('#')
    if (markedIndex !== -1) {
      url = url.slice(0, markedIndex)
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
