import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloWorld2 from "./components/HelloWorld2.vue";
import Toolbar from "./components/Toolbar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: "/home",
    name: "HOME",
    components: {
      default: HelloWorld,
      toolbar: Toolbar
    }
  },
    {
      path: "/home2",
      name: "HOME2",
      components: {
        default: HelloWorld2,
        toolbar: Toolbar
      }
    }]
});
createApp(App).use(router).mount('#app')
