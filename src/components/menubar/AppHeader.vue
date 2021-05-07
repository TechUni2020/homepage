<template>
  <header class="header" :class="opacity">
    <div class="header__logo">
      <h1 @click="toTop">Tech.Uni</h1>
    </div>

    <div class="header__menu">
      <navigation-menu></navigation-menu>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationMenu from "@/components/menubar/NavigationMenu.vue";

@Component({
  components: {
    NavigationMenu,
  },
})
export default class AppHeader extends Vue {
  public scrollPosition: number = 0;
  public static readonly HEADER_OPACITY_THRESHOLD: number = 50;

  public toTop() {
    this.$router.push("/");
  }

  public created() {
    window.addEventListener("scroll", this.handleScroll);
  }

  public beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  public handleScroll() {
    this.scrollPosition = window.scrollY;
  }

  public get opacity() {
    return this.scrollPosition < AppHeader.HEADER_OPACITY_THRESHOLD
      ? "header--transparent"
      : "header--opaque";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";

.header {
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px 0 50px;

  &__logo {
    color: theme(primary);
    cursor: pointer;
  }

  &__menu {
    width: 700px;
  }

  &--opaque {
    background-color: theme(background);
    transition: background-color 1s 0s ease-in-out, opacity 1s 0s ease-in-out;
  }

  &--transparent {
    background-color: transparent;
    transition: background-color 1s 0s ease-in-out, opacity 1s 0s ease-in-out;
  }

  @include respondTo(smallTablet) {
    padding: 0 20px;
    &__menu {
      width: auto;
    }
  }
}
</style>
