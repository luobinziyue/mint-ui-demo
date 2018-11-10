<template>
<div>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" value="1">
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</div>
    
</template>
<script>
import mui from "../../assets/mui/js/mui.js";

export default {
    //记得挂载到mounted()钩子函数下
    mounted() {
        mui(".mui-numbox").numbox();

    }
    
}
</script>
<style>
</style>
