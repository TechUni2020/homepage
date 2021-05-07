<template>
  <div>
    <page-template
      :background="require('@/assets/hackathon/eventmain.jpg')"
      :title-height="height"
    >
      <template v-slot:title>
        <headline
          title="EVENT"
          description=" 2021年Tech.Uni×株式会社ABABA「NoCode」イベントについて"
        >
        </headline>
      </template>

      <template v-slot:content>
        <hackathon-page-content></hackathon-page-content>
      </template>
    </page-template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTemplate from "@/template/PageTemplate.vue";
import HackathonPageContent from "@/content/HackathonPageContent.vue";
import { Responsive } from "@/mixins/Responsive";
import { Mixins } from "vue-mixin-decorator";
import Headline from "@/components/module/Headline.vue";

@Component({
  components: {
    Headline,
    HackathonPageContent,
    PageTemplate,
  },
})
export default class Hackathon extends Mixins<Responsive>(Responsive) {
  public get height() {
    return this.lessThanSm() ? "600px" : "780px";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/global";
</style>
