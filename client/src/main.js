import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import axios from "axios";
import store from "../src/store/index";
Vue.prototype.$axios = axios;
import {
  Form,
  FormItem,
  Input,
  Button,
  Select,
  Container,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  Main,
  Header,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
} from "element-ui";

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);

Vue.use(MenuItem);
Vue.use(Main);
Vue.use(Header);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.config.productionTip = false;
// persist login
let user = localStorage.getItem("user");
if (user) {
  user = JSON.parse(user);
  store.commit("loginModule/setUser", user);
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
