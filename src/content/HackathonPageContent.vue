<template>
  <div>
    <transition></transition>
    <modal-window
      v-if="showWindow"
      @close="toggleWindow"
      title="Tech.Uni独自イベント「NoCode WorkShop」について"
    >
      2021年5月23日14:00~17:00
      @zoomにてTech.Uni独自イベントとしてNoCodeWorkShopを開催します！
    </modal-window>
    <div class="main-topic">
      <h2 class="main-topic__title">イベント</h2>
      <p class="main-topic__description" v-scrollanimation>
        あるテーマに対し、各々の技術やアイデアを持ち寄り、短期間に集中してサービスやアプリケーション、
        システムなどを制作する開発イベントです!
        技術の学び、新しい人との出会い、企業の方との交流があるので是非参加してください！
      </p>
    </div>

    <div class="content">
      <div class="point-box">
        <div class="point-box__inner">
          <h2 class="point-box__inner__title">
            <span class="point-box__inner__title--decorator">1.考える</span>
          </h2>
          <p v-scrollanimation>
            電子工作、アプリ,web制作など様々なジャンルがありますが、
            興味があっても何から始めたらいいか分からない、難しそうと考えがちです。
            仲間と共に一回それらに触れてみませんか？面白かったり、
            案外簡単だったり新しい気付きがあること間違いなし！
          </p>
        </div>
        <div class="point-box__img" v-scrollanimation>
          <img src="@/assets/hackathon/think.svg" />
        </div>
      </div>

      <div class="point-box point-box--reverse">
        <div class="point-box__inner">
          <h2 class="point-box__inner__title">
            <span class="point-box__inner__title--decorator"
              >2.チームで共有</span
            >
          </h2>
          <p v-scrollanimation>
            ハッカソンでは、自分一人だけでは出来ないものが完成します。
            チームで何かを作る力は社会人ではとても重要ですが、学生のうちは案外そのような場がありません。
            仲間と協力することの大切さを感じることが出来る機会です。
          </p>
        </div>
        <div class="point-box__img" v-scrollanimation>
          <img src="@/assets/hackathon/teamwork.svg" />
        </div>
      </div>

      <div class="point-box">
        <div class="point-box__inner">
          <h2 class="point-box__inner__title">
            <span class="point-box__inner__title--decorator">3.作る</span>
          </h2>
          <p v-scrollanimation>
            ハッカソンは学部や学科の異なる人達でチームを作ります。
            新しい出会い、新しい考えに触れる絶好のチャンスです。
            最終日には協賛企業の方とも交流する機会を設け、社会人とも話すことができます。
          </p>
        </div>
        <div class="point-box__img" v-scrollanimation>
          <img src="@/assets/hackathon/build.svg" />
        </div>
      </div>

      <!-- <div class="table_wrapper" v-scrollanimation>
        <table class="base_table">
          <caption>
            募集内容
          </caption>
          <tr>
            <th>
              主な評価ポイント
            </th>
            <td>
              総合だけでなく、プロダクト、テクノロジー、アイデアの3つのカテゴリで審査します。
            </td>
          </tr>
          <tr>
            <th>
              各賞・副賞
            </th>
            <td>
              未定
            </td>
          </tr>
          <tr>
            <th>
              プログラミング言語
            </th>
            <td>
              特に問いません。
            </td>
          </tr>
          <tr>
            <th>
              活動場所
            </th>
            <td>
              アカデミックコモンズ
              <br />
              学生拠点 in 三田
            </td>
          </tr>
          <tr>
            <th>
              開催日
            </th>
            <td>
              3月25日 ~ 3月27日
            </td>
          </tr>
          <tr>
            <th>
              締め切り
            </th>
            <td>
              3月10日 (先着 22名まで）
            </td>
          </tr>
          <tr>
            <th>
              費用
            </th>
            <td>
              3000 円
            </td>
          </tr>
        </table>

        <my-button
          ext="https://docs.google.com/forms/d/e/1FAIpQLSd1UTvXU-_CoSqjUayg_AqasyBmMHh-NwXRu5ZNfmXFwG6-jA/viewform?fbzx=2241293560779228087"
        >
          応募する
        </my-button>
      </div>
    </div>

    <div class="judges">
      <h1 class="judges__title">後援団体</h1>
      <br /><br />
      <h2 class="judges__item" v-scrollanimation="'pop'">三田市商工会</h2>
      <h1 class="judges__title">協賛企業</h1>
      <br /><br />
      <div class="judges__items">
        <h2 class="judges__item" v-scrollanimation="'pop'">
          株式会社テイジイエル
        </h2>
        <h2 class="judges__item" v-scrollanimation="'pop'">スタジオMOVEDOOR</h2>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyButton from "@/components/module/MyButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";

@Component({
  components: { ModalWindow, MyButton },
})
export default class HackathonPageContent extends Vue {
  private showWindow = true;

  public toggleWindow() {
    this.showWindow = false;
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";
@import "~@/scss/module/table";

%base-wrapper {
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @include respondTo(smallTablet) {
    padding: 30px;
  }
}

.main-topic {
  @extend %base-wrapper;
  flex-direction: column;
  background-color: theme(primary);

  &__title {
    font-weight: bold;
    text-decoration: underline;
    color: theme(title);
  }

  &__description {
    margin-top: 30px;
    width: 50%;
  }

  @include respondTo(smallTablet) {
    padding: 30px;

    &__description {
      width: 100%;
    }
  }
}

.content {
  background-color: theme(primary);

  .point-box {
    @extend %base-wrapper;

    flex-direction: row;
    width: 100%;
    height: 490px;

    &__inner {
      max-width: 520px;

      &__title {
        margin-bottom: 20px;
        font-weight: 700;

        &--decorator {
          text-align: left;
          color: theme(title);
          font-weight: 500;
          font-style: italic;
          display: block;
          position: relative;
          padding-left: 55px;
          margin-bottom: 10px;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: 45px;
            height: 1px;
            background: theme(title);
          }
        }
      }
    }

    &__img {
      & > * {
        float: right;
        width: 590px;
      }
    }

    &--reverse {
      flex-flow: row-reverse nowrap;
    }

    @include respondTo(laptop) {
      flex-direction: column;
      height: auto;
      &__img {
        padding: 30px;

        & > * {
          max-width: 100%;
        }
      }
    }
  }

  .table_wrapper {
    @extend %base-table;
    @extend %base-wrapper;

    line-height: 3;

    flex-direction: column;

    & > * {
      margin-bottom: 24px;
    }

    caption {
      font-weight: bold;
      font-size: larger;
      text-align: left;

      width: 80%;
      border-bottom: 1px solid theme(border_secondary);
    }

    @include respondTo(smallTablet) {
      font-size: 14px;
      caption {
        height: 2em;
        margin-bottom: 20px;
      }
      padding: 5px;
      width: 100%;
    }
  }
}

.judges {
  @extend %base-wrapper;
  display: block;
  background-color: theme(primary);
  @include respondTo(smallTablet) {
    padding: 5px;
  }

  & > * {
    margin-left: auto;
    margin-right: auto;
  }

  &__title {
    width: 80vw;
    display: flex;
    align-items: center;
    color: theme(text);

    &:before,
    &:after {
      content: "";
      flex-grow: 1;
      height: 2px;
      background: #2fc0be;
      display: block;
    }

    @include respondTo(smallTablet) {
      width: 90vw;
    }
  }

  &__items {
    width: 60%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    @include respondTo(smallTablet) {
      width: 60vw;
    }
    @include respondTo(mobile) {
      width: 90vw;
    }
  }

  /deep/ h1 {
    @include respondTo(mobile) {
      font-size: 15px;
    }
  }

  h2 {
    color: theme(text);
    margin-bottom: 20px;
    text-align: center;
    @include respondTo(smallTablet) {
      font-size: 18px;
    }
    @include respondTo(mobile) {
      font-size: 16px;
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

.pop-enter {
  opacity: 0;
  transform: scale(0);
  transition: all 0.6s ease-in;
}

.pop-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>
