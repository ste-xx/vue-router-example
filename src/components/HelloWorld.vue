<template>
  <div>
    1
    <router-link :to="{name: 'HOME2'}"> to 2</router-link>
  </div>
</template>
<script>

import {onBeforeRouteLeave} from "vue-router";

export default {
  setup(){
    onBeforeRouteLeave(() => {
      console.warn('leave 1')
    })
  }
};
</script>
