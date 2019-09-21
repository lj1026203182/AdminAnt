export const showTitle = item => {
  let { title } = item.meta
  if (!title) return
  title = (item.meta && item.meta.title) || item.name
  return title
}

/**
 * 触发 window.resize
 */
export const triggerWindowResizeEvent = () => {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}
