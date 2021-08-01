<template>
    <div class="categories">
        <h2 class="categories__title">
            CATEGORY
        </h2>
        <ul class="categories__list">
            <li @click="selectCategory(0)">
                全て
            </li>
            <li v-for="category in categories"
                :key="category.Id"
                @click="selectCategory(category.Id)">
                {{category.Name}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import {Category} from "@/store/Notice/types/Category";
    import {Action, State} from 'vuex-class';

    @Component
    export default class BlogCategory extends Vue {
        @State categories !: Category[];
        @Action initCategory!: () => Promise<Category[]>;

        public created() {
            this.initCategory()
        }

        public selectCategory(id: number) {
            this.$emit('select-category', id);
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/scss/mixins/breakpoints";
    @import "@/scss/settings/theme";
    .categories {
        margin-top: 50px;
        line-height: 2em;
        margin-right: auto;

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
</style>
