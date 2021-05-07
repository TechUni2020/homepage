<template>
    <div class="container">
        <!-- 読み込み中でない かつ 投稿が存在する時-->
        <div v-if="!isLoading">
            <div class="test">
                <div class="posts">
                    <card class="posts__item"
                          :post="post"
                          :key=index
                          v-for="(post,index) in posts"
                          v-scrollanimation>
                    </card>
                </div>
                <blog-category @select-category="selectCategory"/>
            </div>
            <div class="pagination">
                <r-pagination :current-page="pageNumber"
                              :total-pages="totalPages"
                              @first-page="toFirstPage"
                              @last-page="toLastPage"
                              @next-page="toNextPage"
                              @previous-page="toPreviousPage"
                              @load-page="jumpPage">
                </r-pagination>
            </div>
        </div>
        <div v-else-if="isLoading" class="loading">
            <loading-animation/>
        </div>
        <div v-if="failed">
                <span class="text_color__red">
                    <i class="fas fa-skull-crossbones fa-7x"></i>
                </span>
            <p>
                読み込みに失敗しました。<br>
                時間をおいてからもう一度アクセスしてください。
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Mixins} from 'vue-property-decorator';
    import {Action, State} from 'vuex-class';
    import Card from '@/components/Card.vue';
    import RPagination from '@/components/Pagination/RPagination.vue';
    import LoadingAnimation from '@/components/LoadingAnimation.vue';
    import {Responsive} from "@/mixins/Responsive";
    import {Post, WordpressQueries} from "@/store/Notice/types/Post";
    import BlogCategory from "@/components/BlogCategory.vue";

    Component.registerHooks([
        'beforeRouteEnter',
    ]);
    @Component({
        components: {
            BlogCategory,
            LoadingAnimation,
            RPagination,
            Card,
        },
    })
    export default class BlogPageContent extends Mixins<Responsive>(Responsive) {
        //Vuex store にマッピング
        @State posts !: Post[];
        @State totalPages !: number;
        @Action initPosts!: (wordpressQueries: WordpressQueries) => Promise<Post[]>;

        private pageNumber = 1;
        private categoryId = 0;
        // リポジトリ
        private isLoading = true;
        private failed = false;

        public created() {
            // this.initialize();
            this.$watch(
                // categoryId または pageNumber に変化あったら投稿を取得する
                () => [this.categoryId, this.pageNumber],
                () => {
                    this.initialize();
                }
            )

            if (this.$route.query.page != undefined) {
                this.pageNumber = +this.$route.query.page;
            }
            if (this.$route.query.categories != undefined) {
                this.categoryId = +this.$route.query.categories;
            } else {
                this.categoryId = 1;
            }
        }

        public initialize() {
            this.initPosts({pageNumber: this.pageNumber, categoryId: this.categoryId})
                .catch(() => {
                    this.$router.push('/404')
                })
                .finally(() => {
                    this.isLoading = false;
                })
        }

        public selectCategory(id: number) {
            this.pageNumber = 1 ;
            this.categoryId = id;
            this.rewriteURL();
        }

        //Pagination コンポーネントの機能
        public toFirstPage() {
            this.pageNumber = 1;
            this.rewriteURL();
        }

        public toLastPage(lastPage: number) {
            this.pageNumber = lastPage;
            this.rewriteURL();
        }

        public toNextPage() {
            this.pageNumber++;
            this.rewriteURL();
        }

        public toPreviousPage() {
            this.pageNumber--;
            this.rewriteURL();
        }

        public jumpPage(page: number) {
            this.pageNumber = page;
            this.rewriteURL();
        }

        /**
         * URLを書き換える
         */
        private rewriteURL() {
            this.$router.push({
                path: '/blog',
                query: {
                    page: `${this.pageNumber}`,
                    categories: `${this.categoryId}`
                }
            })
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/scss/global";

    .pagination {
        margin-top: 32px;
        margin-left: auto;
        margin-right: auto;
    }

    .test {
        padding-top: 80px;
        display: flex;
        flex-direction: row;
        @include respondTo(laptop) {
            padding-left: 10%;
            flex-direction: column;

        }
        @include respondTo(smallTablet) {
            padding-left: 0;
        }
    }

    .container {
        background-color: theme(primary);
    }

    .posts {
        margin-left: auto;
        width: 75%;
        display: grid;
        grid-template-columns: repeat(2, 400px);
        grid-gap: 50px;
        justify-items: center;
        align-items: center;

        @include respondTo(laptop) {
            width: 100%;
        }
        @include respondTo(smallTablet) {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            grid-gap: 0;
        }
    }

    .loading {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: calc(100vh - 150px - 76px * 2);
    }

    .enter {
        opacity: 0;
        transform: scale(0.8);
        transition: all 2s ease;
    }

    .enter-to {
        opacity: 1;
        transform: scale(0.9);
    }

</style>
