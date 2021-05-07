<template>
  <div id="top">
    <div :style="pageTitleWrapper">
      <transition appear name="fade">
        <div :style="pageTitleBackground" class="page-title">
          <transition appear name="">
            <slot name="title"></slot>
          </transition>
        </div>
      </transition>
    </div>

    <div class="content-wrapper">
      <slot name="content"></slot>
    </div>

    <div class="contact-box">
      <h2 class="contact-box__title">CONTACT US</h2>
      <p class="contact-box__description">
        活動についてのご質問があれば、 お問い合わせください。
      </p>

      <my-button to="contact">お問い合わせはこちらから</my-button>

      <ul class="contact-box__sns-items">
        <li class="contact-box__sns-item">
          <a href="https://twitter.com/TechUni1026">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              size="2x"
              :style="{ color: 'white' }"
            />
          </a>
        </li>
        <!-- <li class="contact-box__sns-item">
          <a href="blog">
            <font-awesome-icon
              icon="blog"
              size="2x"
              :style="{ color: 'white' }"
            />
          </a>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import MyButton from "@/components/module/MyButton.vue";

@Component({
  components: { MyButton },
})
export default class PageTemplate extends Vue {
  @Prop({ type: String, default: "150px" })
  private titleHeight!: string;

  @Prop({ type: String, default: null })
  private background!: string | null;

  public get pageTitleWrapper() {
    return {
      overflow: "hidden",
      height: this.titleHeight,
    };
  }

  public get pageTitleBackground() {
    return {
      background: `linear-gradient(rgb(0, 0, 0, 0.5), rgb(0, 0, 0, 0.5)), url(${this.background}) 50%`,
      "background-size": "cover",
      "background-repeat": "no-repeat",
    };
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";

.page-title {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  text-align: center;
  color: theme(primary);
}

.contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  height: 300px;

  color: theme(primary);

  &__title {
    height: 2em;
    background-image: url(~@/assets/line-white.svg);
    background-repeat: no-repeat;
    background-position: bottom;
  }

  &__sns-items {
    list-style: none;
  }

  &__sns-item {
    display: inline-block;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  }

  @include respondTo(smallTablet) {
    &__description {
      width: 80%;
    }
  }
}

@keyframes fade {
  0% {
    transform: scale(1.05);
    filter: blur(2px);
  }
  /*50% {*/
  /*    opacity: 1;*/
  /*    filter: blur(2px);*/
  /*}*/
  100% {
    transform: scale(1);
    filter: blur(0);
  }
}
.fade-enter-active {
  animation: fade 1.5s ease;
}
.fade-leave-active {
  animation: fade 1.5s ease;
}
</style>
