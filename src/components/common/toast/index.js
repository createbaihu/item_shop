import Toast from './toast'

const obj = {}
obj.install = function (Vue) {
  console.log(112332131)
  const toastContructor = Vue.extend(Toast)
  const toastInstance = new toastContructor()
  toastInstance.$mount(document.createElement('div'))
  document.body.appendChild(toastInstance.$el)
  Vue.prototype.$toast=toastInstance
}

export default obj