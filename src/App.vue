<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <button class="mint-button mint-button--primary btn" size="normal" @click="show">
      <label class="mint-button-text">点击弹出Toast</label>
    </button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

import { Toast } from "mint-ui";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  methods: {
    show() {
      Toast({
        message: "提示",
        position: "buttom",
        duration: 3000
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn {
  margin-left: auto;
  margin-right: auto;

}
</style>
