// True when the landing intro should play (once per browser session).
export const playIntro = (() => {
  try {
    if (sessionStorage.getItem('tostd-intro')) return false
    sessionStorage.setItem('tostd-intro', '1')
    return true
  } catch {
    return true
  }
})()
