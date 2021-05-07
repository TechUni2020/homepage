<template>
  <div>
    <page-template
      :background="require('@/assets/about/about.jpg')"
      :title-height="height"
    >
      <template v-slot:title>
        <headline title="ABOUT US" description="私たちについて"></headline>
      </template>

      <template v-slot:content>
        <about-page-content></about-page-content>
      </template>
    </page-template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageTemplate from "@/template/PageTemplate.vue";
import { Responsive } from "@/mixins/Responsive";
import { Mixins } from "vue-mixin-decorator";
import Headline from "@/components/module/Headline.vue";
import ContactPageContent from "@/content/ContactPageContent.vue";
import AboutPageContent from "@/content/AboutPageContent.vue";

@Component({
  components: {
    AboutPageContent,
    ContactPageContent,
    Headline,
    PageTemplate,
  },
})
export default class Hackathon extends Mixins<Responsive>(Responsive) {
  public get height() {
    return this.lessThanSm() ? "600px" : "780px";
  }
}
</script>

<style lang="scss" scoped></style>
