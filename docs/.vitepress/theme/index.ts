import DefaultTheme from 'vitepress/theme'
import PasswordGate from './PasswordGate.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PasswordGate', PasswordGate)
  },
}
