<template>
  <footer>
    <small>Copyright &copy; Tech.Uni All Rights Reserved.</small>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";

footer {
  color: theme(primary);
  text-align: center;
  line-height: 60px;
}
</style>
