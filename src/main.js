import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

// render micro frontend function
window.renderVueMFApp = (containerId, history) => {
  // TODO: we need to map the "history" from the parent to our Vue app
  console.log("Function: renderMFApp, Line 30 => ", history);
  app.$mount(`#${containerId}`);
};

// unmount micro frontend function
window.unmountVueMFApp = containerId => {
  Vue.$delete(document.getElementById(containerId));
};

// Mount to root if it is not a micro frontend
if (!document.getElementById("VueMFApp-container")) {
  app.$mount("#app");
}
