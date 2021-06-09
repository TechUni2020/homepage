<template>
  <div>
    <div class="event">
      <div class="event__cover">
        <h1 @click="toEvent">EVENT</h1>
      </div>
      <div class="event__detail">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
        <div class="title">準備中...</div>
        <img class="img" src="@/assets/prep.gif" />
        <!-- </div>

        <h2 class="event__title">
          2021年度Tech.Uni×株式会社ABABA <br />「NoCode WorkShop」
        </h2>
        <p class="event__content" v-scrollanimation>
          応募総数130名超！！参加者の満足度98％！<br />
          NoCodeツール「Studio」で3時間のwebサイト制作を学びました。
        </p>

        <my-button to="hackathon">
          詳細
        </my-button> -->
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
export default class HomePageContent extends Mixins<Responsive>(Responsive) {
  public toEvent() {
    this.$router.push("/hackathon");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";

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

    background: url(~@/assets/home/home2.jpg);
    // linear-gradient(rgba(#13bf75, 0.7), rgba(#2fc0be, 0.7))
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
      height: 1.5em;
      background-image: url(~@/assets/line-white.svg);
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }

  &__detail {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px;
    border-radius: 5px;
    box-shadow: 0 2px 30px rgba(black, 0.2);
    background: lighten(#f0f4c3, 10%);
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    & > * {
      margin-top: 30px;
    }
    // :after {
    //   content: "";
    //   display: block;
    //   left: 0;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    //   background: linear-gradient(
    //     to bottom,
    //     rgba(#e8a, 1),
    //     rgba(#def, 0) 80%,
    //     rgba(white, 0.5)
    //   );
    //   z-index: 11;
    //   transform: translate3d(0, 0, 0);
    // }
  }

  &__title {
    height: 2.5em;
    font-weight: bold;
    color: theme(title) !important;
    // background-image: url(~@/assets/line-green.svg);
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

body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wave {
  opacity: 0.4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  margin-top: -100px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 3000ms infinite linear;
}

.wave.-three {
  animation: drift 5000ms infinite linear;
}

.wave.-two {
  animation: drift 7000ms infinite linear;
  opacity: 0.1;
  background: yellow;
}

// .box:after {
//   content: "";
//   display: block;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   background: linear-gradient(
//     to bottom,
//     rgba(#e8a, 1),
//     rgba(#def, 0) 80%,
//     rgba(white, 0.5)
//   );
//   z-index: 11;
//   transform: translate3d(0, 0, 0);
// }

.title {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  line-height: 300px;
  text-align: center;
  transform: translate3d(0, 0, 0);
  color: white;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
  letter-spacing: 0.4em;
  font-size: 24px;
  text-shadow: 0 1px 0 rgba(black, 0.1);
  text-indent: 0.3em;
}
.img {
  padding-top: 400px;
}
@keyframes drift {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}
</style>
