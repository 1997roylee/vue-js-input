import VInputComponent from './VInputComponent.vue'

const component_name = 'VInput'

const Plugin = {
  install(Vue) {
    this.event = new Vue()
    this.fontColor = '#aaa';
    this.fontWeight = 400;

    Vue.prototype.$VInput = {
      setFontWeight: weight => {
        if (typeof weight !== "number") return;
        this.fontWeight = weight;
      },
      setColor: color => {
        if (typeof color !== "string") return;
        this.fontColor = color;
      }
    }
    Vue.component(component_name, VInputComponent)
  },
}

export default Plugin