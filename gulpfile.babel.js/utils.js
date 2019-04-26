const _invalidateRequireCacheForFile = filePath => {
  delete require.cache[require.resolve(filePath)]
}

const requireNoCache = filePath => {
  _invalidateRequireCacheForFile(filePath)

  return require(filePath)
}

export { requireNoCache }
