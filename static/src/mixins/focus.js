export default function (ref) {
  return {
    methods: {
      focus() {
        console.log("mixins中的focus方法被调用")
        this.$refs[ref].focus()
      }
    }
  }
}