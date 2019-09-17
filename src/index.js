import ChatBox from './ChatBox.vue'
import Bus from 'vue'

function plugin(Vue) {
  Vue.component('chat-box', ChatBox)
  Vue.prototype.$bus = new Bus()
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'
// Export all components too
export { ChatBox, version }
