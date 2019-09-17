import ChatBox from 'src/ChatBox.vue'
import { createVM } from '../helpers/utils.js'

describe('Hello.vue', function() {
  it('should render correct contents', function() {
    const vm = createVM(
      this,
      `
  <chat-box />
`,
      { components: { ChatBox } }
    )
  })
})
