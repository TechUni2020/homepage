<template>
  <div></div>
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
@import "@/scss/global";
@import "@/scss/module/table";

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

  ::v-deep h1 {
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
