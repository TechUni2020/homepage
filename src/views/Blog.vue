<template>
  <page-template
    :background="require('@/assets/blog.jpg')"
    :title-height="height"
  >
    <template v-slot:title>
      <headline title="BLOG" description="Tech.Uniからのお知らせや作品の紹介">
      </headline>
    </template>

    <template v-slot:content>
      <blog-page-content> </blog-page-content>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Pagination from "@/components/Pagination/RPagination.vue";
import Card from "@/components/Card.vue";
import PageTemplate from "@/template/PageTemplate.vue";
import BlogPageContent from "@/content/BlogPageContent.vue";
import { Mixins } from "vue-mixin-decorator";
import { Responsive } from "@/mixins/Responsive";
import Headline from "@/components/module/Headline.vue";

@Component({
  components: {
    Headline,
    BlogPageContent,
    PageTemplate,
    Pagination,
    Card,
  },
})
export default class Blog extends Mixins<Responsive>(Responsive) {
  public get height() {
    return this.lessThanSm() ? "600px" : "780px";
  }
}
</script>
