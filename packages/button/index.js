import LzhButton from './src/button.vue'

LzhButton.install = Vue => {
  Vue.component(LzhButton.name, LzhButton)
}

export default LzhButton