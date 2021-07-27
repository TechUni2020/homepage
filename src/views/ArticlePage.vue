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
      <div v-if="!isLoading" class="container">
        <div class="article">
          <div class="article__header">
            <h2 class="article__title">{{ currentPost.getTitle() }}</h2>
            <div class="article__time">
              <p>
                <font-awesome-icon :icon="['fas', 'calendar-alt']" />
                <span>{{ currentPost.getFormatTime() }}</span>
              </p>
            </div>
          </div>
          <div class="article__content" v-html="currentPost.getContent"></div>

          <div class="nav">
            <div
              @click="$router.push({ path: `${currentPost.getPrevPost()}` })"
            >
              <font-awesome-icon icon="chevron-left" />
              前へ
            </div>
            <div
              @click="$router.push({ path: `${currentPost.getNextPost()}` })"
            >
              次へ
              <font-awesome-icon icon="chevron-right" />
            </div>
          </div>
        </div>

        <div class="right-side">
          <div class="side-menu">
            <h2 class="side-menu__title">
              最近の投稿
            </h2>
            <ul class="side-menu__list">
              <li
                v-for="post in posts"
                :key="post.getId()"
                @click="$router.push({ path: `${post.getId()}` })"
              >
                {{ post.getTitle() }}
              </li>
            </ul>
          </div>
          <blog-category @select-category="selectCategory" />
        </div>
      </div>
      <div v-else class="loading">
        <loading-animation></loading-animation>
      </div>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Component, Mixins, Prop, Watch } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import { Post } from "@/store/Notice/types/Post";
import PageTemplate from "@/template/PageTemplate.vue";
import { Responsive } from "@/mixins/Responsive";
import LoadingAnimation from "@/components/LoadingAnimation.vue";
import Headline from "@/components/module/Headline.vue";
import BlogCategory from "@/components/BlogCategory.vue";

@Component({
  components: {
    BlogCategory,
    Headline,
    LoadingAnimation,
    PageTemplate,
  },
})
export default class ArticlePage extends Mixins<Responsive>(Responsive) {
  @State posts!: Post[];
  @Prop({ type: String, required: true })
  private id!: string;

  @State currentPost!: Post;
  @Action getOne!: (payload: { id: string }) => Promise<Post>;

  private isLoading = true;
  private show = false;

  public created() {
    this.refresh();
  }

  @Watch("id")
  public onChangePost() {
    this.refresh().then();
  }

  public onCategory(id: number) {
    this.$router.push("/blog/?page=1&categories=" + id);
  }

  public async refresh() {
    this.isLoading = true;
    this.getOne({ id: this.id })
      .catch(() => {
        this.$router.push("/not_found");
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  public selectCategory(id: number) {
    this.$router.push({
      path: "/blog",
      query: {
        categories: `${id}`,
      },
    });
  }

  public get height() {
    return this.lessThanSm() ? "300px" : "380px";
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/global";

.container {
  background: theme(primary);
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  width: 100%;

  @include respondTo(smallTablet) {
    flex-direction: column;
  }
}

.article {
  margin-left: auto;
  margin-right: auto;
  width: 60%;

  &__header {
    color: theme(text) !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    h2 {
      color: theme(text);
    }
  }

  &__time {
    float: right;
    font-size: 12px;
  }

  &__content {
    text-align: left;
    margin-top: 20px;
    word-break: break-word;
    line-height: 2.5em;
    border-radius: 5px;
    color: #1c1c1c;
  }

  @include respondTo(smallTablet) {
    width: 90%;
  }
}

::v-deep img {
  max-width: 100% !important;
  display: block;
  margin: auto;
}

.right-side {
  display: block;
  margin-right: auto;
}

.categories,
.side-menu {
  margin-top: 50px;
  line-height: 2em;

  &__title {
    color: theme(text);
    margin-bottom: 60px;

    &::after {
      content: "";
      display: inline-block;
      width: 60px;
      height: 2px;
      position: relative;
      left: -50%;
      top: 20px;
      background: linear-gradient(to right, #24d2f0 0%, #05f4b4 100%);
    }
  }

  &__list {
    list-style: none;
    cursor: pointer;
    user-select: none;

    &:focus {
      outline: none;
    }

    & > * {
      &:hover {
        color: theme(title);
      }
    }
  }

  @include respondTo(smallTablet) {
    margin-left: 10%;
  }
}

.nav {
  margin-top: 50px;
  color: theme(title);
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100vh - 150px - 76px * 2);
  background: theme(primary);
}
</style>
