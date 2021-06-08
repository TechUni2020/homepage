<template>
  <div>
    <page-template
      :background="require('@/assets/error.jpg')"
      :title-height="height"
    >
      <template v-slot:title>
        <headline title="CONTACT" description="お問い合わせ"></headline>
      </template>

      <template v-slot:content>
        <contact-page-content></contact-page-content>
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

@Component({
  components: {
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
