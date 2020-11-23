<template>
  <div>
    2
    <router-link :to="{name: 'HOME'}"> to 1</router-link>
  </div>
</template>

<script>

import {onBeforeRouteLeave} from "vue-router";

export default {
  setup(){
    onBeforeRouteLeave(() => {
      console.warn('leave 2')
    })
  }
};
</script>
