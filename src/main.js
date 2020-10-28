import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Icon,Button,Form,Field,PasswordInput, NumberKeyboard,Col,Row,Image as VanImage} from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false;
Vue.use(Button).use(Form).use(Field).use(Icon).use(NumberKeyboard).use(PasswordInput).use(Col).use(Row).use(VanImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
