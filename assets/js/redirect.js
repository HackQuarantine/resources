function isInIframe () {
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}

if (!isInIframe() && window.location.href.startsWith('https://resources')) {
  window.location.href = 'https://hackquarantine.com/resources'
}
