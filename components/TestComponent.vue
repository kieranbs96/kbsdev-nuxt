<template>
  <button class="btn" style="margin-top:3rem;" @click="$store.commit('increment')">{{ $store.state.counter }} - Hey</button>
</template>

<script>
export default {
  name: "TestComponent"
};
</script>
