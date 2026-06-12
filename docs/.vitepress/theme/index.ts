import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useData } from 'vitepress'
import Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Mermaid', Mermaid)
  },
  setup() {
    const { isDark } = useData()

    onMounted(() => {
      const addHeroBg = () => {
        const home = document.querySelector('.VPHome')
        if (!home) return
        if (!home.querySelector('.hero-bg')) {
          const bg = document.createElement('div')
          bg.className = 'hero-bg'
          home.style.position = 'relative'
          home.insertBefore(bg, home.firstChild)
        }
      }

      addHeroBg()
      watch(isDark, () => setTimeout(addHeroBg, 100))
    })
  }
}
