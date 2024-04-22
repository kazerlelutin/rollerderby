export const translateLsKey = '__roller-derby__lang'
export function getCurrentLang() {
  return window.localStorage.getItem(translateLsKey) || 'en'
}
