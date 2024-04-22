import { bodyParts, efforts } from '../data/offskate'
import { getCurrentLang } from '../utils/getCurrentLang'

export const generateOffskate = {
  state: {},
  onInit(_state, el) {
    const lang = getCurrentLang()
    console.log(
      'themesOffskate',
      Object.keys(efforts).map((it) => efforts[it][lang]),
      Object.keys(bodyParts).map((it) => bodyParts[it][lang])
    )
    el.render()
  },
  render() {
    console.log('generateOffskate')
  },
}
