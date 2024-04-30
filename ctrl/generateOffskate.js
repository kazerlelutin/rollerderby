import { efforts as effortData, efforts } from '../data/offskate'
import { getCurrentLang } from '../utils/getCurrentLang'

export const generateOffskate = {
  state: {
    efforts: [],
  },
  onInit(state, el) {
    const lang = getCurrentLang()

    const effortsContainer = el.querySelector('[data-efforts]')

    console.log('themesOffskate', el, effortsContainer)
    const efforts = Object.keys(effortData).map((it) => effortData[it][lang])

    for (const effort of efforts) {
      const btn = document.createElement('button')
      btn.classList.add('btn')
      btn.textContent = effort
      btn.setAttribute('aria-selected', 'true')
      btn.addEventListener('click', () => {
        if (state.efforts.includes(effort)) {
          state.efforts = state.efforts.filter((it) => it !== effort)
          btn.setAttribute('aria-selected', 'false')
        } else {
          state.efforts.push(effort)
          btn.setAttribute('aria-selected', 'true')
        }
      })

      effortsContainer.appendChild(btn)
    }
  },
  render() {
    console.log('generateOffskate')
  },
}
