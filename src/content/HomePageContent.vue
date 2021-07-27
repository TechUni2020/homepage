<template>
  <div>
    <div class="event">
      <div class="event__cover">
        <h1>EVENT</h1>
      </div>

      <div class="event__detail">
        <h2 class="event__title">
          2021年度Tech.Uni×株式会社ABABA <br />「NoCode WorkShop」
        </h2>
        <p class="event__content" v-scrollanimation>
          応募総数130名超！！参加者の満足度98％！<br />
          NoCodeツール「Studio」で3時間のwebサイト制作を学びました。
        </p>

        <my-button to="hackathon">
          詳細
        </my-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import MyButton from "@/components/module/MyButton.vue";
import { Mixins } from "vue-mixin-decorator";
import { Responsive } from "@/mixins/Responsive";

@Component({
  components: {
    MyButton,
  },
})
export default class HomePageContent extends Mixins<Responsive>(Responsive) {}
</script>

<style lang="scss" scoped>
@import "@/scss/global";

.event {
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  background-color: theme(primary);

  &__cover {
    min-width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(@/assets/home/home2.jpg);
    // linear-gradient(rgba(#13bf75, 0.7), rgba(#2fc0be, 0.7))
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      height: 1.5em;
      background-image: url(@/assets/line-white.svg);
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }

  &__detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px;

    & > * {
      margin-top: 30px;
    }
  }

  &__title {
    height: 2.5em;
    font-weight: bold;
    color: theme(title) !important;
    // background-image: url(@/assets/line-green.svg);
    background-repeat: no-repeat;
    background-position: bottom;
  }

  @include respondTo(smallTablet) {
    height: 1000px;
    flex-direction: column;
    &__cover {
      width: 100%;
      height: 50%;
    }
    &__detail {
      height: 50%;
      padding: 30px;
    }
  }
}

.enter {
  opacity: 0;
  transform: translateY(20px);
  transition: all 2s ease-in;
}

.enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
