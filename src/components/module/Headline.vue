<template>
  <div class="headline">
    <h1 class="headline__title">
      {{ title }}
    </h1>
    <p class="headline__description">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Headline extends Vue {
  public show: boolean = false;

  @Prop({ type: String})
  private readonly title!: string;

  @Prop({ type: String})
  private readonly description!: string;
}
</script>

<style scoped lang="scss">
  .headline{
    &__title{
       font-weight: 600;
       font-size: 3em;
     }
    &__description{
      font-weight: 500;
    }
  }
</style>
