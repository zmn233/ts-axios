const to_string = Object.prototype.toString

export function isObject (val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isDate (val: any): val is Date {
  return to_string.call(val) === '[object Date]'
}

export function isPlainObject (val: any): val is Object {
  return to_string.call(val) === '[object Object]'
}


