function getBreakpoint(size) {
  const style = getComputedStyle(document.body)
  let value = style.getPropertyValue(`--breakpoint-${size}`).trim()

  return value.substring(0, value.length - 2) // remove 'px'
}

export { getBreakpoint }
