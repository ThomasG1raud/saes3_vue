<template>
  <nav>
    <p>test {{msg}}</p>
  </nav>
</template>

<script>
export default {
  name: "HeaderView",
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>