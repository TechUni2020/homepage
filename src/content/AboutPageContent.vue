<template>
  <div class="content">
    <div class="about-box">
      <h1 class="about-box__title--green">
        Tech.Uniとは?
      </h1>
      <div></div>
      <div class="about-box__description" v-scrollanimation>
        Tech.Uniは2020年に設立された関西学院大学で活動するプログラミング研究会です。
        社会連携センターの支援やスポンサー企業さんとのイベントを開催したり自分たちでアプリ制作やweb制作をしています。
      </div>
    </div>

    <div class="activity-box">
      <h1 class="activity-box__title--green">
        活動内容
      </h1>

      <!-- <div class="activity-box__image-slider">
        <div class="activity-box__image-slider--inner"></div>
      </div> -->

      <h2 class="activity-box__title--black">
        イベント運営
      </h2>
      <div class="activity-box__description" v-scrollanimation>
        他大学・企業さんと連携してプログラミングイベントを開催しています。
      </div>

      <h2 class="activity-box__title--black">
        プログラミング 勉強会
      </h2>
      <div class="activity-box__description" v-scrollanimation>
        毎週金曜日18:40~21:00で大学院1号館の教室で各クラス分かれて活動しています
      </div>
    </div>

    <div class="table-wrapper">
      <h1 class="table-wrapper__caption">団体概要</h1>
      <table class="table-wrapper__main">
        <tr>
          <th>
            団体名
          </th>
          <td>
            Tech.Uni
          </td>
        </tr>
        <tr>
          <th>
            設立
          </th>
          <td>
            2020年
          </td>
        </tr>
        <tr>
          <th>
            所在地
          </th>
          <td>
            関西学院大学
          </td>
        </tr>
        <tr>
          <th>
            代表者
          </th>
          <td>
            井手 翔陽 (2021年度）
          </td>
        </tr>
        <tr>
          <th>
            活動内容
          </th>
          <td>
            プログラミング、アプリ開発等
          </td>
        </tr>
      </table>

      <br />
      <br />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutPageContent extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/scss/global";
@import "@/scss/module/table";

%base-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  line-height: 3em;

  & > * {
    margin-top: 30px;
  }
}

.content {
  @extend %base-wrapper;
  background: theme(primary);
}

.about-box,
.activity-box {
  @extend %base-wrapper;

  &__title--black {
    color: theme(text);
  }

  &__title--green {
    height: 2em;
    font-weight: 300;
    color: theme(title);
    text-align: center;
    background-image: url(@/assets/line-green.svg);
    background-repeat: no-repeat;
    background-position: bottom;
  }

  &__description {
    width: 50%;
  }

  @include respondTo(smallTablet) {
    &__description {
      width: 90%;
    }
  }
}

.activity-box {
  &__image-slider {
    margin-top: 50px;
    width: 100vw;
    overflow: hidden;

    &--inner {
      width: 5000px;
      height: 400px;
      background-image: url(@/assets/about/gallery.jpg);
      background-repeat: repeat-x;
      animation: infinitescroll 30s linear infinite;

      @keyframes infinitescroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-1440px);
        }
      }

      @include respondTo(smallTablet) {
        animation: infinitescroll 20s linear infinite;
      }
    }
  }
}

.table-wrapper {
  @extend %base-wrapper;
  width: 50%;

  &__main {
    @extend %base-table;
  }

  &__caption {
    color: theme(text);
  }

  @include respondTo(smallTablet) {
    width: 100%;
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
