
export function serialize (obj) {
    return JSON.stringify(
      obj,
      function (k, v) {
        if (this[k] instanceof Date) {
          return ['__date__', +this[k]]
        }
        return v
      }
    )
  }
  
  export function deserialize (s) {
    return JSON.parse(
      s,
      (_, v) => (Array.isArray(v) && v[0] === '__date__') ? new Date(v[1]) : v
    )
  }