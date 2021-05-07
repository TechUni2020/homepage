<template>
    <div class="base-pagination">
        <base-button :disabled="isPreviousButtonDisabled"
                     @click.native="toFirstPage">
            <font-awesome-icon icon="chevron-left"/>
            <font-awesome-icon icon="chevron-left"/>
        </base-button>
        <base-button :disabled="isPreviousButtonDisabled"
                     @click.native="toPreviousPage">
            <font-awesome-icon icon="chevron-left"/>
        </base-button>

        <base-pagination-trigger v-for="paginationTrigger in paginationTriggers"
                                 :key="paginationTrigger"
                                 :pageNumber="paginationTrigger"
                                 :is-current-page="isCurrentPage(paginationTrigger)"
                                 @load-page="onLoadPage"/>

        <base-button :disabled="isNextButtonDisabled"
                     @click.native="toNextPage">
            <font-awesome-icon icon="chevron-right"/>
        </base-button>

        <base-button :disabled="isNextButtonDisabled"
                     @click.native="toLastPage">
            <font-awesome-icon icon="chevron-right"/>
            <font-awesome-icon icon="chevron-right"/>
        </base-button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import BasePaginationTrigger from '@/components/Pagination/PaginationTrigger.vue';
    import BaseButton from '@/components/Pagination/BaseButton.vue';
    import {closeRange} from '@/util/NumberRange';

    @Component({
        components: {
            BaseButton,
            BasePaginationTrigger,
        },
    })

    export default class RPagination extends Vue {
        // 表示するページ数
        private static readonly VISIBLE_PAGE_COUNT = 5;
        //
        private static readonly FIRST_VISIBLE_PAGE_RANGE = Math.floor(RPagination.VISIBLE_PAGE_COUNT / 2);
        private static readonly LAST_VISIBLE_PAGE_RANGE = Math.floor(RPagination.VISIBLE_PAGE_COUNT / 2);

        @Prop({type: Number, default: 1, required: true})
        private readonly currentPage!: number;

        @Prop({type: Number, default: 1, required: true})
        private readonly totalPages!: number;

        public get isPreviousButtonDisabled() {
            return this.currentPage === 1;
        }

        public get isNextButtonDisabled() {
            return this.currentPage === this.totalPages;
        }

        public get paginationTriggers(): number[] {
            if (this.totalPages < RPagination.VISIBLE_PAGE_COUNT) {
                // 合計ページ数 < 最大表示ページの時は[1, 合計ページ数]を返す
                return closeRange(1, this.totalPages);
            }

            if (this.currentPage + RPagination.LAST_VISIBLE_PAGE_RANGE >= this.totalPages) {
                // 表示範囲の最大値が最後のページを超える時は常に最後のVISIBLE_PAGE_COUNTページを表示する
                return closeRange(this.totalPages - RPagination.VISIBLE_PAGE_COUNT + 1, this.totalPages);
            }

            if (this.currentPage - RPagination.FIRST_VISIBLE_PAGE_RANGE <= 0) {
                // 表示範囲の最小値が0以下の時は常に最初のVISIBLE_PAGE_COUNTページを表示する
                return closeRange(1, RPagination.VISIBLE_PAGE_COUNT);
            }

            const range = [];
            const firstPart = closeRange(this.currentPage - RPagination.FIRST_VISIBLE_PAGE_RANGE, this.currentPage);
            const lastPart = closeRange(this.currentPage + 1, this.currentPage + RPagination.LAST_VISIBLE_PAGE_RANGE);
            range.push(...firstPart);
            range.push(...lastPart);

            return range;
        }

        public isCurrentPage(paginationTrigger: number) {
            return this.currentPage === paginationTrigger;
        }

        public onLoadPage(pageNumber: number) {
            if (this.currentPage === pageNumber) {
                return;
            }

            this.$emit('load-page', pageNumber);
        }

        public toFirstPage() {
            if (this.currentPage === 1) {
                return;
            }

            this.$emit('first-page');
        }

        public toLastPage() {
            if (this.currentPage === this.totalPages) {
                return;
            }

            this.$emit('last-page', this.totalPages);
        }

        public toNextPage() {
            if (this.currentPage === this.totalPages) {
                return;
            }

            this.$emit('next-page');
        }

        public toPreviousPage() {
            if (this.currentPage === 1) {
                return;
            }

            this.$emit('previous-page');
        }
    }
</script>

<style lang="scss" scoped>
    .base-pagination {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>
