<template>
  <page-template
    :background="require('@/assets/home/home3.jpg')"
    :title-height="height"
  >
    <template v-slot:title>
      <headline
        title="Tech.Uni"
        description=" 関西学院大学「プログラミング研究会」"
      >
      </headline>
    </template>

    <template v-slot:content>
      <home-page-content></home-page-content>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import PageTemplate from "@/template/PageTemplate.vue";
import HomePageContent from "@/content/HomePageContent.vue";
import { Responsive } from "@/mixins/Responsive";
import { Mixins } from "vue-mixin-decorator";
import Headline from "@/components/module/Headline.vue";

@Component({
  components: {
    Headline,
    HomePageContent,
    PageTemplate,
  },
})
export default class Home extends Mixins<Responsive>(Responsive) {
  public get height() {
    return this.lessThanSm() ? "490px" : "780px";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";
</style>
