<template>
  <nav>
    <hamburger-button
        class="hamburger-button"
        :is-active="buttonActive"
        @toggle="toggleButton"
    >
    </hamburger-button>

    <ul class="nav-list" :class="toggleMenu">
      <li
          v-for="(navi, index) in navigation"
          :key="index"
          class="nav-list__item"
          @click="toggleMnu"
      >
        <router-link :to="navi.to">
          {{ navi.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {Component} from "vue-property-decorator";
import HamburgerButton from "@/components/menubar/HamburgerButton.vue";
import {Mixins} from "vue-mixin-decorator";
import {Responsive} from "@/mixins/Responsive";

@Component({
  components: {HamburgerButton},
})
export default class NavigationMenu extends Mixins<Responsive>(Responsive) {
  public buttonActive = false;

  public readonly navigation = [
    {
      title: "イベント",
      to: "/hackathon",
    },
    {
      title: "ブログ",
      to: "/blog",
    },
    {
      title: "私たちについて",
      to: "/about",
    },
    {
      title: "お問い合わせ",
      to: "/contact",
    },
  ];

  public toggleButton() {
    this.buttonActive = !this.buttonActive;
  }

  public toggleMnu() {
    this.buttonActive = this.lessThanSm()
        ? !this.buttonActive
        : this.buttonActive;
  }

  public get toggleMenu() {
    if (this.buttonActive) {
      return "is-active";
    } else {
      return "";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global";

.hamburger-button {
  display: none;

  @include respondTo(smallTablet) {
    display: block;
    z-index: 10;
  }
}

.nav-list {
  display: flex;
  justify-content: space-around;
  align-items: center;

  font: 20px Raleway;
  margin-left: auto;

  &__item a {
    display: inline-block;
    color: theme(primary);
    text-decoration: none;
    transition: color 0.5s;
  }

  &__item {
    margin-left: 20px;

    &:first-child {
      margin-left: 0;
    }

    &:after {
      content: "";

      display: block;
      width: 0;
      height: 1px;

      margin: 0 auto;

      background-color: transparent;
      transition: width 0.2s, background-color 0.5s;
    }

    &:hover {
      &:after {
        background-color: theme(primary);
        width: 100%;
      }
    }
  }

  @include respondTo(smallTablet) {
    display: none;
    top: 0;
    right: 0;
    margin: 0;

    width: 100%;
    height: 100vh;

    background-color: theme(background);

    &__item {
      margin-left: 0;
    }
  }
}

.is-active {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  position: absolute;
  animation: bubble-right 0.5s ease;
}

@keyframes bubble-right {
  from {
    clip-path: circle(0px at 90% 10%);
    opacity: 0;
  }

  to {
    clip-path: circle(200vh at 90% 10%);
    opacity: 1;
  }
}
</style>
