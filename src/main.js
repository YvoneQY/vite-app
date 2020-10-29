import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Icon,Button,Form,Field,PasswordInput, NumberKeyboard,Col,Row,Image as VanImage} from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(Button).use(Form).use(Field).use(Icon).use(NumberKeyboard).use(PasswordInput).use(Col).use(Row).use(VanImage)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
