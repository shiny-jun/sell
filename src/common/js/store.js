export function saveToLocal(id, key, val) {
  let seller = localStorage.__seller__
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = val
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)
  if (!seller[id]) {
    return def
  }
  let ret = seller[id][key]
  return ret || def
}
