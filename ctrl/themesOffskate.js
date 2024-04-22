import { bodyParts, efforts } from '../data/offskate'
import { getCurrentLang } from '../utils/getCurrentLang'

export const themesOffskate = {
  state: {},
  onInit(state, el, e) {
    const lang = getCurrentLang()
    console.log(
      'themesOffskate',
      Object.keys(efforts).map((it) => efforts[it][lang]),
      Object.keys(bodyParts).map((it) => bodyParts[it][lang])
    )
  },
  render() {},
}
